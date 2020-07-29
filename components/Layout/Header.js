import Link from "next/link";
import styles from "./Header.module.css";
import DarkModeContext from "../../contexts/darkMode/DarkModeContext";
import { useContext } from "react";
import Vader from "./Vader";
import Yoda from "./Yoda";

export default function Header() {
  const darkModeContext = useContext(DarkModeContext);
  const { isDarkMode, setIsDarkMode } = darkModeContext;

  function handleClick(e) {
    setIsDarkMode(() => !isDarkMode);
  }

  return (
    <>
      <header className={styles.header}>
        <button className={styles.toggleDarkBtn} onClick={handleClick}>
          {isDarkMode ? (
            <img className={styles.yoda} src="/yoda.png" alt="" />
          ) : (
            <Vader />
          )}
        </button>
        
        <nav className="nav">
          <Link href="/projects">
            <a className={isDarkMode ? styles.darkBtn : styles.lightBtn}>
              Projects
            </a>
          </Link>
          <Link href="/blog">
            <a className={isDarkMode ? styles.darkBtn : styles.lightBtn}>
              Blog
            </a>
          </Link>
          <Link href="/about">
            <a className={isDarkMode ? styles.darkBtn : styles.lightBtn}>
              About
            </a>
          </Link>
          <Link href="/">
            <a className={isDarkMode ? styles.darkBtn : styles.lightBtn}>
              Home
            </a>
          </Link>
        </nav>
      </header>
    </>
  );
}
