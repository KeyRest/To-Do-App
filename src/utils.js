export function getCurrentDate(separator = '-') {

    let newDate = new Date()
    let date = newDate.getDate();
    let month = newDate.getMonth() + 1;
    let year = newDate.getFullYear();

    return `${date}${separator}${month < 10 ? `0${month}` : `${month}`}${separator}${year}`
}


 export function showSignUp() {
    document.getElementById('sign-in').classList.add('hidden');
    document.getElementById('sign-up').classList.remove('hidden');
    document.getElementById('sign-up-link').classList.add('active');
    document.getElementById('sign-in-link').classList.remove('active');
}

export function showSignIn() {
    document.getElementById('sign-in').classList.remove('hidden');
    document.getElementById('sign-up').classList.add('hidden');
    document.getElementById('sign-in-link').classList.add('active');
    document.getElementById('sign-up-link').classList.remove('active');
}

export function showSignInFromSignUp() {
    showSignIn();
}
