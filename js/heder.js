
const d = document;
const $heder = d.getElementById("header"),
    $templateHeder = d.getElementById('header-1').content,
    $fragmentH = d.createDocumentFragment(),
    headerContent = [
        {
            img: "/recursos/img/img.jpg",
            h1: "Natalia Milagros Arrescurrenaga",
            p: "CREADORA DE CONTENIDO UGC",
            p2: "(CONTENIDO GENERADO POR EL USUARIO)"


        }
    ];

headerContent.forEach((el) => {
    $templateHeder.querySelector("img").setAttribute("src", el.img);
    $templateHeder.querySelector("h1").textContent = el.h1;
    $templateHeder.querySelector("#phrase").textContent = el.p;
    $templateHeder.querySelector("#phrase-2").textContent = el.p2;


    $fragmentH.appendChild($templateHeder)
    $heder.appendChild($fragmentH)

})

export default $heder;
