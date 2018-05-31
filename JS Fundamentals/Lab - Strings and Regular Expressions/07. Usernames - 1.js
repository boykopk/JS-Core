function usernames(arr) {
    for (let index in arr) {
        let [username, rest] = arr[index].split('@');
        arr[index] = username + '.' + rest.split('.').map(a => a[0]).join('');
    }
    console.log(arr.join(', '));
}

usernames(['peshoo@gmail.com', 'todor_43@mail.dir.bg', 'foo@bar.com']);