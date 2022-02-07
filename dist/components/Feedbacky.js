"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _FeedbackyPopup = _interopRequireDefault(require("./FeedbackyPopup"));

require("../styles/Feedbacky.css");

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

var Feedbacky = /*#__PURE__*/function (_Component) {
  _inherits(Feedbacky, _Component);

  var _super = _createSuper(Feedbacky);

  function Feedbacky(props) {
    var _this;

    _classCallCheck(this, Feedbacky);

    _this = _super.call(this, props);
    var iconWidth = '24px';
    var iconHeight = '24px';
    var title = 'Send Your Feedback';
    var url = 'http://localhost:8080/feedbacky-api/sendFeedback';

    if (_this.props.width && _this.props.height) {
      iconWidth = _this.props.width;
      iconHeight = _this.props.height;
    }

    if (_this.props.title) {
      title = _this.props.title;
    }

    if (_this.props.url) {
      url = _this.props.url;
    }

    _this.state = {
      customerId: _this.props.customerId,
      width: iconWidth,
      height: iconHeight,
      title: title,
      url: url,
      showPopup: false
    };
    _this.togglePopup = _this.togglePopup.bind(_assertThisInitialized(_this));
    _this.getIcon = _this.getIcon.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(Feedbacky, [{
    key: "togglePopup",
    value: function togglePopup() {
      this.setState({
        showPopup: !this.state.showPopup
      });
    }
  }, {
    key: "getIcon",
    value: function getIcon() {
      if (this.props.iconColor) {
        return require('../images/ic-feedback-' + this.props.iconColor + '.png');
      } else {
        return require('../images/ic-feedback-black.png');
      }
    }
  }, {
    key: "render",
    value: function render() {
      var image = this.getIcon();
      var style = {
        width: this.state.width,
        height: this.state.height
      };
      return /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("input", {
        type: "image",
        className: "feedbacky_icon",
        src: image,
        onClick: this.togglePopup,
        alt: "feedbacky_icon",
        style: style
      }), this.state.showPopup ? /*#__PURE__*/_react.default.createElement("div", {
        className: "popup"
      }, /*#__PURE__*/_react.default.createElement(_FeedbackyPopup.default, {
        url: this.state.url,
        title: this.state.title,
        closePopup: this.togglePopup.bind(this)
      })) : null);
    }
  }]);

  return Feedbacky;
}(_react.Component);

Feedbacky.propTypes = {
  customerId: _propTypes.default.string.isRequired,
  url: _propTypes.default.string.isRequired,
  iconColor: _propTypes.default.string,
  width: _propTypes.default.string,
  height: _propTypes.default.string,
  title: _propTypes.default.string
};
Feedbacky.defaultProps = {
  customerId: 'customer-1',
  url: 'http://localhost:8080/feedbacky-api/sendFeedback',
  iconColor: 'black',
  width: '24px',
  height: '24px',
  title: 'Send Your Feedback'
};
var _default = Feedbacky;
exports.default = _default;