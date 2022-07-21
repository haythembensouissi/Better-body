import "../styles/globals.css";
import "../styles/signup.scss";
// import "../styles/Profile.scss";
import "../styles/searchbar.scss"
import "../styles/workout.css"
import "../styles/diet_cards.css"
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
