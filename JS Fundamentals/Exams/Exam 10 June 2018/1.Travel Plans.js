function solve(arrStr) {
    let spec = 'Programming, Hardware maintenance, Cooking, Translating, Designing';
    let average = 'Driving, Managing, Fishing, Gardening';
    let clumsy = 'Singing, Accounting, Teaching, Exam-Making, Acting, Writing, Lecturing, Modeling, Nursing';
    let sum = 0;
    let counterSpec = 0;
    let counterClumsy = 0;

    for (let i = 0; i < arrStr.length; i++) {
        let input = arrStr[i].split(' : ');
        let profession = input[0];
        let gold = parseFloat(input[1]);

        if (spec.includes(profession)) {
            if (gold >= 200) {
                sum += gold * 0.8;
                counterSpec++;
                if (counterSpec % 2 === 0) {
                    sum += 200;
                }
            }
        } else if (clumsy.includes(profession)) {
            counterClumsy++;
            if (counterClumsy === 1) {
                sum += gold;
            } else if (counterClumsy % 2 === 0) {
                sum = sum + gold - (gold * 0.05);
            } else if (counterClumsy % 3 === 0) {
                sum += gold - (gold * 0.1);
            } else {
                sum += gold;
            }

        } else {
            sum += gold;
        }

    }

    console.log(`Final sum: ${sum.toFixed(2)}`);
    if (sum > 1000) {
        console.log(`Mariyka earned ${(sum - 1000).toFixed(2)} gold more.`)
    } else {
        console.log(`Mariyka need to earn ${(1000 - sum).toFixed(2)} gold more to continue in the next task.`)
    }
}

solve(["Programming : 500", "Driving : 243", "Singing : 100", "Cooking : 199"]);
solve(["Programming : 500", "Driving : 243.55", "Acting : 200", "Singing : 100", "Cooking : 199", "Hardware maintenance : 800", "Gardening : 700", "Programming : 500"])

