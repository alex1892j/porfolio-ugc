const d = document,
    $subMenu = d.getElementById('sub-menu'),
    $panelSubMenu = d.getElementById('sub-menu-contenido');

$subMenu.addEventListener('click', () => {

    $panelSubMenu.classList.toggle('active')
})

export default $subMenu;