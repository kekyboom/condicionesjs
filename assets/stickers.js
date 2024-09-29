const primerSticker = document.querySelector("#primerSticker");
const segundoSticker = document.querySelector("#segundoSticker");
const tercerSticker = document.querySelector("#tercerSticker");
const verificar = document.querySelector(".boton")
const mensaje = document.querySelector("#mensaje")

let total;

function actualizarTotal() {
    const primerValor = parseInt(primerSticker.value);
    const segundoValor = parseInt(segundoSticker.value);
    const tercerValor = parseInt(tercerSticker.value);

    total = primerValor + segundoValor + tercerValor;
}

verificar.addEventListener('click', function() {
    actualizarTotal();

    if (total <= 10) {
        mensaje.innerHTML = `Llevas ${total} stickers`;
    } else if (total > 10) {
        mensaje.innerHTML = "Llevas demasiados stickers";
    }
});