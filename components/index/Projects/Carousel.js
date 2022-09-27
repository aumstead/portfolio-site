import styles from "./Carousel.module.scss";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import RecallChek from "../../projects/logos/RecallChek";
import PortfolioSvg from "../../projects/logos/PortfolioSvg";
import WhiteSands from "../../projects/logos/WhiteSands";
import GitHub from "../../projects/logos/GitHub";
import FastFlashCardsSvg from "../../projects/logos/FastFlashCardsSvg";

function Carousel({ mouseEnteredCards, isDarkMode, onMobile }) {
  const isInitialRender = useRef(true);
  const slideRef = useRef(null);

  const [images, setImages] = useState([]);
  const [count, setCount] = useState(0);
  const [clickNext, setClickNext] = useState(false);

  useEffect(() => {
    // get images in HTML collection and spread into array
    const imagesHTMLCollection = slideRef.current.children;
    const imagesArr = [...imagesHTMLCollection];
    setImages(imagesArr);

    let slideWidth;
    if (window.matchMedia("(max-width: 255px)").matches) {
      slideWidth = -300 * count + "px";
    } else if (window.matchMedia("(max-width: 700px)").matches) {
      /* The viewport is less than, or equal to, 700 pixels wide */
      slideWidth = -window.innerWidth * count + "px";
    } else {
      /* The viewport is greater than 700 pixels wide */
      slideWidth = -70 * count + "rem";
    }

    // when count changes translate slide left or right
    slideRef.current.style.transform = `translateX(${slideWidth}`;
  }, [count, clickNext]);

  useEffect(() => {
    if (isInitialRender.current) {
      isInitialRender.current = false;
      return;
    }

    setClickNext(false);
    if (count >= images.length - 1) return;
    slideRef.current.style.transition = "transform .4s ease-in-out";
    setCount((count) => count + 1);
  }, [mouseEnteredCards]);

  const handleTransitionEnd = () => {
    if (images[count].id === "first-clone") {
      slideRef.current.style.transition = "none";
      setCount(0);
    }
  };

  const stylesConfig = {
    browserMockup: isDarkMode
      ? `${styles.browserMockup} ${styles.browserMockup__dark}`
      : `${styles.browserMockup} ${styles.browserMockup__light}`,
    phoneMockup: isDarkMode
      ? `${styles.phoneMockup} ${styles.phoneMockup__dark}`
      : `${styles.phoneMockup} ${styles.phoneMockup__light}`,
    description: isDarkMode
      ? `${styles.description} ${styles.description__dark}`
      : `${styles.description} ${styles.description__light}`,
    linkAnchor: isDarkMode
      ? `${styles.linkAnchor} ${styles.linkAnchor__dark}`
      : `${styles.linkAnchor} ${styles.linkAnchor__light}`,
    login: isDarkMode
      ? `${styles.login} ${styles.login__dark}`
      : `${styles.login} ${styles.login__light}`,
    readMore: isDarkMode
      ? `${styles.readMore} ${styles.readMore__dark}`
      : `${styles.readMore} ${styles.readMore__light}`,
  };

  // instructions to change slide order and content
  // slides can be swapped if only change in order is necessary.
  // first slide is repeated at end for smooth transition.
  // clone slide has id='first-clone'
  // in cards animation paint squares are labelled *slide_number *position

  return (
    <div className={styles.carouselContainer}>
      <div
        className={onMobile ? styles.carouselMobile : styles.carousel}
        ref={slideRef}
        onTransitionEnd={handleTransitionEnd}
      >
        <div className={onMobile ? styles.slideMobile : styles.slide}>
          <div className={styles.mockupContainer}>
            <img
              className={stylesConfig.browserMockup}
              src="/images/mockups/fastflashcards-browser.png"
              alt="Fast Flash Cards - browser mockup"
            />
            <img
              className={stylesConfig.phoneMockup}
              src="/images/mockups/fastflashcards-phone.png"
              alt="Fast Flash Cards - phone mockup"
            />
          </div>
          <div className={styles.infoContainer}>
            <h3 className={styles.title}>Fast Flash Cards</h3>
            <p className={styles.description}>
              A web app for making and studying flash cards.{" "}
              <Link href="/projects#fast-flash-cards">
                <a className={stylesConfig.readMore}>Read more &rarr;</a>
              </Link>
            </p>
            <div className={styles.visitSiteContainer}>
              <FastFlashCardsSvg isDarkMode={isDarkMode} />
              <a
                className={stylesConfig.linkAnchor}
                href="https://myfastflashcards.herokuapp.com/"
                target="_blank"
              >
                myfastflashcards.herokuapp.com
              </a>
              <br />
              <GitHub isDarkMode={isDarkMode} />
              <a
                className={stylesConfig.linkAnchor}
                href="https://github.com/aumstead/fastflashcards"
                target="_blank"
              >
                GitHub
              </a>
            </div>
          </div>
        </div>

        <div className={onMobile ? styles.slideMobile : styles.slide}>
          <div className={styles.mockupContainer}>
            <img
              className={stylesConfig.browserMockup}
              src="/images/mockups/whitesands-browser.png"
              alt="White Sands - browser mockup"
            />
            <img
              className={stylesConfig.phoneMockup}
              src="/images/mockups/whitesands-phone.png"
              alt="White Sands - mobile mockup"
            />
          </div>
          <div className={styles.infoContainer}>
            <h3 className={styles.title}>White Sands Resort</h3>
            <p className={styles.description}>
              A booking system and landing page for a mock hotel.{" "}
              <Link href="/projects#whitesands">
                <a className={stylesConfig.readMore}>Read more &rarr;</a>
              </Link>
            </p>
            <div className={styles.visitSiteContainer}>
              <WhiteSands isDarkMode={isDarkMode} />
              <a
                className={stylesConfig.linkAnchor}
                href="https://white-sands.herokuapp.com/"
                target="_blank"
              >
                white-sands.herokuapp.com
              </a>
              <br />
              <GitHub isDarkMode={isDarkMode} />
              <a
                className={stylesConfig.linkAnchor}
                href="https://github.com/aumstead/WhiteSandsMVC"
                target="_blank"
              >
                GitHub
              </a>
            </div>
          </div>
        </div>

        <div className={onMobile ? styles.slideMobile : styles.slide}>
          <div className={styles.mockupContainer}>
            <img
              className={stylesConfig.browserMockup}
              src="/images/mockups/portfolio-sharer-browser.png"
              alt="Portfolio Sharer - browser mockup"
            />
            <img
              className={stylesConfig.phoneMockup}
              src="/images/mockups/portfolio-sharer-phone.png"
              alt="Portfolio Sharer - mobile mockup"
            />
          </div>
          <div className={styles.infoContainer}>
            <h3 className={styles.title}>Portfolio Sharer</h3>
            <p className={styles.description}>
              A portfolio tracking/social media site for investment portfolios.{" "}
              <Link href="/projects#portfolio-sharer">
                <a className={stylesConfig.readMore}>Read more &rarr;</a>
              </Link>
            </p>
            <div className={styles.visitSiteContainer}>
              <PortfolioSvg fill="#330E00" />
              <a
                className={stylesConfig.linkAnchor}
                href="https://portfolio-sharer.herokuapp.com/"
                target="_blank"
              >
                portfolio-sharer.herokuapp.com
              </a>
              <br />
              <GitHub isDarkMode={isDarkMode} />
              <a
                className={stylesConfig.linkAnchor}
                href="https://github.com/aumstead/portfolio-sharer"
                target="_blank"
              >
                GitHub
              </a>
            </div>
          </div>
        </div>

        <div className={onMobile ? styles.slideMobile : styles.slide}>
          <div className={styles.mockupContainer}>
            <img
              className={stylesConfig.browserMockup}
              src="/images/mockups/recallchek-browser.png"
              alt="Recall Chek - browser mockup"
            />
            <img
              className={stylesConfig.phoneMockup}
              src="/images/mockups/recallchek-phone.png"
              alt="Recall Chek - phone mockup"
            />
          </div>
          <div className={styles.infoContainer}>
            <h3 className={styles.title}>Recall Chek</h3>
            <p className={styles.description}>
              A website for a service offered by Residential Warranty Services.
              <br />
              <Link href="/projects#recall-chek">
                <a className={`${stylesConfig.readMore}`}>Read more &rarr;</a>
              </Link>
            </p>
            <div className={styles.visitSiteContainer}>
              <RecallChek />
              <a
                className={stylesConfig.linkAnchor}
                href="https://recallchek.netlify.app"
                target="_blank"
              >
                recallchek.netlify.app
              </a>
              <br />
              <GitHub isDarkMode={isDarkMode} />
              <a
                className={stylesConfig.linkAnchor}
                href="https://github.com/aumstead/recallcheck"
                target="_blank"
              >
                GitHub
              </a>
            </div>
          </div>
        </div>

        <div
          id="first-clone"
          className={onMobile ? styles.slideMobile : styles.slide}
        >
          <div className={styles.mockupContainer}>
            <img
              className={stylesConfig.browserMockup}
              src="/images/mockups/fastflashcards-browser.png"
              alt="Fast Flash Cards - browser mockup"
            />
            <img
              className={stylesConfig.phoneMockup}
              src="/images/mockups/fastflashcards-phone.png"
              alt="Fast Flash Cards - phone mockup"
            />
          </div>
          <div className={styles.infoContainer}>
            <h3 className={styles.title}>Fast Flash Cards</h3>
            <p className={styles.description}>
              A web app for making and studying flash cards.{" "}
              <Link href="/projects#fast-flash-cards">
                <a className={stylesConfig.readMore}>Read more &rarr;</a>
              </Link>
            </p>
            <div className={styles.visitSiteContainer}>
              <FastFlashCardsSvg isDarkMode={isDarkMode} />
              <a
                className={stylesConfig.linkAnchor}
                href="https://myfastflashcards.herokuapp.com/"
                target="_blank"
              >
                myfastflashcards.herokuapp.com/
              </a>
              <br />
              <GitHub isDarkMode={isDarkMode} />
              <a
                className={stylesConfig.linkAnchor}
                href="https://github.com/aumstead/fastflashcards"
                target="_blank"
              >
                GitHub
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Carousel;
