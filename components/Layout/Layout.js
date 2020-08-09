import Head from "next/head";
import Header from "./Header";
import styles from "./Layout.module.scss";
import DarkModeContext from "../../contexts/darkMode/DarkModeContext";
import { useContext } from "react";
import Footer from "./Footer";

export default function Layout({ children, ...props }) {
  const darkModeContext = useContext(DarkModeContext);
  const { isDarkMode } = darkModeContext;

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/* <title>{pageTitle}</title> */}

        {/* <script src="prism.js"></script>
        <link href="/prism.css" rel="stylesheet" /> */}
        <link
          href="https://fonts.googleapis.com/css2?family=Source+Code+Pro&display=swap"
          rel="stylesheet"
        ></link>

        {/* favicon */}
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest"></link>
      </Head>
      <div className={isDarkMode ? styles.layoutDark : styles.layoutLight}>
        <Header />

        <main className={styles.content}>{children}</main>

        <Footer />
        <script src="/gsap.min.js"></script>
        <script src="/MotionPathPlugin.min.js"></script>
      </div>
    </>
  );
}
