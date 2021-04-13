import '../styles/globals.css'
import InjectedProviders from "./_providers";

function MyApp({ Component, pageProps }) {
  return <InjectedProviders>
      <Component {...pageProps} />
  </InjectedProviders>
}

export default MyApp
