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
  chatter: {
    title: "Чат",
    main_img: "chatter1",
    github: "https://github.com/RKolbnev/chatter",
    firebase: "https://chatter-df15a.web.app/",
    details: {
      used_technologies: ["Vue 3", "Sass", "Firebase"],
      images: ["chatter0", "chatter1", "chatter2", "chatter3", "chatter4"]
    }
  },
  trello: {
    title: "Упрощенная версия Trello",
    main_img: "simpleTrello",
    github: "https://github.com/RKolbnev/simple_Trello",
    firebase: "https://simpletrello-88eaf.web.app/",
    details: {
      used_technologies: ["JavaScript", "Sass", "Firebase"],
      images: ["trello1", "trello2", "trello3"]
    }
  },
  todo: {
    title: "Простой вариант системы котроля задач",
    main_img: "todo",
    github: "https://github.com/RKolbnev/todo_vue",
    firebase: "https://todo-vue-e2829.web.app/",
    details: {
      used_technologies: ["Vue 3", "Sass", "Firebase"],
      images: ["todo"]
    }
  },
  simon: {
    title: "Игра Simon",
    main_img: "simon-the-game",
    github: "https://github.com/RKolbnev/simon_the_game",
    firebase: "https://simon-53ab4.web.app/",
    details: {
      used_technologies: ["Vue 3", "Sass"],
      images: ["simon-the-game"]
    }
  },
  form: {
    title: "Форма создания клиента",
    main_img: "form",
    github: "https://github.com/RKolbnev/medods_test",
    firebase: "https://form-802dc.web.app/",
    details: {
      used_technologies: ["Vue 3", "Sass"],
      images: ["form"]
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
/* harmony import */ var _modules_openProject__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/openProject */ "./src/js/modules/openProject.js");



window.addEventListener("DOMContentLoaded", function () {
  for (var key in _dataBase__WEBPACK_IMPORTED_MODULE_0__["default"]) {
    Object(_modules_renderProject__WEBPACK_IMPORTED_MODULE_1__["default"])(_dataBase__WEBPACK_IMPORTED_MODULE_0__["default"][key], key);
  }

  Object(_modules_openProject__WEBPACK_IMPORTED_MODULE_2__["default"])();
});

/***/ }),

/***/ "./src/js/modules/openProject.js":
/*!***************************************!*\
  !*** ./src/js/modules/openProject.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _dataBase__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../dataBase */ "./src/js/dataBase.js");


var openProject = function openProject() {
  var className = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'project';
  var parent = document.querySelector('.projects__wrap');
  parent.addEventListener('click', function (e) {
    if (e.target.closest(".".concat(className))) {
      var elem = e.target.closest(".".concat(className));
      var project = _dataBase__WEBPACK_IMPORTED_MODULE_0__["default"][elem.getAttribute("id")];
      createModal(project);
    }
  });
};

function createModal(project) {
  var modal = document.createElement("div");
  modal.classList.add("modal__bg");
  modal.innerHTML = "\n    <div class=\"modal\">\n      <div class=\"slider\">\n        <button class=\"arrow prev\"></button>\n        <ul class=\"images\"></ul>\n        <button class=\"arrow next\"></button>\n      </div>\n      <div class=\"modal__info\">\n        <div class=\"info__used\">\n          <span>\u0418\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u0435\u043C\u044B\u0435 \u0442\u0435\u0445\u043D\u043E\u043B\u043E\u0433\u0438\u0438:</span>\n          <span> ".concat(project.details.used_technologies.join(' - '), "</span>\n        </div>\n        <div class=\"info__link\">\n          <a href=\"").concat(project.github, "\"><img src=\"./img/github_logo2.png\" alt=\"github\"></a>\n          <a href=\"").concat(project.firebase, "\"><img src=\"./img/firebase__logo.png\" alt=\"firebase\"></a>\n        </div>\n      </div>\n    </div>\n  ");
  var images = project.details.images;

  for (var i = 0; i < images.length; i++) {
    var li = document.createElement('li');
    li.innerHTML = "\n      <img src=\"./img/".concat(images[i], ".png\" alt=\"\u041A\u0430\u0440\u0442\u0438\u043D\u043A\u0430").concat(i + 1, "\">\n    ");
    modal.querySelector('.images').append(li);
  }

  document.querySelector('body').append(modal);
  modalHandler(modal);
}

function modalHandler(modal) {
  var next = modal.querySelector('.next');
  var prev = modal.querySelector('.prev');
  modal.addEventListener('click', function (e) {
    if (e.target === modal) modal.remove();
  });
  var images = modal.querySelector('.images');
  var step = 0;
  var current = 0;
  next.addEventListener('click', function () {
    if (current < images.children.length - 1) {
      step -= 75;
      current += 1;
    } else {
      step = 0;
      current = 0;
    }

    images.style.marginLeft = "".concat(step, "vw");
  });
  prev.addEventListener('click', function () {
    if (current === 0) {
      current = images.children.length - 1;
      step = -(current * 75);
    } else {
      current -= 1;
      step += 75;
    }

    images.style.marginLeft = "".concat(step, "vw");
  });
}

/* harmony default export */ __webpack_exports__["default"] = (openProject);

/***/ }),

/***/ "./src/js/modules/renderProject.js":
/*!*****************************************!*\
  !*** ./src/js/modules/renderProject.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var renderProject = function renderProject(data, key) {
  var project = document.createElement('div');
  project.classList.add('project');
  project.setAttribute('id', key);
  project.innerHTML = "\n    <div class=\"project__img\">\n      <img src=\"./img/".concat(data.main_img, ".png\" alt=\"").concat(data.title, "\">\n    </div>\n    <div class=\"project__desc\">\n      ").concat(data.title, "\n    </div>\n    <div class=\"project__link\">\n      <a href=\"").concat(data.github, "\"><img src=\"./img/github_logo2.png\" alt=\"github\"></a>\n      <a href=\"").concat(data.firebase, "\"><img src=\"./img/firebase__logo.png\" alt=\"firebase\"></a>\n    </div>\n  ");
  document.querySelector('.projects__wrap').append(project);
};

/* harmony default export */ __webpack_exports__["default"] = (renderProject);

/***/ })

/******/ });
//# sourceMappingURL=main.js.map