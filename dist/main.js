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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/dataBase.js":
/*!****************************!*\
  !*** ./src/js/dataBase.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var data = {
  form: {
    title: "Форма создания клиента",
    main_img: "form",
    github: "https://github.com/RKolbnev/medods_test",
    firebase: "https://form-802dc.web.app/",
    details: {
      used_technologies: ["Vue 3", "Sass"],
      images: ["form"]
    }
  },
  simon: {
    title: "Simon the game",
    main_img: "simon-the-game",
    github: "https://github.com/RKolbnev/simon_the_game",
    firebase: "https://simon-53ab4.web.app/",
    details: {
      used_technologies: ["Vue 3", "Sass"],
      images: ["simon-the-game"]
    }
  },
  todo: {
    title: "ToDo",
    main_img: "todo",
    github: "https://github.com/RKolbnev/todo_vue",
    firebase: "https://todo-vue-e2829.web.app/",
    details: {
      used_technologies: ["Vue 3", "Sass", "Firebase"],
      images: ["todo"]
    }
  },
  trello: {
    title: "Simple Trello",
    main_img: "trello0",
    github: "https://github.com/RKolbnev/simple_Trello",
    firebase: "https://simpletrello-88eaf.web.app/",
    details: {
      used_technologies: ["JavaScript", "Sass", "Firebase"],
      images: ["trello0", "trello1", "trello2", "trello3"]
    }
  },
  chatter: {
    title: "Chatter",
    main_img: "chatter1",
    github: "https://github.com/RKolbnev/chatter",
    firebase: "https://chatter-df15a.web.app/",
    details: {
      used_technologies: ["Vue 3", "Vue-Router", "VueX", "Sass", "Firebase"],
      images: ["chatter0", "chatter1", "chatter2", "chatter3", "chatter4", "chatter5"]
    }
  },
  dataset: {
    title: "SPA для создания моделей нейронных сетей",
    main_img: "dataset0",
    github: "https://github.com/RKolbnev/dataset",
    firebase: "https://dataset-test-64a39.web.app",
    details: {
      used_technologies: ["Vue 3", "Sass", "Vue-Router", "Vue-Simple-Flowchart"],
      images: ["dataset0", "dataset1"]
    }
  }
};
/* harmony default export */ __webpack_exports__["default"] = (data);

/***/ }),

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _dataBase__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dataBase */ "./src/js/dataBase.js");
/* harmony import */ var _modules_renderProject__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/renderProject */ "./src/js/modules/renderProject.js");


window.addEventListener("DOMContentLoaded", function () {
  for (var key in _dataBase__WEBPACK_IMPORTED_MODULE_0__["default"]) {
    Object(_modules_renderProject__WEBPACK_IMPORTED_MODULE_1__["default"])(_dataBase__WEBPACK_IMPORTED_MODULE_0__["default"][key], key);
  }
});

/***/ }),

/***/ "./src/js/modules/renderProject.js":
/*!*****************************************!*\
  !*** ./src/js/modules/renderProject.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

var renderProject = function renderProject(data, key) {
  var wrap = document.querySelector(".projects__wrap");
  var number = wrap.childElementCount >= 10 ? wrap.childElementCount + 1 : "0".concat(wrap.childElementCount + 1);
  var project = document.createElement('div');
  project.classList.add('project');
  project.setAttribute('id', key);
  project.innerHTML = "\n    <div class=\"project__img\">\n      <ul></ul>\n    </div>\n    <div class=\"project__info\">\n      <div class=\"number\">".concat(number, "</div>\n      <span class=\"desc\">").concat(data.title, "</span>\n      <div class=\"project__link\">\n        <a href=\"").concat(data.github, "\">View code</a>\n        <a href=\"").concat(data.firebase, "\">View project</a>\n      </div>\n    </div>\n  ");
  var imgWrap = project.querySelector('.project__img > UL');

  var _iterator = _createForOfIteratorHelper(data.details.images),
      _step;

  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var i = _step.value;
      var img = document.createElement('li');
      img.innerHTML = "<img src=\"./img/".concat(i, ".png\" alt=\"\u041A\u0430\u0440\u0442\u0438\u043D\u043A\u0430").concat(i + 1, "\">");
      imgWrap.append(img);
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }

  wrap.append(project);
  autoslider(imgWrap);
};

/* harmony default export */ __webpack_exports__["default"] = (renderProject);

function autoslider(wrap) {
  setInterval(function () {
    var currentMargin = +wrap.style.marginLeft.replace('px', '');
    var step = +window.getComputedStyle(wrap.children[0]).width.replace('px', '');
    var count = wrap.childElementCount;

    if (Math.abs(currentMargin) < step * (count - 1)) {
      wrap.style.marginLeft = +wrap.style.marginLeft.replace('px', '') - step + "px";
    } else {
      wrap.style.marginLeft = 0 + "px";
    }
  }, 5000);
}

/***/ })

/******/ });
//# sourceMappingURL=main.js.map