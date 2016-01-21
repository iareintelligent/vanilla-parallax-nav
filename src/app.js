
export default class ParallaxNav {
  constructor(el) {
    // Get Menu Parent
    this.el = el
    // Get all Links
    this.links = [].slice.call( el.children )
    // object definition
    this.sections = {}

    this.links.map( link => {
      if ( link.hash ) {
        this.sections[link.hash] = document.querySelector(link.hash).offsetTop - el.scrollHeight
        link.addEventListener('click', e => {
          e.preventDefault()
          this.clickHandler(e)
        })
      } else {
        this.sections['#top'] = el.scrollHeight
      }
    })
  }

  clickHandler(e) {
    console.log(e.target.hash)
    window.scroll( 0, this.sections[ e.target.hash ] )

  }
}

window.parallaxNav = new ParallaxNav(document.querySelector('.vpsn'))
