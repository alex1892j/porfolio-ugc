const d = document,
    $componenteMenu = d.querySelectorAll('.componentes-menu'),
    $panelMenu = d.getElementById('panel-menu');

for (let i = 0; i < $componenteMenu.length; i++) {
    $componenteMenu[i].addEventListener('click', () => {
        $panelMenu.classList.remove('is-active')
    })

}


export default $componenteMenu;