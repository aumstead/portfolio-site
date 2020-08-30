import Layout from "../components/Layout/Layout";
import styles from "./projects.module.scss";
import { useContext } from "react";
import DarkModeContext from "../contexts/darkMode/DarkModeContext";
import MobileContext from '../contexts/mobile/MobileContext'
import GitHub from "../components/projects/logos/GitHub";
import DgiFoliosSvg from "../components/projects/logos/DgiFoliosSvg";
import RecallChek from "../components/projects/logos/RecallChek";
import MassageFluke from "../components/projects/logos/MassageFluke";
import WhiteSands from "../components/projects/logos/WhiteSands";
import HeroSvg from "../components/projects/HeroSvg";

function Projects() {
  const darkModeContext = useContext(DarkModeContext);
  const { isDarkMode } = darkModeContext;
  const mobileContext = useContext(MobileContext);
  const { onMobile } = mobileContext;

  return (
    <Layout>
      <section className={styles.heroSection}>
        <HeroSvg onMobile={onMobile}/>
        <h1
          className={
            isDarkMode
              ? `${styles.heroTitle__dark} ${styles.heroTitle}`
              : `${styles.heroTitle} ${styles.heroTitle__light}`
          }
        >
          Projects
        </h1>
        <p className={styles.text}>
          See all the things I've learned to do with code here. Feel free to
          skip the blocks of text — they'll probably bore you. It is worth
          noting, however, that dgifolios is my best work.
        </p>
      </section>

      <section className={styles.project}>
        <a className={styles.anchor} id="dgifolios" />
        <img
          className={
            isDarkMode
              ? `${styles.thumbnail} ${styles.thumbnail__dark}`
              : `${styles.thumbnail} ${styles.thumbnail__light}`
          }
          src="/images/projects-dgifolios.png"
          alt="dgifolios project"
        />
        <h2 className={styles.title}>dgifolios</h2>

        <h3 className={styles.subTitle}>Stack:</h3>
        <p className={styles.stack}>Next.js, SCSS, Node.js, MongoDB</p>
        <br />
        <h3 className={styles.subTitle}>Description:</h3>
        <p className={styles.description}>
          This full-stack app takes user-entered data about their stock
          portfolio to provide a number of features. A few of them are:
          statistics about the user's portfolio and dividends, a number of
          charts, and a public profile page about their investments that can be
          shared and followed by other users of the site.
        </p>
        <br />
        <h3 className={styles.subTitle}>How I improved as a developer:</h3>
        <p className={styles.description}>
          In general, this project gave me a lot of confidence in
          my ability to create a full-stack application. In the end, I had a
          frontend that connects to a Node.js backend that essentially handles CRUD
          operations and authentication. I spent many hours inside the documentation
          of things like MongoDB, the Fuse.js search library, Nivo charts, and
          others. I also wrote some algorithms to calculate certain statistics
          on the stocks and dividends, which is really a core feature of the
          app.
        </p>
        <br />
        <h3 className={styles.subTitle}>Visit:</h3>
        <DgiFoliosSvg />
        <a
          className={
            isDarkMode
              ? `${styles.linkAnchor} ${styles.linkAnchor__dark}`
              : `${styles.linkAnchor} ${styles.linkAnchor__light}`
          }
          href="https://dgifolios.com"
          target="_blank"
        >
          dgifolios.com
        </a>
        <span className={styles.login}>
          (Demo login: dgifolios@gmail.com / Password1)
        </span>
        <br />
        <GitHub isDarkMode={isDarkMode} />
        <a
          className={
            isDarkMode
              ? `${styles.linkAnchor} ${styles.linkAnchor__dark}`
              : `${styles.linkAnchor} ${styles.linkAnchor__light}`
          }
          href="#"
          target="_blank"
        >
          GitHub
        </a>
      </section>

      <section className={styles.project}>
        <a className={styles.anchor} id="massage-fluke" />
        <img
          className={
            isDarkMode
              ? `${styles.thumbnail} ${styles.thumbnail__dark}`
              : `${styles.thumbnail} ${styles.thumbnail__light}`
          }
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
        <h3 className={styles.subTitle}>How I improved as a developer:</h3>
        <p className={styles.description}>
          This project gave me a taste of the full-stack as I used Firebase to
          handle authentication, authorization, and storing blog post text and
          images. It served as a nice stepping-stone before trying to write a
          backend myself. I also used the Google Maps API to embed a
          nice-looking map.
        </p>
        <br />
        <h3 className={styles.subTitle}>Visit:</h3>
        <MassageFluke />
        <a
          className={
            isDarkMode
              ? `${styles.linkAnchor} ${styles.linkAnchor__dark}`
              : `${styles.linkAnchor} ${styles.linkAnchor__light}`
          }
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
          className={
            isDarkMode
              ? `${styles.linkAnchor} ${styles.linkAnchor__dark}`
              : `${styles.linkAnchor} ${styles.linkAnchor__light}`
          }
          href="#"
          target="_blank"
        >
          GitHub
        </a>
      </section>

      <section className={styles.project}>
        <a className={styles.anchor} id="recall-chek" />
        <img
          className={
            isDarkMode
              ? `${styles.thumbnail} ${styles.thumbnail__dark}`
              : `${styles.thumbnail} ${styles.thumbnail__light}`
          }
          src="/images/projects-recall-chek.png"
          alt="RecallChek project"
        />
        <h2 className={styles.title}>RecallChek</h2>

        <h3 className={styles.subTitle}>Stack:</h3>
        <p className={styles.stack}>HTML, CSS</p>
        <br />
        <h3 className={styles.subTitle}>Description:</h3>
        <p className={styles.description}>
          RecallChek is a real product offered by Residential Warranty Services,
          an Indianapolis-based business which offers home warranties.
          It's a service home inspectors can sell that checks to see if
          any home appliances have been recalled over the years. An old friend
          is CTO at the company and offered me this project. (As a sidenote, I
          did the layout design, but not the site's routing structure, which is
          unusual and can be confusing.)
        </p>
        <br />
        <h3 className={styles.subTitle}>How I improved as a developer:</h3>
        <p className={styles.description}>
          The site is quite basic, but making it gave me more practice with
          grid, flexbox, and making layouts responsive. I also came away with a
          greater appreciation for things like components and modularized CSS.
        </p>
        <br />
        <h3 className={styles.subTitle}>Visit:</h3>
        <RecallChek />
        <a
          className={
            isDarkMode
              ? `${styles.linkAnchor} ${styles.linkAnchor__dark}`
              : `${styles.linkAnchor} ${styles.linkAnchor__light}`
          }
          href="https://recallchek.netlify.app"
          target="_blank"
        >
          recallchek.netlify.app
        </a>
        <br />
        <GitHub isDarkMode={isDarkMode} />
        <a
          className={
            isDarkMode
              ? `${styles.linkAnchor} ${styles.linkAnchor__dark}`
              : `${styles.linkAnchor} ${styles.linkAnchor__light}`
          }
          href="#"
          target="_blank"
        >
          GitHub
        </a>
      </section>

      <section className={styles.project}>
        <a className={styles.anchor} id="white-sands" />
        <img
          className={
            isDarkMode
              ? `${styles.thumbnail} ${styles.thumbnail__dark}`
              : `${styles.thumbnail} ${styles.thumbnail__light}`
          }
          src="/images/projects-white-sands.png"
          alt="White Sands Resort project"
        />
        <h2 className={styles.title}>White Sands Resort</h2>

        <h3 className={styles.subTitle}>Stack:</h3>
        <p className={styles.stack}>HTML, SCSS, JavaScript</p>
        <br />
        <h3 className={styles.subTitle}>Description:</h3>
        <p className={styles.description}>
          This was one of my very first projects, and I still think it's good
          enough to put in my portfolio. It's simply a landing page for a fake
          hotel. Most of the design was taken from (or inspired by😎) the{" "}
          <a
            className={
              isDarkMode
                ? `${styles.linkAnchor} ${styles.linkAnchor__dark}`
                : `${styles.linkAnchor} ${styles.linkAnchor__light}`
            }
            href="https://fourseasons.com"
            target="_blank"
          >
            Four Seasons
          </a>{" "}
          website.
        </p>
        <br />
        <h3 className={styles.subTitle}>How I improved as a developer:</h3>
        <p className={styles.description}>
          This was the first time I used Sass, and now it's my preference.
          The page is image heavy, so I had to learn about image optimization. All of the layouts were made with flexbox, and since then, it has really become my
          "go-to" tool in CSS. I felt a lot of satisfaction when I completed
          this project back in the first-half of 2019. Even though I'm a
          mediocre designer, I realized I can make something look exactly how I want
          it using CSS.
        </p>
        <br />
        <h3 className={styles.subTitle}>Visit:</h3>
        <WhiteSands isDarkMode={isDarkMode} />
        <a
          className={
            isDarkMode
              ? `${styles.linkAnchor} ${styles.linkAnchor__dark}`
              : `${styles.linkAnchor} ${styles.linkAnchor__light}`
          }
          href="https://white-sands-resort.netlify.com"
          target="_blank"
        >
          white-sands-resort.netlify.com
        </a>
        <br />
        <GitHub isDarkMode={isDarkMode} />
        <a
          className={
            isDarkMode
              ? `${styles.linkAnchor} ${styles.linkAnchor__dark}`
              : `${styles.linkAnchor} ${styles.linkAnchor__light}`
          }
          href="#"
          target="_blank"
        >
          GitHub
        </a>
      </section>

      <section className={styles.project}>
        <img
          className={
            isDarkMode
              ? `${styles.thumbnail} ${styles.thumbnail__dark}`
              : `${styles.thumbnail} ${styles.thumbnail__light}`
          }
          src="/images/projects-portfolio-v1.png"
          alt="Portfolio v1.0 project"
        />
        <h2 className={styles.title}>Portfolio 1.0</h2>

        <h3 className={styles.subTitle}>Stack:</h3>
        <p className={styles.stack}>Next.js, SCSS</p>
        <br />
        <h3 className={styles.subTitle}>Description:</h3>
        <p className={styles.description}>
          My first portfolio site, done only months before this current one. I suppose it's satisfactory, but there a few things about it that rubbed me the wrong way, and I wanted to be as confident as I could be with my portfolio site.
        </p>
        <br />
        <h3 className={styles.subTitle}>How I improved as a developer:</h3>
        <p className={styles.description}>
          This was my first project using Next.js, which you may have noticed, is my framework of choice. Like many of my projects, this one was just more React practice, more CSS practice, and maybe a new library or two (this time it was Framer Motion). If you're still reading down here, I'll assume you just scrolled and randomly started skimming the text. Since I still have you here, I might as well make my plea. Look, I can learn to do the job — whatever it may be. After all the studying I've done over the past two years, if I can get paid to learn a certain technology, I'll be thrilled. I'm motivated, I think I'm pretty mature and easy to get along with, and I'm ready to hunker down and work a ton to make it in this industry. I'll sweep floors if I have to! Contact me!
        </p>
        <br />
        <h3 className={styles.subTitle}>Visit:</h3>
        <img
          className={styles.portfolioLogo}
          src="/images/portfolio.png"
          alt="Portfolio 1.0 icon"
        />
        <a
          className={
            isDarkMode
              ? `${styles.linkAnchor} ${styles.linkAnchor__dark}`
              : `${styles.linkAnchor} ${styles.linkAnchor__light}`
          }
          href="https://andrewumstead.com"
          target="_blank"
        >
          andrewumstead.com
        </a>
        <br />
        <GitHub isDarkMode={isDarkMode} />
        <a
          className={
            isDarkMode
              ? `${styles.linkAnchor} ${styles.linkAnchor__dark}`
              : `${styles.linkAnchor} ${styles.linkAnchor__light}`
          }
          href="#"
          target="_blank"
        >
          GitHub
        </a>
      </section>
    </Layout>
  );
}

export default Projects;
