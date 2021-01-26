/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/dom_node_collection.js":
/*!************************************!*\
  !*** ./src/dom_node_collection.js ***!
  \************************************/
/***/ ((module) => {

eval("class DomNodeCollection {\n\n  constructor(nodeArray) {\n    this.nodeArray = nodeArray;\n  }\n\n  html(string) {\n    if (typeof(string) === \"string\") {\n      this.nodeArray.forEach(node => {\n        node.innerHTML = string;\n      });\n    } else {\n      return this.nodeArray[0].innerHTML;\n    };\n  }\n\n  empty() {\n    return this.html(\"\");\n  }\n\n  append(args){\n    // this.html(args);\n    // debugger\n    for (let i = 0; i < this.nodeArray.length; i++) {\n      if (args instanceof DomNodeCollection || args instanceof HTMLElement){\n        this.nodeArray[i].innerHTML += args.outerHTML;\n        \n      } else if (typeof (args) === \"string\") {\n        this.nodeArray[i].innerHTML += args;\n      }\n    }\n  }\n\n  attr(attribute, value){ //getter if value is omitted, otherwise it's a setter\n    if (!value){\n      return this.nodeArray[0].getAttribute(attribute)\n    }else{\n      this.nodeArray[0].setAttribute(attribute, value);\n    }\n  }\n\n  addClass(name){\n    this.nodeArray[0].className += ` ${name}`;\n  }\n\n  removeClass(name){\n    let classes = this.nodeArray[0].className.split(\" \");\n\n    let classToRemove = classes.indexOf(name);\n\n    classes.splice(classToRemove, 1);\n\n    this.attr(\"class\", classes.join(\" \"));\n  }\n\n  children() {\n    let childNodes = [];\n    for (let i = 0; i < this.nodeArray.length; i++){\n      let childrenArr = Array.from(this.nodeArray[i].children);\n      childNodes = childNodes.concat(childrenArr);\n    }\n    return new DomNodeCollection(childNodes);\n  }\n\n  parent(){\n    let parentNodes = [];\n    for (let i = 0; i < this.nodeArray.length; i++) {\n      let parent = this.nodeArray[i].parentNode;\n      if (!parentNodes.includes(parent)){\n        parentNodes.push(parent);\n      }\n    }\n    return new DomNodeCollection(parentNodes);\n  }\n\n  find(selector) { //This might come in handy\n    //elementList = parentNode.querySelectorAll(selectors);\n    return this.nodeArray[0].querySelectorAll(selector);\n  }\n\n  remove(){\n    // debugger\n    this.empty();\n  }\n}\n\nmodule.exports = DomNodeCollection;\n\n//# sourceURL=webpack:///./src/dom_node_collection.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
eval("const DomNodeCollection = __webpack_require__(/*! ./dom_node_collection.js */ \"./src/dom_node_collection.js\");\n\n$(() => {\n  window.$l = $l;\n})\n\nfunction $l(selector) {\n  if (selector instanceof HTMLElement) {\n    return new DomNodeCollection(selector);\n  } else {\n    let nodeArray = Array.from(document.querySelectorAll(selector));\n    return new DomNodeCollection(nodeArray);\n  };\n}\n\n//# sourceURL=webpack:///./src/index.js?");
})();

/******/ })()
;