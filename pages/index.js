import Layout from "../components/Layout/Layout";
import PostList from "../components/PostList";
import styles from "./index.module.scss";
import DarkModeContext from "../contexts/darkMode/DarkModeContext";
import { useContext } from "react";
import CleanCodeSvg from '../components/index/CleanCodeSvg'
import Projects from '../components/index/Projects/Projects'
import Writing from '../components/index/Writing/Writing'
import Skills from '../components/index/Skills/Skills'
import History from '../components/index/History/History'

function Index() {
  const darkModeContext = useContext(DarkModeContext);
  const { isDarkMode } = darkModeContext;
  
  return (
    <Layout>
      <section>
        <CleanCodeSvg />
        <h1
          className={
            isDarkMode
              ? `${styles.heroTitle__dark} ${styles.heroTitle}`
              : `${styles.heroTitle} ${styles.heroTitle__light}`
          }
        >
          Andrew Umstead
        </h1>
        <p
          className={
            isDarkMode
              ? `${styles.heroText} ${styles.heroText__dark}`
              : `${styles.heroText} ${styles.heroText__light}`
          }
        >
          Welcome to my site — the place where I try to persuade you to hire me.
          Well, then, this site better impress, right?
        </p>
        <br/>
        <p
          className={
            isDarkMode
              ? `${styles.heroText} ${styles.heroText__dark}`
              : `${styles.heroText} ${styles.heroText__light}`
          }
        >
          Have a look around — read, click, scroll, hover, and hopefully, enjoy!
        </p>
      </section>

      <Projects />
      <Writing />
      <Skills />
      {/* <History /> */}
    </Layout>
  );
}

export default Index;