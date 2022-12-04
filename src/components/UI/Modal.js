import "./style/Modal.scss";
import ReactDOM from "react-dom";
import { Fragment } from "react";
import { ThemeProvider } from "./../../context/ColorThemeContext";

const portalElement = document.getElementById("overlay");

const Backdrop = (props) => {
  return <div className="backdrop" onClick={props.onClose} />;
};

const ModalOverlay = (props) => {
  return (
    <ThemeProvider>
      <div className="modal">
        <div className="content">{props.children}</div>
      </div>
    </ThemeProvider>
  );
};

const Modal = (props) => {
  return (
    <Fragment>
      <ThemeProvider>
        {ReactDOM.createPortal(
          <Backdrop onClose={props.onClose} />,
          portalElement
        )}
        {ReactDOM.createPortal(
          <ModalOverlay>{props.children}</ModalOverlay>,
          portalElement
        )}
      </ThemeProvider>
    </Fragment>
  );
};

export default Modal;
