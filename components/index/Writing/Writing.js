import styles from "./Writing.module.scss";
import { useContext, useState } from "react";
import DarkModeContext from "../../../contexts/darkMode/DarkModeContext";
import data from "../../../data/posts.json";
import Post from "./Post";
import Book from "./Book";
import Text from "./Text";

function Writing({ onMobile }) {
  const darkModeContext = useContext(DarkModeContext);
  const { isDarkMode } = darkModeContext;

  const [mouseEnteredBook, setMouseEnteredBook] = useState(false);

  function renderHeadingLayout() {
    if (onMobile) {
      return (
        <div className={styles.headingGrid}>
          <div className={styles.column__left}>
            <h2 className={styles.title}>Blog</h2>
          </div>
          <div className={styles.column__right}>
            <Text
              mouseEnteredBook={mouseEnteredBook}
              setMouseEnteredBook={setMouseEnteredBook}
              isDarkMode={isDarkMode}
            />
            <Book
              onMobile={onMobile}
              setMouseEnteredBook={setMouseEnteredBook}
            />
          </div>
        </div>
      );
    } else {
      return (
        <div className={styles.headingFlexContainer}>
          <h2 className={styles.title}>Blog</h2>
          <div className={styles.flexItem__svgs}>
            <Text
              mouseEnteredBook={mouseEnteredBook}
              setMouseEnteredBook={setMouseEnteredBook}
              isDarkMode={isDarkMode}
            />
            <Book
              onMobile={onMobile}
              setMouseEnteredBook={setMouseEnteredBook}
            />
          </div>
        </div>
      );
    }
  }

  return (
    <section className={styles.section}>
      {renderHeadingLayout()}
      <Post isDarkMode={isDarkMode} post={data[0]} />
      <Post isDarkMode={isDarkMode} post={data[1]} />
    </section>
  );
}

export default Writing;
