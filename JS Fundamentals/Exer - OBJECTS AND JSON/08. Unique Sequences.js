function uniqueSequences(strArr) {
    let uniqueSeq = [];

    for (let row of strArr) {
        let numArr = JSON.parse(row)
            .map(Number)
            .sort((a, b) => b - a);
        let currentSum = numArr.reduce((a, b) => a + b);
        if (!uniqueSeq.find(arr =>
                arr.reduce((a, b) => a + b) === currentSum)) {
            uniqueSeq.push(numArr);
        }
    }

    uniqueSeq.sort((a, b) => a.length > b.length)
        .forEach(arr => console.log(`[${arr.join(', ')}]`));
}

uniqueSequences([
    '[-3, -2, -1, 0, 1, 2, 3, 4]',
    '[10, 1, -17, 0, 2, 13]',
    '[4, -3, 3, -2, 2, -1, 1, 0]'
]);

uniqueSequences([
    '[7.14, 7.180, 7.339, 80.0990000000000]',
    '[7.339, 80.0990, 7.140000, 7.18]',
    '[7.339, 7.180, 7.14, 80.099]'
]);