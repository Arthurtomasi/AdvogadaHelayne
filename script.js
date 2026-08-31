const menuButton = document.querySelector('.menu-button')
const mobileMenu = document.querySelector('#mobile-menu')

if (menuButton && mobileMenu) {
  menuButton.addEventListener('click', () => {
    const isOpen = menuButton.getAttribute('aria-expanded') === 'true'
    menuButton.setAttribute('aria-expanded', String(!isOpen))
    menuButton.setAttribute('aria-label', isOpen ? 'Abrir menu' : 'Fechar menu')
    mobileMenu.hidden = isOpen
  })

  mobileMenu.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      menuButton.setAttribute('aria-expanded', 'false')
      menuButton.setAttribute('aria-label', 'Abrir menu')
      mobileMenu.hidden = true
    })
  })
}

const year = document.querySelector('#year')

if (year) {
  year.textContent = new Date().getFullYear()
}
