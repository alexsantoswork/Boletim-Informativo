const form = document.getElementById('emailForm')

const email = document.getElementById('emailInput')

const fechar = document.getElementById("fechar")

const popUp = document.getElementById("pop-ups")


form.addEventListener('submit', (e) => {
    e.preventDefault()

    checkInputs()
})

function checkInputs() {

    const emailValue = email.value.trim()

   

    if(emailValue === '') {
        setErrorFor(emailInput, 'campo obrigatório')
    } else if (!isEmail(emailValue)) {
        setErrorFor(emailInput, 'Email inválido')
    } else {
        setSuccessFor(emailInput)
        
    }
   
}

function setErrorFor(input, message,) {
    const formControl = input.parentElement;
    const small = formControl.querySelector('small')

    small.innerText = message

    formControl.className = 'form-control error'
}


function setSuccessFor(input,) {
    const formControl = input.parentElement;

    formControl.className = 'form-control success'
}



function isEmail(email) {
    return /^(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/.test(email)
}



function mostrarDiv() {
    if (popUp.style.display === "none") {
        popUp.style.display = "block";
    } 
}

fechar.onclick = function () {
    if (popUp.style.display === "block") {
        popUp.style.display = "none";
    }
}







