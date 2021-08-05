/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./application/form.js":
/*!*****************************!*\
  !*** ./application/form.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nclass Form {\r\n    constructor(formName) {\r\n        this.formName = formName ? formName : \"customInput\";\r\n\r\n        this.wrapper = document.createElement('div');\r\n        this.wrapper.className = \"wrapper\";\r\n\r\n        this.build = this.build.bind(this);\r\n        this.show = this.show.bind(this);\r\n        this.close = this.close.bind(this);\r\n    }\r\n\r\n        show(){\r\n            let body = document.body;\r\n            body.append(this.wrapper);\r\n        }\r\n\r\n        close(){\r\n            this.wrapper = \"\";\r\n        }\r\n\r\n        build(){\r\n            this.wrapper.style.cssText = `display: flex;\r\n                                          align-items: center;\r\n                                          justify-content: center;\r\n                                          background: rgba(0,0,0,0.3);\r\n                                          width: 100%;\r\n                                          height: 100%;\r\n                                          position: absolute;\r\n                                          top: 0;\r\n                                          left: 0;\r\n                                          `;\r\n\r\n\r\n            this.wrapper.innerHTML = `\r\n                <div class=\"popUpContainer\" style=\"padding: 20px;width: 700px;height: 450px;background: white;box-shadow: 0 0 10px rgba(0,0,0,0.4);\">\r\n                    <form name=\"${this.formName}\" id=\"${this.formName}\" style=\"display: flex;flex-direction: column;align-items: center;justify-content: center;height: 100%;width: 100%;\">\r\n                    <div class=\"itemWrapper\">\r\n                      <label for=\"name\">Name</label>\r\n                    <input id=\"name\" type=\"text\">\r\n                    </div>\r\n                  \r\n                    <div class=\"itemWrapper\">\r\n                     <label for=\"phone\">Telephone</label>\r\n                    <input id=\"phone\" type=\"number\">\r\n                    </div>\r\n                   \r\n                    <div class=\"itemWrapper\">\r\n                    <label for=\"password\">Password</label>\r\n                    <input id=\"password\" type=\"text\">\r\n                    </div>\r\n                    \r\n                    <div class=\"itemWrapper\">\r\n                    <label for=\"passwordRepit\">Repit pasword</label>\r\n                    <input id=\"passwordRepit\" type=\"text\">  \r\n                    </div>                    \r\n               \r\n                    <div class=\"buttonWrapper\">\r\n                        <input type=\"submit\" id=\"submitBtn\" value=\"Register\">\r\n                        <button id=\"close\">Exit</button>\r\n                    </div>\r\n                    \r\n                    </form>\r\n                </div>\r\n            `;\r\n\r\n            let form = document.getElementById(this.formName);\r\n            let submitBtn = document.getElementById(\"submitBtn\");\r\n            let exitBtn = document.getElementById(\"close\");\r\n\r\n\r\n            submitBtn.addEventListener('click', function (e){\r\n                e.preventDefault();\r\n                if( form.name.value == \"\" || form.phone.value == \"\" && form.phone.length < 10){\r\n                    if(form.name){\r\n                        form.name.style.border = '2px solid red';\r\n                        form.name.setAttribute(\"data-valid\",\"false\");\r\n                    }\r\n                    if(form.phone){\r\n                        form.phone.style.border = '2px solid red';\r\n                        form.phone.setAttribute(\"data-valid\",\"false\");\r\n                    }\r\n\r\n                }else {\r\n                    if(form.name){\r\n                        form.name.style.border = '2px solid green';\r\n                        form.name.setAttribute(\"data-valid\",\"true\");\r\n                    }\r\n                    if(form.phone){\r\n                        form.phone.style.border = '2px solid green';\r\n                        form.phone.setAttribute(\"data-valid\",\"true\");\r\n                    }\r\n\r\n                }\r\n                if(form.password.value !== form.passwordRepit.value || form.password.value == \"\" || form.passwordRepit.value == \"\"){\r\n                    form.password.style.border = '2px solid red';\r\n                    form.passwordRepit.style.border = '2px solid red';\r\n                    form.name.setAttribute(\"data-valid\",\"false\");\r\n                    form.passwordRepit.setAttribute(\"data-valid\",\"false\");\r\n                }else {\r\n                    form.password.style.border = '2px solid green';\r\n                    form.passwordRepit.style.border = '2px solid green';\r\n                    form.password.setAttribute(\"data-valid\",\"true\");\r\n                    form.passwordRepit.setAttribute(\"data-valid\",\"true\");\r\n                }\r\n\r\n                let formArray = Array.from(form.elements);\r\n                formArray.length = formArray.length-2;\r\n\r\n                formArray.every(function (item,index){\r\n                    if(item.getAttribute(\"data-valid\") == \"true\"){\r\n                        alert(\"Supper! Data send\");\r\n                       let wrapper = document.querySelector('.wrapper');\r\n                        wrapper.style.display = \"none\";\r\n                    }else {\r\n                        alert(\"Check fields and try again!\");\r\n                    }\r\n\r\n                });\r\n\r\n            });\r\n\r\n            exitBtn.addEventListener('click', this.close );\r\n\r\n        }\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Form);\n\n//# sourceURL=webpack://coursework/./application/form.js?");

/***/ }),

/***/ "./application/index.js":
/*!******************************!*\
  !*** ./application/index.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _form_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./form.js */ \"./application/form.js\");\n\r\n\r\n\r\n\r\n let popUpRegister = new _form_js__WEBPACK_IMPORTED_MODULE_0__.default(\"regForm\");\r\n let registerBtn = document.getElementById('registerBtn');\r\n\r\nregisterBtn.addEventListener('click', popUpRegister.show);\r\nregisterBtn.addEventListener('click', popUpRegister.build);\r\n\n\n//# sourceURL=webpack://coursework/./application/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
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
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./application/index.js");
/******/ 	
/******/ })()
;