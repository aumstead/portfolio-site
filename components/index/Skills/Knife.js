import styles from "./Knife.module.scss";
import { useEffect, useRef, useState } from "react";

function Knife({ setMouseEnteredKnife }) {
  const [animateHint, setAnimateHint] = useState(false)
  const [timerFunc, setTimerFunc] = useState(false)

  const knife = useRef(null)

  useEffect(() => {
    const firstTimeout = setTimeout(() => {
      setAnimateHint(true)
    }, 6000)

    return () => clearTimeout(firstTimeout)
  }, [timerFunc])

  useEffect(() => {
    let secondTimeout;
    if (animateHint) {
      knife.current.classList.add(`${styles.vibrate}`)
      secondTimeout = setTimeout(() => {
        knife.current.classList.remove(`${styles.vibrate}`)
        setTimerFunc(prevState => !prevState)
        setAnimateHint(false)
      }, 12000)
    }
    return () => clearTimeout(secondTimeout)
  }, [animateHint])

  function handleMouseEnter() {
    setMouseEnteredKnife((prevState) => !prevState);
  }
  return (
    <svg
      ref={knife}
      onMouseEnter={handleMouseEnter}
      className={styles.knife}
      width="460"
      height="393"
      viewBox="0 0 460 393"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill="#D2DDE1"
        d="M202.3 263.1l4.4-9 9.6 2.7 4.4-9 9.7 2.7 4.4-9 9.7 2.7 4.4-9 9.7 2.7 4.4-9 9.7 2.7 4.4-9 9.7 2.7 4.4-9 9.7 2.7 4.4-9 9.7 2.7 4.4-9 9.7 2.7 4.4-9 9.7 2.7 4.4-9-5.8-7.8c-7.1-9.6-19.9-13-30.8-8.1l-127.8 57.6 19.1 30.3z"
      ></path>
      <path
        stroke="#474747"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit="10"
        strokeWidth="6"
        d="M202.3 263.1l4.4-9 9.6 2.7 4.4-9 9.7 2.7 4.4-9 9.7 2.7 4.4-9 9.7 2.7 4.4-9 9.7 2.7 4.4-9 9.7 2.7 4.4-9 9.7 2.7 4.4-9 9.7 2.7 4.4-9 9.7 2.7 4.4-9 9.7 2.7 4.4-9-5.8-7.8c-7.1-9.6-19.9-13-30.8-8.1l-127.8 57.6 19.1 30.3z"
      ></path>
      <path
        fill="#BACED3"
        d="M139.8 297.9l-74.7 15L3 3c41.9 11.4 74.4 44.4 85.4 86.4l51.4 208.5z"
      ></path>
      <path
        fill="#D2DDE1"
        d="M178.8 222.7c-11.2 10.6-20.9 4.1-20.7-4.8.4-14.3 7.9-29.3 15.9-40.7 4.7-6.8 16.8-19 23.5-13.7l16.4-72.2-26.2-34.2-4.8 8.2c-11.5 19.8-21.7 40.2-30.6 61.3-9 21.2-16.3 43-22.3 65.3l-27 100.8 47.2 15.2s15.6-16.7 20.2-27.1c12.6-28.6 18.7-54.3 18.7-54.3l-10.3-3.8z"
      ></path>
      <path
        stroke="#474747"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit="10"
        strokeWidth="6"
        d="M178.8 222.7c-11.2 10.6-20.9 4.1-20.7-4.8.4-14.3 7.9-29.3 15.9-40.7 4.7-6.8 16.1-16.3 23.5-13.7l16.4-72.2-26.2-34.2-4.8 8.2c-11.5 19.8-21.7 40.2-30.6 61.3-9 21.2-16.3 43-22.3 65.3l-27 100.8 47.2 15.2s15.6-16.7 20.2-27.1c12.6-28.6 18.7-54.3 18.7-54.3l-10.3-3.8z"
      ></path>
      <path
        fill="#E7EFF1"
        d="M24.3 11L90 307.9l49.7-10L88.3 89.3c-8.9-34.5-32.6-62.9-64-78.3z"
      ></path>
      <path
        stroke="#474747"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit="10"
        strokeWidth="6"
        d="M139.8 297.9l-74.7 15L3 3c41.9 11.4 74.4 44.4 85.4 86.4l51.4 208.5z"
      ></path>
      <path
        fill="#BCC6C9"
        d="M175.7 242.8l14.3-.5c3-.1 4.9-2.3 4.5-5.3l-2-14.2 14.3-.5c3-.1 4.9-2.3 4.5-5.3l-2-14.2 14.3-.5c3-.1 4.9-2.3 4.5-5.3l-2-14.2 14.3-.5c3-.1 4.9-2.3 4.5-5.3l-2-14.2 14.3-.5c3-.1 4.9-2.3 4.5-5.3l-2-14.2 15.6-1.5c3.4-.3 5.1-3.4 3.7-6.9l-13.4-33.5-3.6 26.8-13.8.5c-3.3.1-5.4 2.6-4.9 5.8l1.9 13.7-13.8.5c-3.3.1-5.4 2.6-4.9 5.8l1.9 13.7-13.8.5c-3.3.1-5.4 2.6-4.9 5.8l1.9 13.7-13.8.5c-3.3.1-5.4 2.6-4.9 5.8l1.9 13.7-13.8.5c-3.3.1-5.4 2.6-4.9 5.8l1.9 13.7-19.5.7-18.7 22.3 23.4 19.6 12.5-27.5z"
      ></path>
      <path
        stroke="#474747"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit="10"
        strokeWidth="6"
        d="M175.7 242.8l14.3-.5c3-.1 4.9-2.3 4.5-5.3l-2-14.2 14.3-.5c3-.1 4.9-2.3 4.5-5.3l-2-14.2 14.3-.5c3-.1 4.9-2.3 4.5-5.3l-2-14.2 14.3-.5c3-.1 4.9-2.3 4.5-5.3l-2-14.2 14.3-.5c3-.1 4.9-2.3 4.5-5.3l-2-14.2 15.6-1.5c3.4-.3 5.1-3.4 3.7-6.9l-13.4-33.5-3.6 26.8-13.8.5c-3.3.1-5.4 2.6-4.9 5.8l1.9 13.7-13.8.5c-3.3.1-5.4 2.6-4.9 5.8l1.9 13.7-13.8.5c-3.3.1-5.4 2.6-4.9 5.8l1.9 13.7-13.8.5c-3.3.1-5.4 2.6-4.9 5.8l1.9 13.7-13.8.5c-3.3.1-5.4 2.6-4.9 5.8l1.9 13.7-19.5.7-18.7 22.3 23.4 19.6 12.5-27.5z"
      ></path>
      <path
        fill="#50B56F"
        d="M386.8 389.7h-260c-38.7 0-70-31.3-70-70s31.3-70 70-70h260c38.7 0 70 31.3 70 70s-31.3 70-70 70z"
      ></path>
      <path
        fill="#50B56F"
        d="M386.8 373.7h-260c-35.9 0-65.5-27.1-69.5-62-.3 2.6-.5 5.3-.5 8 0 38.7 31.3 70 70 70h260c38.7 0 70-31.3 70-70 0-2.7-.2-5.4-.5-8-3.9 34.9-33.5 62-69.5 62z"
      ></path>
      <path
        fill="#50B56F"
        d="M386.8 249.7h-260c-38.7 0-70 31.3-70 70 0 2.5.1 5.1.4 7.5 3.8-35.1 33.5-62.5 69.6-62.5h260c36.1 0 65.8 27.4 69.6 62.5.3-2.5.4-5 .4-7.5 0-38.6-31.3-70-70-70z"
      ></path>
      <path
        stroke="#474747"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit="10"
        strokeWidth="6"
        d="M386.8 389.7h-260c-38.7 0-70-31.3-70-70s31.3-70 70-70h260c38.7 0 70 31.3 70 70s-31.3 70-70 70z"
      ></path>
      <path
        stroke="#474747"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit="10"
        strokeWidth="3"
        d="M85.7 242.7l30.8-8.5"
      ></path>
      <path
        fill="#D2DDE1"
        d="M131.1 344.9c13.918 0 25.2-11.282 25.2-25.2s-11.282-25.2-25.2-25.2-25.2 11.282-25.2 25.2 11.282 25.2 25.2 25.2z"
      ></path>
      <path
        stroke="#474747"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit="10"
        strokeWidth="6"
        d="M110.7 356.6c-13-7.2-21.8-21-21.8-36.9 0-9.4 3.1-18.1 8.4-25.2"
        opacity="0.2"
      ></path>
      <path
        stroke="#474747"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit="10"
        strokeWidth="6"
        d="M131.1 344.9c13.918 0 25.2-11.282 25.2-25.2s-11.282-25.2-25.2-25.2-25.2 11.282-25.2 25.2 11.282 25.2 25.2 25.2z"
      ></path>
      <path
        stroke="#474747"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit="10"
        strokeWidth="3"
        d="M165.8 129.8s-15.3 38.7-19.6 60"
      ></path>
      <path
        stroke="#474747"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit="10"
        strokeWidth="6"
        d="M131.1 303.7v32.1M147.1 319.7H115"
      ></path>
      <path
        stroke="#474747"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit="10"
        strokeWidth="3"
        d="M62.3 182.5l10.1 45.7M30.1 36.9l28.4 128.4"
      ></path>
    </svg>
  );
}

export default Knife;
