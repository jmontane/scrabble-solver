!function(e){var r={};function t(c){if(r[c])return r[c].exports;var o=r[c]={i:c,l:!1,exports:{}};return e[c].call(o.exports,o,o.exports,t),o.l=!0,o.exports}t.m=e,t.c=r,t.d=function(e,r,c){t.o(e,r)||Object.defineProperty(e,r,{enumerable:!0,get:c})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,r){if(1&r&&(e=t(e)),8&r)return e;if(4&r&&"object"==typeof e&&e&&e.__esModule)return e;var c=Object.create(null);if(t.r(c),Object.defineProperty(c,"default",{enumerable:!0,value:e}),2&r&&"string"!=typeof e)for(var o in e)t.d(c,o,function(r){return e[r]}.bind(null,o));return c},t.n=function(e){var r=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(r,"a",r),r},t.o=function(e,r){return Object.prototype.hasOwnProperty.call(e,r)},t.p="",t(t.s=2)}([function(e,r,t){"use strict";t.r(r),t.d(r,"EMPTY_CELL",function(){return c}),t.d(r,"BLANK",function(){return o}),t.d(r,"BONUS_CHARACTER",function(){return i}),t.d(r,"BONUS_WORD",function(){return l});var c=" ",o=" ",i="BONUS_CHARACTER",l="BONUS_WORD"},,function(e,r,t){"use strict";t.r(r);var c=t(0),o={id:"scrabble",name:"Scrabble",boardWidth:15,boardHeight:15,maximumNumberOfCharacters:7,minimumWordLength:2,maximumWordLength:15,blankScore:0,allTilesBonusScore:50,numberOfBlanks:2,bonuses:[{x:0,y:0,type:c.BONUS_WORD,multiplier:3},{x:3,y:0,type:c.BONUS_CHARACTER,multiplier:2},{x:7,y:0,type:c.BONUS_WORD,multiplier:3},{x:11,y:0,type:c.BONUS_CHARACTER,multiplier:2},{x:14,y:0,type:c.BONUS_WORD,multiplier:3},{x:1,y:1,type:c.BONUS_WORD,multiplier:2},{x:5,y:1,type:c.BONUS_CHARACTER,multiplier:3},{x:9,y:1,type:c.BONUS_CHARACTER,multiplier:3},{x:13,y:1,type:c.BONUS_WORD,multiplier:2},{x:2,y:2,type:c.BONUS_WORD,multiplier:2},{x:6,y:2,type:c.BONUS_CHARACTER,multiplier:2},{x:8,y:2,type:c.BONUS_CHARACTER,multiplier:2},{x:12,y:2,type:c.BONUS_WORD,multiplier:2},{x:0,y:3,type:c.BONUS_CHARACTER,multiplier:2},{x:3,y:3,type:c.BONUS_WORD,multiplier:2},{x:7,y:3,type:c.BONUS_CHARACTER,multiplier:2},{x:11,y:3,type:c.BONUS_WORD,multiplier:2},{x:14,y:3,type:c.BONUS_CHARACTER,multiplier:2},{x:4,y:4,type:c.BONUS_WORD,multiplier:2},{x:10,y:4,type:c.BONUS_WORD,multiplier:2},{x:1,y:5,type:c.BONUS_CHARACTER,multiplier:3},{x:5,y:5,type:c.BONUS_CHARACTER,multiplier:3},{x:9,y:5,type:c.BONUS_CHARACTER,multiplier:3},{x:13,y:5,type:c.BONUS_CHARACTER,multiplier:3},{x:2,y:6,type:c.BONUS_CHARACTER,multiplier:2},{x:6,y:6,type:c.BONUS_CHARACTER,multiplier:2},{x:8,y:6,type:c.BONUS_CHARACTER,multiplier:2},{x:12,y:6,type:c.BONUS_CHARACTER,multiplier:2},{x:0,y:7,type:c.BONUS_WORD,multiplier:3},{x:3,y:7,type:c.BONUS_CHARACTER,multiplier:2},{x:7,y:7,type:c.BONUS_WORD,multiplier:2},{x:11,y:7,type:c.BONUS_CHARACTER,multiplier:2},{x:14,y:7,type:c.BONUS_WORD,multiplier:3},{x:2,y:8,type:c.BONUS_CHARACTER,multiplier:2},{x:6,y:8,type:c.BONUS_CHARACTER,multiplier:2},{x:8,y:8,type:c.BONUS_CHARACTER,multiplier:2},{x:12,y:8,type:c.BONUS_CHARACTER,multiplier:2},{x:1,y:9,type:c.BONUS_CHARACTER,multiplier:3},{x:5,y:9,type:c.BONUS_CHARACTER,multiplier:3},{x:9,y:9,type:c.BONUS_CHARACTER,multiplier:3},{x:13,y:9,type:c.BONUS_CHARACTER,multiplier:3},{x:4,y:10,type:c.BONUS_WORD,multiplier:2},{x:10,y:10,type:c.BONUS_WORD,multiplier:2},{x:0,y:11,type:c.BONUS_CHARACTER,multiplier:2},{x:3,y:11,type:c.BONUS_WORD,multiplier:2},{x:7,y:11,type:c.BONUS_CHARACTER,multiplier:2},{x:11,y:11,type:c.BONUS_WORD,multiplier:2},{x:14,y:11,type:c.BONUS_CHARACTER,multiplier:2},{x:2,y:12,type:c.BONUS_WORD,multiplier:2},{x:6,y:12,type:c.BONUS_CHARACTER,multiplier:2},{x:8,y:12,type:c.BONUS_CHARACTER,multiplier:2},{x:12,y:12,type:c.BONUS_WORD,multiplier:2},{x:1,y:13,type:c.BONUS_WORD,multiplier:2},{x:5,y:13,type:c.BONUS_CHARACTER,multiplier:3},{x:9,y:13,type:c.BONUS_CHARACTER,multiplier:3},{x:13,y:13,type:c.BONUS_WORD,multiplier:2},{x:0,y:14,type:c.BONUS_WORD,multiplier:3},{x:3,y:14,type:c.BONUS_CHARACTER,multiplier:2},{x:7,y:14,type:c.BONUS_WORD,multiplier:3},{x:11,y:14,type:c.BONUS_CHARACTER,multiplier:2},{x:14,y:14,type:c.BONUS_WORD,multiplier:3}]};function i(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}var l=function(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{},c=Object.keys(t);"function"==typeof Object.getOwnPropertySymbols&&(c=c.concat(Object.getOwnPropertySymbols(t).filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),c.forEach(function(r){i(e,r,t[r])})}return e}({},o,{characters:[{character:"a",score:1,count:9},{character:"b",score:3,count:2},{character:"c",score:3,count:2},{character:"d",score:2,count:4},{character:"e",score:1,count:12},{character:"f",score:4,count:2},{character:"g",score:2,count:3},{character:"h",score:4,count:2},{character:"i",score:1,count:9},{character:"j",score:8,count:1},{character:"k",score:5,count:1},{character:"l",score:1,count:4},{character:"m",score:3,count:2},{character:"n",score:1,count:6},{character:"o",score:1,count:8},{character:"p",score:3,count:2},{character:"q",score:10,count:1},{character:"r",score:1,count:6},{character:"s",score:1,count:4},{character:"t",score:1,count:6},{character:"u",score:1,count:4},{character:"v",score:4,count:2},{character:"w",score:4,count:2},{character:"x",score:8,count:1},{character:"y",score:4,count:2},{character:"z",score:10,count:1}]});function u(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}var y={id:"scrabble",name:"Scrabble","en-GB":l,"en-US":l,"pl-PL":function(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{},c=Object.keys(t);"function"==typeof Object.getOwnPropertySymbols&&(c=c.concat(Object.getOwnPropertySymbols(t).filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),c.forEach(function(r){u(e,r,t[r])})}return e}({},o,{characters:[{character:"a",score:1,count:9},{character:"ą",score:5,count:1},{character:"b",score:3,count:2},{character:"c",score:2,count:3},{character:"ć",score:6,count:1},{character:"d",score:2,count:3},{character:"e",score:1,count:7},{character:"ę",score:5,count:1},{character:"f",score:5,count:1},{character:"g",score:3,count:2},{character:"h",score:3,count:2},{character:"i",score:1,count:8},{character:"j",score:3,count:2},{character:"k",score:2,count:3},{character:"l",score:2,count:3},{character:"ł",score:3,count:2},{character:"m",score:2,count:3},{character:"n",score:1,count:5},{character:"ń",score:7,count:1},{character:"o",score:1,count:6},{character:"ó",score:5,count:1},{character:"p",score:2,count:3},{character:"r",score:1,count:4},{character:"s",score:1,count:4},{character:"ś",score:5,count:1},{character:"t",score:2,count:3},{character:"u",score:3,count:2},{character:"w",score:1,count:4},{character:"y",score:2,count:4},{character:"z",score:1,count:5},{character:"ź",score:5,count:1},{character:"ż",score:9,count:1}]})},p={id:"literaki",name:"Literaki",boardWidth:15,boardHeight:15,maximumNumberOfCharacters:7,minimumWordLength:2,maximumWordLength:15,blankScore:0,allTilesBonusScore:50,numberOfBlanks:2,bonuses:[{x:0,y:0,type:c.BONUS_CHARACTER,score:5,multiplier:3},{x:2,y:0,type:c.BONUS_WORD,multiplier:3},{x:5,y:0,type:c.BONUS_CHARACTER,score:2,multiplier:3},{x:7,y:0,type:c.BONUS_CHARACTER,score:5,multiplier:3},{x:9,y:0,type:c.BONUS_CHARACTER,score:2,multiplier:3},{x:12,y:0,type:c.BONUS_WORD,multiplier:3},{x:14,y:0,type:c.BONUS_CHARACTER,score:5,multiplier:3},{x:4,y:1,type:c.BONUS_CHARACTER,score:2,multiplier:3},{x:6,y:1,type:c.BONUS_CHARACTER,score:5,multiplier:3},{x:8,y:1,type:c.BONUS_CHARACTER,score:5,multiplier:3},{x:10,y:1,type:c.BONUS_CHARACTER,score:2,multiplier:3},{x:0,y:2,type:c.BONUS_WORD,multiplier:3},{x:3,y:2,type:c.BONUS_CHARACTER,score:2,multiplier:3},{x:5,y:2,type:c.BONUS_WORD,multiplier:2},{x:7,y:2,type:c.BONUS_CHARACTER,score:1,multiplier:3},{x:9,y:2,type:c.BONUS_WORD,multiplier:2},{x:11,y:2,type:c.BONUS_CHARACTER,score:2,multiplier:3},{x:14,y:2,type:c.BONUS_WORD,multiplier:3},{x:2,y:3,type:c.BONUS_CHARACTER,score:2,multiplier:3},{x:4,y:3,type:c.BONUS_WORD,multiplier:2},{x:6,y:3,type:c.BONUS_CHARACTER,score:1,multiplier:3},{x:8,y:3,type:c.BONUS_CHARACTER,score:1,multiplier:3},{x:10,y:3,type:c.BONUS_WORD,multiplier:2},{x:12,y:3,type:c.BONUS_CHARACTER,score:2,multiplier:3},{x:1,y:4,type:c.BONUS_CHARACTER,score:2,multiplier:3},{x:3,y:4,type:c.BONUS_WORD,multiplier:2},{x:5,y:4,type:c.BONUS_CHARACTER,score:1,multiplier:3},{x:9,y:4,type:c.BONUS_CHARACTER,score:1,multiplier:3},{x:11,y:4,type:c.BONUS_WORD,multiplier:2},{x:13,y:4,type:c.BONUS_CHARACTER,score:2,multiplier:3},{x:0,y:5,type:c.BONUS_CHARACTER,score:2,multiplier:3},{x:2,y:5,type:c.BONUS_WORD,multiplier:2},{x:4,y:5,type:c.BONUS_CHARACTER,score:1,multiplier:3},{x:7,y:5,type:c.BONUS_CHARACTER,score:3,multiplier:3},{x:10,y:5,type:c.BONUS_CHARACTER,score:1,multiplier:3},{x:12,y:5,type:c.BONUS_WORD,multiplier:2},{x:14,y:5,type:c.BONUS_CHARACTER,score:2,multiplier:3},{x:1,y:6,type:c.BONUS_CHARACTER,score:5,multiplier:3},{x:3,y:6,type:c.BONUS_CHARACTER,score:1,multiplier:3},{x:6,y:6,type:c.BONUS_CHARACTER,score:3,multiplier:3},{x:8,y:6,type:c.BONUS_CHARACTER,score:3,multiplier:3},{x:11,y:6,type:c.BONUS_CHARACTER,score:1,multiplier:3},{x:13,y:6,type:c.BONUS_CHARACTER,score:5,multiplier:3},{x:0,y:7,type:c.BONUS_CHARACTER,score:5,multiplier:3},{x:2,y:7,type:c.BONUS_CHARACTER,score:1,multiplier:3},{x:5,y:7,type:c.BONUS_CHARACTER,score:3,multiplier:3},{x:7,y:7,type:c.BONUS_CHARACTER,score:5,multiplier:3},{x:9,y:7,type:c.BONUS_CHARACTER,score:3,multiplier:3},{x:12,y:7,type:c.BONUS_CHARACTER,score:1,multiplier:3},{x:14,y:7,type:c.BONUS_CHARACTER,score:5,multiplier:3},{x:1,y:8,type:c.BONUS_CHARACTER,score:5,multiplier:3},{x:3,y:8,type:c.BONUS_CHARACTER,score:1,multiplier:3},{x:6,y:8,type:c.BONUS_CHARACTER,score:3,multiplier:3},{x:8,y:8,type:c.BONUS_CHARACTER,score:3,multiplier:3},{x:11,y:8,type:c.BONUS_CHARACTER,score:1,multiplier:3},{x:13,y:8,type:c.BONUS_CHARACTER,score:5,multiplier:3},{x:0,y:9,type:c.BONUS_CHARACTER,score:2,multiplier:3},{x:2,y:9,type:c.BONUS_WORD,multiplier:2},{x:4,y:9,type:c.BONUS_CHARACTER,score:1,multiplier:3},{x:7,y:9,type:c.BONUS_CHARACTER,score:3,multiplier:3},{x:10,y:9,type:c.BONUS_CHARACTER,score:1,multiplier:3},{x:12,y:9,type:c.BONUS_WORD,multiplier:2},{x:14,y:9,type:c.BONUS_CHARACTER,score:2,multiplier:3},{x:1,y:10,type:c.BONUS_CHARACTER,score:2,multiplier:3},{x:3,y:10,type:c.BONUS_WORD,multiplier:2},{x:5,y:10,type:c.BONUS_CHARACTER,score:1,multiplier:3},{x:9,y:10,type:c.BONUS_CHARACTER,score:1,multiplier:3},{x:11,y:10,type:c.BONUS_WORD,multiplier:2},{x:13,y:10,type:c.BONUS_CHARACTER,score:2,multiplier:3},{x:2,y:11,type:c.BONUS_CHARACTER,score:2,multiplier:3},{x:4,y:11,type:c.BONUS_WORD,multiplier:2},{x:6,y:11,type:c.BONUS_CHARACTER,score:1,multiplier:3},{x:8,y:11,type:c.BONUS_CHARACTER,score:1,multiplier:3},{x:10,y:11,type:c.BONUS_WORD,multiplier:2},{x:12,y:11,type:c.BONUS_CHARACTER,score:2,multiplier:3},{x:0,y:12,type:c.BONUS_WORD,multiplier:3},{x:3,y:12,type:c.BONUS_CHARACTER,score:2,multiplier:3},{x:5,y:12,type:c.BONUS_WORD,multiplier:2},{x:7,y:12,type:c.BONUS_CHARACTER,score:1,multiplier:3},{x:9,y:12,type:c.BONUS_WORD,multiplier:2},{x:11,y:12,type:c.BONUS_CHARACTER,score:2,multiplier:3},{x:14,y:12,type:c.BONUS_WORD,multiplier:3},{x:4,y:13,type:c.BONUS_CHARACTER,score:2,multiplier:3},{x:6,y:13,type:c.BONUS_CHARACTER,score:5,multiplier:3},{x:8,y:13,type:c.BONUS_CHARACTER,score:5,multiplier:3},{x:10,y:13,type:c.BONUS_CHARACTER,score:2,multiplier:3},{x:0,y:14,type:c.BONUS_CHARACTER,score:5,multiplier:3},{x:2,y:14,type:c.BONUS_WORD,multiplier:3},{x:5,y:14,type:c.BONUS_CHARACTER,score:2,multiplier:3},{x:7,y:14,type:c.BONUS_CHARACTER,score:5,multiplier:3},{x:9,y:14,type:c.BONUS_CHARACTER,score:2,multiplier:3},{x:12,y:14,type:c.BONUS_WORD,multiplier:3},{x:14,y:14,type:c.BONUS_CHARACTER,score:5,multiplier:3}]};function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}var n=function(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{},c=Object.keys(t);"function"==typeof Object.getOwnPropertySymbols&&(c=c.concat(Object.getOwnPropertySymbols(t).filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),c.forEach(function(r){a(e,r,t[r])})}return e}({},p,{characters:[{character:"a",score:1,count:9},{character:"b",score:3,count:2},{character:"c",score:3,count:2},{character:"d",score:2,count:4},{character:"e",score:1,count:12},{character:"f",score:4,count:2},{character:"g",score:2,count:3},{character:"h",score:4,count:2},{character:"i",score:1,count:9},{character:"j",score:8,count:1},{character:"k",score:5,count:1},{character:"l",score:1,count:4},{character:"m",score:3,count:2},{character:"n",score:1,count:6},{character:"o",score:1,count:8},{character:"p",score:3,count:2},{character:"q",score:10,count:1},{character:"r",score:1,count:6},{character:"s",score:1,count:4},{character:"t",score:1,count:6},{character:"u",score:1,count:4},{character:"v",score:4,count:2},{character:"w",score:4,count:2},{character:"x",score:8,count:1},{character:"y",score:4,count:2},{character:"z",score:10,count:1}]});function R(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}var O={id:"literaki",name:"Literaki","en-GB":n,"en-US":n,"pl-PL":function(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{},c=Object.keys(t);"function"==typeof Object.getOwnPropertySymbols&&(c=c.concat(Object.getOwnPropertySymbols(t).filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),c.forEach(function(r){R(e,r,t[r])})}return e}({},p,{characters:[{character:"a",score:1,count:9},{character:"ą",score:5,count:1},{character:"b",score:3,count:2},{character:"c",score:2,count:3},{character:"ć",score:5,count:1},{character:"d",score:2,count:3},{character:"e",score:1,count:7},{character:"ę",score:5,count:1},{character:"f",score:5,count:1},{character:"g",score:3,count:2},{character:"h",score:3,count:2},{character:"i",score:1,count:8},{character:"j",score:3,count:2},{character:"k",score:2,count:3},{character:"l",score:2,count:3},{character:"ł",score:3,count:2},{character:"m",score:2,count:3},{character:"n",score:1,count:5},{character:"ń",score:5,count:1},{character:"o",score:1,count:6},{character:"ó",score:5,count:1},{character:"p",score:2,count:3},{character:"r",score:1,count:4},{character:"s",score:1,count:4},{character:"ś",score:5,count:1},{character:"t",score:2,count:3},{character:"u",score:3,count:2},{character:"w",score:1,count:4},{character:"y",score:2,count:4},{character:"z",score:1,count:5},{character:"ź",score:5,count:1},{character:"ż",score:5,count:1}]})};t.d(r,"scrabble",function(){return y}),t.d(r,"literaki",function(){return O})}]);