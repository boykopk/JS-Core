function captureNumbers(arr) {
    let pattern = /\d+/g;

    let result = [];

    for (let line of arr) {
        let match = line.match(pattern);

        if (match === null) {
            continue;
        }

        for (let num of match) {
            result.push(num);
        }
    }

    console.log(result.join(' '));

}

captureNumbers(['The300', 'What is that?', 'I think it’s the 3rd movie.', 'Lets watch it at 22:45']);