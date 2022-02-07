"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.Default = void 0;

var _react = _interopRequireDefault(require("react"));

var _FeedbackyPopup = _interopRequireDefault(require("./FeedbackyPopup"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = {
  title: 'Components/FeedbackyPopup',
  component: _FeedbackyPopup.default
};
exports.default = _default;

var Template = function Template(args) {
  return /*#__PURE__*/_react.default.createElement(_FeedbackyPopup.default, args);
};

var Default = Template.bind({});
exports.Default = Default;
Default.args = {
  customerId: 'customer-1',
  url: 'http://localhost:8080/feedbacky-api/sendFeedback',
  title: 'Send Your Feedback'
};
Default.decorators = [function (Story) {
  return /*#__PURE__*/_react.default.createElement("div", {
    style: {
      width: '75vh',
      minHeight: '75vh'
    }
  }, /*#__PURE__*/_react.default.createElement(Story, null));
}];