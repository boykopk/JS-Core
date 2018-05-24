function matrixMaxNum(matrix) {
    console.log(
        matrix.map(arr => arr.sort((a,b) => a < b)[0])
            .sort((a,b) => a<b)[0]
    );

}

matrixMaxNum([[3, 5, 17],
    [-1, 7, 14],
    [1, -8, 89]]
);