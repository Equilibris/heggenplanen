"use strict";
(() => {
var exports = {};
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js":
/*!**************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/requiredArgs/index.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ requiredArgs)
/* harmony export */ });
function requiredArgs(required, args) {
  if (args.length < required) {
    throw new TypeError(required + ' argument' + (required > 1 ? 's' : '') + ' required, but only ' + args.length + ' present');
  }
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/toInteger/index.js":
/*!***********************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/toInteger/index.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ toInteger)
/* harmony export */ });
function toInteger(dirtyNumber) {
  if (dirtyNumber === null || dirtyNumber === true || dirtyNumber === false) {
    return NaN;
  }

  var number = Number(dirtyNumber);

  if (isNaN(number)) {
    return number;
  }

  return number < 0 ? Math.ceil(number) : Math.floor(number);
}

/***/ }),

/***/ "./node_modules/date-fns/esm/getWeek/index.js":
/*!****************************************************!*\
  !*** ./node_modules/date-fns/esm/getWeek/index.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getWeek)
/* harmony export */ });
/* harmony import */ var _startOfWeek_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../startOfWeek/index.js */ "./node_modules/date-fns/esm/startOfWeek/index.js");
/* harmony import */ var _startOfWeekYear_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../startOfWeekYear/index.js */ "./node_modules/date-fns/esm/startOfWeekYear/index.js");
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");




var MILLISECONDS_IN_WEEK = 604800000;
/**
 * @name getWeek
 * @category Week Helpers
 * @summary Get the local week index of the given date.
 *
 * @description
 * Get the local week index of the given date.
 * The exact calculation depends on the values of
 * `options.weekStartsOn` (which is the index of the first day of the week)
 * and `options.firstWeekContainsDate` (which is the day of January, which is always in
 * the first week of the week-numbering year)
 *
 * Week numbering: https://en.wikipedia.org/wiki/Week#Week_numbering
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} date - the given date
 * @param {Object} [options] - an object with options.
 * @param {Locale} [options.locale=defaultLocale] - the locale object. See [Locale]{@link https://date-fns.org/docs/Locale}
 * @param {0|1|2|3|4|5|6} [options.weekStartsOn=0] - the index of the first day of the week (0 - Sunday)
 * @param {1|2|3|4|5|6|7} [options.firstWeekContainsDate=1] - the day of January, which is always in the first week of the year
 * @returns {Number} the week
 * @throws {TypeError} 1 argument required
 * @throws {RangeError} `options.weekStartsOn` must be between 0 and 6
 * @throws {RangeError} `options.firstWeekContainsDate` must be between 1 and 7
 *
 * @example
 * // Which week of the local week numbering year is 2 January 2005 with default options?
 * const result = getISOWeek(new Date(2005, 0, 2))
 * //=> 2
 *
 * // Which week of the local week numbering year is 2 January 2005,
 * // if Monday is the first day of the week,
 * // and the first week of the year always contains 4 January?
 * const result = getISOWeek(new Date(2005, 0, 2), {
 *   weekStartsOn: 1,
 *   firstWeekContainsDate: 4
 * })
 * //=> 53
 */

function getWeek(dirtyDate, options) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__.default)(1, arguments);
  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__.default)(dirtyDate);
  var diff = (0,_startOfWeek_index_js__WEBPACK_IMPORTED_MODULE_2__.default)(date, options).getTime() - (0,_startOfWeekYear_index_js__WEBPACK_IMPORTED_MODULE_3__.default)(date, options).getTime(); // Round the number of days to the nearest integer
  // because the number of milliseconds in a week is not constant
  // (e.g. it's different in the week of the daylight saving time clock shift)

  return Math.round(diff / MILLISECONDS_IN_WEEK) + 1;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/getWeekYear/index.js":
/*!********************************************************!*\
  !*** ./node_modules/date-fns/esm/getWeekYear/index.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getWeekYear)
/* harmony export */ });
/* harmony import */ var _startOfWeek_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../startOfWeek/index.js */ "./node_modules/date-fns/esm/startOfWeek/index.js");
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_lib/toInteger/index.js */ "./node_modules/date-fns/esm/_lib/toInteger/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");





/**
 * @name getWeekYear
 * @category Week-Numbering Year Helpers
 * @summary Get the local week-numbering year of the given date.
 *
 * @description
 * Get the local week-numbering year of the given date.
 * The exact calculation depends on the values of
 * `options.weekStartsOn` (which is the index of the first day of the week)
 * and `options.firstWeekContainsDate` (which is the day of January, which is always in
 * the first week of the week-numbering year)
 *
 * Week numbering: https://en.wikipedia.org/wiki/Week#Week_numbering
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} date - the given date
 * @param {Object} [options] - an object with options.
 * @param {Locale} [options.locale=defaultLocale] - the locale object. See [Locale]{@link https://date-fns.org/docs/Locale}
 * @param {0|1|2|3|4|5|6} [options.weekStartsOn=0] - the index of the first day of the week (0 - Sunday)
 * @param {1|2|3|4|5|6|7} [options.firstWeekContainsDate=1] - the day of January, which is always in the first week of the year
 * @returns {Number} the local week-numbering year
 * @throws {TypeError} 1 argument required
 * @throws {RangeError} `options.weekStartsOn` must be between 0 and 6
 * @throws {RangeError} `options.firstWeekContainsDate` must be between 1 and 7
 *
 * @example
 * // Which week numbering year is 26 December 2004 with the default settings?
 * const result = getWeekYear(new Date(2004, 11, 26))
 * //=> 2005
 *
 * @example
 * // Which week numbering year is 26 December 2004 if week starts on Saturday?
 * const result = getWeekYear(new Date(2004, 11, 26), { weekStartsOn: 6 })
 * //=> 2004
 *
 * @example
 * // Which week numbering year is 26 December 2004 if the first week contains 4 January?
 * const result = getWeekYear(new Date(2004, 11, 26), { firstWeekContainsDate: 4 })
 * //=> 2004
 */
function getWeekYear(dirtyDate, options) {
  var _options$locale, _options$locale$optio;

  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__.default)(1, arguments);
  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__.default)(dirtyDate);
  var year = date.getFullYear();
  var localeFirstWeekContainsDate = options === null || options === void 0 ? void 0 : (_options$locale = options.locale) === null || _options$locale === void 0 ? void 0 : (_options$locale$optio = _options$locale.options) === null || _options$locale$optio === void 0 ? void 0 : _options$locale$optio.firstWeekContainsDate;
  var defaultFirstWeekContainsDate = localeFirstWeekContainsDate == null ? 1 : (0,_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__.default)(localeFirstWeekContainsDate);
  var firstWeekContainsDate = (options === null || options === void 0 ? void 0 : options.firstWeekContainsDate) == null ? defaultFirstWeekContainsDate : (0,_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__.default)(options.firstWeekContainsDate); // Test if weekStartsOn is between 1 and 7 _and_ is not NaN

  if (!(firstWeekContainsDate >= 1 && firstWeekContainsDate <= 7)) {
    throw new RangeError('firstWeekContainsDate must be between 1 and 7 inclusively');
  }

  var firstWeekOfNextYear = new Date(0);
  firstWeekOfNextYear.setFullYear(year + 1, 0, firstWeekContainsDate);
  firstWeekOfNextYear.setHours(0, 0, 0, 0);
  var startOfNextYear = (0,_startOfWeek_index_js__WEBPACK_IMPORTED_MODULE_3__.default)(firstWeekOfNextYear, options);
  var firstWeekOfThisYear = new Date(0);
  firstWeekOfThisYear.setFullYear(year, 0, firstWeekContainsDate);
  firstWeekOfThisYear.setHours(0, 0, 0, 0);
  var startOfThisYear = (0,_startOfWeek_index_js__WEBPACK_IMPORTED_MODULE_3__.default)(firstWeekOfThisYear, options);

  if (date.getTime() >= startOfNextYear.getTime()) {
    return year + 1;
  } else if (date.getTime() >= startOfThisYear.getTime()) {
    return year;
  } else {
    return year - 1;
  }
}

/***/ }),

/***/ "./node_modules/date-fns/esm/startOfWeek/index.js":
/*!********************************************************!*\
  !*** ./node_modules/date-fns/esm/startOfWeek/index.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ startOfWeek)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_lib/toInteger/index.js */ "./node_modules/date-fns/esm/_lib/toInteger/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");



/**
 * @name startOfWeek
 * @category Week Helpers
 * @summary Return the start of a week for the given date.
 *
 * @description
 * Return the start of a week for the given date.
 * The result will be in the local timezone.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} date - the original date
 * @param {Object} [options] - an object with options.
 * @param {Locale} [options.locale=defaultLocale] - the locale object. See [Locale]{@link https://date-fns.org/docs/Locale}
 * @param {0|1|2|3|4|5|6} [options.weekStartsOn=0] - the index of the first day of the week (0 - Sunday)
 * @returns {Date} the start of a week
 * @throws {TypeError} 1 argument required
 * @throws {RangeError} `options.weekStartsOn` must be between 0 and 6
 *
 * @example
 * // The start of a week for 2 September 2014 11:55:00:
 * const result = startOfWeek(new Date(2014, 8, 2, 11, 55, 0))
 * //=> Sun Aug 31 2014 00:00:00
 *
 * @example
 * // If the week starts on Monday, the start of the week for 2 September 2014 11:55:00:
 * const result = startOfWeek(new Date(2014, 8, 2, 11, 55, 0), { weekStartsOn: 1 })
 * //=> Mon Sep 01 2014 00:00:00
 */

function startOfWeek(dirtyDate, dirtyOptions) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__.default)(1, arguments);
  var options = dirtyOptions || {};
  var locale = options.locale;
  var localeWeekStartsOn = locale && locale.options && locale.options.weekStartsOn;
  var defaultWeekStartsOn = localeWeekStartsOn == null ? 0 : (0,_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_1__.default)(localeWeekStartsOn);
  var weekStartsOn = options.weekStartsOn == null ? defaultWeekStartsOn : (0,_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_1__.default)(options.weekStartsOn); // Test if weekStartsOn is between 0 and 6 _and_ is not NaN

  if (!(weekStartsOn >= 0 && weekStartsOn <= 6)) {
    throw new RangeError('weekStartsOn must be between 0 and 6 inclusively');
  }

  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_2__.default)(dirtyDate);
  var day = date.getDay();
  var diff = (day < weekStartsOn ? 7 : 0) + day - weekStartsOn;
  date.setDate(date.getDate() - diff);
  date.setHours(0, 0, 0, 0);
  return date;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/startOfWeekYear/index.js":
/*!************************************************************!*\
  !*** ./node_modules/date-fns/esm/startOfWeekYear/index.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ startOfWeekYear)
/* harmony export */ });
/* harmony import */ var _getWeekYear_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../getWeekYear/index.js */ "./node_modules/date-fns/esm/getWeekYear/index.js");
/* harmony import */ var _startOfWeek_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../startOfWeek/index.js */ "./node_modules/date-fns/esm/startOfWeek/index.js");
/* harmony import */ var _lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_lib/toInteger/index.js */ "./node_modules/date-fns/esm/_lib/toInteger/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");





/**
 * @name startOfWeekYear
 * @category Week-Numbering Year Helpers
 * @summary Return the start of a local week-numbering year for the given date.
 *
 * @description
 * Return the start of a local week-numbering year.
 * The exact calculation depends on the values of
 * `options.weekStartsOn` (which is the index of the first day of the week)
 * and `options.firstWeekContainsDate` (which is the day of January, which is always in
 * the first week of the week-numbering year)
 *
 * Week numbering: https://en.wikipedia.org/wiki/Week#Week_numbering
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} date - the original date
 * @param {Object} [options] - an object with options.
 * @param {Locale} [options.locale=defaultLocale] - the locale object. See [Locale]{@link https://date-fns.org/docs/Locale}
 * @param {0|1|2|3|4|5|6} [options.weekStartsOn=0] - the index of the first day of the week (0 - Sunday)
 * @param {1|2|3|4|5|6|7} [options.firstWeekContainsDate=1] - the day of January, which is always in the first week of the year
 * @returns {Date} the start of a week-numbering year
 * @throws {TypeError} 1 argument required
 * @throws {RangeError} `options.weekStartsOn` must be between 0 and 6
 * @throws {RangeError} `options.firstWeekContainsDate` must be between 1 and 7
 *
 * @example
 * // The start of an a week-numbering year for 2 July 2005 with default settings:
 * const result = startOfWeekYear(new Date(2005, 6, 2))
 * //=> Sun Dec 26 2004 00:00:00
 *
 * @example
 * // The start of a week-numbering year for 2 July 2005
 * // if Monday is the first day of week
 * // and 4 January is always in the first week of the year:
 * const result = startOfWeekYear(new Date(2005, 6, 2), {
 *   weekStartsOn: 1,
 *   firstWeekContainsDate: 4
 * })
 * //=> Mon Jan 03 2005 00:00:00
 */
function startOfWeekYear(dirtyDate, dirtyOptions) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__.default)(1, arguments);
  var options = dirtyOptions || {};
  var locale = options.locale;
  var localeFirstWeekContainsDate = locale && locale.options && locale.options.firstWeekContainsDate;
  var defaultFirstWeekContainsDate = localeFirstWeekContainsDate == null ? 1 : (0,_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_1__.default)(localeFirstWeekContainsDate);
  var firstWeekContainsDate = options.firstWeekContainsDate == null ? defaultFirstWeekContainsDate : (0,_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_1__.default)(options.firstWeekContainsDate);
  var year = (0,_getWeekYear_index_js__WEBPACK_IMPORTED_MODULE_2__.default)(dirtyDate, dirtyOptions);
  var firstWeek = new Date(0);
  firstWeek.setFullYear(year, 0, firstWeekContainsDate);
  firstWeek.setHours(0, 0, 0, 0);
  var date = (0,_startOfWeek_index_js__WEBPACK_IMPORTED_MODULE_3__.default)(firstWeek, dirtyOptions);
  return date;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/toDate/index.js":
/*!***************************************************!*\
  !*** ./node_modules/date-fns/esm/toDate/index.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ toDate)
/* harmony export */ });
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");

/**
 * @name toDate
 * @category Common Helpers
 * @summary Convert the given argument to an instance of Date.
 *
 * @description
 * Convert the given argument to an instance of Date.
 *
 * If the argument is an instance of Date, the function returns its clone.
 *
 * If the argument is a number, it is treated as a timestamp.
 *
 * If the argument is none of the above, the function returns Invalid Date.
 *
 * **Note**: *all* Date arguments passed to any *date-fns* function is processed by `toDate`.
 *
 * @param {Date|Number} argument - the value to convert
 * @returns {Date} the parsed date in the local time zone
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // Clone the date:
 * const result = toDate(new Date(2014, 1, 11, 11, 30, 30))
 * //=> Tue Feb 11 2014 11:30:30
 *
 * @example
 * // Convert the timestamp to date:
 * const result = toDate(1392098430000)
 * //=> Tue Feb 11 2014 11:30:30
 */

function toDate(argument) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__.default)(1, arguments);
  var argStr = Object.prototype.toString.call(argument); // Clone the date

  if (argument instanceof Date || typeof argument === 'object' && argStr === '[object Date]') {
    // Prevent the date to lose the milliseconds when passed to new Date() in IE10
    return new Date(argument.getTime());
  } else if (typeof argument === 'number' || argStr === '[object Number]') {
    return new Date(argument);
  } else {
    if ((typeof argument === 'string' || argStr === '[object String]') && typeof console !== 'undefined') {
      // eslint-disable-next-line no-console
      console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://git.io/fjule"); // eslint-disable-next-line no-console

      console.warn(new Error().stack);
    }

    return new Date(NaN);
  }
}

/***/ }),

/***/ "./components/Cards/Class.tsx":
/*!************************************!*\
  !*** ./components/Cards/Class.tsx ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Class": () => (/* binding */ Class)
/* harmony export */ });
/* harmony import */ var _mui_material_Typography__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @mui/material/Typography */ "@mui/material/Typography");
/* harmony import */ var _mui_material_Typography__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mui_icons_material_ExpandMore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @mui/icons-material/ExpandMore */ "@mui/icons-material/ExpandMore");
/* harmony import */ var _mui_icons_material_ExpandMore__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_ExpandMore__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _mui_material_Stack__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mui/material/Stack */ "@mui/material/Stack");
/* harmony import */ var _mui_material_Stack__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Stack__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var components_Homework__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! components/Homework */ "./components/Homework.tsx");
/* harmony import */ var styles_boxes__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! styles/boxes */ "./styles/boxes.ts");
/* harmony import */ var _mui_material_CardHeader__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mui/material/CardHeader */ "@mui/material/CardHeader");
/* harmony import */ var _mui_material_CardHeader__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_mui_material_CardHeader__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _mui_material_CardContent__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @mui/material/CardContent */ "@mui/material/CardContent");
/* harmony import */ var _mui_material_CardContent__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_mui_material_CardContent__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _mui_material_Collapse__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @mui/material/Collapse */ "@mui/material/Collapse");
/* harmony import */ var _mui_material_Collapse__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Collapse__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _mui_material_CardActions__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @mui/material/CardActions */ "@mui/material/CardActions");
/* harmony import */ var _mui_material_CardActions__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_mui_material_CardActions__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _mui_material_IconButton__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @mui/material/IconButton */ "@mui/material/IconButton");
/* harmony import */ var _mui_material_IconButton__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_mui_material_IconButton__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @emotion/styled */ "@emotion/styled");
/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_emotion_styled__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @mui/material/styles */ "@mui/material/styles");
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_mui_material_styles__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var styles_card__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! styles/card */ "./styles/card.ts");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__);
const _excluded = ["expand"];
var _jsxFileName = "/home/william/dev/Projects/heggenplanen/components/Cards/Class.tsx";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

















const Class = ({
  className,
  roomIdentifier,
  homework
}) => {
  const {
    0: expanded,
    1: setExpanded
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)("div", {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)(styles_card__WEBPACK_IMPORTED_MODULE_13__.StyledCard, {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)((_mui_material_CardHeader__WEBPACK_IMPORTED_MODULE_6___default()) // på 'variant' her liker jeg også 'overline', men da må fontWeighten bli større
      , {
        titleTypographyProps: {
          variant: 'subtitle1',
          fontWeight: 'bold'
        },
        title: className,
        subheader: roomIdentifier
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 27,
        columnNumber: 5
      }, undefined), homework.length ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.Fragment, {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)(Block, {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)(StyledCardContent, {
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_0___default()), {
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)(styles_boxes__WEBPACK_IMPORTED_MODULE_5__.DisabledBox, {
                component: "span",
                children: [homework.length, " gj\xF8rem\xE5l."]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 39,
                columnNumber: 10
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 38,
              columnNumber: 9
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 37,
            columnNumber: 8
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)(StyledCardActions, {
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)(ExpandMore, {
              expand: expanded,
              onClick: () => setExpanded(!expanded),
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)((_mui_icons_material_ExpandMore__WEBPACK_IMPORTED_MODULE_2___default()), {}, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 48,
                columnNumber: 10
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 45,
              columnNumber: 9
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 44,
            columnNumber: 8
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 36,
          columnNumber: 7
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)((_mui_material_Collapse__WEBPACK_IMPORTED_MODULE_8___default()), {
          in: expanded,
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)((_mui_material_CardContent__WEBPACK_IMPORTED_MODULE_7___default()), {
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)((_mui_material_Stack__WEBPACK_IMPORTED_MODULE_3___default()), {
              spacing: 2,
              children: homework.map((id, index) => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)(components_Homework__WEBPACK_IMPORTED_MODULE_4__.Homework, {
                id: id
              }, index, false, {
                fileName: _jsxFileName,
                lineNumber: 56,
                columnNumber: 11
              }, undefined))
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 54,
              columnNumber: 9
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 53,
            columnNumber: 8
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 52,
          columnNumber: 7
        }, undefined)]
      }, void 0, true) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)((_mui_material_CardContent__WEBPACK_IMPORTED_MODULE_7___default()), {
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_0___default()), {
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)(styles_boxes__WEBPACK_IMPORTED_MODULE_5__.DisabledBox, {
            component: "span",
            children: "Ingen gj\xF8rem\xE5l."
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 65,
            columnNumber: 8
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 64,
          columnNumber: 7
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 63,
        columnNumber: 6
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 4
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 25,
    columnNumber: 3
  }, undefined);
};
const ExpandMore = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_12__.styled)(props => {
  const {
    expand
  } = props,
        other = _objectWithoutProperties(props, _excluded);

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)((_mui_material_IconButton__WEBPACK_IMPORTED_MODULE_10___default()), _objectSpread({}, other), void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 80,
    columnNumber: 9
  }, undefined);
})(({
  theme,
  expand
}) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest
  })
}));
const Block = (_emotion_styled__WEBPACK_IMPORTED_MODULE_11___default().div)`
	display: inline-block;
	width: 100%;
`;
const StyledCardActions = _emotion_styled__WEBPACK_IMPORTED_MODULE_11___default()((_mui_material_CardActions__WEBPACK_IMPORTED_MODULE_9___default()))`
	float: right;
`;
const StyledCardContent = _emotion_styled__WEBPACK_IMPORTED_MODULE_11___default()((_mui_material_CardContent__WEBPACK_IMPORTED_MODULE_7___default()))`
	float: left;
`;

/***/ }),

/***/ "./components/Cards/Study.tsx":
/*!************************************!*\
  !*** ./components/Cards/Study.tsx ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Study": () => (/* binding */ Study)
/* harmony export */ });
/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/styled */ "@emotion/styled");
/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_emotion_styled__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mui_material_Box__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @mui/material/Box */ "@mui/material/Box");
/* harmony import */ var _mui_material_Box__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Box__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mui_material_CardContent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @mui/material/CardContent */ "@mui/material/CardContent");
/* harmony import */ var _mui_material_CardContent__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mui_material_CardContent__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _mui_material_Typography__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mui/material/Typography */ "@mui/material/Typography");
/* harmony import */ var _mui_material_Typography__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var styles_card__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! styles/card */ "./styles/card.ts");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__);
var _jsxFileName = "/home/william/dev/Projects/heggenplanen/components/Cards/Study.tsx";







const Study = () => {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(StudyCard, {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)((_mui_material_CardContent__WEBPACK_IMPORTED_MODULE_2___default()), {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_3___default()), {
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)((_mui_material_Box__WEBPACK_IMPORTED_MODULE_1___default()), {
          component: "span",
          fontWeight: "bold",
          children: "Studietid"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 13,
          columnNumber: 6
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 12,
        columnNumber: 5
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 4
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 10,
    columnNumber: 3
  }, undefined);
};
const StudyCard = _emotion_styled__WEBPACK_IMPORTED_MODULE_0___default()(styles_card__WEBPACK_IMPORTED_MODULE_5__.StyledCard)`
	opacity: 0;

	transition: 0.5s;
	transition-delay: 0.75s;

	&:hover {
		transition-delay: 0s;

		opacity: 1;
	}

	color: ${({
  theme
}) => theme.palette.text.disabled};
`;

/***/ }),

/***/ "./components/Homework.tsx":
/*!*********************************!*\
  !*** ./components/Homework.tsx ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomeworkByValue": () => (/* binding */ HomeworkByValue),
/* harmony export */   "Homework": () => (/* binding */ Homework)
/* harmony export */ });
/* harmony import */ var _mui_material_Checkbox__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @mui/material/Checkbox */ "@mui/material/Checkbox");
/* harmony import */ var _mui_material_Checkbox__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Checkbox__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mui_material_Card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @mui/material/Card */ "@mui/material/Card");
/* harmony import */ var _mui_material_Card__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Card__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mui_material_CardContent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @mui/material/CardContent */ "@mui/material/CardContent");
/* harmony import */ var _mui_material_CardContent__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mui_material_CardContent__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _mui_material_Typography__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mui/material/Typography */ "@mui/material/Typography");
/* harmony import */ var _mui_material_Typography__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _mui_material_Stack__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/material/Stack */ "@mui/material/Stack");
/* harmony import */ var _mui_material_Stack__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Stack__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _mui_material_Box__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mui/material/Box */ "@mui/material/Box");
/* harmony import */ var _mui_material_Box__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Box__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @emotion/styled */ "@emotion/styled");
/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_emotion_styled__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var context_user__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! context/user */ "./context/user.tsx");
/* harmony import */ var context_data__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! context/data */ "./context/data.tsx");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__);
const _excluded = ["id", "done"];
var _jsxFileName = "/home/william/dev/Projects/heggenplanen/components/Homework.tsx";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }













const HomeworkByValue = _ref => {
  var _ref2;

  let {
    id,
    done: _done
  } = _ref,
      props = _objectWithoutProperties(_ref, _excluded);

  const [user, setUser] = (0,context_user__WEBPACK_IMPORTED_MODULE_8__.useUser)();
  const done = (_ref2 = user.type && user.assignmentData[id]) !== null && _ref2 !== void 0 ? _ref2 : false;
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)((_mui_material_Card__WEBPACK_IMPORTED_MODULE_1___default()), {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)((_mui_material_CardContent__WEBPACK_IMPORTED_MODULE_2___default()), {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)((_mui_material_Stack__WEBPACK_IMPORTED_MODULE_5___default()), {
        direction: "row",
        justifyContent: "space-between",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_3___default()), {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)((_mui_material_Box__WEBPACK_IMPORTED_MODULE_6___default()), {
            fontWeight: "bold",
            component: "span",
            children: props.name
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 28,
            columnNumber: 7
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("br", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 31,
            columnNumber: 7
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)((_mui_material_Box__WEBPACK_IMPORTED_MODULE_6___default()), {
            component: "span",
            children: props.message
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 32,
            columnNumber: 7
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 27,
          columnNumber: 6
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("div", {
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)(StyledCheckBox, {
            checked: done,
            onChange: () => user.type && setUser(_objectSpread(_objectSpread({}, user), {}, {
              assignmentData: _objectSpread(_objectSpread({}, user.assignmentData), {}, {
                [id]: !done
              })
            }))
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 35,
            columnNumber: 7
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 34,
          columnNumber: 6
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 26,
        columnNumber: 5
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 4
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 24,
    columnNumber: 3
  }, undefined);
};
const Homework = ({
  id
}) => {
  const [data] = (0,context_data__WEBPACK_IMPORTED_MODULE_9__.useAssignmentData)();
  const value = data[id];
  console.log(id, data, value);
  return value && value.type === 'homework' ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)(HomeworkByValue, _objectSpread({
    id: id
  }, value), void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 60,
    columnNumber: 3
  }, undefined) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.Fragment, {}, void 0, false);
};

const useCheckboxColor = theme => {
  const [user] = (0,context_user__WEBPACK_IMPORTED_MODULE_8__.useUser)();

  if (user.type !== null && user.theme === 'dark') {
    return theme.palette.text.primary;
  } else {
    return theme.palette.primary;
  }
};

const StyledCheckBox = _emotion_styled__WEBPACK_IMPORTED_MODULE_7___default()((_mui_material_Checkbox__WEBPACK_IMPORTED_MODULE_0___default()))`
	&.Mui-checked {
		color: ${({
  theme
}) => useCheckboxColor(theme)};
	}
`;

/***/ }),

/***/ "./context/currentWeek.tsx":
/*!*********************************!*\
  !*** ./context/currentWeek.tsx ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "currentWeekContext": () => (/* binding */ currentWeekContext),
/* harmony export */   "useCurrentWeek": () => (/* binding */ useCurrentWeek),
/* harmony export */   "CurrentWeekProvider": () => (/* binding */ CurrentWeekProvider)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var date_fns_getWeek__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! date-fns/getWeek */ "./node_modules/date-fns/esm/getWeek/index.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/home/william/dev/Projects/heggenplanen/context/currentWeek.tsx";



const currentWeekContext = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)([40, () => undefined]);
const useCurrentWeek = () => (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(currentWeekContext);
const CurrentWeekProvider = ({
  children
}) => {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(currentWeekContext.Provider, {
    value: (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)((0,date_fns_getWeek__WEBPACK_IMPORTED_MODULE_2__.default)(new Date())),
    children: children
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 21,
    columnNumber: 3
  }, undefined);
};

/***/ }),

/***/ "./context/data.tsx":
/*!**************************!*\
  !*** ./context/data.tsx ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "assignmentDataContext": () => (/* binding */ assignmentDataContext),
/* harmony export */   "weekDataContext": () => (/* binding */ weekDataContext),
/* harmony export */   "useWeekData": () => (/* binding */ useWeekData),
/* harmony export */   "useAssignmentData": () => (/* binding */ useAssignmentData),
/* harmony export */   "AssignmentDataProvider": () => (/* binding */ AssignmentDataProvider),
/* harmony export */   "WeekDataProvider": () => (/* binding */ WeekDataProvider)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_use__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-use */ "react-use");
/* harmony import */ var react_use__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_use__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash_cloneDeep__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash/cloneDeep */ "lodash/cloneDeep");
/* harmony import */ var lodash_cloneDeep__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash_cloneDeep__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var utils_getInitialWeekData__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! utils/getInitialWeekData */ "./utils/getInitialWeekData.ts");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "/home/william/dev/Projects/heggenplanen/context/data.tsx";





