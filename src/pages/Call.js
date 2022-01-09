import React, { useEffect } from "react";
import ExtensionCall from "../components/Call/ExtensionCall/ExtensionCall";
import ItemExtensionCall from "../components/Call/ExtensionCall/ItemExtensionCall/ItemExtensionCall";
import InfoCalling from "../components/Call/InfoCalling/InfoCalling";
import NotifyRight from "../components/Call/NotifyRight/NotifyRight";
function Call(props) {
  //
  const audio = new Audio("../../../sound/messenger.mp3");

  useEffect(() => {
    async function fetch() {
      try {
        audio.play();
        setTimeout(() => {
          window.close();
        }, 20000);
      } catch (error) {
        console.log(error);
      }
    }
    fetch();
    return () => {
      audio.pause();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="w-full bg-black h-screen relative">
      <div className="w-full h-screen relative">
        <InfoCalling
        />
        <ExtensionCall />
        <div className="absolute bottom-6 left-5">
          <ItemExtensionCall
            icon={"bx bx-message-rounded"}
            disabled={true}
            addClass="text-gray-300"
          />
        </div>
        <NotifyRight />
      </div>
    </div >
  );
}

export default Call;
