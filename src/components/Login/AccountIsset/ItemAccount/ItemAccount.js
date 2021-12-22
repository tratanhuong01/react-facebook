import React, { useContext } from "react";
import { ModalContext } from "../../../../contexts/ModalContext/ModalContext";

ItemAccount.propTypes = {};

function ItemAccount(props) {
  //
  const { modalsDispatch, modalsAction } = useContext(ModalContext);
  //
  return (
    <div
      onClick={() => modalsDispatch(modalsAction.openModalLogin(true))}
      className="w-1/4 mr-5 mt-5 relative border border-solid border-gray-300 hover:shadow-main cursor-pointer"
    >
      <img
        src="http://res.cloudinary.com/tratahuong01/image/upload/v1623289152/Avatar/d5peo862j01zy9btpuee.jpg"
        className="w-full mx-auto object-cover h-40"
        alt=""
      />
      <p className="font-semibold my-3 text-center text-xm">Trà Hưởng</p>
      <span
        className="absolute top-1 left-1 cursor-pointer px-1.5 flex  items-center hover:bg-white hover:-left-2 
        rounded-full bg-gray-100 cursor-pointer font-semibold justify-center transform hover:scale-125 hover:-top-2 "
      >&times;</span>
      <span className="text-white font-bold w-6 h-6 rounded-full -top-1.5 -right-1.5 flex justify-center 
      items-center bg-red-500 absolute text-xs">
        +9
      </span>
    </div>
  );
}

export default ItemAccount;
