"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Modal;

var _react = _interopRequireDefault(require("react"));

var _styledComponents = require("styled-components");

var _modal = require("./styles/modal");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* set here your own colors and replace defaultTheme by myTheme
const myTheme = {
  containerBg: " ",
  messageBg: " ",
  messageHoverBg: " ",
  messageHoverTxt: " ",
  borderColor: " ",
  buttonBg: " ",
  buttonHoverBg: " ",
  buttonHoverTxt: " ",
};*/
function Modal(props) {
  return /*#__PURE__*/_react.default.createElement(_styledComponents.ThemeProvider, {
    theme: _modal.defaultTheme
  }, /*#__PURE__*/_react.default.createElement(_modal.ModalContainer, null, /*#__PURE__*/_react.default.createElement(_modal.ModalMessage, null, /*#__PURE__*/_react.default.createElement("p", null, props.text), /*#__PURE__*/_react.default.createElement(_modal.ModalButton, {
    onClick: props.close
  }, "X"))));
}