import styles from "./Grid.module.scss";
import MyStack from "./MyStack";

function Grid({ mouseEnteredKnife }) {
  return (
    <div className={styles.grid}>
      <div className={styles.gridItem__core}>
        <h3 className={styles.listHeading}>Client-side:</h3>
        <ul className={styles.ul}>
          <li className={styles.li}>HTML, CSS, SCSS</li>
          <li className={styles.li}>JavaScript</li>
          <li className={styles.li}>Angular</li>
          <li className={styles.li}>React</li>
        </ul>
      </div>

      <div className={styles.gridItem__animation}>
        <MyStack mouseEnteredKnife={mouseEnteredKnife} />
      </div>

      <div className={styles.gridItem__secondary}>
        <h3 className={styles.listHeading}>Server-side:</h3>
        <ul className={styles.ul}>
          <li className={styles.li}>C#</li>
          <li className={styles.li}>ASP.NET 5 MVC</li>
          <li className={styles.li}>ASP.NET 5 Web API</li>
          <li className={styles.li}>Entity Framework</li>
        </ul>
      </div>
    </div>
  );
}

export default Grid;
