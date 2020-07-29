import styles from './Post.module.scss'

function Post() {
  return (
    <div className={styles.post}>
      <h3 style={{ fontSize: "2rem" }}>Title Lorem, ipsum dolor.</h3>
      <p style={{ fontSize: "1.6rem"}}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magnam saepe animi temporibus quia qui nesciunt.</p>
    </div>
  )
}

export default Post