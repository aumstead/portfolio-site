// import App from 'next/app'
import "../styles.css";
import DarkModeState from "../contexts/darkMode/DarkModeState";
import MobileState from "../contexts/mobile/MobileState";
import "prismjs/themes/prism-tomorrow.css";

function MyApp({ Component, pageProps }) {
  return (
    <DarkModeState>
      <MobileState>
        <Component {...pageProps} />
      </MobileState>
    </DarkModeState>
  );
}

export default MyApp;
