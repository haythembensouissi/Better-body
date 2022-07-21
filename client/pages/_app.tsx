import "../styles/globals.css";
import "../styles/signup.scss";
import "../styles/Profile.scss";
import type { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
