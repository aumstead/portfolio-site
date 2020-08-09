import Link from "next/link";
import styles from "./Header.module.scss";
import DarkModeContext from "../../contexts/darkMode/DarkModeContext";
import { useContext } from "react";
import Vader from "./Vader";

export default function Header() {
  const darkModeContext = useContext(DarkModeContext);
  const { isDarkMode, setIsDarkMode } = darkModeContext;

  function handleClick(e) {
    setIsDarkMode(() => !isDarkMode);
  }

  return (
    <header className={styles.header}>
      <button className={isDarkMode ? styles.darkToggle : styles.lightToggle} onClick={handleClick}>
        {isDarkMode ? (
          <img
            className={styles.yoda}
            src="/static/images/yoda.png"
            alt="Yoda"
          />
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
          <a className={isDarkMode ? styles.darkBtn : styles.lightBtn}>Blog</a>
        </Link>
        <Link href="/about">
          <a className={isDarkMode ? styles.darkBtn : styles.lightBtn}>Photos</a>
        </Link>
        <Link href="/about">
          <a className={isDarkMode ? styles.darkBtn : styles.lightBtn}>About</a>
        </Link>
        <Link href="/">
          <a className={isDarkMode ? styles.darkBtn : styles.lightBtn}>Home</a>
        </Link>
      </nav>
    </header>
  );
}
