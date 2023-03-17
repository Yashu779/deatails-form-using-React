import React from "react";
import Button from "./Button";
import Card from "./Card";
import classes from "./ErrorModel.module.css";
import ReactDom from "react-dom";

const Backdrop = (props) => {
  return <div className={classes.backdrop} onClick={props.onConfirm} />;
};

const ModalOverlay = (props) => {
  return (
    <Card className={classes.modal}>
      <header className={classes.header}>
        <h2>{props.title}</h2>
      </header>
      <div className={classes.content}>
        <p>{props.message}</p>
      </div>
      <footer className={classes.actions}>
        <Button onClick={props.onConfirm}>okay</Button>
      </footer>
    </Card>
  );
};

const ErrorModel = (props) => {
  return <>
  {
    ReactDom.createPortal(<Backdrop onConfirm={props.onConfirm}></Backdrop>,
    document.getElementById("backdrop-root")
    )
  }

  {
    ReactDom.createPortal(<ModalOverlay
    title={props.title}
    message={props.message}
    onConfirm={props.onConfirm}
    >

    </ModalOverlay>,document.getElementById("overlay-root"))
  }
  </>;
};

export default ErrorModel;
