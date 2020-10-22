(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[1],{

/***/ "./resources/js/helpers/csrf-token.jsx":
/*!*********************************************!*\
  !*** ./resources/js/helpers/csrf-token.jsx ***!
  \*********************************************/
/*! exports provided: getCsrf */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCsrf", function() { return getCsrf; });
function getCsrf() {
  return {
    'X-CSRF-TOKEN': document.querySelector("meta[name=\"csrf-token\"]").getAttribute('content')
  };
}

/***/ }),

/***/ "./resources/js/routes/Register.jsx":
/*!******************************************!*\
  !*** ./resources/js/routes/Register.jsx ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Register; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var _services_registration_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/registration.service */ "./resources/js/services/registration.service.jsx");
/* harmony import */ var react_transition_group__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-transition-group */ "./node_modules/react-transition-group/esm/index.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }





var formItemLayout = {
  labelCol: {
    xs: {
      span: 24
    },
    sm: {
      span: 8
    }
  },
  wrapperCol: {
    xs: {
      span: 24
    },
    sm: {
      span: 16
    }
  }
};
var tailFormItemLayout = {
  wrapperCol: {
    xs: {
      span: 24,
      offset: 0
    },
    sm: {
      span: 16,
      offset: 8
    }
  }
};

var Register = /*#__PURE__*/function (_Component) {
  _inherits(Register, _Component);

  var _super = _createSuper(Register);

  function Register(props) {
    var _this;

    _classCallCheck(this, Register);

    _this = _super.call(this, props);
    _this.state = {
      registerError: false,
      registerMessage: "No error"
    }; //this.registerValidator = this.registerValidator.bind(this);

    return _this;
  }

  _createClass(Register, [{
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, prevState) {
      this.state.registerError = prevState.registerError;
      this.state.registerMessage = prevState.registerMessage;
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var onFinish = function onFinish(values) {
        console.log("Success:", values);
        _services_registration_service__WEBPACK_IMPORTED_MODULE_2__["registrationService"].register(values.email, values.password).then(function (response) {
          if (typeof response.error !== "undefined") {
            _this2.setState({
              registerError: "error",
              registerMessage: response.error
            });
          }
        }, function (error) {
          _this2.setState({
            registerError: error,
            registerMessage: "Error"
          });
        });
      };

      var onFinishFailed = function onFinishFailed(errorInfo) {
        console.log("Failed:", errorInfo);
      };

      var onChange = function onChange() {
        _this2.setState({
          registerError: false
        });
      };

      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Row"], {
        type: "flex",
        justify: "center",
        align: "middle"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Col"], {
        span: 12
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Form"], _extends({}, formItemLayout, {
        name: "register",
        onFinish: onFinish,
        scrollToFirstError: true
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Form"].Item, _extends({
        name: "email",
        label: "E-mail"
      }, this.state.registerError && {
        help: this.state.registerMessage,
        validateStatus: "error"
      }, {
        rules: [{
          type: "email",
          message: "The input is not valid E-mail!"
        }, {
          required: true,
          message: "Please input your E-mail!"
        }]
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Input"], null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Form"].Item, {
        name: "password",
        label: "Password",
        rules: [{
          required: true,
          message: "Please input your password!"
        }],
        hasFeedback: true
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Input"].Password, null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Form"].Item, {
        name: "confirm",
        label: "Confirm Password",
        dependencies: ["password"],
        hasFeedback: true,
        rules: [{
          required: true,
          message: "Please confirm your password!"
        }, function (_ref) {
          var getFieldValue = _ref.getFieldValue;
          return {
            validator: function validator(rule, value) {
              if (!value || getFieldValue("password") === value) {
                return Promise.resolve();
              }

              return Promise.reject("The two passwords that you entered do not match!");
            }
          };
        }]
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Input"].Password, null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Form"].Item, tailFormItemLayout, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Button"], {
        type: "primary",
        htmlType: "submit"
      }, "Register")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "ant-col-xs-24 ant-col-xs-offset-0 ant-col-sm-16 ant-col-sm-offset-8"
      }, "Or ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: "/login"
      }, "Log in"))))));
    }
  }]);

  return Register;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);



/***/ }),

/***/ "./resources/js/services/registration.service.jsx":
/*!********************************************************!*\
  !*** ./resources/js/services/registration.service.jsx ***!
  \********************************************************/
/*! exports provided: registrationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "registrationService", function() { return registrationService; });
/* harmony import */ var Config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! Config */ "Config");
/* harmony import */ var Config__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(Config__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _helpers_csrf_token__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../helpers/csrf-token */ "./resources/js/helpers/csrf-token.jsx");
/* harmony import */ var _helpers_handle_response__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../helpers/handle-response */ "./resources/js/helpers/handle-response.jsx");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




var registrationService = {
  register: register
};

function register(email, password) {
  var requestOptions = {
    method: 'POST',
    headers: _objectSpread({
      'Content-Type': 'application/json'
    }, Object(_helpers_csrf_token__WEBPACK_IMPORTED_MODULE_1__["getCsrf"])()),
    body: JSON.stringify({
      email: email,
      password: password
    })
  };
  return fetch("".concat(Config__WEBPACK_IMPORTED_MODULE_0___default.a.serverUrl, "/user/register"), requestOptions).then(_helpers_handle_response__WEBPACK_IMPORTED_MODULE_2__["handleResponse"]).then(function (response) {
    return response;
  });
}

/***/ })

}]);