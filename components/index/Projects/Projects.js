import styles from "./Projects.module.scss";
import { useContext, useState } from "react";
import DarkModeContext from "../../../contexts/darkMode/DarkModeContext";
import Grid from "./Grid";
import Stapler from "./svgs/Stapler";
import Scissors from "./svgs/Scissors";
import PaperclipAnimation from "./svgs/PaperclipAnimation";
import Explosion from "./svgs/Explosion";

function Projects() {
  const darkModeContext = useContext(DarkModeContext);
  const { isDarkMode } = darkModeContext;

  const [paperclipsRunning, setPaperclipsRunning] = useState(false);
  const [mouseEnteredStapler, setMouseEnteredStapler] = useState(false);
  const [mouseEnteredScissors, setMouseEnteredScissors] = useState(false);

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
          Projects
        </h2>
        <div className={styles.headingFlexItem__svgs}>
          {/* <Stapler
            setMouseEnteredStapler={setMouseEnteredStapler}
          /> */}
          <Scissors
            setMouseEnteredScissors={setMouseEnteredScissors}
            paperclipsRunning={paperclipsRunning}
            setPaperclipsRunning={setPaperclipsRunning}
          />
        </div>
      </div>

      <PaperclipAnimation
        mouseEnteredScissors={mouseEnteredScissors}
        setMouseEnteredScissors={setMouseEnteredScissors}
        setPaperclipsRunning={setPaperclipsRunning}
      />
      <Explosion
        mouseEnteredStapler={mouseEnteredStapler}
        setMouseEnteredStapler={setMouseEnteredStapler}
      />
      <Grid isDarkMode={isDarkMode}/>
    </section>
  );
}

export default Projects;
