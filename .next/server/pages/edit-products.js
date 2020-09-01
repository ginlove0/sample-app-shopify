module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/edit-products.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./graphql/mutation/product.js":
/*!*************************************!*\
  !*** ./graphql/mutation/product.js ***!
  \*************************************/
/*! exports provided: UPDATE_PRICE */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"UPDATE_PRICE\", function() { return UPDATE_PRICE; });\n/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! graphql-tag */ \"graphql-tag\");\n/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_0__);\n\nconst UPDATE_PRICE = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default.a`\n  mutation productVariantUpdate($input: ProductVariantInput!) {\n    productVariantUpdate(input: $input) {\n      product {\n        title\n      }\n      productVariant {\n        id\n        price\n      }\n    }\n  }\n`;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ncmFwaHFsL211dGF0aW9uL3Byb2R1Y3QuanM/ZTA3MCJdLCJuYW1lcyI6WyJVUERBVEVfUFJJQ0UiLCJncWwiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFTyxNQUFNQSxZQUFZLEdBQUdDLGtEQUFJOzs7Ozs7Ozs7Ozs7Q0FBekIiLCJmaWxlIjoiLi9ncmFwaHFsL211dGF0aW9uL3Byb2R1Y3QuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZ3FsIGZyb20gJ2dyYXBocWwtdGFnJztcblxuZXhwb3J0IGNvbnN0IFVQREFURV9QUklDRSA9IGdxbGBcbiAgbXV0YXRpb24gcHJvZHVjdFZhcmlhbnRVcGRhdGUoJGlucHV0OiBQcm9kdWN0VmFyaWFudElucHV0ISkge1xuICAgIHByb2R1Y3RWYXJpYW50VXBkYXRlKGlucHV0OiAkaW5wdXQpIHtcbiAgICAgIHByb2R1Y3Qge1xuICAgICAgICB0aXRsZVxuICAgICAgfVxuICAgICAgcHJvZHVjdFZhcmlhbnQge1xuICAgICAgICBpZFxuICAgICAgICBwcmljZVxuICAgICAgfVxuICAgIH1cbiAgfVxuYDsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./graphql/mutation/product.js\n");

/***/ }),

