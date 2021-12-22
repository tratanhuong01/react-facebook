import React from "react";

function ItemExtensionCall(props) {
  //
  const { icon, addClass } = props;

  return (
    <div className="w-12 h-12 relative mx-2.5 ">
      <span
        className={`${icon} w-12 h-12 rounded-full text-2xl flex bg-opacity-80 z-10
        items-center justify-center cursor-pointer ${addClass}`}
        style={{ backgroundColor: "#3A3B3C" }}
      ></span>
    </div>
  );
}

export default ItemExtensionCall;
