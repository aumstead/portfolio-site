import styles from "./FastFlashCardsSvg.module.scss";

function FastFlashCardsSvg({ isDarkMode }) {
  return (
    <svg
      className={styles.logo}
      width="150"
      height="150"
      viewBox="0 0 150 150"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M136.478 122.951H13.522C6.63699 122.951 1 116.653 1 108.819V42.1321C1 34.1377 6.78004 28 13.522 28H136.478C143.363 28 149 34.2978 149 42.1321V108.643C149 116.661 143.356 122.951 136.478 122.951Z"
        fill="#212529"
        stroke={isDarkMode ? "#fff" : "#212529"}
        strokeWidth="10"
      />
      <path
        d="M38.1504 58.26H93.0284"
        stroke="white"
        strokeWidth="10"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M38.1506 81.9576H74.5195"
        stroke="white"
        strokeWidth="10"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default FastFlashCardsSvg;
