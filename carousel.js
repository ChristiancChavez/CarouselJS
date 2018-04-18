var imagen1 = "./images/fisioterapy.jpg";
var imagen2 = "./images/womenProfile.jpg";
var imagen3 = "./images/personalized.jpg";
var empty = document.getElementById("dotsjs");
var div = document.getElementById("carouseljs");

var imagenes = [imagen1, imagen2, imagen3];

var position = 0;


function cambiarImagen() {
    var images = document.createElement("IMG");
    images.setAttribute("src", imagenes[position]);
    images.setAttribute("alt", "");
    images.classList.add("carousel__image");
    images.setAttribute( "id", "carousel__imagejs");
    document.getElementById("carouseljs").appendChild(images);
}
cambiarImagen();

function cambiarImagenRight() {
    if (position >= imagenes.length - 1) {
        position = 0;
        div.innerHTML = '';
        cambiarImagen();
        dots();
    } else {
        position = position + 1;
        div.innerHTML = '';
        cambiarImagen();
        dots();
    }
}

function cambiarImagenLeft() {
    if (position === 0) {
        position = imagenes.length - 1;
        div.innerHTML = '';
        cambiarImagen();
        dots();
    } else {
        position = position - 1;
        var image = document.getElementById("carousel__imagejs");
        div.innerHTML = '';
        cambiarImagen();
        dots();
    }
}

document.addEventListener("DOMContentLoaded", function() {
    setInterval(() => {  
        cambiarImagenRight();
        dots();
    }, 3000);
});

function dots () {
    empty.innerHTML = '';
    imagenes.map((item, index) => {
        var bts = document.createElement("SPAN");
        bts.setAttribute("key", index);
        bts.setAttribute("class", index === position ? "dots__bts is-active" : "dots__bts");
        bts.addEventListener("click", () => onClickbts(index));
        document.getElementById("dotsjs").appendChild(bts);
    })
}
dots();

function onClickbts(index) {
    position = index;
    dots();
    var emptyImage = document.getElementById("carouseljs");
    emptyImage.innerHTML = '';
    cambiarImagen();
}
