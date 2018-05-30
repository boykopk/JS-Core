function diagonalAttack(arr) {
    let matrix = [];
    for (let i = 0; i < arr.length; i++) {
        matrix.push(arr[i].split(' ').map(Number));
    }

    let primeryDiagonalSum = 0;
    let secondDiagonalSum = 0;
    for (let row = 0; row < matrix.length; row++) {
        for (let col = 0; col < matrix[row].length; col++) {
            if (row === col) {
                primeryDiagonalSum += matrix[row][col];
            }

            if (col === matrix[row].length - row - 1) {
                secondDiagonalSum += matrix[row][col];
            }

        }
    }

    if (primeryDiagonalSum === secondDiagonalSum) {
        for (let row = 0; row < matrix.length; row++) {
            for (let col = 0; col < matrix[row].length; col++) {
                if (row !== col && col !== matrix.length - 1 - row) {
                    matrix[row][col] = primeryDiagonalSum;
                }
            }
        }
    }

    let result = matrix.map(row => row.join(' ')).join('\n');
    console.log(result);
}

diagonalAttack(['5 3 12 3 1',
                '11 4 23 2 5',
                '101 12 3 21 10',
                '1 4 5 2 2',
                '5 22 33 11 1']
);