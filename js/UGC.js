const d = document;

const $ugcPrincipal = d.getElementById("ugc-p"),
    $templateUgc = d.getElementById("template-ugc").content,
    $fragmentoUgc = d.createDocumentFragment(),
    $ugcJson = await fetch('/Recursos-json/ugc.json'),
    $datoUgc = await $ugcJson.json();

$datoUgc.forEach(el => {
    $templateUgc.querySelector("#t-p-ugc").textContent = el.h1,
        $templateUgc.querySelector("#ugc-qs-1").textContent = el.h21,
        $templateUgc.querySelector("#ugc-qs-1p").textContent = el.p1u,
        $templateUgc.querySelector("#ugc-qs-2").textContent = el.h22,
        $templateUgc.querySelector("#h3-ugc-qs-1").textContent = el.h31,
        $templateUgc.querySelector("#p-ugc-qs-1").textContent = el.p1,
        $templateUgc.querySelector("#h3-ugc-qs-2").textContent = el.h32,
        $templateUgc.querySelector("#p-ugc-qs-2").textContent = el.p2,
        $templateUgc.querySelector("#h3-ugc-qs-3").textContent = el.h33,
        $templateUgc.querySelector("#p-ugc-qs-3").textContent = el.p3

    $fragmentoUgc.appendChild($templateUgc);
    $ugcPrincipal.appendChild($fragmentoUgc);
});
export default $ugcPrincipal;