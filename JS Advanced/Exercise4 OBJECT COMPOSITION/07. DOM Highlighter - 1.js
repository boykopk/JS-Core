function domTraversal(sel) {
    let selector = $(sel);
    let maxDepth = 0;
    let maxDepthElement = selector;

    findDeapest(maxDepth, selector);

    maxDepthElement.addClass('highlight');
    maxDepthElement.parents().addClass('highlight');
    selector.parents().removeClass('highlight');
    
    function findDeapest(depth, element) {
        if (depth > maxDepth) {
            maxDepth = depth;
            maxDepthElement = $(element);
        }
        $(element).children().each((index, element) => findDeapest(depth + 1, element));
    }
}