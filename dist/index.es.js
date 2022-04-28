import React from 'react';

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

var css_248z = ".openModal{background-color:rgba(27,27,27,.1);height:100vh;left:0;position:fixed;top:0;width:100%;z-index:2}p{font-size:24px}.headerModal{align-items:center;background:linear-gradient(rgba(0,0,0,.8),#fff);border-radius:20px 5px 0 0;color:#fff;display:flex;height:7vh;justify-content:center;position:absolute;top:0;width:100%}.footerModal p,.headerModal p{font-size:14px}#closeModal{align-items:center;background-color:#fff;border:none;border-radius:50%;color:#fff;cursor:pointer;display:flex;height:20px;justify-content:center;padding-bottom:3px;position:absolute;right:-10px;top:-10px;transform:scale(.7);transition:transform .2s;width:20px}#closeModal:after{transform:rotate(45deg)}#closeModal:after,#closeModal:before{background-color:#000;content:\"\";display:block;height:1px;position:absolute;width:12px;z-index:4}#closeModal:before{transform:rotate(-45deg)}.modalContainer{align-items:center;background-color:#fff;border-radius:20px 5px 20px 5px;display:flex;flex-direction:column;height:30vh;justify-content:center;left:50%;position:fixed;position:relative;top:50%;transform:translate(-50%,-50%);width:50vw}#closeModal:hover{border-radius:30% 10%;box-shadow:2px 1px 1px #383838;padding-bottom:5px;transform:scale(1.02)}.footerModal{align-items:center;background:linear-gradient(#fff,rgba(0,0,0,.8));border-radius:0 0 20px 5px;bottom:0;color:#fff;display:flex;height:6vh;justify-content:center;position:absolute;width:100%}.closeModal{display:none}";
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
  return /*#__PURE__*/React.createElement("div", {
    className: status ? "openModal" : "closeModal",
    style: backgroundModalContainerStyle
  }, /*#__PURE__*/React.createElement("div", {
    className: "modalContainer",
    style: modalContainerStyle
  }, /*#__PURE__*/React.createElement("div", {
    className: "headerModal",
    style: headerStyle
  }, /*#__PURE__*/React.createElement("p", null, headerMsg), /*#__PURE__*/React.createElement("button", {
    id: "closeModal",
    onClick: () => toggleModal(),
    style: closeBtnStyle
  })), /*#__PURE__*/React.createElement("p", {
    style: modalMessageStyle
  }, modalMessage), /*#__PURE__*/React.createElement("div", {
    className: "footerModal",
    style: footerStyle
  }, /*#__PURE__*/React.createElement("p", null, footerMsg))));
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

export { Modal };
