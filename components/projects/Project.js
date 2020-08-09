import styles from "./Project.module.scss";

function Project({ title, stack, thumbUrl, siteUrl, description }) {
  return (
    <div className={styles.project}>
      <img
        className={styles.thumbnail}
        src={thumbUrl}
        alt={`${title} project`}
      />
      <h2 className={styles.title}>{title}</h2>

      <h3 className={styles.subTitle}>Stack:</h3>
      <p className={styles.stack}>Next.js, Node.js, MongoDB, SCSS</p>
      <h3 className={styles.subTitle}>Description:</h3>
      <p className={styles.description}>{description}</p>
      {/* <a className={styles.siteAnchor} href={siteUrl}>
        Visit {siteUrl} &rarr;
      </a> */}
    </div>
  );
}

export default Project;
