function capitalizeWords(text) {
    let resultArray = text.split(" ");

    for (let i = 0; i < resultArray.length; i++) {
        resultArray[i] = resultArray[i].charAt(0).toUpperCase() + resultArray[i].substr(1).toLowerCase();
    }

    console.log(resultArray.join(" "));
}

capitalizeWords("Was that Easy? tRY thIs onE for SiZe!");