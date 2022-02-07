"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

require("../styles/Feedbacky.css");

var _icClose = _interopRequireDefault(require("../images/ic-close.png"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var FeedbackyPopup = /*#__PURE__*/function (_Component) {
  _inherits(FeedbackyPopup, _Component);

  var _super = _createSuper(FeedbackyPopup);

  function FeedbackyPopup(props) {
    var _this;

    _classCallCheck(this, FeedbackyPopup);

    _this = _super.call(this, props);
    _this.state = {
      value: '',
      sendFeedback: false,
      isRequestSuccessful: false
    };
    _this.handleChange = _this.handleChange.bind(_assertThisInitialized(_this));
    _this.sendFeedback = _this.sendFeedback.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(FeedbackyPopup, [{
    key: "handleChange",
    value: function handleChange(event) {
      this.setState({
        value: event.target.value
      });
    }
  }, {
    key: "sendFeedback",
    value: function sendFeedback() {
      var _this2 = this;

      if (this.state.value !== '') {
        var data = {
          customerId: this.props.customerId,
          message: this.state.value
        };
        fetch(this.props.url, {
          method: 'POST',
          credentials: 'include',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Access-Control-Allow-Credentials': true
          },
          body: JSON.stringify(data)
        }).then(function (res) {
          _this2.setState({
            sendFeedback: true
          });

          if (res.ok) {
            _this2.setState({
              isRequestSuccessful: true
            });
          }
        }).catch(function (err) {
          _this2.setState({
            sendFeedback: true
          });

          console.log(err);
        });
      } else {
        alert("please input text");
      }
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/_react.default.createElement("div", {
        className: "popup_inner"
      }, /*#__PURE__*/_react.default.createElement("input", {
        type: "image",
        className: "close_icon",
        src: _icClose.default,
        onClick: this.props.closePopup,
        alt: "close_icon"
      }), !this.state.sendFeedback ? /*#__PURE__*/_react.default.createElement("div", {
        className: "popup_form"
      }, /*#__PURE__*/_react.default.createElement("h3", null, this.props.title), /*#__PURE__*/_react.default.createElement("textarea", {
        rows: "7",
        cols: "35",
        value: this.state.value,
        onChange: this.handleChange,
        maxLength: "2000",
        wrap: "soft"
      }), /*#__PURE__*/_react.default.createElement("button", {
        onClick: this.sendFeedback
      }, "Send")) : /*#__PURE__*/_react.default.createElement("div", null, this.state.isRequestSuccessful ? /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("h1", {
        className: "successMessage"
      }, "We have got your feedback")) : /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("h1", {
        className: "failedMessage"
      }, "A technical problem has occurred. Please try again later."))));
    }
  }]);

  return FeedbackyPopup;
}(_react.Component);

FeedbackyPopup.propTypes = {
  customerId: _propTypes.default.string.isRequired,
  url: _propTypes.default.string.isRequired,
  title: _propTypes.default.string
};
FeedbackyPopup.defaultProps = {
  customerId: 'customerId',
  url: 'http://localhost:8080/feedbacky-api/sendFeedback',
  title: 'Send Your Feedback'
};
var _default = FeedbackyPopup;
exports.default = _default;