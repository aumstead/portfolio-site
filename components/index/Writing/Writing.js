import styles from "./Writing.module.scss";
import { useContext, useState } from "react";
import DarkModeContext from "../../../contexts/darkMode/DarkModeContext";
import Post from "./Post";
import Book from "./Book";
import Text from "./Text";

function Writing() {
  const darkModeContext = useContext(DarkModeContext);
  const { isDarkMode } = darkModeContext;

  const [mouseEnteredBook, setMouseEnteredBook] = useState(false);

  return (
    <section>
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
          <Book
            setMouseEnteredBook={setMouseEnteredBook}
          />
        </div>
      </div>
      <Post />
      <Post />
      <Post />
    </section>
  );
}

export default Writing;
