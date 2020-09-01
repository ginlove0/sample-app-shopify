webpackHotUpdate_N_E("pages/index",{

/***/ "./components/ProductList.js":
/*!***********************************!*\
  !*** ./components/ProductList.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _apollo_react_hooks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @apollo/react-hooks */ \"./node_modules/@apollo/react-hooks/index.esm.js\");\n/* harmony import */ var _shopify_polaris__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @shopify/polaris */ \"./node_modules/@shopify/polaris/dist/esm/index.js\");\n/* harmony import */ var store_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! store-js */ \"./node_modules/store-js/dist/store.legacy.js\");\n/* harmony import */ var store_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(store_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _graphql_query_products__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../graphql/query/products */ \"./graphql/query/products.js\");\nvar _s = $RefreshSig$();\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\n\nfunction ProductList() {\n  _s();\n\n  var _useQuery = Object(_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_1__[\"useQuery\"])(_graphql_query_products__WEBPACK_IMPORTED_MODULE_4__[\"GET_PRODUCTS_BY_ID\"], {\n    variables: {\n      ids: store_js__WEBPACK_IMPORTED_MODULE_3___default.a.get('ids')\n    }\n  }),\n      loading = _useQuery.loading,\n      error = _useQuery.error,\n      data = _useQuery.data;\n\n  if (loading) return __jsx(\"div\", null, \"Loading....\");\n  if (error) return __jsx(\"div\", null, error.message);\n  console.log('this is data', data);\n  return __jsx(\"div\", null, __jsx(\"h1\", null, \"Hello from product list\"));\n}\n\n_s(ProductList, \"ATRudwUnWENk7lEGiyv3yjumjxE=\", false, function () {\n  return [_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_1__[\"useQuery\"]];\n});\n\n_c = ProductList;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ProductList);\n\nvar _c;\n\n$RefreshReg$(_c, \"ProductList\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Qcm9kdWN0TGlzdC5qcz9iOGQ1Il0sIm5hbWVzIjpbIlByb2R1Y3RMaXN0IiwidXNlUXVlcnkiLCJHRVRfUFJPRFVDVFNfQllfSUQiLCJ2YXJpYWJsZXMiLCJpZHMiLCJzdG9yZSIsImdldCIsImxvYWRpbmciLCJlcnJvciIsImRhdGEiLCJtZXNzYWdlIiwiY29uc29sZSIsImxvZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBR0EsU0FBU0EsV0FBVCxHQUFzQjtBQUFBOztBQUFBLGtCQUVhQyxvRUFBUSxDQUFDQywwRUFBRCxFQUFxQjtBQUFDQyxhQUFTLEVBQUU7QUFBQ0MsU0FBRyxFQUFFQywrQ0FBSyxDQUFDQyxHQUFOLENBQVUsS0FBVjtBQUFOO0FBQVosR0FBckIsQ0FGckI7QUFBQSxNQUVYQyxPQUZXLGFBRVhBLE9BRlc7QUFBQSxNQUVGQyxLQUZFLGFBRUZBLEtBRkU7QUFBQSxNQUVLQyxJQUZMLGFBRUtBLElBRkw7O0FBSWxCLE1BQUdGLE9BQUgsRUFBWSxPQUFPLGlDQUFQO0FBRVosTUFBR0MsS0FBSCxFQUFVLE9BQU8sbUJBQU1BLEtBQUssQ0FBQ0UsT0FBWixDQUFQO0FBRVZDLFNBQU8sQ0FBQ0MsR0FBUixDQUFZLGNBQVosRUFBNEJILElBQTVCO0FBRUEsU0FDSSxtQkFDSSw0Q0FESixDQURKO0FBT0g7O0dBakJRVCxXO1VBRTBCQyw0RDs7O0tBRjFCRCxXO0FBb0JPQSwwRUFBZiIsImZpbGUiOiIuL2NvbXBvbmVudHMvUHJvZHVjdExpc3QuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB7dXNlUXVlcnl9IGZyb20gJ0BhcG9sbG8vcmVhY3QtaG9va3MnO1xuaW1wb3J0IHtDYXJkLCBSZXNvdXJjZUxpc3QsIFN0YWNrLCBUZXh0U3R5bGUsIFRodW1ibmFpbH0gZnJvbSAnQHNob3BpZnkvcG9sYXJpcyc7XG5pbXBvcnQgc3RvcmUgZnJvbSAnc3RvcmUtanMnO1xuaW1wb3J0IHtHRVRfUFJPRFVDVFNfQllfSUR9IGZyb20gJy4uL2dyYXBocWwvcXVlcnkvcHJvZHVjdHMnXG5cblxuZnVuY3Rpb24gUHJvZHVjdExpc3QoKXtcblxuICAgIGNvbnN0IHtsb2FkaW5nLCBlcnJvciwgZGF0YX0gPSB1c2VRdWVyeShHRVRfUFJPRFVDVFNfQllfSUQsIHt2YXJpYWJsZXM6IHtpZHM6IHN0b3JlLmdldCgnaWRzJyl9fSk7XG5cbiAgICBpZihsb2FkaW5nKSByZXR1cm4gPGRpdj5Mb2FkaW5nLi4uLjwvZGl2PlxuXG4gICAgaWYoZXJyb3IpIHJldHVybiA8ZGl2PntlcnJvci5tZXNzYWdlfTwvZGl2PlxuXG4gICAgY29uc29sZS5sb2coJ3RoaXMgaXMgZGF0YScsIGRhdGEpXG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPGgxPlxuICAgICAgICAgICAgICAgIEhlbGxvIGZyb20gcHJvZHVjdCBsaXN0XG4gICAgICAgICAgICA8L2gxPlxuICAgICAgICA8L2Rpdj5cbiAgICApXG59XG5cblxuIGV4cG9ydCBkZWZhdWx0IFByb2R1Y3RMaXN0OyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/ProductList.js\n");

/***/ })

})