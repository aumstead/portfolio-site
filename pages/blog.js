import styles from "./blog.module.scss";
import { useContext } from "react";
import Head from "next/head";
import DarkModeContext from "../contexts/darkMode/DarkModeContext";
import MobileContext from "../contexts/mobile/MobileContext";
import Layout from "../components/Layout/Layout";
import Power from "../components/blog/Power";
import data from "../data/posts.json";
import Post from "../components/blog/Post";
import Markers from "../components/blog/Markers";

function Blog() {
  const darkModeContext = useContext(DarkModeContext);
  const { isDarkMode } = darkModeContext;
  const mobileContext = useContext(MobileContext);
  const { onMobile } = mobileContext;

  return (
    <Layout>
      <Head>
        <title>andrewumstead.com | Blog</title>
      </Head>

      <section className={styles.heroSection}>
        <Power onMobile={onMobile} />
        <h1 className={styles.heroTitle}>Blog</h1>
        <p className={styles.text}>
          If I ever solve some problem that I wasn't able to find any answers to
          on the internet, I'll write about how I did it here.
        </p>
      </section>

      <section className={styles.postsSection}>
        <div className={styles.headingFlexContainer}>
          <h2 className={styles.h2}>Posts</h2>
          <Markers onMobile={onMobile} />
        </div>
        {data.map((post) => (
          <Post isDarkMode={isDarkMode} post={post} key={post.id} />
        ))}
      </section>
    </Layout>
  );
}

export default Blog;
