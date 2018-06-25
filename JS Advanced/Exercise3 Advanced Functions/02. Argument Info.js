function result() {
    let argTypes = {};
    arguments;
    for (let index = 0; index < arguments.length; index++) {
        let argValue = arguments[index];
        console.log(`${typeof argValue}: ${argValue}`);

        if (!argTypes.hasOwnProperty(typeof argValue)) {
            argTypes[typeof argValue] = 1;
        } else {
            argTypes[typeof argValue]++;
        }
    }

    let sortedArr = [];
    for (let argType in argTypes) {
        if (argTypes.hasOwnProperty(argType)) {
            let element = argTypes[argType];
            sortedArr.push([argType, element]);
        }
    }
    sortedArr.sort((a, b) => {
        return b[1] - a[1]
    });

    for (let i = 0; i < sortedArr.length; i++) {
        let element = sortedArr[i];
        let argumentType = element[0];
        let argumentCount = element[1];
        console.log(`${argumentType} = ${argumentCount}`);
    }
}

result(42, 'cat', [], 1);