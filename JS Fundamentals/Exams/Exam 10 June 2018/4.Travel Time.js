function solve(arrStr) {
    let result = {};
    for (let i = 0; i < arrStr.length; i++) {
        let input = arrStr[i].split(' > ');
        let country = input[0];
        let city = input[1];
        let first = city.toString()[0].toUpperCase();
        city = city.substr(1);
        city = first + city;
        let cost = Number(input[2]);
        if(result.hasOwnProperty(country)) {
            if(result[country].hasOwnProperty(city)) {
                if (result[country][city] > cost)
                result[country][city] = cost;
            } else {
                result[country][city] = cost;
            }
        } else {
            result[country] = {};
            result[country][city] = cost;
        }
    }
    let p = Object.keys(result);
    p.sort();
    for (let i = 0; i < p.length; i++) {
        let currentCountry = p[i];

        var sortable = [];
        for (let key in result[currentCountry]) {
            sortable.push([key, result[currentCountry][key]]);
        }

        sortable.sort(function(a, b) {
            return a[1] - b[1];
        });
        let print = `${currentCountry} -> `;
        for (let key of sortable) {
            let city = key[0];
            let x = key[1];
            print += `${city} -> ${x} `;
        }
        console.log(print)
    }

}

solve(["Bulgaria > Sofia > 500",
    "Bulgaria > Sopot > 800",
    "France > Paris > 2000",
    "Albania > Tirana > 1000",
    "Bulgaria > Sofia > 200" ]
);