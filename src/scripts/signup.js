/**Logic for form validation**/
var email         = document.getElementById('email');
var password      = document.getElementById('password');
var form          = document.getElementById('form');
var errorElement  = document.getElementById('error');

form.addEventListener('submit', (e) => {
    let messages = []
    if (email.value === '' || e.mail.value == null) {
        messages.push('E-Mail is required.');
    }

    if(password.value.length <= 8) {
        messages.push('Password must be longer than 6 characters');
    }

    if(password.value.length >= 20) {
        messages.push('Password must be less than 20 characters');
    }

    if(password.value === 'password') {
        messages.push('Password cannot be password');
    }
    if (messages.length > 0) {
        e.preventDefault();
        errorElement.innerText = messages.join(', ');
    }
})