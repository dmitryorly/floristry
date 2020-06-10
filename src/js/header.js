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
      menu.classList.remove('anim_fade-out')
      menu.classList.add('display-flex', 'anim_fade-in')
      document.body.classList.add('overflow-hidden')

      document.body.addEventListener('keyup', escHandler)
    }

    const hideMenu = () => {
      menu.classList.remove('anim_fade-in')
      menu.classList.add('anim_fade-out')
      document.body.classList.remove('overflow-hidden')
      setTimeout(() => {
        menu.classList.remove('display-flex')
      }, 200)
      
      document.body.removeEventListener('keyup', escHandler)
    }


    openBtn.addEventListener('click', showMenu)
    closeBtn.addEventListener('click', hideMenu)
    menu.addEventListener('click', e => {
      const target = e.target

      if (target.hasAttribute('href') || target.parentNode.hasAttribute('href')) {
        hideMenu()
      }
    })
  }

  function headerPadding(headerSelector = '.header', headerContainerSelector = '.header__container') {
    const header = document.querySelector(headerSelector),
      headerContainer = header.querySelector(headerContainerSelector);
    

    window.addEventListener('scroll', () => {
      if (pageYOffset > 80) {
        header.classList.add('header_bg')
        headerContainer.classList.add('header__container_stick')
      } else if (pageYOffset < 80) {
        header.classList.remove('header_bg')
        headerContainer.classList.remove('header__container_stick')
      }
    })
  }

  try{
    headerPadding()
  }
  catch (err) {
    console.log(err);
  }

  bindMenu('.burger_open', '.header__menu', '.header__menu .burger_close')

}