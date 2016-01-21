
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
    this.scrollAnimate( this.sections[ e.target.hash ] )
  }

  scrollAnimate(end) {
    let cur  = window.scrollY,
        timer = setInterval( ()=>{
          if ( cur == end ) {
            //Stop animation
            clearInterval( timer )
          } else {
            cur > end ? cur -= 1 : cur += 1
            window.scrollTo( 0, cur )
          }
        }, 15)
  }
}


window.parallaxNav = new ParallaxNav(document.querySelector('.vpsn'))
