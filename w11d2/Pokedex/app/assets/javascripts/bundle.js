/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./frontend/pokedex.jsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./frontend/pokedex.jsx":
/*!******************************!*\
  !*** ./frontend/pokedex.jsx ***!
  \******************************/
/*! no exports provided */
/***/ (function(module, exports) {

throw new Error("Module build failed (from ./node_modules/babel-loader/lib/index.js):\nSyntaxError: /Users/colineckert/Desktop/aa-classwork/w11d2/Pokedex/frontend/pokedex.jsx: Expected corresponding JSX closing tag for <h1> (9:29)\n\n\u001b[0m \u001b[90m  7 | \u001b[39m  window\u001b[33m.\u001b[39mfetchAllPokemon \u001b[33m=\u001b[39m fetchAllPokemon\u001b[33m;\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m  8 | \u001b[39m  \u001b[36mconst\u001b[39m rootEl \u001b[33m=\u001b[39m document\u001b[33m.\u001b[39mgetElementById(\u001b[32m'root'\u001b[39m)\u001b[33m;\u001b[39m\u001b[0m\n\u001b[0m\u001b[31m\u001b[1m>\u001b[22m\u001b[39m\u001b[90m  9 | \u001b[39m  \u001b[33mReactDOM\u001b[39m\u001b[33m.\u001b[39mrender(\u001b[33m<\u001b[39m\u001b[33mh1\u001b[39m\u001b[33m>\u001b[39m\u001b[33mPokedex\u001b[39m\u001b[33m<\u001b[39m\u001b[33m/\u001b[39m\u001b[33mh1C\u001b[39m\u001b[33m>\u001b[39m\u001b[33m,\u001b[39m rootEl)\u001b[33m;\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m    | \u001b[39m                             \u001b[31m\u001b[1m^\u001b[22m\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 10 | \u001b[39m})\u001b[33m;\u001b[39m\u001b[0m\n    at Object._raise (/Users/colineckert/Desktop/aa-classwork/w11d2/Pokedex/node_modules/@babel/parser/lib/index.js:748:17)\n    at Object.raiseWithData (/Users/colineckert/Desktop/aa-classwork/w11d2/Pokedex/node_modules/@babel/parser/lib/index.js:741:17)\n    at Object.raise (/Users/colineckert/Desktop/aa-classwork/w11d2/Pokedex/node_modules/@babel/parser/lib/index.js:735:17)\n    at Object.jsxParseElementAt (/Users/colineckert/Desktop/aa-classwork/w11d2/Pokedex/node_modules/@babel/parser/lib/index.js:4725:16)\n    at Object.jsxParseElement (/Users/colineckert/Desktop/aa-classwork/w11d2/Pokedex/node_modules/@babel/parser/lib/index.js:4751:17)\n    at Object.parseExprAtom (/Users/colineckert/Desktop/aa-classwork/w11d2/Pokedex/node_modules/@babel/parser/lib/index.js:4758:19)\n    at Object.parseExprSubscripts (/Users/colineckert/Desktop/aa-classwork/w11d2/Pokedex/node_modules/@babel/parser/lib/index.js:10150:23)\n    at Object.parseUpdate (/Users/colineckert/Desktop/aa-classwork/w11d2/Pokedex/node_modules/@babel/parser/lib/index.js:10130:21)\n    at Object.parseMaybeUnary (/Users/colineckert/Desktop/aa-classwork/w11d2/Pokedex/node_modules/@babel/parser/lib/index.js:10119:17)\n    at Object.parseExprOps (/Users/colineckert/Desktop/aa-classwork/w11d2/Pokedex/node_modules/@babel/parser/lib/index.js:9989:23)");

/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map