const form = document.querySelector('#create-account-form');
const usernameInput = document.querySelector('#uname');
const emailInput = document.querySelector('#email');
const passwordInput = document.querySelector('#password');
const confirmPasswordInput = document.querySelector('#confrim-password');

form.addEventListener('submit',(event) => {
    event.preventDefault();

    validateForm();

})

function validateForm(){
    // Username
    if(usernameInput.value.trim() == ''){
        setError(usernameInput, 'Name cannot be Empty');
    }

    // Email 
    // Password 
    // Conform-Password
}

function setError(element, errorMessage){
    const parent = element.parentElement;
    parent.classList.add('error');
}
