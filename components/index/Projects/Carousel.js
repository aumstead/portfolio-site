import styles from "./Carousel.module.scss";
import { useEffect, useRef, useState } from "react";
import DgiFoliosSvg from "../../projects/logos/DgiFoliosSvg";
import RecallChek from "../../projects/logos/RecallChek";
import MassageFluke from "../../projects/logos/MassageFluke";
import WhiteSands from "../../projects/logos/WhiteSands";
import GitHub from "../../projects/logos/GitHub";

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
  };

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
              src="/images/mockups/dgifolios-screen.png"
              alt="dgifolios - browser mockup"
            />
            <img
              className={stylesConfig.phoneMockup}
              src="/images/mockups/dgifolios-phone.png"
              alt="dgifolios - phone mockup"
            />
          </div>
          <div className={styles.infoContainer}>
            <h3 className={styles.title}>dgifolios</h3>
            <p className={styles.description}>
              A web app that allows users to track and share their stock
              portfolios and dividends.{" "}
              <a
                href="/projects#dgifolios"
                className={`${styles.readMore} ${styles.readMore__dgifolios}`}
              >
                Read more &rarr;
              </a>
            </p>
            <div className={styles.visitSiteContainer}>
              <DgiFoliosSvg />
              <a
                className={stylesConfig.linkAnchor}
                href="https://dgifolios.com"
                target="_blank"
              >
                dgifolios.com
              </a>
              <span className={stylesConfig.login}>
                (Demo login: dgifolios@gmail.com / Password1)
              </span>
              <br />
              <GitHub isDarkMode={isDarkMode} />
              <a
                className={stylesConfig.linkAnchor}
                href="https://github.com/aumstead/dgifolios-backend"
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
              src="/images/mockups/massagefluke-browser.png"
              alt="Massage Fluke - browser mockup"
            />
            <img
              className={stylesConfig.phoneMockup}
              src="/images/mockups/massagefluke-phone.png"
              alt="Massage Fluke - phone mockup"
            />
          </div>
          <div className={styles.infoContainer}>
            <h3 className={styles.title}>Massage Fluke</h3>
            <p className={styles.description}>
              A website and blog for a small business owner.{" "}
              <a
                href="/projects#massage-fluke"
                className={`${styles.readMore} ${styles.readMore__massageFluke}`}
              >
                Read more &rarr;
              </a>
            </p>
            <div className={styles.visitSiteContainer}>
              <MassageFluke fill="#0F9A7A" />
              <a
                className={stylesConfig.linkAnchor}
                href="https://massagefluke.now.sh"
                target="_blank"
              >
                massagefluke.now.sh
              </a>
              <span className={stylesConfig.login}>
                (Demo login: demo@gmail.com / 123456)
              </span>
              <br />
              <GitHub isDarkMode={isDarkMode} />
              <a
                className={stylesConfig.linkAnchor}
                href="https://github.com/aumstead/massage-fluke"
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
              <a
                href="/projects#recall-chek"
                className={`${styles.readMore} ${styles.readMore__recallChek}`}
              >
                Read more &rarr;
              </a>
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
              alt="White Sands- phone mockup"
            />
          </div>
          <div className={styles.infoContainer}>
            <h3 className={styles.title}>White Sands</h3>
            <p className={styles.description}>
              A mock landing page for an island resort.{" "}
              <a
                href="/projects#white-sands"
                className={
                  isDarkMode
                    ? `${styles.readMore} ${styles.readMore__whiteSands__dark}`
                    : `${styles.readMore} ${styles.readMore__whiteSands__light}`
                }
              >
                Read more &rarr;
              </a>
            </p>
            <div className={styles.visitSiteContainer}>
              <WhiteSands isDarkMode={isDarkMode} />
              <a
                className={stylesConfig.linkAnchor}
                href="https://white-sands-resort.netlify.app"
                target="_blank"
              >
                white-sands-resort.netlify.app
              </a>
              <br />
              <GitHub isDarkMode={isDarkMode} />
              <a
                className={stylesConfig.linkAnchor}
                href="https://github.com/aumstead/hotel-landing-page"
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
              src="/images/mockups/dgifolios-screen.png"
              alt="dgifolios - browser mockup"
            />
            <img
              className={stylesConfig.phoneMockup}
              src="/images/mockups/dgifolios-phone.png"
              alt="dgifolios - phone mockup"
            />
          </div>
          <div className={styles.infoContainer}>
            <h3 className={styles.title}>dgifolios</h3>
            <p className={styles.description}>
              A web app that allows users to track and share their stock
              portfolios and dividends.{" "}
              <a
                href="/projects#dgifolios"
                className={`${styles.readMore} ${styles.readMore__dgifolios}`}
              >
                Read more &rarr;
              </a>
            </p>
            <div className={styles.visitSiteContainer}>
              <DgiFoliosSvg />
              <a
                className={stylesConfig.linkAnchor}
                href="https://dgifolios.com"
                target="_blank"
              >
                dgifolios.com
              </a>
              <span className={stylesConfig.login}>
                (Demo login: dgifolios@gmail.com / Password1)
              </span>
              <br />
              <GitHub isDarkMode={isDarkMode} />
              <a
                className={stylesConfig.linkAnchor}
                href="https://github.com/aumstead/portfolio_v1"
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
