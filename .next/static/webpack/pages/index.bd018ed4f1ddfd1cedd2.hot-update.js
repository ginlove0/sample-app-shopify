webpackHotUpdate_N_E("pages/index",{

/***/ "./components/ProductList.js":
/*!***********************************!*\
  !*** ./components/ProductList.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ \"./node_modules/@babel/runtime/helpers/esm/classCallCheck.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ \"./node_modules/@babel/runtime/helpers/esm/createClass.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ \"./node_modules/@babel/runtime/helpers/esm/inherits.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ \"./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ \"./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-apollo */ \"./node_modules/react-apollo/lib/react-apollo.esm.js\");\n/* harmony import */ var _shopify_polaris__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @shopify/polaris */ \"./node_modules/@shopify/polaris/dist/esm/index.js\");\n/* harmony import */ var _graphql_query_products__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../graphql/query/products */ \"./graphql/query/products.js\");\n/* harmony import */ var store_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! store-js */ \"./node_modules/store-js/dist/store.legacy.js\");\n/* harmony import */ var store_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(store_js__WEBPACK_IMPORTED_MODULE_10__);\n/* harmony import */ var _shopify_app_bridge_actions__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @shopify/app-bridge/actions */ \"./node_modules/@shopify/app-bridge/actions/index.js\");\n/* harmony import */ var _shopify_app_bridge_actions__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_shopify_app_bridge_actions__WEBPACK_IMPORTED_MODULE_11__);\n/* harmony import */ var _shopify_app_bridge_react__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @shopify/app-bridge-react */ \"./node_modules/@shopify/app-bridge-react/index.js\");\n/* harmony import */ var _shopify_app_bridge_react__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_shopify_app_bridge_react__WEBPACK_IMPORTED_MODULE_12__);\n\n\n\n\n\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement;\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(this, result); }; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }\n\n\n\n\n\n\n\n\nvar ResourceListWithProducts = /*#__PURE__*/function (_React$Component) {\n  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(ResourceListWithProducts, _React$Component);\n\n  var _super = _createSuper(ResourceListWithProducts);\n\n  function ResourceListWithProducts() {\n    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(this, ResourceListWithProducts);\n\n    return _super.apply(this, arguments);\n  }\n\n  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(ResourceListWithProducts, [{\n    key: \"render\",\n    value: function render() {\n      var app = this.context;\n\n      var redirectToProduct = function redirectToProduct() {\n        var redirect = _shopify_app_bridge_actions__WEBPACK_IMPORTED_MODULE_11__[\"Redirect\"].create(app);\n        redirect.dispatch(_shopify_app_bridge_actions__WEBPACK_IMPORTED_MODULE_11__[\"Redirect\"].Action.APP, \"/edit-products\");\n      };\n\n      var twoWeeksFromNow = new Date(Date.now() + 12096e5).toDateString();\n      return __jsx(react_apollo__WEBPACK_IMPORTED_MODULE_7__[\"Query\"], {\n        query: _graphql_query_products__WEBPACK_IMPORTED_MODULE_9__[\"GET_PRODUCTS_BY_ID\"],\n        variables: {\n          ids: store_js__WEBPACK_IMPORTED_MODULE_10___default.a.get(\"ids\")\n        }\n      }, function (_ref) {\n        var data = _ref.data,\n            loading = _ref.loading,\n            error = _ref.error;\n        if (loading) return __jsx(\"div\", null, \"Loading\\u2026\");\n        if (error) return __jsx(\"div\", null, error.message);\n        console.log(data);\n        return __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_8__[\"Card\"], null, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_8__[\"ResourceList\"], {\n          showHeader: true,\n          resourceName: {\n            singular: \"Product\",\n            plural: \"Products\"\n          },\n          items: data.nodes,\n          renderItem: function renderItem(item) {\n            var media = __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_8__[\"Thumbnail\"], {\n              source: item.images.edges[0] ? item.images.edges[0].node.originalSrc : \"\",\n              alt: item.images.edges[0] ? item.images.edges[0].node.altText : \"\"\n            });\n\n            var price = item.variants.edges[0].node.price;\n            return __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_8__[\"ResourceList\"].Item, {\n              id: item.id,\n              media: media,\n              accessibilityLabel: \"View details for \".concat(item.title)\n            }, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_8__[\"Stack\"], null, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_8__[\"Stack\"].Item, {\n              fill: true\n            }, __jsx(\"h3\", null, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_8__[\"TextStyle\"], {\n              variation: \"strong\"\n            }, item.title))), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_8__[\"Stack\"].Item, null, __jsx(\"p\", null, \"$\", price)), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_8__[\"Stack\"].Item, null, __jsx(\"p\", null, \"Expires on \", twoWeeksFromNow, \" \"))));\n          }\n        }));\n      });\n    }\n  }]);\n\n  return ResourceListWithProducts;\n}(react__WEBPACK_IMPORTED_MODULE_6___default.a.Component);\n\nObject(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(ResourceListWithProducts, \"contextType\", _shopify_app_bridge_react__WEBPACK_IMPORTED_MODULE_12__[\"Context\"]);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (ResourceListWithProducts);\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Qcm9kdWN0TGlzdC5qcz9iOGQ1Il0sIm5hbWVzIjpbIlJlc291cmNlTGlzdFdpdGhQcm9kdWN0cyIsImFwcCIsImNvbnRleHQiLCJyZWRpcmVjdFRvUHJvZHVjdCIsInJlZGlyZWN0IiwiUmVkaXJlY3QiLCJjcmVhdGUiLCJkaXNwYXRjaCIsIkFjdGlvbiIsIkFQUCIsInR3b1dlZWtzRnJvbU5vdyIsIkRhdGUiLCJub3ciLCJ0b0RhdGVTdHJpbmciLCJHRVRfUFJPRFVDVFNfQllfSUQiLCJpZHMiLCJzdG9yZSIsImdldCIsImRhdGEiLCJsb2FkaW5nIiwiZXJyb3IiLCJtZXNzYWdlIiwiY29uc29sZSIsImxvZyIsInNpbmd1bGFyIiwicGx1cmFsIiwibm9kZXMiLCJpdGVtIiwibWVkaWEiLCJpbWFnZXMiLCJlZGdlcyIsIm5vZGUiLCJvcmlnaW5hbFNyYyIsImFsdFRleHQiLCJwcmljZSIsInZhcmlhbnRzIiwiaWQiLCJ0aXRsZSIsIlJlYWN0IiwiQ29tcG9uZW50IiwiQ29udGV4dCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFPQTtBQUNBO0FBQ0E7QUFDQTs7SUFFTUEsd0I7Ozs7Ozs7Ozs7Ozs7NkJBR0s7QUFDUCxVQUFNQyxHQUFHLEdBQUcsS0FBS0MsT0FBakI7O0FBQ0EsVUFBTUMsaUJBQWlCLEdBQUcsU0FBcEJBLGlCQUFvQixHQUFNO0FBQzlCLFlBQU1DLFFBQVEsR0FBR0MscUVBQVEsQ0FBQ0MsTUFBVCxDQUFnQkwsR0FBaEIsQ0FBakI7QUFDQUcsZ0JBQVEsQ0FBQ0csUUFBVCxDQUFrQkYscUVBQVEsQ0FBQ0csTUFBVCxDQUFnQkMsR0FBbEMsRUFBdUMsZ0JBQXZDO0FBQ0QsT0FIRDs7QUFLQSxVQUFNQyxlQUFlLEdBQUcsSUFBSUMsSUFBSixDQUFTQSxJQUFJLENBQUNDLEdBQUwsS0FBYSxPQUF0QixFQUErQkMsWUFBL0IsRUFBeEI7QUFFQSxhQUNFLE1BQUMsa0RBQUQ7QUFBTyxhQUFLLEVBQUVDLDBFQUFkO0FBQWtDLGlCQUFTLEVBQUU7QUFBRUMsYUFBRyxFQUFFQyxnREFBSyxDQUFDQyxHQUFOLENBQVUsS0FBVjtBQUFQO0FBQTdDLFNBQ0csZ0JBQThCO0FBQUEsWUFBM0JDLElBQTJCLFFBQTNCQSxJQUEyQjtBQUFBLFlBQXJCQyxPQUFxQixRQUFyQkEsT0FBcUI7QUFBQSxZQUFaQyxLQUFZLFFBQVpBLEtBQVk7QUFDN0IsWUFBSUQsT0FBSixFQUFhLE9BQU8sbUNBQVA7QUFDYixZQUFJQyxLQUFKLEVBQVcsT0FBTyxtQkFBTUEsS0FBSyxDQUFDQyxPQUFaLENBQVA7QUFDWEMsZUFBTyxDQUFDQyxHQUFSLENBQVlMLElBQVo7QUFDQSxlQUNFLE1BQUMscURBQUQsUUFDRSxNQUFDLDZEQUFEO0FBQ0Usb0JBQVUsTUFEWjtBQUVFLHNCQUFZLEVBQUU7QUFBRU0sb0JBQVEsRUFBRSxTQUFaO0FBQXVCQyxrQkFBTSxFQUFFO0FBQS9CLFdBRmhCO0FBR0UsZUFBSyxFQUFFUCxJQUFJLENBQUNRLEtBSGQ7QUFJRSxvQkFBVSxFQUFFLG9CQUFDQyxJQUFELEVBQVU7QUFDcEIsZ0JBQU1DLEtBQUssR0FDVCxNQUFDLDBEQUFEO0FBQ0Usb0JBQU0sRUFDSkQsSUFBSSxDQUFDRSxNQUFMLENBQVlDLEtBQVosQ0FBa0IsQ0FBbEIsSUFDSUgsSUFBSSxDQUFDRSxNQUFMLENBQVlDLEtBQVosQ0FBa0IsQ0FBbEIsRUFBcUJDLElBQXJCLENBQTBCQyxXQUQ5QixHQUVJLEVBSlI7QUFNRSxpQkFBRyxFQUNETCxJQUFJLENBQUNFLE1BQUwsQ0FBWUMsS0FBWixDQUFrQixDQUFsQixJQUNJSCxJQUFJLENBQUNFLE1BQUwsQ0FBWUMsS0FBWixDQUFrQixDQUFsQixFQUFxQkMsSUFBckIsQ0FBMEJFLE9BRDlCLEdBRUk7QUFUUixjQURGOztBQWNBLGdCQUFNQyxLQUFLLEdBQUdQLElBQUksQ0FBQ1EsUUFBTCxDQUFjTCxLQUFkLENBQW9CLENBQXBCLEVBQXVCQyxJQUF2QixDQUE0QkcsS0FBMUM7QUFDQSxtQkFDRSxNQUFDLDZEQUFELENBQWMsSUFBZDtBQUNFLGdCQUFFLEVBQUVQLElBQUksQ0FBQ1MsRUFEWDtBQUVFLG1CQUFLLEVBQUVSLEtBRlQ7QUFHRSxnQ0FBa0IsNkJBQXNCRCxJQUFJLENBQUNVLEtBQTNCO0FBSHBCLGVBS0UsTUFBQyxzREFBRCxRQUNFLE1BQUMsc0RBQUQsQ0FBTyxJQUFQO0FBQVksa0JBQUk7QUFBaEIsZUFDRSxrQkFDRSxNQUFDLDBEQUFEO0FBQVcsdUJBQVMsRUFBQztBQUFyQixlQUNHVixJQUFJLENBQUNVLEtBRFIsQ0FERixDQURGLENBREYsRUFRRSxNQUFDLHNEQUFELENBQU8sSUFBUCxRQUNFLHNCQUFLSCxLQUFMLENBREYsQ0FSRixFQVdFLE1BQUMsc0RBQUQsQ0FBTyxJQUFQLFFBQ0UsZ0NBQWV4QixlQUFmLE1BREYsQ0FYRixDQUxGLENBREY7QUF1QkQ7QUEzQ0gsVUFERixDQURGO0FBaURELE9BdERILENBREY7QUEwREQ7Ozs7RUF0RW9DNEIsNENBQUssQ0FBQ0MsUzs7MEZBQXZDdkMsd0IsaUJBQ2lCd0Msa0U7O0FBd0VSeEMsdUZBQWYiLCJmaWxlIjoiLi9jb21wb25lbnRzL1Byb2R1Y3RMaXN0LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUXVlcnkgfSBmcm9tIFwicmVhY3QtYXBvbGxvXCI7XG5pbXBvcnQge1xuICBDYXJkLFxuICBSZXNvdXJjZUxpc3QsXG4gIFN0YWNrLFxuICBUZXh0U3R5bGUsXG4gIFRodW1ibmFpbCxcbn0gZnJvbSBcIkBzaG9waWZ5L3BvbGFyaXNcIjtcbmltcG9ydCB7IEdFVF9QUk9EVUNUU19CWV9JRCB9IGZyb20gXCIuLi9ncmFwaHFsL3F1ZXJ5L3Byb2R1Y3RzXCI7XG5pbXBvcnQgc3RvcmUgZnJvbSBcInN0b3JlLWpzXCI7XG5pbXBvcnQgeyBSZWRpcmVjdCB9IGZyb20gXCJAc2hvcGlmeS9hcHAtYnJpZGdlL2FjdGlvbnNcIjtcbmltcG9ydCB7IENvbnRleHQgfSBmcm9tIFwiQHNob3BpZnkvYXBwLWJyaWRnZS1yZWFjdFwiO1xuXG5jbGFzcyBSZXNvdXJjZUxpc3RXaXRoUHJvZHVjdHMgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBzdGF0aWMgY29udGV4dFR5cGUgPSBDb250ZXh0O1xuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCBhcHAgPSB0aGlzLmNvbnRleHQ7XG4gICAgY29uc3QgcmVkaXJlY3RUb1Byb2R1Y3QgPSAoKSA9PiB7XG4gICAgICBjb25zdCByZWRpcmVjdCA9IFJlZGlyZWN0LmNyZWF0ZShhcHApO1xuICAgICAgcmVkaXJlY3QuZGlzcGF0Y2goUmVkaXJlY3QuQWN0aW9uLkFQUCwgXCIvZWRpdC1wcm9kdWN0c1wiKTtcbiAgICB9O1xuXG4gICAgY29uc3QgdHdvV2Vla3NGcm9tTm93ID0gbmV3IERhdGUoRGF0ZS5ub3coKSArIDEyMDk2ZTUpLnRvRGF0ZVN0cmluZygpO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxRdWVyeSBxdWVyeT17R0VUX1BST0RVQ1RTX0JZX0lEfSB2YXJpYWJsZXM9e3sgaWRzOiBzdG9yZS5nZXQoXCJpZHNcIikgfX0+XG4gICAgICAgIHsoeyBkYXRhLCBsb2FkaW5nLCBlcnJvciB9KSA9PiB7XG4gICAgICAgICAgaWYgKGxvYWRpbmcpIHJldHVybiA8ZGl2PkxvYWRpbmfigKY8L2Rpdj47XG4gICAgICAgICAgaWYgKGVycm9yKSByZXR1cm4gPGRpdj57ZXJyb3IubWVzc2FnZX08L2Rpdj47XG4gICAgICAgICAgY29uc29sZS5sb2coZGF0YSk7XG4gICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxDYXJkPlxuICAgICAgICAgICAgICA8UmVzb3VyY2VMaXN0XG4gICAgICAgICAgICAgICAgc2hvd0hlYWRlclxuICAgICAgICAgICAgICAgIHJlc291cmNlTmFtZT17eyBzaW5ndWxhcjogXCJQcm9kdWN0XCIsIHBsdXJhbDogXCJQcm9kdWN0c1wiIH19XG4gICAgICAgICAgICAgICAgaXRlbXM9e2RhdGEubm9kZXN9XG4gICAgICAgICAgICAgICAgcmVuZGVySXRlbT17KGl0ZW0pID0+IHtcbiAgICAgICAgICAgICAgICAgIGNvbnN0IG1lZGlhID0gKFxuICAgICAgICAgICAgICAgICAgICA8VGh1bWJuYWlsXG4gICAgICAgICAgICAgICAgICAgICAgc291cmNlPXtcbiAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW0uaW1hZ2VzLmVkZ2VzWzBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgID8gaXRlbS5pbWFnZXMuZWRnZXNbMF0ubm9kZS5vcmlnaW5hbFNyY1xuICAgICAgICAgICAgICAgICAgICAgICAgICA6IFwiXCJcbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgYWx0PXtcbiAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW0uaW1hZ2VzLmVkZ2VzWzBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgID8gaXRlbS5pbWFnZXMuZWRnZXNbMF0ubm9kZS5hbHRUZXh0XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDogXCJcIlxuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICBjb25zdCBwcmljZSA9IGl0ZW0udmFyaWFudHMuZWRnZXNbMF0ubm9kZS5wcmljZTtcbiAgICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgIDxSZXNvdXJjZUxpc3QuSXRlbVxuICAgICAgICAgICAgICAgICAgICAgIGlkPXtpdGVtLmlkfVxuICAgICAgICAgICAgICAgICAgICAgIG1lZGlhPXttZWRpYX1cbiAgICAgICAgICAgICAgICAgICAgICBhY2Nlc3NpYmlsaXR5TGFiZWw9e2BWaWV3IGRldGFpbHMgZm9yICR7aXRlbS50aXRsZX1gfVxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgPFN0YWNrPlxuICAgICAgICAgICAgICAgICAgICAgICAgPFN0YWNrLkl0ZW0gZmlsbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGgzPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0U3R5bGUgdmFyaWF0aW9uPVwic3Ryb25nXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7aXRlbS50aXRsZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1RleHRTdHlsZT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9oMz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvU3RhY2suSXRlbT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxTdGFjay5JdGVtPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8cD4ke3ByaWNlfTwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvU3RhY2suSXRlbT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxTdGFjay5JdGVtPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5FeHBpcmVzIG9uIHt0d29XZWVrc0Zyb21Ob3d9IDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvU3RhY2suSXRlbT5cbiAgICAgICAgICAgICAgICAgICAgICA8L1N0YWNrPlxuICAgICAgICAgICAgICAgICAgICA8L1Jlc291cmNlTGlzdC5JdGVtPlxuICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9DYXJkPlxuICAgICAgICAgICk7XG4gICAgICAgIH19XG4gICAgICA8L1F1ZXJ5PlxuICAgICk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgUmVzb3VyY2VMaXN0V2l0aFByb2R1Y3RzO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/ProductList.js\n");

/***/ })

})