function concatenateReverse(arr) {

    let result = Array.from(arr.join('')).reverse().join('');

    console.log(result);
}

concatenateReverse(['I', 'am', 'student']);
concatenateReverse(['race', 'car']);