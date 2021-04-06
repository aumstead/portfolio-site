import styles from "./Projects.module.scss";
import { useContext, useState } from "react";
import DarkModeContext from "../../../contexts/darkMode/DarkModeContext";
import Cards from "./Cards";
import Carousel from "./Carousel";

function Projects({ onMobile }) {
  const darkModeContext = useContext(DarkModeContext);
  const { isDarkMode } = darkModeContext;

  const [mouseEnteredCards, setMouseEnteredCards] = useState(false);

  const stylesConfig = {
    arrow: isDarkMode ? `${styles.arrow__dark} ${styles.arrow}` : styles.arrow,
  };

  return (
    <section className={styles.section}>
      <div className={styles.headingFlexContainer}>
        <h2 className={styles.title}>Featured Project</h2>
        <div className={styles.headingFlexItem__svgs}>
          <span className={styles.hint}>hover me!</span>
          <img
            className={stylesConfig.arrow}
            src="/images/arrow.png"
            alt="Arrow pointing to graphic."
          />
          <Cards
            onMobile={onMobile}
            setMouseEnteredCards={setMouseEnteredCards}
          />
        </div>
      </div>

      <Carousel
        onMobile={onMobile}
        isDarkMode={isDarkMode}
        mouseEnteredCards={mouseEnteredCards}
      />
    </section>
  );
}

export default Projects;
