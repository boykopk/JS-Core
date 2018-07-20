const URL = 'https://phonebook-e915d.firebaseio.com/phonebook';
const person = $('#person');
const phone = $('#phone');

$('#btnLoad').on('click', loadData);
$('#btnCreate').on('click', postData);

function loadData() {
    $('#phonebook').empty();
    $.ajax({
        method: 'GET',
        url: URL + '.json'
    }).then(handleSuccess)
        .catch(handleError);

    function handleSuccess(res) {
        for (let key in res) {
            generateLi(res[key].person, res[key].phone, key);
        }
    }
}

function postData() {
    let name = person.val();
    let phoneVal = phone.val();

    if (name.trim() !== '' && phoneVal.trim() !== '') {
        $.ajax({
            method: 'POST',
            url: URL + '.json',
            data: JSON.stringify({name, phoneVal}),
            success: appendElement,
            error: handleError
        });
    }

    function appendElement(res) {
        generateLi(name, phoneVal, res.name)
    }

    person.val('');
    phone.val('');
}

function generateLi(name, phone, key) {
    let li = $(`<li>${name}: ${phone} </li>`)
        .append($('<button href="#">[Delete]</button>')
            .on('click',  function () {
                $.ajax({
                    method: 'DELETE',
                    url: URL + '/' + key + '.json'
                }).then(() => $(li).remove())
                    .catch(handleError)
            }));
    $('#phonebook').append(li);
}

function handleError(err) {
    console.log(err);
}