import '../sass/main.sass'
import modals from './modal.js'
import headerMenu from './header.js'
import Glide from '@glidejs/glide'

headerMenu()
modals()


try {
  let gallery = new Glide('.glide', {
    perView: 4,
    gap: 20,
    type: 'carousel'
  })
  gallery.mount()
} catch (e) {
  console.log(e);
}

try {
  let slider = new Glide('.catalog__slider', {
    perView: 4,
    type: 'carousel',
    gap: 40,
    breakpoints: {
      1340: {perView: 2},
      425: {perView: 1}
    }
  })
  slider.mount()
} catch (e) {
  console.log(e);
}


