
import "../styles/globals.css";
import "../styles/signup.scss";
// import "../styles/Profile.scss";
import "../styles/searchbar.scss"
import "../styles/workout.css"
import "../styles/diet_cards.css"
import type { AppProps } from "next/app";


function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
