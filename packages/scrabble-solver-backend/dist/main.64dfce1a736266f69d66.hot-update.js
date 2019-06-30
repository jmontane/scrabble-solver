exports.id = "main";
exports.modules = {

/***/ "./src/endpoints/search-pl-dictionary.js":
/*!***********************************************!*\
  !*** ./src/endpoints/search-pl-dictionary.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var express_http_proxy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express-http-proxy */ \"express-http-proxy\");\n/* harmony import */ var express_http_proxy__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express_http_proxy__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var cheerio__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! cheerio */ \"cheerio\");\n/* harmony import */ var cheerio__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(cheerio__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var scrabble_solver_commons_models__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! scrabble-solver-commons/models */ \"../scrabble-solver-commons/models/index.js\");\n\n\n\nvar DICTIONARY_URL = 'https://sjp.pl';\n/* harmony default export */ __webpack_exports__[\"default\"] = (express_http_proxy__WEBPACK_IMPORTED_MODULE_0___default()(DICTIONARY_URL, {\n  https: true,\n  userResDecorator: function userResDecorator(proxyResponse, proxyResponseData) {\n    return parseSjpResponse(proxyResponseData.toString('utf8'));\n  }\n}));\n\nvar parseSjpResponse = function parseSjpResponse(html) {\n  var $ = cheerio__WEBPACK_IMPORTED_MODULE_1___default.a.load(html);\n  var $header = $($('h1')[0]);\n  var $isAllowed = getIsAllowedNode($header);\n  var $definitions = getDefinitionsNode($header);\n  var wordDefinition = new scrabble_solver_commons_models__WEBPACK_IMPORTED_MODULE_2__[\"WordDefinition\"]({\n    definitions: getTrimmedDefinitions($definitions),\n    isAllowed: isAllowed($isAllowed)\n  });\n  return wordDefinition.toJson();\n};\n\nvar getIsAllowedNode = function getIsAllowedNode($header) {\n  return $header.next();\n};\n\nvar getWordNode = function getWordNode($header) {\n  return $header.next().next();\n};\n\nvar getDefinitionsNode = function getDefinitionsNode($header) {\n  return $header.next().next().next().next();\n};\n\nvar isAllowed = function isAllowed($isAllowed) {\n  return trim($isAllowed.text()).indexOf('dopuszczalne w grach') >= 0;\n};\n\nvar getTrimmedDefinitions = function getTrimmedDefinitions($definitions) {\n  return getDefinitions($definitions).map(trim).filter(Boolean);\n};\n\nvar getDefinitions = function getDefinitions($definitions) {\n  return $definitions.text().trim().split(/\\d+\\./);\n};\n\nvar trim = function trim(text) {\n  return text.trim();\n};\n\n//# sourceURL=webpack:///./src/endpoints/search-pl-dictionary.js?");

/***/ })

};