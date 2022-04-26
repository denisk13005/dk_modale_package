'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

function styleInject(css, ref) {
  if ( ref === void 0 ) ref = {};
  var insertAt = ref.insertAt;

  if (!css || typeof document === 'undefined') { return; }

  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';

  if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }

  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}

var css_248z = ".openModal{background-color:rgba(27,27,27,.7);height:100vh;left:0;position:fixed;top:0;width:100%;z-index:2}.modalContainer{background-color:#fff;border-radius:90px 0 90px 20px;font-size:36px;height:20vh;left:50%;margin:auto;position:fixed;top:50%;transform:translate(-50%,-50%);width:80vw}#closeModal,.modalContainer{align-items:center;display:flex;justify-content:center}#closeModal{background-color:#00008b;border:none;border-radius:50%;color:#fff;cursor:pointer;height:30px;padding-bottom:3px;position:absolute;right:-15px;top:-15px;transform:scale(.7);transition:transform .2s;width:30px}#closeModal:after{transform:rotate(45deg)}#closeModal:after,#closeModal:before{background-color:#fff;content:\"\";display:block;height:1px;position:absolute;width:12px;z-index:4}#closeModal:before{transform:rotate(-45deg)}#closeModal:hover{border-radius:30% 10%;box-shadow:2px 1px 1px #383838;padding-bottom:5px;transform:scale(1.02)}.closeModal{display:none}.footerModale{background:pink;bottom:0;height:10vh;padding-bottom:20px;position:absolute}.footerModale,.headerModal{align-items:center;display:flex;justify-content:center;width:100%}.headerModal{background-color:green;height:20vh;margin:0}h1{margin:0}";
styleInject(css_248z);

const PropTypes = require("prop-types");
/**
 *
 * @param {boolean} status true if modal is open
 * @param {object}  backgroundModalContainerStyle style for modal background container
 * @param {object} modalContainerStyle style for modal container
 * @param {object} modalMessageStyle style for modal message
 * @param {string} modalMessage modal message
 * @param {func} toggleModale function for close the modal in this component
 * @param {object} closeBtnStyle style for close btn
 * @param {object} headerStyle header style
 * @param {string} headerMsg header message
 * @param {object} footerStyle footer style
 * @param {string} footerMsg footer message
 *
 * @returns
 */

const Modal = props => {
  let {
    status,
    backgroundModalContainerStyle,
    modalContainerStyle,
    modalMessageStyle,
    modalMessage,
    toggleModal,
    closeBtnStyle,
    headerStyle,
    headerMsg,
    footerStyle,
    footerMsg
  } = props;
  return /*#__PURE__*/React__default["default"].createElement("div", {
    className: status ? "openModal" : "closeModal",
    style: backgroundModalContainerStyle
  }, /*#__PURE__*/React__default["default"].createElement("div", {
    className: "headerModal",
    style: headerStyle
  }, /*#__PURE__*/React__default["default"].createElement("h1", null, headerMsg)), /*#__PURE__*/React__default["default"].createElement("div", {
    className: "modalContainer",
    style: modalContainerStyle
  }, /*#__PURE__*/React__default["default"].createElement("p", {
    style: modalMessageStyle
  }, modalMessage), /*#__PURE__*/React__default["default"].createElement("button", {
    id: "closeModal",
    onClick: () => toggleModal(),
    style: closeBtnStyle
  })), /*#__PURE__*/React__default["default"].createElement("div", {
    className: "footerModale",
    style: footerStyle
  }, /*#__PURE__*/React__default["default"].createElement("h1", null, footerMsg)));
};
Modal.propTypes = {
  status: PropTypes.bool.isRequired,
  backgroundModalContainerStyle: PropTypes.object,
  modalContainerStyle: PropTypes.object,
  modalMessageStyle: PropTypes.object,
  modalMessage: PropTypes.string.isRequired,
  toggleModal: PropTypes.func.isRequired,
  closeBtnStyle: PropTypes.object,
  headerStyle: PropTypes.object,
  headerMsg: PropTypes.string,
  footerStyle: PropTypes.object,
  footerMsg: PropTypes.string
};

exports.Modal = Modal;
