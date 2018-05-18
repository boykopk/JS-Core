function imperialUnits(input) {
    let feet = input;
    let inches = 0;

    inches = Math.floor(feet / 12);
    feet = feet % 12;

    console.log(inches + '\'-' + feet + '\"')
}

imperialUnits(36);
imperialUnits(55);
imperialUnits(11);