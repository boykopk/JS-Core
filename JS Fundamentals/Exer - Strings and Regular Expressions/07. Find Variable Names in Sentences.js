function findVariableNames(text) {
    let pattern = /\b(?:_)([a-zA-Z0-9]+)\b/gm;

    let result = [];

    let match = pattern.exec(text);

    while (match) {
        result.push(match[1]);

        match = pattern.exec(text);
    }

    console.log(result.join(','));
    
}

findVariableNames('The _id and _age variables are both integers.');