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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\n__webpack_require__(!(function webpackMissingModule() { var e = new Error(\"Cannot find module \\\"./styles.scss\\\"\"); e.code = 'MODULE_NOT_FOUND'; throw e; }()));\n\nvar Car = function () {\n  function Car() {\n    _classCallCheck(this, Car);\n  }\n\n  _createClass(Car, [{\n    key: 'manufacturer',\n    value: function manufacturer(car) {\n      document.write('I have a ' + car);\n    }\n  }]);\n\n  return Car;\n}();\n\nvar bmw = new Car();\n\nbmw.manufacturer('bmw');//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanM/OTU1MiJdLCJuYW1lcyI6WyJyZXF1aXJlIiwiQ2FyIiwiY2FyIiwiZG9jdW1lbnQiLCJ3cml0ZSIsImJtdyIsIm1hbnVmYWN0dXJlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsbUJBQUFBLENBQVEseUlBQVI7O0lBRU1DLEc7Ozs7Ozs7aUNBRVNDLEcsRUFBSztBQUNoQkMsZUFBU0MsS0FBVCxlQUEyQkYsR0FBM0I7QUFDRDs7Ozs7O0FBSUgsSUFBTUcsTUFBTSxJQUFJSixHQUFKLEVBQVo7O0FBRUFJLElBQUlDLFlBQUosQ0FBaUIsS0FBakIiLCJmaWxlIjoiMC5qcyIsInNvdXJjZXNDb250ZW50IjpbInJlcXVpcmUoJy4vc3R5bGVzLnNjc3MnKTtcclxuXHJcbmNsYXNzIENhciB7XHJcblxyXG4gIG1hbnVmYWN0dXJlcihjYXIpIHtcclxuICAgIGRvY3VtZW50LndyaXRlKGBJIGhhdmUgYSAke2Nhcn1gKVxyXG4gIH1cclxuXHJcbn1cclxuXHJcbmNvbnN0IGJtdyA9IG5ldyBDYXI7XHJcblxyXG5ibXcubWFudWZhY3R1cmVyKCdibXcnKTtcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2luZGV4LmpzIl0sInNvdXJjZVJvb3QiOiIifQ==");

/***/ })
/******/ ]);