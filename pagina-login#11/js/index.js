const emailRegex = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,10}$/;
const form = document.getElementById('form');
const inputs = document.getElementsByTagName('input');
const spans = document.querySelectorAll('.error');
const submit = document.getElementById('submit');
const btnEye = document.getElementById('btn-eye');

form.addEventListener('submit', (event) => {
    event.preventDefault();
    validateEmail();
    validatepassword();
});

function showError(index) {
    inputs[index].style.border = '1px solid #ED3A5A';
    spans[index].style.display = 'block';
}

function removeError(index) {
    inputs[index].style.border = 'none';
    spans[index].style.display = 'none';
}

function validateEmail() {
    if (!emailRegex.test(inputs[0].value)) {
        showError(0)
    } else {
        removeError(0)
    }
}

function validatepassword() {
    if (!passwordRegex.test(inputs[1].value)) {
        showError(1)
    } else {
        removeError(1)
    }
}

function showHideEye() {
    if (inputs[1].type === "password") {
        inputs[1].type = "text";
        btnEye.src = "assets/eye-hide.svg";
    } else {
        inputs[1].type = "password";
        btnEye.src = "assets/eye-show.svg";
    }
}