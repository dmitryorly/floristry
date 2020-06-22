import Glide from '@glidejs/glide'

let bindGlide = function () {
  let sliderSelector = '.catalog__slider'
  let gallerySelector = '.glide'

  if (document.querySelector(sliderSelector)) {
    let slider = new Glide(sliderSelector, {
      perView: 4,
      type: 'carousel',
      gap: 40,
      breakpoints: {
        1340: { perView: 2 },
        425: { perView: 1 }
      }
    })
    slider.mount()
  }

  if (document.querySelector(gallerySelector)) {
    let gallery = new Glide(gallerySelector, {
      perView: 4,
      gap: 20,
      type: 'carousel'
    })
    gallery.mount()
  }
}

export default bindGlide