function extractLinks(arr) {
    let pattern = /www\.[a-zA-Z0-9-]+(\.[a-z]+)+/gm;

    let result = [];

    for (let line of arr) {
        let match = pattern.exec(line);

        while  (match) {
            result.push(match[0]);
            match = pattern.exec(line);
        }
    }
    console.log(result.join('\n'));
}

extractLinks(['Need information about cheap hotels in London?', 'You can check us at www.london-hotels.co.uk!', 'We provide the best services in London.', 'Here are some reviews in some blogs:','"London Hotels are awesome!" - www.indigo.bloggers.com','"I am very satisfied with their services" - ww.ivan.bg','"Best Hotel Services!" - www.rebel21.sedecrem.moc']);