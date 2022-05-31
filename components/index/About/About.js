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
        <h2 className={styles.title}>About</h2>
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
            At the moment, my daily work consists of using ASP.NET, Oracle,
            Telerik UI, and Azure DevOps to develop and maintain applications. I
            very much enjoy working with these technologies.
          </p>
          <br />
          <p className={styles.text}>
            I've also studied React and Angular extensively, and used them both
            for personal projects. I believe with a short refresher, I could
            start using these tools professionally. I'm confident that I could
            ramp up quite quickly.
          </p>
          <br />
          <p className={styles.text}>
            I'm a self-taught developer and career-changer. I feel incredibly
            fortunate to have made the transition professionally into software
            development. It took a lot of hard work and dedication, and it was
            worth every minute. While I'm happy with my current position, I'm
            always open to opportunities that might offer me the chance to grow
            as a developer and team member in new and wonderful ways.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
