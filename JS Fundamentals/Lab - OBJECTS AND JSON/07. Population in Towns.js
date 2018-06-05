function townPopulation(strArr) {
    let towns = new Map();
    for (let row of strArr) {
        let [name, population] = row.split(' <-> ');
        if (!towns.has(name)) {
            towns.set(name, 0);
        }
        towns.set(name, towns.get(name) + Number(population));
    }
    [...towns].forEach(([town, population]) => console.log(`${town} : ${population}`));

}

townPopulation([
    'Sofia <-> 1200000',
    'Montana <-> 20000',
    'New York <-> 10000',
    'Washington <-> 234',
    'Las Vegas <-> 1000'
]);