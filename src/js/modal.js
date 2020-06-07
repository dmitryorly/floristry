export default function modals() {
  function bindModal(trigger, modalWindow, close) {
    trigger.addEventListener('click', e => {
      if (e.target) {
        e.preventDefault();
      }

      modalWindow.classList.add('display-flex')
      document.body.classList.add('overflow-hidden')
    })

    close.addEventListener('click', () => {
      modalWindow.classList.remove('display-flex')
      modalWindow.classList.remove('display-none')
      document.body.classList.remove('overflow-hidden')
    })
  }

  const orderButton = document.querySelector('.js-order'),
    modalOrder = document.querySelector('.modal'),
    modalCloseButton = modalOrder.querySelector('.modal__close');

  bindModal(orderButton, modalOrder, modalCloseButton);
}
