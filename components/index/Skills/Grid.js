import styles from "./Grid.module.scss";
import MyStack from "./MyStack";

function Grid({ mouseEnteredKnife }) {
  return (
    <div className={styles.grid}>
      <div className={styles.gridItem__core}>
        <h3 className={styles.listHeading}>Frontend:</h3>
        <ul className={styles.ul}>
          <li className={styles.li}>HTML, CSS, and JavaScript</li>
          <li className={styles.li}>Can work with any JS framework</li>
          <li className={styles.li}>Enjoy frontend work</li>
        </ul>
      </div>

      {/* <div className={styles.gridItem__animation}>
        <MyStack mouseEnteredKnife={mouseEnteredKnife} />
      </div> */}

      <div className={styles.gridItem__secondary}>
        <h3 className={styles.listHeading}>Backend:</h3>
        <ul className={styles.ul}>
          <li className={styles.li}>C#</li>
          <li className={styles.li}>
            ASP.NET Core/5 Razor Pages, MVC, Web API
          </li>
          <li className={styles.li}>Entity Framework Core</li>
          <li className={styles.li}>SQL</li>
        </ul>
      </div>
    </div>
  );
}

export default Grid;
