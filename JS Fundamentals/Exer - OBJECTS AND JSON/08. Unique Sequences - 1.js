function uniqueSequences(strArr) {
    let uniqueSeqMap = new Map();

    for (let row of strArr) {
        let numArr = JSON.parse(row).map(Number).sort((a, b) => b - a);
        let currentSum = numArr.reduce((a, b) => a + b);
        if (!uniqueSeqMap.has(currentSum)) {
            uniqueSeqMap.set(currentSum, numArr);
        }
    }

    let sortedMap = [...uniqueSeqMap.entries()]
        .sort(sortByLength);
    for (let [sum, arr] of sortedMap) {
        console.log(`[${arr.join(', ')}]`);
    }

    function sortByLength(a, b) {
        let aLen = a[1].length;
        let bLen = b[1].length;

        return aLen - bLen;
    }
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