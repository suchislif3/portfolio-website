import { Fragment } from "react";
import Theme from "../styles/theme";

function App({ Component, pageProps }) {
  return (
    <Fragment>
      <Theme>
        <Component {...pageProps} />
      </Theme>
    </Fragment>
  );
}

export default App;
