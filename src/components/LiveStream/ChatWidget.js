import React, { useEffect } from "react";

const ChatWidget = ({ performerId }) => {
  useEffect(() => {
    function chatWidget(id) {
      //   console.log(window.outerWidth, window.innerWidth);
      var w = Math.abs(0.60 * window.outerWidth);
      if (window.innerWidth > 767 && window.innerWidth < 991) {
        w = Math.abs(0.97 * window.outerWidth);
      }
      var h = Math.abs(0.7 * w);
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
        <div id="object_container"  style={{width : '100%', height : '100%'}}></div>
      </div>
    </div>
  );
};

export default ChatWidget;
