import Layout from "../../components/Layout/Layout";
import styles from "./blogPostStyles.module.scss";
import { useContext, useEffect } from "react";
import DarkModeContext from "../../contexts/darkMode/DarkModeContext";
import Prism from "prismjs";

export default () => {
  const darkModeContext = useContext(DarkModeContext);
  const { isDarkMode } = darkModeContext;

  useEffect(() => {
    Prism.highlightAll()
  })

  return (
    <Layout>
      <h1 className={styles.h1}>Greensock in React Part 2: Timelines</h1>
      <div className={styles.infoFlexContainer}>
        <div className={styles.infoFlexItem__author}>
          <img
            className={styles.profilePhoto}
            src="/static/images/profilePhoto.jpg"
            alt="Andrew Umstead"
          />
          <span className={styles.byLine}>Andrew Umstead</span>
        </div>
        <span className={styles.date}>August 4th, 2020</span>
      </div>

      <article className={styles.article}>
      <p className={styles.p}>
          From here, using a timeline isn't so difficult. Similar to how our
          tween is stored in the ref object (
          <code
            className={
              isDarkMode
                ? `${styles.code} ${styles.code__dark}`
                : `${styles.code} ${styles.code__light}`
            }
          >
            myTween.current
          </code>
          ), is built-out and put on "pause" in a{" "}
          <code
            className={
              isDarkMode
                ? `${styles.code} ${styles.code__dark}`
                : `${styles.code} ${styles.code__light}`
            }
          >
            useEffect
          </code>{" "}
          that runs after the component mounts, and "restarts" on an{" "}
          <code
            className={
              isDarkMode
                ? `${styles.code} ${styles.code__dark}`
                : `${styles.code} ${styles.code__light}`
            }
          >
            onMouseEnter
          </code>{" "}
          event, so will our timeline.
        </p>

        <p className={styles.p}>
          Of course, the Greensock page in the docs on{" "}
          <a
            className={
              isDarkMode
                ? `${styles.linkAnchor} ${style.linkAnchor__dark}`
                : `${styles.linkAnchor} ${styles.linkAnchor__light}`
            }
            href="https://greensock.com/docs/v3/GSAP/Timeline"
          >
            timelines
          </a>{" "}
          will be your best resourse on how to use them. For our purposes here,
          while we could make a long, complex animation using{" "}
          <code
            className={
              isDarkMode
                ? `${styles.code} ${styles.code__dark}`
                : `${styles.code} ${styles.code__light}`
            }
          >
            delay
          </code>{" "}
          in the vars object of every tween, it is much easier to use a
          timeline.
        </p>
      </article>
      </Layout>
  )
}