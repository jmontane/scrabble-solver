exports.id = "main";
exports.modules = {

/***/ "../scrabble-solver-commons/models/pattern.js":
/*!****************************************************!*\
  !*** ../scrabble-solver-commons/models/pattern.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar Pattern =\n/*#__PURE__*/\nfunction () {\n  function Pattern(_ref) {\n    var board = _ref.board,\n        cells = _ref.cells;\n\n    _classCallCheck(this, Pattern);\n\n    this.board = board;\n    this.cells = cells;\n  }\n\n  _createClass(Pattern, [{\n    key: \"getNumberOfEmptyCells\",\n    value: function getNumberOfEmptyCells() {\n      return this.cells.filter(function (cell) {\n        return cell.isEmpty;\n      }).length;\n    }\n  }, {\n    key: \"getIndexOfFirstCellWithoutTile\",\n    value: function getIndexOfFirstCellWithoutTile() {\n      return this.cells.findIndex(function (cell) {\n        return !cell.hasTile();\n      });\n    }\n  }, {\n    key: \"hasAtLeast1EmptyCell\",\n    value: function hasAtLeast1EmptyCell() {\n      return Boolean(this.cells.find(function (cell) {\n        return cell.isEmpty;\n      }));\n    }\n  }, {\n    key: \"hasAtLeast1NonEmptyCell\",\n    value: function hasAtLeast1NonEmptyCell() {\n      return Boolean(this.cells.find(function (cell) {\n        return !cell.isEmpty;\n      }));\n    }\n  }, {\n    key: \"collides\",\n    value: function collides() {\n      var _this = this;\n\n      return Boolean(this.cells.find(function (cell) {\n        return cell.isEmpty && _this.board.collides(cell);\n      }));\n    }\n  }, {\n    key: \"goesThroughBoardCenter\",\n    value: function goesThroughBoardCenter() {\n      var x = Math.floor(this.board.numberOfColumns / 2);\n      var y = Math.floor(this.board.numberOfRows / 2);\n      return this.cells.find(function (cell) {\n        return cell.x === x && cell.y === y && cell.isEmpty;\n      });\n    }\n  }, {\n    key: \"canBePlaced\",\n    value: function canBePlaced() {\n      var numberOfEmptyCells = this.getNumberOfEmptyCells();\n      var isNumberOfUsedCellsInRange = numberOfEmptyCells >= 1 && numberOfEmptyCells <= 7;\n      return isNumberOfUsedCellsInRange && (this.hasAtLeast1NonEmptyCell() || this.collides() || this.goesThroughBoardCenter() && this.board.isEmpty());\n    }\n  }, {\n    key: \"getCollisions\",\n    value: function getCollisions() {\n      return [];\n    }\n  }, {\n    key: \"toJson\",\n    value: function toJson() {\n      return {\n        cells: this.cells.map(function (cell) {\n          return cell.toJson();\n        }),\n        collisions: this.getCollisions().map(function (collision) {\n          return collision.toJson();\n        }),\n        word: this.toString()\n      };\n    }\n  }, {\n    key: \"toString\",\n    value: function toString() {\n      return this.cells.map(String).join('');\n    }\n  }, {\n    key: \"clone\",\n    value: function clone() {\n      return new this.constructor({\n        board: this.board,\n        cells: this.cells.map(function (cell) {\n          return cell.clone();\n        })\n      });\n    }\n  }]);\n\n  return Pattern;\n}();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Pattern);\n\n//# sourceURL=webpack:///../scrabble-solver-commons/models/pattern.js?");

/***/ })

};