function solve(arrStr) {
    let startPoint = Number(arrStr[0]);
    let endPoint = Number(arrStr[1]);
    let count = endPoint - startPoint;
    let rightWord = arrStr[2];
    let text = arrStr[3];

    let match1 = /\b[A-Z][a-z]+[A-Z]/.exec(text);
    let country = match1[0].split('');
    country[country.length - 1] = country[country.length - 1].toLowerCase();
    country.splice(startPoint, count + 1);
    country.splice(startPoint, 0, rightWord);
    country = country.join('');

    let pattern = /([0-9]{3}([.][0-9]*)?)/gm;
    let match2;

    let kod = '';
    while (match2 = pattern.exec(text)) {
        let number = +match2[1];

        if (number % 1 !== 0) {
            number = Math.ceil(number);
        }
        kod += String.fromCharCode(number);
    }

    kod = kod.toLowerCase();
    kod = kod.charAt(0).toUpperCase() + kod.slice(1);
    console.log(`${country} => ${kod}`);
}


solve(["3", "5", "gar","114 sDfia 1, riDl10 confin$4%#ed117 likewise it humanity aTe114.223432 BultoriA - Varnd railLery101 an unpacked as he"]);
solve(["1", "4","loveni", "SerbiA 67 – sDf1d17ia aTe 1, 108 confin$4%#ed likewise it humanity  Bulg35aria - VarnA railLery1a0s1 111 an unpacked as 109 he"]);