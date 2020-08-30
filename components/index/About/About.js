import styles from "./About.module.scss";
import { useContext, useState, useEffect, useRef } from "react";
import DarkModeContext from "../../../contexts/darkMode/DarkModeContext";
import Camera from "./Camera";

function About({ onMobile }) {
  const darkModeContext = useContext(DarkModeContext);
  const { isDarkMode } = darkModeContext;

  const tl = useRef(null);
  const firstUpdate = useRef(true);

  const [showPicture, setShowPicture] = useState(false);

  useEffect(() => {
    if (firstUpdate.current) {
      firstUpdate.current = false;
      return;
    }

    if (showPicture) {
      tl.current = gsap.timeline();
      tl.current
        .to("#emptyPolaroid", 0.5, { opacity: 0 }, "<1")
        .set("#emptyPolaroid", { backgroundColor: "#fff", opacity: 1 })
        .to("#emptyPolaroid", 1, { backgroundColor: "#e2e2db" })
        .set("#photo", { filter: "grayscale(1) blur(3px)" })
        .to("#photo", 2, {
          opacity: 0.25,
          filter: "grayscale(.75) blur(1.5px)",
        })
        .to("#photo", 5, { opacity: 1, filter: "grayscale(0) blur(0px)" });
    } else {
      tl.current.pause();
      gsap.to("#emptyPolaroid", 0.1, { backgroundColor: "#000", opacity: 1 });
      gsap.to("#photo", 1, { opacity: 0 });
    }
  }, [showPicture]);

  return (
    <section className={styles.section}>
      <a className={styles.anchor} id="about" />
      <div className={styles.headingFlexContainer}>
        <h2
          className={
            isDarkMode
              ? `${styles.title} ${styles.title__dark}`
              : `${styles.title} ${styles.title__light}`
          }
        >
          About
        </h2>
        <div className={styles.headingFlexItem__svgs}>
          <span className={styles.hint}>tap the graphics!</span>
          <img
            className={
              isDarkMode
                ? `${styles.arrow__dark} ${styles.arrow}`
                : styles.arrow
            }
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
            I'm currently in Chongqing, China. As soon as my wife gets her green
            card, we'll be moving to the states. Initially, we'll be in
            Indianapolis, IN, but, we're willing to relocate pretty much
            anywhere.
          </p>
          <br />
          <p className={styles.text}>
            I'm 100% ready to start my first job in web development. I can't
            wait. There's nothing I want more. I've been devouring resources for
            two years, and now, I'm finally able to return home and start
            applying for jobs.
          </p>
          <br />
          <p className={styles.text}>
            I've lived abroad for a while, and I suppose that's come to somewhat
            define a part of who I am. But, my wife and I have decided to move
            back to the states to be closer to family and settle down. My
            long-term goals revolve around building a family, being part of a
            community, and, of course, a career as a developer.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
