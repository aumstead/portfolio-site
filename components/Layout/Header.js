import Link from "next/link";
import styles from "./Header.module.scss";
import DarkModeContext from "../../contexts/darkMode/DarkModeContext";
import { useContext, useState } from "react";
import Vader from "./Vader";
import Logo from "./Logo";
import Hamburger from "./Hamburger";

export default function Header() {
  const darkModeContext = useContext(DarkModeContext);
  const { isDarkMode, setIsDarkMode } = darkModeContext;

  const [enteredLogo, setEnteredLogo] = useState(false);

  function handleClick() {
    setIsDarkMode(() => !isDarkMode);
  }

  function handleMouseEnter() {
    setEnteredLogo((prevState) => !prevState);
  }

  return (
    <header
      className={
        isDarkMode
          ? `${styles.header} ${styles.header__dark}`
          : `${styles.header} ${styles.header__light}`
      }
    >
      <Link href="/">
        <a className={styles.logoAnchor}>
          <div
            onMouseEnter={handleMouseEnter}
            className={styles.flexItem__left}
          >
            <Logo enteredLogo={enteredLogo} isDarkMode={isDarkMode} />
            <span
              className={
                isDarkMode
                  ? `${styles.logoText} ${styles.logoText__dark}`
                  : `${styles.logoText} ${styles.logoText__light}`
              }
            >
              Andrew
            </span>
          </div>
        </a>
      </Link>
      <div className={styles.flexItem__right}>
        <nav className={styles.nav}>
          <Link href="/projects">
            <a
              className={
                isDarkMode
                  ? `${styles.darkBtn} ${styles.projects}`
                  : `${styles.projects} ${styles.lightBtn}`
              }
            >
              Projects
            </a>
          </Link>
          <Link href="/blog">
            <a
              className={
                isDarkMode
                  ? `${styles.darkBtn} ${styles.blog}`
                  : `${styles.lightBtn} ${styles.blog}`
              }
            >
              Blog
            </a>
          </Link>
          <Link href="/">
            <a
              className={
                isDarkMode
                  ? `${styles.darkBtn} ${styles.home}`
                  : `${styles.lightBtn} ${styles.home}`
              }
            >
              Home
            </a>
          </Link>
        </nav>
        <div className={styles.hamburgerContainer}>
          <Hamburger />
        </div>
        <button
          className={
            isDarkMode
              ? `${styles.darkToggle} ${styles.toggle}`
              : `${styles.lightToggle} ${styles.toggle}`
          }
          onClick={handleClick}
        >
          {isDarkMode ? (
            <img className={styles.yoda} src="/images/yoda.png" alt="Yoda" />
          ) : (
            <Vader />
          )}
        </button>
      </div>
    </header>
  );
}
