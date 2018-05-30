function printN(arr) {
    let step = arr.pop();

    let newArr = arr.filter((e, i) => i % step === 0);

    console.log(newArr.join('\n'));
}

printN([5, 20, 31, 4, 20, 2]);