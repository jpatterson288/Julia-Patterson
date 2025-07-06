const menu = document.querySelector('#mobile-menu')
const menuLinks = document.querySelector('.navbar__menu')

menu.addEventListener('click', function() {
    menu.classList.toggle('is-active')
    menuLinks.classList.toggle('active')
})

document.addEventListener('click', function(e) {
    if (!menu.contains(e.target) && !menuLinks.contains(e.target)) {
        menu.classList.remove('is-active')
        menuLinks.classList.remove('active')
    }
})
