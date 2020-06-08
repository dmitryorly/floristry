export default function modals() {
  function bindModal(triggerSelector, modalSelector, closeSelector) {
    const trigger = document.querySelector(triggerSelector),
      modal = document.querySelector(modalSelector),
      close = document.querySelector(closeSelector),
      input = modal.querySelector('form input');

    const closeModal = (e) => {
      modal.classList.remove('display-block')
      modal.classList.remove('display-none')
      trigger.focus()
      document.body.removeEventListener('keyup', escHandler)
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

      modal.classList.add('display-block')
      input.focus()

      document.body.addEventListener('keyup', escHandler)
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
