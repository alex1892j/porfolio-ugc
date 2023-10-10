const d = document,
    $btnMenu = d.getElementById('btn-menu-id'),
    $panelMenu = d.getElementById('panel-menu');


$btnMenu.addEventListener('click', e => {

    $panelMenu.classList.toggle('is-active')
    $panelMenu.style.display = "flex"

})




export default $btnMenu;
