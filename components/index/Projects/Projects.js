import styles from "./Projects.module.scss";
import { useContext, useState, useEffect } from "react";
import DarkModeContext from "../../../contexts/darkMode/DarkModeContext";
import Cards from "./svgs/Cards";
import Carousel from "./Carousel";
import Link from "next/link";

function Projects() {
  const darkModeContext = useContext(DarkModeContext);
  const { isDarkMode } = darkModeContext;

  const [mouseEnteredCards, setMouseEnteredCards] = useState(false);

  return (
    <section className={styles.section}>
      <div className={styles.headingFlexContainer}>
        <h2
          className={
            isDarkMode
              ? `${styles.title} ${styles.title__dark}`
              : `${styles.title} ${styles.title__light}`
          }
        >
          Featured Project
        </h2>
        <div className={styles.headingFlexItem__svgs}>
          <Cards setMouseEnteredCards={setMouseEnteredCards} />
        </div>
      </div>

      <Carousel isDarkMode={isDarkMode} mouseEnteredCards={mouseEnteredCards} />

    </section>
  );
}

export default Projects;
