import styles from "./Grid.module.scss";
import Link from "next/link";

function Grid({ isDarkMode }) {
  return (
    <div className={styles.grid}>
      <Link href="/projects#dgifolios">
        <a
          className={
            isDarkMode
              ? `${styles.project} ${styles.project__dark}`
              : `${styles.project} ${styles.project__light}`
          }
        >
          <h3 className={styles.title}>dgifolios</h3>
          <p className={styles.text}>
            A full-stack web app that allows users to track and share their
            stock portfolios and dividends.
          </p>
          <span
            className={
              isDarkMode
                ? `${styles.readMore} ${styles.readMore__dark}`
                : `${styles.readMore} ${styles.readMore__light}`
            }
          >
            Read more &rarr;
          </span>
        </a>
      </Link>

      <Link href="/projects#massage-fluke">
        <a
          className={
            isDarkMode
              ? `${styles.project} ${styles.project__dark}`
              : `${styles.project} ${styles.project__light}`
          }
        >
          <h3 className={styles.title}>Massage Fluke</h3>
          <p className={styles.text}>
            A website and blog for a small business owner.
          </p>
          <span
            className={
              isDarkMode
                ? `${styles.readMore} ${styles.readMore__dark}`
                : `${styles.readMore} ${styles.readMore__light}`
            }
          >
            Read more &rarr;
          </span>
        </a>
      </Link>

      <Link href="/projects#recall-chek">
        <a
          className={
            isDarkMode
              ? `${styles.project} ${styles.project__dark}`
              : `${styles.project} ${styles.project__light}`
          }
        >
          <h3 className={styles.title}>RecallChek</h3>
          <p className={styles.text}>
            A website for a service offered by Residential Warranty Services.
          </p>
          <span
            className={
              isDarkMode
                ? `${styles.readMore} ${styles.readMore__dark}`
                : `${styles.readMore} ${styles.readMore__light}`
            }
          >
            Read more &rarr;
          </span>
        </a>
      </Link>

      <Link href="/projects#white-sands">
        <a
          className={styles.project}
          className={
            isDarkMode
              ? `${styles.project} ${styles.project__dark}`
              : `${styles.project} ${styles.project__light}`
          }
        >
          <h3 className={styles.title}>White Sands</h3>
          <p className={styles.text}>
            A mock landing page for an island resort.
          </p>
          <span
            className={
              isDarkMode
                ? `${styles.readMore} ${styles.readMore__dark}`
                : `${styles.readMore} ${styles.readMore__light}`
            }
          >
            Read more &rarr;
          </span>
        </a>
      </Link>

      <div className={styles.linkGridItem}>
        <Link href="/">
          <a
            className={
              isDarkMode
                ? `${styles.link} ${styles.link__dark}`
                : `${styles.link} ${styles.link__light}`
            }
          >
            View all &rarr;
          </a>
        </Link>
      </div>
    </div>
  );
}

export default Grid;
