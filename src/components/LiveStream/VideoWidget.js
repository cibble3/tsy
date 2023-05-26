import React, { useEffect } from "react";

const VideoWidget = ({ performerId, playerEmbedUrl }) => {
  useEffect(() => {
    function loadVideoWidget() {
      var s = document.createElement("script");
      s.setAttribute("src", `${playerEmbedUrl}&c=object_container`);
      document.body.appendChild(s);
    }

    function videoWidget(id) {
      var w = Math.abs(0.62 * window.outerWidth);
      if (window.innerWidth > 767 && window.innerWidth < 991) {
        w = Math.abs(0.97 * window.outerWidth);
      }
      var h = Math.abs(0.68 * w);
      document.getElementById(id).style.width = w + "px";
      document.getElementById(id).style.height = h + "px";
      loadVideoWidget();
    }
    videoWidget("object_container");

    window.onresize = function (e) {
      videoWidget("object_container");
    };
  }, []);

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
