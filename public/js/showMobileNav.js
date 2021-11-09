const mobileBtn = document.getElementById('mobile-menu-button')
const mobileMenu = document.getElementById('mobile-menu')


const showNav = event => {
    
    mobileMenu.classList.toggle('hidden')

}



mobileBtn.addEventListener('click', showNav)
