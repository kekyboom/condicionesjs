const imgBin = document.getElementById('imgBin');

imgBin.addEventListener('click', function() {
    if (imgBin.style.border) {
        imgBin.style.border = '';

    } else {
        imgBin.style.border = '2px solid red';
    }
});

