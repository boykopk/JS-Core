function wordOccurences(text, word) {
    let pattern = RegExp('\\b' + word + '\\b', 'gi');

    let match = pattern.exec(text);

    let counter = 0;

    while  (match) {
        counter++;
        match = pattern.exec(text);
    }

    console.log(counter);
}

wordOccurences('The waterfall was so high, that the child couldn’t see its peak.', 'the');