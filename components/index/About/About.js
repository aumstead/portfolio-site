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
            I've been studying web development for over 2 1/2 years now. After a
            hectic 2020, I've finally returned to my hometown of Indianapolis,
            and am looking for a developer position.
          </p>
          <br />
          <h3 className={styles.listHeading}>A brief history of my studies</h3>
          <p className={styles.text}>
            I started out trying to master the core technologies of HTML, CSS,
            and JS. I then focused on React for a while. Fast-forward past some
            experimenting, I dove headfirst into C# and .NET Core. I also added
            Angular to the mix, and now, after 2 1/2 years, my current stack of
            preference is Angular, .NET 5 Web API, and Entity Framework.
          </p>
          <br />
          <h3 className={styles.listHeading}>Personal Life</h3>
          <p className={styles.text}>
            My perennial hobbies are movies and TV shows. Gaming and reading
            have taken a backseat to coding in recent years. I miss both and
            hope to pick them back up soon. I'm not sure if I exercise or
            participate in outdoor activities enough to call them hobbies per
            se, but I'd like to change that.
          </p>
          <br />
          <p className={styles.text}>
            I've lived abroad for quite some time now, and I suppose that's
            become a unique aspect of my person. I hope some of that experience
            might be seen as an asset by my future employer and coworkers. I
            certainly feel it has shaped me in a number of positive ways.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
