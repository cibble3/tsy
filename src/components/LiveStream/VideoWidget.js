import React, { useEffect, useState } from "react";

const VideoWidget = ({ playerEmbedUrl }) => {

  function loadVideoWidget() {
    var videoLoadScript = document.getElementById("videoLoadScript");
    if (videoLoadScript) {
      videoLoadScript.remove();
    }

    var s = document.createElement("script");
    s.setAttribute("id", "videoLoadScript");
    s.setAttribute("src", `${playerEmbedUrl}&c=object_container`);
    document.body.appendChild(s);
  }
  function videoWidget(id) {
    // document.getElementById(id).innerHTML = "";

    var w = Math.abs(0.81 * window.outerWidth);
    if (window.innerWidth < 991) {
      w = Math.abs(0.95 * window.outerWidth);
    }

    if (window.innerWidth > 851 && window.innerWidth < 1368) {
      w = Math.abs(0.9 * window.outerWidth);
    }

    var h = Math.abs(0.52 * w);
    document.getElementById(id).style.width = w + "px";
    document.getElementById(id).style.height = h + "px";
    loadVideoWidget();
  }

  useEffect(() => {
    videoWidget("object_container");
    window.onresize = function (e) {
      videoWidget("object_container");
    };
  }, [playerEmbedUrl]);

  return (
    <div id="model-chat" className="model-tab-content">
      <div id="chat-block">
        <div
          data-awe-container-id="object_container"
          id="object_container"
          style={{ width: "100%", height: "100%" }}
        ></div>
      </div>
    </div>
  );
};

export default VideoWidget;
