import React from "react";
import ItemExtensionCall from "./ItemExtensionCall/ItemExtensionCall";

function ExtensionCall(props) {
  //
  return (
    <div
      className="p-2 flex justify-center absolute bottom-6 transform 
      -translate-x-1/2 left-1/2 "
      style={{ width: "450px" }}
    >
      <ItemExtensionCall
        icon={"bx bxs-category-alt"}
        disabled={true}
        addClass="text-gray-300"
      />
      <ItemExtensionCall
        icon={"bx bxs-video-off"
        }
        addClass="text-gray-300"
      />
      <ItemExtensionCall icon={"bx bxs-microphone"} addClass="text-gray-300" />
      <ItemExtensionCall
        icon={"bx bxs-phone"}
        disabled={true}
        addClass="text-red-500 transform rotate-135"
      />
    </div>
  );
}

export default ExtensionCall;
