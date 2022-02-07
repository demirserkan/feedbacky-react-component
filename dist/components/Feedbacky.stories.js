"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.Default = void 0;

var _react = _interopRequireDefault(require("react"));

var _Feedbacky = _interopRequireDefault(require("./Feedbacky"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = {
  title: 'Components/Feedbacky',
  component: _Feedbacky.default,
  argTypes: {
    iconColor: {
      options: ['black', 'blue', 'gray', 'green', 'orange', 'purple', 'red', 'white', 'yellow'],
      control: {
        type: 'select'
      }
    }
  }
};
exports.default = _default;

var Template = function Template(args) {
  return /*#__PURE__*/_react.default.createElement(_Feedbacky.default, args);
};

var Default = Template.bind({});
exports.Default = Default;
Default.args = {
  customerId: 'customer-1',
  url: 'http://localhost:8080/feedbacky-api/sendFeedback',
  iconColor: 'black',
  width: '24px',
  height: '24px',
  title: 'Send Your Feedback'
};