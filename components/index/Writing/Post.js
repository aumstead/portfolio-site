import styles from "./Post.module.scss";
import Link from "next/link";

function Post({ post, isDarkMode }) {
  const stylesConfig = {
    postAnchor: isDarkMode
      ? `${styles.postAnchor} ${styles.postAnchor__dark}`
      : `${styles.postAnchor} ${styles.postAnchor__light}`,
    date: isDarkMode
      ? `${styles.date} ${styles.date__dark}`
      : `${styles.date} ${styles.date__light}`,
    description: isDarkMode
      ? `${styles.description} ${styles.description__dark}`
      : `${styles.description} ${styles.description__light}`,
  };
  return (
    <div className={styles.post}>
      <div className={styles.titleFlexContainer}>
        <Link href={`${post.url}`}>
          <a className={stylesConfig.postAnchor}>
            <h3 className={styles.title}>{post.title}</h3>
          </a>
        </Link>
        <span className={stylesConfig.date}>{post.date}</span>
      </div>
      <p className={stylesConfig.description}>{post.description}</p>
    </div>
  );
}

export default Post;