/***/ "./pages/edit-products.js":
/*!********************************!*\
  !*** ./pages/edit-products.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _shopify_polaris__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @shopify/polaris */ \"@shopify/polaris\");\n/* harmony import */ var _shopify_polaris__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var store_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! store-js */ \"store-js\");\n/* harmony import */ var store_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(store_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-apollo */ \"react-apollo\");\n/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_apollo__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _graphql_mutation_product__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../graphql/mutation/product */ \"./graphql/mutation/product.js\");\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\n\n\n\nclass EditProduct extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {\n  constructor(...args) {\n    super(...args);\n\n    _defineProperty(this, \"state\", {\n      discount: '',\n      price: '',\n      variantId: '',\n      showToast: false\n    });\n\n    _defineProperty(this, \"handleChange\", field => {\n      return value => this.setState({\n        [field]: value\n      });\n    });\n\n    _defineProperty(this, \"itemToBeConsumed\", () => {\n      const item = store_js__WEBPACK_IMPORTED_MODULE_2___default.a.get('item');\n      const price = item.variants.edges[0].node.price;\n      const variantId = item.variants.edges[0].node.id;\n      const discounter = price * 0.1;\n      this.setState({\n        price,\n        variantId\n      });\n      return (price - discounter).toFixed(2);\n    });\n  }\n\n  componentDidMount() {\n    this.setState({\n      discount: this.itemToBeConsumed()\n    });\n  }\n\n  render() {\n    const {\n      name,\n      price,\n      discount,\n      variantId\n    } = this.state;\n    return __jsx(react_apollo__WEBPACK_IMPORTED_MODULE_3__[\"Mutation\"], {\n      mutation: _graphql_mutation_product__WEBPACK_IMPORTED_MODULE_4__[\"UPDATE_PRICE\"]\n    }, (handleSubmit, {\n      error,\n      data\n    }) => {\n      const showError = error && __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__[\"Banner\"], {\n        status: \"critical\"\n      }, error.message);\n\n      const showToast = data && data.productVariantUpdate && __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__[\"Toast\"], {\n        content: \"Sucessfully updated\",\n        onDismiss: () => this.setState({\n          showToast: false\n        })\n      });\n\n      return __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__[\"Frame\"], null, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__[\"Page\"], null, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__[\"Layout\"], null, showToast, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__[\"Layout\"].Section, null, showError), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__[\"Layout\"].Section, null, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__[\"DisplayText\"], {\n        size: \"large\"\n      }, name), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__[\"Form\"], null, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__[\"Card\"], {\n        sectioned: true\n      }, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__[\"FormLayout\"], null, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__[\"FormLayout\"].Group, null, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__[\"TextField\"], {\n        prefix: \"$\",\n        value: price,\n        disabled: true,\n        label: \"Original price\",\n        type: \"price\"\n      }), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__[\"TextField\"], {\n        prefix: \"$\",\n        value: discount,\n        onChange: this.handleChange('discount'),\n        label: \"Discounted price\",\n        type: \"discount\"\n      })), __jsx(\"p\", null, \"This sale price will expire in two weeks\"))), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__[\"PageActions\"], {\n        primaryAction: [{\n          content: 'Save',\n          onAction: () => {\n            const productVariableInput = {\n              id: variantId,\n              price: discount\n            };\n            handleSubmit({\n              variables: {\n                input: productVariableInput\n              }\n            });\n          }\n        }],\n        secondaryActions: [{\n          content: 'Remove discount'\n        }]\n      }))))));\n    });\n  }\n\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (EditProduct);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9lZGl0LXByb2R1Y3RzLmpzPzg4MzIiXSwibmFtZXMiOlsiRWRpdFByb2R1Y3QiLCJSZWFjdCIsIkNvbXBvbmVudCIsImRpc2NvdW50IiwicHJpY2UiLCJ2YXJpYW50SWQiLCJzaG93VG9hc3QiLCJmaWVsZCIsInZhbHVlIiwic2V0U3RhdGUiLCJpdGVtIiwic3RvcmUiLCJnZXQiLCJ2YXJpYW50cyIsImVkZ2VzIiwibm9kZSIsImlkIiwiZGlzY291bnRlciIsInRvRml4ZWQiLCJjb21wb25lbnREaWRNb3VudCIsIml0ZW1Ub0JlQ29uc3VtZWQiLCJyZW5kZXIiLCJuYW1lIiwic3RhdGUiLCJVUERBVEVfUFJJQ0UiLCJoYW5kbGVTdWJtaXQiLCJlcnJvciIsImRhdGEiLCJzaG93RXJyb3IiLCJtZXNzYWdlIiwicHJvZHVjdFZhcmlhbnRVcGRhdGUiLCJoYW5kbGVDaGFuZ2UiLCJjb250ZW50Iiwib25BY3Rpb24iLCJwcm9kdWN0VmFyaWFibGVJbnB1dCIsInZhcmlhYmxlcyIsImlucHV0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQWFBO0FBQ0E7QUFDQTs7QUFFQSxNQUFNQSxXQUFOLFNBQTBCQyw0Q0FBSyxDQUFDQyxTQUFoQyxDQUEwQztBQUFBO0FBQUE7O0FBQUEsbUNBQzlCO0FBQ05DLGNBQVEsRUFBRSxFQURKO0FBRU5DLFdBQUssRUFBRSxFQUZEO0FBR05DLGVBQVMsRUFBRSxFQUhMO0FBSU5DLGVBQVMsRUFBRTtBQUpMLEtBRDhCOztBQUFBLDBDQThGdEJDLEtBQUQsSUFBVztBQUN4QixhQUFRQyxLQUFELElBQVcsS0FBS0MsUUFBTCxDQUFjO0FBQUUsU0FBQ0YsS0FBRCxHQUFTQztBQUFYLE9BQWQsQ0FBbEI7QUFDRCxLQWhHcUM7O0FBQUEsOENBa0duQixNQUFNO0FBQ3ZCLFlBQU1FLElBQUksR0FBR0MsK0NBQUssQ0FBQ0MsR0FBTixDQUFVLE1BQVYsQ0FBYjtBQUNBLFlBQU1SLEtBQUss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QURGO0FBOEVEOztBQTVGcUM7O0FBNEd6QmhDLDBFQUFmIiwiZmlsZSI6Ii4vcGFnZXMvZWRpdC1wcm9kdWN0cy5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENhcmQsXG4gIERpc3BsYXlUZXh0LFxuICBGb3JtLFxuICBGb3JtTGF5b3V0LFxuICBMYXlvdXQsXG4gIFBhZ2UsXG4gIFBhZ2VBY3Rpb25zLFxuICBUZXh0RmllbGQsXG4gIEJhbm5lcixcbiAgRnJhbWUsXG4gIFRvYXN0LFxufSBmcm9tIFwiQHNob3BpZnkvcG9sYXJpc1wiO1xuaW1wb3J0IHN0b3JlIGZyb20gXCJzdG9yZS1qc1wiO1xuaW1wb3J0IHsgTXV0YXRpb24gfSBmcm9tIFwicmVhY3QtYXBvbGxvXCI7XG5pbXBvcnQgeyBVUERBVEVfUFJJQ0UgfSBmcm9tIFwiLi4vZ3JhcGhxbC9tdXRhdGlvbi9wcm9kdWN0XCI7XG5cbmNsYXNzIEVkaXRQcm9kdWN0IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICBzdGF0ZSA9IHtcbiAgICAgIGRpc2NvdW50OiAnJyxcbiAgICAgIHByaWNlOiAnJyxcbiAgICAgIHZhcmlhbnRJZDogJycsXG4gICAgICBzaG93VG9hc3Q6IGZhbHNlLFxuICAgIH07XG4gIFxuICAgIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7IGRpc2NvdW50OiB0aGlzLml0ZW1Ub0JlQ29uc3VtZWQoKSB9KTtcbiAgICB9XG4gIFxuICAgIHJlbmRlcigpIHtcbiAgICAgIGNvbnN0IHsgbmFtZSwgcHJpY2UsIGRpc2NvdW50LCB2YXJpYW50SWQgfSA9IHRoaXMuc3RhdGU7XG4gICAgICByZXR1cm4gKFxuICAgICAgICA8TXV0YXRpb25cbiAgICAgICAgICBtdXRhdGlvbj17VVBEQVRFX1BSSUNFfVxuICAgICAgICA+XG4gICAgICAgICAgeyhoYW5kbGVTdWJtaXQsIHsgZXJyb3IsIGRhdGEgfSkgPT4ge1xuICAgICAgICAgICAgY29uc3Qgc2hvd0Vycm9yID0gZXJyb3IgJiYgKFxuICAgICAgICAgICAgICA8QmFubmVyIHN0YXR1cz1cImNyaXRpY2FsXCI+e2Vycm9yLm1lc3NhZ2V9PC9CYW5uZXI+XG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgY29uc3Qgc2hvd1RvYXN0ID0gZGF0YSAmJiBkYXRhLnByb2R1Y3RWYXJpYW50VXBkYXRlICYmIChcbiAgICAgICAgICAgICAgPFRvYXN0XG4gICAgICAgICAgICAgICAgY29udGVudD1cIlN1Y2Vzc2Z1bGx5IHVwZGF0ZWRcIlxuICAgICAgICAgICAgICAgIG9uRGlzbWlzcz17KCkgPT4gdGhpcy5zZXRTdGF0ZSh7IHNob3dUb2FzdDogZmFsc2UgfSl9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgPEZyYW1lPlxuICAgICAgICAgICAgICAgIDxQYWdlPlxuICAgICAgICAgICAgICAgICAgPExheW91dD5cbiAgICAgICAgICAgICAgICAgICAge3Nob3dUb2FzdH1cbiAgICAgICAgICAgICAgICAgICAgPExheW91dC5TZWN0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgIHtzaG93RXJyb3J9XG4gICAgICAgICAgICAgICAgICAgIDwvTGF5b3V0LlNlY3Rpb24+XG4gICAgICAgICAgICAgICAgICAgIDxMYXlvdXQuU2VjdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgICA8RGlzcGxheVRleHQgc2l6ZT1cImxhcmdlXCI+e25hbWV9PC9EaXNwbGF5VGV4dD5cbiAgICAgICAgICAgICAgICAgICAgICA8Rm9ybT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxDYXJkIHNlY3Rpb25lZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm1MYXlvdXQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm1MYXlvdXQuR3JvdXA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGV4dEZpZWxkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByZWZpeD1cIiRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17cHJpY2V9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiT3JpZ2luYWwgcHJpY2VcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwicHJpY2VcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0RmllbGRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJlZml4PVwiJFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtkaXNjb3VudH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlKCdkaXNjb3VudCcpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIkRpc2NvdW50ZWQgcHJpY2VcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiZGlzY291bnRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0Zvcm1MYXlvdXQuR3JvdXA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBUaGlzIHNhbGUgcHJpY2Ugd2lsbCBleHBpcmUgaW4gdHdvIHdlZWtzXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Gb3JtTGF5b3V0PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9DYXJkPlxuICAgICAgICAgICAgICAgICAgICAgICAgPFBhZ2VBY3Rpb25zXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHByaW1hcnlBY3Rpb249e1tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50OiAnU2F2ZScsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkFjdGlvbjogKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBwcm9kdWN0VmFyaWFibGVJbnB1dCA9IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZDogdmFyaWFudElkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByaWNlOiBkaXNjb3VudCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGFuZGxlU3VibWl0KHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXJpYWJsZXM6IHsgaW5wdXQ6IHByb2R1Y3RWYXJpYWJsZUlucHV0IH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICBdfVxuICAgICAgICAgICAgICAgICAgICAgICAgICBzZWNvbmRhcnlBY3Rpb25zPXtbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudDogJ1JlbW92ZSBkaXNjb3VudCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXX1cbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgPC9Gb3JtPlxuICAgICAgICAgICAgICAgICAgICA8L0xheW91dC5TZWN0aW9uPlxuICAgICAgICAgICAgICAgICAgPC9MYXlvdXQ+XG4gICAgICAgICAgICAgICAgPC9QYWdlPlxuICAgICAgICAgICAgICA8L0ZyYW1lPlxuICAgICAgICAgICAgKTtcbiAgICAgICAgICB9fVxuICAgICAgICA8L011dGF0aW9uPlxuICAgICAgKTtcbiAgICB9XG4gIFxuICAgIGhhbmRsZUNoYW5nZSA9IChmaWVsZCkgPT4ge1xuICAgICAgcmV0dXJuICh2YWx1ZSkgPT4gdGhpcy5zZXRTdGF0ZSh7IFtmaWVsZF06IHZhbHVlIH0pO1xuICAgIH07XG4gIFxuICAgIGl0ZW1Ub0JlQ29uc3VtZWQgPSAoKSA9PiB7XG4gICAgICBjb25zdCBpdGVtID0gc3RvcmUuZ2V0KCdpdGVtJyk7XG4gICAgICBjb25zdCBwcmljZSA9IGl0ZW0udmFyaWFudHMuZWRnZXNbMF0ubm9kZS5wcmljZTtcbiAgICAgIGNvbnN0IHZhcmlhbnRJZCA9IGl0ZW0udmFyaWFudHMuZWRnZXNbMF0ubm9kZS5pZDtcbiAgICAgIGNvbnN0IGRpc2NvdW50ZXIgPSBwcmljZSAqIDAuMTtcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyBwcmljZSwgdmFyaWFudElkIH0pO1xuICAgICAgcmV0dXJuIChwcmljZSAtIGRpc2NvdW50ZXIpLnRvRml4ZWQoMik7XG4gICAgfTtcbiAgfVxuICBcbiAgZXhwb3J0IGRlZmF1bHQgRWRpdFByb2R1Y3Q7Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/edit-products.js\n");

/***/ }),

/***/ "@shopify/polaris":
/*!***********************************!*\
  !*** external "@shopify/polaris" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@shopify/polaris\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAc2hvcGlmeS9wb2xhcmlzXCI/YTYyMyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJAc2hvcGlmeS9wb2xhcmlzLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQHNob3BpZnkvcG9sYXJpc1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///@shopify/polaris\n");

/***/ }),

/***/ "graphql-tag":
/*!******************************!*\
  !*** external "graphql-tag" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"graphql-tag\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJncmFwaHFsLXRhZ1wiP2Y4YjciXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoiZ3JhcGhxbC10YWcuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJncmFwaHFsLXRhZ1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///graphql-tag\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiPzU4OGUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react\n");

/***/ }),

/***/ "react-apollo":
/*!*******************************!*\
  !*** external "react-apollo" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-apollo\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1hcG9sbG9cIj8yMGU2Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6InJlYWN0LWFwb2xsby5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWFwb2xsb1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react-apollo\n");

/***/ }),

/***/ "store-js":
/*!***************************!*\
  !*** external "store-js" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"store-js\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJzdG9yZS1qc1wiP2QxYWIiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoic3RvcmUtanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJzdG9yZS1qc1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///store-js\n");

/***/ })

/******/ });