function splitString(string, delimiter) {
    let result = string.split(delimiter);

    console.log(result.join(`\n`));
}

splitString('One-Two-Three-Four-Five', '-');
splitString('http://platform.softuni.bg', '.');