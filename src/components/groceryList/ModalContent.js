/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable default-case */
import React, { Fragment } from "react";

function ModalContent({ message: modelContent, type }) {
  const DisplayContent = () => {
    return <h1 className={`modal ${type}`}>{modelContent}</h1>;
  };

  switch (type) {
    case "remove":
      DisplayContent();
      break;
    case "edit":
      DisplayContent();
      break;
    case "add":
      DisplayContent();
      break;
    case "removeAll":
      DisplayContent();
  }

  return <Fragment>{DisplayContent()}</Fragment>;
}

export default ModalContent;
