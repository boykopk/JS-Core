function solve(arrStr) {
    let delimiter = arrStr[1];
    let company = arrStr.shift().split(delimiter);
    arrStr.shift();

    let valid = [];
    let invalid = [];
    let currentValid = 1;
    let currentInvalid = 1;

    for (let i= 0; i < arrStr.length; i++) {
        let current = arrStr[i].toLowerCase();

        if (current.includes(company[0]) && current.includes(company[1]) && current.includes(company[2])) {
            current = `${currentValid}. ` + current;
            valid.push(current);
            currentValid++;
        } else  {
            current = `${currentInvalid}. ` + current;
            invalid.push(current);
            currentInvalid++;
        }

    }
    if (typeof valid[0] !== 'undefined') {
        console.log('ValidSentences');
        console.log(valid.join('\n'));
        if (typeof invalid[0] !== 'undefined') {
            console.log('==============================');
            console.log('InvalidSentences');
            console.log(invalid.join('\n'));
        }
    } else if (typeof invalid[0] !== 'undefined') {
        console.log('InvalidSentences');
        console.log(invalid.join('\n'));
    }
}

solve(["bulgariatour@, minkatrans@, koftipochivkaltd",
    "@,",
    "Mincho e KoftiPochivkaLTD Tip 123  ve MinkaTrans BulgariaTour",
    "dqdo mraz some text but is KoftiPochivkaLTD MinkaTrans",
    "someone continues as no "]
);

solve(["bulgariatour@, minkatrans@, koftipochivkaltd",
    "@,",
    "Mincho  e KoftiPochivkaLTD Tip 123  ve MinkaTrans BulgariaTour",
    "We will koftipochivkaLTD travel e expenses no MinkaTrans mu e BulgariaTour",
    "dqdo BuLGariaTOUR mraz some text but is KoftiPochivkaLTD minkaTRANS"]
);