import styles from "./Grid.module.scss";
import MyStack from "./MyStack";

function Grid({ mouseEnteredKnife }) {
  return (
    <div className={styles.grid}>
      <div className={styles.gridItem__core}>
        <h3 className={styles.listHeading}>Core:</h3>
        <ul className={styles.ul}>
          <li className={styles.li}>HTML</li>
          <li className={styles.li}>CSS</li>
          <li className={styles.li}>Javascript</li>
          <li className={styles.li}>React</li>
          <li className={styles.li}>Next.js</li>
        </ul>
      </div>

      <div className={styles.gridItem__animation}>
        <MyStack
          mouseEnteredKnife={mouseEnteredKnife}
        />
      </div>

      <div className={styles.gridItem__secondary}>
        <h3 className={styles.listHeading}>Secondary:</h3>
        <ul className={styles.ul}>
          <li className={styles.li}>Node.js</li>
          <li className={styles.li}>PostgreSQL</li>
          <li className={styles.li}>MongoDB</li>
          <li className={styles.li}>Figma</li>
          <li className={styles.li}>Git</li>
        </ul>
      </div>
    </div>
  );
}

export default Grid;
