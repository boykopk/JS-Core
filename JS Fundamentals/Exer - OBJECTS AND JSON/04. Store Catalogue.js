function catalogue(strArr) {
    let initialsMap = new Map();

    for (let row of strArr) {
        let [productsName, productsPrice] = row.split(/\s:\s/g);
        let initial = productsName[0];
        if (!initialsMap.has(initial)) {
            initialsMap.set(initial, new  Map());
        }

        let productsMap = initialsMap.get(initial);
        productsMap.set(productsName, productsPrice);

    }

    let sortedInitials = [...initialsMap.entries()]
        .sort(sortAlphabetically);
    for (let [initial, productsMap] of sortedInitials) {
        console.log(initial);
        let sortedProducts = [...productsMap.entries()]
            .sort(sortAlphabetically);
        for (let [name, price] of sortedProducts) {
            console.log(`  ${name}: ${price}`);
        }
    }

    function sortAlphabetically(a, b) {
        return a[0].localeCompare(b[0]);
    }
}

catalogue([
    "Banana : 2",
    "Rubic's Cube : 5",
    "Raspberry P : 4999",
    "Rolex : 100000",
    "Rollon : 10",
    "Rali Car : 2000000",
    "Pesho : 0.000001",
    "Barrel : 10"
]);