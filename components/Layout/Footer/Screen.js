import styles from "./Screen.module.scss";
import { useEffect, useRef } from "react";

function Screen({ triggerTimeline }) {
  const isInitialRender = useRef(true);
  const tl = useRef(null);

  useEffect(() => {
    tl.current = gsap.timeline();
    tl.current
      .to("#line1", { duration: 1, text: "Email me!", delay: 1 })
      .to("#line2", { duration: 3, text: "andrew.umstead@gmail.com" })
      .to("#linkedin", { duration: 0.8, opacity: 1 })
      .to("#githubPixel", { duration: 0.8, opacity: 1 })
      .to("#resume", { duration: 1, text: "resume.pdf" });
    tl.current.pause();
  }, []);

  useEffect(() => {
    if (isInitialRender.current) {
      isInitialRender.current = false;
      return;
    }

    if (triggerTimeline) {
      tl.current.restart();
    } else {
      tl.current.seek(0);
      tl.current.pause();
    }
  }, [triggerTimeline]);
  return (
    <div className={styles.container}>
      <p className={styles.text} id="line1"></p>
      <a
        className={`${styles.text} ${styles.underline}`}
        id="line2"
        href="mailto:andrew.umstead@gmail.com"
      ></a>
      <div className={styles.socialMediaContainer}>
        <a
          id="linkedin"
          className={styles.linkedInAnchor}
          href="https://linkedin.com/in/aumstead"
          target="_blank"
        >
          <img
            className={styles.linkedin}
            src="/images/linkedin.png"
            alt="LinkedIn icon"
          />
        </a>
        <a
          id="githubPixel"
          className={styles.githubAnchor}
          href="https://github.com/aumstead"
          target="_blank"
        >
          <img
            className={styles.github}
            src="/images/githubPixel.png"
            alt="Github icon"
          />
        </a>
      </div>
      <a
        className={`${styles.text} ${styles.underline}`}
        id="resume"
        href="/resume.pdf"
        target="_blank"
      ></a>
    </div>
  );
}

export default Screen;
