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
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	const Launcher_1 = __webpack_require__(1);
	function show() {
	    let launcher = new Launcher_1.Launcher();
	    launcher.show();
	}
	show();


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	const Dialog_1 = __webpack_require__(2);
	class Launcher extends Dialog_1.Dialog {
	    constructor() {
	        super();
	        this.template = `<button>Find a bug ?</button>`;
	        this.position = "bottom-right";
	    }
	    init() {
	        this.node = document.createElement("div");
	        this.node.innerHTML = this.template;
	        this.node.classList.add("launcher");
	        this.node.classList.add("hidden");
	        document.body.appendChild(this.node);
	        this.node.onclick = this.openBugWritter;
	    }
	    show() {
	        if (this.node == null) {
	            this.init();
	        }
	        this.node.classList.remove("hidden");
	    }
	    hide() {
	        this.node.classList.add("hidden");
	    }
	    openBugWritter() {
	        alert("open bug");
	    }
	}
	exports.Launcher = Launcher;
	;


/***/ },
/* 2 */
/***/ function(module, exports) {

	"use strict";
	class Dialog {
	}
	exports.Dialog = Dialog;
	;


/***/ }
/******/ ]);