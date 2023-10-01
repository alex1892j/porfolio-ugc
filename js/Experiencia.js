const d = document;
const $experiencia = d.getElementById("exp"),
    $templateExperiencia = d.getElementById("template-experiencia").content,
    $fragmetoExperiencia = d.createDocumentFragment();

const $ExperienciaJson = await fetch('./Recursos-json/experiencia.json'),
    $datoExperiencia = await $ExperienciaJson.json();

$datoExperiencia.forEach(el => {
    $templateExperiencia.querySelector("#experiencia-titulo").textContent = el.h2;
    $templateExperiencia.querySelector("#imagen-experiencia").setAttribute("src", el.img);
    $templateExperiencia.querySelector("#subtitulo-e-1").textContent = el.h31;
    $templateExperiencia.querySelector("#sub-e1").textContent = el.h3s1;
    $templateExperiencia.querySelector("#p-exp-1").textContent = el.p1;
    $templateExperiencia.querySelector("#subtitulo-e-2").textContent = el.h32;
    $templateExperiencia.querySelector("#sub-e2").textContent = el.h3s2;
    $templateExperiencia.querySelector("#p-exp-2").textContent = el.p2;
    $templateExperiencia.querySelector("#subtitulo-e-3").textContent = el.h33;
    $templateExperiencia.querySelector("#sub-e3").textContent = el.h3s3;
    $templateExperiencia.querySelector("#p-exp-3").textContent = el.p3;
    $templateExperiencia.querySelector("#subtitulo-e-4").textContent = el.h34;
    $templateExperiencia.querySelector("#sub-e4").textContent = el.h3s4;
    $templateExperiencia.querySelector("#p-exp-4").textContent = el.p4;

    $fragmetoExperiencia.appendChild($templateExperiencia);
    $experiencia.appendChild($fragmetoExperiencia);
});



export default $experiencia;