const mockAssignmentData = {
  '1': {
    type: 'homework',
    done: false,
    name: 'Hello',
    message: 'Hello'
  },
  '2': {
    type: 'homework',
    done: false,
    name: 'Hello',
    message: 'Hello'
  },
  '3': {
    type: 'homework',
    done: false,
    name: 'Hello',
    message: 'Hello'
  },
  '4': {
    type: 'homework',
    done: false,
    name: 'Hello',
    message: 'Hello'
  },
  '5': {
    type: 'homework',
    done: false,
    name: 'Hello',
    message: 'Hello'
  },
  a: {
    type: 'assignment',
    done: false,
    name: 'podcast',
    message: 'just talk about something',
    gradingMethod: 'categorical',
    due: new Date(2021, 8, 28, 17, 0)
  },
  b: {
    type: 'assignment',
    done: false,
    name: 'text',
    message: 'write an article',
    gradingMethod: 'numeric',
    due: new Date(2021, 8, 30, 23, 59)
  },
  c: {
    type: 'assignment',
    done: false,
    name: 'presentation',
    message: 'choose a country',
    gradingMethod: 'numeric',
    due: new Date(2021, 8, 36, 20, 0)
  },
  c2: {
    type: 'assignment',
    done: false,
    name: 'presentation',
    message: 'choose a country',
    gradingMethod: 'numeric',
    due: new Date(2021, 8, 36, 20, 0)
  },
  c3: {
    type: 'assignment',
    done: false,
    name: 'presentation',
    message: 'choose a country',
    gradingMethod: 'numeric',
    due: new Date(2021, 8, 36, 20, 0)
  },
  c4: {
    type: 'assignment',
    done: false,
    name: 'presentation',
    message: 'choose a country',
    gradingMethod: 'numeric',
    due: new Date(2021, 8, 36, 20, 0)
  },
  d: {
    type: 'assignment',
    done: false,
    name: 'test',
    message: 'hard math',
    gradingMethod: 'numeric',
    due: new Date(2021, 8, 52, 13, 50)
  }
};
const assignmentDataContext = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)([mockAssignmentData, {}]);
const mockWeekData = [[{
  type: 'study'
}, {
  type: 'class',
  roomIdentifier: 'R000',
  className: 'Engelsk',
  homework: []
}, {
  type: 'class',
  roomIdentifier: 'R000',
  className: 'Matematikk',
  homework: []
}, {
  type: 'class',
  roomIdentifier: 'R000',
  className: 'Geografi',
  homework: []
}], [{
  type: 'class',
  roomIdentifier: 'R000',
  className: 'Norsk',
  homework: []
}, {
  type: 'class',
  roomIdentifier: 'R000',
  className: 'Samfunnskunnskap',
  homework: []
}, {
  type: 'class',
  roomIdentifier: 'R000',
  className: 'Kroppsøving',
  homework: []
}], [{
  type: 'class',
  roomIdentifier: 'R000',
  className: 'Språk',
  homework: ['1', '3', '1', '3']
}, {
  type: 'class',
  roomIdentifier: 'R000',
  className: 'Samfunnskunnskap',
  homework: []
}, {
  type: 'class',
  roomIdentifier: 'R000',
  className: 'Naturfag',
  homework: []
} // {
// id: 'hello',
// // type: 'assignment',
// name: 'random innlevering',
// message: 'just do something idc',
// gradingMethod: 'numeric',
// due: new Date(),
// },
], [{
  type: 'class',
  roomIdentifier: 'R000',
  className: 'Naturfag',
  homework: []
}, {
  type: 'class',
  roomIdentifier: 'R000',
  className: 'Språk',
  homework: []
}, {
  type: 'class',
  roomIdentifier: 'R000',
  className: 'Norsk',
  homework: []
}, {
  type: 'class',
  roomIdentifier: 'R000',
  className: 'Matematikk',
  homework: []
}], [{
  type: 'class',
  roomIdentifier: 'R000',
  className: 'Naturfag',
  homework: []
}, {
  type: 'study'
}, {
  type: 'class',
  roomIdentifier: 'R000',
  className: 'Norsk',
  homework: []
}, {
  type: 'class',
  roomIdentifier: 'R000',
  className: 'Engelsk',
  homework: []
}]];
const weekDataContext = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)([mockWeekData, () => undefined]);
const useWeekData = () => (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(weekDataContext);
const useAssignmentData = () => (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(assignmentDataContext);
const AssignmentDataProvider = ({
  children
}) => {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(assignmentDataContext.Provider, {
    value: (0,react_use__WEBPACK_IMPORTED_MODULE_1__.useMap)(mockAssignmentData),
    children: children
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 231,
    columnNumber: 3
  }, undefined);
};

const weekReducer = (state, action) => {
  switch (action.type) {
    case 'clear':
      {
        return [[], [], [], [], []];
      }

    case 'overwrite':
      {
        return lodash_cloneDeep__WEBPACK_IMPORTED_MODULE_2___default()(action.data);
      }

    case 'overwriteOne':
      {
        const clone = lodash_cloneDeep__WEBPACK_IMPORTED_MODULE_2___default()(state);
        clone[action.dayIndex][action.lessonIndex] = action.data;
        return clone;
      }

    case 'merge':
      {
        const clone = lodash_cloneDeep__WEBPACK_IMPORTED_MODULE_2___default()(state);
        return clone.map((v, dayIndex) => v.map((v, lessonIndex) => action.data[dayIndex][lessonIndex] || v));
      }
  }
};

const WeekDataProvider = ({
  children
}) => {
  const value = (0,react__WEBPACK_IMPORTED_MODULE_0__.useReducer)(weekReducer, (0,utils_getInitialWeekData__WEBPACK_IMPORTED_MODULE_3__.getInitialWeekData)());
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(weekDataContext.Provider, {
    value: value,
    children: children
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 282,
    columnNumber: 3
  }, undefined);
};

/***/ }),

/***/ "./context/loading.tsx":
/*!*****************************!*\
  !*** ./context/loading.tsx ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "loadingContext": () => (/* binding */ loadingContext),
/* harmony export */   "useLoading": () => (/* binding */ useLoading),
/* harmony export */   "LoadingProvider": () => (/* binding */ LoadingProvider)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/home/william/dev/Projects/heggenplanen/context/loading.tsx";


const loadingContext = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)([true, () => undefined]);
const useLoading = () => (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(loadingContext);
const LoadingProvider = ({
  children
}) => {
  const {
    0: loading,
    1: setLoading
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(true);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(loadingContext.Provider, {
    value: [loading, setLoading],
    children: children
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 20,
    columnNumber: 3
  }, undefined);
};

/***/ }),

/***/ "./context/user.tsx":
/*!**************************!*\
  !*** ./context/user.tsx ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "userContext": () => (/* binding */ userContext),
/* harmony export */   "useUser": () => (/* binding */ useUser),
/* harmony export */   "UserProvider": () => (/* binding */ UserProvider)
/* harmony export */ });
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @mui/material */ "@mui/material");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_use__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-use */ "react-use");
/* harmony import */ var react_use__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_use__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! firebase/firestore */ "firebase/firestore");
/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(firebase_firestore__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! firebase/auth */ "firebase/auth");
/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(firebase_auth__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var utils_doClassSelectorQuery__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! utils/doClassSelectorQuery */ "./utils/doClassSelectorQuery.ts");
/* harmony import */ var _loading__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./loading */ "./context/loading.tsx");
/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./data */ "./context/data.tsx");
/* harmony import */ var _currentWeek__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./currentWeek */ "./context/currentWeek.tsx");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__);
var _jsxFileName = "/home/william/dev/Projects/heggenplanen/context/user.tsx";










const mockUser = {
  type: null
};
const userContext = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)([mockUser, () => undefined]);
const useUser = () => (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(userContext);
const UserProvider = ({
  children
}) => {
  const {
    0: user,
    1: setUser
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(mockUser);
  const job = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)([null, true]);
  const prefersDarkMode = (0,_mui_material__WEBPACK_IMPORTED_MODULE_0__.useMediaQuery)('(prefers-color-scheme: dark)');
  const [_1, setLoading] = (0,_loading__WEBPACK_IMPORTED_MODULE_6__.useLoading)();
  const [_2, dispatch] = (0,_data__WEBPACK_IMPORTED_MODULE_7__.useWeekData)();
  const [currentWeek] = (0,_currentWeek__WEBPACK_IMPORTED_MODULE_8__.useCurrentWeek)();
  const anonUser = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(() => ({
    type: 'Anonymous',
    assignmentData: {},
    class: null,
    theme: prefersDarkMode ? 'blue' : 'dark',
    selector: {
      class: '1STA',
      language: 'German1'
    }
  }), [prefersDarkMode]);
  const performUpdate = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(async () => {
    if (user.type === 'Identified' && user.uid) await (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.setDoc)((0,firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.doc)((0,firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.getFirestore)(), 'users', user.uid), user);
  }, [user]);
  const getDataRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(user => {
    return (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.doc)((0,firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.collection)((0,firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.getFirestore)(), 'users'), user.uid);
  }, []);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    if (user.type === null) {
      if (false) {}
    } else localStorage.setItem('user', JSON.stringify(user));
  }, [user, anonUser, performUpdate, getDataRef]);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    if (user.type === 'Identified') {
      const unsub = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.onSnapshot)(getDataRef(user), async snapshot => {
        if (snapshot.exists()) setUser(() => snapshot.data());else {
          await performUpdate(); // setUser(() => anonUser)
        }
      });
      return () => {
        unsub();
      };
    }
  }, // eslint-disable-next-line react-hooks/exhaustive-deps
  [user.type === 'Identified']);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    if (user.type) {
      setLoading(true);
      job.current[0] = setTimeout(async () => {
        setLoading(false);
        dispatch({
          type: 'overwrite',
          data: await (0,utils_doClassSelectorQuery__WEBPACK_IMPORTED_MODULE_5__.doClassSelectorQuery)({
            class: '2STD',
            language: 'German1',
            a: null,
            b: 'B/IT2',
            c: 'C/IT1',
            d: 'D/Biologi 2',
            e: 'E/Fysikk 1'
          }, currentWeek)
        });
        job.current[1] = false;
      }, 2000 - 1000 * +job.current[1]);
      return () => {
        if (job.current[0] !== null) clearTimeout(job.current[0]);
        job.current[0] = null;
      };
    }
  }, // eslint-disable-next-line react-hooks/exhaustive-deps
  [user.type && user.selector, currentWeek]);
  (0,react_use__WEBPACK_IMPORTED_MODULE_2__.useDebounce)(() => void performUpdate(), 5000, [user]);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(userContext.Provider, {
    value: [user, setUser],
    children: children
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 185,
    columnNumber: 3
  }, undefined);
};

/***/ }),

/***/ "./internationalization/transformDay.ts":
/*!**********************************************!*\
  !*** ./internationalization/transformDay.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "transformDay": () => (/* binding */ transformDay)
/* harmony export */ });
/* harmony import */ var typings_timelineData__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! typings/timelineData */ "./typings/timelineData.ts");

const transformDay = day => ['Mandag', 'Tirsdag', 'Onsdag', 'Torsdag', 'Fredag'][day];

/***/ }),

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @emotion/styled */ "@emotion/styled");
/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_emotion_styled__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mui_material_Stack__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @mui/material/Stack */ "@mui/material/Stack");
/* harmony import */ var _mui_material_Stack__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Stack__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _mui_material_Typography__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mui/material/Typography */ "@mui/material/Typography");
/* harmony import */ var _mui_material_Typography__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var internationalization_transformDay__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! internationalization/transformDay */ "./internationalization/transformDay.ts");
/* harmony import */ var components_Cards_Class__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! components/Cards/Class */ "./components/Cards/Class.tsx");
/* harmony import */ var components_Cards_Study__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! components/Cards/Study */ "./components/Cards/Study.tsx");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var context_data__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! context/data */ "./context/data.tsx");
/* harmony import */ var _mui_material_useMediaQuery__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @mui/material/useMediaQuery */ "@mui/material/useMediaQuery");
/* harmony import */ var _mui_material_useMediaQuery__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_mui_material_useMediaQuery__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var react_swipeable__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-swipeable */ "react-swipeable");
/* harmony import */ var react_swipeable__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_swipeable__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _mui_material_IconButton__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @mui/material/IconButton */ "@mui/material/IconButton");
/* harmony import */ var _mui_material_IconButton__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_mui_material_IconButton__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _mui_icons_material_KeyboardArrowRight__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @mui/icons-material/KeyboardArrowRight */ "@mui/icons-material/KeyboardArrowRight");
/* harmony import */ var _mui_icons_material_KeyboardArrowRight__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_KeyboardArrowRight__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _mui_icons_material_KeyboardArrowLeft__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @mui/icons-material/KeyboardArrowLeft */ "@mui/icons-material/KeyboardArrowLeft");
/* harmony import */ var _mui_icons_material_KeyboardArrowLeft__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_KeyboardArrowLeft__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var context_loading__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! context/loading */ "./context/loading.tsx");
/* harmony import */ var context_currentWeek__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! context/currentWeek */ "./context/currentWeek.tsx");
/* harmony import */ var react_use__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! react-use */ "react-use");
/* harmony import */ var react_use__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(react_use__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_17__);
var _jsxFileName = "/home/william/dev/Projects/heggenplanen/pages/index.tsx";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





















const Home = () => {
  const [weekData] = (0,context_data__WEBPACK_IMPORTED_MODULE_8__.useWeekData)();
  const [loading, setLoading] = (0,context_loading__WEBPACK_IMPORTED_MODULE_14__.useLoading)();
  const [viewingCurrentWeek, setViewingCurrentWeek] = (0,context_currentWeek__WEBPACK_IMPORTED_MODULE_15__.useCurrentWeek)();
  const {
    0: currentWeek,
    1: setCurrentWeek
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(viewingCurrentWeek);
  (0,react_use__WEBPACK_IMPORTED_MODULE_16__.useDebounce)(() => {
    setViewingCurrentWeek(currentWeek);
  }, 500, [currentWeek]);
  const isMobile = _mui_material_useMediaQuery__WEBPACK_IMPORTED_MODULE_9___default()('(max-width:480px');

  if (isMobile) {
    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxDEV)(HomeMobile, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 10
    }, undefined);
  }

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_17__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_7___default()), {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxDEV)("title", {
        children: "Timeplan"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 45,
        columnNumber: 5
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 4
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxDEV)(MainContainer, {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxDEV)(WeekControl, {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxDEV)((_mui_material_IconButton__WEBPACK_IMPORTED_MODULE_11___default()), {
          onClick: () => {
            setCurrentWeek(currentWeek - 1);
            if (!loading) setLoading(true);
          },
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxDEV)((_mui_icons_material_KeyboardArrowLeft__WEBPACK_IMPORTED_MODULE_13___default()), {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 55,
            columnNumber: 7
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 50,
          columnNumber: 6
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxDEV)((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_3___default()), {
          variant: "h5",
          children: ["Uke ", currentWeek]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 57,
          columnNumber: 6
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxDEV)((_mui_material_IconButton__WEBPACK_IMPORTED_MODULE_11___default()), {
          onClick: () => {
            setCurrentWeek(currentWeek + 1);
            if (!loading) setLoading(true);
          },
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxDEV)((_mui_icons_material_KeyboardArrowRight__WEBPACK_IMPORTED_MODULE_12___default()), {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 63,
            columnNumber: 7
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 58,
          columnNumber: 6
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 49,
        columnNumber: 5
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxDEV)("br", {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 66,
        columnNumber: 5
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxDEV)((_mui_material_Stack__WEBPACK_IMPORTED_MODULE_2___default()), {
        style: {
          opacity: (2 - +loading) / 2
        },
        spacing: 2,
        direction: "row",
        flexWrap: "wrap",
        justifyContent: "center",
        children: weekData.map((value, key) => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxDEV)((_mui_material_Stack__WEBPACK_IMPORTED_MODULE_2___default()), {
          spacing: 2,
          width: {
            xl: 250,
            l: 200
          },
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxDEV)(StyledTypography, {
            variant: "h3",
            children: (0,internationalization_transformDay__WEBPACK_IMPORTED_MODULE_4__.transformDay)(key)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 76,
            columnNumber: 8
          }, undefined), value.map((value, i) => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxDEV)((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), {
            children: value ? value.type === 'class' ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxDEV)(components_Cards_Class__WEBPACK_IMPORTED_MODULE_5__.Class, _objectSpread({}, value), void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 83,
              columnNumber: 12
            }, undefined) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxDEV)(components_Cards_Study__WEBPACK_IMPORTED_MODULE_6__.Study, {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 85,
              columnNumber: 12
            }, undefined) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxDEV)(components_Cards_Study__WEBPACK_IMPORTED_MODULE_6__.Study, {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 88,
              columnNumber: 11
            }, undefined)
          }, i, false, {
            fileName: _jsxFileName,
            lineNumber: 80,
            columnNumber: 9
          }, undefined))]
        }, key, true, {
          fileName: _jsxFileName,
          lineNumber: 75,
          columnNumber: 7
        }, undefined))
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 68,
        columnNumber: 5
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 4
    }, undefined)]
  }, void 0, true);
};

const HomeMobile = () => {
  const [weekData] = (0,context_data__WEBPACK_IMPORTED_MODULE_8__.useWeekData)();
  const {
    0: day,
    1: setDay
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0);
  const daySwipeHandlers = (0,react_swipeable__WEBPACK_IMPORTED_MODULE_10__.useSwipeable)({
    onSwipedRight: eventData => {
      if (day > 0) {
        setDay(day - 1);
      }
    },
    onSwipedLeft: eventData => {
      if (day < 4) {
        setDay(day + 1);
      }
    }
  });
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_17__.Fragment, {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxDEV)(MainContainer, _objectSpread(_objectSpread({}, daySwipeHandlers), {}, {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxDEV)((_mui_material_Stack__WEBPACK_IMPORTED_MODULE_2___default()), {
        spacing: 2,
        width: {
          xl: 250,
          l: 200
        },
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxDEV)(StyledTypography, {
          variant: "h3",
          sx: {
            textAlign: 'center'
          },
          children: (0,internationalization_transformDay__WEBPACK_IMPORTED_MODULE_4__.transformDay)(day)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 121,
          columnNumber: 6
        }, undefined), weekData[day].map((value, i) => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxDEV)((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), {
          children: value ? value.type === 'class' ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxDEV)(components_Cards_Class__WEBPACK_IMPORTED_MODULE_5__.Class, _objectSpread({}, value), void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 128,
            columnNumber: 10
          }, undefined) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxDEV)(components_Cards_Study__WEBPACK_IMPORTED_MODULE_6__.Study, {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 130,
            columnNumber: 10
          }, undefined) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxDEV)(components_Cards_Study__WEBPACK_IMPORTED_MODULE_6__.Study, {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 133,
            columnNumber: 9
          }, undefined)
        }, i, false, {
          fileName: _jsxFileName,
          lineNumber: 125,
          columnNumber: 7
        }, undefined))]
      }, day, true, {
        fileName: _jsxFileName,
        lineNumber: 120,
        columnNumber: 5
      }, undefined)
    }), void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 119,
      columnNumber: 4
    }, undefined)
  }, void 0, false);
};

const StyledTypography = _emotion_styled__WEBPACK_IMPORTED_MODULE_1___default()((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_3___default()))`
	color: ${({
  theme
}) => theme.palette.text.primary};
`;
const WeekControl = (_emotion_styled__WEBPACK_IMPORTED_MODULE_1___default().div)`
	display: flex;
	align-items: center;
`;
const MainContainer = (_emotion_styled__WEBPACK_IMPORTED_MODULE_1___default().div)`
	transition: ${({
  theme
}) => theme.transitions.create('opacity')};

	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: flex-start;
	min-height: calc(100vh - 12rem);
	width: 100vw;
	padding-block-start: 6rem;
	padding-block-end: 6rem;
`;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Home);

/***/ }),

/***/ "./styles/boxes.ts":
/*!*************************!*\
  !*** ./styles/boxes.ts ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DisabledBox": () => (/* binding */ DisabledBox),
/* harmony export */   "PrimaryBox": () => (/* binding */ PrimaryBox),
/* harmony export */   "SecondaryBox": () => (/* binding */ SecondaryBox)
/* harmony export */ });
/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/styled */ "@emotion/styled");
/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_emotion_styled__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mui_material_Box__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @mui/material/Box */ "@mui/material/Box");
/* harmony import */ var _mui_material_Box__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Box__WEBPACK_IMPORTED_MODULE_1__);


const DisabledBox = _emotion_styled__WEBPACK_IMPORTED_MODULE_0___default()((_mui_material_Box__WEBPACK_IMPORTED_MODULE_1___default()))`
	color: ${({
  theme
}) => theme.palette.text.disabled};
`;
const PrimaryBox = _emotion_styled__WEBPACK_IMPORTED_MODULE_0___default()((_mui_material_Box__WEBPACK_IMPORTED_MODULE_1___default()))`
	color: ${({
  theme
}) => theme.palette.text.primary};
`;
const SecondaryBox = _emotion_styled__WEBPACK_IMPORTED_MODULE_0___default()((_mui_material_Box__WEBPACK_IMPORTED_MODULE_1___default()))`
	color: ${({
  theme
}) => theme.palette.text.secondary};
`;

/***/ }),

/***/ "./styles/card.ts":
/*!************************!*\
  !*** ./styles/card.ts ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StyledCard": () => (/* binding */ StyledCard)
/* harmony export */ });
/* harmony import */ var _mui_material_Card__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @mui/material/Card */ "@mui/material/Card");
/* harmony import */ var _mui_material_Card__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Card__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mui_system__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @mui/system */ "@mui/system");
/* harmony import */ var _mui_system__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_mui_system__WEBPACK_IMPORTED_MODULE_1__);


const StyledCard = (0,_mui_system__WEBPACK_IMPORTED_MODULE_1__.styled)((_mui_material_Card__WEBPACK_IMPORTED_MODULE_0___default()))`
	min-height: 9.5rem;
`;

/***/ }),

/***/ "./typings/timelineData.ts":
/*!*********************************!*\
  !*** ./typings/timelineData.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);


/***/ }),

/***/ "./typings/userContentSelector.ts":
/*!****************************************!*\
  !*** ./typings/userContentSelector.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "language1": () => (/* binding */ language1),
/* harmony export */   "languageX": () => (/* binding */ languageX),
/* harmony export */   "stClassFactory": () => (/* binding */ stClassFactory),
/* harmony export */   "mdClassFactory": () => (/* binding */ mdClassFactory),
/* harmony export */   "BlockData": () => (/* binding */ BlockData),
/* harmony export */   "isMd": () => (/* binding */ isMd),
/* harmony export */   "isMd3": () => (/* binding */ isMd3),
/* harmony export */   "isMdX": () => (/* binding */ isMdX),
/* harmony export */   "isSt1": () => (/* binding */ isSt1),
/* harmony export */   "isStX": () => (/* binding */ isStX),
/* harmony export */   "extractGrade": () => (/* binding */ extractGrade),
/* harmony export */   "classTopicKeyGenerator": () => (/* binding */ classTopicKeyGenerator),
/* harmony export */   "languageTopicKeyGenerator": () => (/* binding */ languageTopicKeyGenerator),
/* harmony export */   "programTopicKeyGenerator": () => (/* binding */ programTopicKeyGenerator)
/* harmony export */ });
const language1 = ['German1', 'German2', 'Spanish1', 'Spanish2', 'French1', 'French2', 'Sami'];
const languageX = [...language1, 'German1+2', 'German3', 'Spanish1+2', 'Spanish3', 'French1+2', 'French3', null];
const stClassFactory = v => [`${v}STA`, `${v}STB`, `${v}STC`, `${v}STD`, `${v}STE`, `${v}STF`];
const mdClassFactory = v => [`MMA${v}`, `MDA${v}`];
let BlockData;

(function (_BlockData) {
  const aBlockData = _BlockData.aBlockData = ['A/P2', null];
  const bBlockData = _BlockData.bBlockData = ['B/R1', 'B/S1', 'B/Fysikk 1', 'B/Geofag 1', 'B/Engelsk 1', 'B/Økonomistyring', 'B/Samfunns-geografi', 'B/R2', 'B/S2', 'B/IT2', 'B/Poilitikk og menneskerettigheter', 'B/Entreprenørskap og bedriftsutvikling 2', 'B/Rettslære 2', null];
  const cBlockData = _BlockData.cBlockData = ['C/IT1', 'C/Kjemi 1', 'C/Biologi 1', 'C/Markedsføring og ledelse 1', 'C/Rettslære 1', 'C/Sosiologi og sosialantropologi', 'C/Fysikk 2', 'C/Samfunnsfaglig engelsk', 'C/Samfunnsøkonomi 2', 'C/Sosialkunnskap', null];
  const mdDBlockData = _BlockData.mdDBlockData = ['D/Musikk fordypning 2', 'D/Teaterproduksjon og fordypning 2', 'D/Spansk 1+2', 'D/Tysk 1+2', 'D/Fransk 1+2', null];
  const dDataBlock = _BlockData.dDataBlock = ['D/Kjemi 1', 'D/Historie og filosofi 1', 'D/Kommunikasjon og kultur', 'D/Samfunnsøkonomi 1', 'D/Toppidrett 1', 'D/Biologi 2', 'D/Markedsføring og ledelse 2', 'D/Spansk 1+2', 'D/Tysk 1+2', 'D/Spansk 3', 'D/Toppidrett 2', 'D/Musikk fordypning 2', 'D/Teaterproduksjon og fordypning 2', 'D/Kjemi 2', null];
  const eBlockData = _BlockData.eBlockData = ['E/R1', 'E/S1', 'E/Fysikk 1', 'E/Engelsk 1', 'E/Entreprenørskap og bedriftsutvikling 1', 'E/Sosiologi og sosialantropologi', 'E/Psykologi 1', 'E/R2', 'E/S2', 'E/Kjemi 2', 'E/Geofag 2', 'E/Engelsk litteratur og kultur', 'E/Økonomi og ledelse', 'E/Psykologi 2', null];
})(BlockData || (BlockData = {}));

const isMd = v => v.class.startsWith('MD');
const isMd3 = v => v.class[2] === '3';
const isMdX = v => isMd(v) && !isMd3(v);
const isSt1 = v => v.class[0] === '1';
const isStX = v => !isMd(v) && !isSt1(v);
const extractGrade = _class => _class.indexOf('1') > -1 ? 1 : _class.indexOf('2') > -1 ? 2 : 3;

const process = str => str.toLocaleLowerCase().replace(/\s+/g, '-');

const classTopicKeyGenerator = _class => `topic.class(${process(_class)})`;
const languageTopicKeyGenerator = (language, grade) => language && `topic.language(${grade}/${process(language)})`;
const programTopicKeyGenerator = program => program === null ? null : `topic.program(${process(program)})`;

/***/ }),

/***/ "./utils/__mocks__/getDataForTopicAndWeek.ts":
/*!***************************************************!*\
  !*** ./utils/__mocks__/getDataForTopicAndWeek.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getDataForTopicAndWeek": () => (/* binding */ getDataForTopicAndWeek)
/* harmony export */ });
/* harmony import */ var _getInitialWeekData__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../getInitialWeekData */ "./utils/getInitialWeekData.ts");
/* harmony import */ var _testData__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../testData */ "./utils/testData.ts");


const getDataForTopicAndWeek = async (topic, week) => {
  switch (topic) {
    case 'topic.class(2std)':
      return [[], [_testData__WEBPACK_IMPORTED_MODULE_1__.studyBlock, _testData__WEBPACK_IMPORTED_MODULE_1__.studyBlock, _testData__WEBPACK_IMPORTED_MODULE_1__.norwegian], [_testData__WEBPACK_IMPORTED_MODULE_1__.norwegian, _testData__WEBPACK_IMPORTED_MODULE_1__.studyBlock, _testData__WEBPACK_IMPORTED_MODULE_1__.history], [], [_testData__WEBPACK_IMPORTED_MODULE_1__.studyBlock, _testData__WEBPACK_IMPORTED_MODULE_1__.studyBlock, _testData__WEBPACK_IMPORTED_MODULE_1__.studyBlock, _testData__WEBPACK_IMPORTED_MODULE_1__.gym]];

    case 'topic.language(2/german1)':
      return [[_testData__WEBPACK_IMPORTED_MODULE_1__.studyBlock, _testData__WEBPACK_IMPORTED_MODULE_1__.german1], [], [], [_testData__WEBPACK_IMPORTED_MODULE_1__.german1], []];

    case 'topic.program(b/it2)':
      return [[], [], [], [], []];

    case 'topic.program(c/it1)':
      return [[_testData__WEBPACK_IMPORTED_MODULE_1__.it1], [], [_testData__WEBPACK_IMPORTED_MODULE_1__.studyBlock, _testData__WEBPACK_IMPORTED_MODULE_1__.it1], [], [_testData__WEBPACK_IMPORTED_MODULE_1__.it1]];

    case 'topic.program(d/biologi-2)':
      return [[], [_testData__WEBPACK_IMPORTED_MODULE_1__.biology2], [], [_testData__WEBPACK_IMPORTED_MODULE_1__.studyBlock, _testData__WEBPACK_IMPORTED_MODULE_1__.biology2], [_testData__WEBPACK_IMPORTED_MODULE_1__.studyBlock, _testData__WEBPACK_IMPORTED_MODULE_1__.studyBlock, _testData__WEBPACK_IMPORTED_MODULE_1__.biology2]];

    case 'topic.program(e/fysikk-1)':
      return [[], [_testData__WEBPACK_IMPORTED_MODULE_1__.studyBlock, _testData__WEBPACK_IMPORTED_MODULE_1__.physics1], [], [], [_testData__WEBPACK_IMPORTED_MODULE_1__.studyBlock, _testData__WEBPACK_IMPORTED_MODULE_1__.physics1]];

    default:
      return (0,_getInitialWeekData__WEBPACK_IMPORTED_MODULE_0__.getInitialWeekData)();
  }
};

/***/ }),

/***/ "./utils/dataMerging.ts":
/*!******************************!*\
  !*** ./utils/dataMerging.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "studyBlock": () => (/* binding */ studyBlock),
/* harmony export */   "getDataBlockPriorityIndex": () => (/* binding */ getDataBlockPriorityIndex),
/* harmony export */   "mergeDataBlock": () => (/* binding */ mergeDataBlock),
/* harmony export */   "mergeWeekBlock": () => (/* binding */ mergeWeekBlock)
/* harmony export */ });
/* harmony import */ var lodash_cloneDeep__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash/cloneDeep */ "lodash/cloneDeep");
/* harmony import */ var lodash_cloneDeep__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_cloneDeep__WEBPACK_IMPORTED_MODULE_0__);

const studyBlock = {
  type: 'study'
};
const getDataBlockPriorityIndex = dataBlock => {
  switch (dataBlock === null || dataBlock === void 0 ? void 0 : dataBlock.type) {
    case 'class':
      return 1 + (dataBlock.priorityIncrement || 0);

    case 'study':
      return 0 + (dataBlock.priorityIncrement || 0);

    default:
      return -1;
  }
};
const mergeDataBlock = (d1, d2) => getDataBlockPriorityIndex(d2) >= getDataBlockPriorityIndex(d1) ? d2 : d1;
const mergeWeekBlock = (w1, _w2) => {
  const internal = lodash_cloneDeep__WEBPACK_IMPORTED_MODULE_0___default()(w1);
  const w2 = lodash_cloneDeep__WEBPACK_IMPORTED_MODULE_0___default()(_w2);

  for (let dayIndex = 0; dayIndex < w2.length; dayIndex++) {
    const day = w2[dayIndex];

    for (let lessonIndex = 0; lessonIndex < day.length; lessonIndex++) {
      const lesson = day[lessonIndex];
      if (lesson) internal[dayIndex][lessonIndex] = mergeDataBlock(w1[dayIndex][lessonIndex], lesson);
    }
  }

  return internal;
};

/***/ }),

/***/ "./utils/doClassSelectorQuery.ts":
/*!***************************************!*\
  !*** ./utils/doClassSelectorQuery.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "doClassSelectorQuery": () => (/* binding */ doClassSelectorQuery)
/* harmony export */ });
/* harmony import */ var typings_userContentSelector__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! typings/userContentSelector */ "./typings/userContentSelector.ts");
/* harmony import */ var _memoizeAsync__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./memoizeAsync */ "./utils/memoizeAsync.ts");
/* harmony import */ var _getInitialWeekData__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./getInitialWeekData */ "./utils/getInitialWeekData.ts");
/* harmony import */ var _getDataForTopicAndWeek__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./getDataForTopicAndWeek */ "./utils/getDataForTopicAndWeek.ts");
/* harmony import */ var _dataMerging__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./dataMerging */ "./utils/dataMerging.ts");





