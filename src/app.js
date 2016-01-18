//document.readyState === 'complete'?
export default class ParallaxNav {
  constructor() {
    // target element for active or default to anchor
    // Cache selectors
    let lastId,
        topMenu = document.querySelector(".vpsn"),
        topMenuHeight = window.getComputedStyle(topMenu).height

    for (let key in topMenu.children) {
      let child = topMenu.children[key],
          hash = topMenu.children[key].hash || ''

      if ( hash ) {
        child.addEventListener('click', this.clickHandler)
      }
    }
      // All list items
      //menuItems = topMenu.find("a"),
      //Anchors corresponding to menu items
      // scrollItems = menuItems.map(function() {
      //   var item = $($(this).attr("href"));
      //   if (item.length) {
      //     return item;
      //   }
      // })
      console.log(topMenu)
      console.log(topMenuHeight)
  }
  // Bind click handler to menu items
  // so we can get a fancy scroll animation
  clickHandler(e) {
    console.log(e.target.hash)
  //   debugger;
  //   var href = $(this).attr("href"),
  //     offsetTop = href === "#" ? 0 : $(href).offset().top - topMenuHeight + 1;
  //   $('html, body').stop().animate({
  //     scrollTop: offsetTop
  //   }, 300);
  //   e.preventDefault();
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
