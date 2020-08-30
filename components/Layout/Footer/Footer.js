import styles from "./Footer.module.scss";
import { useEffect, useState, useContext } from "react";
import Pc from "./Pc";
import Disk from "../Footer/Disk";
import Screen from "../Footer/Screen";
import DarkModeContext from "../../../contexts/darkMode/DarkModeContext";

function Footer() {
  const darkModeContext = useContext(DarkModeContext);
  const { isDarkMode } = darkModeContext;

  const [mouseEnteredDisk, setMouseEnteredDisk] = useState(false);

  return (
    <footer className={styles.footer}>
      <div className={styles.headingFlexContainer}>
        <Disk setMouseEnteredDisk={setMouseEnteredDisk} />
      </div>
      <Pc mouseEnteredDisk={mouseEnteredDisk} isDarkMode={isDarkMode} />
      <Screen mouseEnteredDisk={mouseEnteredDisk} />
    </footer>
  );
}

export default Footer;
