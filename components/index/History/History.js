import styles from './History.module.scss'
import { useContext, useState } from "react";
import DarkModeContext from "../../../contexts/darkMode/DarkModeContext";

function History() {
  const darkModeContext = useContext(DarkModeContext);
  const { isDarkMode } = darkModeContext;

  return (
<section>
      <div className={styles.headingFlexContainer}>
        <h2
          className={
            isDarkMode
              ? `${styles.title} ${styles.title__dark}`
              : `${styles.title} ${styles.title__light}`
          }
        >
          A Brief History
        </h2>

      </div>
      
    </section>
  )
}

export default History;