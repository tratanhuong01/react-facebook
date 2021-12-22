import React from "react";

function CallAgain(props) {
  //
  const { match } = props;

  const y = window.top.outerHeight / 2 + window.top.screenY - 720 / 2;
  const x = window.top.outerWidth / 2 + window.top.screenX - 1200 / 2;

  return (
    <div
      className="p-2 flex justify-center absolute bottom-6 transform 
        -translate-x-1/2 left-1/2"
      style={{ width: "450px" }}
    >
      <div
        onClick={() => {
          if (match.match.params.typeCall === "videoCall") {
            window.open(
              `../../../../call/videoCall/1`,
              "name",
              `toolbar=1,scrollbars=1,location=1,statusbar=0,menubar=1,resizable=1,width=1200,height=720,
            top=${y},left=${x}`
            );
          } else {
            window.open(
              `../../../../call/audioCall/2`,
              "name",
              `toolbar=1,scrollbars=1,location=1,statusbar=0,menubar=1,resizable=1,width=1200,height=720,
            top=${y},left=${x}`
            );
          }
        }}
        className="w-12 h-12 relative mx-2.5"
      >
        <span
          className={`${
            match.match.params.typeCall === "videoCall"
              ? "bx bxs-video"
              : "bx bxs-phone-call"
          } w-12 h-12 rounded-full text-2xl flex bg-opacity-80 z-10
            items-center justify-center cursor-pointer text-gray-300 `}
          style={{ backgroundColor: "#00a400" }}
        ></span>
      </div>
      <div
        onClick={() => window.close()}
        className="w-12 h-12 relative mx-2.5 "
      >
        <span
          className={`fas fa-times w-12 h-12 rounded-full text-2xl flex bg-opacity-80 z-10
        items-center justify-center cursor-pointer text-gray-300`}
          style={{ backgroundColor: "#3A3B3C" }}
        ></span>
      </div>
    </div>
  );
}

export default CallAgain;
