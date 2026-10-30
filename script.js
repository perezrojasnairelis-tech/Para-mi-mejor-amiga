
const inicio = document.getElementById("inicio");
const universo = document.getElementById("universo");

const abrirRegalo = document.getElementById("abrirRegalo");
const descubrirUniverso = document.getElementById("descubrirUniverso");

// Abrir el regalo
abrirRegalo.addEventListener("click", function () {

    inicio.classList.add("oculto");
    universo.classList.remove("oculto");

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});

// Ir a la sección Sobre Naty
descubrirUniverso.addEventListener("click", function () {

    document.getElementById("sobre-naty").scrollIntoView({
        behavior: "smooth"
    });

});
