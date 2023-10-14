
const d = document,
    $figure = d.createElement('figure'),
    $img = d.createElement('img'),
    $ficaption = d.createElement('figcaption'),
    $colaboraciones = d.getElementById('colaboraciones'),
    $fragmentoColaboraciones = d.createDocumentFragment(),
    $col = await fetch('./Recursos-json/colaboraciones.json'),
    $datosColaboraciones = await $col.json();

$datosColaboraciones.forEach(el => {
    $img.setAttribute('src', el.img);
    $img.setAttribute('alt', el.fig);
    $ficaption.textContent = el.fig;

    $figure.appendChild($img)
    $figure.appendChild($ficaption)
    $figure.classList.add('e-colaboraciones')

    const clon = d.importNode($figure, true)
    $fragmentoColaboraciones.appendChild(clon)
    $colaboraciones.appendChild($fragmentoColaboraciones)
});

export default $colaboraciones;

