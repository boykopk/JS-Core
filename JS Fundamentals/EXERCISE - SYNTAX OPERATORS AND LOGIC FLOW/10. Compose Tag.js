function composeTag(arr) {
    let location = arr[0];
    let text = arr[1];

    console.log(`<img src="${location}" alt="${text}">`);
}

composeTag(['smiley.gif', 'Smiley Face']);