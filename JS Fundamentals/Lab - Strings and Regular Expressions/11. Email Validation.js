function email(str) {

    let regex = /^[A-Za-z0-9]+@[a-z]+\.[a-z]+$/;

    return regex.test(str) ? 'Valid' : 'Invalid';
}

email('valid@email.bg');
email('invalid@emai1.bg');