import Layout from "../components/Layout/Layout";
import styles from "./projects.module.scss";
import { useContext } from "react";
import DarkModeContext from "../contexts/darkMode/DarkModeContext";
import GitHub from "../components/projects/logos/GitHub";
import DgiFoliosSvg from "../components/projects/logos/DgiFoliosSvg";
import RecallChek from "../components/projects/logos/RecallChek";
import MassageFluke from "../components/projects/logos/MassageFluke";
import WhiteSands from "../components/projects/logos/WhiteSands";
import HeroSvg from "../components/projects/HeroSvg";

function Projects({ ...props }) {
  const darkModeContext = useContext(DarkModeContext);
  const { isDarkMode } = darkModeContext;

  return (
    <Layout>
      <section>
        <HeroSvg />
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
          See all the nifty things I can do with code here. Feel free to skip
          the blocks of text — they'll probably bore you. It is worth
          noting, however, that dgifolios is my best work.
        </p>
      </section>

      <section className={styles.project}>
        <img
          id="dgifolios"
          className={
            isDarkMode
              ? `${styles.thumbnail} ${styles.thumbnail__dark}`
              : `${styles.thumbnail} ${styles.thumbnail__light}`
          }
          src="/static/images/dgifolios.png"
          alt="dgifolios project"
        />
        <h2 className={styles.title}>dgifolios</h2>

        <h3 className={styles.subTitle}>Stack:</h3>
        <p className={styles.stack}>Next.js, SCSS, Node.js, MongoDB</p>
        <br />
        <h3 className={styles.subTitle}>Description:</h3>
        <p className={styles.description}>
          This was my quarantine project, and is by far my most complex. It
          takes user-entered data about their stock portfolio and dividends
          received to provide a number of features. A few of them are:
          statistics about the user's portfolio and dividends, a number of
          charts, and a public profile page about their investments that can be
          shared and followed by other users of the site.
        </p>
        <br />
        <h3 className={styles.subTitle}>How I improved as a developer:</h3>
        <p className={styles.description}>
          I fully embraced the "learn as you need it" philosophy for this
          project, from creating pagination to setting up AWS SNS for password
          reset emails. In general, this project just gave me a lot of
          confidence in my ability to create a full-stack application. The
          pieces started to really solidify in my head, and then into the code
          and on the page. In the end, I had a REST API for the frontend to
          connect with that basically handled CRUD operations and
          authentication. I spent many hours inside documentation of things like
          MongoDB, the Fuse.js search library, Nivo charts, and others. I also
          wrote some algorithms to calculate certain statistics on the stocks
          and dividends, which is really a core feature of the app.
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
        <img
          id="massage-fluke"
          className={
            isDarkMode
              ? `${styles.thumbnail} ${styles.thumbnail__dark}`
              : `${styles.thumbnail} ${styles.thumbnail__light}`
          }
          src="/static/images/massageTherapies.jpg"
          alt="Massage Fluke project"
        />
        <h2 className={styles.title}>Massage Fluke</h2>

        <h3 className={styles.subTitle}>Stack:</h3>
        <p className={styles.stack}>Next.js, SCSS, Firebase</p>
        <br />
        <h3 className={styles.subTitle}>Description:</h3>
        <p className={styles.description}>
          This is a site I made for a colleague for when she returns to the UK.
          She wanted a few brochure-type pages plus a blog where she could write
          articles, customers could share their experiences, etc. Users can
          create an account and login to contribute blog articles.
        </p>
        <br />
        <h3 className={styles.subTitle}>How I improved as a developer:</h3>
        <p className={styles.description}>
          This project gave me a taste of the full-stack as I used Firebase to
          handle authentication, authorization, and storing blog post text and
          images. It served as a nice stepping-stone before trying to write a
          backend myself. I also learned to use the Google Maps API to embed a
          nice map.
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
        <img
          id="recall-chek"
          className={
            isDarkMode
              ? `${styles.thumbnail} ${styles.thumbnail__dark}`
              : `${styles.thumbnail} ${styles.thumbnail__light}`
          }
          src="/static/images/recallchek.png"
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
          RecallChek is a service home inspectors can sell that checks to see if
          any home appliances have been recalled over the years. An old friend
          of mine is CTO at the company and offered me this project. The current
          design for the RecallChek site is very outdated, so hopefully they'll
          be able to use the redesign I created in the future. (As a sidenote, I
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
        <img
          id="white-sands"
          className={
            isDarkMode
              ? `${styles.thumbnail} ${styles.thumbnail__dark}`
              : `${styles.thumbnail} ${styles.thumbnail__light}`
          }
          src="/static/images/whiteSands.jpg"
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
          hotel. Most of the design was taken from (or inspired by😏) the{" "}
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
          This was the first time I used Sass, and now I almost always use it.
          The page is image heavy, so I had to learn about image optimization.
          For many of the images, a smaller one is loaded for mobile. The entire
          page was made with flexbox, and since then, it has really become my
          "go-to" tool in CSS. I felt a lot of satisfaction when I completed
          this project back in the first-half of 2019. Even though I'm a
          mediocre designer, I realized I can make something look the way I want
          it to look using CSS, and I still feel that that underlying confidence
          is pretty powerful as a motivator.
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
          src="/static/images/portfoliov1.png"
          alt="Portfolio v1.0 project"
        />
        <h2 className={styles.title}>Portfolio 1.0</h2>

        <h3 className={styles.subTitle}>Stack:</h3>
        <p className={styles.stack}>Next.js, SCSS</p>
        <br />
        <h3 className={styles.subTitle}>Description:</h3>
        <p className={styles.description}>
          My first portfolio site, finished only four months or so before
          starting this current one. I suppose it's satisfactory, but I'd rather
          have something I feel more confident with presenting. The layout was a
          bit non-intuitive, particularly on mobile, so that's something I
          wanted to change.
        </p>
        <br />
        <h3 className={styles.subTitle}>How I improved as a developer:</h3>
        <p className={styles.description}>
          This was my first project using Next.js, and the time when I chose to
          focus on Next rather than Gatsby. I'm still happy with this choice. I
          learned about clean-up functions for the useEffect hook, as I kept
          getting memory-leak errors in the console. The card animations in the
          projects section, which was my attempt at a "wow-factor", took forever
          to get anywhere near presentable, but the time spent taught me a lot
          about animating in CSS, which is something I've brought to this
          portfolio. Later, I saw React Spring developed functionality for
          almost the exact type of animation I was going for. Lastly, I used
          Framer Motion to do page transitions and to animate some other content
          on entrance.
        </p>
        <br />
        <h3 className={styles.subTitle}>Visit:</h3>
        <img
          className={styles.portfolioLogo}
          src="/static/images/portfolio.png"
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