const doClassSelectorQuery = (0,_memoizeAsync__WEBPACK_IMPORTED_MODULE_1__.memoizeAsync)(async (selector, week) => {
  let baseBlock = (0,_getInitialWeekData__WEBPACK_IMPORTED_MODULE_2__.getInitialWeekData)();
  baseBlock = (0,_dataMerging__WEBPACK_IMPORTED_MODULE_4__.mergeWeekBlock)(baseBlock, await (0,_getDataForTopicAndWeek__WEBPACK_IMPORTED_MODULE_3__.getDataForTopicAndWeek)((0,typings_userContentSelector__WEBPACK_IMPORTED_MODULE_0__.classTopicKeyGenerator)(selector.class), week));
  baseBlock = (0,_dataMerging__WEBPACK_IMPORTED_MODULE_4__.mergeWeekBlock)(baseBlock, await (0,_getDataForTopicAndWeek__WEBPACK_IMPORTED_MODULE_3__.getDataForTopicAndWeek)((0,typings_userContentSelector__WEBPACK_IMPORTED_MODULE_0__.languageTopicKeyGenerator)(selector.language, (0,typings_userContentSelector__WEBPACK_IMPORTED_MODULE_0__.extractGrade)(selector['class'])), week)); // prettier-ignore

  if ((0,typings_userContentSelector__WEBPACK_IMPORTED_MODULE_0__.isStX)(selector)) {
    baseBlock = (0,_dataMerging__WEBPACK_IMPORTED_MODULE_4__.mergeWeekBlock)(baseBlock, await (0,_getDataForTopicAndWeek__WEBPACK_IMPORTED_MODULE_3__.getDataForTopicAndWeek)((0,typings_userContentSelector__WEBPACK_IMPORTED_MODULE_0__.programTopicKeyGenerator)(selector.a), week));
    baseBlock = (0,_dataMerging__WEBPACK_IMPORTED_MODULE_4__.mergeWeekBlock)(baseBlock, await (0,_getDataForTopicAndWeek__WEBPACK_IMPORTED_MODULE_3__.getDataForTopicAndWeek)((0,typings_userContentSelector__WEBPACK_IMPORTED_MODULE_0__.programTopicKeyGenerator)(selector.b), week));
    baseBlock = (0,_dataMerging__WEBPACK_IMPORTED_MODULE_4__.mergeWeekBlock)(baseBlock, await (0,_getDataForTopicAndWeek__WEBPACK_IMPORTED_MODULE_3__.getDataForTopicAndWeek)((0,typings_userContentSelector__WEBPACK_IMPORTED_MODULE_0__.programTopicKeyGenerator)(selector.c), week));
    baseBlock = (0,_dataMerging__WEBPACK_IMPORTED_MODULE_4__.mergeWeekBlock)(baseBlock, await (0,_getDataForTopicAndWeek__WEBPACK_IMPORTED_MODULE_3__.getDataForTopicAndWeek)((0,typings_userContentSelector__WEBPACK_IMPORTED_MODULE_0__.programTopicKeyGenerator)(selector.d), week));
    baseBlock = (0,_dataMerging__WEBPACK_IMPORTED_MODULE_4__.mergeWeekBlock)(baseBlock, await (0,_getDataForTopicAndWeek__WEBPACK_IMPORTED_MODULE_3__.getDataForTopicAndWeek)((0,typings_userContentSelector__WEBPACK_IMPORTED_MODULE_0__.programTopicKeyGenerator)(selector.e), week));
  }

  return baseBlock;
});

/***/ }),

/***/ "./utils/getDataForTopicAndWeek.ts":
/*!*****************************************!*\
  !*** ./utils/getDataForTopicAndWeek.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getDataForTopicAndWeek": () => (/* reexport safe */ _mocks_getDataForTopicAndWeek__WEBPACK_IMPORTED_MODULE_0__.getDataForTopicAndWeek)
/* harmony export */ });
/* harmony import */ var _mocks_getDataForTopicAndWeek__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./__mocks__/getDataForTopicAndWeek */ "./utils/__mocks__/getDataForTopicAndWeek.ts");
 // export const getDataForTopicAndWeek = async (
// 	topic: string | null,
// 	week: number,
// ): Promise<WeekBlock> => {
// 	if (topic === null) return getInitialWeekData()
// 	throw new Error('Function not implemented.')
// }

/***/ }),

/***/ "./utils/getInitialWeekData.ts":
/*!*************************************!*\
  !*** ./utils/getInitialWeekData.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getInitialWeekData": () => (/* binding */ getInitialWeekData)
/* harmony export */ });
/* harmony import */ var _dataMerging__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dataMerging */ "./utils/dataMerging.ts");

const getInitialWeekData = () => [[_dataMerging__WEBPACK_IMPORTED_MODULE_0__.studyBlock, _dataMerging__WEBPACK_IMPORTED_MODULE_0__.studyBlock, _dataMerging__WEBPACK_IMPORTED_MODULE_0__.studyBlock, _dataMerging__WEBPACK_IMPORTED_MODULE_0__.studyBlock], [_dataMerging__WEBPACK_IMPORTED_MODULE_0__.studyBlock, _dataMerging__WEBPACK_IMPORTED_MODULE_0__.studyBlock, _dataMerging__WEBPACK_IMPORTED_MODULE_0__.studyBlock, _dataMerging__WEBPACK_IMPORTED_MODULE_0__.studyBlock], [_dataMerging__WEBPACK_IMPORTED_MODULE_0__.studyBlock, _dataMerging__WEBPACK_IMPORTED_MODULE_0__.studyBlock, _dataMerging__WEBPACK_IMPORTED_MODULE_0__.studyBlock, _dataMerging__WEBPACK_IMPORTED_MODULE_0__.studyBlock], [_dataMerging__WEBPACK_IMPORTED_MODULE_0__.studyBlock, _dataMerging__WEBPACK_IMPORTED_MODULE_0__.studyBlock, _dataMerging__WEBPACK_IMPORTED_MODULE_0__.studyBlock, _dataMerging__WEBPACK_IMPORTED_MODULE_0__.studyBlock], [_dataMerging__WEBPACK_IMPORTED_MODULE_0__.studyBlock, _dataMerging__WEBPACK_IMPORTED_MODULE_0__.studyBlock, _dataMerging__WEBPACK_IMPORTED_MODULE_0__.studyBlock, _dataMerging__WEBPACK_IMPORTED_MODULE_0__.studyBlock]];

/***/ }),

/***/ "./utils/memoizeAsync.ts":
/*!*******************************!*\
  !*** ./utils/memoizeAsync.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "memoizeAsync": () => (/* binding */ memoizeAsync)
/* harmony export */ });
const memoizeAsync = (fn, keyGen = (...args) => JSON.stringify(args)) => {
  const memo = {};
  const processQueue = {};
  return (...args) => {
    const lookupValue = keyGen(...args);
    if (memo.hasOwnProperty(lookupValue)) return Promise.resolve(memo[lookupValue]);
    if (processQueue.hasOwnProperty(lookupValue)) return new Promise((resolve, reject) => {
      processQueue[lookupValue].push([resolve, reject]);
    });
    processQueue[lookupValue] = [];
    return fn(...args).catch(reason => {
      for (const [, reject] of processQueue[lookupValue]) {
        reject(reason);
      }

      throw reason;
    }).then(value => {
      for (const [resolve] of processQueue[lookupValue]) {
        resolve(value);
      }

      memo[lookupValue] = value;
      return value;
    }).finally(() => delete processQueue[lookupValue]);
  };
};

/***/ }),

/***/ "./utils/testData.ts":
/*!***************************!*\
  !*** ./utils/testData.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "studyBlock": () => (/* binding */ studyBlock),
/* harmony export */   "classBlock": () => (/* binding */ classBlock),
/* harmony export */   "classAltBlock": () => (/* binding */ classAltBlock),
/* harmony export */   "priorityBlock": () => (/* binding */ priorityBlock),
/* harmony export */   "history": () => (/* binding */ history),
/* harmony export */   "gym": () => (/* binding */ gym),
/* harmony export */   "norwegian": () => (/* binding */ norwegian),
/* harmony export */   "german1": () => (/* binding */ german1),
/* harmony export */   "it2": () => (/* binding */ it2),
/* harmony export */   "it1": () => (/* binding */ it1),
/* harmony export */   "biology2": () => (/* binding */ biology2),
/* harmony export */   "physics1": () => (/* binding */ physics1)
/* harmony export */ });
const studyBlock = {
  type: 'study'
};
const classBlock = {
  type: 'class',
  className: 'Subject1',
  homework: [],
  roomIdentifier: 'R007'
};
const classAltBlock = {
  type: 'class',
  className: 'Subject2',
  homework: [],
  roomIdentifier: 'GYMSAL'
};
const priorityBlock = {
  type: 'class',
  className: 'Subject',
  homework: [],
  roomIdentifier: 'R007',
  priorityIncrement: 1
}; // prettier-ignore

const history = {
  className: 'History',
  homework: [],
  roomIdentifier: 'R167',
  type: 'class'
}; // prettier-ignore

const gym = {
  className: 'Gym',
  homework: [],
  roomIdentifier: 'Gymsal/Ute',
  type: 'class'
}; // prettier-ignore

const norwegian = {
  className: 'Norsk',
  homework: [],
  roomIdentifier: 'R162',
  type: 'class'
}; // prettier-ignore

const german1 = {
  className: 'Tysk1',
  homework: [],
  roomIdentifier: 'R167',
  type: 'class'
}; // prettier-ignore

const it2 = {
  className: 'IT2',
  homework: [],
  roomIdentifier: 'R167',
  type: 'class'
}; // prettier-ignore

const it1 = {
  className: 'IT1',
  homework: [],
  roomIdentifier: 'R001',
  type: 'class'
}; // prettier-ignore

const biology2 = {
  className: 'Biologi2',
  homework: [],
  roomIdentifier: 'R211',
  type: 'class'
}; // prettier-ignore

const physics1 = {
  className: 'Fysikk1',
  homework: [],
  roomIdentifier: 'R202',
  type: 'class'
};

/***/ }),

/***/ "@emotion/styled":
/*!**********************************!*\
  !*** external "@emotion/styled" ***!
  \**********************************/
/***/ ((module) => {

module.exports = require("@emotion/styled");

/***/ }),

/***/ "@mui/icons-material/ExpandMore":
/*!*************************************************!*\
  !*** external "@mui/icons-material/ExpandMore" ***!
  \*************************************************/
/***/ ((module) => {

module.exports = require("@mui/icons-material/ExpandMore");

/***/ }),

/***/ "@mui/icons-material/KeyboardArrowLeft":
/*!********************************************************!*\
  !*** external "@mui/icons-material/KeyboardArrowLeft" ***!
  \********************************************************/
/***/ ((module) => {

module.exports = require("@mui/icons-material/KeyboardArrowLeft");

/***/ }),

/***/ "@mui/icons-material/KeyboardArrowRight":
/*!*********************************************************!*\
  !*** external "@mui/icons-material/KeyboardArrowRight" ***!
  \*********************************************************/
/***/ ((module) => {

module.exports = require("@mui/icons-material/KeyboardArrowRight");

/***/ }),

/***/ "@mui/material":
/*!********************************!*\
  !*** external "@mui/material" ***!
  \********************************/
/***/ ((module) => {

module.exports = require("@mui/material");

/***/ }),

/***/ "@mui/material/Box":
/*!************************************!*\
  !*** external "@mui/material/Box" ***!
  \************************************/
/***/ ((module) => {

module.exports = require("@mui/material/Box");

/***/ }),

/***/ "@mui/material/Card":
/*!*************************************!*\
  !*** external "@mui/material/Card" ***!
  \*************************************/
/***/ ((module) => {

module.exports = require("@mui/material/Card");

/***/ }),

/***/ "@mui/material/CardActions":
/*!********************************************!*\
  !*** external "@mui/material/CardActions" ***!
  \********************************************/
/***/ ((module) => {

module.exports = require("@mui/material/CardActions");

/***/ }),

/***/ "@mui/material/CardContent":
/*!********************************************!*\
  !*** external "@mui/material/CardContent" ***!
  \********************************************/
/***/ ((module) => {

module.exports = require("@mui/material/CardContent");

/***/ }),

/***/ "@mui/material/CardHeader":
/*!*******************************************!*\
  !*** external "@mui/material/CardHeader" ***!
  \*******************************************/
/***/ ((module) => {

module.exports = require("@mui/material/CardHeader");

/***/ }),

/***/ "@mui/material/Checkbox":
/*!*****************************************!*\
  !*** external "@mui/material/Checkbox" ***!
  \*****************************************/
/***/ ((module) => {

module.exports = require("@mui/material/Checkbox");

/***/ }),

/***/ "@mui/material/Collapse":
/*!*****************************************!*\
  !*** external "@mui/material/Collapse" ***!
  \*****************************************/
/***/ ((module) => {

module.exports = require("@mui/material/Collapse");

/***/ }),

/***/ "@mui/material/IconButton":
/*!*******************************************!*\
  !*** external "@mui/material/IconButton" ***!
  \*******************************************/
/***/ ((module) => {

module.exports = require("@mui/material/IconButton");

/***/ }),

/***/ "@mui/material/Stack":
/*!**************************************!*\
  !*** external "@mui/material/Stack" ***!
  \**************************************/
/***/ ((module) => {

module.exports = require("@mui/material/Stack");

/***/ }),

/***/ "@mui/material/Typography":
/*!*******************************************!*\
  !*** external "@mui/material/Typography" ***!
  \*******************************************/
/***/ ((module) => {

module.exports = require("@mui/material/Typography");

/***/ }),

/***/ "@mui/material/styles":
/*!***************************************!*\
  !*** external "@mui/material/styles" ***!
  \***************************************/
/***/ ((module) => {

module.exports = require("@mui/material/styles");

/***/ }),

/***/ "@mui/material/useMediaQuery":
/*!**********************************************!*\
  !*** external "@mui/material/useMediaQuery" ***!
  \**********************************************/
/***/ ((module) => {

module.exports = require("@mui/material/useMediaQuery");

/***/ }),

/***/ "@mui/system":
/*!******************************!*\
  !*** external "@mui/system" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("@mui/system");

/***/ }),

/***/ "firebase/auth":
/*!********************************!*\
  !*** external "firebase/auth" ***!
  \********************************/
/***/ ((module) => {

module.exports = require("firebase/auth");

/***/ }),

/***/ "firebase/firestore":
/*!*************************************!*\
  !*** external "firebase/firestore" ***!
  \*************************************/
/***/ ((module) => {

module.exports = require("firebase/firestore");

/***/ }),

/***/ "lodash/cloneDeep":
/*!***********************************!*\
  !*** external "lodash/cloneDeep" ***!
  \***********************************/
