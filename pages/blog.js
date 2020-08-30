import Layout from "../components/Layout/Layout";
import styles from "./blog.module.scss";
import DarkModeContext from "../contexts/darkMode/DarkModeContext";
import { useContext } from "react";
import Power from "../components/blog/Power";
import data from "../data/posts.json";
import Post from "../components/blog/Post";

function Blog({ ...props }) {
  const darkModeContext = useContext(DarkModeContext);
  const { isDarkMode } = darkModeContext;

  return (
    <Layout>
      <section className={styles.heroSection}>
        <Power />
        <h1
          className={
            isDarkMode
              ? `${styles.heroTitle__dark} ${styles.heroTitle}`
              : `${styles.heroTitle} ${styles.heroTitle__light}`
          }
        >
          Blog
        </h1>
        <p className={styles.text}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, labore
          aperiam quas sed consectetur mollitia harum molestias? Quisquam,
          excepturi est reiciendis officia iusto ullam perspiciatis dignissimos
          magni veritatis alias commodi?
        </p>
      </section>

      <main>
        <h2 className={styles.h2}>Posts</h2>
        {data.map((post) => (
          <Post isDarkMode={isDarkMode} post={post} />
        ))}
      </main>
    </Layout>
  );
}

export default Blog;
