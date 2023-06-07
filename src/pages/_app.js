import { ThemeContext } from "@/context/themeColor";
// Global Styles
import "../styles/bootstrap.min.css";
import "../styles/boxicons.min.css";
import "@/styles/globals.css";
// import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/style.css";
import "../styles/responsive.css";
import { Provider } from "react-redux";
import store from "../store";
import "./globle.css";
import Script from "next/script";
import { SSRProvider } from "react-bootstrap";

export default function App({ Component, pageProps }) {
  return (
    <>
      {/* <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-P9GVSQ4CFR"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-P9GVSQ4CFR');
        `}
      </Script> */}
      <SSRProvider>
        <Provider store={store}>
          <ThemeContext>
            <Component {...pageProps} />
          </ThemeContext>
        </Provider>
      </SSRProvider>
    </>
  );
}
