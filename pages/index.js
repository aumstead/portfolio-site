import styles from "./index.module.scss";
import { useContext } from "react";
import Head from 'next/head'
import DarkModeContext from "../contexts/darkMode/DarkModeContext";
import MobileContext from "../contexts/mobile/MobileContext";
import Layout from "../components/Layout/Layout";
import CleanCodeSvg from "../components/index/CleanCodeSvg/CleanCodeSvg";
import Projects from "../components/index/Projects/Projects";
import Writing from "../components/index/Writing/Writing";
import Skills from "../components/index/Skills/Skills";
import About from "../components/index/About/About";

function Index() {
  const darkModeContext = useContext(DarkModeContext);
  const { isDarkMode } = darkModeContext;
  const mobileContext = useContext(MobileContext);
  const { onMobile } = mobileContext;

  const stylesConfig = {
    heroTitle: isDarkMode
      ? `${styles.heroTitle__dark} ${styles.heroTitle}`
      : `${styles.heroTitle} ${styles.heroTitle__light}`,
  };

  return (
    <Layout>
      <Head>
        <title>Home | andrewumstead.dev</title>
      </Head>
      
      <section className={styles.section}>
        <CleanCodeSvg onMobile={onMobile} />
        <h1 className={stylesConfig.heroTitle}>Andrew Umstead</h1>
        <p className={styles.heroText}>
          Welcome to my site — the place where I try to persuade you to hire me.
          Well, then, this site better impress, right?
        </p>
        <br />
        <p className={styles.heroText}>
          Have a look around — skim, scroll, and try hovering over the little
          graphics (or tapping them) to see an animation!
        </p>
      </section>

      <Projects onMobile={onMobile} />
      <Writing onMobile={onMobile} />
      <About onMobile={onMobile} />
      <Skills onMobile={onMobile} />
    </Layout>
  );
}

export default Index;
