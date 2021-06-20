import styles from "./projects.module.scss";
import { useContext } from "react";
import Head from "next/head";
import DarkModeContext from "../contexts/darkMode/DarkModeContext";
import MobileContext from "../contexts/mobile/MobileContext";
import Layout from "../components/Layout/Layout";
import GitHub from "../components/projects/logos/GitHub";
import RecallChek from "../components/projects/logos/RecallChek";
import MassageFluke from "../components/projects/logos/MassageFluke";
import WhiteSands from "../components/projects/logos/WhiteSands";
import FastFlashCardsSvg from "../components/projects/logos/FastFlashCardsSvg";
import HeroSvg from "../components/projects/HeroSvg";

function Projects() {
  const darkModeContext = useContext(DarkModeContext);
  const { isDarkMode } = darkModeContext;
  const mobileContext = useContext(MobileContext);
  const { onMobile } = mobileContext;

  const stylesConfig = {
    thumbnail: isDarkMode
      ? `${styles.thumbnail} ${styles.thumbnail__dark}`
      : `${styles.thumbnail} ${styles.thumbnail__light}`,
    linkAnchor: isDarkMode
      ? `${styles.linkAnchor} ${styles.linkAnchor__dark}`
      : `${styles.linkAnchor} ${styles.linkAnchor__light}`,
  };

  return (
    <Layout>
      <Head>
        <title>andrewumstead.com | Projects</title>
      </Head>

      <section className={styles.heroSection}>
        <HeroSvg onMobile={onMobile} />
        <h1 className={styles.heroTitle}>Projects</h1>
        <p className={styles.text}>
          Here's a selection of my best projects. They're listed from newest to
          oldest.
        </p>
      </section>

      <section className={styles.project}>
        <a className={styles.anchor} id="fast-flash-cards" />
        <img
          className={stylesConfig.thumbnail}
          src="/images/projects-fastflashcards.png"
          alt="Fast Flash Cards project"
        />
        <h2 className={styles.title}>Fast Flash Cards</h2>

        <h3 className={styles.subTitle}>Stack:</h3>
        <p className={styles.stack}>
          ASP.NET 5, Angular, Entity Framework Core, PostGreSQL, Bootstrap
        </p>
        <br />
        <h3 className={styles.subTitle}>Description:</h3>
        <p className={styles.description}>
          Simply a web app for flash cards. Users can create and save decks,
          populate those decks with cards, and study them.
        </p>
        <br />
        <h3 className={styles.subTitle}>Visit:</h3>
        <FastFlashCardsSvg />
        <a
          className={stylesConfig.linkAnchor}
          href="https://fastflashcards.com"
          target="_blank"
        >
          fastflashcards.com
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
      </section>

      <section className={styles.project}>
        <a className={styles.anchor} id="portfolio-sharer" />
        <img
          className={stylesConfig.thumbnail}
          src="/images/projects-dgifolios.png"
          alt="dgifolios project"
        />
        <h2 className={styles.title}>Portfolio Sharer</h2>

        <h3 className={styles.subTitle}>Stack:</h3>
        <p className={styles.stack}>
          ASP.NET Core, Angular, Entity Framework Core, PostGreSQL, Bootstrap
        </p>
        <br />
        <h3 className={styles.subTitle}>Description:</h3>
        <p className={styles.description}>
          I'm currently reworking this project. I want it to be a social media
          site for people who focus on investing for dividends and the income
          they provide.
        </p>
        <br />
        <h3 className={styles.subTitle}>Visit:</h3>
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
      </section>

      <section className={styles.project}>
        <a className={styles.anchor} id="white-sands" />
        <img
          className={stylesConfig.thumbnail}
          src="/images/projects-white-sands.png"
          alt="White Sands Resort project"
        />
        <h2 className={styles.title}>White Sands Resort</h2>

        <h3 className={styles.subTitle}>Stack:</h3>
        <p className={styles.stack}>
          ASP.NET Core MVC and Razor Pages, Entity Framework Core, CSS
        </p>
        <br />
        <h3 className={styles.subTitle}>Description:</h3>
        <p className={styles.description}>
          This was one of my very first projects I did a couple years ago while
          learning SCSS and Flexbox. Originally, it was just a landing page, but
          more recently I added a few pages and a hotel room/booking management
          system.
        </p>
        <br />
        <p className={styles.description}>
          Guests can choose the dates of their stay and book a room. Employees
          can manage bookings and handle check-in/check-out procedures.
        </p>
        <br />
        <h3 className={styles.subTitle}>Visit:</h3>
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
      </section>

      <section className={styles.project}>
        <a className={styles.anchor} id="massage-fluke" />
        <img
          className={stylesConfig.thumbnail}
          src="/images/projects-massage-fluke.png"
          alt="Massage Fluke project"
        />
        <h2 className={styles.title}>Massage Fluke</h2>

        <h3 className={styles.subTitle}>Stack:</h3>
        <p className={styles.stack}>Next.js, SCSS, Firebase</p>
        <br />
        <h3 className={styles.subTitle}>Description:</h3>
        <p className={styles.description}>
          This is a site I made for a colleague. She wanted a few brochure-type
          pages, plus a blog where she could write articles, customers could
          share their experiences, etc. Users can create an account and login to
          contribute blog articles.
        </p>
        <br />
        <h3 className={styles.subTitle}>Visit:</h3>
        <MassageFluke />
        <a
          className={stylesConfig.linkAnchor}
          href="https://massagefluke.now.sh"
          target="_blank"
        >
          massagefluke.now.sh
        </a>
        <span className={styles.login}>
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
      </section>

      <section className={styles.project}>
        <a className={styles.anchor} id="recall-chek" />
        <img
          className={stylesConfig.thumbnail}
          src="/images/projects-recall-chek.png"
          alt="RecallChek project"
        />
        <h2 className={styles.title}>RecallChek</h2>

        <h3 className={styles.subTitle}>Stack:</h3>
        <p className={styles.stack}>HTML, CSS</p>
        <br />
        <h3 className={styles.subTitle}>Description:</h3>
        <p className={styles.description}>
          This was a project I started for a friend who is CTO at a small
          business based in Indianapolis. The project never took off for reasons
          I'm unsure about. Recall Check is a small slice of their business.
          Nevertheless, I was paid for making these HTML and CSS web pages.
        </p>
        <br />
        <h3 className={styles.subTitle}>Visit:</h3>
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
      </section>

      {/* <section className={styles.project}>
        <img
          className={stylesConfig.thumbnail}
          src="/images/projects-portfolio-v1.png"
          alt="Portfolio v1.0 project"
        />
        <h2 className={styles.title}>Portfolio 1.0</h2>

        <h3 className={styles.subTitle}>Stack:</h3>
        <p className={styles.stack}>Next.js, SCSS</p>
        <br />
        <h3 className={styles.subTitle}>Description:</h3>
        <p className={styles.description}>
          My first portfolio site, done in early 2020. There a few things about
          it that rubbed me the wrong way, and I wanted my personal site to be
          the best it could be, so I made this one.
        </p>
        <br />
        <h3 className={styles.subTitle}>Visit:</h3>
        <img
          className={styles.portfolioLogo}
          src="/images/portfolio.png"
          alt="Portfolio 1.0 icon"
        />
        <a
          className={stylesConfig.linkAnchor}
          href="https://andrewumstead.com"
          target="_blank"
        >
          andrewumstead.com
        </a>
        <br />
        <GitHub isDarkMode={isDarkMode} />
        <a
          className={stylesConfig.linkAnchor}
          href="https://github.com/aumstead/portfolio_v1"
          target="_blank"
        >
          GitHub
        </a>
      </section> */}
    </Layout>
  );
}

export default Projects;
