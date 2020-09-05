import styles from "./Footer.module.scss";
import { useState, useContext } from "react";
import Pc from "./Pc";
import Disk from "../Footer/Disk";
import Screen from "../Footer/Screen";
import DarkModeContext from "../../../contexts/darkMode/DarkModeContext";
import MobileContext from '../../../contexts/mobile/MobileContext'

function Footer() {
  const darkModeContext = useContext(DarkModeContext);
  const { isDarkMode } = darkModeContext;
  const mobileContext = useContext(MobileContext)
  const { onMobile } = mobileContext

  const [mouseEnteredDisk, setMouseEnteredDisk] = useState(false);

  return (
    <footer id="contact" className={styles.footer}>
      <div className={styles.headingFlexContainer}>
      <span className={styles.hint}>Contact!</span>
          <img className={isDarkMode ? `${styles.arrow__dark} ${styles.arrow}` : styles.arrow} src="/images/arrow.png" alt="Arrow pointing to graphic."/>
        <Disk setMouseEnteredDisk={setMouseEnteredDisk} />
      </div>
      <Pc onMobile={onMobile} mouseEnteredDisk={mouseEnteredDisk} isDarkMode={isDarkMode} />
      <Screen mouseEnteredDisk={mouseEnteredDisk} />
    </footer>
  );
}

export default Footer;
