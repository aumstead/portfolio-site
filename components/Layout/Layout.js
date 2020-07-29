import Head from "next/head";
import Header from "./Header";
import styles from "./Layout.module.css";
import DarkModeContext from "../../contexts/darkMode/DarkModeContext";
import { useContext } from "react";

export default function Layout({ children, pageTitle, ...props }) {
  const darkModeContext = useContext(DarkModeContext);
  const { isDarkMode } = darkModeContext;

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>{pageTitle}</title>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.4.1/gsap.min.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.4.1/MotionPathPlugin.min.js"></script>
      </Head>
      <div className={isDarkMode ? styles.layoutDark : styles.layoutLight}>
        <Header />
        <main className={styles.content}>{children}</main>
      </div>
      <footer>Footer</footer>
    </>
  );
}
