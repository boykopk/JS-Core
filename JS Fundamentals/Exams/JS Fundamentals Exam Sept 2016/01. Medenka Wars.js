function solve(arrStr) {
    const medenkaDamage = 60;
    let damageVictor = 0;
    let damageNaskor = 0;

    let naskorPreviousAttack = -1;
    let naskorConsecutiveAttacks = 0;

    let vitkorPreviousAttack = -1;

    for (let i = 0; i < arrStr.length; i++) {
        let input = arrStr[i].split(' ');
        let currentDamage = Number(input[0]) * medenkaDamage;
        let currentLord = input[1];

        if (currentLord === 'white') {
            if (currentDamage === vitkorPreviousAttack) {
                currentDamage *= 2.75;
            }

            damageVictor += currentDamage;
            vitkorPreviousAttack = currentDamage;
        } else {
            if (currentDamage === naskorPreviousAttack) {
                naskorConsecutiveAttacks++;
                if (naskorConsecutiveAttacks === 5) {
                    currentDamage *= 4.5;
                    naskorConsecutiveAttacks = 0;
                }
            } else {
                naskorPreviousAttack = currentDamage;
                naskorConsecutiveAttacks++;
            }

            damageNaskor += currentDamage;
        }
    }

    if (damageVictor > damageNaskor) {
        console.log('Winner - Vitkor');
        console.log(`Damage - ${damageVictor}`);
    } else {
        console.log('Winner - Naskor');
        console.log(`Damage - ${damageNaskor}`);
    }
}

solve([
    '2 dark medenkas',
    '1 white medenkas',
    '2 dark medenkas',
    '2 dark medenkas',
    '15 white medenkas',
    '2 dark medenkas',
    '2 dark medenkas'
]);
