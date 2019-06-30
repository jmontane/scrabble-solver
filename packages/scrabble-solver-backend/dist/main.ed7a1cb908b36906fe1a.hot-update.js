exports.id = "main";
exports.modules = {

/***/ "./src/solver/scores-calculator.js":
/*!*****************************************!*\
  !*** ./src/solver/scores-calculator.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar ScoresCalculator =\n/*#__PURE__*/\nfunction () {\n  function ScoresCalculator(config) {\n    _classCallCheck(this, ScoresCalculator);\n\n    this.config = config;\n  }\n\n  _createClass(ScoresCalculator, [{\n    key: \"calculate\",\n    value: function calculate(pattern) {\n      return this.calculatePatternScoreWithCollisions(pattern) + this.calculateBonusScore(pattern);\n    }\n  }, {\n    key: \"calculateBonusScore\",\n    value: function calculateBonusScore(pattern) {\n      var areAllTilesUsed = pattern.getNumberOfEmptyCells() === this.config.maximumNumberOfCharacters;\n      return areAllTilesUsed ? this.config.allTilesBonusScore : 0;\n    }\n  }, {\n    key: \"calculatePatternScoreWithCollisions\",\n    value: function calculatePatternScoreWithCollisions(pattern) {\n      var _this = this;\n\n      return pattern.getCollisions().reduce(function (patternsScore, collisionPattern) {\n        return patternsScore + _this.calculatePatternScore(collisionPattern);\n      }, this.calculatePatternScore(pattern));\n    }\n  }, {\n    key: \"calculatePatternScore\",\n    value: function calculatePatternScore(pattern) {\n      var _pattern$cells$reduce = pattern.cells.reduce(this.reduceCharacterScore, {\n        multiplier: 1,\n        score: 0\n      }),\n          multiplier = _pattern$cells$reduce.multiplier,\n          score = _pattern$cells$reduce.score;\n\n      return score * multiplier;\n    }\n  }, {\n    key: \"reduceCharacterScore\",\n    value: function reduceCharacterScore(_ref, cell) {\n      var multiplier = _ref.multiplier,\n          score = _ref.score;\n      var _cell$tile = cell.tile,\n          character = _cell$tile.character,\n          isBlank = _cell$tile.isBlank;\n\n      var _this$config$getCellB = this.config.getCellBonusValue(cell),\n          wordMultiplier = _this$config$getCellB.wordMultiplier,\n          characterMultiplier = _this$config$getCellB.characterMultiplier;\n\n      var characterScore = isBlank ? this.config.blankScore : this.config.pointsMap[character];\n      return {\n        multiplier: multiplier * wordMultiplier,\n        score: score + characterScore * characterMultiplier\n      };\n    }\n  }]);\n\n  return ScoresCalculator;\n}();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (ScoresCalculator);\n\n//# sourceURL=webpack:///./src/solver/scores-calculator.js?");

/***/ })

};