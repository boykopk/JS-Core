function rounding(arr) {
    let number = arr[0];
    let precision = arr[1];

    if (precision > 15) {
        precision = 15;
    }

    let numStr = number
        .toString()
        .split('.');
    let afterDec = numStr[1].length;

    if (precision > afterDec) {
        precision = afterDec;
    }

    console.log(number.toFixed(precision));
}

rounding([3.1415926535897932384626433832795, 2]);
rounding([10.5, 3]);