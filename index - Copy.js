const firstName = document.getElementById("first-name");
const lastName = document.getElementById("last-name");
const emailAddress = document.getElementById("email");
const password = document.getElementById("password");
const submit = document.getElementById("submit");

submit.addEventListener('click', (event) => {
    event.preventDefault();

    if (firstName.value.trim() === '') {
        alert('Please enter your first name.');
        return false;
    } else if (lastName.value.trim() === '') {
        alert('Please enter your last name.');
        return false;
    } else if (emailAddress.value.trim() === '') {
        alert('Please enter your email address.');
        return false;
    } else if (password.value.trim() === '') {
        alert('Please enter your password.');
        return false;
    }

    
    alert('Form submitted successfully');
    return true;
});
