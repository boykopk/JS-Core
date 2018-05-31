function aggregateTable(string) {

    let arrayCity = [];
    let sum = 0;
    for (let i = 0; i < string.length; i++) {
        let each = string[i].split("|");

        arrayCity.push(each[1].trim());
        sum += Number(each[2].trim());
    }
    console.log(arrayCity.join(', '));
    console.log(sum);
}

aggregateTable(['| Sofia           | 300',
    '| Veliko Tarnovo  | 500',
    '| Yambol          | 275']
);