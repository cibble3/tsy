import React, { useEffect } from "react";

const ChatWidget = ({ performerId }) => {
  useEffect(() => {
    function chatWidget(id) {
      var w = 0;
      var h = 0;
      // console.log(window.innerWidth);
      if (window.innerWidth >= 320 && window.innerWidth < 375) {
        // For mobile-small
        w = Math.abs(0.92 * window.innerWidth);
        h = Math.abs(0.99 * window.innerWidth);
      } else if (window.innerWidth >= 375 && window.innerWidth < 425) {
        // For mobile-large
        w = Math.abs(0.93 * window.innerWidth);
        h = Math.abs(0.99 * window.innerWidth);
      } else if (window.innerWidth >= 425 && window.innerWidth < 768) {
        // For mobile-large
        w = Math.abs(0.94 * window.innerWidth);
        h = Math.abs(0.99 * window.innerWidth);
      } else if (window.innerWidth >= 768 && window.innerWidth < 850) {
        // For tablet
        w = Math.abs(0.67 * window.innerWidth);
        h = Math.abs(0.68 * window.innerWidth);
      } else if (window.innerWidth >= 850 && window.innerWidth < 1440) {
        // For laptop
        w = Math.abs(0.555 * window.innerWidth);
        h = Math.abs(0.511 * window.innerWidth);
      } else if (window.innerWidth >= 1440 && window.innerWidth <= 2560) {
        // For laptop-large
        w = Math.abs(0.615 * window.innerWidth);
        h = Math.abs(0.34 * window.innerWidth);
      } else {
        // For 4k
        w = Math.abs(1.5 * window.innerWidth);
      }

      document.getElementById(id).style.width = w + "px";
      document.getElementById(id).style.height = h + "px";
      loadChatWidget();
    }

    function loadChatWidget() {
      var s = document.createElement("script");
      s.setAttribute(
        "src",
        `https://awempt.com/embed/lfcht?c=object_container&site=wl3&cobrandId=201300&psid=mikeeyy3&pstool=320_1&psprogram=cbrnd&campaign_id=&category=&forcedPerformers[]=${performerId}&vp[showChat]=true&vp[chatAutoHide]=false&vp[showCallToAction]=true&vp[showPerformerName]=false&vp[showPerformerStatus]=false&ctaLabelKey=udmn&landingTarget=freechat&filters=&subAffId=${performerId}-mistressworld-chat`
      );
      document.body.appendChild(s);
    }

    chatWidget("chat-block");

    window.onresize = function (e) {
      chatWidget("chat-block");
    };
  }, []);

  return (
    <div id="model-chat" className="model-tab-content">
      <div id="chat-block">
        <div
          id="object_container"
          style={{ width: "100%", height: "100%" }}
        ></div>
      </div>
    </div>
  );
};

export default ChatWidget;
