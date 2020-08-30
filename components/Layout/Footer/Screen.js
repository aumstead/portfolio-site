import styles from './Screen.module.scss'
import { useEffect, useRef } from 'react'

function Screen({ mouseEnteredDisk }) {
  const firstUpdate = useRef(true);
  const tl = useRef(null)

  useEffect(() => {
    tl.current = gsap.timeline()
    tl.current.to("#line1", {duration: 1, text: "Email me!", delay: 1})
      .to("#line2", {duration: 3, text: "andrew.umstead@gmail.com"})
      .to("#linkedin", {duration: .8, opacity: 1})
      .to("#twitter", {duration: .8, opacity: 1})
      .to("#resume", {duration: 1, text: "resume.pdf"})
    tl.current.pause()
  }, [])

  useEffect(() => {
    if (firstUpdate.current) {
      firstUpdate.current = false;
      return
    }

    if(mouseEnteredDisk) {
      tl.current.restart()
    } else {
      tl.current.seek(0)
      tl.current.pause()
    }

  }, [mouseEnteredDisk])
  return (
    <div className={styles.container}>
      <p className={styles.text} id="line1"></p>
      <a className={`${styles.text} ${styles.underline}`} id="line2" href="mailto:andrew.umstead@gmail.com"></a>
      <div className={styles.socialMediaContainer}>
        <a id="linkedin" className={styles.linkedInAnchor} href="#"><img className={styles.linkedin} src="/images/linkedin.png" alt="LinkedIn icon"/></a>
        <a id="twitter" className={styles.twitterAnchor} href="#"><img className={styles.twitter} src="/images/twitter.png" alt="Twitter icon"/></a>
      </div>
      <a className={`${styles.text} ${styles.underline}`} id="resume" href="/resume.pdf" target="_blank"></a>
    </div>
  )
}

export default Screen