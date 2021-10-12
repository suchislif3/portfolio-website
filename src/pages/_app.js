import { Fragment } from "react";
import Head from 'next/head';
import Theme from "../styles/theme";

function App({ Component, pageProps }) {
  return (
    <Fragment>
      <Head>
        <title>Portfolio - Szabolcs Devecseri [Junior Software Developer]</title>
      </Head>
      <Theme>
        <Component {...pageProps} />
      </Theme>
    </Fragment>
  );
}

export default App;
