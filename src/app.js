
export default class ParallaxNav {
  constructor(el) {
    this.el = el

    for ( let key in el.children ) {
      let child = el.children[key],
          hash = el.children[key].hash || ''

      hash ? child.addEventListener('click', this.clickHandler) : ''
    }
  }

  clickHandler(e) {
    // let hash = e.target.hash,
    //     offsetTop = hash ? document.querySelector(hash).offsetTop : ''
    console.log(e)

    // e.preventDefault()
  }
}

var parallaxNav = new ParallaxNav(document.querySelector('.vpsn'))
