function getInfo() {
    let stopId = $('#stopId').val();
    let list = $('#buses');
    list.empty();

    let url = `https://judgetests.firebaseio.com/businfo/${stopId}.json`;

    let getRequest = {
        method: 'GET',
        url: url,
        success: displayBusStopInfo,
        error: displayError
    };

    $.ajax(getRequest);


    function displayBusStopInfo(busStopInfo) {
        $('#stopName').text(busStopInfo.name);
        let buses = busStopInfo.buses;
        for (let busNumber in buses) {
            let liItem = $('<li>');
            liItem.text(`Bus ${busNumber} arrives in ${buses[busNumber]} minutes`);
            list.append(liItem);
        }
    }

    function displayError() {
        $('#stopName').text('Error');
    }
}