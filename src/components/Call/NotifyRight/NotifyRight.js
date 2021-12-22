import React, { useEffect, useState } from "react";

function NotifyRight(props) {
  //
  const [show, setShow] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setShow(true);
    }, 1000);
  }, []);

  return (
    <div
      className={`p-1 absolute top-3 right-3 text-gray-300 bg-opacity-60 font-semibold `}
      style={{ width: "380px" }}
    >
      <div
        className={`w-full flex p-3 bg-opacity-80 rounded-lg mb-1.5 ${show ? "hideFade" : ""
          }`}
        style={{
          backgroundColor: "#3A3B3C",
        }}
      >
        <div className="w-12 flex items-center justify-center">
          <span
            className="bx bxs-microphone w-9 h-9 flex items-center justify-center bg-gray-500 text-xl 
            rounded-full"
          ></span>
        </div>
        <div className="flex items-center pl-3">
          Micro được kết nối : Stereo Mix (IDT High Definition Audio CODEC)
        </div>
      </div>
      <div
        className={`w-full flex p-3 bg-opacity-80 rounded-lg mb-1.5 ${show ? "hideFade" : ""
          }`}
        style={{
          backgroundColor: "#3A3B3C",
        }}
      >
        <div className="w-12 flex items-center justify-center">
          <span
            className="bx bx-volume-low w-9 h-9 flex items-center justify-center bg-gray-500 text-xl 
            rounded-full"
          ></span>
        </div>
        <div className="flex items-center pl-3">
          Loa được kết nối : Headphones (X6 stereo) (Bluetooth)
        </div>
      </div>
    </div>
  );
}

export default NotifyRight;
