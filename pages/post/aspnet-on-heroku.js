import styles from "./blogPostStyles.module.scss";
import Prism from "prismjs";
import Link from "next/link";
import { useContext, useEffect } from "react";
import Layout from "../../components/Layout/Layout";
import DarkModeContext from "../../contexts/darkMode/DarkModeContext";

export default () => {
  const darkModeContext = useContext(DarkModeContext);
  const { isDarkMode } = darkModeContext;

  useEffect(() => {
    Prism.highlightAll();
  });

  return (
    <Layout>
      <h1 className={styles.h1}>Hosting an ASP.NET App on Heroku</h1>
      <div className={styles.infoFlexContainer}>
        <div className={styles.infoFlexItem__author}>
          <img
            className={styles.profilePhoto}
            src="/images/profilePhoto.jpg"
            alt="Andrew Umstead"
          />
          <span className={styles.byLine}>Andrew Umstead</span>
        </div>
        <span className={styles.date}>May 20th, 2021</span>
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
          of this guide if you want to learn more about the basics of GSAP and
          using it in React, or{" "}
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
          </a>{" "}
          if you're interested in seeing an example of a timeline.
        </p>
      </article>
    </Layout>
  );
};
