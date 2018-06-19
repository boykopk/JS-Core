function solve(a1, a2, a3, a4, a5) {
    let lostFights = Number(a1);
    let helmetPrice = parseFloat(a2);
    let swordPrice = parseFloat(a3);
    let shieldPrice = parseFloat(a4);
    let armorPrice = parseFloat(a5);

    let helmetCount = 0;
    let swordCount = 0;
    let shieldCount = 0;
    let armorCount = 0;

    for (let i = 2; i <= lostFights; i++) {
        if (i % 2 === 0) {
            helmetCount++;
        }
        if (i % 3 === 0) {
            swordCount++;
        }
        if (i % 2 === 0 && i % 3 === 0) {
            shieldCount++;
            if (shieldCount % 2 === 0 && shieldCount > 0) {
                armorCount++;
            }
        }
    }

    let expenses = helmetCount * helmetPrice + swordCount * swordPrice + shieldCount * shieldPrice + armorCount * armorPrice;
    console.log(`Gladiator expenses: ${expenses.toFixed(2)} aureus`);
}

//solve(7, 2, 3, 4, 5);
solve(23, 12.50, 21.50, 40, 200)
