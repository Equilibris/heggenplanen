"use strict";
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./typings/userContentSelector.ts":
/*!****************************************!*\
  !*** ./typings/userContentSelector.ts ***!
  \****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "language1": function() { return /* binding */ language1; },
/* harmony export */   "languageX": function() { return /* binding */ languageX; },
/* harmony export */   "stClassFactory": function() { return /* binding */ stClassFactory; },
/* harmony export */   "mdClassFactory": function() { return /* binding */ mdClassFactory; },
/* harmony export */   "BlockData": function() { return /* binding */ BlockData; },
/* harmony export */   "isMd": function() { return /* binding */ isMd; },
/* harmony export */   "isMd3": function() { return /* binding */ isMd3; },
/* harmony export */   "isMdX": function() { return /* binding */ isMdX; },
/* harmony export */   "isSt1": function() { return /* binding */ isSt1; },
/* harmony export */   "isStX": function() { return /* binding */ isStX; },
/* harmony export */   "extractGrade": function() { return /* binding */ extractGrade; },
/* harmony export */   "classTopicKeyGenerator": function() { return /* binding */ classTopicKeyGenerator; },
/* harmony export */   "languageTopicKeyGenerator": function() { return /* binding */ languageTopicKeyGenerator; },
/* harmony export */   "programTopicKeyGenerator": function() { return /* binding */ programTopicKeyGenerator; }
/* harmony export */ });
/* module decorator */ module = __webpack_require__.hmd(module);
var language1 = ['German1', 'German2', 'Spanish1', 'Spanish2', 'French1', 'French2', 'Sami'];
var languageX = [].concat(language1, ['German1+2', 'German3', 'Spanish1+2', 'Spanish3', 'French1+2', 'French3', null]);
var stClassFactory = function stClassFactory(v) {
  return ["".concat(v, "STA"), "".concat(v, "STB"), "".concat(v, "STC"), "".concat(v, "STD"), "".concat(v, "STE"), "".concat(v, "STF")];
};
var mdClassFactory = function mdClassFactory(v) {
  return ["MMA".concat(v), "MDA".concat(v)];
};
var BlockData;

(function (_BlockData) {
  var aBlockData = _BlockData.aBlockData = ['A/P2', null];
  var bBlockData = _BlockData.bBlockData = ['B/R1', 'B/S1', 'B/Fysikk 1', 'B/Geofag 1', 'B/Engelsk 1', 'B/Økonomistyring', 'B/Samfunns-geografi', 'B/R2', 'B/S2', 'B/IT2', 'B/Poilitikk og menneskerettigheter', 'B/Entreprenørskap og bedriftsutvikling 2', 'B/Rettslære 2', null];
  var cBlockData = _BlockData.cBlockData = ['C/IT1', 'C/Kjemi 1', 'C/Biologi 1', 'C/Markedsføring og ledelse 1', 'C/Rettslære 1', 'C/Sosiologi og sosialantropologi', 'C/Fysikk 2', 'C/Samfunnsfaglig engelsk', 'C/Samfunnsøkonomi 2', 'C/Sosialkunnskap', null];
  var mdDBlockData = _BlockData.mdDBlockData = ['D/Musikk fordypning 2', 'D/Teaterproduksjon og fordypning 2', 'D/Spansk 1+2', 'D/Tysk 1+2', 'D/Fransk 1+2', null];
  var dDataBlock = _BlockData.dDataBlock = ['D/Kjemi 1', 'D/Historie og filosofi 1', 'D/Kommunikasjon og kultur', 'D/Samfunnsøkonomi 1', 'D/Toppidrett 1', 'D/Biologi 2', 'D/Markedsføring og ledelse 2', 'D/Spansk 1+2', 'D/Tysk 1+2', 'D/Spansk 3', 'D/Toppidrett 2', 'D/Musikk fordypning 2', 'D/Teaterproduksjon og fordypning 2', 'D/Kjemi 2', null];
  var eBlockData = _BlockData.eBlockData = ['E/R1', 'E/S1', 'E/Fysikk 1', 'E/Engelsk 1', 'E/Entreprenørskap og bedriftsutvikling 1', 'E/Sosiologi og sosialantropologi', 'E/Psykologi 1', 'E/R2', 'E/S2', 'E/Kjemi 2', 'E/Geofag 2', 'E/Engelsk litteratur og kultur', 'E/Økonomi og ledelse', 'E/Psykologi 2', null];
})(BlockData || (BlockData = {}));

