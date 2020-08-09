import styles from "./NewTab.module.scss";

function NewTab() {
  return (
    <svg
      className={styles.newTab}
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      width="32"
      height="32"
      viewBox="0 0 32 32"
    >
      <path d="M6 2v24h24v-24h-24zM28 24h-20v-20h20v20zM4 28v-21l-2-2v25h25l-2-2h-21z"></path>
      <path d="M11 8l5 5-6 6 3 3 6-6 5 5v-13z"></path>
    </svg>
  );
}

export default NewTab;
