import styles from "./Header.module.scss";
import { useContext, useState, useRef, useEffect } from "react";
import Link from "next/link";
import DarkModeContext from "../../contexts/darkMode/DarkModeContext";
import MobileContext from "../../contexts/mobile/MobileContext";
import Vader from "./Vader";
import Yoda from "./Yoda";
import Logo from "./Logo";
import Hamburger from "./Hamburger";

export default function Header() {
  const darkModeContext = useContext(DarkModeContext);
  const { isDarkMode, setIsDarkMode } = darkModeContext;
  const mobileContext = useContext(MobileContext);
  const { onMobile } = mobileContext;

  const [enteredLogo, setEnteredLogo] = useState(false);
  const [hamburgerClicked, setHamburgerClicked] = useState(false);

  const mobileHeaderTl = useRef(null);
  const isInitialRender = useRef(true);

  useEffect(() => {
    mobileHeaderTl.current = gsap.timeline();
    mobileHeaderTl.current
      .to("#header", 0.5, { height: "15rem" })
      .to("#bottomHalf", 0.5, { top: "8rem" }, "<")
      .to("#bottomHalf", 0.5, { display: "flex" }, "<")
      .to("#mobileNav", 0.5, { opacity: 1 }, "<.25");
    mobileHeaderTl.current.pause();
  }, []);

  useEffect(() => {
    if (isInitialRender.current) {
      isInitialRender.current = false;
      return;
    }

    if (hamburgerClicked) {
      mobileHeaderTl.current.pause(0);
      mobileHeaderTl.current.restart();
    } else {
      mobileHeaderTl.current.reverse();
    }
  }, [hamburgerClicked]);

  useEffect(() => {
    // close mobile menu if not in mobile
    setHamburgerClicked(false);
  }, [onMobile]);

  function handleClick() {
    localStorage.setItem("isDarkMode", !isDarkMode);
    setIsDarkMode(() => !isDarkMode);
  }

  // function is used for both onMouseEnter and onClick events (desktop vs mobile)
  function handleMouseEnter() {
    setEnteredLogo((prevState) => !prevState);
  }

  const stylesConfig = {
    header: isDarkMode
      ? `${styles.header} ${styles.header__dark}`
      : `${styles.header} ${styles.header__light}`,
    logoText: isDarkMode
      ? `${styles.logoText} ${styles.logoText__dark}`
      : `${styles.logoText} ${styles.logoText__light}`,
    projects: isDarkMode
      ? `${styles.darkBtn} ${styles.projects}`
      : `${styles.projects} ${styles.lightBtn}`,
    blog: isDarkMode
      ? `${styles.darkBtn} ${styles.blog}`
      : `${styles.lightBtn} ${styles.blog}`,
    home: isDarkMode
      ? `${styles.darkBtn} ${styles.home}`
      : `${styles.lightBtn} ${styles.home}`,
    toggleDarkMode: isDarkMode
      ? `${styles.darkToggle} ${styles.toggle}`
      : `${styles.lightToggle} ${styles.toggle}`,
    mobileBtn: isDarkMode
      ? `${styles.darkBtn} ${styles.mobileBtn}`
      : `${styles.mobileBtn} ${styles.lightBtn}`,
  };

  return (
    <header id="header" className={stylesConfig.header}>
      <div className={styles.topHalf}>
        <Link href="/">
          <a className={styles.logoAnchor}>
            <div
              onMouseEnter={onMobile ? null : handleMouseEnter}
              onClick={onMobile ? handleMouseEnter : null}
              className={styles.flexItem__left}
            >
              <Logo enteredLogo={enteredLogo} isDarkMode={isDarkMode} />
              <span className={stylesConfig.logoText}>Andrew Umstead</span>
            </div>
          </a>
        </Link>
        <div className={styles.flexItem__right}>
          <nav className={styles.nav}>
            <Link href="/projects">
              <a className={stylesConfig.projects}>Projects</a>
            </Link>
            <Link href="/blog">
              <a className={stylesConfig.blog}>Blog</a>
            </Link>
            <Link href="/">
              <a className={stylesConfig.home}>Home</a>
            </Link>
          </nav>

          <button className={stylesConfig.toggleDarkMode} onClick={handleClick}>
            {isDarkMode ? <Yoda /> : <Vader />}
          </button>
          <div className={styles.hamburgerContainer}>
            <Hamburger
              isDarkMode={isDarkMode}
              setHamburgerClicked={setHamburgerClicked}
              hamburgerClicked={hamburgerClicked}
            />
          </div>
        </div>
      </div>

      <div id="bottomHalf" className={styles.bottomHalf}>
        <nav id="mobileNav" className={styles.mobileNav}>
          <Link href="/projects">
            <a className={stylesConfig.mobileBtn}>Projects</a>
          </Link>
          <Link href="/blog">
            <a className={stylesConfig.mobileBtn}>Blog</a>
          </Link>
          <Link href="/#contact">
            <a className={stylesConfig.mobileBtn}>Contact</a>
          </Link>
          <Link href="/">
            <a className={stylesConfig.mobileBtn}>Home</a>
          </Link>
        </nav>
      </div>
    </header>
  );
}
