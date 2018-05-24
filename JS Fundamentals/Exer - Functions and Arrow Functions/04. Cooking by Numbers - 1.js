function cookingByNumbers(arr) {
    let start = Number(arr[0]);

    let chop = (num) => num / 2;
    let dice = (num) => Math.sqrt(num);
    let spice = (num) => num + 1;
    let bake = (num) => num * 3;
    let fillet = (num) => num -= num * 0.2;

    for (i = 1; i <= 5; i++) {
        let op = arr[i];
        switch (op) {
            case 'chop':
                start = chop(start);
                break;
            case 'dice':
                start = dice(start);
                break;
            case 'spice':
                start = spice(start);
                break;
            case 'bake':
                start = bake(start);
                break;
            case 'fillet':
                start = fillet(start);
                break;
        }
        console.log(start);
    }
}

cookingByNumbers(['32', 'chop', 'chop', 'chop', 'chop', 'chop']);