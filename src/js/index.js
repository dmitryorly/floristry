import '../sass/main.sass'
import modals from './modal.js'
import headerMenu from './header.js'
import Glide from '@glidejs/glide'

headerMenu()
modals()

let slider = new Glide('.glide', {
  perView: 4,
  gap: 20,
  type: 'carousel'
})
slider.mount()