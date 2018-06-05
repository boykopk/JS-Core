function scoreToHTML(json) {
    let html = '<table>\n';
    html += '  <tr><th>name</th><th>score</th></tr>\n';
    let scores = JSON.parse(json);

    for (let score of scores) {
        html += '  <tr>';
        html += `<td>${escapeHTML(score.name)}</td>`;
        html += `<td>${Number(score.score)}</td>`;
        html += '</tr>\n';
    }

    html += '</table>';

    console.log(html);

    function escapeHTML(text) {
        let map = {
            '"': '&quot;',
            '&': '&amp;',
            "'": '&#39;',
            '<': '&lt;',
            '>': '&gt;',
        };

        return text.replace(/[\\"&'<>]/g, c => map[c]);
    }
}

scoreToHTML('[{"name":"Pesho","score":479},{"name":"Gosho","score":205}]');
scoreToHTML('[{"name":"Pesho & Kiro","score":479},{"name":"Gosho, Maria & Viki","score":205}]');