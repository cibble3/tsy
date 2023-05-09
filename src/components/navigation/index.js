import React, { useContext } from "react";
import DarkTheme from "./dark-themeLive";
import LightTheme from "./light-themeLive";
import { ThemeColors } from "@/context/themeColor";

const ThemeLayout = ({ children }) => {
  const { theme } = useContext(ThemeColors);
  return theme === "dark" ? (
    <DarkTheme>{children}</DarkTheme>
  ) : (
    <LightTheme>{children}</LightTheme>
  );
};

export default ThemeLayout;
