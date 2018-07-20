function attachEvents() {
    $('#refresh').click(attachRefresh);
    $('#submit').click(attachSend);

    function attachSend() {
        let messageJson = {
            "author": $('#author').val(),
            "content": $('#content').val(),
            "timestamp": Date.now()
        };

        let sendMessageRequest = {
            url: 'https://messanger-6b81d.firebaseio.com/messenger/.json',
            method: 'POST',
            data: JSON.stringify(messageJson),
            success: attachRefresh
        };

        $.ajax(sendMessageRequest);
    }
    
    function attachRefresh() {
        $.get('https://messanger-6b81d.firebaseio.com/messenger/.json')
            .then(displayMessages);
    }

    function displayMessages(messages) {
        let output = $('#messages');
        output.empty();
        let messagesStr = '';
        for (let key in messages){
            messagesStr += `${messages[key]["author"]}: ${messages[key]["content"]}\n`
        }

        output.text(messagesStr);
    }
}