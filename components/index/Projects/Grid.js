import styles from "./Grid.module.scss";
import Link from "next/link";

function Grid() {
  return (
    <div className={styles.grid}>
      <div className={`${styles.project} dgifolios`}>
        <h3 className={styles.title}>dgifolios</h3>
        <p className={styles.text}>
          A full-stack web app that allows users to track and share their stock
          portfolios and dividends.
        </p>
        <span className={styles.readMore}>Read more &rarr;</span>
      </div>

      <div className={styles.project}>
        <h3 className={styles.title}>RecallChek</h3>
        <p className={styles.text}>
          A website for a service offered by Residential Warranty Services.
        </p>
        <span className={styles.readMore}>Read more &rarr;</span>
      </div>

      <div className={styles.project}>
        <h3 className={styles.title}>Massage Fluke</h3>
        <p className={styles.text}>
          A website and blog for a small business owner.
        </p>
        <span className={styles.readMore}>Read more &rarr;</span>
      </div>

      <div className={styles.project}>
        <h3 className={styles.title}>White Sands</h3>
        <p className={styles.text}>A mock landing page for an island resort.</p>
        <span className={styles.readMore}>Read more &rarr;</span>
      </div>

      <div className={styles.linkGridItem}>
        <Link href="/">
          <a className={styles.link}>View all &rarr;</a>
        </Link>
      </div>
    </div>
  );
}

export default Grid;
