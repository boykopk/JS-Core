function compoundinterest(arr) {
    let principalSum = arr[0];
    let interestRate = arr[1] / 100;
    let compoundingFrequency = 12 / arr[2];
    let totalTimespan = arr[3];

    let F = principalSum * Math.pow(1 + (interestRate / compoundingFrequency), compoundingFrequency * totalTimespan);

    console.log(F.toFixed(2));
}

compoundinterest([1500, 4.3, 3, 6]);