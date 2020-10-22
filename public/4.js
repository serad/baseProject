(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[4],{

/***/ "./resources/js/routes/Login.jsx":
/*!***************************************!*\
  !*** ./resources/js/routes/Login.jsx ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Login; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ant-design/icons */ "./node_modules/@ant-design/icons/es/index.js");
/* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/authentication.service */ "./resources/js/services/authentication.service.jsx");
/* harmony import */ var react_transition_group__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-transition-group */ "./node_modules/react-transition-group/esm/index.js");
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






var layout = {
  labelCol: {
    span: 12
  },
  wrapperCol: {
    span: 24
  }
};

var Login = /*#__PURE__*/function (_Component) {
  _inherits(Login, _Component);

  var _super = _createSuper(Login);

  function Login(props) {
    var _this;

    _classCallCheck(this, Login);

    _this = _super.call(this, props);
    _this.state = {
      loginError: false,
      loginErrorMessage: false
    }; // redirect to home if already logged in

    if (_services_authentication_service__WEBPACK_IMPORTED_MODULE_3__["authenticationService"].currentUserValue) {
      _this.props.history.push("/");
    }

    _this.handleSubmit = _this.handleSubmit.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(Login, [{
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, prevState) {
      this.state.loginError = prevState.loginError;
      this.state.loginErrorMessage = prevState.loginErrorMessage;
    }
  }, {
    key: "handleSubmit",
    value: function handleSubmit(event) {
      alert("A name was submitted: " + this.state.value);
      event.preventDefault();
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var onFinish = function onFinish(values) {
        console.log("Success:", values);
        _services_authentication_service__WEBPACK_IMPORTED_MODULE_3__["authenticationService"].login(values.email, values.password).then(function (user) {
          var _ref = _this2.props.location.state || {
            from: {
              pathname: "/"
            }
          },
              from = _ref.from;

          _this2.props.history.push(from);
        }, function (error) {
          _this2.setState({
            loginError: true,
            loginErrorMessage: "Incorrect user or password"
          });
        });
      };

      var onFinishFailed = function onFinishFailed(errorInfo) {
        console.log("Failed:", errorInfo);
      };

      var onChange = function onChange() {
        _this2.setState({
          loginFail: false
        });
      };

      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Row"], {
        type: "flex",
        justify: "center",
        align: "middle"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Image"], {
        width: 512,
        src: "/img/_ves.jpg"
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Divider"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Row"], {
        type: "flex",
        justify: "center",
        align: "middle"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Col"], {
        span: 6
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Form"], _extends({}, layout, {
        name: "basic",
        initialValues: {
          remember: true
        },
        onFinish: onFinish,
        onFinishFailed: onFinishFailed,
        onChange: onChange
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Form"].Item, _extends({
        name: "email"
      }, this.state.loginError && {
        help: this.state.loginErrorMessage,
        validateStatus: "error"
      }, {
        rules: [{
          required: true,
          message: "Please input your email!"
        }]
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Input"], {
        prefix: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ant_design_icons__WEBPACK_IMPORTED_MODULE_2__["UserOutlined"], {
          className: "site-form-item-icon"
        }),
        placeholder: "email"
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Form"].Item, {
        name: "password",
        rules: [{
          required: true,
          message: "Please input your Password!"
        }]
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Input"], {
        prefix: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ant_design_icons__WEBPACK_IMPORTED_MODULE_2__["LockOutlined"], {
          className: "site-form-item-icon"
        }),
        type: "password",
        placeholder: "Password"
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Form"].Item, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Form"].Item, {
        name: "remember",
        valuePropName: "checked",
        noStyle: true
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Checkbox"], null, "Remember me")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        className: "login-form-forgot",
        href: ""
      }, "Forgot password")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Form"].Item, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Button"], {
        type: "primary",
        htmlType: "submit",
        className: "login-form-button"
      }, "Log in"), "Or ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: "/register"
      }, "register now!"))))));
    }
  }]);

  return Login;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);



/***/ })

}]);