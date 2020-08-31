import Layout from "../components/Layout/Layout";
import styles from "./blog.module.scss";
import DarkModeContext from "../contexts/darkMode/DarkModeContext";
import MobileContext from '../contexts/mobile/MobileContext'
import { useContext } from "react";
import Power from "../components/blog/Power";
import data from "../data/posts.json";
import Post from "../components/blog/Post";

function Blog() {
  const darkModeContext = useContext(DarkModeContext);
  const { isDarkMode } = darkModeContext;
  const mobileContext = useContext(MobileContext);
  const { onMobile } = mobileContext;

  return (
    <Layout>
      <section className={styles.heroSection}>
        <Power onMobile={onMobile} />
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

      <section className={styles.postsSection}>
        <h2 className={styles.h2}>Posts</h2>
        {data.map((post) => (
          <Post isDarkMode={isDarkMode} post={post} key={post.id} />
        ))}
      </section>
    </Layout>
  );
}

export default Blog;
