//document.readyState === 'complete'?
export default class ParallaxNav {
  constructor() {
    let topMenu = document.querySelector( ".vpsn" ),
        topMenuHeight = window.getComputedStyle( topMenu ).height

    for ( let key in topMenu.children ) {
      let child = topMenu.children[key],
          hash = topMenu.children[key].hash || ''

      hash ? child.addEventListener('click', this.clickHandler) : ''
    }
  }

  clickHandler(e) {
    let hash = e.target.hash,
        offsetTop = hash ? document.querySelector(hash).scrollIntoView() :

    e.preventDefault()
  }

  // Bind to scroll
  // $(window).scroll(function() {
  //   // Get container scroll position
  //   var fromTop = $(this).scrollTop() + topMenuHeight;
  //
  //   // Get id of current scroll item
  //   var cur = scrollItems.map(function() {
  //     if ($(this).offset().top < fromTop)
  //       return this;
  //   });
  //   // Get the id of the current element
  //   cur = cur[cur.length - 1];
  //   var id = cur && cur.length ? cur[0].id : "";
  //
  //   if (lastId !== id) {
  //     lastId = id;
  //     // Set/remove active class
  //     menuItems.removeClass("active")
  //       .end().find("[href=#" + id + "]").addClass("active");
  //   }
  // })
}

window.parallaxNav = new ParallaxNav()
