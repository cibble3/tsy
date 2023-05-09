import LiveStreamComponent from "@/components/LiveStream";
import ThemeLayout from "@/components/navigation";
import useWindowSize from "@/hooks/useWindowSize";
import DarkTheme from "../components/navigation/dark-themeLive";
import React from "react";

const LiveStream = () => {
  return (
    // <ThemeLayout>
    <DarkTheme>
      <LiveStreamComponent />
    </DarkTheme>
  );
};

export default LiveStream;
