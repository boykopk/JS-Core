function juice(strArr) {
    let flavoursObj = {};
    let bottlesObj = {};

    for (let row of strArr) {
        let [juiceName, quantity] = row.split(/\s=>\s/g);
        quantity = Number(quantity);

        if (!flavoursObj.hasOwnProperty(juiceName)) {
            flavoursObj[juiceName] = quantity;
        } else {
            flavoursObj[juiceName] += quantity;
        }

        quantity = flavoursObj[juiceName];

        if (quantity >= 1000) {
            let bottleCount = Math.floor(quantity / 1000);
            bottlesObj[juiceName] = bottleCount;
        }
    }

    for (let juiceName in bottlesObj) {
        console.log(`${juiceName} => ${bottlesObj[juiceName]}`);
    }
}

juice([
    'Kiwi => 234',
    'Pear => 2345',
    'Watermelon => 3456',
    'Kiwi => 4567',
    'Pear => 5678',
    'Watermelon => 6789'
]);

juice([
    'Orange => 2000',
    'Peach => 1432',
    'Banana => 450',
    'Peach => 600',
    'Strawberry => 549'
]);