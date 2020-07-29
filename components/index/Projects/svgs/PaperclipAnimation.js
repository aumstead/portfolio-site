import styles from './PaperclipAnimation.module.scss'
import { useEffect, useRef } from 'react'

function PaperclipAnimation({ mouseEnteredScissors, setMouseEnteredScissors, setPaperclipsRunning }) {
  // gsap timeline
  const tl = useRef(null)
  // ref to know if it's the initial render
  const firstUpdate = useRef(true);

  useEffect(() => {
    function completeCallback() {
      gsap.set("#clip1", { opacity: 0 })
      gsap.set("#clip2", { opacity: 0 })
      gsap.set("#clip3", { opacity: 0 })
      gsap.set("#clip4", { opacity: 0 })
      gsap.set("#clip5", { opacity: 0 })
      gsap.set("#clip6", { opacity: 0 })
      gsap.set("#clip7", { opacity: 0 })
      gsap.set("#clip8", { opacity: 0 })
      gsap.set("#clip9", { opacity: 0 })
      gsap.set("#clip10", { opacity: 0 })
      gsap.set("#clip11", { opacity: 0 })
      gsap.set("#clip12", { opacity: 0 })
      gsap.set("#clip13", { opacity: 0 })
      gsap.set("#clip14", { opacity: 0 })
      gsap.set("#clip15", { opacity: 0 })
      gsap.set("#clip16", { opacity: 0 })
      gsap.set("#clip17", { opacity: 0 })
      gsap.set("#clip18", { opacity: 0 })
      gsap.set("#clip19", { opacity: 0 })
      gsap.set("#clip20", { opacity: 0 })
    }
    tl.current = gsap.timeline({ onComplete: completeCallback })

    tl.current.pause()

    tl.current.to("#clip1", {duration: 3, ease: "bounce.out", y: 2350, rotate: 270})
    .set("#clip1", { opacity: 1 }, "<")
    .to("#clip2", {duration: 3, ease: "bounce.out", y: 2350, rotate: 90}, "<.05")
    .set("#clip2", { opacity: 1 }, "<")
    .to("#clip9", {duration: 3, ease: "bounce.out", y: 2350, rotate: 270}, "<.05")
    .set("#clip9", { opacity: 1 }, "<")
    .to("#clip4", {duration: 3, ease: "bounce.out", y: 2350, rotate: 450}, "<.05")
    .set("#clip4", { opacity: 1 }, "<")
    .to("#clip5", {duration: 3, ease: "bounce.out", y: 2350, rotate: 270}, "<.05")
    .set("#clip5", { opacity: 1 }, "<")
    .to("#clip6", {duration: 3, ease: "bounce.out", y: 2350, rotate: 460}, "<.05")
    .set("#clip6", { opacity: 1 }, "<")
    .to("#clip7", {duration: 3, ease: "bounce.out", y: 2350, rotate: 420}, "<.05")
    .set("#clip7", { opacity: 1 }, "<")
    .to("#clip8", {duration: 3, ease: "bounce.out", y: 2350, rotate: 440}, "<.05")
    .set("#clip8", { opacity: 1 }, "<")
    .to("#clip17", {duration: 3, ease: "bounce.out", y: 2350, rotate: 270}, "<.05")
    .set("#clip17", { opacity: 1 }, "<")
    .to("#clip10", {duration: 3, ease: "bounce.out", y: 2350, rotate: 90}, "<.05")
    .set("#clip10", { opacity: 1 }, "<")
    .to("#clip11", {duration: 3, ease: "bounce.out", y: 2350, rotate: 125}, "<.05")
    .set("#clip11", { opacity: 1 }, "<")
    .to("#clip12", {duration: 3, ease: "bounce.out", y: 2350, rotate: 270}, "<.05")
    .set("#clip12", { opacity: 1 }, "<")
    
    .to("#clip14", {duration: 3, ease: "bounce.out", y: 2350, rotate: 85}, "<.05")
    .set("#clip14", { opacity: 1 }, "<")
    .to("#clip20", {duration: 3, ease: "bounce.out", y: 2350, rotate: 90}, "<.05")
    .set("#clip20", { opacity: 1 }, "<")
    .to("#clip16", {duration: 3, ease: "bounce.out", y: 2350, rotate: 240}, "<.05")
    .set("#clip16", { opacity: 1 }, "<")
    .to("#clip13", {duration: 3, ease: "bounce.out", y: 2350, rotate: 260}, "<.05")
    .set("#clip13", { opacity: 1 }, "<")
    .to("#clip18", {duration: 3, ease: "bounce.out", y: 2350, rotate: 450}, "<.05")
    .set("#clip18", { opacity: 1 }, "<")
    .to("#clip15", {duration: 3, ease: "bounce.out", y: 2350, rotate: 90}, "<.05")
    .set("#clip15", { opacity: 1 }, "<")
    .to("#clip19", {duration: 3, ease: "bounce.out", y: 2350, rotate: 240}, "<.05")
    .set("#clip19", { opacity: 1 }, "<")
    .to("#clip3", {duration: 3, ease: "bounce.out", y: 2350, rotate: 90}, "<.05")
    .set("#clip3", { opacity: 1 }, "<")

  }, [])

  useEffect(() => {
    if (firstUpdate.current) {
      firstUpdate.current = false;
      return
    }

    tl.current.restart()
  }, [mouseEnteredScissors])

  return (
    <svg
      className={styles.clip}
      xmlns="http://www.w3.org/2000/svg"
      width="4900"
      height="3000"
      fill="none"
      viewBox="0 0 4900 3000"
    >
      <g id="paperclipAnimation">
        <path id="Rectangle 4" fill="transparent" d="M0 0H4900V3000H0z"></path>
        <path
          id="clip19"
          opacity={0}
          stroke="#409999"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit="10"
          strokeWidth="8"
          d="M1944.31 389.842l33.22-96.209c3.06-8.768 12.99-13.498 22.18-10.614 9.32 2.884 14.34 12.229 11.28 20.881l-38.36 111.206c-5.28 15.112-22.44 23.418-38.49 18.458-16.06-4.961-24.88-21.111-19.61-36.223l42.77-124.127c6.62-19.15 28.56-29.647 48.91-23.418 20.35 6.229 31.5 26.879 24.88 46.028L1992.73 406.8"
        ></path>
        <path
          id="clip18"
          opacity={0}
          stroke="#409999"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit="10"
          strokeWidth="8"
          d="M1944.31 389.842l33.22-96.209c3.06-8.768 12.99-13.498 22.18-10.614 9.32 2.884 14.34 12.229 11.28 20.881l-38.36 111.206c-5.28 15.112-22.44 23.418-38.49 18.458-16.06-4.961-24.88-21.111-19.61-36.223l42.77-124.127c6.62-19.15 28.56-29.647 48.91-23.418 20.35 6.229 31.5 26.879 24.88 46.028L1992.73 406.8"
        ></path>
        <path
          id="clip17"
          opacity={0}
          stroke="#409999"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit="10"
          strokeWidth="8"
          d="M1759.31 389.842l33.22-96.209c3.06-8.768 12.99-13.498 22.18-10.614 9.32 2.884 14.34 12.229 11.28 20.881l-38.36 111.206c-5.28 15.112-22.44 23.418-38.49 18.458-16.06-4.961-24.88-21.111-19.61-36.223l42.77-124.127c6.62-19.15 28.56-29.647 48.91-23.418 20.35 6.229 31.5 26.879 24.88 46.028L1807.73 406.8"
        ></path>
        <path
          id="clip16"
          opacity={0}
          stroke="#409999"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit="10"
          strokeWidth="8"
          d="M2110.31 389.842l33.22-96.209c3.06-8.768 12.99-13.498 22.18-10.614 9.32 2.884 14.34 12.229 11.28 20.881l-38.36 111.206c-5.28 15.112-22.44 23.418-38.49 18.458-16.06-4.961-24.88-21.111-19.61-36.223l42.77-124.127c6.62-19.15 28.56-29.647 48.91-23.418 20.35 6.229 31.5 26.879 24.88 46.028L2158.73 406.8"
        ></path>
        <path
          id="clip15"
          opacity={0}
          stroke="#FFC943"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit="10"
          strokeWidth="8"
          d="M4469.31 367.842l33.22-96.209c3.06-8.768 12.99-13.498 22.18-10.614 9.32 2.884 14.34 12.229 11.28 20.881l-38.36 111.206c-5.28 15.112-22.44 23.418-38.49 18.458-16.06-4.961-24.88-21.111-19.61-36.223l42.77-124.127c6.62-19.15 28.56-29.647 48.91-23.418 20.35 6.229 31.5 26.879 24.88 46.028L4517.73 384.8"
        ></path>
        <path
          id="clip14"
          opacity={0}
          stroke="#F42222"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit="10"
          strokeWidth="8"
          d="M3913.31 367.601l33.22-96.724c3.06-8.815 12.99-13.57 22.18-10.67 9.32 2.899 14.34 12.293 11.28 20.991L3941.63 393c-5.28 15.193-22.44 23.543-38.49 18.556-16.06-4.987-24.88-21.224-19.61-36.417l42.77-124.79c6.62-19.252 28.56-29.806 48.91-23.543 20.35 6.262 31.5 27.022 24.88 46.274l-38.36 111.569"
        ></path>
        <path
          id="clip13"
          opacity={0}
          stroke="#409999"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit="10"
          strokeWidth="8"
          d="M2487.31 389.842l33.22-96.209c3.06-8.768 12.99-13.498 22.18-10.614 9.32 2.884 14.34 12.229 11.28 20.881l-38.36 111.206c-5.28 15.112-22.44 23.418-38.49 18.458-16.06-4.961-24.88-21.111-19.61-36.223l42.77-124.127c6.62-19.15 28.56-29.647 48.91-23.418 20.35 6.229 31.5 26.879 24.88 46.028L2535.73 406.8"
        ></path>
        <path
          id="clip12"
          opacity={0}
          stroke="#F42222"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit="10"
          strokeWidth="8"
          d="M1382.31 389.842l33.22-96.209c3.06-8.768 12.99-13.498 22.18-10.614 9.32 2.884 14.34 12.229 11.28 20.881l-38.36 111.206c-5.28 15.112-22.44 23.418-38.49 18.458-16.06-4.961-24.88-21.111-19.61-36.223l42.77-124.127c6.62-19.15 28.56-29.647 48.91-23.418 20.35 6.229 31.5 26.879 24.88 46.028L1430.73 406.8"
        ></path>
        <path
          id="clip20"
          opacity={0}
          stroke="#114EFF"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit="10"
          strokeWidth="8"
          d="M968.311 389.842l33.219-96.209c3.06-8.768 12.99-13.498 22.18-10.614 9.32 2.884 14.34 12.229 11.28 20.881l-38.365 111.206c-5.27 15.112-22.43 23.418-38.487 18.458-16.057-4.961-24.882-21.111-19.612-36.223l42.778-124.127c6.619-19.15 28.556-29.647 48.906-23.418 20.35 6.229 31.5 26.879 24.88 46.028L1016.73 406.8"
        ></path>
        <path
          id="clip11"
          opacity={0}
          stroke="#F42222"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit="10"
          strokeWidth="8"
          d="M2890.31 380.842l33.22-96.209c3.06-8.768 12.99-13.498 22.18-10.614 9.32 2.884 14.34 12.229 11.28 20.881l-38.36 111.206c-5.28 15.112-22.44 23.418-38.49 18.458-16.06-4.961-24.88-21.111-19.61-36.223l42.77-124.127c6.62-19.15 28.56-29.647 48.91-23.418 20.35 6.229 31.5 26.879 24.88 46.028L2938.73 397.8"
        ></path>
        <path
          id="clip10"
          opacity={0}
          stroke="#FFC943"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit="10"
          strokeWidth="8"
          d="M4141.17 385.444V284.212c0-9.234 7.97-16.622 17.94-16.622 9.97 0 17.94 7.388 17.94 16.622v117.046c0 15.929-13.95 28.742-31.02 28.742-17.2 0-31.03-12.928-31.03-28.742V270.591c0-20.2 17.69-36.591 39.5-36.591s39.5 16.391 39.5 36.591v116.815"
        ></path>
        <path
          id="clip9"
          opacity={0}
          stroke="#FFC943"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit="10"
          strokeWidth="8"
          d="M3728.17 376.444V275.212c0-9.234 7.97-16.622 17.94-16.622 9.97 0 17.94 7.388 17.94 16.622v117.046c0 15.929-13.95 28.742-31.02 28.742-17.2 0-31.03-12.928-31.03-28.742V261.591c0-20.2 17.69-36.591 39.5-36.591s39.5 16.391 39.5 36.591v116.815"
        ></path>
        <path
          id="clip8"
          opacity={0}
          stroke="#114EFF"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit="10"
          strokeWidth="8"
          d="M3437.17 385.444V284.212c0-9.234 7.97-16.622 17.94-16.622 9.97 0 17.94 7.388 17.94 16.622v117.046c0 15.929-13.95 28.742-31.02 28.742-17.2 0-31.03-12.928-31.03-28.742V270.591c0-20.2 17.69-36.591 39.5-36.591s39.5 16.391 39.5 36.591v116.815"
        ></path>
        <path
          id="clip7"
          opacity={0}
          stroke="#114EFF"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit="10"
          strokeWidth="8"
          d="M519.167 400.217V298.468c0-9.281 7.975-16.707 17.943-16.707 9.969 0 17.944 7.426 17.944 16.707v117.643c0 16.011-13.956 28.889-31.027 28.889C506.831 445 493 432.006 493 416.111V284.778C493 264.475 510.694 248 532.5 248s39.5 16.475 39.5 36.778v117.411"
        ></path>
        <path
          id="clip6"
          opacity={0}
          stroke="#8A8A8A"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit="10"
          strokeWidth="8"
          d="M760.167 399.444V298.212c0-9.234 7.975-16.622 17.943-16.622 9.969 0 17.944 7.388 17.944 16.622v117.046c0 15.929-13.956 28.742-31.027 28.742C747.831 444 734 431.072 734 415.258V284.591c0-20.2 17.694-36.591 39.5-36.591s39.5 16.391 39.5 36.591v116.815"
        ></path>
        <path
          id="clip5"
          opacity={0}
          stroke="#777BB4"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit="10"
          strokeWidth="8"
          d="M1162.17 399.444V298.212c0-9.234 7.97-16.622 17.94-16.622 9.97 0 17.94 7.388 17.94 16.622v117.046c0 15.929-13.95 28.742-31.02 28.742-17.2 0-31.03-12.928-31.03-28.742V284.591c0-20.2 17.69-36.591 39.5-36.591s39.5 16.391 39.5 36.591v116.815"
        ></path>
        <path
          id="clip4"
          opacity={0}
          stroke="#777BB4"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit="10"
          strokeWidth="8"
          d="M1610.17 400.217V298.468c0-9.281 7.97-16.707 17.94-16.707 9.97 0 17.94 7.426 17.94 16.707v117.643c0 16.011-13.95 28.889-31.02 28.889-17.2 0-31.03-12.994-31.03-28.889V284.778c0-20.303 17.69-36.778 39.5-36.778s39.5 16.475 39.5 36.778v117.411"
        ></path>
        <path
          id="clip3"
          opacity={0}
          stroke="#FFC943"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit="10"
          strokeWidth="8"
          d="M3146.84 390.444V289.212c0-9.234 7.87-16.622 17.71-16.622s17.72 7.388 17.72 16.622v117.046c0 15.929-13.78 28.742-30.64 28.742-16.97 0-30.63-12.928-30.63-28.742V275.591c0-20.2 17.47-36.591 39-36.591s39 16.391 39 36.591v116.815"
        ></path>
        <path
          id="clip2"
          opacity={0}
          stroke="#32BF6B"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit="10"
          strokeWidth="8"
          d="M2719.17 391.217V289.468c0-9.281 7.97-16.707 17.94-16.707 9.97 0 17.94 7.426 17.94 16.707v117.643c0 16.011-13.95 28.889-31.02 28.889-17.2 0-31.03-12.994-31.03-28.889V275.778c0-20.303 17.69-36.778 39.5-36.778s39.5 16.475 39.5 36.778v117.411"
        ></path>
        <path
          id="clip1"
          opacity={0}
          stroke="#F42222"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit="10"
          strokeWidth="8"
          d="M2330.17 400.217V298.468c0-9.281 7.97-16.707 17.94-16.707 9.97 0 17.94 7.426 17.94 16.707v117.643c0 16.011-13.95 28.889-31.02 28.889-17.2 0-31.03-12.994-31.03-28.889V284.778c0-20.303 17.69-36.778 39.5-36.778s39.5 16.475 39.5 36.778v117.411"
        ></path>
      </g>
    </svg>
  )
}

export default PaperclipAnimation