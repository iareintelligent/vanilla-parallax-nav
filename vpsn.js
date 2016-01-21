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

	'use strict';var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value" in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();Object.defineProperty(exports,"__esModule",{value:true});function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}var ParallaxNav=function(){function ParallaxNav(el){var _this=this;_classCallCheck(this,ParallaxNav); // Get Menu Parent
	this.el=el; // Get all Links
	this.links=[].slice.call(el.children); // object definition
	this.sections={};this.links.map(function(link){if(link.hash){_this.sections[link.hash]=document.querySelector(link.hash).offsetTop-el.scrollHeight;link.addEventListener('click',function(e){e.preventDefault();_this.clickHandler(e);});}else {_this.sections['#top']=el.scrollHeight;}});}_createClass(ParallaxNav,[{key:'clickHandler',value:function clickHandler(e){this.scrollAnimate(this.sections[e.target.hash]);}},{key:'scrollAnimate',value:function scrollAnimate(end){ // TODO: use requestanimationframe
	var cur=window.scrollY,timer=setInterval(function(){if(cur==end){ //Stop animation
	clearInterval(timer);}else {cur>end?cur-=1:cur+=1;window.scrollTo(0,cur);}},1);}}]);return ParallaxNav;}();exports.default=ParallaxNav;window.parallaxNav=new ParallaxNav(document.querySelector('.vpsn'));

/***/ }
/******/ ]);