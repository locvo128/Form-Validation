const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const pasword2 = document.getElementById('pasword2');

// Show input error message
function showError(input, message) {
    const formControl = input.parentElement;
    formControl.className = 'form-control error';

    const small = formControl.querySelector('small');
    small.innerText = message;
}

//show success outline
function showSeccess(input) {
    const formControl = input.parentElement;
    formControl.className = 'form-control success';
}
//check email is valid
function isValidEmail(email) {
    const re =  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

form.addEventListener('submit', function(e) {
    e.preventDefault();
    
    if (username.value === '') {
        showError(username, 'Username is required');
    }else {
        showSeccess(username);
    }

    if (email.value === '') {
        showError(email, 'Email is required');
    }else if (!isValidEmail(email.value)) {
        showError(email, 'Email is not valid');
    }else {
        showSeccess(email);
    }

    if (password.value === '') {
        showError(password, 'Password is required');
    }else {
        showSeccess(password);
    }

    if (password2.value === '') {
        showError(password2, 'Password2 is required');
    }else {
        showSeccess(password2);
    }
});

//check required fields
// function checkRequired(inputArr) {
//     inputArr.forEach(function(input) {
//         console.log(input.value);
//     });
// }
// //event listeners
// form.addEventListener('submit', function(e) {
//     e.preventDefault();

//     checkRequired([username, email, password, pasword2]);

// });