/***/ ((module) => {

module.exports = require("lodash/cloneDeep");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/***/ ((module) => {

module.exports = require("next/head");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react-swipeable":
/*!**********************************!*\
  !*** external "react-swipeable" ***!
  \**********************************/
/***/ ((module) => {

module.exports = require("react-swipeable");

/***/ }),

/***/ "react-use":
/*!****************************!*\
  !*** external "react-use" ***!
  \****************************/
/***/ ((module) => {

module.exports = require("react-use");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/index.tsx"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFBQSxjQUFjLEVBQUUsTUFBbEQ7QUFBMER5QyxFQUFBQSxJQUFJLEVBQUU7QUFBaEUsQ0FBdkIsRUFDUDs7QUFDTyxNQUFNZ0ssUUFBbUIsR0FBRztBQUFFMU0sRUFBQUEsU0FBUyxFQUFFLFVBQWI7QUFBeUJFLEVBQUFBLFFBQVEsRUFBRSxFQUFuQztBQUF1Q0QsRUFBQUEsY0FBYyxFQUFFLE1BQXZEO0FBQStEeUMsRUFBQUEsSUFBSSxFQUFFO0FBQXJFLENBQTVCLEVBQ1A7O0FBQ08sTUFBTXNLLFFBQW1CLEdBQUc7QUFBRWhOLEVBQUFBLFNBQVMsRUFBRSxTQUFiO0FBQXdCRSxFQUFBQSxRQUFRLEVBQUUsRUFBbEM7QUFBc0NELEVBQUFBLGNBQWMsRUFBRSxNQUF0RDtBQUE4RHlDLEVBQUFBLElBQUksRUFBRTtBQUFwRSxDQUE1Qjs7Ozs7Ozs7OztBQzVDUDs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7OztBQ0FBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vaGVnZ2VucGxhbmVuLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qcyIsIndlYnBhY2s6Ly9oZWdnZW5wbGFuZW4vLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvdG9JbnRlZ2VyL2luZGV4LmpzIiwid2VicGFjazovL2hlZ2dlbnBsYW5lbi8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vZ2V0V2Vlay9pbmRleC5qcyIsIndlYnBhY2s6Ly9oZWdnZW5wbGFuZW4vLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2dldFdlZWtZZWFyL2luZGV4LmpzIiwid2VicGFjazovL2hlZ2dlbnBsYW5lbi8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vc3RhcnRPZldlZWsvaW5kZXguanMiLCJ3ZWJwYWNrOi8vaGVnZ2VucGxhbmVuLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9zdGFydE9mV2Vla1llYXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vaGVnZ2VucGxhbmVuLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS90b0RhdGUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vaGVnZ2VucGxhbmVuLy4vY29tcG9uZW50cy9DYXJkcy9DbGFzcy50c3giLCJ3ZWJwYWNrOi8vaGVnZ2VucGxhbmVuLy4vY29tcG9uZW50cy9DYXJkcy9TdHVkeS50c3giLCJ3ZWJwYWNrOi8vaGVnZ2VucGxhbmVuLy4vY29tcG9uZW50cy9Ib21ld29yay50c3giLCJ3ZWJwYWNrOi8vaGVnZ2VucGxhbmVuLy4vY29udGV4dC9jdXJyZW50V2Vlay50c3giLCJ3ZWJwYWNrOi8vaGVnZ2VucGxhbmVuLy4vY29udGV4dC9kYXRhLnRzeCIsIndlYnBhY2s6Ly9oZWdnZW5wbGFuZW4vLi9jb250ZXh0L2xvYWRpbmcudHN4Iiwid2VicGFjazovL2hlZ2dlbnBsYW5lbi8uL2NvbnRleHQvdXNlci50c3giLCJ3ZWJwYWNrOi8vaGVnZ2VucGxhbmVuLy4vaW50ZXJuYXRpb25hbGl6YXRpb24vdHJhbnNmb3JtRGF5LnRzIiwid2VicGFjazovL2hlZ2dlbnBsYW5lbi8uL3BhZ2VzL2luZGV4LnRzeCIsIndlYnBhY2s6Ly9oZWdnZW5wbGFuZW4vLi9zdHlsZXMvYm94ZXMudHMiLCJ3ZWJwYWNrOi8vaGVnZ2VucGxhbmVuLy4vc3R5bGVzL2NhcmQudHMiLCJ3ZWJwYWNrOi8vaGVnZ2VucGxhbmVuLy4vdHlwaW5ncy91c2VyQ29udGVudFNlbGVjdG9yLnRzIiwid2VicGFjazovL2hlZ2dlbnBsYW5lbi8uL3V0aWxzL19fbW9ja3NfXy9nZXREYXRhRm9yVG9waWNBbmRXZWVrLnRzIiwid2VicGFjazovL2hlZ2dlbnBsYW5lbi8uL3V0aWxzL2RhdGFNZXJnaW5nLnRzIiwid2VicGFjazovL2hlZ2dlbnBsYW5lbi8uL3V0aWxzL2RvQ2xhc3NTZWxlY3RvclF1ZXJ5LnRzIiwid2VicGFjazovL2hlZ2dlbnBsYW5lbi8uL3V0aWxzL2dldERhdGFGb3JUb3BpY0FuZFdlZWsudHMiLCJ3ZWJwYWNrOi8vaGVnZ2VucGxhbmVuLy4vdXRpbHMvZ2V0SW5pdGlhbFdlZWtEYXRhLnRzIiwid2VicGFjazovL2hlZ2dlbnBsYW5lbi8uL3V0aWxzL21lbW9pemVBc3luYy50cyIsIndlYnBhY2s6Ly9oZWdnZW5wbGFuZW4vLi91dGlscy90ZXN0RGF0YS50cyIsIndlYnBhY2s6Ly9oZWdnZW5wbGFuZW4vZXh0ZXJuYWwgXCJAZW1vdGlvbi9zdHlsZWRcIiIsIndlYnBhY2s6Ly9oZWdnZW5wbGFuZW4vZXh0ZXJuYWwgXCJAbXVpL2ljb25zLW1hdGVyaWFsL0V4cGFuZE1vcmVcIiIsIndlYnBhY2s6Ly9oZWdnZW5wbGFuZW4vZXh0ZXJuYWwgXCJAbXVpL2ljb25zLW1hdGVyaWFsL0tleWJvYXJkQXJyb3dMZWZ0XCIiLCJ3ZWJwYWNrOi8vaGVnZ2VucGxhbmVuL2V4dGVybmFsIFwiQG11aS9pY29ucy1tYXRlcmlhbC9LZXlib2FyZEFycm93UmlnaHRcIiIsIndlYnBhY2s6Ly9oZWdnZW5wbGFuZW4vZXh0ZXJuYWwgXCJAbXVpL21hdGVyaWFsXCIiLCJ3ZWJwYWNrOi8vaGVnZ2VucGxhbmVuL2V4dGVybmFsIFwiQG11aS9tYXRlcmlhbC9Cb3hcIiIsIndlYnBhY2s6Ly9oZWdnZW5wbGFuZW4vZXh0ZXJuYWwgXCJAbXVpL21hdGVyaWFsL0NhcmRcIiIsIndlYnBhY2s6Ly9oZWdnZW5wbGFuZW4vZXh0ZXJuYWwgXCJAbXVpL21hdGVyaWFsL0NhcmRBY3Rpb25zXCIiLCJ3ZWJwYWNrOi8vaGVnZ2VucGxhbmVuL2V4dGVybmFsIFwiQG11aS9tYXRlcmlhbC9DYXJkQ29udGVudFwiIiwid2VicGFjazovL2hlZ2dlbnBsYW5lbi9leHRlcm5hbCBcIkBtdWkvbWF0ZXJpYWwvQ2FyZEhlYWRlclwiIiwid2VicGFjazovL2hlZ2dlbnBsYW5lbi9leHRlcm5hbCBcIkBtdWkvbWF0ZXJpYWwvQ2hlY2tib3hcIiIsIndlYnBhY2s6Ly9oZWdnZW5wbGFuZW4vZXh0ZXJuYWwgXCJAbXVpL21hdGVyaWFsL0NvbGxhcHNlXCIiLCJ3ZWJwYWNrOi8vaGVnZ2VucGxhbmVuL2V4dGVybmFsIFwiQG11aS9tYXRlcmlhbC9JY29uQnV0dG9uXCIiLCJ3ZWJwYWNrOi8vaGVnZ2VucGxhbmVuL2V4dGVybmFsIFwiQG11aS9tYXRlcmlhbC9TdGFja1wiIiwid2VicGFjazovL2hlZ2dlbnBsYW5lbi9leHRlcm5hbCBcIkBtdWkvbWF0ZXJpYWwvVHlwb2dyYXBoeVwiIiwid2VicGFjazovL2hlZ2dlbnBsYW5lbi9leHRlcm5hbCBcIkBtdWkvbWF0ZXJpYWwvc3R5bGVzXCIiLCJ3ZWJwYWNrOi8vaGVnZ2VucGxhbmVuL2V4dGVybmFsIFwiQG11aS9tYXRlcmlhbC91c2VNZWRpYVF1ZXJ5XCIiLCJ3ZWJwYWNrOi8vaGVnZ2VucGxhbmVuL2V4dGVybmFsIFwiQG11aS9zeXN0ZW1cIiIsIndlYnBhY2s6Ly9oZWdnZW5wbGFuZW4vZXh0ZXJuYWwgXCJmaXJlYmFzZS9hdXRoXCIiLCJ3ZWJwYWNrOi8vaGVnZ2VucGxhbmVuL2V4dGVybmFsIFwiZmlyZWJhc2UvZmlyZXN0b3JlXCIiLCJ3ZWJwYWNrOi8vaGVnZ2VucGxhbmVuL2V4dGVybmFsIFwibG9kYXNoL2Nsb25lRGVlcFwiIiwid2VicGFjazovL2hlZ2dlbnBsYW5lbi9leHRlcm5hbCBcIm5leHQvaGVhZFwiIiwid2VicGFjazovL2hlZ2dlbnBsYW5lbi9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vaGVnZ2VucGxhbmVuL2V4dGVybmFsIFwicmVhY3Qtc3dpcGVhYmxlXCIiLCJ3ZWJwYWNrOi8vaGVnZ2VucGxhbmVuL2V4dGVybmFsIFwicmVhY3QtdXNlXCIiLCJ3ZWJwYWNrOi8vaGVnZ2VucGxhbmVuL2V4dGVybmFsIFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcmVxdWlyZWRBcmdzKHJlcXVpcmVkLCBhcmdzKSB7XG4gIGlmIChhcmdzLmxlbmd0aCA8IHJlcXVpcmVkKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihyZXF1aXJlZCArICcgYXJndW1lbnQnICsgKHJlcXVpcmVkID4gMSA/ICdzJyA6ICcnKSArICcgcmVxdWlyZWQsIGJ1dCBvbmx5ICcgKyBhcmdzLmxlbmd0aCArICcgcHJlc2VudCcpO1xuICB9XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdG9JbnRlZ2VyKGRpcnR5TnVtYmVyKSB7XG4gIGlmIChkaXJ0eU51bWJlciA9PT0gbnVsbCB8fCBkaXJ0eU51bWJlciA9PT0gdHJ1ZSB8fCBkaXJ0eU51bWJlciA9PT0gZmFsc2UpIHtcbiAgICByZXR1cm4gTmFOO1xuICB9XG5cbiAgdmFyIG51bWJlciA9IE51bWJlcihkaXJ0eU51bWJlcik7XG5cbiAgaWYgKGlzTmFOKG51bWJlcikpIHtcbiAgICByZXR1cm4gbnVtYmVyO1xuICB9XG5cbiAgcmV0dXJuIG51bWJlciA8IDAgPyBNYXRoLmNlaWwobnVtYmVyKSA6IE1hdGguZmxvb3IobnVtYmVyKTtcbn0iLCJpbXBvcnQgc3RhcnRPZldlZWsgZnJvbSBcIi4uL3N0YXJ0T2ZXZWVrL2luZGV4LmpzXCI7XG5pbXBvcnQgc3RhcnRPZldlZWtZZWFyIGZyb20gXCIuLi9zdGFydE9mV2Vla1llYXIvaW5kZXguanNcIjtcbmltcG9ydCB0b0RhdGUgZnJvbSBcIi4uL3RvRGF0ZS9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbnZhciBNSUxMSVNFQ09ORFNfSU5fV0VFSyA9IDYwNDgwMDAwMDtcbi8qKlxuICogQG5hbWUgZ2V0V2Vla1xuICogQGNhdGVnb3J5IFdlZWsgSGVscGVyc1xuICogQHN1bW1hcnkgR2V0IHRoZSBsb2NhbCB3ZWVrIGluZGV4IG9mIHRoZSBnaXZlbiBkYXRlLlxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogR2V0IHRoZSBsb2NhbCB3ZWVrIGluZGV4IG9mIHRoZSBnaXZlbiBkYXRlLlxuICogVGhlIGV4YWN0IGNhbGN1bGF0aW9uIGRlcGVuZHMgb24gdGhlIHZhbHVlcyBvZlxuICogYG9wdGlvbnMud2Vla1N0YXJ0c09uYCAod2hpY2ggaXMgdGhlIGluZGV4IG9mIHRoZSBmaXJzdCBkYXkgb2YgdGhlIHdlZWspXG4gKiBhbmQgYG9wdGlvbnMuZmlyc3RXZWVrQ29udGFpbnNEYXRlYCAod2hpY2ggaXMgdGhlIGRheSBvZiBKYW51YXJ5LCB3aGljaCBpcyBhbHdheXMgaW5cbiAqIHRoZSBmaXJzdCB3ZWVrIG9mIHRoZSB3ZWVrLW51bWJlcmluZyB5ZWFyKVxuICpcbiAqIFdlZWsgbnVtYmVyaW5nOiBodHRwczovL2VuLndpa2lwZWRpYS5vcmcvd2lraS9XZWVrI1dlZWtfbnVtYmVyaW5nXG4gKlxuICogIyMjIHYyLjAuMCBicmVha2luZyBjaGFuZ2VzOlxuICpcbiAqIC0gW0NoYW5nZXMgdGhhdCBhcmUgY29tbW9uIGZvciB0aGUgd2hvbGUgbGlicmFyeV0oaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL2RhdGUtZm5zL2Jsb2IvbWFzdGVyL2RvY3MvdXBncmFkZUd1aWRlLm1kI0NvbW1vbi1DaGFuZ2VzKS5cbiAqXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBkYXRlIC0gdGhlIGdpdmVuIGRhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBbb3B0aW9uc10gLSBhbiBvYmplY3Qgd2l0aCBvcHRpb25zLlxuICogQHBhcmFtIHtMb2NhbGV9IFtvcHRpb25zLmxvY2FsZT1kZWZhdWx0TG9jYWxlXSAtIHRoZSBsb2NhbGUgb2JqZWN0LiBTZWUgW0xvY2FsZV17QGxpbmsgaHR0cHM6Ly9kYXRlLWZucy5vcmcvZG9jcy9Mb2NhbGV9XG4gKiBAcGFyYW0gezB8MXwyfDN8NHw1fDZ9IFtvcHRpb25zLndlZWtTdGFydHNPbj0wXSAtIHRoZSBpbmRleCBvZiB0aGUgZmlyc3QgZGF5IG9mIHRoZSB3ZWVrICgwIC0gU3VuZGF5KVxuICogQHBhcmFtIHsxfDJ8M3w0fDV8Nnw3fSBbb3B0aW9ucy5maXJzdFdlZWtDb250YWluc0RhdGU9MV0gLSB0aGUgZGF5IG9mIEphbnVhcnksIHdoaWNoIGlzIGFsd2F5cyBpbiB0aGUgZmlyc3Qgd2VlayBvZiB0aGUgeWVhclxuICogQHJldHVybnMge051bWJlcn0gdGhlIHdlZWtcbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gMSBhcmd1bWVudCByZXF1aXJlZFxuICogQHRocm93cyB7UmFuZ2VFcnJvcn0gYG9wdGlvbnMud2Vla1N0YXJ0c09uYCBtdXN0IGJlIGJldHdlZW4gMCBhbmQgNlxuICogQHRocm93cyB7UmFuZ2VFcnJvcn0gYG9wdGlvbnMuZmlyc3RXZWVrQ29udGFpbnNEYXRlYCBtdXN0IGJlIGJldHdlZW4gMSBhbmQgN1xuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBXaGljaCB3ZWVrIG9mIHRoZSBsb2NhbCB3ZWVrIG51bWJlcmluZyB5ZWFyIGlzIDIgSmFudWFyeSAyMDA1IHdpdGggZGVmYXVsdCBvcHRpb25zP1xuICogY29uc3QgcmVzdWx0ID0gZ2V0SVNPV2VlayhuZXcgRGF0ZSgyMDA1LCAwLCAyKSlcbiAqIC8vPT4gMlxuICpcbiAqIC8vIFdoaWNoIHdlZWsgb2YgdGhlIGxvY2FsIHdlZWsgbnVtYmVyaW5nIHllYXIgaXMgMiBKYW51YXJ5IDIwMDUsXG4gKiAvLyBpZiBNb25kYXkgaXMgdGhlIGZpcnN0IGRheSBvZiB0aGUgd2VlayxcbiAqIC8vIGFuZCB0aGUgZmlyc3Qgd2VlayBvZiB0aGUgeWVhciBhbHdheXMgY29udGFpbnMgNCBKYW51YXJ5P1xuICogY29uc3QgcmVzdWx0ID0gZ2V0SVNPV2VlayhuZXcgRGF0ZSgyMDA1LCAwLCAyKSwge1xuICogICB3ZWVrU3RhcnRzT246IDEsXG4gKiAgIGZpcnN0V2Vla0NvbnRhaW5zRGF0ZTogNFxuICogfSlcbiAqIC8vPT4gNTNcbiAqL1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZXRXZWVrKGRpcnR5RGF0ZSwgb3B0aW9ucykge1xuICByZXF1aXJlZEFyZ3MoMSwgYXJndW1lbnRzKTtcbiAgdmFyIGRhdGUgPSB0b0RhdGUoZGlydHlEYXRlKTtcbiAgdmFyIGRpZmYgPSBzdGFydE9mV2VlayhkYXRlLCBvcHRpb25zKS5nZXRUaW1lKCkgLSBzdGFydE9mV2Vla1llYXIoZGF0ZSwgb3B0aW9ucykuZ2V0VGltZSgpOyAvLyBSb3VuZCB0aGUgbnVtYmVyIG9mIGRheXMgdG8gdGhlIG5lYXJlc3QgaW50ZWdlclxuICAvLyBiZWNhdXNlIHRoZSBudW1iZXIgb2YgbWlsbGlzZWNvbmRzIGluIGEgd2VlayBpcyBub3QgY29uc3RhbnRcbiAgLy8gKGUuZy4gaXQncyBkaWZmZXJlbnQgaW4gdGhlIHdlZWsgb2YgdGhlIGRheWxpZ2h0IHNhdmluZyB0aW1lIGNsb2NrIHNoaWZ0KVxuXG4gIHJldHVybiBNYXRoLnJvdW5kKGRpZmYgLyBNSUxMSVNFQ09ORFNfSU5fV0VFSykgKyAxO1xufSIsImltcG9ydCBzdGFydE9mV2VlayBmcm9tIFwiLi4vc3RhcnRPZldlZWsvaW5kZXguanNcIjtcbmltcG9ydCB0b0RhdGUgZnJvbSBcIi4uL3RvRGF0ZS9pbmRleC5qc1wiO1xuaW1wb3J0IHRvSW50ZWdlciBmcm9tIFwiLi4vX2xpYi90b0ludGVnZXIvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG5cbi8qKlxuICogQG5hbWUgZ2V0V2Vla1llYXJcbiAqIEBjYXRlZ29yeSBXZWVrLU51bWJlcmluZyBZZWFyIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IEdldCB0aGUgbG9jYWwgd2Vlay1udW1iZXJpbmcgeWVhciBvZiB0aGUgZ2l2ZW4gZGF0ZS5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIEdldCB0aGUgbG9jYWwgd2Vlay1udW1iZXJpbmcgeWVhciBvZiB0aGUgZ2l2ZW4gZGF0ZS5cbiAqIFRoZSBleGFjdCBjYWxjdWxhdGlvbiBkZXBlbmRzIG9uIHRoZSB2YWx1ZXMgb2ZcbiAqIGBvcHRpb25zLndlZWtTdGFydHNPbmAgKHdoaWNoIGlzIHRoZSBpbmRleCBvZiB0aGUgZmlyc3QgZGF5IG9mIHRoZSB3ZWVrKVxuICogYW5kIGBvcHRpb25zLmZpcnN0V2Vla0NvbnRhaW5zRGF0ZWAgKHdoaWNoIGlzIHRoZSBkYXkgb2YgSmFudWFyeSwgd2hpY2ggaXMgYWx3YXlzIGluXG4gKiB0aGUgZmlyc3Qgd2VlayBvZiB0aGUgd2Vlay1udW1iZXJpbmcgeWVhcilcbiAqXG4gKiBXZWVrIG51bWJlcmluZzogaHR0cHM6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvV2VlayNXZWVrX251bWJlcmluZ1xuICpcbiAqICMjIyB2Mi4wLjAgYnJlYWtpbmcgY2hhbmdlczpcbiAqXG4gKiAtIFtDaGFuZ2VzIHRoYXQgYXJlIGNvbW1vbiBmb3IgdGhlIHdob2xlIGxpYnJhcnldKGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy9kYXRlLWZucy9ibG9iL21hc3Rlci9kb2NzL3VwZ3JhZGVHdWlkZS5tZCNDb21tb24tQ2hhbmdlcykuXG4gKlxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gZGF0ZSAtIHRoZSBnaXZlbiBkYXRlXG4gKiBAcGFyYW0ge09iamVjdH0gW29wdGlvbnNdIC0gYW4gb2JqZWN0IHdpdGggb3B0aW9ucy5cbiAqIEBwYXJhbSB7TG9jYWxlfSBbb3B0aW9ucy5sb2NhbGU9ZGVmYXVsdExvY2FsZV0gLSB0aGUgbG9jYWxlIG9iamVjdC4gU2VlIFtMb2NhbGVde0BsaW5rIGh0dHBzOi8vZGF0ZS1mbnMub3JnL2RvY3MvTG9jYWxlfVxuICogQHBhcmFtIHswfDF8MnwzfDR8NXw2fSBbb3B0aW9ucy53ZWVrU3RhcnRzT249MF0gLSB0aGUgaW5kZXggb2YgdGhlIGZpcnN0IGRheSBvZiB0aGUgd2VlayAoMCAtIFN1bmRheSlcbiAqIEBwYXJhbSB7MXwyfDN8NHw1fDZ8N30gW29wdGlvbnMuZmlyc3RXZWVrQ29udGFpbnNEYXRlPTFdIC0gdGhlIGRheSBvZiBKYW51YXJ5LCB3aGljaCBpcyBhbHdheXMgaW4gdGhlIGZpcnN0IHdlZWsgb2YgdGhlIHllYXJcbiAqIEByZXR1cm5zIHtOdW1iZXJ9IHRoZSBsb2NhbCB3ZWVrLW51bWJlcmluZyB5ZWFyXG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IDEgYXJndW1lbnQgcmVxdWlyZWRcbiAqIEB0aHJvd3Mge1JhbmdlRXJyb3J9IGBvcHRpb25zLndlZWtTdGFydHNPbmAgbXVzdCBiZSBiZXR3ZWVuIDAgYW5kIDZcbiAqIEB0aHJvd3Mge1JhbmdlRXJyb3J9IGBvcHRpb25zLmZpcnN0V2Vla0NvbnRhaW5zRGF0ZWAgbXVzdCBiZSBiZXR3ZWVuIDEgYW5kIDdcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gV2hpY2ggd2VlayBudW1iZXJpbmcgeWVhciBpcyAyNiBEZWNlbWJlciAyMDA0IHdpdGggdGhlIGRlZmF1bHQgc2V0dGluZ3M/XG4gKiBjb25zdCByZXN1bHQgPSBnZXRXZWVrWWVhcihuZXcgRGF0ZSgyMDA0LCAxMSwgMjYpKVxuICogLy89PiAyMDA1XG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIFdoaWNoIHdlZWsgbnVtYmVyaW5nIHllYXIgaXMgMjYgRGVjZW1iZXIgMjAwNCBpZiB3ZWVrIHN0YXJ0cyBvbiBTYXR1cmRheT9cbiAqIGNvbnN0IHJlc3VsdCA9IGdldFdlZWtZZWFyKG5ldyBEYXRlKDIwMDQsIDExLCAyNiksIHsgd2Vla1N0YXJ0c09uOiA2IH0pXG4gKiAvLz0+IDIwMDRcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gV2hpY2ggd2VlayBudW1iZXJpbmcgeWVhciBpcyAyNiBEZWNlbWJlciAyMDA0IGlmIHRoZSBmaXJzdCB3ZWVrIGNvbnRhaW5zIDQgSmFudWFyeT9cbiAqIGNvbnN0IHJlc3VsdCA9IGdldFdlZWtZZWFyKG5ldyBEYXRlKDIwMDQsIDExLCAyNiksIHsgZmlyc3RXZWVrQ29udGFpbnNEYXRlOiA0IH0pXG4gKiAvLz0+IDIwMDRcbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2V0V2Vla1llYXIoZGlydHlEYXRlLCBvcHRpb25zKSB7XG4gIHZhciBfb3B0aW9ucyRsb2NhbGUsIF9vcHRpb25zJGxvY2FsZSRvcHRpbztcblxuICByZXF1aXJlZEFyZ3MoMSwgYXJndW1lbnRzKTtcbiAgdmFyIGRhdGUgPSB0b0RhdGUoZGlydHlEYXRlKTtcbiAgdmFyIHllYXIgPSBkYXRlLmdldEZ1bGxZZWFyKCk7XG4gIHZhciBsb2NhbGVGaXJzdFdlZWtDb250YWluc0RhdGUgPSBvcHRpb25zID09PSBudWxsIHx8IG9wdGlvbnMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IChfb3B0aW9ucyRsb2NhbGUgPSBvcHRpb25zLmxvY2FsZSkgPT09IG51bGwgfHwgX29wdGlvbnMkbG9jYWxlID09PSB2b2lkIDAgPyB2b2lkIDAgOiAoX29wdGlvbnMkbG9jYWxlJG9wdGlvID0gX29wdGlvbnMkbG9jYWxlLm9wdGlvbnMpID09PSBudWxsIHx8IF9vcHRpb25zJGxvY2FsZSRvcHRpbyA9PT0gdm9pZCAwID8gdm9pZCAwIDogX29wdGlvbnMkbG9jYWxlJG9wdGlvLmZpcnN0V2Vla0NvbnRhaW5zRGF0ZTtcbiAgdmFyIGRlZmF1bHRGaXJzdFdlZWtDb250YWluc0RhdGUgPSBsb2NhbGVGaXJzdFdlZWtDb250YWluc0RhdGUgPT0gbnVsbCA/IDEgOiB0b0ludGVnZXIobG9jYWxlRmlyc3RXZWVrQ29udGFpbnNEYXRlKTtcbiAgdmFyIGZpcnN0V2Vla0NvbnRhaW5zRGF0ZSA9IChvcHRpb25zID09PSBudWxsIHx8IG9wdGlvbnMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IG9wdGlvbnMuZmlyc3RXZWVrQ29udGFpbnNEYXRlKSA9PSBudWxsID8gZGVmYXVsdEZpcnN0V2Vla0NvbnRhaW5zRGF0ZSA6IHRvSW50ZWdlcihvcHRpb25zLmZpcnN0V2Vla0NvbnRhaW5zRGF0ZSk7IC8vIFRlc3QgaWYgd2Vla1N0YXJ0c09uIGlzIGJldHdlZW4gMSBhbmQgNyBfYW5kXyBpcyBub3QgTmFOXG5cbiAgaWYgKCEoZmlyc3RXZWVrQ29udGFpbnNEYXRlID49IDEgJiYgZmlyc3RXZWVrQ29udGFpbnNEYXRlIDw9IDcpKSB7XG4gICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ2ZpcnN0V2Vla0NvbnRhaW5zRGF0ZSBtdXN0IGJlIGJldHdlZW4gMSBhbmQgNyBpbmNsdXNpdmVseScpO1xuICB9XG5cbiAgdmFyIGZpcnN0V2Vla09mTmV4dFllYXIgPSBuZXcgRGF0ZSgwKTtcbiAgZmlyc3RXZWVrT2ZOZXh0WWVhci5zZXRGdWxsWWVhcih5ZWFyICsgMSwgMCwgZmlyc3RXZWVrQ29udGFpbnNEYXRlKTtcbiAgZmlyc3RXZWVrT2ZOZXh0WWVhci5zZXRIb3VycygwLCAwLCAwLCAwKTtcbiAgdmFyIHN0YXJ0T2ZOZXh0WWVhciA9IHN0YXJ0T2ZXZWVrKGZpcnN0V2Vla09mTmV4dFllYXIsIG9wdGlvbnMpO1xuICB2YXIgZmlyc3RXZWVrT2ZUaGlzWWVhciA9IG5ldyBEYXRlKDApO1xuICBmaXJzdFdlZWtPZlRoaXNZZWFyLnNldEZ1bGxZZWFyKHllYXIsIDAsIGZpcnN0V2Vla0NvbnRhaW5zRGF0ZSk7XG4gIGZpcnN0V2Vla09mVGhpc1llYXIuc2V0SG91cnMoMCwgMCwgMCwgMCk7XG4gIHZhciBzdGFydE9mVGhpc1llYXIgPSBzdGFydE9mV2VlayhmaXJzdFdlZWtPZlRoaXNZZWFyLCBvcHRpb25zKTtcblxuICBpZiAoZGF0ZS5nZXRUaW1lKCkgPj0gc3RhcnRPZk5leHRZZWFyLmdldFRpbWUoKSkge1xuICAgIHJldHVybiB5ZWFyICsgMTtcbiAgfSBlbHNlIGlmIChkYXRlLmdldFRpbWUoKSA+PSBzdGFydE9mVGhpc1llYXIuZ2V0VGltZSgpKSB7XG4gICAgcmV0dXJuIHllYXI7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIHllYXIgLSAxO1xuICB9XG59IiwiaW1wb3J0IHRvRGF0ZSBmcm9tIFwiLi4vdG9EYXRlL2luZGV4LmpzXCI7XG5pbXBvcnQgdG9JbnRlZ2VyIGZyb20gXCIuLi9fbGliL3RvSW50ZWdlci9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbi8qKlxuICogQG5hbWUgc3RhcnRPZldlZWtcbiAqIEBjYXRlZ29yeSBXZWVrIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IFJldHVybiB0aGUgc3RhcnQgb2YgYSB3ZWVrIGZvciB0aGUgZ2l2ZW4gZGF0ZS5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIFJldHVybiB0aGUgc3RhcnQgb2YgYSB3ZWVrIGZvciB0aGUgZ2l2ZW4gZGF0ZS5cbiAqIFRoZSByZXN1bHQgd2lsbCBiZSBpbiB0aGUgbG9jYWwgdGltZXpvbmUuXG4gKlxuICogIyMjIHYyLjAuMCBicmVha2luZyBjaGFuZ2VzOlxuICpcbiAqIC0gW0NoYW5nZXMgdGhhdCBhcmUgY29tbW9uIGZvciB0aGUgd2hvbGUgbGlicmFyeV0oaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL2RhdGUtZm5zL2Jsb2IvbWFzdGVyL2RvY3MvdXBncmFkZUd1aWRlLm1kI0NvbW1vbi1DaGFuZ2VzKS5cbiAqXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBkYXRlIC0gdGhlIG9yaWdpbmFsIGRhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBbb3B0aW9uc10gLSBhbiBvYmplY3Qgd2l0aCBvcHRpb25zLlxuICogQHBhcmFtIHtMb2NhbGV9IFtvcHRpb25zLmxvY2FsZT1kZWZhdWx0TG9jYWxlXSAtIHRoZSBsb2NhbGUgb2JqZWN0LiBTZWUgW0xvY2FsZV17QGxpbmsgaHR0cHM6Ly9kYXRlLWZucy5vcmcvZG9jcy9Mb2NhbGV9XG4gKiBAcGFyYW0gezB8MXwyfDN8NHw1fDZ9IFtvcHRpb25zLndlZWtTdGFydHNPbj0wXSAtIHRoZSBpbmRleCBvZiB0aGUgZmlyc3QgZGF5IG9mIHRoZSB3ZWVrICgwIC0gU3VuZGF5KVxuICogQHJldHVybnMge0RhdGV9IHRoZSBzdGFydCBvZiBhIHdlZWtcbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gMSBhcmd1bWVudCByZXF1aXJlZFxuICogQHRocm93cyB7UmFuZ2VFcnJvcn0gYG9wdGlvbnMud2Vla1N0YXJ0c09uYCBtdXN0IGJlIGJldHdlZW4gMCBhbmQgNlxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBUaGUgc3RhcnQgb2YgYSB3ZWVrIGZvciAyIFNlcHRlbWJlciAyMDE0IDExOjU1OjAwOlxuICogY29uc3QgcmVzdWx0ID0gc3RhcnRPZldlZWsobmV3IERhdGUoMjAxNCwgOCwgMiwgMTEsIDU1LCAwKSlcbiAqIC8vPT4gU3VuIEF1ZyAzMSAyMDE0IDAwOjAwOjAwXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIElmIHRoZSB3ZWVrIHN0YXJ0cyBvbiBNb25kYXksIHRoZSBzdGFydCBvZiB0aGUgd2VlayBmb3IgMiBTZXB0ZW1iZXIgMjAxNCAxMTo1NTowMDpcbiAqIGNvbnN0IHJlc3VsdCA9IHN0YXJ0T2ZXZWVrKG5ldyBEYXRlKDIwMTQsIDgsIDIsIDExLCA1NSwgMCksIHsgd2Vla1N0YXJ0c09uOiAxIH0pXG4gKiAvLz0+IE1vbiBTZXAgMDEgMjAxNCAwMDowMDowMFxuICovXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHN0YXJ0T2ZXZWVrKGRpcnR5RGF0ZSwgZGlydHlPcHRpb25zKSB7XG4gIHJlcXVpcmVkQXJncygxLCBhcmd1bWVudHMpO1xuICB2YXIgb3B0aW9ucyA9IGRpcnR5T3B0aW9ucyB8fCB7fTtcbiAgdmFyIGxvY2FsZSA9IG9wdGlvbnMubG9jYWxlO1xuICB2YXIgbG9jYWxlV2Vla1N0YXJ0c09uID0gbG9jYWxlICYmIGxvY2FsZS5vcHRpb25zICYmIGxvY2FsZS5vcHRpb25zLndlZWtTdGFydHNPbjtcbiAgdmFyIGRlZmF1bHRXZWVrU3RhcnRzT24gPSBsb2NhbGVXZWVrU3RhcnRzT24gPT0gbnVsbCA/IDAgOiB0b0ludGVnZXIobG9jYWxlV2Vla1N0YXJ0c09uKTtcbiAgdmFyIHdlZWtTdGFydHNPbiA9IG9wdGlvbnMud2Vla1N0YXJ0c09uID09IG51bGwgPyBkZWZhdWx0V2Vla1N0YXJ0c09uIDogdG9JbnRlZ2VyKG9wdGlvbnMud2Vla1N0YXJ0c09uKTsgLy8gVGVzdCBpZiB3ZWVrU3RhcnRzT24gaXMgYmV0d2VlbiAwIGFuZCA2IF9hbmRfIGlzIG5vdCBOYU5cblxuICBpZiAoISh3ZWVrU3RhcnRzT24gPj0gMCAmJiB3ZWVrU3RhcnRzT24gPD0gNikpIHtcbiAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcignd2Vla1N0YXJ0c09uIG11c3QgYmUgYmV0d2VlbiAwIGFuZCA2IGluY2x1c2l2ZWx5Jyk7XG4gIH1cblxuICB2YXIgZGF0ZSA9IHRvRGF0ZShkaXJ0eURhdGUpO1xuICB2YXIgZGF5ID0gZGF0ZS5nZXREYXkoKTtcbiAgdmFyIGRpZmYgPSAoZGF5IDwgd2Vla1N0YXJ0c09uID8gNyA6IDApICsgZGF5IC0gd2Vla1N0YXJ0c09uO1xuICBkYXRlLnNldERhdGUoZGF0ZS5nZXREYXRlKCkgLSBkaWZmKTtcbiAgZGF0ZS5zZXRIb3VycygwLCAwLCAwLCAwKTtcbiAgcmV0dXJuIGRhdGU7XG59IiwiaW1wb3J0IGdldFdlZWtZZWFyIGZyb20gXCIuLi9nZXRXZWVrWWVhci9pbmRleC5qc1wiO1xuaW1wb3J0IHN0YXJ0T2ZXZWVrIGZyb20gXCIuLi9zdGFydE9mV2Vlay9pbmRleC5qc1wiO1xuaW1wb3J0IHRvSW50ZWdlciBmcm9tIFwiLi4vX2xpYi90b0ludGVnZXIvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG5cbi8qKlxuICogQG5hbWUgc3RhcnRPZldlZWtZZWFyXG4gKiBAY2F0ZWdvcnkgV2Vlay1OdW1iZXJpbmcgWWVhciBIZWxwZXJzXG4gKiBAc3VtbWFyeSBSZXR1cm4gdGhlIHN0YXJ0IG9mIGEgbG9jYWwgd2Vlay1udW1iZXJpbmcgeWVhciBmb3IgdGhlIGdpdmVuIGRhdGUuXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBSZXR1cm4gdGhlIHN0YXJ0IG9mIGEgbG9jYWwgd2Vlay1udW1iZXJpbmcgeWVhci5cbiAqIFRoZSBleGFjdCBjYWxjdWxhdGlvbiBkZXBlbmRzIG9uIHRoZSB2YWx1ZXMgb2ZcbiAqIGBvcHRpb25zLndlZWtTdGFydHNPbmAgKHdoaWNoIGlzIHRoZSBpbmRleCBvZiB0aGUgZmlyc3QgZGF5IG9mIHRoZSB3ZWVrKVxuICogYW5kIGBvcHRpb25zLmZpcnN0V2Vla0NvbnRhaW5zRGF0ZWAgKHdoaWNoIGlzIHRoZSBkYXkgb2YgSmFudWFyeSwgd2hpY2ggaXMgYWx3YXlzIGluXG4gKiB0aGUgZmlyc3Qgd2VlayBvZiB0aGUgd2Vlay1udW1iZXJpbmcgeWVhcilcbiAqXG4gKiBXZWVrIG51bWJlcmluZzogaHR0cHM6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvV2VlayNXZWVrX251bWJlcmluZ1xuICpcbiAqICMjIyB2Mi4wLjAgYnJlYWtpbmcgY2hhbmdlczpcbiAqXG4gKiAtIFtDaGFuZ2VzIHRoYXQgYXJlIGNvbW1vbiBmb3IgdGhlIHdob2xlIGxpYnJhcnldKGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy9kYXRlLWZucy9ibG9iL21hc3Rlci9kb2NzL3VwZ3JhZGVHdWlkZS5tZCNDb21tb24tQ2hhbmdlcykuXG4gKlxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gZGF0ZSAtIHRoZSBvcmlnaW5hbCBkYXRlXG4gKiBAcGFyYW0ge09iamVjdH0gW29wdGlvbnNdIC0gYW4gb2JqZWN0IHdpdGggb3B0aW9ucy5cbiAqIEBwYXJhbSB7TG9jYWxlfSBbb3B0aW9ucy5sb2NhbGU9ZGVmYXVsdExvY2FsZV0gLSB0aGUgbG9jYWxlIG9iamVjdC4gU2VlIFtMb2NhbGVde0BsaW5rIGh0dHBzOi8vZGF0ZS1mbnMub3JnL2RvY3MvTG9jYWxlfVxuICogQHBhcmFtIHswfDF8MnwzfDR8NXw2fSBbb3B0aW9ucy53ZWVrU3RhcnRzT249MF0gLSB0aGUgaW5kZXggb2YgdGhlIGZpcnN0IGRheSBvZiB0aGUgd2VlayAoMCAtIFN1bmRheSlcbiAqIEBwYXJhbSB7MXwyfDN8NHw1fDZ8N30gW29wdGlvbnMuZmlyc3RXZWVrQ29udGFpbnNEYXRlPTFdIC0gdGhlIGRheSBvZiBKYW51YXJ5LCB3aGljaCBpcyBhbHdheXMgaW4gdGhlIGZpcnN0IHdlZWsgb2YgdGhlIHllYXJcbiAqIEByZXR1cm5zIHtEYXRlfSB0aGUgc3RhcnQgb2YgYSB3ZWVrLW51bWJlcmluZyB5ZWFyXG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IDEgYXJndW1lbnQgcmVxdWlyZWRcbiAqIEB0aHJvd3Mge1JhbmdlRXJyb3J9IGBvcHRpb25zLndlZWtTdGFydHNPbmAgbXVzdCBiZSBiZXR3ZWVuIDAgYW5kIDZcbiAqIEB0aHJvd3Mge1JhbmdlRXJyb3J9IGBvcHRpb25zLmZpcnN0V2Vla0NvbnRhaW5zRGF0ZWAgbXVzdCBiZSBiZXR3ZWVuIDEgYW5kIDdcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gVGhlIHN0YXJ0IG9mIGFuIGEgd2Vlay1udW1iZXJpbmcgeWVhciBmb3IgMiBKdWx5IDIwMDUgd2l0aCBkZWZhdWx0IHNldHRpbmdzOlxuICogY29uc3QgcmVzdWx0ID0gc3RhcnRPZldlZWtZZWFyKG5ldyBEYXRlKDIwMDUsIDYsIDIpKVxuICogLy89PiBTdW4gRGVjIDI2IDIwMDQgMDA6MDA6MDBcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gVGhlIHN0YXJ0IG9mIGEgd2Vlay1udW1iZXJpbmcgeWVhciBmb3IgMiBKdWx5IDIwMDVcbiAqIC8vIGlmIE1vbmRheSBpcyB0aGUgZmlyc3QgZGF5IG9mIHdlZWtcbiAqIC8vIGFuZCA0IEphbnVhcnkgaXMgYWx3YXlzIGluIHRoZSBmaXJzdCB3ZWVrIG9mIHRoZSB5ZWFyOlxuICogY29uc3QgcmVzdWx0ID0gc3RhcnRPZldlZWtZZWFyKG5ldyBEYXRlKDIwMDUsIDYsIDIpLCB7XG4gKiAgIHdlZWtTdGFydHNPbjogMSxcbiAqICAgZmlyc3RXZWVrQ29udGFpbnNEYXRlOiA0XG4gKiB9KVxuICogLy89PiBNb24gSmFuIDAzIDIwMDUgMDA6MDA6MDBcbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gc3RhcnRPZldlZWtZZWFyKGRpcnR5RGF0ZSwgZGlydHlPcHRpb25zKSB7XG4gIHJlcXVpcmVkQXJncygxLCBhcmd1bWVudHMpO1xuICB2YXIgb3B0aW9ucyA9IGRpcnR5T3B0aW9ucyB8fCB7fTtcbiAgdmFyIGxvY2FsZSA9IG9wdGlvbnMubG9jYWxlO1xuICB2YXIgbG9jYWxlRmlyc3RXZWVrQ29udGFpbnNEYXRlID0gbG9jYWxlICYmIGxvY2FsZS5vcHRpb25zICYmIGxvY2FsZS5vcHRpb25zLmZpcnN0V2Vla0NvbnRhaW5zRGF0ZTtcbiAgdmFyIGRlZmF1bHRGaXJzdFdlZWtDb250YWluc0RhdGUgPSBsb2NhbGVGaXJzdFdlZWtDb250YWluc0RhdGUgPT0gbnVsbCA/IDEgOiB0b0ludGVnZXIobG9jYWxlRmlyc3RXZWVrQ29udGFpbnNEYXRlKTtcbiAgdmFyIGZpcnN0V2Vla0NvbnRhaW5zRGF0ZSA9IG9wdGlvbnMuZmlyc3RXZWVrQ29udGFpbnNEYXRlID09IG51bGwgPyBkZWZhdWx0Rmlyc3RXZWVrQ29udGFpbnNEYXRlIDogdG9JbnRlZ2VyKG9wdGlvbnMuZmlyc3RXZWVrQ29udGFpbnNEYXRlKTtcbiAgdmFyIHllYXIgPSBnZXRXZWVrWWVhcihkaXJ0eURhdGUsIGRpcnR5T3B0aW9ucyk7XG4gIHZhciBmaXJzdFdlZWsgPSBuZXcgRGF0ZSgwKTtcbiAgZmlyc3RXZWVrLnNldEZ1bGxZZWFyKHllYXIsIDAsIGZpcnN0V2Vla0NvbnRhaW5zRGF0ZSk7XG4gIGZpcnN0V2Vlay5zZXRIb3VycygwLCAwLCAwLCAwKTtcbiAgdmFyIGRhdGUgPSBzdGFydE9mV2VlayhmaXJzdFdlZWssIGRpcnR5T3B0aW9ucyk7XG4gIHJldHVybiBkYXRlO1xufSIsImltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG4vKipcbiAqIEBuYW1lIHRvRGF0ZVxuICogQGNhdGVnb3J5IENvbW1vbiBIZWxwZXJzXG4gKiBAc3VtbWFyeSBDb252ZXJ0IHRoZSBnaXZlbiBhcmd1bWVudCB0byBhbiBpbnN0YW5jZSBvZiBEYXRlLlxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogQ29udmVydCB0aGUgZ2l2ZW4gYXJndW1lbnQgdG8gYW4gaW5zdGFuY2Ugb2YgRGF0ZS5cbiAqXG4gKiBJZiB0aGUgYXJndW1lbnQgaXMgYW4gaW5zdGFuY2Ugb2YgRGF0ZSwgdGhlIGZ1bmN0aW9uIHJldHVybnMgaXRzIGNsb25lLlxuICpcbiAqIElmIHRoZSBhcmd1bWVudCBpcyBhIG51bWJlciwgaXQgaXMgdHJlYXRlZCBhcyBhIHRpbWVzdGFtcC5cbiAqXG4gKiBJZiB0aGUgYXJndW1lbnQgaXMgbm9uZSBvZiB0aGUgYWJvdmUsIHRoZSBmdW5jdGlvbiByZXR1cm5zIEludmFsaWQgRGF0ZS5cbiAqXG4gKiAqKk5vdGUqKjogKmFsbCogRGF0ZSBhcmd1bWVudHMgcGFzc2VkIHRvIGFueSAqZGF0ZS1mbnMqIGZ1bmN0aW9uIGlzIHByb2Nlc3NlZCBieSBgdG9EYXRlYC5cbiAqXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBhcmd1bWVudCAtIHRoZSB2YWx1ZSB0byBjb252ZXJ0XG4gKiBAcmV0dXJucyB7RGF0ZX0gdGhlIHBhcnNlZCBkYXRlIGluIHRoZSBsb2NhbCB0aW1lIHpvbmVcbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gMSBhcmd1bWVudCByZXF1aXJlZFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBDbG9uZSB0aGUgZGF0ZTpcbiAqIGNvbnN0IHJlc3VsdCA9IHRvRGF0ZShuZXcgRGF0ZSgyMDE0LCAxLCAxMSwgMTEsIDMwLCAzMCkpXG4gKiAvLz0+IFR1ZSBGZWIgMTEgMjAxNCAxMTozMDozMFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBDb252ZXJ0IHRoZSB0aW1lc3RhbXAgdG8gZGF0ZTpcbiAqIGNvbnN0IHJlc3VsdCA9IHRvRGF0ZSgxMzkyMDk4NDMwMDAwKVxuICogLy89PiBUdWUgRmViIDExIDIwMTQgMTE6MzA6MzBcbiAqL1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB0b0RhdGUoYXJndW1lbnQpIHtcbiAgcmVxdWlyZWRBcmdzKDEsIGFyZ3VtZW50cyk7XG4gIHZhciBhcmdTdHIgPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoYXJndW1lbnQpOyAvLyBDbG9uZSB0aGUgZGF0ZVxuXG4gIGlmIChhcmd1bWVudCBpbnN0YW5jZW9mIERhdGUgfHwgdHlwZW9mIGFyZ3VtZW50ID09PSAnb2JqZWN0JyAmJiBhcmdTdHIgPT09ICdbb2JqZWN0IERhdGVdJykge1xuICAgIC8vIFByZXZlbnQgdGhlIGRhdGUgdG8gbG9zZSB0aGUgbWlsbGlzZWNvbmRzIHdoZW4gcGFzc2VkIHRvIG5ldyBEYXRlKCkgaW4gSUUxMFxuICAgIHJldHVybiBuZXcgRGF0ZShhcmd1bWVudC5nZXRUaW1lKCkpO1xuICB9IGVsc2UgaWYgKHR5cGVvZiBhcmd1bWVudCA9PT0gJ251bWJlcicgfHwgYXJnU3RyID09PSAnW29iamVjdCBOdW1iZXJdJykge1xuICAgIHJldHVybiBuZXcgRGF0ZShhcmd1bWVudCk7XG4gIH0gZWxzZSB7XG4gICAgaWYgKCh0eXBlb2YgYXJndW1lbnQgPT09ICdzdHJpbmcnIHx8IGFyZ1N0ciA9PT0gJ1tvYmplY3QgU3RyaW5nXScpICYmIHR5cGVvZiBjb25zb2xlICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnNvbGVcbiAgICAgIGNvbnNvbGUud2FybihcIlN0YXJ0aW5nIHdpdGggdjIuMC4wLWJldGEuMSBkYXRlLWZucyBkb2Vzbid0IGFjY2VwdCBzdHJpbmdzIGFzIGRhdGUgYXJndW1lbnRzLiBQbGVhc2UgdXNlIGBwYXJzZUlTT2AgdG8gcGFyc2Ugc3RyaW5ncy4gU2VlOiBodHRwczovL2dpdC5pby9manVsZVwiKTsgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnNvbGVcblxuICAgICAgY29uc29sZS53YXJuKG5ldyBFcnJvcigpLnN0YWNrKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbmV3IERhdGUoTmFOKTtcbiAgfVxufSIsImltcG9ydCBUeXBvZ3JhcGh5IGZyb20gJ0BtdWkvbWF0ZXJpYWwvVHlwb2dyYXBoeSdcbmltcG9ydCBSZWFjdCwgeyBGQywgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IENsYXNzRGF0YUJsb2NrIH0gZnJvbSAndHlwaW5ncy90aW1lbGluZURhdGEnXG5pbXBvcnQgRXhwYW5kTW9yZUljb24gZnJvbSAnQG11aS9pY29ucy1tYXRlcmlhbC9FeHBhbmRNb3JlJ1xuaW1wb3J0IFN0YWNrIGZyb20gJ0BtdWkvbWF0ZXJpYWwvU3RhY2snXG5pbXBvcnQgeyBIb21ld29yayB9IGZyb20gJ2NvbXBvbmVudHMvSG9tZXdvcmsnXG5pbXBvcnQgeyBEaXNhYmxlZEJveCB9IGZyb20gJ3N0eWxlcy9ib3hlcydcbmltcG9ydCBDYXJkSGVhZGVyIGZyb20gJ0BtdWkvbWF0ZXJpYWwvQ2FyZEhlYWRlcidcbmltcG9ydCBDYXJkQ29udGVudCBmcm9tICdAbXVpL21hdGVyaWFsL0NhcmRDb250ZW50J1xuaW1wb3J0IENvbGxhcHNlIGZyb20gJ0BtdWkvbWF0ZXJpYWwvQ29sbGFwc2UnXG5pbXBvcnQgQ2FyZEFjdGlvbnMgZnJvbSAnQG11aS9tYXRlcmlhbC9DYXJkQWN0aW9ucydcbmltcG9ydCBJY29uQnV0dG9uLCB7IEljb25CdXR0b25Qcm9wcyB9IGZyb20gJ0BtdWkvbWF0ZXJpYWwvSWNvbkJ1dHRvbidcbmltcG9ydCBzdHlsZWQgZnJvbSAnQGVtb3Rpb24vc3R5bGVkJ1xuaW1wb3J0IHsgc3R5bGVkIGFzIG11aVN0eWxlZCB9IGZyb20gJ0BtdWkvbWF0ZXJpYWwvc3R5bGVzJ1xuaW1wb3J0IHsgU3R5bGVkQ2FyZCB9IGZyb20gJ3N0eWxlcy9jYXJkJ1xuXG5leHBvcnQgY29uc3QgQ2xhc3M6IEZDPENsYXNzRGF0YUJsb2NrPiA9ICh7XG5cdGNsYXNzTmFtZSxcblx0cm9vbUlkZW50aWZpZXIsXG5cdGhvbWV3b3JrLFxufSkgPT4ge1xuXHRjb25zdCBbZXhwYW5kZWQsIHNldEV4cGFuZGVkXSA9IHVzZVN0YXRlKGZhbHNlKVxuXG5cdHJldHVybiAoXG5cdFx0PGRpdj5cblx0XHRcdDxTdHlsZWRDYXJkPlxuXHRcdFx0XHQ8Q2FyZEhlYWRlclxuXHRcdFx0XHRcdC8vIHDDpSAndmFyaWFudCcgaGVyIGxpa2VyIGplZyBvZ3PDpSAnb3ZlcmxpbmUnLCBtZW4gZGEgbcOlIGZvbnRXZWlnaHRlbiBibGkgc3TDuHJyZVxuXHRcdFx0XHRcdHRpdGxlVHlwb2dyYXBoeVByb3BzPXt7IHZhcmlhbnQ6ICdzdWJ0aXRsZTEnLCBmb250V2VpZ2h0OiAnYm9sZCcgfX1cblx0XHRcdFx0XHR0aXRsZT17Y2xhc3NOYW1lfVxuXHRcdFx0XHRcdHN1YmhlYWRlcj17cm9vbUlkZW50aWZpZXJ9XG5cdFx0XHRcdC8+XG5cblx0XHRcdFx0e2hvbWV3b3JrLmxlbmd0aCA/IChcblx0XHRcdFx0XHQ8PlxuXHRcdFx0XHRcdFx0PEJsb2NrPlxuXHRcdFx0XHRcdFx0XHQ8U3R5bGVkQ2FyZENvbnRlbnQ+XG5cdFx0XHRcdFx0XHRcdFx0PFR5cG9ncmFwaHk+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8RGlzYWJsZWRCb3ggY29tcG9uZW50PSdzcGFuJz5cblx0XHRcdFx0XHRcdFx0XHRcdFx0e2hvbWV3b3JrLmxlbmd0aH0gZ2rDuHJlbcOlbC5cblx0XHRcdFx0XHRcdFx0XHRcdDwvRGlzYWJsZWRCb3g+XG5cdFx0XHRcdFx0XHRcdFx0PC9UeXBvZ3JhcGh5PlxuXHRcdFx0XHRcdFx0XHQ8L1N0eWxlZENhcmRDb250ZW50PlxuXHRcdFx0XHRcdFx0XHQ8U3R5bGVkQ2FyZEFjdGlvbnM+XG5cdFx0XHRcdFx0XHRcdFx0PEV4cGFuZE1vcmVcblx0XHRcdFx0XHRcdFx0XHRcdGV4cGFuZD17ZXhwYW5kZWR9XG5cdFx0XHRcdFx0XHRcdFx0XHRvbkNsaWNrPXsoKSA9PiBzZXRFeHBhbmRlZCghZXhwYW5kZWQpfT5cblx0XHRcdFx0XHRcdFx0XHRcdDxFeHBhbmRNb3JlSWNvbiAvPlxuXHRcdFx0XHRcdFx0XHRcdDwvRXhwYW5kTW9yZT5cblx0XHRcdFx0XHRcdFx0PC9TdHlsZWRDYXJkQWN0aW9ucz5cblx0XHRcdFx0XHRcdDwvQmxvY2s+XG5cdFx0XHRcdFx0XHQ8Q29sbGFwc2UgaW49e2V4cGFuZGVkfT5cblx0XHRcdFx0XHRcdFx0PENhcmRDb250ZW50PlxuXHRcdFx0XHRcdFx0XHRcdDxTdGFjayBzcGFjaW5nPXsyfT5cblx0XHRcdFx0XHRcdFx0XHRcdHtob21ld29yay5tYXAoKGlkLCBpbmRleCkgPT4gKFxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8SG9tZXdvcmsga2V5PXtpbmRleH0gaWQ9e2lkfSAvPlxuXHRcdFx0XHRcdFx0XHRcdFx0KSl9XG5cdFx0XHRcdFx0XHRcdFx0PC9TdGFjaz5cblx0XHRcdFx0XHRcdFx0PC9DYXJkQ29udGVudD5cblx0XHRcdFx0XHRcdDwvQ29sbGFwc2U+XG5cdFx0XHRcdFx0PC8+XG5cdFx0XHRcdCkgOiAoXG5cdFx0XHRcdFx0PENhcmRDb250ZW50PlxuXHRcdFx0XHRcdFx0PFR5cG9ncmFwaHk+XG5cdFx0XHRcdFx0XHRcdDxEaXNhYmxlZEJveCBjb21wb25lbnQ9J3NwYW4nPkluZ2VuIGdqw7hyZW3DpWwuPC9EaXNhYmxlZEJveD5cblx0XHRcdFx0XHRcdDwvVHlwb2dyYXBoeT5cblx0XHRcdFx0XHQ8L0NhcmRDb250ZW50PlxuXHRcdFx0XHQpfVxuXHRcdFx0PC9TdHlsZWRDYXJkPlxuXHRcdDwvZGl2PlxuXHQpXG59XG5cbmludGVyZmFjZSBFeHBhbmRNb3JlUHJvcHMgZXh0ZW5kcyBJY29uQnV0dG9uUHJvcHMge1xuXHRleHBhbmQ6IGJvb2xlYW5cbn1cblxuY29uc3QgRXhwYW5kTW9yZSA9IG11aVN0eWxlZCgocHJvcHM6IEV4cGFuZE1vcmVQcm9wcykgPT4ge1xuXHRjb25zdCB7IGV4cGFuZCwgLi4ub3RoZXIgfSA9IHByb3BzXG5cdHJldHVybiA8SWNvbkJ1dHRvbiB7Li4ub3RoZXJ9IC8+XG59KSgoeyB0aGVtZSwgZXhwYW5kIH0pID0+ICh7XG5cdHRyYW5zZm9ybTogIWV4cGFuZCA/ICdyb3RhdGUoMGRlZyknIDogJ3JvdGF0ZSgxODBkZWcpJyxcblx0bWFyZ2luTGVmdDogJ2F1dG8nLFxuXHR0cmFuc2l0aW9uOiB0aGVtZS50cmFuc2l0aW9ucy5jcmVhdGUoJ3RyYW5zZm9ybScsIHtcblx0XHRkdXJhdGlvbjogdGhlbWUudHJhbnNpdGlvbnMuZHVyYXRpb24uc2hvcnRlc3QsXG5cdH0pLFxufSkpXG5cbmNvbnN0IEJsb2NrID0gc3R5bGVkLmRpdmBcblx0ZGlzcGxheTogaW5saW5lLWJsb2NrO1xuXHR3aWR0aDogMTAwJTtcbmBcblxuY29uc3QgU3R5bGVkQ2FyZEFjdGlvbnMgPSBzdHlsZWQoQ2FyZEFjdGlvbnMpYFxuXHRmbG9hdDogcmlnaHQ7XG5gXG5cbmNvbnN0IFN0eWxlZENhcmRDb250ZW50ID0gc3R5bGVkKENhcmRDb250ZW50KWBcblx0ZmxvYXQ6IGxlZnQ7XG5gXG4iLCJpbXBvcnQgc3R5bGVkIGZyb20gJ0BlbW90aW9uL3N0eWxlZCdcbmltcG9ydCBCb3ggZnJvbSAnQG11aS9tYXRlcmlhbC9Cb3gnXG5pbXBvcnQgQ2FyZENvbnRlbnQgZnJvbSAnQG11aS9tYXRlcmlhbC9DYXJkQ29udGVudCdcbmltcG9ydCBUeXBvZ3JhcGh5IGZyb20gJ0BtdWkvbWF0ZXJpYWwvVHlwb2dyYXBoeSdcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7IFN0eWxlZENhcmQgfSBmcm9tICdzdHlsZXMvY2FyZCdcblxuZXhwb3J0IGNvbnN0IFN0dWR5ID0gKCkgPT4ge1xuXHRyZXR1cm4gKFxuXHRcdDxTdHVkeUNhcmQ+XG5cdFx0XHQ8Q2FyZENvbnRlbnQ+XG5cdFx0XHRcdDxUeXBvZ3JhcGh5PlxuXHRcdFx0XHRcdDxCb3ggY29tcG9uZW50PSdzcGFuJyBmb250V2VpZ2h0PSdib2xkJz5cblx0XHRcdFx0XHRcdFN0dWRpZXRpZFxuXHRcdFx0XHRcdDwvQm94PlxuXHRcdFx0XHQ8L1R5cG9ncmFwaHk+XG5cdFx0XHQ8L0NhcmRDb250ZW50PlxuXHRcdDwvU3R1ZHlDYXJkPlxuXHQpXG59XG5cbmNvbnN0IFN0dWR5Q2FyZCA9IHN0eWxlZChTdHlsZWRDYXJkKWBcblx0b3BhY2l0eTogMDtcblxuXHR0cmFuc2l0aW9uOiAwLjVzO1xuXHR0cmFuc2l0aW9uLWRlbGF5OiAwLjc1cztcblxuXHQmOmhvdmVyIHtcblx0XHR0cmFuc2l0aW9uLWRlbGF5OiAwcztcblxuXHRcdG9wYWNpdHk6IDE7XG5cdH1cblxuXHRjb2xvcjogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5wYWxldHRlLnRleHQuZGlzYWJsZWR9O1xuYFxuIiwiaW1wb3J0IENoZWNrQm94IGZyb20gJ0BtdWkvbWF0ZXJpYWwvQ2hlY2tib3gnXG5pbXBvcnQgQ2FyZCBmcm9tICdAbXVpL21hdGVyaWFsL0NhcmQnXG5pbXBvcnQgQ2FyZENvbnRlbnQgZnJvbSAnQG11aS9tYXRlcmlhbC9DYXJkQ29udGVudCdcbmltcG9ydCBUeXBvZ3JhcGh5IGZyb20gJ0BtdWkvbWF0ZXJpYWwvVHlwb2dyYXBoeSdcbmltcG9ydCBSZWFjdCwgeyBGQyB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgSG9tZXdvcmtCbG9jayB9IGZyb20gJ3R5cGluZ3MvYXNzaWdubWVudERhdGEnXG5pbXBvcnQgU3RhY2sgZnJvbSAnQG11aS9tYXRlcmlhbC9TdGFjaydcbmltcG9ydCBCb3ggZnJvbSAnQG11aS9tYXRlcmlhbC9Cb3gnXG5pbXBvcnQgc3R5bGVkIGZyb20gJ0BlbW90aW9uL3N0eWxlZCdcbmltcG9ydCB7IHVzZVVzZXIgfSBmcm9tICdjb250ZXh0L3VzZXInXG5pbXBvcnQgeyBUaGVtZSB9IGZyb20gJ0BlbW90aW9uL3JlYWN0J1xuaW1wb3J0IHsgdXNlQXNzaWdubWVudERhdGEgfSBmcm9tICdjb250ZXh0L2RhdGEnXG5cbmV4cG9ydCBjb25zdCBIb21ld29ya0J5VmFsdWU6IEZDPEhvbWV3b3JrQmxvY2sgJiB7IGlkOiBzdHJpbmcgfT4gPSAoe1xuXHRpZCxcblx0ZG9uZTogX2RvbmUsXG5cdC4uLnByb3BzXG59KSA9PiB7XG5cdGNvbnN0IFt1c2VyLCBzZXRVc2VyXSA9IHVzZVVzZXIoKVxuXG5cdGNvbnN0IGRvbmUgPSAodXNlci50eXBlICYmIHVzZXIuYXNzaWdubWVudERhdGFbaWRdKSA/PyBmYWxzZVxuXG5cdHJldHVybiAoXG5cdFx0PENhcmQ+XG5cdFx0XHQ8Q2FyZENvbnRlbnQ+XG5cdFx0XHRcdDxTdGFjayBkaXJlY3Rpb249J3JvdycganVzdGlmeUNvbnRlbnQ9J3NwYWNlLWJldHdlZW4nPlxuXHRcdFx0XHRcdDxUeXBvZ3JhcGh5PlxuXHRcdFx0XHRcdFx0PEJveCBmb250V2VpZ2h0PSdib2xkJyBjb21wb25lbnQ9J3NwYW4nPlxuXHRcdFx0XHRcdFx0XHR7cHJvcHMubmFtZX1cblx0XHRcdFx0XHRcdDwvQm94PlxuXHRcdFx0XHRcdFx0PGJyIC8+XG5cdFx0XHRcdFx0XHQ8Qm94IGNvbXBvbmVudD0nc3Bhbic+e3Byb3BzLm1lc3NhZ2V9PC9Cb3g+XG5cdFx0XHRcdFx0PC9UeXBvZ3JhcGh5PlxuXHRcdFx0XHRcdDxkaXY+XG5cdFx0XHRcdFx0XHQ8U3R5bGVkQ2hlY2tCb3hcblx0XHRcdFx0XHRcdFx0Y2hlY2tlZD17ZG9uZX1cblx0XHRcdFx0XHRcdFx0b25DaGFuZ2U9eygpID0+XG5cdFx0XHRcdFx0XHRcdFx0dXNlci50eXBlICYmXG5cdFx0XHRcdFx0XHRcdFx0c2V0VXNlcih7XG5cdFx0XHRcdFx0XHRcdFx0XHQuLi51c2VyLFxuXHRcdFx0XHRcdFx0XHRcdFx0YXNzaWdubWVudERhdGE6IHsgLi4udXNlci5hc3NpZ25tZW50RGF0YSwgW2lkXTogIWRvbmUgfSxcblx0XHRcdFx0XHRcdFx0XHR9KVxuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQ8L1N0YWNrPlxuXHRcdFx0PC9DYXJkQ29udGVudD5cblx0XHQ8L0NhcmQ+XG5cdClcbn1cblxuZXhwb3J0IGNvbnN0IEhvbWV3b3JrOiBGQzx7IGlkOiBzdHJpbmcgfT4gPSAoeyBpZCB9KSA9PiB7XG5cdGNvbnN0IFtkYXRhXSA9IHVzZUFzc2lnbm1lbnREYXRhKClcblxuXHRjb25zdCB2YWx1ZSA9IGRhdGFbaWRdXG5cblx0Y29uc29sZS5sb2coaWQsIGRhdGEsIHZhbHVlKVxuXG5cdHJldHVybiB2YWx1ZSAmJiB2YWx1ZS50eXBlID09PSAnaG9tZXdvcmsnID8gKFxuXHRcdDxIb21ld29ya0J5VmFsdWUgaWQ9e2lkfSB7Li4udmFsdWV9IC8+XG5cdCkgOiAoXG5cdFx0PD48Lz5cblx0KVxufVxuXG5jb25zdCB1c2VDaGVja2JveENvbG9yID0gKHRoZW1lOiBUaGVtZSk6IGFueSA9PiB7XG5cdGNvbnN0IFt1c2VyXSA9IHVzZVVzZXIoKVxuXHRpZiAodXNlci50eXBlICE9PSBudWxsICYmIHVzZXIudGhlbWUgPT09ICdkYXJrJykge1xuXHRcdHJldHVybiB0aGVtZS5wYWxldHRlLnRleHQucHJpbWFyeVxuXHR9IGVsc2Uge1xuXHRcdHJldHVybiB0aGVtZS5wYWxldHRlLnByaW1hcnlcblx0fVxufVxuXG5jb25zdCBTdHlsZWRDaGVja0JveCA9IHN0eWxlZChDaGVja0JveClgXG5cdCYuTXVpLWNoZWNrZWQge1xuXHRcdGNvbG9yOiAkeyh7IHRoZW1lIH0pID0+IHVzZUNoZWNrYm94Q29sb3IodGhlbWUpfTtcblx0fVxuYFxuIiwiaW1wb3J0IHtcblx0Y3JlYXRlQ29udGV4dCxcblx0RkMsXG5cdHVzZUNvbnRleHQsXG5cdERpc3BhdGNoLFxuXHRTZXRTdGF0ZUFjdGlvbixcblx0dXNlU3RhdGUsXG5cdHVzZUVmZmVjdCxcbn0gZnJvbSAncmVhY3QnXG5cbmltcG9ydCBnZXRXZWVrIGZyb20gJ2RhdGUtZm5zL2dldFdlZWsnXG5cbmV4cG9ydCBjb25zdCBjdXJyZW50V2Vla0NvbnRleHQgPSBjcmVhdGVDb250ZXh0PFxuXHRbbnVtYmVyLCBEaXNwYXRjaDxTZXRTdGF0ZUFjdGlvbjxudW1iZXI+Pl1cbj4oWzQwLCAoKSA9PiB1bmRlZmluZWRdKVxuXG5leHBvcnQgY29uc3QgdXNlQ3VycmVudFdlZWsgPSAoKSA9PiB1c2VDb250ZXh0KGN1cnJlbnRXZWVrQ29udGV4dClcblxuZXhwb3J0IGNvbnN0IEN1cnJlbnRXZWVrUHJvdmlkZXI6IEZDID0gKHsgY2hpbGRyZW4gfSkgPT4ge1xuXHRyZXR1cm4gKFxuXHRcdDxjdXJyZW50V2Vla0NvbnRleHQuUHJvdmlkZXIgdmFsdWU9e3VzZVN0YXRlKGdldFdlZWsobmV3IERhdGUoKSkpfT5cblx0XHRcdHtjaGlsZHJlbn1cblx0XHQ8L2N1cnJlbnRXZWVrQ29udGV4dC5Qcm92aWRlcj5cblx0KVxufVxuIiwiaW1wb3J0IHsgdXNlTWVkaWFRdWVyeSB9IGZyb20gJ0BtdWkvbWF0ZXJpYWwnXG5pbXBvcnQgUmVhY3QsIHsgY3JlYXRlQ29udGV4dCwgRkMsIHVzZUNvbnRleHQsIHVzZVJlZHVjZXIgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IHVzZU1hcCB9IGZyb20gJ3JlYWN0LXVzZSdcbmltcG9ydCB7IEFzc2lnbm1lbnREYXRhIH0gZnJvbSAndHlwaW5ncy9hc3NpZ25tZW50RGF0YSdcbmltcG9ydCB7IERhdGFCbG9jaywgV2Vla0Jsb2NrIH0gZnJvbSAndHlwaW5ncy90aW1lbGluZURhdGEnXG5pbXBvcnQgeyBBY3Rpb25zIGFzIEFzc2lnbm1lbnRBY3Rpb25zIH0gZnJvbSAncmVhY3QtdXNlL2xpYi91c2VNYXAnXG5pbXBvcnQgY2xvbmVEZWVwIGZyb20gJ2xvZGFzaC9jbG9uZURlZXAnXG5pbXBvcnQgeyBnZXRJbml0aWFsV2Vla0RhdGEgfSBmcm9tICd1dGlscy9nZXRJbml0aWFsV2Vla0RhdGEnXG5cbmNvbnN0IG1vY2tBc3NpZ25tZW50RGF0YTogQXNzaWdubWVudERhdGEgPSB7XG5cdCcxJzogeyB0eXBlOiAnaG9tZXdvcmsnLCBkb25lOiBmYWxzZSwgbmFtZTogJ0hlbGxvJywgbWVzc2FnZTogJ0hlbGxvJyB9LFxuXHQnMic6IHsgdHlwZTogJ2hvbWV3b3JrJywgZG9uZTogZmFsc2UsIG5hbWU6ICdIZWxsbycsIG1lc3NhZ2U6ICdIZWxsbycgfSxcblx0JzMnOiB7IHR5cGU6ICdob21ld29yaycsIGRvbmU6IGZhbHNlLCBuYW1lOiAnSGVsbG8nLCBtZXNzYWdlOiAnSGVsbG8nIH0sXG5cdCc0JzogeyB0eXBlOiAnaG9tZXdvcmsnLCBkb25lOiBmYWxzZSwgbmFtZTogJ0hlbGxvJywgbWVzc2FnZTogJ0hlbGxvJyB9LFxuXHQnNSc6IHsgdHlwZTogJ2hvbWV3b3JrJywgZG9uZTogZmFsc2UsIG5hbWU6ICdIZWxsbycsIG1lc3NhZ2U6ICdIZWxsbycgfSxcblx0YToge1xuXHRcdHR5cGU6ICdhc3NpZ25tZW50Jyxcblx0XHRkb25lOiBmYWxzZSxcblxuXHRcdG5hbWU6ICdwb2RjYXN0Jyxcblx0XHRtZXNzYWdlOiAnanVzdCB0YWxrIGFib3V0IHNvbWV0aGluZycsXG5cblx0XHRncmFkaW5nTWV0aG9kOiAnY2F0ZWdvcmljYWwnLFxuXG5cdFx0ZHVlOiBuZXcgRGF0ZSgyMDIxLCA4LCAyOCwgMTcsIDApLFxuXHR9LFxuXHRiOiB7XG5cdFx0dHlwZTogJ2Fzc2lnbm1lbnQnLFxuXHRcdGRvbmU6IGZhbHNlLFxuXG5cdFx0bmFtZTogJ3RleHQnLFxuXHRcdG1lc3NhZ2U6ICd3cml0ZSBhbiBhcnRpY2xlJyxcblxuXHRcdGdyYWRpbmdNZXRob2Q6ICdudW1lcmljJyxcblxuXHRcdGR1ZTogbmV3IERhdGUoMjAyMSwgOCwgMzAsIDIzLCA1OSksXG5cdH0sXG5cdGM6IHtcblx0XHR0eXBlOiAnYXNzaWdubWVudCcsXG5cdFx0ZG9uZTogZmFsc2UsXG5cblx0XHRuYW1lOiAncHJlc2VudGF0aW9uJyxcblx0XHRtZXNzYWdlOiAnY2hvb3NlIGEgY291bnRyeScsXG5cblx0XHRncmFkaW5nTWV0aG9kOiAnbnVtZXJpYycsXG5cblx0XHRkdWU6IG5ldyBEYXRlKDIwMjEsIDgsIDM2LCAyMCwgMCksXG5cdH0sXG5cdGMyOiB7XG5cdFx0dHlwZTogJ2Fzc2lnbm1lbnQnLFxuXHRcdGRvbmU6IGZhbHNlLFxuXG5cdFx0bmFtZTogJ3ByZXNlbnRhdGlvbicsXG5cdFx0bWVzc2FnZTogJ2Nob29zZSBhIGNvdW50cnknLFxuXG5cdFx0Z3JhZGluZ01ldGhvZDogJ251bWVyaWMnLFxuXG5cdFx0ZHVlOiBuZXcgRGF0ZSgyMDIxLCA4LCAzNiwgMjAsIDApLFxuXHR9LFxuXHRjMzoge1xuXHRcdHR5cGU6ICdhc3NpZ25tZW50Jyxcblx0XHRkb25lOiBmYWxzZSxcblxuXHRcdG5hbWU6ICdwcmVzZW50YXRpb24nLFxuXHRcdG1lc3NhZ2U6ICdjaG9vc2UgYSBjb3VudHJ5JyxcblxuXHRcdGdyYWRpbmdNZXRob2Q6ICdudW1lcmljJyxcblxuXHRcdGR1ZTogbmV3IERhdGUoMjAyMSwgOCwgMzYsIDIwLCAwKSxcblx0fSxcblx0YzQ6IHtcblx0XHR0eXBlOiAnYXNzaWdubWVudCcsXG5cdFx0ZG9uZTogZmFsc2UsXG5cblx0XHRuYW1lOiAncHJlc2VudGF0aW9uJyxcblx0XHRtZXNzYWdlOiAnY2hvb3NlIGEgY291bnRyeScsXG5cblx0XHRncmFkaW5nTWV0aG9kOiAnbnVtZXJpYycsXG5cblx0XHRkdWU6IG5ldyBEYXRlKDIwMjEsIDgsIDM2LCAyMCwgMCksXG5cdH0sXG5cdGQ6IHtcblx0XHR0eXBlOiAnYXNzaWdubWVudCcsXG5cdFx0ZG9uZTogZmFsc2UsXG5cblx0XHRuYW1lOiAndGVzdCcsXG5cdFx0bWVzc2FnZTogJ2hhcmQgbWF0aCcsXG5cblx0XHRncmFkaW5nTWV0aG9kOiAnbnVtZXJpYycsXG5cblx0XHRkdWU6IG5ldyBEYXRlKDIwMjEsIDgsIDUyLCAxMywgNTApLFxuXHR9LFxufVxuXG5leHBvcnQgY29uc3QgYXNzaWdubWVudERhdGFDb250ZXh0ID0gY3JlYXRlQ29udGV4dDxcblx0W0Fzc2lnbm1lbnREYXRhLCBBc3NpZ25tZW50QWN0aW9uczxBc3NpZ25tZW50RGF0YT5dXG4+KFttb2NrQXNzaWdubWVudERhdGEsIHt9IGFzIGFueV0pXG5cbmNvbnN0IG1vY2tXZWVrRGF0YTogV2Vla0Jsb2NrID0gW1xuXHRbXG5cdFx0e1xuXHRcdFx0dHlwZTogJ3N0dWR5Jyxcblx0XHR9LFxuXHRcdHtcblx0XHRcdHR5cGU6ICdjbGFzcycsXG5cdFx0XHRyb29tSWRlbnRpZmllcjogJ1IwMDAnLFxuXHRcdFx0Y2xhc3NOYW1lOiAnRW5nZWxzaycsXG5cdFx0XHRob21ld29yazogW10sXG5cdFx0fSxcblx0XHR7XG5cdFx0XHR0eXBlOiAnY2xhc3MnLFxuXHRcdFx0cm9vbUlkZW50aWZpZXI6ICdSMDAwJyxcblx0XHRcdGNsYXNzTmFtZTogJ01hdGVtYXRpa2snLFxuXHRcdFx0aG9tZXdvcms6IFtdLFxuXHRcdH0sXG5cdFx0e1xuXHRcdFx0dHlwZTogJ2NsYXNzJyxcblx0XHRcdHJvb21JZGVudGlmaWVyOiAnUjAwMCcsXG5cdFx0XHRjbGFzc05hbWU6ICdHZW9ncmFmaScsXG5cdFx0XHRob21ld29yazogW10sXG5cdFx0fSxcblx0XSxcblx0W1xuXHRcdHtcblx0XHRcdHR5cGU6ICdjbGFzcycsXG5cdFx0XHRyb29tSWRlbnRpZmllcjogJ1IwMDAnLFxuXHRcdFx0Y2xhc3NOYW1lOiAnTm9yc2snLFxuXHRcdFx0aG9tZXdvcms6IFtdLFxuXHRcdH0sXG5cdFx0e1xuXHRcdFx0dHlwZTogJ2NsYXNzJyxcblx0XHRcdHJvb21JZGVudGlmaWVyOiAnUjAwMCcsXG5cdFx0XHRjbGFzc05hbWU6ICdTYW1mdW5uc2t1bm5za2FwJyxcblx0XHRcdGhvbWV3b3JrOiBbXSxcblx0XHR9LFxuXHRcdHtcblx0XHRcdHR5cGU6ICdjbGFzcycsXG5cdFx0XHRyb29tSWRlbnRpZmllcjogJ1IwMDAnLFxuXHRcdFx0Y2xhc3NOYW1lOiAnS3JvcHBzw7h2aW5nJyxcblx0XHRcdGhvbWV3b3JrOiBbXSxcblx0XHR9LFxuXHRdLFxuXHRbXG5cdFx0e1xuXHRcdFx0dHlwZTogJ2NsYXNzJyxcblx0XHRcdHJvb21JZGVudGlmaWVyOiAnUjAwMCcsXG5cdFx0XHRjbGFzc05hbWU6ICdTcHLDpWsnLFxuXHRcdFx0aG9tZXdvcms6IFsnMScsICczJywgJzEnLCAnMyddLFxuXHRcdH0sXG5cdFx0e1xuXHRcdFx0dHlwZTogJ2NsYXNzJyxcblx0XHRcdHJvb21JZGVudGlmaWVyOiAnUjAwMCcsXG5cdFx0XHRjbGFzc05hbWU6ICdTYW1mdW5uc2t1bm5za2FwJyxcblx0XHRcdGhvbWV3b3JrOiBbXSxcblx0XHR9LFxuXHRcdHtcblx0XHRcdHR5cGU6ICdjbGFzcycsXG5cdFx0XHRyb29tSWRlbnRpZmllcjogJ1IwMDAnLFxuXHRcdFx0Y2xhc3NOYW1lOiAnTmF0dXJmYWcnLFxuXHRcdFx0aG9tZXdvcms6IFtdLFxuXHRcdH0sXG5cdFx0Ly8ge1xuXHRcdC8vIGlkOiAnaGVsbG8nLFxuXHRcdC8vIC8vIHR5cGU6ICdhc3NpZ25tZW50Jyxcblx0XHQvLyBuYW1lOiAncmFuZG9tIGlubmxldmVyaW5nJyxcblx0XHQvLyBtZXNzYWdlOiAnanVzdCBkbyBzb21ldGhpbmcgaWRjJyxcblx0XHQvLyBncmFkaW5nTWV0aG9kOiAnbnVtZXJpYycsXG5cdFx0Ly8gZHVlOiBuZXcgRGF0ZSgpLFxuXHRcdC8vIH0sXG5cdF0sXG5cdFtcblx0XHR7XG5cdFx0XHR0eXBlOiAnY2xhc3MnLFxuXHRcdFx0cm9vbUlkZW50aWZpZXI6ICdSMDAwJyxcblx0XHRcdGNsYXNzTmFtZTogJ05hdHVyZmFnJyxcblx0XHRcdGhvbWV3b3JrOiBbXSxcblx0XHR9LFxuXHRcdHtcblx0XHRcdHR5cGU6ICdjbGFzcycsXG5cdFx0XHRyb29tSWRlbnRpZmllcjogJ1IwMDAnLFxuXHRcdFx0Y2xhc3NOYW1lOiAnU3Byw6VrJyxcblx0XHRcdGhvbWV3b3JrOiBbXSxcblx0XHR9LFxuXHRcdHtcblx0XHRcdHR5cGU6ICdjbGFzcycsXG5cdFx0XHRyb29tSWRlbnRpZmllcjogJ1IwMDAnLFxuXHRcdFx0Y2xhc3NOYW1lOiAnTm9yc2snLFxuXHRcdFx0aG9tZXdvcms6IFtdLFxuXHRcdH0sXG5cdFx0e1xuXHRcdFx0dHlwZTogJ2NsYXNzJyxcblx0XHRcdHJvb21JZGVudGlmaWVyOiAnUjAwMCcsXG5cdFx0XHRjbGFzc05hbWU6ICdNYXRlbWF0aWtrJyxcblx0XHRcdGhvbWV3b3JrOiBbXSxcblx0XHR9LFxuXHRdLFxuXHRbXG5cdFx0e1xuXHRcdFx0dHlwZTogJ2NsYXNzJyxcblx0XHRcdHJvb21JZGVudGlmaWVyOiAnUjAwMCcsXG5cdFx0XHRjbGFzc05hbWU6ICdOYXR1cmZhZycsXG5cdFx0XHRob21ld29yazogW10sXG5cdFx0fSxcblx0XHR7XG5cdFx0XHR0eXBlOiAnc3R1ZHknLFxuXHRcdH0sXG5cdFx0e1xuXHRcdFx0dHlwZTogJ2NsYXNzJyxcblx0XHRcdHJvb21JZGVudGlmaWVyOiAnUjAwMCcsXG5cdFx0XHRjbGFzc05hbWU6ICdOb3JzaycsXG5cdFx0XHRob21ld29yazogW10sXG5cdFx0fSxcblx0XHR7XG5cdFx0XHR0eXBlOiAnY2xhc3MnLFxuXHRcdFx0cm9vbUlkZW50aWZpZXI6ICdSMDAwJyxcblx0XHRcdGNsYXNzTmFtZTogJ0VuZ2Vsc2snLFxuXHRcdFx0aG9tZXdvcms6IFtdLFxuXHRcdH0sXG5cdF0sXG5dXG5cbmV4cG9ydCBjb25zdCB3ZWVrRGF0YUNvbnRleHQgPSBjcmVhdGVDb250ZXh0PFxuXHRbV2Vla0Jsb2NrLCBSZWFjdC5EaXNwYXRjaDxXZWVrQWN0aW9ucz5dXG4+KFttb2NrV2Vla0RhdGEsICgpID0+IHVuZGVmaW5lZF0pXG5cbmV4cG9ydCBjb25zdCB1c2VXZWVrRGF0YSA9ICgpID0+IHVzZUNvbnRleHQod2Vla0RhdGFDb250ZXh0KVxuZXhwb3J0IGNvbnN0IHVzZUFzc2lnbm1lbnREYXRhID0gKCkgPT4gdXNlQ29udGV4dChhc3NpZ25tZW50RGF0YUNvbnRleHQpXG5cbmV4cG9ydCBjb25zdCBBc3NpZ25tZW50RGF0YVByb3ZpZGVyOiBGQyA9ICh7IGNoaWxkcmVuIH0pID0+IHtcblx0cmV0dXJuIChcblx0XHQ8YXNzaWdubWVudERhdGFDb250ZXh0LlByb3ZpZGVyXG5cdFx0XHR2YWx1ZT17dXNlTWFwPEFzc2lnbm1lbnREYXRhPihtb2NrQXNzaWdubWVudERhdGEpfT5cblx0XHRcdHtjaGlsZHJlbn1cblx0XHQ8L2Fzc2lnbm1lbnREYXRhQ29udGV4dC5Qcm92aWRlcj5cblx0KVxufVxuXG50eXBlIFdlZWtBY3Rpb25zID1cblx0fCB7XG5cdFx0XHR0eXBlOiAnY2xlYXInXG5cdCAgfVxuXHR8IHsgdHlwZTogJ292ZXJ3cml0ZSc7IGRhdGE6IFdlZWtCbG9jayB9XG5cdHwgeyB0eXBlOiAnbWVyZ2UnOyBkYXRhOiBXZWVrQmxvY2sgfVxuXHR8IHtcblx0XHRcdHR5cGU6ICdvdmVyd3JpdGVPbmUnXG5cdFx0XHRkYXlJbmRleDogbnVtYmVyXG5cdFx0XHRsZXNzb25JbmRleDogbnVtYmVyXG5cdFx0XHRkYXRhOiBEYXRhQmxvY2tcblx0ICB9XG5cbmNvbnN0IHdlZWtSZWR1Y2VyID0gKHN0YXRlOiBXZWVrQmxvY2ssIGFjdGlvbjogV2Vla0FjdGlvbnMpOiBXZWVrQmxvY2sgPT4ge1xuXHRzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG5cdFx0Y2FzZSAnY2xlYXInOiB7XG5cdFx0XHRyZXR1cm4gW1tdLCBbXSwgW10sIFtdLCBbXV1cblx0XHR9XG5cblx0XHRjYXNlICdvdmVyd3JpdGUnOiB7XG5cdFx0XHRyZXR1cm4gY2xvbmVEZWVwKGFjdGlvbi5kYXRhKVxuXHRcdH1cblx0XHRjYXNlICdvdmVyd3JpdGVPbmUnOiB7XG5cdFx0XHRjb25zdCBjbG9uZSA9IGNsb25lRGVlcChzdGF0ZSlcblxuXHRcdFx0Y2xvbmVbYWN0aW9uLmRheUluZGV4XVthY3Rpb24ubGVzc29uSW5kZXhdID0gYWN0aW9uLmRhdGFcblxuXHRcdFx0cmV0dXJuIGNsb25lXG5cdFx0fVxuXG5cdFx0Y2FzZSAnbWVyZ2UnOiB7XG5cdFx0XHRjb25zdCBjbG9uZSA9IGNsb25lRGVlcChzdGF0ZSlcblxuXHRcdFx0cmV0dXJuIGNsb25lLm1hcCgodiwgZGF5SW5kZXgpID0+XG5cdFx0XHRcdHYubWFwKCh2LCBsZXNzb25JbmRleCkgPT4gYWN0aW9uLmRhdGFbZGF5SW5kZXhdW2xlc3NvbkluZGV4XSB8fCB2KSxcblx0XHRcdCkgYXMgV2Vla0Jsb2NrXG5cdFx0fVxuXHR9XG59XG5cbmV4cG9ydCBjb25zdCBXZWVrRGF0YVByb3ZpZGVyOiBGQyA9ICh7IGNoaWxkcmVuIH0pID0+IHtcblx0Y29uc3QgdmFsdWUgPSB1c2VSZWR1Y2VyKHdlZWtSZWR1Y2VyLCBnZXRJbml0aWFsV2Vla0RhdGEoKSlcblxuXHRyZXR1cm4gKFxuXHRcdDx3ZWVrRGF0YUNvbnRleHQuUHJvdmlkZXIgdmFsdWU9e3ZhbHVlfT5cblx0XHRcdHtjaGlsZHJlbn1cblx0XHQ8L3dlZWtEYXRhQ29udGV4dC5Qcm92aWRlcj5cblx0KVxufVxuIiwiaW1wb3J0IHtcblx0Y3JlYXRlQ29udGV4dCxcblx0RkMsXG5cdHVzZUNvbnRleHQsXG5cdERpc3BhdGNoLFxuXHRTZXRTdGF0ZUFjdGlvbixcblx0dXNlU3RhdGUsXG59IGZyb20gJ3JlYWN0J1xuXG5leHBvcnQgY29uc3QgbG9hZGluZ0NvbnRleHQgPSBjcmVhdGVDb250ZXh0PFxuXHRbYm9vbGVhbiwgRGlzcGF0Y2g8U2V0U3RhdGVBY3Rpb248Ym9vbGVhbj4+XVxuPihbdHJ1ZSwgKCkgPT4gdW5kZWZpbmVkXSlcblxuZXhwb3J0IGNvbnN0IHVzZUxvYWRpbmcgPSAoKSA9PiB1c2VDb250ZXh0KGxvYWRpbmdDb250ZXh0KVxuXG5leHBvcnQgY29uc3QgTG9hZGluZ1Byb3ZpZGVyOiBGQyA9ICh7IGNoaWxkcmVuIH0pID0+IHtcblx0Y29uc3QgW2xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGUodHJ1ZSlcblxuXHRyZXR1cm4gKFxuXHRcdDxsb2FkaW5nQ29udGV4dC5Qcm92aWRlciB2YWx1ZT17W2xvYWRpbmcsIHNldExvYWRpbmddfT5cblx0XHRcdHtjaGlsZHJlbn1cblx0XHQ8L2xvYWRpbmdDb250ZXh0LlByb3ZpZGVyPlxuXHQpXG59XG4iLCJpbXBvcnQgeyB1c2VNZWRpYVF1ZXJ5IH0gZnJvbSAnQG11aS9tYXRlcmlhbCdcbmltcG9ydCBSZWFjdCwge1xuXHRjcmVhdGVDb250ZXh0LFxuXHRGQyxcblx0dXNlU3RhdGUsXG5cdHVzZUNvbnRleHQsXG5cdHVzZUVmZmVjdCxcblx0RGlzcGF0Y2gsXG5cdFNldFN0YXRlQWN0aW9uLFxuXHR1c2VNZW1vLFxuXHR1c2VDYWxsYmFjayxcblx0dXNlUmVmLFxufSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IHVzZURlYm91bmNlLCB1c2VQcmV2aW91cyB9IGZyb20gJ3JlYWN0LXVzZSdcbmltcG9ydCB7IElkZW50aWZpZWRVc2VyLCBVc2VyIH0gZnJvbSAndHlwaW5ncy91c2VyRGF0YSdcbmltcG9ydCB7XG5cdGNvbGxlY3Rpb24sXG5cdHNldERvYyxcblx0ZG9jLFxuXHRnZXRGaXJlc3RvcmUsXG5cdGdldERvYyxcblx0Q29sbGVjdGlvblJlZmVyZW5jZSxcblx0b25TbmFwc2hvdCxcbn0gZnJvbSAnZmlyZWJhc2UvZmlyZXN0b3JlJ1xuaW1wb3J0IHsgZ2V0QXV0aCwgb25BdXRoU3RhdGVDaGFuZ2VkIH0gZnJvbSAnZmlyZWJhc2UvYXV0aCdcbmltcG9ydCBpc0VxdWFsIGZyb20gJ2xvZGFzaC9pc0VxdWFsJ1xuaW1wb3J0IHsgZG9DbGFzc1NlbGVjdG9yUXVlcnkgfSBmcm9tICd1dGlscy9kb0NsYXNzU2VsZWN0b3JRdWVyeSdcbmltcG9ydCB7IHVzZUxvYWRpbmcgfSBmcm9tICcuL2xvYWRpbmcnXG5pbXBvcnQgeyB1c2VXZWVrRGF0YSB9IGZyb20gJy4vZGF0YSdcbmltcG9ydCB7IHVzZUN1cnJlbnRXZWVrIH0gZnJvbSAnLi9jdXJyZW50V2VlaydcblxuY29uc3QgbW9ja1VzZXI6IFVzZXIgPSB7XG5cdHR5cGU6IG51bGwsXG59XG5cbmV4cG9ydCBjb25zdCB1c2VyQ29udGV4dCA9IGNyZWF0ZUNvbnRleHQ8XG5cdFtVc2VyLCBEaXNwYXRjaDxTZXRTdGF0ZUFjdGlvbjxVc2VyPj5dXG4+KFttb2NrVXNlciwgKCkgPT4gdW5kZWZpbmVkXSlcblxuZXhwb3J0IGNvbnN0IHVzZVVzZXIgPSAoKSA9PiB1c2VDb250ZXh0KHVzZXJDb250ZXh0KVxuXG5leHBvcnQgY29uc3QgVXNlclByb3ZpZGVyOiBGQyA9ICh7IGNoaWxkcmVuIH0pID0+IHtcblx0Y29uc3QgW3VzZXIsIHNldFVzZXJdID0gdXNlU3RhdGU8VXNlcj4obW9ja1VzZXIpXG5cblx0Y29uc3Qgam9iID0gdXNlUmVmPFtkZWJvdW5jZTogTm9kZUpTLlRpbWVvdXQgfCBudWxsLCBpc0luaXRpYWxSdW46IGJvb2xlYW5dPihbXG5cdFx0bnVsbCxcblx0XHR0cnVlLFxuXHRdKVxuXG5cdGNvbnN0IHByZWZlcnNEYXJrTW9kZSA9IHVzZU1lZGlhUXVlcnkoJyhwcmVmZXJzLWNvbG9yLXNjaGVtZTogZGFyayknKVxuXG5cdGNvbnN0IFtfMSwgc2V0TG9hZGluZ10gPSB1c2VMb2FkaW5nKClcblx0Y29uc3QgW18yLCBkaXNwYXRjaF0gPSB1c2VXZWVrRGF0YSgpXG5cdGNvbnN0IFtjdXJyZW50V2Vla10gPSB1c2VDdXJyZW50V2VlaygpXG5cblx0Y29uc3QgYW5vblVzZXI6IFVzZXIgPSB1c2VNZW1vKFxuXHRcdCgpID0+ICh7XG5cdFx0XHR0eXBlOiAnQW5vbnltb3VzJyxcblx0XHRcdGFzc2lnbm1lbnREYXRhOiB7fSxcblx0XHRcdGNsYXNzOiBudWxsLFxuXHRcdFx0dGhlbWU6IHByZWZlcnNEYXJrTW9kZSA/ICdibHVlJyA6ICdkYXJrJyxcblx0XHRcdHNlbGVjdG9yOiB7IGNsYXNzOiAnMVNUQScsIGxhbmd1YWdlOiAnR2VybWFuMScgfSxcblx0XHR9KSxcblx0XHRbcHJlZmVyc0RhcmtNb2RlXSxcblx0KVxuXG5cdGNvbnN0IHBlcmZvcm1VcGRhdGUgPSB1c2VDYWxsYmFjayhhc3luYyAoKSA9PiB7XG5cdFx0aWYgKHVzZXIudHlwZSA9PT0gJ0lkZW50aWZpZWQnICYmIHVzZXIudWlkKVxuXHRcdFx0YXdhaXQgc2V0RG9jKGRvYyhnZXRGaXJlc3RvcmUoKSwgJ3VzZXJzJywgdXNlci51aWQpLCB1c2VyKVxuXHR9LCBbdXNlcl0pXG5cblx0Y29uc3QgZ2V0RGF0YVJlZiA9IHVzZUNhbGxiYWNrKCh1c2VyOiBJZGVudGlmaWVkVXNlcikgPT4ge1xuXHRcdHJldHVybiBkb2MoXG5cdFx0XHRjb2xsZWN0aW9uKFxuXHRcdFx0XHRnZXRGaXJlc3RvcmUoKSxcblx0XHRcdFx0J3VzZXJzJyxcblx0XHRcdCkgYXMgQ29sbGVjdGlvblJlZmVyZW5jZTxJZGVudGlmaWVkVXNlcj4sXG5cdFx0XHR1c2VyLnVpZCxcblx0XHQpXG5cdH0sIFtdKVxuXG5cdHVzZUVmZmVjdCgoKSA9PiB7XG5cdFx0aWYgKHVzZXIudHlwZSA9PT0gbnVsbCkge1xuXHRcdFx0aWYgKFxuXHRcdFx0XHR0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJlxuXHRcdFx0XHR0eXBlb2YgbG9jYWxTdG9yYWdlICE9PSAndW5kZWZpbmVkJ1xuXHRcdFx0KSB7XG5cdFx0XHRcdGNvbnN0IHN0ciA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd1c2VyJylcblxuXHRcdFx0XHRpZiAoc3RyKVxuXHRcdFx0XHRcdHRyeSB7XG5cdFx0XHRcdFx0XHRjb25zdCB1c2VyOiBVc2VyID0gSlNPTi5wYXJzZShzdHIpXG5cblx0XHRcdFx0XHRcdGlmICh1c2VyLnR5cGUgPT09ICdJZGVudGlmaWVkJykge1xuXHRcdFx0XHRcdFx0XHRjb25zdCB1bnN1YiA9IG9uQXV0aFN0YXRlQ2hhbmdlZChnZXRBdXRoKCksIGFzeW5jIChzaWduZWRJbikgPT4ge1xuXHRcdFx0XHRcdFx0XHRcdGlmIChzaWduZWRJbikge1xuXHRcdFx0XHRcdFx0XHRcdFx0bGV0IHJlZG8gPSBmYWxzZVxuXG5cdFx0XHRcdFx0XHRcdFx0XHRkbyB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdGNvbnN0IHJlc3VsdCA9IGF3YWl0IGdldERvYyhnZXREYXRhUmVmKHVzZXIpKVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRpZiAocmVzdWx0LmV4aXN0cygpKSB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0c2V0VXNlcihyZXN1bHQuZGF0YSgpKVxuXHRcdFx0XHRcdFx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGF3YWl0IHBlcmZvcm1VcGRhdGUoKVxuXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0cmVkbyA9IHRydWVcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRjb250aW51ZVxuXHRcdFx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdHJlZG8gPSBmYWxzZVxuXHRcdFx0XHRcdFx0XHRcdFx0fSB3aGlsZSAocmVkbylcblx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdFx0dW5zdWIoKVxuXHRcdFx0XHRcdFx0XHR9KVxuXHRcdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdFx0c2V0VXNlcih1c2VyKVxuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH0gY2F0Y2ggKGVycm9yKSB7XG5cdFx0XHRcdFx0XHRzZXRVc2VyKGFub25Vc2VyKVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0ZWxzZSBzZXRVc2VyKGFub25Vc2VyKVxuXHRcdFx0fVxuXHRcdH0gZWxzZSBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndXNlcicsIEpTT04uc3RyaW5naWZ5KHVzZXIpKVxuXHR9LCBbdXNlciwgYW5vblVzZXIsIHBlcmZvcm1VcGRhdGUsIGdldERhdGFSZWZdKVxuXG5cdHVzZUVmZmVjdChcblx0XHQoKSA9PiB7XG5cdFx0XHRpZiAodXNlci50eXBlID09PSAnSWRlbnRpZmllZCcpIHtcblx0XHRcdFx0Y29uc3QgdW5zdWIgPSBvblNuYXBzaG90KGdldERhdGFSZWYodXNlciksIGFzeW5jIChzbmFwc2hvdCkgPT4ge1xuXHRcdFx0XHRcdGlmIChzbmFwc2hvdC5leGlzdHMoKSkgc2V0VXNlcigoKSA9PiBzbmFwc2hvdC5kYXRhKCkpXG5cdFx0XHRcdFx0ZWxzZSB7XG5cdFx0XHRcdFx0XHRhd2FpdCBwZXJmb3JtVXBkYXRlKClcblx0XHRcdFx0XHRcdC8vIHNldFVzZXIoKCkgPT4gYW5vblVzZXIpXG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9KVxuXG5cdFx0XHRcdHJldHVybiAoKSA9PiB7XG5cdFx0XHRcdFx0dW5zdWIoKVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fSxcblx0XHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVhY3QtaG9va3MvZXhoYXVzdGl2ZS1kZXBzXG5cdFx0W3VzZXIudHlwZSA9PT0gJ0lkZW50aWZpZWQnXSxcblx0KVxuXG5cdHVzZUVmZmVjdChcblx0XHQoKSA9PiB7XG5cdFx0XHRpZiAodXNlci50eXBlKSB7XG5cdFx0XHRcdHNldExvYWRpbmcodHJ1ZSlcblxuXHRcdFx0XHRqb2IuY3VycmVudFswXSA9IHNldFRpbWVvdXQoYXN5bmMgKCkgPT4ge1xuXHRcdFx0XHRcdHNldExvYWRpbmcoZmFsc2UpXG5cblx0XHRcdFx0XHRkaXNwYXRjaCh7XG5cdFx0XHRcdFx0XHR0eXBlOiAnb3ZlcndyaXRlJyxcblx0XHRcdFx0XHRcdGRhdGE6IGF3YWl0IGRvQ2xhc3NTZWxlY3RvclF1ZXJ5KFxuXHRcdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcdFx0Y2xhc3M6ICcyU1REJyxcblx0XHRcdFx0XHRcdFx0XHRsYW5ndWFnZTogJ0dlcm1hbjEnLFxuXHRcdFx0XHRcdFx0XHRcdGE6IG51bGwsXG5cdFx0XHRcdFx0XHRcdFx0YjogJ0IvSVQyJyxcblx0XHRcdFx0XHRcdFx0XHRjOiAnQy9JVDEnLFxuXHRcdFx0XHRcdFx0XHRcdGQ6ICdEL0Jpb2xvZ2kgMicsXG5cdFx0XHRcdFx0XHRcdFx0ZTogJ0UvRnlzaWtrIDEnLFxuXHRcdFx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdFx0XHRjdXJyZW50V2Vlayxcblx0XHRcdFx0XHRcdCksXG5cdFx0XHRcdFx0fSlcblxuXHRcdFx0XHRcdGpvYi5jdXJyZW50WzFdID0gZmFsc2Vcblx0XHRcdFx0fSwgMjAwMCAtIDEwMDAgKiAram9iLmN1cnJlbnRbMV0pXG5cblx0XHRcdFx0cmV0dXJuICgpID0+IHtcblx0XHRcdFx0XHRpZiAoam9iLmN1cnJlbnRbMF0gIT09IG51bGwpIGNsZWFyVGltZW91dChqb2IuY3VycmVudFswXSlcblx0XHRcdFx0XHRqb2IuY3VycmVudFswXSA9IG51bGxcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH0sXG5cdFx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlYWN0LWhvb2tzL2V4aGF1c3RpdmUtZGVwc1xuXHRcdFt1c2VyLnR5cGUgJiYgdXNlci5zZWxlY3RvciwgY3VycmVudFdlZWtdLFxuXHQpXG5cblx0dXNlRGVib3VuY2UoKCkgPT4gdm9pZCBwZXJmb3JtVXBkYXRlKCksIDUwMDAsIFt1c2VyXSlcblxuXHRyZXR1cm4gKFxuXHRcdDx1c2VyQ29udGV4dC5Qcm92aWRlciB2YWx1ZT17W3VzZXIsIHNldFVzZXJdfT5cblx0XHRcdHtjaGlsZHJlbn1cblx0XHQ8L3VzZXJDb250ZXh0LlByb3ZpZGVyPlxuXHQpXG59XG4iLCJpbXBvcnQge30gZnJvbSAndHlwaW5ncy90aW1lbGluZURhdGEnXG5cbmV4cG9ydCBjb25zdCB0cmFuc2Zvcm1EYXkgPSAoZGF5OiBudW1iZXIpID0+XG5cdFsnTWFuZGFnJywgJ1RpcnNkYWcnLCAnT25zZGFnJywgJ1RvcnNkYWcnLCAnRnJlZGFnJ11bZGF5XVxuIiwiaW1wb3J0IHR5cGUgeyBOZXh0UGFnZSB9IGZyb20gJ25leHQnXG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBzdHlsZWQgZnJvbSAnQGVtb3Rpb24vc3R5bGVkJ1xuaW1wb3J0IFN0YWNrIGZyb20gJ0BtdWkvbWF0ZXJpYWwvU3RhY2snXG5pbXBvcnQgVHlwb2dyYXBoeSBmcm9tICdAbXVpL21hdGVyaWFsL1R5cG9ncmFwaHknXG5pbXBvcnQgeyB0cmFuc2Zvcm1EYXkgfSBmcm9tICdpbnRlcm5hdGlvbmFsaXphdGlvbi90cmFuc2Zvcm1EYXknXG5pbXBvcnQgeyBDbGFzcyB9IGZyb20gJ2NvbXBvbmVudHMvQ2FyZHMvQ2xhc3MnXG5pbXBvcnQgeyBTdHVkeSB9IGZyb20gJ2NvbXBvbmVudHMvQ2FyZHMvU3R1ZHknXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXG5pbXBvcnQgeyB1c2VXZWVrRGF0YSB9IGZyb20gJ2NvbnRleHQvZGF0YSdcbmltcG9ydCB1c2VNZWRpYVF1ZXJ5IGZyb20gJ0BtdWkvbWF0ZXJpYWwvdXNlTWVkaWFRdWVyeSdcbmltcG9ydCB7IHVzZVN3aXBlYWJsZSB9IGZyb20gJ3JlYWN0LXN3aXBlYWJsZSdcbmltcG9ydCBJY29uQnV0dG9uIGZyb20gJ0BtdWkvbWF0ZXJpYWwvSWNvbkJ1dHRvbidcbmltcG9ydCBLZXlib2FyZEFycm93UmlnaHRJY29uIGZyb20gJ0BtdWkvaWNvbnMtbWF0ZXJpYWwvS2V5Ym9hcmRBcnJvd1JpZ2h0J1xuaW1wb3J0IEtleWJvYXJkQXJyb3dMZWZ0SWNvbiBmcm9tICdAbXVpL2ljb25zLW1hdGVyaWFsL0tleWJvYXJkQXJyb3dMZWZ0J1xuaW1wb3J0IHsgdXNlTG9hZGluZyB9IGZyb20gJ2NvbnRleHQvbG9hZGluZydcbmltcG9ydCB7IHVzZUN1cnJlbnRXZWVrIH0gZnJvbSAnY29udGV4dC9jdXJyZW50V2VlaydcbmltcG9ydCB7IHVzZURlYm91bmNlIH0gZnJvbSAncmVhY3QtdXNlJ1xuXG5jb25zdCBIb21lOiBOZXh0UGFnZSA9ICgpID0+IHtcblx0Y29uc3QgW3dlZWtEYXRhXSA9IHVzZVdlZWtEYXRhKClcblxuXHRjb25zdCBbbG9hZGluZywgc2V0TG9hZGluZ10gPSB1c2VMb2FkaW5nKClcblx0Y29uc3QgW3ZpZXdpbmdDdXJyZW50V2Vlaywgc2V0Vmlld2luZ0N1cnJlbnRXZWVrXSA9IHVzZUN1cnJlbnRXZWVrKClcblxuXHRjb25zdCBbY3VycmVudFdlZWssIHNldEN1cnJlbnRXZWVrXSA9IHVzZVN0YXRlKHZpZXdpbmdDdXJyZW50V2VlaylcblxuXHR1c2VEZWJvdW5jZShcblx0XHQoKSA9PiB7XG5cdFx0XHRzZXRWaWV3aW5nQ3VycmVudFdlZWsoY3VycmVudFdlZWspXG5cdFx0fSxcblx0XHQ1MDAsXG5cdFx0W2N1cnJlbnRXZWVrXSxcblx0KVxuXG5cdGNvbnN0IGlzTW9iaWxlID0gdXNlTWVkaWFRdWVyeSgnKG1heC13aWR0aDo0ODBweCcpXG5cblx0aWYgKGlzTW9iaWxlKSB7XG5cdFx0cmV0dXJuIDxIb21lTW9iaWxlIC8+XG5cdH1cblxuXHRyZXR1cm4gKFxuXHRcdDw+XG5cdFx0XHQ8SGVhZD5cblx0XHRcdFx0PHRpdGxlPlRpbWVwbGFuPC90aXRsZT5cblx0XHRcdDwvSGVhZD5cblxuXHRcdFx0PE1haW5Db250YWluZXI+XG5cdFx0XHRcdDxXZWVrQ29udHJvbD5cblx0XHRcdFx0XHQ8SWNvbkJ1dHRvblxuXHRcdFx0XHRcdFx0b25DbGljaz17KCkgPT4ge1xuXHRcdFx0XHRcdFx0XHRzZXRDdXJyZW50V2VlayhjdXJyZW50V2VlayAtIDEpXG5cdFx0XHRcdFx0XHRcdGlmICghbG9hZGluZykgc2V0TG9hZGluZyh0cnVlKVxuXHRcdFx0XHRcdFx0fX0+XG5cdFx0XHRcdFx0XHQ8S2V5Ym9hcmRBcnJvd0xlZnRJY29uIC8+XG5cdFx0XHRcdFx0PC9JY29uQnV0dG9uPlxuXHRcdFx0XHRcdDxUeXBvZ3JhcGh5IHZhcmlhbnQ9J2g1Jz5Va2Uge2N1cnJlbnRXZWVrfTwvVHlwb2dyYXBoeT5cblx0XHRcdFx0XHQ8SWNvbkJ1dHRvblxuXHRcdFx0XHRcdFx0b25DbGljaz17KCkgPT4ge1xuXHRcdFx0XHRcdFx0XHRzZXRDdXJyZW50V2VlayhjdXJyZW50V2VlayArIDEpXG5cdFx0XHRcdFx0XHRcdGlmICghbG9hZGluZykgc2V0TG9hZGluZyh0cnVlKVxuXHRcdFx0XHRcdFx0fX0+XG5cdFx0XHRcdFx0XHQ8S2V5Ym9hcmRBcnJvd1JpZ2h0SWNvbiAvPlxuXHRcdFx0XHRcdDwvSWNvbkJ1dHRvbj5cblx0XHRcdFx0PC9XZWVrQ29udHJvbD5cblx0XHRcdFx0PGJyIC8+XG5cblx0XHRcdFx0PFN0YWNrXG5cdFx0XHRcdFx0c3R5bGU9e3sgb3BhY2l0eTogKDIgLSArbG9hZGluZykgLyAyIH19XG5cdFx0XHRcdFx0c3BhY2luZz17Mn1cblx0XHRcdFx0XHRkaXJlY3Rpb249J3Jvdydcblx0XHRcdFx0XHRmbGV4V3JhcD0nd3JhcCdcblx0XHRcdFx0XHRqdXN0aWZ5Q29udGVudD0nY2VudGVyJz5cblx0XHRcdFx0XHR7d2Vla0RhdGEubWFwKCh2YWx1ZSwga2V5KSA9PiAoXG5cdFx0XHRcdFx0XHQ8U3RhY2sga2V5PXtrZXl9IHNwYWNpbmc9ezJ9IHdpZHRoPXt7IHhsOiAyNTAsIGw6IDIwMCB9fT5cblx0XHRcdFx0XHRcdFx0PFN0eWxlZFR5cG9ncmFwaHkgdmFyaWFudD0naDMnPlxuXHRcdFx0XHRcdFx0XHRcdHt0cmFuc2Zvcm1EYXkoa2V5KX1cblx0XHRcdFx0XHRcdFx0PC9TdHlsZWRUeXBvZ3JhcGh5PlxuXHRcdFx0XHRcdFx0XHR7dmFsdWUubWFwKCh2YWx1ZSwgaSkgPT4gKFxuXHRcdFx0XHRcdFx0XHRcdDxSZWFjdC5GcmFnbWVudCBrZXk9e2l9PlxuXHRcdFx0XHRcdFx0XHRcdFx0e3ZhbHVlID8gKFxuXHRcdFx0XHRcdFx0XHRcdFx0XHR2YWx1ZS50eXBlID09PSAnY2xhc3MnID8gKFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxDbGFzcyB7Li4udmFsdWV9IC8+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdCkgOiAoXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PFN0dWR5IC8+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdClcblx0XHRcdFx0XHRcdFx0XHRcdCkgOiAoXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxTdHVkeSAvPlxuXHRcdFx0XHRcdFx0XHRcdFx0KX1cblx0XHRcdFx0XHRcdFx0XHQ8L1JlYWN0LkZyYWdtZW50PlxuXHRcdFx0XHRcdFx0XHQpKX1cblx0XHRcdFx0XHRcdDwvU3RhY2s+XG5cdFx0XHRcdFx0KSl9XG5cdFx0XHRcdDwvU3RhY2s+XG5cdFx0XHQ8L01haW5Db250YWluZXI+XG5cdFx0PC8+XG5cdClcbn1cblxuY29uc3QgSG9tZU1vYmlsZSA9ICgpID0+IHtcblx0Y29uc3QgW3dlZWtEYXRhXSA9IHVzZVdlZWtEYXRhKClcblx0Y29uc3QgW2RheSwgc2V0RGF5XSA9IHVzZVN0YXRlKDApXG5cblx0Y29uc3QgZGF5U3dpcGVIYW5kbGVycyA9IHVzZVN3aXBlYWJsZSh7XG5cdFx0b25Td2lwZWRSaWdodDogKGV2ZW50RGF0YSkgPT4ge1xuXHRcdFx0aWYgKGRheSA+IDApIHtcblx0XHRcdFx0c2V0RGF5KGRheSAtIDEpXG5cdFx0XHR9XG5cdFx0fSxcblx0XHRvblN3aXBlZExlZnQ6IChldmVudERhdGEpID0+IHtcblx0XHRcdGlmIChkYXkgPCA0KSB7XG5cdFx0XHRcdHNldERheShkYXkgKyAxKVxuXHRcdFx0fVxuXHRcdH0sXG5cdH0pXG5cblx0cmV0dXJuIChcblx0XHQ8PlxuXHRcdFx0PE1haW5Db250YWluZXIgey4uLmRheVN3aXBlSGFuZGxlcnN9PlxuXHRcdFx0XHQ8U3RhY2sga2V5PXtkYXl9IHNwYWNpbmc9ezJ9IHdpZHRoPXt7IHhsOiAyNTAsIGw6IDIwMCB9fT5cblx0XHRcdFx0XHQ8U3R5bGVkVHlwb2dyYXBoeSB2YXJpYW50PSdoMycgc3g9e3sgdGV4dEFsaWduOiAnY2VudGVyJyB9fT5cblx0XHRcdFx0XHRcdHt0cmFuc2Zvcm1EYXkoZGF5KX1cblx0XHRcdFx0XHQ8L1N0eWxlZFR5cG9ncmFwaHk+XG5cdFx0XHRcdFx0e3dlZWtEYXRhW2RheV0ubWFwKCh2YWx1ZSwgaSkgPT4gKFxuXHRcdFx0XHRcdFx0PFJlYWN0LkZyYWdtZW50IGtleT17aX0+XG5cdFx0XHRcdFx0XHRcdHt2YWx1ZSA/IChcblx0XHRcdFx0XHRcdFx0XHR2YWx1ZS50eXBlID09PSAnY2xhc3MnID8gKFxuXHRcdFx0XHRcdFx0XHRcdFx0PENsYXNzIHsuLi52YWx1ZX0gLz5cblx0XHRcdFx0XHRcdFx0XHQpIDogKFxuXHRcdFx0XHRcdFx0XHRcdFx0PFN0dWR5IC8+XG5cdFx0XHRcdFx0XHRcdFx0KVxuXHRcdFx0XHRcdFx0XHQpIDogKFxuXHRcdFx0XHRcdFx0XHRcdDxTdHVkeSAvPlxuXHRcdFx0XHRcdFx0XHQpfVxuXHRcdFx0XHRcdFx0PC9SZWFjdC5GcmFnbWVudD5cblx0XHRcdFx0XHQpKX1cblx0XHRcdFx0PC9TdGFjaz5cblx0XHRcdDwvTWFpbkNvbnRhaW5lcj5cblx0XHQ8Lz5cblx0KVxufVxuXG5jb25zdCBTdHlsZWRUeXBvZ3JhcGh5ID0gc3R5bGVkKFR5cG9ncmFwaHkpYFxuXHRjb2xvcjogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5wYWxldHRlLnRleHQucHJpbWFyeX07XG5gXG5cbmNvbnN0IFdlZWtDb250cm9sID0gc3R5bGVkLmRpdmBcblx0ZGlzcGxheTogZmxleDtcblx0YWxpZ24taXRlbXM6IGNlbnRlcjtcbmBcblxuY29uc3QgTWFpbkNvbnRhaW5lciA9IHN0eWxlZC5kaXZgXG5cdHRyYW5zaXRpb246ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUudHJhbnNpdGlvbnMuY3JlYXRlKCdvcGFjaXR5Jyl9O1xuXG5cdGRpc3BsYXk6IGZsZXg7XG5cdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG5cdGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cdGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcblx0bWluLWhlaWdodDogY2FsYygxMDB2aCAtIDEycmVtKTtcblx0d2lkdGg6IDEwMHZ3O1xuXHRwYWRkaW5nLWJsb2NrLXN0YXJ0OiA2cmVtO1xuXHRwYWRkaW5nLWJsb2NrLWVuZDogNnJlbTtcbmBcblxuZXhwb3J0IGRlZmF1bHQgSG9tZVxuIiwiaW1wb3J0IHN0eWxlZCBmcm9tICdAZW1vdGlvbi9zdHlsZWQnXG5pbXBvcnQgQm94IGZyb20gJ0BtdWkvbWF0ZXJpYWwvQm94J1xuXG5leHBvcnQgY29uc3QgRGlzYWJsZWRCb3ggPSBzdHlsZWQoQm94KWBcblx0Y29sb3I6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUucGFsZXR0ZS50ZXh0LmRpc2FibGVkfTtcbmBcblxuZXhwb3J0IGNvbnN0IFByaW1hcnlCb3ggPSBzdHlsZWQoQm94KWBcblx0Y29sb3I6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUucGFsZXR0ZS50ZXh0LnByaW1hcnl9O1xuYFxuZXhwb3J0IGNvbnN0IFNlY29uZGFyeUJveCA9IHN0eWxlZChCb3gpYFxuXHRjb2xvcjogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5wYWxldHRlLnRleHQuc2Vjb25kYXJ5fTtcbmBcbiIsImltcG9ydCBDYXJkIGZyb20gJ0BtdWkvbWF0ZXJpYWwvQ2FyZCdcbmltcG9ydCB7IHN0eWxlZCB9IGZyb20gJ0BtdWkvc3lzdGVtJ1xuXG5leHBvcnQgY29uc3QgU3R5bGVkQ2FyZCA9IHN0eWxlZChDYXJkKWBcblx0bWluLWhlaWdodDogOS41cmVtO1xuYFxuIiwiZXhwb3J0IHR5cGUgR3JhZGUgPSAxIHwgMiB8IDNcblxuZXhwb3J0IHR5cGUgTGFuZ3VhZ2UxID1cblx0fCAnR2VybWFuMSdcblx0fCAnR2VybWFuMidcblx0fCAnU3BhbmlzaDEnXG5cdHwgJ1NwYW5pc2gyJ1xuXHR8ICdGcmVuY2gxJ1xuXHR8ICdGcmVuY2gyJ1xuXHR8ICdTYW1pJ1xuXG5leHBvcnQgY29uc3QgbGFuZ3VhZ2UxOiBMYW5ndWFnZTFbXSA9IFtcblx0J0dlcm1hbjEnLFxuXHQnR2VybWFuMicsXG5cdCdTcGFuaXNoMScsXG5cdCdTcGFuaXNoMicsXG5cdCdGcmVuY2gxJyxcblx0J0ZyZW5jaDInLFxuXHQnU2FtaScsXG5dXG5cbmV4cG9ydCB0eXBlIExhbmd1YWdlWCA9XG5cdHwgTGFuZ3VhZ2UxXG5cdHwgJ0dlcm1hbjErMidcblx0fCAnR2VybWFuMydcblx0fCAnU3BhbmlzaDErMidcblx0fCAnU3BhbmlzaDMnXG5cdHwgJ0ZyZW5jaDErMidcblx0fCAnRnJlbmNoMydcblx0fCBudWxsXG5cbmV4cG9ydCBjb25zdCBsYW5ndWFnZVg6IExhbmd1YWdlWFtdID0gW1xuXHQuLi5sYW5ndWFnZTEsXG5cdCdHZXJtYW4xKzInLFxuXHQnR2VybWFuMycsXG5cdCdTcGFuaXNoMSsyJyxcblx0J1NwYW5pc2gzJyxcblx0J0ZyZW5jaDErMicsXG5cdCdGcmVuY2gzJyxcblx0bnVsbCxcbl1cblxuZXhwb3J0IHR5cGUgU3RDbGFzc0ZhY3Rvcnk8VCBleHRlbmRzIEdyYWRlPiA9XG5cdHwgYCR7VH1TVEFgXG5cdHwgYCR7VH1TVEJgXG5cdHwgYCR7VH1TVENgXG5cdHwgYCR7VH1TVERgXG5cdHwgYCR7VH1TVEVgXG5cdHwgYCR7VH1TVEZgXG5cbmV4cG9ydCBjb25zdCBzdENsYXNzRmFjdG9yeSA9IDxUIGV4dGVuZHMgR3JhZGU+KHY6IFQpOiBTdENsYXNzRmFjdG9yeTxUPltdID0+IFtcblx0YCR7dn1TVEFgLFxuXHRgJHt2fVNUQmAsXG5cdGAke3Z9U1RDYCxcblx0YCR7dn1TVERgLFxuXHRgJHt2fVNURWAsXG5cdGAke3Z9U1RGYCxcbl1cblxuZXhwb3J0IHR5cGUgTWRDbGFzc0ZhY3Rvcnk8VCBleHRlbmRzIEdyYWRlPiA9IGBNTUEke1R9YCB8IGBNREEke1R9YFxuXG5leHBvcnQgY29uc3QgbWRDbGFzc0ZhY3RvcnkgPSA8VCBleHRlbmRzIEdyYWRlPih2OiBUKTogTWRDbGFzc0ZhY3Rvcnk8VD5bXSA9PiBbXG5cdGBNTUEke3Z9YCxcblx0YE1EQSR7dn1gLFxuXVxuXG5leHBvcnQgdHlwZSBNZENsYXNzID0gJ01EMScgfCAnTUQyJyB8ICdNRDMnXG5cbmV4cG9ydCBuYW1lc3BhY2UgQmxvY2tEYXRhIHtcblx0ZXhwb3J0IHR5cGUgX0FCbG9ja0RhdGEgPSAnUDInXG5cdGV4cG9ydCB0eXBlIEFCbG9ja0RhdGEgPSBgQS8ke19BQmxvY2tEYXRhfWAgfCBudWxsXG5cdGV4cG9ydCBjb25zdCBhQmxvY2tEYXRhOiBBQmxvY2tEYXRhW10gPSBbJ0EvUDInLCBudWxsXVxuXG5cdGV4cG9ydCB0eXBlIF9CQmxvY2tEYXRhID1cblx0XHR8ICdSMSdcblx0XHR8ICdTMSdcblx0XHR8ICdGeXNpa2sgMSdcblx0XHR8ICdHZW9mYWcgMSdcblx0XHR8ICdFbmdlbHNrIDEnXG5cdFx0fCAnw5hrb25vbWlzdHlyaW5nJ1xuXHRcdHwgJ1NhbWZ1bm5zLWdlb2dyYWZpJ1xuXHRcdHwgJ1IyJ1xuXHRcdHwgJ1MyJ1xuXHRcdHwgJ0lUMidcblx0XHR8ICdQb2lsaXRpa2sgb2cgbWVubmVza2VyZXR0aWdoZXRlcidcblx0XHR8ICdFbnRyZXByZW7DuHJza2FwIG9nIGJlZHJpZnRzdXR2aWtsaW5nIDInXG5cdFx0fCAnUmV0dHNsw6ZyZSAyJ1xuXHRleHBvcnQgdHlwZSBCQmxvY2tEYXRhID0gYEIvJHtfQkJsb2NrRGF0YX1gIHwgbnVsbFxuXHRleHBvcnQgY29uc3QgYkJsb2NrRGF0YTogQkJsb2NrRGF0YVtdID0gW1xuXHRcdCdCL1IxJyxcblx0XHQnQi9TMScsXG5cdFx0J0IvRnlzaWtrIDEnLFxuXHRcdCdCL0dlb2ZhZyAxJyxcblx0XHQnQi9FbmdlbHNrIDEnLFxuXHRcdCdCL8OYa29ub21pc3R5cmluZycsXG5cdFx0J0IvU2FtZnVubnMtZ2VvZ3JhZmknLFxuXHRcdCdCL1IyJyxcblx0XHQnQi9TMicsXG5cdFx0J0IvSVQyJyxcblx0XHQnQi9Qb2lsaXRpa2sgb2cgbWVubmVza2VyZXR0aWdoZXRlcicsXG5cdFx0J0IvRW50cmVwcmVuw7hyc2thcCBvZyBiZWRyaWZ0c3V0dmlrbGluZyAyJyxcblx0XHQnQi9SZXR0c2zDpnJlIDInLFxuXHRcdG51bGwsXG5cdF1cblxuXHRleHBvcnQgdHlwZSBfQ0Jsb2NrRGF0YSA9XG5cdFx0fCAnSVQxJ1xuXHRcdHwgJ0tqZW1pIDEnXG5cdFx0fCAnQmlvbG9naSAxJ1xuXHRcdHwgJ01hcmtlZHNmw7hyaW5nIG9nIGxlZGVsc2UgMSdcblx0XHR8ICdSZXR0c2zDpnJlIDEnXG5cdFx0fCAnU29zaW9sb2dpIG9nIHNvc2lhbGFudHJvcG9sb2dpJ1xuXHRcdHwgJ0Z5c2lrayAyJ1xuXHRcdHwgJ1NhbWZ1bm5zZmFnbGlnIGVuZ2Vsc2snXG5cdFx0fCAnU2FtZnVubnPDuGtvbm9taSAyJ1xuXHRcdHwgJ1Nvc2lhbGt1bm5za2FwJ1xuXHRleHBvcnQgdHlwZSBDQmxvY2tEYXRhID0gYEMvJHtfQ0Jsb2NrRGF0YX1gIHwgbnVsbFxuXHRleHBvcnQgY29uc3QgY0Jsb2NrRGF0YTogQ0Jsb2NrRGF0YVtdID0gW1xuXHRcdCdDL0lUMScsXG5cdFx0J0MvS2plbWkgMScsXG5cdFx0J0MvQmlvbG9naSAxJyxcblx0XHQnQy9NYXJrZWRzZsO4cmluZyBvZyBsZWRlbHNlIDEnLFxuXHRcdCdDL1JldHRzbMOmcmUgMScsXG5cdFx0J0MvU29zaW9sb2dpIG9nIHNvc2lhbGFudHJvcG9sb2dpJyxcblx0XHQnQy9GeXNpa2sgMicsXG5cdFx0J0MvU2FtZnVubnNmYWdsaWcgZW5nZWxzaycsXG5cdFx0J0MvU2FtZnVubnPDuGtvbm9taSAyJyxcblx0XHQnQy9Tb3NpYWxrdW5uc2thcCcsXG5cdFx0bnVsbCxcblx0XVxuXG5cdGV4cG9ydCB0eXBlIF9NZERCbG9ja0RhdGEgPVxuXHRcdHwgJ011c2lrayBmb3JkeXBuaW5nIDInXG5cdFx0fCAnVGVhdGVycHJvZHVrc2pvbiBvZyBmb3JkeXBuaW5nIDInXG5cdFx0fCAnU3BhbnNrIDErMidcblx0XHR8ICdUeXNrIDErMidcblx0XHR8ICdGcmFuc2sgMSsyJ1xuXG5cdGV4cG9ydCB0eXBlIE1kREJsb2NrRGF0YSA9IGBELyR7X01kREJsb2NrRGF0YX1gIHwgbnVsbFxuXHRleHBvcnQgY29uc3QgbWREQmxvY2tEYXRhID0gW1xuXHRcdCdEL011c2lrayBmb3JkeXBuaW5nIDInLFxuXHRcdCdEL1RlYXRlcnByb2R1a3Nqb24gb2cgZm9yZHlwbmluZyAyJyxcblx0XHQnRC9TcGFuc2sgMSsyJyxcblx0XHQnRC9UeXNrIDErMicsXG5cdFx0J0QvRnJhbnNrIDErMicsXG5cdFx0bnVsbCxcblx0XVxuXG5cdGV4cG9ydCB0eXBlIF9EQmxvY2tEYXRhID1cblx0XHR8IF9NZERCbG9ja0RhdGFcblx0XHR8ICdLamVtaSAxJ1xuXHRcdHwgJ0hpc3RvcmllIG9nIGZpbG9zb2ZpIDEnXG5cdFx0fCAnS29tbXVuaWthc2pvbiBvZyBrdWx0dXInXG5cdFx0fCAnU2FtZnVubnPDuGtvbm9taSAxJ1xuXHRcdHwgJ1RvcHBpZHJldHQgMSdcblx0XHR8ICdCaW9sb2dpIDInXG5cdFx0fCAnTWFya2Vkc2bDuHJpbmcgb2cgbGVkZWxzZSAyJ1xuXHRcdHwgJ1NwYW5zayAzJ1xuXHRcdHwgJ1RvcHBpZHJldHQgMidcblx0XHR8ICdLamVtaSAyJ1xuXHRleHBvcnQgdHlwZSBEQmxvY2tEYXRhID0gYEQvJHtfREJsb2NrRGF0YX1gIHwgbnVsbFxuXHRleHBvcnQgY29uc3QgZERhdGFCbG9jazogREJsb2NrRGF0YVtdID0gW1xuXHRcdCdEL0tqZW1pIDEnLFxuXHRcdCdEL0hpc3RvcmllIG9nIGZpbG9zb2ZpIDEnLFxuXHRcdCdEL0tvbW11bmlrYXNqb24gb2cga3VsdHVyJyxcblx0XHQnRC9TYW1mdW5uc8O4a29ub21pIDEnLFxuXHRcdCdEL1RvcHBpZHJldHQgMScsXG5cdFx0J0QvQmlvbG9naSAyJyxcblx0XHQnRC9NYXJrZWRzZsO4cmluZyBvZyBsZWRlbHNlIDInLFxuXHRcdCdEL1NwYW5zayAxKzInLFxuXHRcdCdEL1R5c2sgMSsyJyxcblx0XHQnRC9TcGFuc2sgMycsXG5cdFx0J0QvVG9wcGlkcmV0dCAyJyxcblx0XHQnRC9NdXNpa2sgZm9yZHlwbmluZyAyJyxcblx0XHQnRC9UZWF0ZXJwcm9kdWtzam9uIG9nIGZvcmR5cG5pbmcgMicsXG5cdFx0J0QvS2plbWkgMicsXG5cdFx0bnVsbCxcblx0XVxuXG5cdGV4cG9ydCB0eXBlIF9FQmxvY2tEYXRhID1cblx0XHR8ICdSMSdcblx0XHR8ICdTMSdcblx0XHR8ICdGeXNpa2sgMSdcblx0XHR8ICdFbmdlbHNrIDEnXG5cdFx0fCAnRW50cmVwcmVuw7hyc2thcCBvZyBiZWRyaWZ0c3V0dmlrbGluZyAxJ1xuXHRcdHwgJ1Nvc2lvbG9naSBvZyBzb3NpYWxhbnRyb3BvbG9naSdcblx0XHR8ICdQc3lrb2xvZ2kgMSdcblx0XHR8ICdSMidcblx0XHR8ICdTMidcblx0XHR8ICdLamVtaSAyJ1xuXHRcdHwgJ0dlb2ZhZyAyJ1xuXHRcdHwgJ0VuZ2Vsc2sgbGl0dGVyYXR1ciBvZyBrdWx0dXInXG5cdFx0fCAnw5hrb25vbWkgb2cgbGVkZWxzZSdcblx0XHR8ICdQc3lrb2xvZ2kgMidcblx0ZXhwb3J0IHR5cGUgRUJsb2NrRGF0YSA9IGBFLyR7X0VCbG9ja0RhdGF9YCB8IG51bGxcblx0ZXhwb3J0IGNvbnN0IGVCbG9ja0RhdGE6IEVCbG9ja0RhdGFbXSA9IFtcblx0XHQnRS9SMScsXG5cdFx0J0UvUzEnLFxuXHRcdCdFL0Z5c2lrayAxJyxcblx0XHQnRS9FbmdlbHNrIDEnLFxuXHRcdCdFL0VudHJlcHJlbsO4cnNrYXAgb2cgYmVkcmlmdHN1dHZpa2xpbmcgMScsXG5cdFx0J0UvU29zaW9sb2dpIG9nIHNvc2lhbGFudHJvcG9sb2dpJyxcblx0XHQnRS9Qc3lrb2xvZ2kgMScsXG5cdFx0J0UvUjInLFxuXHRcdCdFL1MyJyxcblx0XHQnRS9LamVtaSAyJyxcblx0XHQnRS9HZW9mYWcgMicsXG5cdFx0J0UvRW5nZWxzayBsaXR0ZXJhdHVyIG9nIGt1bHR1cicsXG5cdFx0J0Uvw5hrb25vbWkgb2cgbGVkZWxzZScsXG5cdFx0J0UvUHN5a29sb2dpIDInLFxuXHRcdG51bGwsXG5cdF1cblxuXHRleHBvcnQgdHlwZSBQcm9ncmFtID1cblx0XHR8IEFCbG9ja0RhdGFcblx0XHR8IEJCbG9ja0RhdGFcblx0XHR8IENCbG9ja0RhdGFcblx0XHR8IERCbG9ja0RhdGFcblx0XHR8IEVCbG9ja0RhdGFcblx0XHR8IG51bGxcbn1cblxuZXhwb3J0IGNvbnN0IGlzTWQgPSAodjogVXNlckNvbnRlbnRTZWxlY3Rvcik6IHYgaXMgTWQgPT5cblx0di5jbGFzcy5zdGFydHNXaXRoKCdNRCcpXG5leHBvcnQgY29uc3QgaXNNZDMgPSAodjogVXNlckNvbnRlbnRTZWxlY3Rvcik6IHYgaXMgTWQzID0+IHYuY2xhc3NbMl0gPT09ICczJ1xuZXhwb3J0IGNvbnN0IGlzTWRYID0gKHY6IFVzZXJDb250ZW50U2VsZWN0b3IpOiB2IGlzIE1kWCA9PiBpc01kKHYpICYmICFpc01kMyh2KVxuXG5leHBvcnQgY29uc3QgaXNTdDEgPSAodjogVXNlckNvbnRlbnRTZWxlY3Rvcik6IHYgaXMgU3QxID0+IHYuY2xhc3NbMF0gPT09ICcxJ1xuZXhwb3J0IGNvbnN0IGlzU3RYID0gKHY6IFVzZXJDb250ZW50U2VsZWN0b3IpOiB2IGlzIFN0WCA9PiAhaXNNZCh2KSAmJiAhaXNTdDEodilcblxuZXhwb3J0IHR5cGUgTWRYID0ge1xuXHRjbGFzczogTWRDbGFzc0ZhY3Rvcnk8MT4gfCBNZENsYXNzRmFjdG9yeTwyPlxuXHRsYW5ndWFnZTogTGFuZ3VhZ2UxXG59XG5leHBvcnQgdHlwZSBNZDMgPSB7XG5cdGNsYXNzOiBNZENsYXNzRmFjdG9yeTwzPlxuXHRsYW5ndWFnZTogTGFuZ3VhZ2VYXG5cblx0ZDogQmxvY2tEYXRhLk1kREJsb2NrRGF0YVxufVxuXG5leHBvcnQgdHlwZSBNZCA9IE1kWCB8IE1kM1xuXG5leHBvcnQgdHlwZSBTdDEgPSB7XG5cdGNsYXNzOiBTdENsYXNzRmFjdG9yeTwxPlxuXHRsYW5ndWFnZTogTGFuZ3VhZ2UxXG59XG5cbmV4cG9ydCB0eXBlIFN0WCA9IHtcblx0Y2xhc3M6IFN0Q2xhc3NGYWN0b3J5PDI+IHwgU3RDbGFzc0ZhY3Rvcnk8Mz5cblx0bGFuZ3VhZ2U6IExhbmd1YWdlWFxuXG5cdGE6IEJsb2NrRGF0YS5BQmxvY2tEYXRhXG5cdGI6IEJsb2NrRGF0YS5CQmxvY2tEYXRhXG5cdGM6IEJsb2NrRGF0YS5DQmxvY2tEYXRhXG5cdGQ6IEJsb2NrRGF0YS5EQmxvY2tEYXRhXG5cdGU6IEJsb2NrRGF0YS5FQmxvY2tEYXRhXG59XG5cbmV4cG9ydCB0eXBlIFVzZXJDb250ZW50U2VsZWN0b3IgPSBNZCB8IFN0MSB8IFN0WFxuXG5leHBvcnQgY29uc3QgZXh0cmFjdEdyYWRlID0gKF9jbGFzczogVXNlckNvbnRlbnRTZWxlY3RvclsnY2xhc3MnXSk6IEdyYWRlID0+XG5cdF9jbGFzcy5pbmRleE9mKCcxJykgPiAtMSA/IDEgOiBfY2xhc3MuaW5kZXhPZignMicpID4gLTEgPyAyIDogM1xuXG5jb25zdCBwcm9jZXNzID0gKHN0cjogc3RyaW5nKSA9PiBzdHIudG9Mb2NhbGVMb3dlckNhc2UoKS5yZXBsYWNlKC9cXHMrL2csICctJylcblxuZXhwb3J0IGNvbnN0IGNsYXNzVG9waWNLZXlHZW5lcmF0b3IgPSAoX2NsYXNzOiBVc2VyQ29udGVudFNlbGVjdG9yWydjbGFzcyddKSA9PlxuXHRgdG9waWMuY2xhc3MoJHtwcm9jZXNzKF9jbGFzcyl9KWBcbmV4cG9ydCBjb25zdCBsYW5ndWFnZVRvcGljS2V5R2VuZXJhdG9yID0gKGxhbmd1YWdlOiBMYW5ndWFnZVgsIGdyYWRlOiBHcmFkZSkgPT5cblx0bGFuZ3VhZ2UgJiYgYHRvcGljLmxhbmd1YWdlKCR7Z3JhZGV9LyR7cHJvY2VzcyhsYW5ndWFnZSl9KWBcbmV4cG9ydCBjb25zdCBwcm9ncmFtVG9waWNLZXlHZW5lcmF0b3IgPSAocHJvZ3JhbTogQmxvY2tEYXRhLlByb2dyYW0pID0+XG5cdHByb2dyYW0gPT09IG51bGwgPyBudWxsIDogYHRvcGljLnByb2dyYW0oJHtwcm9jZXNzKHByb2dyYW0pfSlgXG4iLCJpbXBvcnQgeyBEYXRhQmxvY2ssIFdlZWtCbG9jayB9IGZyb20gJ3R5cGluZ3MvdGltZWxpbmVEYXRhJ1xuaW1wb3J0IHsgZ2V0SW5pdGlhbFdlZWtEYXRhIH0gZnJvbSAnLi4vZ2V0SW5pdGlhbFdlZWtEYXRhJ1xuaW1wb3J0IHtcblx0c3R1ZHlCbG9jayxcblx0YmlvbG9neTIsXG5cdGdlcm1hbjEsXG5cdGd5bSxcblx0aXQxLFxuXHRoaXN0b3J5LFxuXHRpdDIsXG5cdG5vcndlZ2lhbixcblx0cGh5c2ljczEsXG59IGZyb20gJy4uL3Rlc3REYXRhJ1xuXG5leHBvcnQgY29uc3QgZ2V0RGF0YUZvclRvcGljQW5kV2VlayA9IGFzeW5jIChcblx0dG9waWM6IHN0cmluZyB8IG51bGwsXG5cdHdlZWs6IG51bWJlcixcbik6IFByb21pc2U8V2Vla0Jsb2NrPiA9PiB7XG5cdHN3aXRjaCAodG9waWMpIHtcblx0XHRjYXNlICd0b3BpYy5jbGFzcygyc3RkKSc6XG5cdFx0XHRyZXR1cm4gW1xuXHRcdFx0XHRbXSxcblx0XHRcdFx0W3N0dWR5QmxvY2ssIHN0dWR5QmxvY2ssIG5vcndlZ2lhbl0sXG5cdFx0XHRcdFtub3J3ZWdpYW4sIHN0dWR5QmxvY2ssIGhpc3RvcnldLFxuXHRcdFx0XHRbXSxcblx0XHRcdFx0W3N0dWR5QmxvY2ssIHN0dWR5QmxvY2ssIHN0dWR5QmxvY2ssIGd5bV0sXG5cdFx0XHRdXG5cblx0XHRjYXNlICd0b3BpYy5sYW5ndWFnZSgyL2dlcm1hbjEpJzpcblx0XHRcdHJldHVybiBbW3N0dWR5QmxvY2ssIGdlcm1hbjFdLCBbXSwgW10sIFtnZXJtYW4xXSwgW11dXG5cblx0XHRjYXNlICd0b3BpYy5wcm9ncmFtKGIvaXQyKSc6XG5cdFx0XHRyZXR1cm4gW1tdLCBbXSwgW10sIFtdLCBbXV1cblxuXHRcdGNhc2UgJ3RvcGljLnByb2dyYW0oYy9pdDEpJzpcblx0XHRcdHJldHVybiBbW2l0MV0sIFtdLCBbc3R1ZHlCbG9jaywgaXQxXSwgW10sIFtpdDFdXVxuXG5cdFx0Y2FzZSAndG9waWMucHJvZ3JhbShkL2Jpb2xvZ2ktMiknOlxuXHRcdFx0cmV0dXJuIFtcblx0XHRcdFx0W10sXG5cdFx0XHRcdFtiaW9sb2d5Ml0sXG5cdFx0XHRcdFtdLFxuXHRcdFx0XHRbc3R1ZHlCbG9jaywgYmlvbG9neTJdLFxuXHRcdFx0XHRbc3R1ZHlCbG9jaywgc3R1ZHlCbG9jaywgYmlvbG9neTJdLFxuXHRcdFx0XVxuXG5cdFx0Y2FzZSAndG9waWMucHJvZ3JhbShlL2Z5c2lray0xKSc6XG5cdFx0XHRyZXR1cm4gW1tdLCBbc3R1ZHlCbG9jaywgcGh5c2ljczFdLCBbXSwgW10sIFtzdHVkeUJsb2NrLCBwaHlzaWNzMV1dXG5cblx0XHRkZWZhdWx0OlxuXHRcdFx0cmV0dXJuIGdldEluaXRpYWxXZWVrRGF0YSgpXG5cdH1cbn1cbiIsImltcG9ydCB7IFdlZWtCbG9jaywgU3R1ZHlEYXRhQmxvY2ssIERhdGFCbG9jayB9IGZyb20gJ3R5cGluZ3MvdGltZWxpbmVEYXRhJ1xuaW1wb3J0IGNsb25lRGVlcCBmcm9tICdsb2Rhc2gvY2xvbmVEZWVwJ1xuXG5leHBvcnQgY29uc3Qgc3R1ZHlCbG9jazogU3R1ZHlEYXRhQmxvY2sgPSB7XG5cdHR5cGU6ICdzdHVkeScsXG59XG5cbmV4cG9ydCBjb25zdCBnZXREYXRhQmxvY2tQcmlvcml0eUluZGV4ID0gKGRhdGFCbG9jazogRGF0YUJsb2NrKTogbnVtYmVyID0+IHtcblx0c3dpdGNoIChkYXRhQmxvY2s/LnR5cGUpIHtcblx0XHRjYXNlICdjbGFzcyc6XG5cdFx0XHRyZXR1cm4gMSArIChkYXRhQmxvY2sucHJpb3JpdHlJbmNyZW1lbnQgfHwgMClcblx0XHRjYXNlICdzdHVkeSc6XG5cdFx0XHRyZXR1cm4gMCArIChkYXRhQmxvY2sucHJpb3JpdHlJbmNyZW1lbnQgfHwgMClcblx0XHRkZWZhdWx0OlxuXHRcdFx0cmV0dXJuIC0xXG5cdH1cbn1cblxuZXhwb3J0IGNvbnN0IG1lcmdlRGF0YUJsb2NrID0gKGQxOiBEYXRhQmxvY2ssIGQyOiBEYXRhQmxvY2spOiBEYXRhQmxvY2sgPT5cblx0Z2V0RGF0YUJsb2NrUHJpb3JpdHlJbmRleChkMikgPj0gZ2V0RGF0YUJsb2NrUHJpb3JpdHlJbmRleChkMSkgPyBkMiA6IGQxXG5cbmV4cG9ydCBjb25zdCBtZXJnZVdlZWtCbG9jayA9ICh3MTogV2Vla0Jsb2NrLCBfdzI6IFdlZWtCbG9jayk6IFdlZWtCbG9jayA9PiB7XG5cdGNvbnN0IGludGVybmFsID0gY2xvbmVEZWVwKHcxKVxuXHRjb25zdCB3MiA9IGNsb25lRGVlcChfdzIpXG5cblx0Zm9yIChsZXQgZGF5SW5kZXggPSAwOyBkYXlJbmRleCA8IHcyLmxlbmd0aDsgZGF5SW5kZXgrKykge1xuXHRcdGNvbnN0IGRheSA9IHcyW2RheUluZGV4XVxuXG5cdFx0Zm9yIChsZXQgbGVzc29uSW5kZXggPSAwOyBsZXNzb25JbmRleCA8IGRheS5sZW5ndGg7IGxlc3NvbkluZGV4KyspIHtcblx0XHRcdGNvbnN0IGxlc3NvbiA9IGRheVtsZXNzb25JbmRleF1cblxuXHRcdFx0aWYgKGxlc3Nvbilcblx0XHRcdFx0aW50ZXJuYWxbZGF5SW5kZXhdW2xlc3NvbkluZGV4XSA9IG1lcmdlRGF0YUJsb2NrKFxuXHRcdFx0XHRcdHcxW2RheUluZGV4XVtsZXNzb25JbmRleF0sXG5cdFx0XHRcdFx0bGVzc29uLFxuXHRcdFx0XHQpXG5cdFx0fVxuXHR9XG5cblx0cmV0dXJuIGludGVybmFsXG59XG4iLCJpbXBvcnQgeyBXZWVrQmxvY2sgfSBmcm9tICd0eXBpbmdzL3RpbWVsaW5lRGF0YSdcbmltcG9ydCB7XG5cdFVzZXJDb250ZW50U2VsZWN0b3IsXG5cdGlzU3RYLFxuXHRjbGFzc1RvcGljS2V5R2VuZXJhdG9yLFxuXHRsYW5ndWFnZVRvcGljS2V5R2VuZXJhdG9yLFxuXHRwcm9ncmFtVG9waWNLZXlHZW5lcmF0b3IsXG5cdGV4dHJhY3RHcmFkZSxcbn0gZnJvbSAndHlwaW5ncy91c2VyQ29udGVudFNlbGVjdG9yJ1xuaW1wb3J0IHsgbWVtb2l6ZUFzeW5jIH0gZnJvbSAnLi9tZW1vaXplQXN5bmMnXG5pbXBvcnQgeyBnZXRJbml0aWFsV2Vla0RhdGEgfSBmcm9tICcuL2dldEluaXRpYWxXZWVrRGF0YSdcbmltcG9ydCB7IGdldERhdGFGb3JUb3BpY0FuZFdlZWsgfSBmcm9tICcuL2dldERhdGFGb3JUb3BpY0FuZFdlZWsnXG5pbXBvcnQgeyBtZXJnZVdlZWtCbG9jayB9IGZyb20gJy4vZGF0YU1lcmdpbmcnXG5cbmV4cG9ydCBjb25zdCBkb0NsYXNzU2VsZWN0b3JRdWVyeSA9IG1lbW9pemVBc3luYyhcblx0YXN5bmMgKHNlbGVjdG9yOiBVc2VyQ29udGVudFNlbGVjdG9yLCB3ZWVrOiBudW1iZXIpOiBQcm9taXNlPFdlZWtCbG9jaz4gPT4ge1xuXHRcdGxldCBiYXNlQmxvY2s6IFdlZWtCbG9jayA9IGdldEluaXRpYWxXZWVrRGF0YSgpXG5cblx0XHRiYXNlQmxvY2sgPSBtZXJnZVdlZWtCbG9jayhcblx0XHRcdGJhc2VCbG9jayxcblx0XHRcdGF3YWl0IGdldERhdGFGb3JUb3BpY0FuZFdlZWsoXG5cdFx0XHRcdGNsYXNzVG9waWNLZXlHZW5lcmF0b3Ioc2VsZWN0b3IuY2xhc3MpLFxuXHRcdFx0XHR3ZWVrLFxuXHRcdFx0KSxcblx0XHQpXG5cblx0XHRiYXNlQmxvY2sgPSBtZXJnZVdlZWtCbG9jayhcblx0XHRcdGJhc2VCbG9jayxcblx0XHRcdGF3YWl0IGdldERhdGFGb3JUb3BpY0FuZFdlZWsoXG5cdFx0XHRcdGxhbmd1YWdlVG9waWNLZXlHZW5lcmF0b3IoXG5cdFx0XHRcdFx0c2VsZWN0b3IubGFuZ3VhZ2UsXG5cdFx0XHRcdFx0ZXh0cmFjdEdyYWRlKHNlbGVjdG9yWydjbGFzcyddKSxcblx0XHRcdFx0KSxcblx0XHRcdFx0d2Vlayxcblx0XHRcdCksXG5cdFx0KVxuXG5cdFx0Ly8gcHJldHRpZXItaWdub3JlXG5cdFx0aWYgKGlzU3RYKHNlbGVjdG9yKSkge1xuXHRcdGJhc2VCbG9jayA9IG1lcmdlV2Vla0Jsb2NrKGJhc2VCbG9jaywgYXdhaXQgZ2V0RGF0YUZvclRvcGljQW5kV2Vlayhwcm9ncmFtVG9waWNLZXlHZW5lcmF0b3Ioc2VsZWN0b3IuYSksIHdlZWspKVxuXHRcdGJhc2VCbG9jayA9IG1lcmdlV2Vla0Jsb2NrKGJhc2VCbG9jaywgYXdhaXQgZ2V0RGF0YUZvclRvcGljQW5kV2Vlayhwcm9ncmFtVG9waWNLZXlHZW5lcmF0b3Ioc2VsZWN0b3IuYiksIHdlZWspKVxuXHRcdGJhc2VCbG9jayA9IG1lcmdlV2Vla0Jsb2NrKGJhc2VCbG9jaywgYXdhaXQgZ2V0RGF0YUZvclRvcGljQW5kV2Vlayhwcm9ncmFtVG9waWNLZXlHZW5lcmF0b3Ioc2VsZWN0b3IuYyksIHdlZWspKVxuXHRcdGJhc2VCbG9jayA9IG1lcmdlV2Vla0Jsb2NrKGJhc2VCbG9jaywgYXdhaXQgZ2V0RGF0YUZvclRvcGljQW5kV2Vlayhwcm9ncmFtVG9waWNLZXlHZW5lcmF0b3Ioc2VsZWN0b3IuZCksIHdlZWspKVxuXHRcdGJhc2VCbG9jayA9IG1lcmdlV2Vla0Jsb2NrKGJhc2VCbG9jaywgYXdhaXQgZ2V0RGF0YUZvclRvcGljQW5kV2Vlayhwcm9ncmFtVG9waWNLZXlHZW5lcmF0b3Ioc2VsZWN0b3IuZSksIHdlZWspKVxuXHR9XG5cblx0XHRyZXR1cm4gYmFzZUJsb2NrXG5cdH0sXG4pXG4iLCJpbXBvcnQgeyBXZWVrQmxvY2sgfSBmcm9tICd0eXBpbmdzL3RpbWVsaW5lRGF0YSdcbmltcG9ydCB7IGdldEluaXRpYWxXZWVrRGF0YSB9IGZyb20gJy4vZ2V0SW5pdGlhbFdlZWtEYXRhJ1xuXG5leHBvcnQgeyBnZXREYXRhRm9yVG9waWNBbmRXZWVrIH0gZnJvbSAnLi9fX21vY2tzX18vZ2V0RGF0YUZvclRvcGljQW5kV2Vlaydcbi8vIGV4cG9ydCBjb25zdCBnZXREYXRhRm9yVG9waWNBbmRXZWVrID0gYXN5bmMgKFxuLy8gXHR0b3BpYzogc3RyaW5nIHwgbnVsbCxcbi8vIFx0d2VlazogbnVtYmVyLFxuLy8gKTogUHJvbWlzZTxXZWVrQmxvY2s+ID0+IHtcbi8vIFx0aWYgKHRvcGljID09PSBudWxsKSByZXR1cm4gZ2V0SW5pdGlhbFdlZWtEYXRhKClcblxuLy8gXHR0aHJvdyBuZXcgRXJyb3IoJ0Z1bmN0aW9uIG5vdCBpbXBsZW1lbnRlZC4nKVxuLy8gfVxuIiwiaW1wb3J0IHsgV2Vla0Jsb2NrIH0gZnJvbSAndHlwaW5ncy90aW1lbGluZURhdGEnXG5pbXBvcnQgeyBzdHVkeUJsb2NrIH0gZnJvbSAnLi9kYXRhTWVyZ2luZydcblxuZXhwb3J0IGNvbnN0IGdldEluaXRpYWxXZWVrRGF0YSA9ICgpOiBXZWVrQmxvY2sgPT4gW1xuXHRbc3R1ZHlCbG9jaywgc3R1ZHlCbG9jaywgc3R1ZHlCbG9jaywgc3R1ZHlCbG9ja10sXG5cdFtzdHVkeUJsb2NrLCBzdHVkeUJsb2NrLCBzdHVkeUJsb2NrLCBzdHVkeUJsb2NrXSxcblx0W3N0dWR5QmxvY2ssIHN0dWR5QmxvY2ssIHN0dWR5QmxvY2ssIHN0dWR5QmxvY2tdLFxuXHRbc3R1ZHlCbG9jaywgc3R1ZHlCbG9jaywgc3R1ZHlCbG9jaywgc3R1ZHlCbG9ja10sXG5cdFtzdHVkeUJsb2NrLCBzdHVkeUJsb2NrLCBzdHVkeUJsb2NrLCBzdHVkeUJsb2NrXSxcbl1cbiIsImV4cG9ydCBjb25zdCBtZW1vaXplQXN5bmMgPSA8UmV0LCBBcmdzIGV4dGVuZHMgYW55W10+KFxuXHRmbjogKC4uLmFyZ3M6IEFyZ3MpID0+IFByb21pc2U8UmV0Pixcblx0a2V5R2VuOiAoLi4uYXJnczogQXJncykgPT4gc3RyaW5nIHwgbnVtYmVyIHwgc3ltYm9sID0gKC4uLmFyZ3MpID0+XG5cdFx0SlNPTi5zdHJpbmdpZnkoYXJncyksXG4pID0+IHtcblx0Y29uc3QgbWVtbzogUmVjb3JkPHN0cmluZyB8IG51bWJlciB8IHN5bWJvbCwgUmV0PiA9IHt9XG5cdGNvbnN0IHByb2Nlc3NRdWV1ZTogUmVjb3JkPFxuXHRcdHN0cmluZyB8IG51bWJlciB8IHN5bWJvbCxcblx0XHRbcmVzb2x2ZTogKHZhbDogUmV0KSA9PiB2b2lkLCByZWplY3Q6IChyZWFzb246IGFueSkgPT4gdm9pZF1bXVxuXHQ+ID0ge31cblxuXHRyZXR1cm4gKC4uLmFyZ3M6IEFyZ3MpOiBQcm9taXNlPFJldD4gPT4ge1xuXHRcdGNvbnN0IGxvb2t1cFZhbHVlID0ga2V5R2VuKC4uLmFyZ3MpXG5cblx0XHRpZiAobWVtby5oYXNPd25Qcm9wZXJ0eShsb29rdXBWYWx1ZSkpXG5cdFx0XHRyZXR1cm4gUHJvbWlzZS5yZXNvbHZlKG1lbW9bbG9va3VwVmFsdWVdKVxuXG5cdFx0aWYgKHByb2Nlc3NRdWV1ZS5oYXNPd25Qcm9wZXJ0eShsb29rdXBWYWx1ZSkpXG5cdFx0XHRyZXR1cm4gbmV3IFByb21pc2U8UmV0PigocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG5cdFx0XHRcdHByb2Nlc3NRdWV1ZVtsb29rdXBWYWx1ZV0ucHVzaChbcmVzb2x2ZSwgcmVqZWN0XSlcblx0XHRcdH0pXG5cblx0XHRwcm9jZXNzUXVldWVbbG9va3VwVmFsdWVdID0gW11cblxuXHRcdHJldHVybiBmbiguLi5hcmdzKVxuXHRcdFx0LmNhdGNoKChyZWFzb24pID0+IHtcblx0XHRcdFx0Zm9yIChjb25zdCBbLCByZWplY3RdIG9mIHByb2Nlc3NRdWV1ZVtsb29rdXBWYWx1ZV0pIHtcblx0XHRcdFx0XHRyZWplY3QocmVhc29uKVxuXHRcdFx0XHR9XG5cblx0XHRcdFx0dGhyb3cgcmVhc29uXG5cdFx0XHR9KVxuXHRcdFx0LnRoZW4oKHZhbHVlKSA9PiB7XG5cdFx0XHRcdGZvciAoY29uc3QgW3Jlc29sdmVdIG9mIHByb2Nlc3NRdWV1ZVtsb29rdXBWYWx1ZV0pIHtcblx0XHRcdFx0XHRyZXNvbHZlKHZhbHVlKVxuXHRcdFx0XHR9XG5cblx0XHRcdFx0bWVtb1tsb29rdXBWYWx1ZV0gPSB2YWx1ZVxuXG5cdFx0XHRcdHJldHVybiB2YWx1ZVxuXHRcdFx0fSlcblx0XHRcdC5maW5hbGx5KCgpID0+IGRlbGV0ZSBwcm9jZXNzUXVldWVbbG9va3VwVmFsdWVdKVxuXHR9XG59XG4iLCJpbXBvcnQgeyBEYXRhQmxvY2sgfSBmcm9tICd0eXBpbmdzL3RpbWVsaW5lRGF0YSdcblxuZXhwb3J0IGNvbnN0IHN0dWR5QmxvY2s6IERhdGFCbG9jayA9IHtcblx0dHlwZTogJ3N0dWR5Jyxcbn1cblxuZXhwb3J0IGNvbnN0IGNsYXNzQmxvY2s6IERhdGFCbG9jayA9IHtcblx0dHlwZTogJ2NsYXNzJyxcblx0Y2xhc3NOYW1lOiAnU3ViamVjdDEnLFxuXHRob21ld29yazogW10sXG5cdHJvb21JZGVudGlmaWVyOiAnUjAwNycsXG59XG5cbmV4cG9ydCBjb25zdCBjbGFzc0FsdEJsb2NrOiBEYXRhQmxvY2sgPSB7XG5cdHR5cGU6ICdjbGFzcycsXG5cdGNsYXNzTmFtZTogJ1N1YmplY3QyJyxcblx0aG9tZXdvcms6IFtdLFxuXHRyb29tSWRlbnRpZmllcjogJ0dZTVNBTCcsXG59XG5cbmV4cG9ydCBjb25zdCBwcmlvcml0eUJsb2NrOiBEYXRhQmxvY2sgPSB7XG5cdHR5cGU6ICdjbGFzcycsXG5cdGNsYXNzTmFtZTogJ1N1YmplY3QnLFxuXHRob21ld29yazogW10sXG5cdHJvb21JZGVudGlmaWVyOiAnUjAwNycsXG5cblx0cHJpb3JpdHlJbmNyZW1lbnQ6IDEsXG59XG5cbi8vIHByZXR0aWVyLWlnbm9yZVxuZXhwb3J0IGNvbnN0IGhpc3Rvcnk6IERhdGFCbG9jayA9IHsgY2xhc3NOYW1lOiAnSGlzdG9yeScsIGhvbWV3b3JrOiBbXSwgcm9vbUlkZW50aWZpZXI6ICdSMTY3JywgdHlwZTogJ2NsYXNzJyB9XG4vLyBwcmV0dGllci1pZ25vcmVcbmV4cG9ydCBjb25zdCBneW06IERhdGFCbG9jayA9IHsgY2xhc3NOYW1lOiAnR3ltJywgaG9tZXdvcms6IFtdLCByb29tSWRlbnRpZmllcjogJ0d5bXNhbC9VdGUnLCB0eXBlOiAnY2xhc3MnIH1cbi8vIHByZXR0aWVyLWlnbm9yZVxuZXhwb3J0IGNvbnN0IG5vcndlZ2lhbjogRGF0YUJsb2NrID0geyBjbGFzc05hbWU6ICdOb3JzaycsIGhvbWV3b3JrOiBbXSwgcm9vbUlkZW50aWZpZXI6ICdSMTYyJywgdHlwZTogJ2NsYXNzJyB9XG4vLyBwcmV0dGllci1pZ25vcmVcbmV4cG9ydCBjb25zdCBnZXJtYW4xOiBEYXRhQmxvY2sgPSB7IGNsYXNzTmFtZTogJ1R5c2sxJywgaG9tZXdvcms6IFtdLCByb29tSWRlbnRpZmllcjogJ1IxNjcnLCB0eXBlOiAnY2xhc3MnIH1cbi8vIHByZXR0aWVyLWlnbm9yZVxuZXhwb3J0IGNvbnN0IGl0MjogRGF0YUJsb2NrID0geyBjbGFzc05hbWU6ICdJVDInLCBob21ld29yazogW10sIHJvb21JZGVudGlmaWVyOiAnUjE2NycsIHR5cGU6ICdjbGFzcycgfVxuLy8gcHJldHRpZXItaWdub3JlXG5leHBvcnQgY29uc3QgaXQxOiBEYXRhQmxvY2sgPSB7IGNsYXNzTmFtZTogJ0lUMScsIGhvbWV3b3JrOiBbXSwgcm9vbUlkZW50aWZpZXI6ICdSMDAxJywgdHlwZTogJ2NsYXNzJyB9XG4vLyBwcmV0dGllci1pZ25vcmVcbmV4cG9ydCBjb25zdCBiaW9sb2d5MjogRGF0YUJsb2NrID0geyBjbGFzc05hbWU6ICdCaW9sb2dpMicsIGhvbWV3b3JrOiBbXSwgcm9vbUlkZW50aWZpZXI6ICdSMjExJywgdHlwZTogJ2NsYXNzJyB9XG4vLyBwcmV0dGllci1pZ25vcmVcbmV4cG9ydCBjb25zdCBwaHlzaWNzMTogRGF0YUJsb2NrID0geyBjbGFzc05hbWU6ICdGeXNpa2sxJywgaG9tZXdvcms6IFtdLCByb29tSWRlbnRpZmllcjogJ1IyMDInLCB0eXBlOiAnY2xhc3MnIH1cbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBlbW90aW9uL3N0eWxlZFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbXVpL2ljb25zLW1hdGVyaWFsL0V4cGFuZE1vcmVcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG11aS9pY29ucy1tYXRlcmlhbC9LZXlib2FyZEFycm93TGVmdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbXVpL2ljb25zLW1hdGVyaWFsL0tleWJvYXJkQXJyb3dSaWdodFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbXVpL21hdGVyaWFsXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtdWkvbWF0ZXJpYWwvQm94XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtdWkvbWF0ZXJpYWwvQ2FyZFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbXVpL21hdGVyaWFsL0NhcmRBY3Rpb25zXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtdWkvbWF0ZXJpYWwvQ2FyZENvbnRlbnRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG11aS9tYXRlcmlhbC9DYXJkSGVhZGVyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtdWkvbWF0ZXJpYWwvQ2hlY2tib3hcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG11aS9tYXRlcmlhbC9Db2xsYXBzZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbXVpL21hdGVyaWFsL0ljb25CdXR0b25cIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG11aS9tYXRlcmlhbC9TdGFja1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbXVpL21hdGVyaWFsL1R5cG9ncmFwaHlcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG11aS9tYXRlcmlhbC9zdHlsZXNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG11aS9tYXRlcmlhbC91c2VNZWRpYVF1ZXJ5XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtdWkvc3lzdGVtXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImZpcmViYXNlL2F1dGhcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZmlyZWJhc2UvZmlyZXN0b3JlXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImxvZGFzaC9jbG9uZURlZXBcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9oZWFkXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LXN3aXBlYWJsZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC11c2VcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIpOyJdLCJuYW1lcyI6WyJUeXBvZ3JhcGh5IiwiUmVhY3QiLCJ1c2VTdGF0ZSIsIkV4cGFuZE1vcmVJY29uIiwiU3RhY2siLCJIb21ld29yayIsIkRpc2FibGVkQm94IiwiQ2FyZEhlYWRlciIsIkNhcmRDb250ZW50IiwiQ29sbGFwc2UiLCJDYXJkQWN0aW9ucyIsIkljb25CdXR0b24iLCJzdHlsZWQiLCJtdWlTdHlsZWQiLCJTdHlsZWRDYXJkIiwiQ2xhc3MiLCJjbGFzc05hbWUiLCJyb29tSWRlbnRpZmllciIsImhvbWV3b3JrIiwiZXhwYW5kZWQiLCJzZXRFeHBhbmRlZCIsInZhcmlhbnQiLCJmb250V2VpZ2h0IiwibGVuZ3RoIiwibWFwIiwiaWQiLCJpbmRleCIsIkV4cGFuZE1vcmUiLCJwcm9wcyIsImV4cGFuZCIsIm90aGVyIiwidGhlbWUiLCJ0cmFuc2Zvcm0iLCJtYXJnaW5MZWZ0IiwidHJhbnNpdGlvbiIsInRyYW5zaXRpb25zIiwiY3JlYXRlIiwiZHVyYXRpb24iLCJzaG9ydGVzdCIsIkJsb2NrIiwiZGl2IiwiU3R5bGVkQ2FyZEFjdGlvbnMiLCJTdHlsZWRDYXJkQ29udGVudCIsIkJveCIsIlN0dWR5IiwiU3R1ZHlDYXJkIiwicGFsZXR0ZSIsInRleHQiLCJkaXNhYmxlZCIsIkNoZWNrQm94IiwiQ2FyZCIsInVzZVVzZXIiLCJ1c2VBc3NpZ25tZW50RGF0YSIsIkhvbWV3b3JrQnlWYWx1ZSIsImRvbmUiLCJfZG9uZSIsInVzZXIiLCJzZXRVc2VyIiwidHlwZSIsImFzc2lnbm1lbnREYXRhIiwibmFtZSIsIm1lc3NhZ2UiLCJkYXRhIiwidmFsdWUiLCJjb25zb2xlIiwibG9nIiwidXNlQ2hlY2tib3hDb2xvciIsInByaW1hcnkiLCJTdHlsZWRDaGVja0JveCIsImNyZWF0ZUNvbnRleHQiLCJ1c2VDb250ZXh0IiwiZ2V0V2VlayIsImN1cnJlbnRXZWVrQ29udGV4dCIsInVuZGVmaW5lZCIsInVzZUN1cnJlbnRXZWVrIiwiQ3VycmVudFdlZWtQcm92aWRlciIsImNoaWxkcmVuIiwiRGF0ZSIsInVzZVJlZHVjZXIiLCJ1c2VNYXAiLCJjbG9uZURlZXAiLCJnZXRJbml0aWFsV2Vla0RhdGEiLCJtb2NrQXNzaWdubWVudERhdGEiLCJhIiwiZ3JhZGluZ01ldGhvZCIsImR1ZSIsImIiLCJjIiwiYzIiLCJjMyIsImM0IiwiZCIsImFzc2lnbm1lbnREYXRhQ29udGV4dCIsIm1vY2tXZWVrRGF0YSIsIndlZWtEYXRhQ29udGV4dCIsInVzZVdlZWtEYXRhIiwiQXNzaWdubWVudERhdGFQcm92aWRlciIsIndlZWtSZWR1Y2VyIiwic3RhdGUiLCJhY3Rpb24iLCJjbG9uZSIsImRheUluZGV4IiwibGVzc29uSW5kZXgiLCJ2IiwiV2Vla0RhdGFQcm92aWRlciIsImxvYWRpbmdDb250ZXh0IiwidXNlTG9hZGluZyIsIkxvYWRpbmdQcm92aWRlciIsImxvYWRpbmciLCJzZXRMb2FkaW5nIiwidXNlTWVkaWFRdWVyeSIsInVzZUVmZmVjdCIsInVzZU1lbW8iLCJ1c2VDYWxsYmFjayIsInVzZVJlZiIsInVzZURlYm91bmNlIiwiY29sbGVjdGlvbiIsInNldERvYyIsImRvYyIsImdldEZpcmVzdG9yZSIsImdldERvYyIsIm9uU25hcHNob3QiLCJnZXRBdXRoIiwib25BdXRoU3RhdGVDaGFuZ2VkIiwiZG9DbGFzc1NlbGVjdG9yUXVlcnkiLCJtb2NrVXNlciIsInVzZXJDb250ZXh0IiwiVXNlclByb3ZpZGVyIiwiam9iIiwicHJlZmVyc0RhcmtNb2RlIiwiXzEiLCJfMiIsImRpc3BhdGNoIiwiY3VycmVudFdlZWsiLCJhbm9uVXNlciIsImNsYXNzIiwic2VsZWN0b3IiLCJsYW5ndWFnZSIsInBlcmZvcm1VcGRhdGUiLCJ1aWQiLCJnZXREYXRhUmVmIiwibG9jYWxTdG9yYWdlIiwic3RyIiwiZ2V0SXRlbSIsIkpTT04iLCJwYXJzZSIsInVuc3ViIiwic2lnbmVkSW4iLCJyZWRvIiwicmVzdWx0IiwiZXhpc3RzIiwiZXJyb3IiLCJzZXRJdGVtIiwic3RyaW5naWZ5Iiwic25hcHNob3QiLCJjdXJyZW50Iiwic2V0VGltZW91dCIsImUiLCJjbGVhclRpbWVvdXQiLCJ0cmFuc2Zvcm1EYXkiLCJkYXkiLCJIZWFkIiwidXNlU3dpcGVhYmxlIiwiS2V5Ym9hcmRBcnJvd1JpZ2h0SWNvbiIsIktleWJvYXJkQXJyb3dMZWZ0SWNvbiIsIkhvbWUiLCJ3ZWVrRGF0YSIsInZpZXdpbmdDdXJyZW50V2VlayIsInNldFZpZXdpbmdDdXJyZW50V2VlayIsInNldEN1cnJlbnRXZWVrIiwiaXNNb2JpbGUiLCJvcGFjaXR5Iiwia2V5IiwieGwiLCJsIiwiaSIsIkhvbWVNb2JpbGUiLCJzZXREYXkiLCJkYXlTd2lwZUhhbmRsZXJzIiwib25Td2lwZWRSaWdodCIsImV2ZW50RGF0YSIsIm9uU3dpcGVkTGVmdCIsInRleHRBbGlnbiIsIlN0eWxlZFR5cG9ncmFwaHkiLCJXZWVrQ29udHJvbCIsIk1haW5Db250YWluZXIiLCJQcmltYXJ5Qm94IiwiU2Vjb25kYXJ5Qm94Iiwic2Vjb25kYXJ5IiwibGFuZ3VhZ2UxIiwibGFuZ3VhZ2VYIiwic3RDbGFzc0ZhY3RvcnkiLCJtZENsYXNzRmFjdG9yeSIsImFCbG9ja0RhdGEiLCJiQmxvY2tEYXRhIiwiY0Jsb2NrRGF0YSIsIm1kREJsb2NrRGF0YSIsImREYXRhQmxvY2siLCJlQmxvY2tEYXRhIiwiQmxvY2tEYXRhIiwiaXNNZCIsInN0YXJ0c1dpdGgiLCJpc01kMyIsImlzTWRYIiwiaXNTdDEiLCJpc1N0WCIsImV4dHJhY3RHcmFkZSIsIl9jbGFzcyIsImluZGV4T2YiLCJwcm9jZXNzIiwidG9Mb2NhbGVMb3dlckNhc2UiLCJyZXBsYWNlIiwiY2xhc3NUb3BpY0tleUdlbmVyYXRvciIsImxhbmd1YWdlVG9waWNLZXlHZW5lcmF0b3IiLCJncmFkZSIsInByb2dyYW1Ub3BpY0tleUdlbmVyYXRvciIsInByb2dyYW0iLCJzdHVkeUJsb2NrIiwiYmlvbG9neTIiLCJnZXJtYW4xIiwiZ3ltIiwiaXQxIiwiaGlzdG9yeSIsIm5vcndlZ2lhbiIsInBoeXNpY3MxIiwiZ2V0RGF0YUZvclRvcGljQW5kV2VlayIsInRvcGljIiwid2VlayIsImdldERhdGFCbG9ja1ByaW9yaXR5SW5kZXgiLCJkYXRhQmxvY2siLCJwcmlvcml0eUluY3JlbWVudCIsIm1lcmdlRGF0YUJsb2NrIiwiZDEiLCJkMiIsIm1lcmdlV2Vla0Jsb2NrIiwidzEiLCJfdzIiLCJpbnRlcm5hbCIsIncyIiwibGVzc29uIiwibWVtb2l6ZUFzeW5jIiwiYmFzZUJsb2NrIiwiZm4iLCJrZXlHZW4iLCJhcmdzIiwibWVtbyIsInByb2Nlc3NRdWV1ZSIsImxvb2t1cFZhbHVlIiwiaGFzT3duUHJvcGVydHkiLCJQcm9taXNlIiwicmVzb2x2ZSIsInJlamVjdCIsInB1c2giLCJjYXRjaCIsInJlYXNvbiIsInRoZW4iLCJmaW5hbGx5IiwiY2xhc3NCbG9jayIsImNsYXNzQWx0QmxvY2siLCJwcmlvcml0eUJsb2NrIiwiaXQyIl0sInNvdXJjZVJvb3QiOiIifQ==