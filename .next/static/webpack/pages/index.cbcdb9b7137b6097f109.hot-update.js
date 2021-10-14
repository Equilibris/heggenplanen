"use strict";
self["webpackHotUpdate_N_E"]("pages/index",{

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguY2JjZGI5YjcxMzdiNjA5N2YxMDkuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFXTyxJQUFNQSxTQUFzQixHQUFHLENBQ3JDLFNBRHFDLEVBRXJDLFNBRnFDLEVBR3JDLFVBSHFDLEVBSXJDLFVBSnFDLEVBS3JDLFNBTHFDLEVBTXJDLFNBTnFDLEVBT3JDLE1BUHFDLENBQS9CO0FBb0JBLElBQU1DLFNBQXNCLGFBQy9CRCxTQUQrQixHQUVsQyxXQUZrQyxFQUdsQyxTQUhrQyxFQUlsQyxZQUprQyxFQUtsQyxVQUxrQyxFQU1sQyxXQU5rQyxFQU9sQyxTQVBrQyxFQVFsQyxJQVJrQyxFQUE1QjtBQW1CQSxJQUFNRSxjQUFjLEdBQUcsU0FBakJBLGNBQWlCLENBQWtCQyxDQUFsQjtBQUFBLFNBQWdELFdBQzFFQSxDQUQwRSxvQkFFMUVBLENBRjBFLG9CQUcxRUEsQ0FIMEUsb0JBSTFFQSxDQUowRSxvQkFLMUVBLENBTDBFLG9CQU0xRUEsQ0FOMEUsU0FBaEQ7QUFBQSxDQUF2QjtBQVdBLElBQU1DLGNBQWMsR0FBRyxTQUFqQkEsY0FBaUIsQ0FBa0JELENBQWxCO0FBQUEsU0FBZ0QsY0FDdkVBLENBRHVFLGdCQUV2RUEsQ0FGdUUsRUFBaEQ7QUFBQSxDQUF2QjtBQU9BOzs7QUFHQyxNQUFNRSxVQUF3QiwyQkFBRyxDQUFDLE1BQUQsRUFBUyxJQUFULENBQWpDO0FBaUJBLE1BQU1DLFVBQXdCLDJCQUFHLENBQ3ZDLE1BRHVDLEVBRXZDLE1BRnVDLEVBR3ZDLFlBSHVDLEVBSXZDLFlBSnVDLEVBS3ZDLGFBTHVDLEVBTXZDLGtCQU51QyxFQU92QyxxQkFQdUMsRUFRdkMsTUFSdUMsRUFTdkMsTUFUdUMsRUFVdkMsT0FWdUMsRUFXdkMsb0NBWHVDLEVBWXZDLDBDQVp1QyxFQWF2QyxlQWJ1QyxFQWN2QyxJQWR1QyxDQUFqQztBQTZCQSxNQUFNQyxVQUF3QiwyQkFBRyxD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QXdCLEdBQUcsU0FBM0JBLHdCQUEyQixDQUFDQyxPQUFEO0FBQUEsU0FDdkNBLE9BQU8sS0FBSyxJQUFaLEdBQW1CLElBQW5CLDJCQUEyQ1QsT0FBTyxDQUFDUyxPQUFELENBQWxELE1BRHVDO0FBQUEsQ0FBakMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vdHlwaW5ncy91c2VyQ29udGVudFNlbGVjdG9yLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCB0eXBlIEdyYWRlID0gMSB8IDIgfCAzXG5cbmV4cG9ydCB0eXBlIExhbmd1YWdlMSA9XG5cdHwgJ0dlcm1hbjEnXG5cdHwgJ0dlcm1hbjInXG5cdHwgJ1NwYW5pc2gxJ1xuXHR8ICdTcGFuaXNoMidcblx0fCAnRnJlbmNoMSdcblx0fCAnRnJlbmNoMidcblx0fCAnU2FtaSdcblxuZXhwb3J0IGNvbnN0IGxhbmd1YWdlMTogTGFuZ3VhZ2UxW10gPSBbXG5cdCdHZXJtYW4xJyxcblx0J0dlcm1hbjInLFxuXHQnU3BhbmlzaDEnLFxuXHQnU3BhbmlzaDInLFxuXHQnRnJlbmNoMScsXG5cdCdGcmVuY2gyJyxcblx0J1NhbWknLFxuXVxuXG5leHBvcnQgdHlwZSBMYW5ndWFnZVggPVxuXHR8IExhbmd1YWdlMVxuXHR8ICdHZXJtYW4xKzInXG5cdHwgJ0dlcm1hbjMnXG5cdHwgJ1NwYW5pc2gxKzInXG5cdHwgJ1NwYW5pc2gzJ1xuXHR8ICdGcmVuY2gxKzInXG5cdHwgJ0ZyZW5jaDMnXG5cdHwgbnVsbFxuXG5leHBvcnQgY29uc3QgbGFuZ3VhZ2VYOiBMYW5ndWFnZVhbXSA9IFtcblx0Li4ubGFuZ3VhZ2UxLFxuXHQnR2VybWFuMSsyJyxcblx0J0dlcm1hbjMnLFxuXHQnU3BhbmlzaDErMicsXG5cdCdTcGFuaXNoMycsXG5cdCdGcmVuY2gxKzInLFxuXHQnRnJlbmNoMycsXG5cdG51bGwsXG5dXG5cbmV4cG9ydCB0eXBlIFN0Q2xhc3NGYWN0b3J5PFQgZXh0ZW5kcyBHcmFkZT4gPVxuXHR8IGAke1R9U1RBYFxuXHR8IGAke1R9U1RCYFxuXHR8IGAke1R9U1RDYFxuXHR8IGAke1R9U1REYFxuXHR8IGAke1R9U1RFYFxuXHR8IGAke1R9U1RGYFxuXG5leHBvcnQgY29uc3Qgc3RDbGFzc0ZhY3RvcnkgPSA8VCBleHRlbmRzIEdyYWRlPih2OiBUKTogU3RDbGFzc0ZhY3Rvcnk8VD5bXSA9PiBbXG5cdGAke3Z9U1RBYCxcblx0YCR7dn1TVEJgLFxuXHRgJHt2fVNUQ2AsXG5cdGAke3Z9U1REYCxcblx0YCR7dn1TVEVgLFxuXHRgJHt2fVNURmAsXG5dXG5cbmV4cG9ydCB0eXBlIE1kQ2xhc3NGYWN0b3J5PFQgZXh0ZW5kcyBHcmFkZT4gPSBgTU1BJHtUfWAgfCBgTURBJHtUfWBcblxuZXhwb3J0IGNvbnN0IG1kQ2xhc3NGYWN0b3J5ID0gPFQgZXh0ZW5kcyBHcmFkZT4odjogVCk6IE1kQ2xhc3NGYWN0b3J5PFQ+W10gPT4gW1xuXHRgTU1BJHt2fWAsXG5cdGBNREEke3Z9YCxcbl1cblxuZXhwb3J0IHR5cGUgTWRDbGFzcyA9ICdNRDEnIHwgJ01EMicgfCAnTUQzJ1xuXG5leHBvcnQgbmFtZXNwYWNlIEJsb2NrRGF0YSB7XG5cdGV4cG9ydCB0eXBlIF9BQmxvY2tEYXRhID0gJ1AyJ1xuXHRleHBvcnQgdHlwZSBBQmxvY2tEYXRhID0gYEEvJHtfQUJsb2NrRGF0YX1gIHwgbnVsbFxuXHRleHBvcnQgY29uc3QgYUJsb2NrRGF0YTogQUJsb2NrRGF0YVtdID0gWydBL1AyJywgbnVsbF1cblxuXHRleHBvcnQgdHlwZSBfQkJsb2NrRGF0YSA9XG5cdFx0fCAnUjEnXG5cdFx0fCAnUzEnXG5cdFx0fCAnRnlzaWtrIDEnXG5cdFx0fCAnR2VvZmFnIDEnXG5cdFx0fCAnRW5nZWxzayAxJ1xuXHRcdHwgJ8OYa29ub21pc3R5cmluZydcblx0XHR8ICdTYW1mdW5ucy1nZW9ncmFmaSdcblx0XHR8ICdSMidcblx0XHR8ICdTMidcblx0XHR8ICdJVDInXG5cdFx0fCAnUG9pbGl0aWtrIG9nIG1lbm5lc2tlcmV0dGlnaGV0ZXInXG5cdFx0fCAnRW50cmVwcmVuw7hyc2thcCBvZyBiZWRyaWZ0c3V0dmlrbGluZyAyJ1xuXHRcdHwgJ1JldHRzbMOmcmUgMidcblx0ZXhwb3J0IHR5cGUgQkJsb2NrRGF0YSA9IGBCLyR7X0JCbG9ja0RhdGF9YCB8IG51bGxcblx0ZXhwb3J0IGNvbnN0IGJCbG9ja0RhdGE6IEJCbG9ja0RhdGFbXSA9IFtcblx0XHQnQi9SMScsXG5cdFx0J0IvUzEnLFxuXHRcdCdCL0Z5c2lrayAxJyxcblx0XHQnQi9HZW9mYWcgMScsXG5cdFx0J0IvRW5nZWxzayAxJyxcblx0XHQnQi/DmGtvbm9taXN0eXJpbmcnLFxuXHRcdCdCL1NhbWZ1bm5zLWdlb2dyYWZpJyxcblx0XHQnQi9SMicsXG5cdFx0J0IvUzInLFxuXHRcdCdCL0lUMicsXG5cdFx0J0IvUG9pbGl0aWtrIG9nIG1lbm5lc2tlcmV0dGlnaGV0ZXInLFxuXHRcdCdCL0VudHJlcHJlbsO4cnNrYXAgb2cgYmVkcmlmdHN1dHZpa2xpbmcgMicsXG5cdFx0J0IvUmV0dHNsw6ZyZSAyJyxcblx0XHRudWxsLFxuXHRdXG5cblx0ZXhwb3J0IHR5cGUgX0NCbG9ja0RhdGEgPVxuXHRcdHwgJ0lUMSdcblx0XHR8ICdLamVtaSAxJ1xuXHRcdHwgJ0Jpb2xvZ2kgMSdcblx0XHR8ICdNYXJrZWRzZsO4cmluZyBvZyBsZWRlbHNlIDEnXG5cdFx0fCAnUmV0dHNsw6ZyZSAxJ1xuXHRcdHwgJ1Nvc2lvbG9naSBvZyBzb3NpYWxhbnRyb3BvbG9naSdcblx0XHR8ICdGeXNpa2sgMidcblx0XHR8ICdTYW1mdW5uc2ZhZ2xpZyBlbmdlbHNrJ1xuXHRcdHwgJ1NhbWZ1bm5zw7hrb25vbWkgMidcblx0XHR8ICdTb3NpYWxrdW5uc2thcCdcblx0ZXhwb3J0IHR5cGUgQ0Jsb2NrRGF0YSA9IGBDLyR7X0NCbG9ja0RhdGF9YCB8IG51bGxcblx0ZXhwb3J0IGNvbnN0IGNCbG9ja0RhdGE6IENCbG9ja0RhdGFbXSA9IFtcblx0XHQnQy9JVDEnLFxuXHRcdCdDL0tqZW1pIDEnLFxuXHRcdCdDL0Jpb2xvZ2kgMScsXG5cdFx0J0MvTWFya2Vkc2bDuHJpbmcgb2cgbGVkZWxzZSAxJyxcblx0XHQnQy9SZXR0c2zDpnJlIDEnLFxuXHRcdCdDL1Nvc2lvbG9naSBvZyBzb3NpYWxhbnRyb3BvbG9naScsXG5cdFx0J0MvRnlzaWtrIDInLFxuXHRcdCdDL1NhbWZ1bm5zZmFnbGlnIGVuZ2Vsc2snLFxuXHRcdCdDL1NhbWZ1bm5zw7hrb25vbWkgMicsXG5cdFx0J0MvU29zaWFsa3VubnNrYXAnLFxuXHRcdG51bGwsXG5cdF1cblxuXHRleHBvcnQgdHlwZSBfTWREQmxvY2tEYXRhID1cblx0XHR8ICdNdXNpa2sgZm9yZHlwbmluZyAyJ1xuXHRcdHwgJ1RlYXRlcnByb2R1a3Nqb24gb2cgZm9yZHlwbmluZyAyJ1xuXHRcdHwgJ1NwYW5zayAxKzInXG5cdFx0fCAnVHlzayAxKzInXG5cdFx0fCAnRnJhbnNrIDErMidcblxuXHRleHBvcnQgdHlwZSBNZERCbG9ja0RhdGEgPSBgRC8ke19NZERCbG9ja0RhdGF9YCB8IG51bGxcblx0ZXhwb3J0IGNvbnN0IG1kREJsb2NrRGF0YSA9IFtcblx0XHQnRC9NdXNpa2sgZm9yZHlwbmluZyAyJyxcblx0XHQnRC9UZWF0ZXJwcm9kdWtzam9uIG9nIGZvcmR5cG5pbmcgMicsXG5cdFx0J0QvU3BhbnNrIDErMicsXG5cdFx0J0QvVHlzayAxKzInLFxuXHRcdCdEL0ZyYW5zayAxKzInLFxuXHRcdG51bGwsXG5cdF1cblxuXHRleHBvcnQgdHlwZSBfREJsb2NrRGF0YSA9XG5cdFx0fCBfTWREQmxvY2tEYXRhXG5cdFx0fCAnS2plbWkgMSdcblx0XHR8ICdIaXN0b3JpZSBvZyBmaWxvc29maSAxJ1xuXHRcdHwgJ0tvbW11bmlrYXNqb24gb2cga3VsdHVyJ1xuXHRcdHwgJ1NhbWZ1bm5zw7hrb25vbWkgMSdcblx0XHR8ICdUb3BwaWRyZXR0IDEnXG5cdFx0fCAnQmlvbG9naSAyJ1xuXHRcdHwgJ01hcmtlZHNmw7hyaW5nIG9nIGxlZGVsc2UgMidcblx0XHR8ICdTcGFuc2sgMydcblx0XHR8ICdUb3BwaWRyZXR0IDInXG5cdFx0fCAnS2plbWkgMidcblx0ZXhwb3J0IHR5cGUgREJsb2NrRGF0YSA9IGBELyR7X0RCbG9ja0RhdGF9YCB8IG51bGxcblx0ZXhwb3J0IGNvbnN0IGREYXRhQmxvY2s6IERCbG9ja0RhdGFbXSA9IFtcblx0XHQnRC9LamVtaSAxJyxcblx0XHQnRC9IaXN0b3JpZSBvZyBmaWxvc29maSAxJyxcblx0XHQnRC9Lb21tdW5pa2Fzam9uIG9nIGt1bHR1cicsXG5cdFx0J0QvU2FtZnVubnPDuGtvbm9taSAxJyxcblx0XHQnRC9Ub3BwaWRyZXR0IDEnLFxuXHRcdCdEL0Jpb2xvZ2kgMicsXG5cdFx0J0QvTWFya2Vkc2bDuHJpbmcgb2cgbGVkZWxzZSAyJyxcblx0XHQnRC9TcGFuc2sgMSsyJyxcblx0XHQnRC9UeXNrIDErMicsXG5cdFx0J0QvU3BhbnNrIDMnLFxuXHRcdCdEL1RvcHBpZHJldHQgMicsXG5cdFx0J0QvTXVzaWtrIGZvcmR5cG5pbmcgMicsXG5cdFx0J0QvVGVhdGVycHJvZHVrc2pvbiBvZyBmb3JkeXBuaW5nIDInLFxuXHRcdCdEL0tqZW1pIDInLFxuXHRcdG51bGwsXG5cdF1cblxuXHRleHBvcnQgdHlwZSBfRUJsb2NrRGF0YSA9XG5cdFx0fCAnUjEnXG5cdFx0fCAnUzEnXG5cdFx0fCAnRnlzaWtrIDEnXG5cdFx0fCAnRW5nZWxzayAxJ1xuXHRcdHwgJ0VudHJlcHJlbsO4cnNrYXAgb2cgYmVkcmlmdHN1dHZpa2xpbmcgMSdcblx0XHR8ICdTb3Npb2xvZ2kgb2cgc29zaWFsYW50cm9wb2xvZ2knXG5cdFx0fCAnUHN5a29sb2dpIDEnXG5cdFx0fCAnUjInXG5cdFx0fCAnUzInXG5cdFx0fCAnS2plbWkgMidcblx0XHR8ICdHZW9mYWcgMidcblx0XHR8ICdFbmdlbHNrIGxpdHRlcmF0dXIgb2cga3VsdHVyJ1xuXHRcdHwgJ8OYa29ub21pIG9nIGxlZGVsc2UnXG5cdFx0fCAnUHN5a29sb2dpIDInXG5cdGV4cG9ydCB0eXBlIEVCbG9ja0RhdGEgPSBgRS8ke19FQmxvY2tEYXRhfWAgfCBudWxsXG5cdGV4cG9ydCBjb25zdCBlQmxvY2tEYXRhOiBFQmxvY2tEYXRhW10gPSBbXG5cdFx0J0UvUjEnLFxuXHRcdCdFL1MxJyxcblx0XHQnRS9GeXNpa2sgMScsXG5cdFx0J0UvRW5nZWxzayAxJyxcblx0XHQnRS9FbnRyZXByZW7DuHJza2FwIG9nIGJlZHJpZnRzdXR2aWtsaW5nIDEnLFxuXHRcdCdFL1Nvc2lvbG9naSBvZyBzb3NpYWxhbnRyb3BvbG9naScsXG5cdFx0J0UvUHN5a29sb2dpIDEnLFxuXHRcdCdFL1IyJyxcblx0XHQnRS9TMicsXG5cdFx0J0UvS2plbWkgMicsXG5cdFx0J0UvR2VvZmFnIDInLFxuXHRcdCdFL0VuZ2Vsc2sgbGl0dGVyYXR1ciBvZyBrdWx0dXInLFxuXHRcdCdFL8OYa29ub21pIG9nIGxlZGVsc2UnLFxuXHRcdCdFL1BzeWtvbG9naSAyJyxcblx0XHRudWxsLFxuXHRdXG5cblx0ZXhwb3J0IHR5cGUgUHJvZ3JhbSA9XG5cdFx0fCBBQmxvY2tEYXRhXG5cdFx0fCBCQmxvY2tEYXRhXG5cdFx0fCBDQmxvY2tEYXRhXG5cdFx0fCBEQmxvY2tEYXRhXG5cdFx0fCBFQmxvY2tEYXRhXG5cdFx0fCBudWxsXG59XG5cbmV4cG9ydCBjb25zdCBpc01kID0gKHY6IFVzZXJDb250ZW50U2VsZWN0b3IpOiB2IGlzIE1kID0+XG5cdHYuY2xhc3Muc3RhcnRzV2l0aCgnTUQnKVxuZXhwb3J0IGNvbnN0IGlzTWQzID0gKHY6IFVzZXJDb250ZW50U2VsZWN0b3IpOiB2IGlzIE1kMyA9PiB2LmNsYXNzWzJdID09PSAnMydcbmV4cG9ydCBjb25zdCBpc01kWCA9ICh2OiBVc2VyQ29udGVudFNlbGVjdG9yKTogdiBpcyBNZFggPT4gaXNNZCh2KSAmJiAhaXNNZDModilcblxuZXhwb3J0IGNvbnN0IGlzU3QxID0gKHY6IFVzZXJDb250ZW50U2VsZWN0b3IpOiB2IGlzIFN0MSA9PiB2LmNsYXNzWzBdID09PSAnMSdcbmV4cG9ydCBjb25zdCBpc1N0WCA9ICh2OiBVc2VyQ29udGVudFNlbGVjdG9yKTogdiBpcyBTdFggPT4gIWlzTWQodikgJiYgIWlzU3QxKHYpXG5cbmV4cG9ydCB0eXBlIE1kWCA9IHtcblx0Y2xhc3M6IE1kQ2xhc3NGYWN0b3J5PDE+IHwgTWRDbGFzc0ZhY3Rvcnk8Mj5cblx0bGFuZ3VhZ2U6IExhbmd1YWdlMVxufVxuZXhwb3J0IHR5cGUgTWQzID0ge1xuXHRjbGFzczogTWRDbGFzc0ZhY3Rvcnk8Mz5cblx0bGFuZ3VhZ2U6IExhbmd1YWdlWFxuXG5cdGQ6IEJsb2NrRGF0YS5NZERCbG9ja0RhdGFcbn1cblxuZXhwb3J0IHR5cGUgTWQgPSBNZFggfCBNZDNcblxuZXhwb3J0IHR5cGUgU3QxID0ge1xuXHRjbGFzczogU3RDbGFzc0ZhY3Rvcnk8MT5cblx0bGFuZ3VhZ2U6IExhbmd1YWdlMVxufVxuXG5leHBvcnQgdHlwZSBTdFggPSB7XG5cdGNsYXNzOiBTdENsYXNzRmFjdG9yeTwyPiB8IFN0Q2xhc3NGYWN0b3J5PDM+XG5cdGxhbmd1YWdlOiBMYW5ndWFnZVhcblxuXHRhOiBCbG9ja0RhdGEuQUJsb2NrRGF0YVxuXHRiOiBCbG9ja0RhdGEuQkJsb2NrRGF0YVxuXHRjOiBCbG9ja0RhdGEuQ0Jsb2NrRGF0YVxuXHRkOiBCbG9ja0RhdGEuREJsb2NrRGF0YVxuXHRlOiBCbG9ja0RhdGEuRUJsb2NrRGF0YVxufVxuXG5leHBvcnQgdHlwZSBVc2VyQ29udGVudFNlbGVjdG9yID0gTWQgfCBTdDEgfCBTdFhcblxuZXhwb3J0IGNvbnN0IGV4dHJhY3RHcmFkZSA9IChfY2xhc3M6IFVzZXJDb250ZW50U2VsZWN0b3JbJ2NsYXNzJ10pOiBHcmFkZSA9PlxuXHRfY2xhc3MuaW5kZXhPZignMScpID4gLTEgPyAxIDogX2NsYXNzLmluZGV4T2YoJzInKSA+IC0xID8gMiA6IDNcblxuY29uc3QgcHJvY2VzcyA9IChzdHI6IHN0cmluZykgPT4gc3RyLnRvTG9jYWxlTG93ZXJDYXNlKCkucmVwbGFjZSgvXFxzKy9nLCAnLScpXG5cbmV4cG9ydCBjb25zdCBjbGFzc1RvcGljS2V5R2VuZXJhdG9yID0gKF9jbGFzczogVXNlckNvbnRlbnRTZWxlY3RvclsnY2xhc3MnXSkgPT5cblx0YHRvcGljLmNsYXNzKCR7cHJvY2VzcyhfY2xhc3MpfSlgXG5leHBvcnQgY29uc3QgbGFuZ3VhZ2VUb3BpY0tleUdlbmVyYXRvciA9IChsYW5ndWFnZTogTGFuZ3VhZ2VYLCBncmFkZTogR3JhZGUpID0+XG5cdGxhbmd1YWdlICYmIGB0b3BpYy5sYW5ndWFnZSgke2dyYWRlfS8ke3Byb2Nlc3MobGFuZ3VhZ2UpfSlgXG5leHBvcnQgY29uc3QgcHJvZ3JhbVRvcGljS2V5R2VuZXJhdG9yID0gKHByb2dyYW06IEJsb2NrRGF0YS5Qcm9ncmFtKSA9PlxuXHRwcm9ncmFtID09PSBudWxsID8gbnVsbCA6IGB0b3BpYy5wcm9ncmFtKCR7cHJvY2Vzcyhwcm9ncmFtKX0pYFxuIl0sIm5hbWVzIjpbImxhbmd1YWdlMSIsImxhbmd1YWdlWCIsInN0Q2xhc3NGYWN0b3J5IiwidiIsIm1kQ2xhc3NGYWN0b3J5IiwiYUJsb2NrRGF0YSIsImJCbG9ja0RhdGEiLCJjQmxvY2tEYXRhIiwibWREQmxvY2tEYXRhIiwiZERhdGFCbG9jayIsImVCbG9ja0RhdGEiLCJCbG9ja0RhdGEiLCJpc01kIiwic3RhcnRzV2l0aCIsImlzTWQzIiwiaXNNZFgiLCJpc1N0MSIsImlzU3RYIiwiZXh0cmFjdEdyYWRlIiwiX2NsYXNzIiwiaW5kZXhPZiIsInByb2Nlc3MiLCJzdHIiLCJ0b0xvY2FsZUxvd2VyQ2FzZSIsInJlcGxhY2UiLCJjbGFzc1RvcGljS2V5R2VuZXJhdG9yIiwibGFuZ3VhZ2VUb3BpY0tleUdlbmVyYXRvciIsImxhbmd1YWdlIiwiZ3JhZGUiLCJwcm9ncmFtVG9waWNLZXlHZW5lcmF0b3IiLCJwcm9ncmFtIl0sInNvdXJjZVJvb3QiOiIifQ==