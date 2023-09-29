const d = document;
const $sobreMi = d.getElementById("s-m"),
    $templateSobreMi = d.getElementById("template-sobre-mi").content,
    $fragmentoSobreMi = d.createDocumentFragment(),
    sobreMi = [
        {
            h2: "Sobre mí",
            p: "Tengo 22 años, soy una apasionada a la fotografía y la creatividad en todas sus formas. como creadora UGC, mi objetivo es transmitir historias visualmente impactantes y atractivas que cautiven al espectador. Con experiencia como coordinadora de Marketing y Publicidad, he desarrollado habilidades estratégicas para promover marcas y productos de manera efectiva. Mi objetivo es proporcionar a mis clientes un resultado final que los haga sentir orgullosos y sastifechos con su inversión. ¡Estoy emocionada de colaborar contigo!."
        }
    ]

sobreMi.forEach((el) => {

    $templateSobreMi.querySelector("h2").textContent = el.h2;
    $templateSobreMi.querySelector("p").textContent = el.p;

    $fragmentoSobreMi.appendChild($templateSobreMi);
    $sobreMi.appendChild($fragmentoSobreMi);
})

export default $sobreMi;