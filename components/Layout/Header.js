import Link from "next/link";
import styles from "./Header.module.scss";
import DarkModeContext from "../../contexts/darkMode/DarkModeContext";
import MobileContext from "../../contexts/mobile/MobileContext";
import { useContext, useState, useRef, useEffect } from "react";
import Vader from "./Vader";
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
  const firstUpdate = useRef(true);

  useEffect(() => {
    mobileHeaderTl.current = gsap.timeline();
    mobileHeaderTl.current
      .to("#header", .5, { height: "15rem" })
      .to("#bottomHalf", .5, { top: "8rem" }, "<")
      .to("#bottomHalf", .5, { display: "flex" }, "<")
      .to("#mobileNav", .5, { opacity: 1 }, "<.25");
    mobileHeaderTl.current.pause();
  }, []);

  useEffect(() => {
    if (firstUpdate.current) {
      firstUpdate.current = false;
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
    setHamburgerClicked(false)
  }, [onMobile])

  function handleClick() {
    setIsDarkMode(() => !isDarkMode);
  }

  function handleMouseEnter() {
    setEnteredLogo((prevState) => !prevState);
  }

  return (
    <header
      id="header"
      className={
        isDarkMode
          ? `${styles.header} ${styles.header__dark}`
          : `${styles.header} ${styles.header__light}`
      }
    >
      <div className={styles.topHalf}>
        <Link href="/">
          <a className={styles.logoAnchor}>
            <div
              onMouseEnter={onMobile ? null : handleMouseEnter}
              onClick={onMobile ? handleMouseEnter : null}
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
            <a
              className={
                isDarkMode
                  ? `${styles.darkBtn} ${styles.mobileBtn}`
                  : `${styles.mobileBtn} ${styles.lightBtn}`
              }
            >
              Projects
            </a>
          </Link>
          <Link href="/blog">
            <a
              className={
                isDarkMode
                  ? `${styles.darkBtn} ${styles.mobileBtn}`
                  : `${styles.lightBtn} ${styles.mobileBtn}`
              }
            >
              Blog
            </a>
          </Link>
          <Link href="/#contact">
            <a
              className={
                isDarkMode
                  ? `${styles.darkBtn} ${styles.mobileBtn}`
                  : `${styles.lightBtn} ${styles.mobileBtn}`
              }
            >
              Contact
            </a>
          </Link>
          <Link href="/">
            <a
              className={
                isDarkMode
                  ? `${styles.darkBtn} ${styles.mobileBtn}`
                  : `${styles.lightBtn} ${styles.mobileBtn}`
              }
            >
              Home
            </a>
          </Link>
        </nav>
      </div>
    </header>
  );
}
