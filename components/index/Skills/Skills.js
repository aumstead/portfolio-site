import styles from "./Skills.module.scss";
import { useState } from "react";
import Grid from "./Grid";
import Knife from "./Knife";

function Skills({ onMobile }) {
  const [mouseEnteredKnife, setMouseEnteredKnife] = useState(false);

  return (
    <section className={styles.section}>
      <div className={styles.headingFlexContainer}>
        <h2 className={styles.title}>Skills</h2>

        <Knife
          onMobile={onMobile}
          setMouseEnteredKnife={setMouseEnteredKnife}
        />
      </div>
      <Grid mouseEnteredKnife={mouseEnteredKnife} />
    </section>
  );
}

export default Skills;
