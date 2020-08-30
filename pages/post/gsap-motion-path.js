import Layout from "../../components/Layout/Layout";
import styles from "./blogPostStyles.module.scss";
import { useContext, useEffect } from "react";
import DarkModeContext from "../../contexts/darkMode/DarkModeContext";
import Prism from "prismjs";
import Link from 'next/link'

export default () => {
  const darkModeContext = useContext(DarkModeContext);
  const { isDarkMode } = darkModeContext;

  useEffect(() => {
    Prism.highlightAll();
  });

  return (
    <Layout>
      <h1 className={styles.h1}>GSAP in React - Part 3: MotionPath Plugin</h1>
      <div className={styles.infoFlexContainer}>
        <div className={styles.infoFlexItem__author}>
          <img
            className={styles.profilePhoto}
            src="/static/images/profilePhoto.jpg"
            alt="Andrew Umstead"
          />
          <span className={styles.byLine}>Andrew Umstead</span>
        </div>
        <span className={styles.date}>August 14th, 2020</span>
      </div>

      <article className={styles.article}>
      <p className={styles.note}>
          *Note: You may want to browse{" "}
          <a
            className={
              isDarkMode
                ? `${styles.linkAnchor} ${styles.linkAnchor__dark}`
                : `${styles.linkAnchor} ${styles.linkAnchor__light}`
            }
            target="_blank"
            href="/post/gsap-tweens-in-react"
          >
            part 1
          </a>{" "}
          of this guide if you want to learn more about the basics of GSAP and using it in React, or{" "}
          <a
            className={
              isDarkMode
                ? `${styles.linkAnchor} ${styles.linkAnchor__dark}`
                : `${styles.linkAnchor} ${styles.linkAnchor__light}`
            }
            target="_blank"
            href="/post/gsap-timelines-in-react"
          >
            part 2
          </a>{" "}if you're interested in seeing an example of a timeline.
        </p>
      </article>
    </Layout>
  )
}