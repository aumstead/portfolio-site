import Layout from '../components/Layout/Layout'
import PostList from '../components/PostList'
import Link from 'next/link'
import styles from './blog.module.scss'
import DarkModeContext from "../contexts/darkMode/DarkModeContext";
import { useContext } from 'react'
import Power from '../components/blog/Power'

function Blog({ ...props }) {
  const darkModeContext = useContext(DarkModeContext);
  const { isDarkMode } = darkModeContext;

  return (
    <Layout>
      <Power />
      <h1 className={
            isDarkMode
              ? `${styles.heroTitle__dark} ${styles.heroTitle}`
              : `${styles.heroTitle} ${styles.heroTitle__light}`
          }>Blog</h1>
      <main>
      blog page main
      <Link href='/post/gsap-tweens-in-react'><a>Tweens</a></Link>
      <Link href='/post/gsap-timelines-in-react'><a>Timelines</a></Link>
      </main>
    </Layout>
  )
}

export default Blog;