import '../styles/globals.css'
import '../styles/signup.scss'
import '../styles/workout.css'
import type { AppProps } from 'next/app'
import '../styles/searchbar.scss'
function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default MyApp