var isMd = function isMd(v) {
  return v["class"].startsWith('MD');
};
var isMd3 = function isMd3(v) {
  return v["class"][2] === '3';
};
var isMdX = function isMdX(v) {
  return isMd(v) && !isMd3(v);
};
var isSt1 = function isSt1(v) {
  return v["class"][0] === '1';
};
var isStX = function isStX(v) {
  return !isMd(v) && !isSt1(v);
};
var extractGrade = function extractGrade(_class) {
  return _class.indexOf('1') > -1 ? 1 : _class.indexOf('2') > -1 ? 2 : 3;
};

var process = function process(str) {
  return str.toLocaleLowerCase().replace(/\s+/g, '-');
};

var classTopicKeyGenerator = function classTopicKeyGenerator(_class) {
  return "topic.class(".concat(process(_class), ")");
};
var languageTopicKeyGenerator = function languageTopicKeyGenerator(language, grade) {
  return language && "topic.language(".concat(grade, "/").concat(process(language), ")");
};
var programTopicKeyGenerator = function programTopicKeyGenerator(program) {
  return program === null ? null : "topic.program(".concat(process(program), ")");
};

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvX2FwcC5jYmNkYjliNzEzN2I2MDk3ZjEwOS5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVdPLElBQU1BLFNBQXNCLEdBQUcsQ0FDckMsU0FEcUMsRUFFckMsU0FGcUMsRUFHckMsVUFIcUMsRUFJckMsVUFKcUMsRUFLckMsU0FMcUMsRUFNckMsU0FOcUMsRUFPckMsTUFQcUMsQ0FBL0I7QUFvQkEsSUFBTUMsU0FBc0IsYUFDL0JELFNBRCtCLEdBRWxDLFdBRmtDLEVBR2xDLFNBSGtDLEVBSWxDLFlBSmtDLEVBS2xDLFVBTGtDLEVBTWxDLFdBTmtDLEVBT2xDLFNBUGtDLEVBUWxDLElBUmtDLEVBQTVCO0FBbUJBLElBQU1FLGNBQWMsR0FBRyxTQUFqQkEsY0FBaUIsQ0FBa0JDLENBQWxCO0FBQUEsU0FBZ0QsV0FDMUVBLENBRDBFLG9CQUUxRUEsQ0FGMEUsb0JBRzFFQSxDQUgwRSxvQkFJMUVBLENBSjBFLG9CQUsxRUEsQ0FMMEUsb0JBTTFFQSxDQU4wRSxTQUFoRDtBQUFBLENBQXZCO0FBV0EsSUFBTUMsY0FBYyxHQUFHLFNBQWpCQSxjQUFpQixDQUFrQkQsQ0FBbEI7QUFBQSxTQUFnRCxjQUN2RUEsQ0FEdUUsZ0JBRXZFQSxDQUZ1RSxFQUFoRDtBQUFBLENBQXZCO0FBT0E7OztBQUdDLE1BQU1FLFVBQXdCLDJCQUFHLENBQUMsTUFBRCxFQUFTLElBQVQsQ0FBakM7QUFpQkEsTUFBTUMsVUFBd0IsMkJBQUcsQ0FDdkMsTUFEdUMsRUFFdkMsTUFGdUMsRUFHdkMsWUFIdUMsRUFJdkMsWUFKdUMsRUFLdkMsYUFMdUMsRUFNdkMsa0JBTnVDLEVBT3ZDLHFCQVB1QyxFQVF2QyxNQVJ1QyxFQVN2QyxNQVR1QyxFQVV2QyxPQVZ1QyxFQVd2QyxvQ0FYdUMsRUFZdkMsMENBWnVDLEVBYXZDLGVBYnVDLEVBY3ZDLElBZHVDLENBQWpDO0FBNkJBLE1BQU1DLFVBQXdCLDJCQUFHLENB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d0IsR0FBRyxTQUEzQkEsd0JBQTJCLENBQUNDLE9BQUQ7QUFBQSxTQUN2Q0EsT0FBTyxLQUFLLElBQVosR0FBbUIsSUFBbkIsMkJBQTJDVCxPQUFPLENBQUNTLE9BQUQsQ0FBbEQsTUFEdUM7QUFBQSxDQUFqQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi90eXBpbmdzL3VzZXJDb250ZW50U2VsZWN0b3IudHMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IHR5cGUgR3JhZGUgPSAxIHwgMiB8IDNcblxuZXhwb3J0IHR5cGUgTGFuZ3VhZ2UxID1cblx0fCAnR2VybWFuMSdcblx0fCAnR2VybWFuMidcblx0fCAnU3BhbmlzaDEnXG5cdHwgJ1NwYW5pc2gyJ1xuXHR8ICdGcmVuY2gxJ1xuXHR8ICdGcmVuY2gyJ1xuXHR8ICdTYW1pJ1xuXG5leHBvcnQgY29uc3QgbGFuZ3VhZ2UxOiBMYW5ndWFnZTFbXSA9IFtcblx0J0dlcm1hbjEnLFxuXHQnR2VybWFuMicsXG5cdCdTcGFuaXNoMScsXG5cdCdTcGFuaXNoMicsXG5cdCdGcmVuY2gxJyxcblx0J0ZyZW5jaDInLFxuXHQnU2FtaScsXG5dXG5cbmV4cG9ydCB0eXBlIExhbmd1YWdlWCA9XG5cdHwgTGFuZ3VhZ2UxXG5cdHwgJ0dlcm1hbjErMidcblx0fCAnR2VybWFuMydcblx0fCAnU3BhbmlzaDErMidcblx0fCAnU3BhbmlzaDMnXG5cdHwgJ0ZyZW5jaDErMidcblx0fCAnRnJlbmNoMydcblx0fCBudWxsXG5cbmV4cG9ydCBjb25zdCBsYW5ndWFnZVg6IExhbmd1YWdlWFtdID0gW1xuXHQuLi5sYW5ndWFnZTEsXG5cdCdHZXJtYW4xKzInLFxuXHQnR2VybWFuMycsXG5cdCdTcGFuaXNoMSsyJyxcblx0J1NwYW5pc2gzJyxcblx0J0ZyZW5jaDErMicsXG5cdCdGcmVuY2gzJyxcblx0bnVsbCxcbl1cblxuZXhwb3J0IHR5cGUgU3RDbGFzc0ZhY3Rvcnk8VCBleHRlbmRzIEdyYWRlPiA9XG5cdHwgYCR7VH1TVEFgXG5cdHwgYCR7VH1TVEJgXG5cdHwgYCR7VH1TVENgXG5cdHwgYCR7VH1TVERgXG5cdHwgYCR7VH1TVEVgXG5cdHwgYCR7VH1TVEZgXG5cbmV4cG9ydCBjb25zdCBzdENsYXNzRmFjdG9yeSA9IDxUIGV4dGVuZHMgR3JhZGU+KHY6IFQpOiBTdENsYXNzRmFjdG9yeTxUPltdID0+IFtcblx0YCR7dn1TVEFgLFxuXHRgJHt2fVNUQmAsXG5cdGAke3Z9U1RDYCxcblx0YCR7dn1TVERgLFxuXHRgJHt2fVNURWAsXG5cdGAke3Z9U1RGYCxcbl1cblxuZXhwb3J0IHR5cGUgTWRDbGFzc0ZhY3Rvcnk8VCBleHRlbmRzIEdyYWRlPiA9IGBNTUEke1R9YCB8IGBNREEke1R9YFxuXG5leHBvcnQgY29uc3QgbWRDbGFzc0ZhY3RvcnkgPSA8VCBleHRlbmRzIEdyYWRlPih2OiBUKTogTWRDbGFzc0ZhY3Rvcnk8VD5bXSA9PiBbXG5cdGBNTUEke3Z9YCxcblx0YE1EQSR7dn1gLFxuXVxuXG5leHBvcnQgdHlwZSBNZENsYXNzID0gJ01EMScgfCAnTUQyJyB8ICdNRDMnXG5cbmV4cG9ydCBuYW1lc3BhY2UgQmxvY2tEYXRhIHtcblx0ZXhwb3J0IHR5cGUgX0FCbG9ja0RhdGEgPSAnUDInXG5cdGV4cG9ydCB0eXBlIEFCbG9ja0RhdGEgPSBgQS8ke19BQmxvY2tEYXRhfWAgfCBudWxsXG5cdGV4cG9ydCBjb25zdCBhQmxvY2tEYXRhOiBBQmxvY2tEYXRhW10gPSBbJ0EvUDInLCBudWxsXVxuXG5cdGV4cG9ydCB0eXBlIF9CQmxvY2tEYXRhID1cblx0XHR8ICdSMSdcblx0XHR8ICdTMSdcblx0XHR8ICdGeXNpa2sgMSdcblx0XHR8ICdHZW9mYWcgMSdcblx0XHR8ICdFbmdlbHNrIDEnXG5cdFx0fCAnw5hrb25vbWlzdHlyaW5nJ1xuXHRcdHwgJ1NhbWZ1bm5zLWdlb2dyYWZpJ1xuXHRcdHwgJ1IyJ1xuXHRcdHwgJ1MyJ1xuXHRcdHwgJ0lUMidcblx0XHR8ICdQb2lsaXRpa2sgb2cgbWVubmVza2VyZXR0aWdoZXRlcidcblx0XHR8ICdFbnRyZXByZW7DuHJza2FwIG9nIGJlZHJpZnRzdXR2aWtsaW5nIDInXG5cdFx0fCAnUmV0dHNsw6ZyZSAyJ1xuXHRleHBvcnQgdHlwZSBCQmxvY2tEYXRhID0gYEIvJHtfQkJsb2NrRGF0YX1gIHwgbnVsbFxuXHRleHBvcnQgY29uc3QgYkJsb2NrRGF0YTogQkJsb2NrRGF0YVtdID0gW1xuXHRcdCdCL1IxJyxcblx0XHQnQi9TMScsXG5cdFx0J0IvRnlzaWtrIDEnLFxuXHRcdCdCL0dlb2ZhZyAxJyxcblx0XHQnQi9FbmdlbHNrIDEnLFxuXHRcdCdCL8OYa29ub21pc3R5cmluZycsXG5cdFx0J0IvU2FtZnVubnMtZ2VvZ3JhZmknLFxuXHRcdCdCL1IyJyxcblx0XHQnQi9TMicsXG5cdFx0J0IvSVQyJyxcblx0XHQnQi9Qb2lsaXRpa2sgb2cgbWVubmVza2VyZXR0aWdoZXRlcicsXG5cdFx0J0IvRW50cmVwcmVuw7hyc2thcCBvZyBiZWRyaWZ0c3V0dmlrbGluZyAyJyxcblx0XHQnQi9SZXR0c2zDpnJlIDInLFxuXHRcdG51bGwsXG5cdF1cblxuXHRleHBvcnQgdHlwZSBfQ0Jsb2NrRGF0YSA9XG5cdFx0fCAnSVQxJ1xuXHRcdHwgJ0tqZW1pIDEnXG5cdFx0fCAnQmlvbG9naSAxJ1xuXHRcdHwgJ01hcmtlZHNmw7hyaW5nIG9nIGxlZGVsc2UgMSdcblx0XHR8ICdSZXR0c2zDpnJlIDEnXG5cdFx0fCAnU29zaW9sb2dpIG9nIHNvc2lhbGFudHJvcG9sb2dpJ1xuXHRcdHwgJ0Z5c2lrayAyJ1xuXHRcdHwgJ1NhbWZ1bm5zZmFnbGlnIGVuZ2Vsc2snXG5cdFx0fCAnU2FtZnVubnPDuGtvbm9taSAyJ1xuXHRcdHwgJ1Nvc2lhbGt1bm5za2FwJ1xuXHRleHBvcnQgdHlwZSBDQmxvY2tEYXRhID0gYEMvJHtfQ0Jsb2NrRGF0YX1gIHwgbnVsbFxuXHRleHBvcnQgY29uc3QgY0Jsb2NrRGF0YTogQ0Jsb2NrRGF0YVtdID0gW1xuXHRcdCdDL0lUMScsXG5cdFx0J0MvS2plbWkgMScsXG5cdFx0J0MvQmlvbG9naSAxJyxcblx0XHQnQy9NYXJrZWRzZsO4cmluZyBvZyBsZWRlbHNlIDEnLFxuXHRcdCdDL1JldHRzbMOmcmUgMScsXG5cdFx0J0MvU29zaW9sb2dpIG9nIHNvc2lhbGFudHJvcG9sb2dpJyxcblx0XHQnQy9GeXNpa2sgMicsXG5cdFx0J0MvU2FtZnVubnNmYWdsaWcgZW5nZWxzaycsXG5cdFx0J0MvU2FtZnVubnPDuGtvbm9taSAyJyxcblx0XHQnQy9Tb3NpYWxrdW5uc2thcCcsXG5cdFx0bnVsbCxcblx0XVxuXG5cdGV4cG9ydCB0eXBlIF9NZERCbG9ja0RhdGEgPVxuXHRcdHwgJ011c2lrayBmb3JkeXBuaW5nIDInXG5cdFx0fCAnVGVhdGVycHJvZHVrc2pvbiBvZyBmb3JkeXBuaW5nIDInXG5cdFx0fCAnU3BhbnNrIDErMidcblx0XHR8ICdUeXNrIDErMidcblx0XHR8ICdGcmFuc2sgMSsyJ1xuXG5cdGV4cG9ydCB0eXBlIE1kREJsb2NrRGF0YSA9IGBELyR7X01kREJsb2NrRGF0YX1gIHwgbnVsbFxuXHRleHBvcnQgY29uc3QgbWREQmxvY2tEYXRhID0gW1xuXHRcdCdEL011c2lrayBmb3JkeXBuaW5nIDInLFxuXHRcdCdEL1RlYXRlcnByb2R1a3Nqb24gb2cgZm9yZHlwbmluZyAyJyxcblx0XHQnRC9TcGFuc2sgMSsyJyxcblx0XHQnRC9UeXNrIDErMicsXG5cdFx0J0QvRnJhbnNrIDErMicsXG5cdFx0bnVsbCxcblx0XVxuXG5cdGV4cG9ydCB0eXBlIF9EQmxvY2tEYXRhID1cblx0XHR8IF9NZERCbG9ja0RhdGFcblx0XHR8ICdLamVtaSAxJ1xuXHRcdHwgJ0hpc3RvcmllIG9nIGZpbG9zb2ZpIDEnXG5cdFx0fCAnS29tbXVuaWthc2pvbiBvZyBrdWx0dXInXG5cdFx0fCAnU2FtZnVubnPDuGtvbm9taSAxJ1xuXHRcdHwgJ1RvcHBpZHJldHQgMSdcblx0XHR8ICdCaW9sb2dpIDInXG5cdFx0fCAnTWFya2Vkc2bDuHJpbmcgb2cgbGVkZWxzZSAyJ1xuXHRcdHwgJ1NwYW5zayAzJ1xuXHRcdHwgJ1RvcHBpZHJldHQgMidcblx0XHR8ICdLamVtaSAyJ1xuXHRleHBvcnQgdHlwZSBEQmxvY2tEYXRhID0gYEQvJHtfREJsb2NrRGF0YX1gIHwgbnVsbFxuXHRleHBvcnQgY29uc3QgZERhdGFCbG9jazogREJsb2NrRGF0YVtdID0gW1xuXHRcdCdEL0tqZW1pIDEnLFxuXHRcdCdEL0hpc3RvcmllIG9nIGZpbG9zb2ZpIDEnLFxuXHRcdCdEL0tvbW11bmlrYXNqb24gb2cga3VsdHVyJyxcblx0XHQnRC9TYW1mdW5uc8O4a29ub21pIDEnLFxuXHRcdCdEL1RvcHBpZHJldHQgMScsXG5cdFx0J0QvQmlvbG9naSAyJyxcblx0XHQnRC9NYXJrZWRzZsO4cmluZyBvZyBsZWRlbHNlIDInLFxuXHRcdCdEL1NwYW5zayAxKzInLFxuXHRcdCdEL1R5c2sgMSsyJyxcblx0XHQnRC9TcGFuc2sgMycsXG5cdFx0J0QvVG9wcGlkcmV0dCAyJyxcblx0XHQnRC9NdXNpa2sgZm9yZHlwbmluZyAyJyxcblx0XHQnRC9UZWF0ZXJwcm9kdWtzam9uIG9nIGZvcmR5cG5pbmcgMicsXG5cdFx0J0QvS2plbWkgMicsXG5cdFx0bnVsbCxcblx0XVxuXG5cdGV4cG9ydCB0eXBlIF9FQmxvY2tEYXRhID1cblx0XHR8ICdSMSdcblx0XHR8ICdTMSdcblx0XHR8ICdGeXNpa2sgMSdcblx0XHR8ICdFbmdlbHNrIDEnXG5cdFx0fCAnRW50cmVwcmVuw7hyc2thcCBvZyBiZWRyaWZ0c3V0dmlrbGluZyAxJ1xuXHRcdHwgJ1Nvc2lvbG9naSBvZyBzb3NpYWxhbnRyb3BvbG9naSdcblx0XHR8ICdQc3lrb2xvZ2kgMSdcblx0XHR8ICdSMidcblx0XHR8ICdTMidcblx0XHR8ICdLamVtaSAyJ1xuXHRcdHwgJ0dlb2ZhZyAyJ1xuXHRcdHwgJ0VuZ2Vsc2sgbGl0dGVyYXR1ciBvZyBrdWx0dXInXG5cdFx0fCAnw5hrb25vbWkgb2cgbGVkZWxzZSdcblx0XHR8ICdQc3lrb2xvZ2kgMidcblx0ZXhwb3J0IHR5cGUgRUJsb2NrRGF0YSA9IGBFLyR7X0VCbG9ja0RhdGF9YCB8IG51bGxcblx0ZXhwb3J0IGNvbnN0IGVCbG9ja0RhdGE6IEVCbG9ja0RhdGFbXSA9IFtcblx0XHQnRS9SMScsXG5cdFx0J0UvUzEnLFxuXHRcdCdFL0Z5c2lrayAxJyxcblx0XHQnRS9FbmdlbHNrIDEnLFxuXHRcdCdFL0VudHJlcHJlbsO4cnNrYXAgb2cgYmVkcmlmdHN1dHZpa2xpbmcgMScsXG5cdFx0J0UvU29zaW9sb2dpIG9nIHNvc2lhbGFudHJvcG9sb2dpJyxcblx0XHQnRS9Qc3lrb2xvZ2kgMScsXG5cdFx0J0UvUjInLFxuXHRcdCdFL1MyJyxcblx0XHQnRS9LamVtaSAyJyxcblx0XHQnRS9HZW9mYWcgMicsXG5cdFx0J0UvRW5nZWxzayBsaXR0ZXJhdHVyIG9nIGt1bHR1cicsXG5cdFx0J0Uvw5hrb25vbWkgb2cgbGVkZWxzZScsXG5cdFx0J0UvUHN5a29sb2dpIDInLFxuXHRcdG51bGwsXG5cdF1cblxuXHRleHBvcnQgdHlwZSBQcm9ncmFtID1cblx0XHR8IEFCbG9ja0RhdGFcblx0XHR8IEJCbG9ja0RhdGFcblx0XHR8IENCbG9ja0RhdGFcblx0XHR8IERCbG9ja0RhdGFcblx0XHR8IEVCbG9ja0RhdGFcblx0XHR8IG51bGxcbn1cblxuZXhwb3J0IGNvbnN0IGlzTWQgPSAodjogVXNlckNvbnRlbnRTZWxlY3Rvcik6IHYgaXMgTWQgPT5cblx0di5jbGFzcy5zdGFydHNXaXRoKCdNRCcpXG5leHBvcnQgY29uc3QgaXNNZDMgPSAodjogVXNlckNvbnRlbnRTZWxlY3Rvcik6IHYgaXMgTWQzID0+IHYuY2xhc3NbMl0gPT09ICczJ1xuZXhwb3J0IGNvbnN0IGlzTWRYID0gKHY6IFVzZXJDb250ZW50U2VsZWN0b3IpOiB2IGlzIE1kWCA9PiBpc01kKHYpICYmICFpc01kMyh2KVxuXG5leHBvcnQgY29uc3QgaXNTdDEgPSAodjogVXNlckNvbnRlbnRTZWxlY3Rvcik6IHYgaXMgU3QxID0+IHYuY2xhc3NbMF0gPT09ICcxJ1xuZXhwb3J0IGNvbnN0IGlzU3RYID0gKHY6IFVzZXJDb250ZW50U2VsZWN0b3IpOiB2IGlzIFN0WCA9PiAhaXNNZCh2KSAmJiAhaXNTdDEodilcblxuZXhwb3J0IHR5cGUgTWRYID0ge1xuXHRjbGFzczogTWRDbGFzc0ZhY3Rvcnk8MT4gfCBNZENsYXNzRmFjdG9yeTwyPlxuXHRsYW5ndWFnZTogTGFuZ3VhZ2UxXG59XG5leHBvcnQgdHlwZSBNZDMgPSB7XG5cdGNsYXNzOiBNZENsYXNzRmFjdG9yeTwzPlxuXHRsYW5ndWFnZTogTGFuZ3VhZ2VYXG5cblx0ZDogQmxvY2tEYXRhLk1kREJsb2NrRGF0YVxufVxuXG5leHBvcnQgdHlwZSBNZCA9IE1kWCB8IE1kM1xuXG5leHBvcnQgdHlwZSBTdDEgPSB7XG5cdGNsYXNzOiBTdENsYXNzRmFjdG9yeTwxPlxuXHRsYW5ndWFnZTogTGFuZ3VhZ2UxXG59XG5cbmV4cG9ydCB0eXBlIFN0WCA9IHtcblx0Y2xhc3M6IFN0Q2xhc3NGYWN0b3J5PDI+IHwgU3RDbGFzc0ZhY3Rvcnk8Mz5cblx0bGFuZ3VhZ2U6IExhbmd1YWdlWFxuXG5cdGE6IEJsb2NrRGF0YS5BQmxvY2tEYXRhXG5cdGI6IEJsb2NrRGF0YS5CQmxvY2tEYXRhXG5cdGM6IEJsb2NrRGF0YS5DQmxvY2tEYXRhXG5cdGQ6IEJsb2NrRGF0YS5EQmxvY2tEYXRhXG5cdGU6IEJsb2NrRGF0YS5FQmxvY2tEYXRhXG59XG5cbmV4cG9ydCB0eXBlIFVzZXJDb250ZW50U2VsZWN0b3IgPSBNZCB8IFN0MSB8IFN0WFxuXG5leHBvcnQgY29uc3QgZXh0cmFjdEdyYWRlID0gKF9jbGFzczogVXNlckNvbnRlbnRTZWxlY3RvclsnY2xhc3MnXSk6IEdyYWRlID0+XG5cdF9jbGFzcy5pbmRleE9mKCcxJykgPiAtMSA/IDEgOiBfY2xhc3MuaW5kZXhPZignMicpID4gLTEgPyAyIDogM1xuXG5jb25zdCBwcm9jZXNzID0gKHN0cjogc3RyaW5nKSA9PiBzdHIudG9Mb2NhbGVMb3dlckNhc2UoKS5yZXBsYWNlKC9cXHMrL2csICctJylcblxuZXhwb3J0IGNvbnN0IGNsYXNzVG9waWNLZXlHZW5lcmF0b3IgPSAoX2NsYXNzOiBVc2VyQ29udGVudFNlbGVjdG9yWydjbGFzcyddKSA9PlxuXHRgdG9waWMuY2xhc3MoJHtwcm9jZXNzKF9jbGFzcyl9KWBcbmV4cG9ydCBjb25zdCBsYW5ndWFnZVRvcGljS2V5R2VuZXJhdG9yID0gKGxhbmd1YWdlOiBMYW5ndWFnZVgsIGdyYWRlOiBHcmFkZSkgPT5cblx0bGFuZ3VhZ2UgJiYgYHRvcGljLmxhbmd1YWdlKCR7Z3JhZGV9LyR7cHJvY2VzcyhsYW5ndWFnZSl9KWBcbmV4cG9ydCBjb25zdCBwcm9ncmFtVG9waWNLZXlHZW5lcmF0b3IgPSAocHJvZ3JhbTogQmxvY2tEYXRhLlByb2dyYW0pID0+XG5cdHByb2dyYW0gPT09IG51bGwgPyBudWxsIDogYHRvcGljLnByb2dyYW0oJHtwcm9jZXNzKHByb2dyYW0pfSlgXG4iXSwibmFtZXMiOlsibGFuZ3VhZ2UxIiwibGFuZ3VhZ2VYIiwic3RDbGFzc0ZhY3RvcnkiLCJ2IiwibWRDbGFzc0ZhY3RvcnkiLCJhQmxvY2tEYXRhIiwiYkJsb2NrRGF0YSIsImNCbG9ja0RhdGEiLCJtZERCbG9ja0RhdGEiLCJkRGF0YUJsb2NrIiwiZUJsb2NrRGF0YSIsIkJsb2NrRGF0YSIsImlzTWQiLCJzdGFydHNXaXRoIiwiaXNNZDMiLCJpc01kWCIsImlzU3QxIiwiaXNTdFgiLCJleHRyYWN0R3JhZGUiLCJfY2xhc3MiLCJpbmRleE9mIiwicHJvY2VzcyIsInN0ciIsInRvTG9jYWxlTG93ZXJDYXNlIiwicmVwbGFjZSIsImNsYXNzVG9waWNLZXlHZW5lcmF0b3IiLCJsYW5ndWFnZVRvcGljS2V5R2VuZXJhdG9yIiwibGFuZ3VhZ2UiLCJncmFkZSIsInByb2dyYW1Ub3BpY0tleUdlbmVyYXRvciIsInByb2dyYW0iXSwic291cmNlUm9vdCI6IiJ9