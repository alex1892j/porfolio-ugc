const d = document,
    $componenteMenusub = d.querySelectorAll('.sub-li-con-e'),
    $panelMenusub = d.getElementById('panel-menu');

for (let i = 0; i < $componenteMenusub.length; i++) {
    $componenteMenusub[i].addEventListener('click', () => {
        $panelMenusub.classList.remove('is-active')
    })

}


export default $componenteMenusub;