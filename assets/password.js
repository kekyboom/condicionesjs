const firstDigit = document.getElementById("firstDigit");
const secondDigit = document.getElementById("secondDigit");
const thirdDigit = document.getElementById("thirdDigit");
const ingresar = document.querySelector(".boton");
const mensaje = document.getElementById("mensaje")

ingresar.addEventListener('click', function() {

    if (parseInt(firstDigit.value) === 9 && parseInt(secondDigit.value) === 1 && parseInt(thirdDigit.value) === 1) {
        mensaje.innerHTML = "Password 1 Correcto";
        mensaje.style.color = "green";

    } else if (parseInt(firstDigit.value) === 7 && parseInt(secondDigit.value) === 1 && parseInt(thirdDigit.value) === 4) {
        mensaje.innerHTML = "Password 2 Correcto";
        mensaje.style.color = "green";

    } else {
        mensaje.innerHTML = "Password Incorrecto";
        mensaje.style.color = "red";
    }
});