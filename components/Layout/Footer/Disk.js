import styles from "./Disk.module.scss";
import { useEffect, useRef, useState, useContext } from "react";
import MobileContext from '../../../contexts/mobile/MobileContext'

function Disk({ setTriggerTimeline }) {
  const mobileContext = useContext(MobileContext);
  const { onMobile, setOnMobile } = mobileContext;

  const [animateHint, setAnimateHint] = useState(false)
  const [timerFunc, setTimerFunc] = useState(false)
  const [cancelHintAnimation, setCancelHintAnimation] = useState(false)

  const disk = useRef(null)

  let firstTimeout;
  let secondTimeout;

  useEffect(() => {
    function handleWindowSizeChange() {
      if (window.innerWidth <= 500) {
        setOnMobile(true);
      } else {
        setOnMobile(false);
      }
    }
    window.addEventListener("resize", handleWindowSizeChange);

    handleWindowSizeChange()

    return () => {
      window.removeEventListener("resize", handleWindowSizeChange);
    };
  }, []);

  useEffect(() => {
    if (!cancelHintAnimation) {
      firstTimeout = setTimeout(() => {
        setAnimateHint(true)
      }, 4000)
    }

    return () => clearTimeout(firstTimeout)
  }, [timerFunc])

  useEffect(() => {
    if (animateHint && !cancelHintAnimation) {
      disk.current.classList.add(`${styles.vibrate}`)
      secondTimeout = setTimeout(() => {
        disk.current.classList.remove(`${styles.vibrate}`)
        setTimerFunc(prevState => !prevState)
        setAnimateHint(false)
      }, 12000)
    }
    return () => clearTimeout(secondTimeout)
  }, [animateHint])

  function handleMouseEnter() {
    // this state triggers useEffect func which restarts gsap timeline
    setTriggerTimeline((prevState) => !prevState);
    clearTimeout(firstTimeout)
    clearTimeout(secondTimeout)
    setCancelHintAnimation(true)
  }

  return (
    <svg
      ref={disk}
      onMouseEnter={onMobile ? null : handleMouseEnter}
      onClick={onMobile ? handleMouseEnter : null}
      className={styles.disk}
      xmlns="http://www.w3.org/2000/svg"
      width="307"
      height="307"
      fill="none"
      viewBox="0 0 307 307"
    >
      <g>
        <path
          fill="#747178"
          d="M285.1 3.9H41.7c-3 0-6 1.2-8.1 3.4L6.5 34.4c-2.2 2.2-3.4 5.1-3.4 8.1v243.4c0 9.9 8.1 18 18 18h264c9.9 0 18-8.1 18-18v-264c0-9.9-8.1-18-18-18z"
        ></path>
        <path
          fill="#514E55"
          stroke="#464349"
          strokeMiterlimit="10"
          strokeWidth="4"
          d="M153.1 285.6c69.975 0 126.7-56.725 126.7-126.7 0-69.974-56.725-126.7-126.7-126.7-69.974 0-126.7 56.726-126.7 126.7 0 69.975 56.726 126.7 126.7 126.7z"
          opacity="0.43"
        ></path>
        <path
          stroke="#413E51"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit="10"
          strokeWidth="6"
          d="M285.1 3.9H41.7c-3 0-6 1.2-8.1 3.4L6.5 34.4c-2.2 2.2-3.4 5.1-3.4 8.1v243.4c0 9.9 8.1 18 18 18h264c9.9 0 18-8.1 18-18v-264c0-9.9-8.1-18-18-18z"
        ></path>
        <path
          stroke="#413E51"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit="10"
          strokeWidth="6"
          d="M285.1 3.9H41.7c-3 0-6 1.2-8.1 3.4L6.5 34.4c-2.2 2.2-3.4 5.1-3.4 8.1v243.4c0 9.9 8.1 18 18 18h264c9.9 0 18-8.1 18-18v-264c0-9.9-8.1-18-18-18z"
        ></path>
        <path
          fill="#C9C9C9"
          d="M153.1 200.9c23.196 0 42-18.804 42-42s-18.804-42-42-42-42 18.804-42 42 18.804 42 42 42z"
        ></path>
        <path
          stroke="#413E51"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit="10"
          strokeWidth="6"
          d="M153.1 200.9c23.196 0 42-18.804 42-42s-18.804-42-42-42-42 18.804-42 42 18.804 42 42 42z"
        ></path>
        <path
          fill="#413E51"
          d="M257.1 303.9h-208v-25c0-9.9 8.1-18 18-18h172c9.9 0 18 8.1 18 18v25z"
        ></path>
        <path
          stroke="#413E51"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit="10"
          strokeWidth="6"
          d="M257.1 303.9h-208v-25c0-9.9 8.1-18 18-18h172c9.9 0 18 8.1 18 18v25z"
        ></path>
        <path fill="#413E51" d="M284.6 260.9h-14v14h14v-14z"></path>
        <path
          stroke="#413E51"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit="10"
          strokeWidth="6"
          d="M284.6 260.9h-14v14h14v-14z"
        ></path>
        <path
          stroke="#413E51"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit="10"
          strokeWidth="8"
          d="M195.1 247.6h67"
        ></path>
        <path fill="#413E51" d="M156.6 152.9h-9v9h9v-9z"></path>
        <path
          stroke="#413E51"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit="10"
          strokeWidth="6"
          d="M156.6 152.9h-9v9h9v-9z"
        ></path>
        <path
          fill="#413E51"
          d="M172.796 168.381l-18.874 6.618 3.309 9.437 18.874-6.618-3.309-9.437z"
        ></path>
        <path
          stroke="#413E51"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit="10"
          strokeWidth="6"
          d="M172.796 168.381l-18.874 6.618 3.309 9.437 18.874-6.618-3.309-9.437z"
        ></path>
        <path
          fill="#413E51"
          d="M303.1 65.9c-6.6 0-12-5.4-12-12s5.4-12 12-12v24z"
        ></path>
        <path
          stroke="#413E51"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit="10"
          strokeWidth="6"
          d="M303.1 65.9c-6.6 0-12-5.4-12-12s5.4-12 12-12v24z"
        ></path>
        <path
          fill="#413E51"
          d="M3.1 65.9c6.6 0 12-5.4 12-12s-5.4-12-12-12v24z"
        ></path>
        <path
          stroke="#413E51"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit="10"
          strokeWidth="6"
          d="M3.1 65.9c6.6 0 12-5.4 12-12s-5.4-12-12-12v24z"
        ></path>
        <g fill="#413E51">
          <path d="M24.8 89.9a8.5 8.5 0 100-17 8.5 8.5 0 000 17z"></path>
          <path d="M275.3 89.9a8.5 8.5 0 100-17 8.5 8.5 0 000 17z"></path>
        </g>
        <path
          fill="#514E55"
          d="M244.1 95.9h-138c-9.9 0-18-8.1-18-18v-74h174v74c0 10-8.1 18-18 18z"
        ></path>
        <path
          stroke="#413E51"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit="10"
          strokeWidth="6"
          d="M200.1 95.9h-88c-9.9 0-18-8.1-18-18v-74h124v74c0 10-8.1 18-18 18z"
          opacity="0.48"
        ></path>
        <path
          stroke="#413E51"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit="10"
          strokeWidth="6"
          d="M244.1 95.9h-138c-9.9 0-18-8.1-18-18v-74h174v74c0 10-8.1 18-18 18z"
        ></path>
        <path
          stroke="#413E51"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit="10"
          strokeWidth="8"
          d="M212.1 16.9h33.5"
        ></path>
        <path
          fill="#BFC1C0"
          d="M194.1 95.9h-88c-9.9 0-18-8.1-18-18v-74h124v74c0 10-8.1 18-18 18z"
        ></path>
        <path
          fill="#DDD"
          d="M160.6 95.9l51.5-71.1V8.5l-64.9 87.4h13.4z"
          opacity="0.52"
        ></path>
        <path
          fill="#DDD"
          d="M109.4 95.6c1.2.2-4.6.4-3.3.4h29.8l68.7-92h-26.8l-68.4 91.6z"
          opacity="0.52"
        ></path>
        <path
          stroke="#413E51"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit="10"
          strokeWidth="6"
          d="M194.1 95.9h-88c-9.9 0-18-8.1-18-18v-74h124v74c0 10-8.1 18-18 18z"
        ></path>
        <path fill="#514E55" d="M134.7 14.9h-24v58h24v-58z"></path>
        <path
          fill="#413E51"
          d="M124.1 14.9h-13.4v58h13.4v-58z"
          opacity="0.48"
        ></path>
        <path
          stroke="#413E51"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit="10"
          strokeWidth="6"
          d="M134.7 14.9h-24v58h24v-58z"
        ></path>
        <path
          stroke="#413E51"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit="10"
          strokeWidth="6"
          d="M199.2 14.9h-12v6h12v-6z"
        ></path>
        <path
          stroke="#413E51"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit="10"
          strokeWidth="6"
          d="M26.4 303.9v-24"
        ></path>
      </g>
    </svg>
  );
}

export default Disk;
