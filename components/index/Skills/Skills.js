import styles from "./Skills.module.scss";
import { useContext, useState } from "react";
import DarkModeContext from "../../../contexts/darkMode/DarkModeContext";
import Grid from "./Grid";
import Knife from './Knife'

function Skills({ onMobile }) {
  const darkModeContext = useContext(DarkModeContext);
  const { isDarkMode } = darkModeContext;

  const [mouseEnteredKnife, setMouseEnteredKnife] = useState(false);

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
          Skills
        </h2>

        <Knife onMobile={onMobile} setMouseEnteredKnife={setMouseEnteredKnife}/>
      </div>
      <Grid
        mouseEnteredKnife={mouseEnteredKnife}
      />
    </section>
  );
}

export default Skills;
