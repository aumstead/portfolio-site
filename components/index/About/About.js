import styles from "./About.module.scss";
import { useContext, useState, useEffect, useRef } from "react";
import DarkModeContext from "../../../contexts/darkMode/DarkModeContext";
import Camera from "./Camera";

function About({ onMobile }) {
  const darkModeContext = useContext(DarkModeContext);
  const { isDarkMode } = darkModeContext;

  const tl = useRef(null);
  const isInitialRender = useRef(true);

  const [showPicture, setShowPicture] = useState(false);

  useEffect(() => {
    if (isInitialRender.current) {
      isInitialRender.current = false;
      setTimeout(function () {
        setShowPicture((prevState) => !prevState);
      }, 2000);
      return;
    }

    if (showPicture) {
      tl.current = gsap.timeline();
      tl.current
        .to("#emptyPolaroid", 0.5, { opacity: 0 }, "<1")
        .set("#emptyPolaroid", { backgroundColor: "#fff", opacity: 1 })
        .to("#emptyPolaroid", 1, { backgroundColor: "#e2e2db" })
        .set("#photo", { filter: "grayscale(1) blur(1.5px)" })
        .to("#photo", 2, {
          opacity: 0.25,
          filter: "grayscale(.75) blur(1px)",
        })
        .to("#photo", 5, { opacity: 1, filter: "grayscale(0) blur(0px)" });
    } else {
      tl.current.pause();
      gsap.to("#emptyPolaroid", 0.1, { backgroundColor: "#000", opacity: 1 });
      gsap.to("#photo", 1, { opacity: 0 });
    }
  }, [showPicture]);

  const stylesConfig = {
    arrow: isDarkMode ? `${styles.arrow__dark} ${styles.arrow}` : styles.arrow,
  };

  return (
    <section className={styles.section}>
      <a className={styles.anchor} id="about" />
      <div className={styles.headingFlexContainer}>
        <h2 className={styles.title}>Bio</h2>
        <div className={styles.headingFlexItem__svgs}>
          <span className={styles.hint}>tap the graphics!</span>
          <img
            className={stylesConfig.arrow}
            src="/images/arrow.png"
            alt="Arrow pointing to graphic."
          />
          <Camera
            onMobile={onMobile}
            setShowPicture={setShowPicture}
            isDarkMode={isDarkMode}
          />
        </div>
      </div>
      <div className={styles.aboutFlexContainer}>
        <div className={styles.textContainer}>
          <div className={styles.polaroid}>
            <div id="emptyPolaroid" className={styles.emptyPolaroid}></div>
            <img
              id="photo"
              className={styles.photo}
              src="/images/profilePhoto.jpg"
              alt="Me, Andrew Umstead!"
            />
          </div>
          <p className={styles.text}>
            After graduating I joined the Peace Corps in Ukraine and then spent
            years working in South Korea and China. I got married, had a child,
            and now live in Fishers, Indiana working as a software developer.
          </p>
          <br />
          <p className={styles.text}>
            Right now my free time is usually spent with family. When I get the
            chance I might watch some sports highlights or squeeze in a couple
            rounds of a video game.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
