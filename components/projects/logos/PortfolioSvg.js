import styles from "./Portfolio.module.scss";

function PortfolioSvg() {
  return (
    <svg
      className={styles.logo}
      width="29"
      height="32"
      viewBox="0 0 29 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M14 18V4C6.268 4 0 10.268 0 18C0 25.732 6.268 32 14 32C21.732 32 28 25.732 28 18C28 15.749 27.468 13.622 26.524 11.738L14 18ZM28.524 7.738C26.225 3.15 21.481 0 16 0V14L28.524 7.738Z"
        fill="#0F9A7A"
      />
    </svg>
  );
}

export default PortfolioSvg;
