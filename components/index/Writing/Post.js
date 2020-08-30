import styles from "./Post.module.scss";
import Link from "next/link";

function Post({ post, isDarkMode }) {
  return (
    <div className={styles.post}>
      <div className={styles.titleFlexContainer}>
        <Link href={`${post.url}`}>
          <a
            className={
              isDarkMode
                ? `${styles.postAnchor} ${styles.postAnchor__dark}`
                : `${styles.postAnchor} ${styles.postAnchor__light}`
            }
          >
            <h3 className={styles.title}>{post.title}</h3>
          </a>
        </Link>
        <span
          className={
            isDarkMode
              ? `${styles.date} ${styles.date__dark}`
              : `${styles.date} ${styles.date__light}`
          }
        >
          {post.date}
        </span>
      </div>
      <p
        className={
          isDarkMode
            ? `${styles.description} ${styles.description__dark}`
            : `${styles.description} ${styles.description__light}`
        }
      >
        {post.description}
      </p>
    </div>
  );
}

export default Post;
