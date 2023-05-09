import { ThemeContext } from '@/context/themeColor'
// Global Styles
import "../styles/bootstrap.min.css";

import "../styles/boxicons.min.css";
import '@/styles/globals.css'
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/style.css";
import "../styles/responsive.css";

import "./globle.css";

export default function App({ Component, pageProps }) {
  return <ThemeContext>
    <Component {...pageProps} />
  </ThemeContext>
}
