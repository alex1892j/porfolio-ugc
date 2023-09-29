import $experiencia from "./Experiencia.js";
import $sobreMi from "./SobreMi.js";
import $ugcPrincipal from "./UGC.js";
import $heder from "./heder.js";
import $videoUgc from "./videos.js";

document.addEventListener('DOMContentLoaded', (e) => {
    e.preventDefault();
    $heder
    $sobreMi
    $experiencia
    $ugcPrincipal
    $videoUgc
})



const $mostrarBtn = document.getElementById("btn-menu-id");
const $ocultarMenu = document.getElementById("menu-bloque");

$mostrarBtn.addEventListener("click", (e) => {
    document.querySelector('#menu-bloque').style.display = "flex"
});

$ocultarMenu.addEventListener("click", (e) => {
    document.querySelector('#menu-bloque').style.display = "none"
});

$mostrarBtn.addEventListener("click", (e) => {
    document.querySelector('#pantalla-oscura').style.display = "flex"
});

$ocultarMenu.addEventListener("click", (e) => {
    document.querySelector('#pantalla-oscura').style.display = "none"
});
//<a href="https://www.flaticon.es/iconos-gratis/navegacion" title="navegación iconos">Navegación iconos creados por Andy Horvath - Flaticon</a>