import "../styles/globals.css";
import "../styles/signup.scss";
// import "../styles/Profile.scss";
import "../styles/searchbar.scss";
import "../styles/workout.css";
import "../styles/diet_cards.css";
import "../styles/blog.css";
import Layout from "../component/layout";

import type { AppProps } from "next/app";
import Navbar from "./Navbar";
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      {" "}
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
