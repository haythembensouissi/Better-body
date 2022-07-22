import "../styles/globals.css";
import "../styles/signup.scss";
// import "../styles/Profile.scss";
import "../styles/searchbar.scss"
import "../styles/workout.css"
import "../styles/diet_cards.css"
import Layout from '../component/layout'
import Navbar from "../component/navbar";

import type { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  return <Layout >  <Component {...pageProps} /></Layout>
   
    

}

export default MyApp;