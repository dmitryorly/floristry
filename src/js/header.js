export default function headerMenu() {
  function bindMenu(openSelector, menuSelector, closeSelector) {
    const openBtn = document.querySelector(openSelector),
      menu = document.querySelector(menuSelector),
      closeBtn = document.querySelector(closeSelector);

    const escHandler = e => {
      if (e.key == 'Escape') {
        hideMenu()
      }
    }

    const showMenu = () => {
      menu.classList.add('display-flex')
      document.body.classList.add('overflow-hidden')

      document.body.addEventListener('keyup', escHandler)
    }

    const hideMenu = () => {
      menu.classList.remove('display-flex')
      document.body.classList.remove('overflow-hidden')

      document.body.removeEventListener('keyup', escHandler)
    }


    openBtn.addEventListener('click', showMenu)
    closeBtn.addEventListener('click', hideMenu)
    menu.addEventListener('click', e => {
      const target = e.target
      
      if (target.hasAttribute('href') || target.parentNode.hasAttribute('href')){
        hideMenu()
      }
    })
  }

  bindMenu('.burger_open', '.header__menu', '.header__menu .burger_close')

}