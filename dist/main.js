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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/main/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/electron-widevinecdm/lib/constants.js":
/*!************************************************************!*\
  !*** ./node_modules/electron-widevinecdm/lib/constants.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


const CHROME_VERSION = '61.0.3163.79';
const WIDEVINECDM_VERSION = '1.4.8.1008';

module.exports = {
  WIDEVINECDM_VERSION,
  CHROME_VERSION
};

/***/ }),

/***/ "./node_modules/electron-widevinecdm/lib/index.js":
/*!********************************************************!*\
  !*** ./node_modules/electron-widevinecdm/lib/index.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


const fs = __webpack_require__(/*! fs */ "fs");
const path = __webpack_require__(/*! path */ "path");

const { WIDEVINECDM_VERSION } = __webpack_require__(/*! ./constants */ "./node_modules/electron-widevinecdm/lib/constants.js");

const load = app => {
  if (process.platform === 'win32') return;

  let widevineCdmPluginFilename;
  switch (process.platform) {
    case 'darwin':
      widevineCdmPluginFilename = path.join('_platform_specific', 'mac_x64', 'widevinecdmadapter.plugin');
      break;
    case 'linux':
      widevineCdmPluginFilename = 'libwidevinecdmadapter.so';
      break;
    default:
    case 'win32':
      widevineCdmPluginFilename = path.join('_platform_specific', `win_${process.arch === 'ia32' ? 'x86' : process.arch}`, 'widevinecdmadapter.dll');
  }

  const asarUnpackedPath = path.join(process.resourcesPath, 'app.asar.unpacked', 'node_modules', 'electron-widevinecdm', 'widevine', `${process.platform}_${process.arch}`, widevineCdmPluginFilename);
  const normalPath = path.join(__dirname, '..', 'widevine', `${process.platform}_${process.arch}`, widevineCdmPluginFilename);

  if (fs.existsSync(asarUnpackedPath)) {
    app.commandLine.appendSwitch('widevine-cdm-path', asarUnpackedPath);
  } else {
    app.commandLine.appendSwitch('widevine-cdm-path', normalPath);
  }

  app.commandLine.appendSwitch('widevine-cdm-version', WIDEVINECDM_VERSION);
};

module.exports = {
  load
};

/***/ }),

/***/ "./src/main/index.js":
/*!***************************!*\
  !*** ./src/main/index.js ***!
  \***************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var electron__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! electron */ "electron");
/* harmony import */ var electron__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(electron__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var electron_widevinecdm__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! electron-widevinecdm */ "./node_modules/electron-widevinecdm/lib/index.js");
/* harmony import */ var electron_widevinecdm__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(electron_widevinecdm__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! path */ "path");
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_2__);
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




var mainWindow;
var isDevelopment = "development" === "development";
electron_widevinecdm__WEBPACK_IMPORTED_MODULE_1___default.a.load(electron__WEBPACK_IMPORTED_MODULE_0__["app"]);
electron__WEBPACK_IMPORTED_MODULE_0__["app"].commandLine.appendSwitch("--allow-running-insecure-content");
electron__WEBPACK_IMPORTED_MODULE_0__["app"].commandLine.appendSwitch("--ignore-certificate-errors");

function createWindow() {
  var _webPreferences;

  mainWindow = new electron__WEBPACK_IMPORTED_MODULE_0__["BrowserWindow"]({
    width: 800,
    height: 600,
    webPreferences: (_webPreferences = {
      plugins: true,
      nodeIntegration: false
    }, _defineProperty(_webPreferences, "plugins", true), _defineProperty(_webPreferences, "webSecurity", false), _defineProperty(_webPreferences, "allowDisplayingInsecureContent", true), _defineProperty(_webPreferences, "allowRunningInsecureContent", true), _webPreferences)
  }); // mainWindow.loadURL("http://localhost:8000/test/");

  mainWindow.loadURL("file://".concat(path__WEBPACK_IMPORTED_MODULE_2___default.a.resolve(__dirname, "./index.html")), {
    userAgent: "Mozilla/5.0 (Windows NT 6.3; Trident/7.0; rv:11.0) like Gecko"
  });

  if (isDevelopment) {
    mainWindow.webContents.openDevTools();
  }

  mainWindow.on("closed", function () {
    mainWindow = null;
  });
}

electron__WEBPACK_IMPORTED_MODULE_0__["app"].on("ready", createWindow); //使用child_process fork 子进程进行调试, 用process.send 和 nodejs 进程进行通信，达到重载页面的目的
// don't delete

if (isDevelopment) {
  process.on("message", function (msg) {
    if (msg === "RELOAD") {
      mainWindow && mainWindow.reload();
    }
  });
}

/***/ }),

/***/ "electron":
/*!***************************!*\
  !*** external "electron" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("electron");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("fs");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("path");

/***/ })

/******/ });
//# sourceMappingURL=main.js.map