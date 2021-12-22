import React from "react";
import Webcam from "react-webcam";

function WebcamView(props) {
  //
  const videoConstraints = {
    width: 400,
    height: 230,
    facingMode: "environment",
  };

  return (
    <div className="w-80 h-54 absolute bottom-6 right-3">
      <Webcam
        audio={false}
        height={230}
        screenshotFormat="image/jpeg"
        width={400}
        videoConstraints={videoConstraints}
        className="transform"
        style={{ transform: "scaleX(-1)" }}
      />
    </div>
  );
}

export default WebcamView;
