import Layout from "../components/Layout/Layout";
import PostList from "../components/PostList";
import matter from "gray-matter";
import styles from "./index.module.scss";
import DarkModeContext from "../contexts/darkMode/DarkModeContext";
import { useContext } from "react";
import CleanCodeSvg from '../components/index/CleanCodeSvg'
import Projects from '../components/index/Projects/Projects'
import Writing from '../components/index/Writing/Writing'
import Skills from '../components/index/Skills/Skills'

function Index({ posts, title, description, ...props }) {
  const darkModeContext = useContext(DarkModeContext);
  const { isDarkMode } = darkModeContext;
  return (
    <Layout pageTitle={title}>
      <section>
        <CleanCodeSvg />
        <h1
          className={
            isDarkMode
              ? `${styles.heroTitle__dark} ${styles.heroTitle}`
              : `${styles.heroTitle} ${styles.heroTitle__light}`
          }
        >
          Andrew Umstead
        </h1>
        <p
          className={
            isDarkMode
              ? `${styles.heroText} ${styles.heroText__dark}`
              : `${styles.heroText} ${styles.heroText__light}`
          }
        >
          Welcome to my site — the place where I try to persuade you to hire me.
          What better place to start than my projects? See what I can do with
          code here.
        </p>
      </section>

      <Projects />
      <Writing />
      <Skills />
    </Layout>
  );
}

export default Index;

export async function getStaticProps() {
  const configData = await import(`../siteconfig.json`);

  const posts = ((context) => {
    const keys = context.keys();
    const values = keys.map(context);

    const data = keys.map((key, index) => {
      let slug = key.replace(/^.*[\\\/]/, "").slice(0, -3);
      const value = values[index];
      const document = matter(value.default);
      return {
        frontmatter: document.data,
        markdownBody: document.content,
        slug,
      };
    });
    return data;
  })(require.context("../posts", true, /\.md$/));

  return {
    props: {
      posts,
      title: configData.default.title,
      description: configData.default.description,
    },
  };
}
