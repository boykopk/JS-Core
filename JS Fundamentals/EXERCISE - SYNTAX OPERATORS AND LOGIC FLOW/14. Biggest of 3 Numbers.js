function biggestNumber(arr) {
    let n1 = arr[0];
    let n2 = arr[1];
    let n3 = arr[2];

    let biggest = Math.max(n1, n2, n3);

    console.log(biggest);
}

biggestNumber([5, -2, 7]);