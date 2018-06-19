function solve(input) {
    let startPoint = Number(input[0]);
    let endPoint = Number(input[1]);
    let rightWord = input[2];
    let sentance = input[3];

    let numsPattern = /[0-9]{3}(\.[0-9]+)*/gm;
    let nums = sentance.match(numsPattern);
    nums = nums.map(Number).map(x => Math.ceil(x));

    console.log(nums)

    let capitalsPattern = /[A-Z][a-z]+[A-Z]/gm;
    let capitals = sentance.match(capitalsPattern);

    for (let index = 0; index < capitals.length; index++) {
        capitals[index] = capitals[index].slice(0, startPoint) + rightWord + capitals[index].slice(endPoint + 1);
        let word = capitals[index].slice(0, capitals[index].length - 1) + capitals[index][capitals[index].length - 1].toLowerCase();
        capitals[index] = word;
    }
    let outputSec = "";
    for (let index = 0; index < nums.length; index++) {
        if (index === 0) {
            outputSec += String.fromCharCode(nums[index]).toUpperCase();
        }
        else {
            outputSec += String.fromCharCode(nums[index]);
        }
    }
    console.log(`${capitals[0]} => ${outputSec}`);
}

solve(["3", "5", "gar","114 sDfia 1, riDl10 confin$4%#ed117 likewise it humanity aTe114.223432 BultoriA - Varnd railLery101 an unpacked as he"]);
solve(["1", "4","loveni", "SerbiA 67 – sDf1d17ia aTe 1, 108 confin$4%#ed likewise it humanity  Bulg35aria - VarnA railLery1a0s1 111 an unpacked as 109 he"]);