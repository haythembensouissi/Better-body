import "../styles/globals.css";
import "../styles/signup.scss";
import "../styles/Profile.scss";
import type { AppProps } from "next/app";
import Navbar from "./Navbar";
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div>
      <div>
        <Navbar />
      </div>
      <Component {...pageProps} />;
    </div>
  );
}

export default MyApp;
