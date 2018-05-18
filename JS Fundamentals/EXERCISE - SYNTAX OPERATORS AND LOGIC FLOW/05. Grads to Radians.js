function convert(grad) {
    grad = grad % 400;
    let degree = grad * 0.9;
    if (degree < 0) {
        degree = 360 + degree;
    }
    console.log(degree);
}