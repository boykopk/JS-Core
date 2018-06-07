function inventory(strArr) {

    let heroData = [];

    for (let heroes of strArr) {
        let [hero, level, items] = heroes.split(/\s\/\s?/g);

        let currentHero = {};

        if (items === undefined){
            currentHero = {
                'name': hero,
                'level': Number(level),
                'items': []
            };
        }else {
            currentHero = {
                'name': hero,
                'level': Number(level),
                'items': items.split(', ')
            };
        }

        heroData.push(currentHero);
    }

    console.log(JSON.stringify(heroData));
}

inventory([
'Isacc / 25 / Apple, GravityGun',
'Derek / 12 / BarrelVest, DestructionSword',
'Hes / 1 / Desolator, Sentinel, Antara',
]);

inventory(['Jake / 1000 / Gauss, HolidayGrenade']);