function addAndRemoveElementsFromArray(arr) {
    let result = [];
    let number = 1;

    for (let i = 0; i < arr.length; i++) {
        if(arr[i] === 'add') {
            result.push(number);
        } else {
            result.pop();
        }

        number++;
    }

    if(result.length === 0) {
        console.log("Empty");
    } else {
        console.log(result.join('\r\n'));
    }
}

addAndRemoveElementsFromArray(['add', 'add', 'add', 'add']);
addAndRemoveElementsFromArray(['add', 'add', 'remove', 'add', 'add']);
addAndRemoveElementsFromArray(['remove', 'remove', 'remove']);