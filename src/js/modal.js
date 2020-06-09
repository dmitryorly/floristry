export default function modals() {
  function bindModal(triggerSelector, modalSelector, closeSelector) {
    const trigger = document.querySelector(triggerSelector),
      modal = document.querySelector(modalSelector),
      close = document.querySelector(closeSelector),
      modalCard = modal.querySelector('.modal__container'),
      input = modal.querySelector('form input');

    const closeModal = (e) => {
      modalCard.classList.remove('anim_topdown')
      modalCard.classList.add('anim_downtop')
      setTimeout( () => {
        modal.classList.remove('display-block')
      }, 300)
      trigger.focus()
      document.body.removeEventListener('keyup', escHandler)
    }
    
    const openModal = () => {
      modalCard.classList.remove('anim_downtop')
      modalCard.classList.add('anim_topdown')
      modal.classList.add('display-block')
      input.focus()
      document.body.addEventListener('keyup', escHandler)
    }

    const escHandler = e => {
      if (e.key == "Escape") {
        closeModal()
      }
    }

    trigger.addEventListener('click', e => {
      if (e.target) {
        e.preventDefault();
      }

      openModal()
  })

  close.addEventListener('click', closeModal)

  modal.addEventListener('click', e => {
    if (e.target === modal) {
      closeModal()
    }
  })
}

bindModal('.js-order', '.modal', '.modal__close');
}
