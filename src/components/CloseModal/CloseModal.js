import React, { useContext } from "react";
import { ModalContext } from "../../contexts/ModalContext/ModalContext";

function CloseModal(props) {
  //
  const { modalsDispatch, modalsAction } = useContext(ModalContext);
  //
  return (
    <span
      onClick={() => modalsDispatch(modalsAction.closeModal())}
      className="rounded-full dark:bg-dark-third text-gray-700 dark:text-white z-50
      px-3 py-1 text-2xl font-bold fixed right-2 bg-gray-300 top-2 cursor-pointer"
    >
      &times;
    </span>
  );
}

export default CloseModal;
