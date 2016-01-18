/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports) {

	'use strict';var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value" in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();Object.defineProperty(exports,"__esModule",{value:true});function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}} //document.readyState === 'complete'?
	var ParallaxNav=function(){function ParallaxNav(){_classCallCheck(this,ParallaxNav); // target element for active or default to anchor
	// Cache selectors
	var lastId=undefined,topMenu=document.querySelector(".vpsn"),topMenuHeight=window.getComputedStyle(topMenu).height;for(var key in topMenu.children){var child=topMenu.children[key],hash=topMenu.children[key].hash||'';if(hash){child.addEventListener('click',this.clickHandler);}} // All list items
	//menuItems = topMenu.find("a"),
	//Anchors corresponding to menu items
	// scrollItems = menuItems.map(function() {
	//   var item = $($(this).attr("href"));
	//   if (item.length) {
	//     return item;
	//   }
	// })
	console.log(topMenu);console.log(topMenuHeight);} // Bind click handler to menu items
	// so we can get a fancy scroll animation
	_createClass(ParallaxNav,[{key:'clickHandler',value:function clickHandler(e){console.log(e.target.hash); //   debugger;
	//   var href = $(this).attr("href"),
	//     offsetTop = href === "#" ? 0 : $(href).offset().top - topMenuHeight + 1;
	//   $('html, body').stop().animate({
	//     scrollTop: offsetTop
	//   }, 300);
	//   e.preventDefault();
	} // Bind to scroll
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
	}]);return ParallaxNav;}();exports.default=ParallaxNav;window.parallaxNav=new ParallaxNav();

/***/ }
/******/ ]);