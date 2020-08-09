// import App from 'next/app'
import "../styles.css";
import DarkModeState from "../contexts/darkMode/DarkModeState";
import "prismjs/themes/prism-tomorrow.css";

function MyApp({ Component, pageProps }) {

  return (
    <DarkModeState>
      <Component {...pageProps} />
    </DarkModeState>
  );
}

export default MyApp;
