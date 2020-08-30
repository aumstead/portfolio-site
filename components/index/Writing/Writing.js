import styles from "./Writing.module.scss";
import { useContext, useState, useEffect } from "react";
import DarkModeContext from "../../../contexts/darkMode/DarkModeContext";
import Post from "./Post";
import Book from "./Book";
import Text from "./Text";
import data from "../../../data/posts.json";

function Writing({ onMobile }) {
  const darkModeContext = useContext(DarkModeContext);
  const { isDarkMode } = darkModeContext;

  const [mouseEnteredBook, setMouseEnteredBook] = useState(false);

  return (
    <section className={styles.section}>
      {onMobile ? (
        <div className={styles.headingGrid}>
          <div className={styles.column__left}>
            <h2
              className={
                isDarkMode
                  ? `${styles.title} ${styles.title__dark}`
                  : `${styles.title} ${styles.title__light}`
              }
            >
              Blog
            </h2>
            <Text
              mouseEnteredBook={mouseEnteredBook}
              setMouseEnteredBook={setMouseEnteredBook}
              isDarkMode={isDarkMode}
            />
          </div>
          <Book onMobile={onMobile} setMouseEnteredBook={setMouseEnteredBook} />
        </div>
      ) : (
        <div className={styles.headingFlexContainer}>
          <h2
            className={
              isDarkMode
                ? `${styles.title} ${styles.title__dark}`
                : `${styles.title} ${styles.title__light}`
            }
          >
            Blog
          </h2>
          <div className={styles.flexItem__svgs}>
            <Text
              mouseEnteredBook={mouseEnteredBook}
              setMouseEnteredBook={setMouseEnteredBook}
              isDarkMode={isDarkMode}
            />
            <Book onMobile={onMobile} setMouseEnteredBook={setMouseEnteredBook} />
          </div>
        </div>
      )}
      <Post isDarkMode={isDarkMode} post={data[0]} />
      <Post isDarkMode={isDarkMode} post={data[1]} />
      <Post isDarkMode={isDarkMode} post={data[2]} />
    </section>
  );
}

export default Writing;
