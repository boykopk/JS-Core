function usernames(strArr) {
    let users = new Set();

    for (let username of strArr) {
        users.add(username);
    }

    users = [...users].sort((a, b) => {
        if (a.length < b.length) return -1;
        if (a.length > b.length) return 1;
        if (a < b) return -1;
        if (a > b) return 1;
    });

    users.forEach(e => console.log(e));
}

usernames([
    'Ashton',
    'Kutcher',
    'Ariel',
    'Lilly',
    'Keyden',
    'Aizen',
    'Billy',
    'Braston'
]);