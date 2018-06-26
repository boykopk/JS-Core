function highlight(selector) {
    let deepestPath = 0;
    let deepestElement;
    let allLeafElements = $(`${selector} *:not(:has(*))`);
    allLeafElements.each(function (index, element) {
        let currentDeepnessLevel = 0;
        let origianLeaf = element;
        while (element) {
            currentDeepnessLevel++;
            element = $(element).parent()[0];
        }
        if (currentDeepnessLevel > deepestPath) {
            deepestPath = currentDeepnessLevel;
            deepestElement = origianLeaf;
        }
    });

    let selectedElement = $(selector)[0];

    while (deepestElement && deepestElement !== selectedElement) {
        $(deepestElement).addClass('highlight');
        deepestElement = $(deepestElement).parent()[0];
    }

    $(selector).addClass('highlight');
}