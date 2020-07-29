// import App from 'next/app'
import "../styles.css";
import DarkModeState from "../contexts/darkMode/DarkModeState";

function MyApp({ Component, pageProps }) {
  return (
    <DarkModeState>
      <Component {...pageProps} />
    </DarkModeState>
  );
}

export default MyApp;
