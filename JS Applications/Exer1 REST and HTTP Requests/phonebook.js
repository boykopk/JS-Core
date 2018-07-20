function attachEvents() {
    $('#btnLoad').on('click', loadPhonebook);
    $('#btnCreate').on('click', createPhone);

    function createPhone() {
        let phonebookJSON = {
            person: $('#person').val(),
            phone: $('#phone').val()
        };

        $('#person').val('');
        $('#phone').val('');

        let createRequest = {
            method: 'POST',
            url: 'https://phonebook-nakov.firebaseio.com/phonebook.json',
            data: JSON.stringify(phonebookJSON),
            success: loadPhonebook,
            error: showError
        };

        $.ajax(createRequest);
    }
    
    function loadPhonebook() {
        let loadRequest = {
            method: 'GET',
            url: 'https://phonebook-nakov.firebaseio.com/phonebook.json',
            success: displayPhones,
            error: showError
        };

        $.ajax(loadRequest);
    }
    
    function displayPhones(phones) {
        let list = $('#phonebook');
        list.empty();
        for (let key in phones) {
            let person = phones[key]['person'];
            let phone = phones[key]['phone'];
            let btnDelete = $('<button>[Delete]</button>')
                .on('click', deleteItem.bind(this, key));
            let liItem = $('<li>')
                .text(`${person}: ${phone} `)
                .append(btnDelete);
            list.append(liItem);
        }
    }
    
    function showError() {
        $('#phonebook').append($('<li>').text('Error'));
    }

    function deleteItem(key) {
        let deleteRequest = {
            method: 'DELETE',
            url: `https://phonebook-nakov.firebaseio.com/phonebook/${key}.json`,
            success: loadPhonebook,
            error: showError
        };

        $.ajax(deleteRequest);
    }

}