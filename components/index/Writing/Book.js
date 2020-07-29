import styles from "./Book.module.scss";
import { useEffect, useRef, useState } from 'react'

function Book({ setMouseEnteredBook }) {
  
  const [animateHint, setAnimateHint] = useState(false)
  const [timerFunc, setTimerFunc] = useState(false)
  
  const book = useRef(null)
  
  useEffect(() => {
    const firstTimeout = setTimeout(() => {
      setAnimateHint(true)
    }, 9000)

    return () => clearTimeout(firstTimeout)
  }, [timerFunc])
  
  useEffect(() => {
    let secondTimeout;

    if (animateHint) {
      book.current.classList.add(`${styles.vibrate}`)
      secondTimeout = setTimeout(() => {
        book.current.classList.remove(`${styles.vibrate}`)
        setTimerFunc(prevState => !prevState)
        setAnimateHint(false)
      }, 9000)
    }

    return () => clearTimeout(secondTimeout)
  }, [animateHint])

  function handleMouseEnter() {
    setMouseEnteredBook((prevState) => !prevState);
  }

  return (
    <svg
      ref={book}
      onMouseEnter={handleMouseEnter}
      className={styles.book}
      xmlns="http://www.w3.org/2000/svg"
      width="402"
      height="459"
      fill="none"
      viewBox="0 0 402 459"
    >
      <path
        fill="#102D3B"
        d="M38.4 276.85H5.9c6.7-10 6.7-23 0-34h32.5c-6.7 11-6.7 24 0 34z"
      ></path>
      <path
        fill="#4C5B60"
        d="M380 408.85H104v-396h276c9.9 0 18 7.8 18 17.7v360c0 10-8.1 18.3-18 18.3z"
      ></path>
      <path fill="#3E4B4F" d="M357 12.85h-24v396h24v-396z"></path>
      <path fill="#CCDDE5" d="M121 12.85h-17v396h17v-396z" opacity="0.3"></path>
      <path
        stroke="#102D3B"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit="10"
        strokeWidth="8"
        d="M380 408.85H104v-396h276c9.9 0 18 7.8 18 17.7v360c0 10-8.1 18.3-18 18.3z"
      ></path>
      <path
        stroke="#102D3B"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit="10"
        strokeWidth="8"
        d="M138 12.85h-34v396h34v-396z"
      ></path>
      <path fill="#FF9852" d="M398 126.85H104v112h294v-112z"></path>
      <path
        stroke="#D85639"
        strokeMiterlimit="10"
        strokeWidth="8"
        d="M138 126.85v112"
        opacity="0.6"
      ></path>
      <path fill="#FDBA5D" d="M121 126.85h-17v112h17v-112z"></path>
      <path
        fill="#D85639"
        d="M357 126.85h-17v112h17v-112z"
        opacity="0.61"
      ></path>
      <path
        stroke="#102D3B"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit="10"
        strokeWidth="8"
        d="M398 126.85H104v112h294v-112z"
      ></path>
      <path
        fill="#B7C8CE"
        d="M340.2 416.85h-12.3c-3.2 0-5.8-2.6-5.8-5.8V10.65c0-3.2 2.6-5.8 5.8-5.8h12.3c3.2 0 5.8 2.6 5.8 5.8v400.3c0 3.3-2.6 5.9-5.8 5.9z"
      ></path>
      <path
        stroke="#102D3B"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit="10"
        strokeWidth="8"
        d="M340.2 416.85h-12.3c-3.2 0-5.8-2.6-5.8-5.8V10.65c0-3.2 2.6-5.8 5.8-5.8h12.3c3.2 0 5.8 2.6 5.8 5.8v400.3c0 3.3-2.6 5.9-5.8 5.9z"
      ></path>
      <path fill="#EA3939" d="M165 454.55l-30-16.7v-29h30v45.7z"></path>
      <path
        fill="#EA3939"
        d="M165 408.85h-30v11.3h30v-11.3z"
        opacity="0.62"
      ></path>
      <path
        stroke="#102D3B"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit="10"
        strokeWidth="8"
        d="M165 454.55l-30-16.7v-29h30v45.7z"
      ></path>
      <path fill="#526066" d="M38 91.85H6v151h32v-151z"></path>
      <path fill="#526066" d="M38 91.85H6v151h32v-151z"></path>
      <path fill="#526066" d="M16 91.85H6v151h10v-151z" opacity="0.64"></path>
      <path fill="#526066" d="M38 91.85h-9v151h9v-151z" opacity="0.3"></path>
      <path
        stroke="#102D3B"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit="10"
        strokeWidth="8"
        d="M38 91.85H6v151h32v-151z"
      ></path>
      <path
        fill="#42708A"
        d="M38.4 344.85H5.9c-2.1-22-2.1-45 0-68h32.5c2.1 23 2.1 46 0 68z"
      ></path>
      <path
        fill="#526066"
        d="M38.4 344.85H5.9c-2.1-22-2.1-45 0-68h32.5c2.1 23 2.1 46 0 68z"
      ></path>
      <path
        fill="#526066"
        d="M38.4 276.85h-7.8c2.1 23 2.1 46 0 68h7.8c2.1-22 2.1-45 0-68z"
        opacity="0.3"
      ></path>
      <path
        fill="#CCDDE5"
        d="M17.4 343.85h-4.7c-2.1-21.7-2.1-44.3-.1-67h4.8c-2 22.7-2 45.3 0 67z"
        opacity="0.73"
      ></path>
      <path
        stroke="#102D3B"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit="10"
        strokeWidth="8"
        d="M38.4 344.85H5.9c-2.1-22-2.1-45 0-68h32.5c2.1 23 2.1 46 0 68z"
      ></path>
      <path
        stroke="#102D3B"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit="10"
        strokeWidth="8"
        d="M40 300.85H4v21h36v-21zM38.4 276.85H5.9c6.7-10 6.7-23 0-34h32.5c-6.7 11-6.7 24 0 34z"
      ></path>
      <path
        fill="#CCDDE5"
        d="M26.3 391.85c5.4-16 11.9-31 12.1-47H5.9c.2 16 6.7 31 12.1 47h8.3z"
      ></path>
      <path
        fill="#fff"
        d="M38.4 344.85v1H17c.1 15.7 2.9 30.7 6.2 46H18c-5.4-16-11.9-31-12.1-47h32.5z"
      ></path>
      <path
        stroke="#102D3B"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit="10"
        strokeWidth="8"
        d="M26.3 391.85c5.4-16 11.9-31 12.1-47H5.9c.2 16 6.7 31 12.1 47h8.3zM26 391.85h-8v6h8v-6zM22 398.85v13M34 69.85H10v22h24v-22z"
      ></path>
      <path fill="#102D3B" d="M34 69.85H10v22h24v-22z"></path>
      <path
        fill="#CCDDE5"
        d="M31 69.85H13v-25.7c0-3.5 3.2-6.3 6.7-6.3h5c3.5 0 6.3 2.8 6.3 6.3v25.7z"
      ></path>
      <path
        stroke="#102D3B"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit="10"
        strokeWidth="8"
        d="M31 69.85H13v-25.7c0-3.5 3.2-6.3 6.7-6.3h5c3.5 0 6.3 2.8 6.3 6.3v25.7z"
      ></path>
      <path fill="#CCDDE5" d="M49 105.85H18v18h31v-18z"></path>
      <path
        stroke="#102D3B"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit="10"
        strokeWidth="8"
        d="M49 105.85H18v18h31v-18z"
      ></path>
      <path fill="#CCDDE5" d="M49 185.15l-11-14.5v-46.8h11v61.3z"></path>
      <path
        stroke="#102D3B"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit="10"
        strokeWidth="8"
        d="M49 185.15l-11-14.5v-46.8h11v61.3z"
      ></path>
    </svg>
  );
}

export default Book;
