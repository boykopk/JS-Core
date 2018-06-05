function wordCounter(arr) {
    let tokens = arr[0].split(/\W+/g).filter(e => e !== '');

    let output = {};

    for (let word of tokens) {
        if (!output.hasOwnProperty(word)){
            output[word] = 0;
        }
        output[word]++;
    }
    console.log(JSON.stringify(output));
}

wordCounter(['Far too slow, you\'re far too slow.']);