import styles from "./Cards.module.scss";
import { useEffect, useRef, useState } from "react";

// Hint animation logic involving timeouts, state, and useEffects explained in ../Writing/Book.js

function Cards({ setMouseEnteredCards, onMobile }) {
  const [animateHint, setAnimateHint] = useState(false);
  const [timerFunc, setTimerFunc] = useState(false);
  const [cancelAnimation, setCancelAnimation] = useState(false);
  const [count, setCount] = useState(1);
  const [disabled, setDisabled] = useState(false);

  const cardsRef = useRef(null);
  const massageFlukeTl = useRef(null);
  const recallChekTl = useRef(null);
  const whiteSandsTl = useRef(null);
  const dgifoliosTl = useRef(null);

  let firstTimeout;
  let secondTimeout;

  useEffect(() => {
    gsap.set("#dgifolios", { rotate: -45, transformOrigin: "45% 85%" } )
    gsap.set("#massage-fluke", { rotate: 15, transformOrigin: "55% 85%" } )
    gsap.set("#recall-chek", { rotate: 35, transformOrigin: "55% 85%" } )
    gsap.set("#white-sands", { rotate: 55, transformOrigin: "55% 85%" } )

    massageFlukeTl.current = gsap.timeline();
    massageFlukeTl.current
      .to("#dgifolios", 1, { rotate: -5, transformOrigin: "45% 85%" })
      .to("#massage-fluke", 1, { rotate: -45, transformOrigin: "45% 85%" }, "<")
    massageFlukeTl.current.pause();

    recallChekTl.current = gsap.timeline();
    recallChekTl.current
      .to("#massage-fluke", 1, { rotate: 15, transformOrigin: "45% 85%" })
      .to("#recall-chek", 1, { rotate: -45, transformOrigin: "45% 85%" }, "<");
    recallChekTl.current.pause();

    whiteSandsTl.current = gsap.timeline();
    whiteSandsTl.current
      .to("#recall-chek", 1, { rotate: 35, transformOrigin: "45% 85%" })
      .to("#white-sands", 1, { rotate: -45, transformOrigin: "45% 85%" }, "<");
    whiteSandsTl.current.pause();

    dgifoliosTl.current = gsap.timeline();
    dgifoliosTl.current
      .to("#white-sands", 1, { rotate: 55, transformOrigin: "45% 85%" })
      .to("#dgifolios", 1, { rotate: -45, transformOrigin: "45% 85%" }, "<");
    dgifoliosTl.current.pause();
  }, []);

  useEffect(() => {
    if (!cancelAnimation) {
      firstTimeout = setTimeout(() => {
        setAnimateHint(true);
      }, 4000);
    }

    return () => clearTimeout(firstTimeout);
  }, [timerFunc]);

  useEffect(() => {
    if (animateHint && !cancelAnimation) {
      cardsRef.current.classList.add(`${styles.vibrate}`);
      secondTimeout = setTimeout(() => {
        cardsRef.current.classList.remove(`${styles.vibrate}`);
        setTimerFunc((prevState) => !prevState);
        setAnimateHint(false);
      }, 12000);
    }
    return () => clearTimeout(secondTimeout);
  }, [animateHint]);

  function handleMouseEnter() {
    // this state triggers useEffect func which restarts gsap timeline
    setMouseEnteredCards((prevState) => !prevState);
    clearTimeout(firstTimeout);
    clearTimeout(secondTimeout);
    setCancelAnimation(true);

    if (count === 1) {
      massageFlukeTl.current.restart();
      setCount(2);
    } else if (count === 2) {
      recallChekTl.current.restart();
      setCount(3);
    } else if (count === 3) {
      whiteSandsTl.current.restart();
      setCount(4);
    } else if (count === 4) {
      dgifoliosTl.current.restart();
      setCount(1);
    }

    setDisabled(true);
    setTimeout(() => {
      setDisabled(false);
    }, 1000);
  }

  return (
    <svg
      className={styles.cards}
      ref={cardsRef}
      onMouseEnter={disabled || onMobile ? null : handleMouseEnter}
      onClick={!disabled && onMobile ? handleMouseEnter : null}
      width="112"
      height="320"
      viewBox="0 0 112 320"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="newCards">
        <g id="white-sands" className={styles.whiteSands}>
          <path
            id="XMLID 54"
            d="M82 312H22C12.1 312 4 303.9 4 294V22C4 12.1 12.1 4 22 4H82C91.9 4 100 12.1 100 22V294C100 304 92 312 82 312Z"
            fill="white"
          />
          <path
            id="XMLID 1"
            d="M82 312H22C12.1 312 4 303.9 4 294V22C4 12.1 12.1 4 22 4H82C91.9 4 100 12.1 100 22V294C100 304 92 312 82 312Z"
            stroke="#330E00"
            strokeWidth="8"
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            id="XMLID 4"
            d="M100 202H4V22C4 12.1 12.1 4 22 4H82C91.9 4 100 12.1 100 22V202Z"
            stroke="#330E00"
            strokeWidth="8"
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            id="XMLID 59"
            d="M100 70H4V22C4 12.1 12.1 4 22 4H82C91.9 4 100 12.1 100 22V70Z"
            fill="#31B9F4"
          />
          <path
            id="XMLID 5"
            d="M100 70H4V22C4 12.1 12.1 4 22 4H82C91.9 4 100 12.1 100 22V70Z"
            stroke="#330E00"
            strokeWidth="8"
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path id="XMLID 58" d="M100 70H4V136H100V70Z" fill="#FF0000" />
          <path
            id="XMLID 7"
            d="M100 70H4V136H100V70Z"
            fill="black"
            stroke="#330E00"
            strokeWidth="8"
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path id="XMLID 56" d="M100 136H4V202H100V136Z" fill="white" />
          <path
            id="XMLID 8"
            d="M100 136H4V202H100V136Z"
            stroke="#330E00"
            strokeWidth="8"
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            id="XMLID 6"
            d="M27.3999 297C31.8182 297 35.3999 293.418 35.3999 289C35.3999 284.582 31.8182 281 27.3999 281C22.9816 281 19.3999 284.582 19.3999 289C19.3999 293.418 22.9816 297 27.3999 297Z"
            stroke="#330E00"
            strokeWidth="8"
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <g id="Group">
            <path
              id="Vector"
              d="M18.2 218.6H16.4999V221.5H15.7V214.7H18.2C20.2 214.7 20.9999 215.5 20.9999 216.7C20.9999 217.8 20.2 218.6 18.2 218.6ZM18.2 218C19.6 218 20.2 217.5 20.2 216.6C20.2 215.7 19.6 215.2 18.2 215.2H16.4999V218H18.2Z"
              fill="#330E00"
            />
            <path
              id="Vector_2"
              d="M27.5001 219.9H23.7001L23.0001 221.5H22.1001L25.2001 214.8H26.2001L29.3001 221.5H28.4001L27.5001 219.9ZM25.6001 215.7L23.9001 219.4H27.2001L25.6001 215.7Z"
              fill="#330E00"
            />
            <path
              id="Vector_3"
              d="M36.9999 214.7V221.5H36.2L31.4999 215.8V221.5H30.7V214.7H31.4999L36.2 220.4V214.7H36.9999Z"
              fill="#330E00"
            />
            <path
              id="Vector_4"
              d="M38.5 214.7H44V215.3H41.7V221.5H40.9V215.3H38.5V214.7Z"
              fill="#330E00"
            />
            <path
              id="Vector_5"
              d="M49.3001 221.6C46.9001 221.6 45.1001 220.2 45.1001 218.1C45.1001 216.1 46.9001 214.6 49.3001 214.6C51.7001 214.6 53.5001 216 53.5001 218.1C53.5001 220.2 51.7001 221.6 49.3001 221.6ZM49.3001 221C51.2001 221 52.6001 219.9 52.6001 218.1C52.6001 216.3 51.2001 215.2 49.3001 215.2C47.4001 215.2 46.0001 216.3 46.0001 218.1C46.0001 219.9 47.5001 221 49.3001 221Z"
              fill="#330E00"
            />
            <path
              id="Vector_6"
              d="M61.6 214.7V221.5H60.8L56.1 215.8V221.5H55.3V214.7H56.1L60.8 220.4V214.7H61.6Z"
              fill="#330E00"
            />
            <path
              id="Vector_7"
              d="M68.1 215.3H64.4999V217.8H67.7V218.4H64.4999V221H68.1V221.6H63.7V214.8H68.1V215.3Z"
              fill="#330E00"
            />
          </g>
          <g id="Group_2">
            <path
              id="Vector_8"
              d="M70.3 214.6H71.9V214.8H71.3V216.8H70.9V214.8H70.3V214.6Z"
              fill="#330E00"
            />
            <path
              id="Vector_9"
              d="M72.3001 214.6H72.6001L73.4001 216.4L74.2001 214.6H74.5001V216.8H74.2001V215.1L73.4001 216.8H73.2001L72.4001 215.1V216.8H72.1001V214.6H72.3001Z"
              fill="#330E00"
            />
          </g>
        </g>
        <g id="recall-chek" className={styles.recallChek}>
          <path
            id="XMLID 54_2"
            d="M82 312H22C12.1 312 4 303.9 4 294V22C4 12.1 12.1 4 22 4H82C91.9 4 100 12.1 100 22V294C100 304 92 312 82 312Z"
            fill="white"
          />
          <path
            id="XMLID 1_2"
            d="M82 312H22C12.1 312 4 303.9 4 294V22C4 12.1 12.1 4 22 4H82C91.9 4 100 12.1 100 22V294C100 304 92 312 82 312Z"
            stroke="#330E00"
            strokeWidth="8"
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            id="XMLID 4_2"
            d="M100 202H4V22C4 12.1 12.1 4 22 4H82C91.9 4 100 12.1 100 22V202Z"
            stroke="#330E00"
            strokeWidth="8"
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            id="XMLID 59_2"
            d="M100 70H4V22C4 12.1 12.1 4 22 4H82C91.9 4 100 12.1 100 22V70Z"
            fill="#B53B4D"
          />
          <path
            id="XMLID 5_2"
            d="M100 70H4V22C4 12.1 12.1 4 22 4H82C91.9 4 100 12.1 100 22V70Z"
            stroke="#330E00"
            strokeWidth="8"
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path id="XMLID 58_2" d="M100 70H4V136H100V70Z" fill="#FF0000" />
          <path
            id="XMLID 7_2"
            d="M100 70H4V136H100V70Z"
            fill="#AFAFAF"
            stroke="#330E00"
            strokeWidth="8"
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path id="XMLID 56_2" d="M100 136H4V202H100V136Z" fill="#8AB53B" />
          <path
            id="XMLID 8_2"
            d="M100 136H4V202H100V136Z"
            stroke="#330E00"
            strokeWidth="8"
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            id="XMLID 6_2"
            d="M27.3999 297C31.8182 297 35.3999 293.418 35.3999 289C35.3999 284.582 31.8182 281 27.3999 281C22.9816 281 19.3999 284.582 19.3999 289C19.3999 293.418 22.9816 297 27.3999 297Z"
            stroke="#330E00"
            strokeWidth="8"
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <g id="Group_3">
            <path
              id="Vector_10"
              d="M18.2 218.6H16.4999V221.5H15.7V214.7H18.2C20.2 214.7 20.9999 215.5 20.9999 216.7C20.9999 217.8 20.2 218.6 18.2 218.6ZM18.2 218C19.6 218 20.2 217.5 20.2 216.6C20.2 215.7 19.6 215.2 18.2 215.2H16.4999V218H18.2Z"
              fill="#330E00"
            />
            <path
              id="Vector_11"
              d="M27.5001 219.9H23.7001L23.0001 221.5H22.1001L25.2001 214.8H26.2001L29.3001 221.5H28.4001L27.5001 219.9ZM25.6001 215.7L23.9001 219.4H27.2001L25.6001 215.7Z"
              fill="#330E00"
            />
            <path
              id="Vector_12"
              d="M36.9999 214.7V221.5H36.2L31.4999 215.8V221.5H30.7V214.7H31.4999L36.2 220.4V214.7H36.9999Z"
              fill="#330E00"
            />
            <path
              id="Vector_13"
              d="M38.5 214.7H44V215.3H41.7V221.5H40.9V215.3H38.5V214.7Z"
              fill="#330E00"
            />
            <path
              id="Vector_14"
              d="M49.3001 221.6C46.9001 221.6 45.1001 220.2 45.1001 218.1C45.1001 216.1 46.9001 214.6 49.3001 214.6C51.7001 214.6 53.5001 216 53.5001 218.1C53.5001 220.2 51.7001 221.6 49.3001 221.6ZM49.3001 221C51.2001 221 52.6001 219.9 52.6001 218.1C52.6001 216.3 51.2001 215.2 49.3001 215.2C47.4001 215.2 46.0001 216.3 46.0001 218.1C46.0001 219.9 47.5001 221 49.3001 221Z"
              fill="#330E00"
            />
            <path
              id="Vector_15"
              d="M61.6 214.7V221.5H60.8L56.1 215.8V221.5H55.3V214.7H56.1L60.8 220.4V214.7H61.6Z"
              fill="#330E00"
            />
            <path
              id="Vector_16"
              d="M68.1 215.3H64.4999V217.8H67.7V218.4H64.4999V221H68.1V221.6H63.7V214.8H68.1V215.3Z"
              fill="#330E00"
            />
          </g>
          <g id="Group_4">
            <path
              id="Vector_17"
              d="M70.3 214.6H71.9V214.8H71.3V216.8H70.9V214.8H70.3V214.6Z"
              fill="#330E00"
            />
            <path
              id="Vector_18"
              d="M72.3001 214.6H72.6001L73.4001 216.4L74.2001 214.6H74.5001V216.8H74.2001V215.1L73.4001 216.8H73.2001L72.4001 215.1V216.8H72.1001V214.6H72.3001Z"
              fill="#330E00"
            />
          </g>
        </g>
        <g id="massage-fluke" className={styles.massageFluke}>
          <path
            id="XMLID 108"
            opacity="0.3"
            d="M90 316H30C20.1 316 12 307.9 12 298V26C12 16.1 20.1 8 30 8H90C99.9 8 108 16.1 108 26V298C108 308 100 316 90 316Z"
            fill="#2D2D2D"
            stroke="#2D2D2D"
            strokeWidth="8"
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <g id="XMLID 9">
            <path
              id="XMLID 54_3"
              d="M82 312H22C12.1 312 4 303.9 4 294V22C4 12.1 12.1 4 22 4H82C91.9 4 100 12.1 100 22V294C100 304 92 312 82 312Z"
              fill="white"
            />
            <path
              id="XMLID 1_3"
              d="M82 312H22C12.1 312 4 303.9 4 294V22C4 12.1 12.1 4 22 4H82C91.9 4 100 12.1 100 22V294C100 304 92 312 82 312Z"
              stroke="#330E00"
              strokeWidth="8"
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              id="XMLID 4_3"
              d="M100 202H4V22C4 12.1 12.1 4 22 4H82C91.9 4 100 12.1 100 22V202Z"
              stroke="#330E00"
              strokeWidth="8"
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              id="XMLID 59_3"
              d="M100 70H4V22C4 12.1 12.1 4 22 4H82C91.9 4 100 12.1 100 22V70Z"
              fill="#2C786C"
            />
            <path
              id="XMLID 5_3"
              d="M100 70H4V22C4 12.1 12.1 4 22 4H82C91.9 4 100 12.1 100 22V70Z"
              stroke="#330E00"
              strokeWidth="8"
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path id="XMLID 58_3" d="M100 70H4V136H100V70Z" fill="#FF0000" />
            <path
              id="XMLID 7_3"
              d="M100 70H4V136H100V70Z"
              fill="#F75F00"
              stroke="#330E00"
              strokeWidth="8"
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path id="XMLID 56_3" d="M100 136H4V202H100V136Z" fill="white" />
            <path
              id="XMLID 8_3"
              d="M100 136H4V202H100V136Z"
              stroke="#330E00"
              strokeWidth="8"
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              id="XMLID 6_3"
              d="M27.3999 297C31.8182 297 35.3999 293.418 35.3999 289C35.3999 284.582 31.8182 281 27.3999 281C22.9816 281 19.3999 284.582 19.3999 289C19.3999 293.418 22.9816 297 27.3999 297Z"
              stroke="#330E00"
              strokeWidth="8"
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <g id="Group_5">
              <path
                id="Vector_19"
                d="M18.2 218.6H16.4999V221.5H15.7V214.7H18.2C20.2 214.7 20.9999 215.5 20.9999 216.7C20.9999 217.8 20.2 218.6 18.2 218.6ZM18.2 218C19.6 218 20.2 217.5 20.2 216.6C20.2 215.7 19.6 215.2 18.2 215.2H16.4999V218H18.2Z"
                fill="#330E00"
              />
              <path
                id="Vector_20"
                d="M27.5001 219.9H23.7001L23.0001 221.5H22.1001L25.2001 214.8H26.2001L29.3001 221.5H28.4001L27.5001 219.9ZM25.6001 215.7L23.9001 219.4H27.2001L25.6001 215.7Z"
                fill="#330E00"
              />
              <path
                id="Vector_21"
                d="M36.9999 214.7V221.5H36.2L31.4999 215.8V221.5H30.7V214.7H31.4999L36.2 220.4V214.7H36.9999Z"
                fill="#330E00"
              />
              <path
                id="Vector_22"
                d="M38.5 214.7H44V215.3H41.7V221.5H40.9V215.3H38.5V214.7Z"
                fill="#330E00"
              />
              <path
                id="Vector_23"
                d="M49.3001 221.6C46.9001 221.6 45.1001 220.2 45.1001 218.1C45.1001 216.1 46.9001 214.6 49.3001 214.6C51.7001 214.6 53.5001 216 53.5001 218.1C53.5001 220.2 51.7001 221.6 49.3001 221.6ZM49.3001 221C51.2001 221 52.6001 219.9 52.6001 218.1C52.6001 216.3 51.2001 215.2 49.3001 215.2C47.4001 215.2 46.0001 216.3 46.0001 218.1C46.0001 219.9 47.5001 221 49.3001 221Z"
                fill="#330E00"
              />
              <path
                id="Vector_24"
                d="M61.6 214.7V221.5H60.8L56.1 215.8V221.5H55.3V214.7H56.1L60.8 220.4V214.7H61.6Z"
                fill="#330E00"
              />
              <path
                id="Vector_25"
                d="M68.1 215.3H64.4999V217.8H67.7V218.4H64.4999V221H68.1V221.6H63.7V214.8H68.1V215.3Z"
                fill="#330E00"
              />
            </g>
            <g id="Group_6">
              <path
                id="Vector_26"
                d="M70.3 214.6H71.9V214.8H71.3V216.8H70.9V214.8H70.3V214.6Z"
                fill="#330E00"
              />
              <path
                id="Vector_27"
                d="M72.3001 214.6H72.6001L73.4001 216.4L74.2001 214.6H74.5001V216.8H74.2001V215.1L73.4001 216.8H73.2001L72.4001 215.1V216.8H72.1001V214.6H72.3001Z"
                fill="#330E00"
              />
            </g>
          </g>
        </g>
        <g id="dgifolios" className={styles.dgifolios}>
          <path
            id="XMLID 54_4"
            d="M82 312H22C12.1 312 4 303.9 4 294V22C4 12.1 12.1 4 22 4H82C91.9 4 100 12.1 100 22V294C100 304 92 312 82 312Z"
            fill="white"
          />
          <path
            id="XMLID 1_4"
            d="M82 312H22C12.1 312 4 303.9 4 294V22C4 12.1 12.1 4 22 4H82C91.9 4 100 12.1 100 22V294C100 304 92 312 82 312Z"
            stroke="#330E00"
            strokeWidth="8"
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            id="XMLID 4_4"
            d="M100 202H4V22C4 12.1 12.1 4 22 4H82C91.9 4 100 12.1 100 22V202Z"
            stroke="#330E00"
            strokeWidth="8"
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            id="XMLID 59_4"
            d="M100 70H4V22C4 12.1 12.1 4 22 4H82C91.9 4 100 12.1 100 22V70Z"
            fill="#E0E0E0"
          />
          <path
            id="XMLID 5_4"
            d="M100 70H4V22C4 12.1 12.1 4 22 4H82C91.9 4 100 12.1 100 22V70Z"
            stroke="#330E00"
            strokeWidth="8"
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path id="XMLID 58_4" d="M100 70H4V136H100V70Z" fill="#FF0000" />
          <path
            id="XMLID 7_4"
            d="M100 70H4V136H100V70Z"
            fill="#61CDBB"
            stroke="#330E00"
            strokeWidth="8"
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path id="XMLID 56_4" d="M100 136H4V202H100V136Z" fill="#100303" />
          <path
            id="XMLID 8_4"
            d="M100 136H4V202H100V136Z"
            stroke="#330E00"
            strokeWidth="8"
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            id="XMLID 6_4"
            d="M27.3999 297C31.8182 297 35.3999 293.418 35.3999 289C35.3999 284.582 31.8182 281 27.3999 281C22.9816 281 19.3999 284.582 19.3999 289C19.3999 293.418 22.9816 297 27.3999 297Z"
            stroke="#330E00"
            strokeWidth="8"
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <g id="Group_7">
            <path
              id="Vector_28"
              d="M18.2 218.6H16.4999V221.5H15.7V214.7H18.2C20.2 214.7 20.9999 215.5 20.9999 216.7C20.9999 217.8 20.2 218.6 18.2 218.6ZM18.2 218C19.6 218 20.2 217.5 20.2 216.6C20.2 215.7 19.6 215.2 18.2 215.2H16.4999V218H18.2Z"
              fill="#330E00"
            />
            <path
              id="Vector_29"
              d="M27.5001 219.9H23.7001L23.0001 221.5H22.1001L25.2001 214.8H26.2001L29.3001 221.5H28.4001L27.5001 219.9ZM25.6001 215.7L23.9001 219.4H27.2001L25.6001 215.7Z"
              fill="#330E00"
            />
            <path
              id="Vector_30"
              d="M36.9999 214.7V221.5H36.2L31.4999 215.8V221.5H30.7V214.7H31.4999L36.2 220.4V214.7H36.9999Z"
              fill="#330E00"
            />
            <path
              id="Vector_31"
              d="M38.5 214.7H44V215.3H41.7V221.5H40.9V215.3H38.5V214.7Z"
              fill="#330E00"
            />
            <path
              id="Vector_32"
              d="M49.3001 221.6C46.9001 221.6 45.1001 220.2 45.1001 218.1C45.1001 216.1 46.9001 214.6 49.3001 214.6C51.7001 214.6 53.5001 216 53.5001 218.1C53.5001 220.2 51.7001 221.6 49.3001 221.6ZM49.3001 221C51.2001 221 52.6001 219.9 52.6001 218.1C52.6001 216.3 51.2001 215.2 49.3001 215.2C47.4001 215.2 46.0001 216.3 46.0001 218.1C46.0001 219.9 47.5001 221 49.3001 221Z"
              fill="#330E00"
            />
            <path
              id="Vector_33"
              d="M61.6 214.7V221.5H60.8L56.1 215.8V221.5H55.3V214.7H56.1L60.8 220.4V214.7H61.6Z"
              fill="#330E00"
            />
            <path
              id="Vector_34"
              d="M68.1 215.3H64.4999V217.8H67.7V218.4H64.4999V221H68.1V221.6H63.7V214.8H68.1V215.3Z"
              fill="#330E00"
            />
          </g>
          <g id="Group_8">
            <path
              id="Vector_35"
              d="M70.3 214.6H71.9V214.8H71.3V216.8H70.9V214.8H70.3V214.6Z"
              fill="#330E00"
            />
            <path
              id="Vector_36"
              d="M72.3001 214.6H72.6001L73.4001 216.4L74.2001 214.6H74.5001V216.8H74.2001V215.1L73.4001 216.8H73.2001L72.4001 215.1V216.8H72.1001V214.6H72.3001Z"
              fill="#330E00"
            />
          </g>
        </g>
      </g>
    </svg>
  );
}

export default Cards;
