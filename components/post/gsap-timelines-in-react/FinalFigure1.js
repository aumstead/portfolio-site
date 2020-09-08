import styles from "./FinalFigure1.module.scss";
import { useEffect, useRef } from "react";

function FinalFigure1({ onMobile }) {
  const tl = useRef(null);

  useEffect(() => {
    tl.current = gsap.timeline();

    tl.current.to("#gear-group-figure1", 8, {
      rotate: 360 * 4,
      transformOrigin: "50% 50%",
      ease: "power3.out",
    });

    tl.current.pause();
  }, []);

  // function is used for both onMouseEnter and onClick events (desktop vs mobile)
  function handleMouseEnter() {
    tl.current.restart();
  }
  return (
    <svg
      className={styles.svg}
      onMouseEnter={onMobile ? null : handleMouseEnter}
      onClick={onMobile ? handleMouseEnter : null}
      xmlns="http://www.w3.org/2000/svg"
      width="587"
      height="305"
      fill="none"
      viewBox="0 0 587 305"
    >
      <path
        fill="#F09F54"
        d="M584.1 221.7c0-37.2-28.2-67.8-64.7-71.3V142h-21.9v160.7h21.9V293c36.4-3.5 64.7-34.1 64.7-71.3zm-64.8 48.2v-96.3c23.4 3.4 41.8 23.7 41.8 48.2 0 24.4-18.4 44.7-41.8 48.1z"
      ></path>
      <path
        fill="#F09F54"
        d="M519.3 150.4V142h-21.9v160.7h21.9V293c36.5-3.5 64.7-34 64.7-71.3.1-37.2-28.2-67.8-64.7-71.3zm0 135.2v8.3h-20.5V149.3h20.5v8.5c32.1 3.1 58 30.5 58 63.9.1 33.4-25.8 60.8-58 63.9z"
        opacity="0.29"
      ></path>
      <path
        stroke="#444E59"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit="10"
        strokeWidth="4"
        d="M584.1 221.7c0-37.2-28.2-67.8-64.7-71.3V142h-21.9v160.7h21.9V293c36.4-3.5 64.7-34.1 64.7-71.3zm-64.8 48.2v-96.3c23.4 3.4 41.8 23.7 41.8 48.2 0 24.4-18.4 44.7-41.8 48.1z"
      ></path>
      <path
        stroke="#444E59"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit="10"
        strokeWidth="3"
        d="M506.2 286.6h-8.8M506.2 270.6h-8.8M506.2 254.5h-8.8M506.2 238.4h-8.8M506.2 222.4h-8.8M506.2 206.3h-8.8M506.2 190.2h-8.8M506.2 174.1h-8.8M506.2 158.1h-8.8"
      ></path>
      <path fill="#F09F54" d="M482 60.7h-33.1v241.6H482V60.7z"></path>
      <path fill="#F09F54" d="M482 60.7h-33.1v241.6H482V60.7z"></path>
      <path
        fill="#F09F54"
        d="M482 60.7h-14.4v241.6H482V60.7z"
        opacity="0.29"
      ></path>
      <path
        stroke="#444E59"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit="10"
        strokeWidth="4"
        d="M482 60.7h-33.1v241.6H482V60.7z"
      ></path>
      <path
        stroke="#444E59"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit="10"
        strokeWidth="3"
        d="M460.4 277.9h-11.5M456 289.4h-7.1M460.4 254.9h-11.5M456 266.4h-7.1M460.4 231.9h-11.5M456 243.4h-7.1M460.4 208.8h-11.5M456 220.3h-7.1M460.4 185.8h-11.5M456 197.3h-7.1M460.4 162.8h-11.5M456 174.3h-7.1M460.4 139.8h-11.5M456 151.3h-7.1M460.4 116.8h-11.5M456 128.3h-7.1M460.4 93.8h-11.5M456 105.3h-7.1M460.4 70.8h-11.5M456 82.3h-7.1"
      ></path>
      <path fill="#848484" d="M400.6 119.1h-12.9v34.1h12.9v-34.1z"></path>
      <path
        fill="#848484"
        d="M392.5 119.1h-4.8v34.1h4.8v-34.1z"
        opacity="0.25"
      ></path>
      <path
        stroke="#444E59"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit="10"
        strokeWidth="4"
        d="M400.6 119.1h-12.9v34.1h12.9v-34.1z"
      ></path>
      <path fill="#fff" d="M397.1 153.3h-5.9v16.5h5.9v-16.5z"></path>
      <path
        stroke="#444E59"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit="10"
        strokeWidth="4"
        d="M397.1 153.3h-5.9v16.5h5.9v-16.5z"
      ></path>
      <path fill="#fff" d="M384.2 184.5l-30 117.7 45.6-116.1-15.6-1.6z"></path>
      <path
        stroke="#444E59"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit="10"
        strokeWidth="4"
        d="M384.2 184.5l-30 117.7 45.6-116.1-15.6-1.6z"
      ></path>
      <path fill="#fff" d="M404.2 184.5l30 117.7-45.5-116.1 15.5-1.6z"></path>
      <path
        stroke="#444E59"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit="10"
        strokeWidth="4"
        d="M404.2 184.5l30 117.7-45.5-116.1 15.5-1.6z"
      ></path>
      <path
        fill="#71A850"
        d="M394.2 207.6c11.046 0 20-8.954 20-20s-8.954-20-20-20-20 8.954-20 20 8.954 20 20 20z"
      ></path>
      <path
        fill="#71A850"
        d="M379.8 187.6c0-10.1 7.5-18.4 17.2-19.8-.9-.1-1.8-.2-2.8-.2-11 0-20 9-20 20s9 20 20 20c.9 0 1.9-.1 2.8-.2-9.7-1.4-17.2-9.7-17.2-19.8z"
        opacity="0.4"
      ></path>
      <path
        stroke="#444E59"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit="10"
        strokeWidth="4"
        d="M394.2 207.6c11.046 0 20-8.954 20-20s-8.954-20-20-20-20 8.954-20 20 8.954 20 20 20z"
      ></path>
      <path
        fill="#444E59"
        d="M394.2 194.4a6.8 6.8 0 100-13.6 6.8 6.8 0 000 13.6z"
      ></path>
      <path
        stroke="#444E59"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit="10"
        strokeWidth="4"
        d="M394.2 194.4a6.8 6.8 0 100-13.6 6.8 6.8 0 000 13.6z"
      ></path>
      <path
        fill="#848484"
        d="M322 302H190c-7.7 0-14-6.3-14-14V16c0-7.7 6.3-14 14-14h132c7.7 0 14 6.3 14 14v272c0 7.7-6.3 14-14 14z"
      ></path>
      <path
        fill="#848484"
        d="M322 2h-8.4c7.7 0 14 6.3 14 14v272c0 7.7-6.3 14-14 14h8.5c7.7 0 14-6.3 14-14V16C336 8.2 329.7 2 322 2z"
        opacity="0.28"
      ></path>
      <path
        fill="#848484"
        d="M184.3 288V16c0-7.7 6.3-14 14-14H190c-7.7 0-14 6.3-14 14v272c0 7.7 6.3 14 14 14h8.3c-7.7 0-14-6.3-14-14z"
        opacity="0.48"
      ></path>
      <path
        stroke="#444E59"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit="10"
        strokeWidth="4"
        d="M322 302H190c-7.7 0-14-6.3-14-14V16c0-7.7 6.3-14 14-14h132c7.7 0 14 6.3 14 14v272c0 7.7-6.3 14-14 14z"
      ></path>
      <path fill="#E9FBFF" d="M336.019 263.488v-224h-160v224h160z"></path>
      <path
        fill="#C9C9C9"
        d="M335.2 111.7h-12.5c-6.8 0-12.3-5.5-12.3-12.3V68.9c0-6.8 5.5-12.3 12.3-12.3h12.5v55.1zM185.2 235.3H176V138h9.2c6.9 0 12.5 5.6 12.5 12.5v72.3c-.1 6.9-5.6 12.5-12.5 12.5z"
      ></path>
      <path
        stroke="#444E59"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit="10"
        strokeWidth="4"
        d="M336.019 263.488v-224h-160v224h160z"
      ></path>
      <path
        stroke="#444E59"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit="10"
        strokeWidth="5"
        d="M278 22h7M227 22h40"
      ></path>
      <path
        fill="#848484"
        d="M256 291.4c6.075 0 11-4.925 11-11s-4.925-11-11-11-11 4.925-11 11 4.925 11 11 11z"
        opacity="0.29"
      ></path>
      <path
        fill="#444E59"
        d="M256 288.8a8.4 8.4 0 100-16.8 8.4 8.4 0 000 16.8z"
      ></path>
      <g opacity="0.3">
        <g opacity="0.3">
          <path
            stroke="#444E59"
            strokeDasharray="4.08 4.08"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M219.5 236.7h-16c-4.4 0-8-3.6-8-8v-16c0-4.4 3.6-8 8-8h16c4.4 0 8 3.6 8 8v16c0 4.4-3.6 8-8 8zM308 236.7h-16c-4.4 0-8-3.6-8-8v-16c0-4.4 3.6-8 8-8h16c4.4 0 8 3.6 8 8v16c0 4.4-3.6 8-8 8zM264 236.7h-16c-4.4 0-8-3.6-8-8v-16c0-4.4 3.6-8 8-8h16c4.4 0 8 3.6 8 8v16c0 4.4-3.6 8-8 8z"
            opacity="0.3"
          ></path>
        </g>
        <g opacity="0.3">
          <path
            stroke="#444E59"
            strokeDasharray="4.08 4.08"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M219.5 188.7h-16c-4.4 0-8-3.6-8-8v-16c0-4.4 3.6-8 8-8h16c4.4 0 8 3.6 8 8v16c0 4.4-3.6 8-8 8zM308 188.7h-16c-4.4 0-8-3.6-8-8v-16c0-4.4 3.6-8 8-8h16c4.4 0 8 3.6 8 8v16c0 4.4-3.6 8-8 8zM264 188.7h-16c-4.4 0-8-3.6-8-8v-16c0-4.4 3.6-8 8-8h16c4.4 0 8 3.6 8 8v16c0 4.4-3.6 8-8 8z"
            opacity="0.3"
          ></path>
        </g>
        <g opacity="0.3">
          <path
            stroke="#444E59"
            strokeDasharray="4.08 4.08"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M219.5 140.7h-16c-4.4 0-8-3.6-8-8v-16c0-4.4 3.6-8 8-8h16c4.4 0 8 3.6 8 8v16c0 4.4-3.6 8-8 8zM308 140.7h-16c-4.4 0-8-3.6-8-8v-16c0-4.4 3.6-8 8-8h16c4.4 0 8 3.6 8 8v16c0 4.4-3.6 8-8 8zM264 140.7h-16c-4.4 0-8-3.6-8-8v-16c0-4.4 3.6-8 8-8h16c4.4 0 8 3.6 8 8v16c0 4.4-3.6 8-8 8z"
            opacity="0.3"
          ></path>
        </g>
        <g opacity="0.3">
          <path
            stroke="#444E59"
            strokeDasharray="4.08 4.08"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M219.5 92.7h-16c-4.4 0-8-3.6-8-8v-16c0-4.4 3.6-8 8-8h16c4.4 0 8 3.6 8 8v16c0 4.4-3.6 8-8 8zM308 92.7h-16c-4.4 0-8-3.6-8-8v-16c0-4.4 3.6-8 8-8h16c4.4 0 8 3.6 8 8v16c0 4.4-3.6 8-8 8zM264 92.7h-16c-4.4 0-8-3.6-8-8v-16c0-4.4 3.6-8 8-8h16c4.4 0 8 3.6 8 8v16c0 4.4-3.6 8-8 8z"
            opacity="0.3"
          ></path>
        </g>
      </g>
      <path
        fill="#2FA9ED"
        d="M308 188.7h-16c-4.4 0-8-3.6-8-8v-16c0-4.4 3.6-8 8-8h16c4.4 0 8 3.6 8 8v16c0 4.4-3.6 8-8 8z"
      ></path>
      <path
        stroke="#444E59"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit="10"
        strokeWidth="4"
        d="M308 188.7h-16c-4.4 0-8-3.6-8-8v-16c0-4.4 3.6-8 8-8h16c4.4 0 8 3.6 8 8v16c0 4.4-3.6 8-8 8z"
      ></path>
      <path
        fill="#fff"
        d="M297.4 165.7l9.2 5.3c1.3.8 1.3 2.7 0 3.4l-9.2 5.3c-1.3.8-3-.2-3-1.7v-10.6c0-1.5 1.7-2.5 3-1.7z"
      ></path>
      <path
        fill="#E7534E"
        d="M264 140.7h-16c-4.4 0-8-3.6-8-8v-16c0-4.4 3.6-8 8-8h16c4.4 0 8 3.6 8 8v16c0 4.4-3.6 8-8 8z"
      ></path>
      <path
        stroke="#444E59"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit="10"
        strokeWidth="4"
        d="M264 140.7h-16c-4.4 0-8-3.6-8-8v-16c0-4.4 3.6-8 8-8h16c4.4 0 8 3.6 8 8v16c0 4.4-3.6 8-8 8z"
      ></path>
      <path
        stroke="#fff"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit="10"
        strokeWidth="4"
        d="M256 132.2a7.5 7.5 0 100-15 7.5 7.5 0 000 15z"
      ></path>
      <path
        fill="#F09F54"
        d="M264 236.7h-16c-4.4 0-8-3.6-8-8v-16c0-4.4 3.6-8 8-8h16c4.4 0 8 3.6 8 8v16c0 4.4-3.6 8-8 8z"
      ></path>
      <path
        fill="#fff"
        d="M260.2 214.5h-8.4c-1.8 0-3.2 1.5-3.2 3.2v6.2c0 1.8 1.5 3.2 3.2 3.2h.3l-.7 2.8c-.1.2.2.4.4.2l4.3-3h4.3c1.8 0 3.2-1.5 3.2-3.2v-6.2a3.4 3.4 0 00-3.4-3.2z"
      ></path>
      <path
        stroke="#444E59"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit="10"
        strokeWidth="4"
        d="M264 236.7h-16c-4.4 0-8-3.6-8-8v-16c0-4.4 3.6-8 8-8h16c4.4 0 8 3.6 8 8v16c0 4.4-3.6 8-8 8z"
      ></path>
      <path
        fill="#71A850"
        d="M219.5 236.7h-16c-4.4 0-8-3.6-8-8v-16c0-4.4 3.6-8 8-8h16c4.4 0 8 3.6 8 8v16c0 4.4-3.6 8-8 8z"
      ></path>
      <path
        stroke="#fff"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit="10"
        strokeWidth="4"
        d="M205.3 220.7l3.7 3.7c.5.5 1.3.5 1.8 0l8.3-8.3"
      ></path>
      <path
        stroke="#444E59"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit="10"
        strokeWidth="4"
        d="M219.5 236.7h-16c-4.4 0-8-3.6-8-8v-16c0-4.4 3.6-8 8-8h16c4.4 0 8 3.6 8 8v16c0 4.4-3.6 8-8 8z"
      ></path>
      <g id="gear-group-figure1">
        <path
          fill="#fff"
          d="M195.6 85.7l-.2-15-10 .1c-.6-1.9-1.3-3.6-2.3-5.3l7-7.2-10.7-10.5-7 7.2c-1.7-.9-3.5-1.6-5.4-2.1l-.1-10-15 .2.1 10c-1.9.6-3.6 1.3-5.3 2.3l-7.2-7L129 59.1l7.2 7c-.9 1.7-1.6 3.5-2.1 5.4l-10 .1.2 15 10-.1c.6 1.9 1.3 3.6 2.3 5.3l-7 7.2 10.7 10.5 7-7.2c1.7.9 3.5 1.6 5.4 2.1l.1 10 15-.2-.1-10c1.9-.6 3.6-1.3 5.3-2.3l7.2 7 10.5-10.7-7.2-7c.9-1.7 1.6-3.5 2.1-5.4l10-.1zm-35.5 4.6c-6.5.1-11.7-5.1-11.8-11.6-.1-6.5 5.1-11.7 11.6-11.8 6.5-.1 11.7 5.1 11.8 11.6 0 6.5-5.2 11.7-11.6 11.8z"
        ></path>
        <path
          fill="#F09F54"
          d="M195.6 85.7l-.2-15-10 .1c-.6-1.9-1.3-3.6-2.3-5.3l7-7.2-10.7-10.5-7 7.2c-1.7-.9-3.5-1.6-5.4-2.1l-.1-10-15 .2.1 10c-1.9.6-3.6 1.3-5.3 2.3l-7.2-7L129 59.1l7.2 7c-.9 1.7-1.6 3.5-2.1 5.4l-10 .1.2 15 10-.1c.6 1.9 1.3 3.6 2.3 5.3l-7 7.2 10.7 10.5 7-7.2c1.7.9 3.5 1.6 5.4 2.1l.1 10 15-.2-.1-10c1.9-.6 3.6-1.3 5.3-2.3l7.2 7 10.5-10.7-7.2-7c.9-1.7 1.6-3.5 2.1-5.4l10-.1zm-35.5 4.6c-6.5.1-11.7-5.1-11.8-11.6-.1-6.5 5.1-11.7 11.6-11.8 6.5-.1 11.7 5.1 11.8 11.6 0 6.5-5.2 11.7-11.6 11.8z"
        ></path>
        <path
          fill="#F09F54"
          d="M195.6 85.7l-.2-15-10 .1c-.6-1.9-1.3-3.6-2.3-5.3l7-7.2-10.7-10.5-7 7.2c-1.7-.9-3.5-1.6-5.4-2.1l-.1-10-15 .2.1 10c-1.9.6-3.6 1.3-5.3 2.3l-7.2-7L129 59.1l7.2 7c-.9 1.7-1.6 3.5-2.1 5.4l-10 .1.2 15 10-.1c.6 1.9 1.3 3.6 2.3 5.3l-7 7.2 10.7 10.5 7-7.2c1.7.9 3.5 1.6 5.4 2.1l.1 10 15-.2-.1-10c1.9-.6 3.6-1.3 5.3-2.3l7.2 7 10.5-10.7-7.2-7c.9-1.7 1.6-3.5 2.1-5.4l10-.1zm-35.5 4.6c-6.5.1-11.7-5.1-11.8-11.6-.1-6.5 5.1-11.7 11.6-11.8 6.5-.1 11.7 5.1 11.8 11.6 0 6.5-5.2 11.7-11.6 11.8z"
        ></path>
        <path
          stroke="#444E59"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit="10"
          strokeWidth="4"
          d="M195.6 85.7l-.2-15-10 .1c-.6-1.9-1.3-3.6-2.3-5.3l7-7.2-10.7-10.5-7 7.2c-1.7-.9-3.5-1.6-5.4-2.1l-.1-10-15 .2.1 10c-1.9.6-3.6 1.3-5.3 2.3l-7.2-7L129 59.1l7.2 7c-.9 1.7-1.6 3.5-2.1 5.4l-10 .1.2 15 10-.1c.6 1.9 1.3 3.6 2.3 5.3l-7 7.2 10.7 10.5 7-7.2c1.7.9 3.5 1.6 5.4 2.1l.1 10 15-.2-.1-10c1.9-.6 3.6-1.3 5.3-2.3l7.2 7 10.5-10.7-7.2-7c.9-1.7 1.6-3.5 2.1-5.4l10-.1zm-35.5 4.6c-6.5.1-11.7-5.1-11.8-11.6-.1-6.5 5.1-11.7 11.6-11.8 6.5-.1 11.7 5.1 11.8 11.6 0 6.5-5.2 11.7-11.6 11.8z"
        ></path>
      </g>
      <g fill="#F09F54" opacity="0.29">
        <path
          d="M191.8 70.8s0 .1 0 0h3.7v-.1l-3.7.1zM178.8 55.1l3.9-4-3.2-3.2-5.2 5.3c1.6.5 3.1 1.1 4.5 1.9zM166.1 66.9c-1.1 0-2.1.2-3 .4 4.9 1.4 8.5 5.8 8.5 11.1.1 5.4-3.6 10-8.5 11.4 1 .3 2.2.5 3.3.4 6.5-.1 11.6-5.4 11.6-11.8s-5.4-11.5-11.9-11.5zM151.2 53.4l2 1.9c1.7-.9 3.4-1.7 5.3-2.3l-.1-10 8.6-.1v-.1l-15 .2.1 10c-.2.2-.6.3-.9.4zM159 104.3c-1.9-.5-3.7-1.2-5.4-2.1l-1.8 1.9.9.3.1 10 6.3-.1-.1-10zM130.6 71.5l10-.1c.5-1.9 1.2-3.7 2.1-5.4l-7.2-7 7.4-7.5-3.2-3.2L129.2 59l7.2 7c-.9 1.7-1.6 3.5-2.1 5.4l-10 .1.2 15 6.3-.1-.2-14.9zM179.3 101.9c-1.4.8-2.8 1.4-4.3 1.9l5.2 5.1 3.1-3.2-4-3.8zM136 98.8l7-7.2c-.9-1.7-1.7-3.4-2.3-5.3l-6.3.1c.6 1.8 1.3 3.6 2.2 5.2l-7 7.2 10.7 10.5 3.1-3.2-7.4-7.3z"
          opacity="0.29"
        ></path>
      </g>

      <path
        fill="#444E59"
        d="M133.1 302H9.4c-4.1 0-7.4-3.3-7.4-7.4V210c0-4.1 3.3-7.4 7.4-7.4h123.8c4.1 0 7.4 3.3 7.4 7.4v84.6c-.1 4.1-3.4 7.4-7.5 7.4z"
      ></path>
      <path
        fill="#BCBCBC"
        d="M140.5 218.7H2V210c0-4.1 3.3-7.4 7.4-7.4h123.8c4.1 0 7.4 3.3 7.4 7.4v8.7h-.1z"
      ></path>
      <path
        stroke="#444E59"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit="10"
        strokeWidth="4"
        d="M133.1 302H9.4c-4.1 0-7.4-3.3-7.4-7.4V210c0-4.1 3.3-7.4 7.4-7.4h123.8c4.1 0 7.4 3.3 7.4 7.4v84.6c-.1 4.1-3.4 7.4-7.5 7.4z"
      ></path>
      <path
        stroke="#444E59"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit="10"
        strokeWidth="4"
        d="M133.1 302H9.4c-4.1 0-7.4-3.3-7.4-7.4V210c0-4.1 3.3-7.4 7.4-7.4h123.8c4.1 0 7.4 3.3 7.4 7.4v84.6c-.1 4.1-3.4 7.4-7.5 7.4z"
      ></path>
      <path
        stroke="#444E59"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit="10"
        strokeWidth="4"
        d="M140.5 218.7H2V210c0-4.1 3.3-7.4 7.4-7.4h123.8c4.1 0 7.4 3.3 7.4 7.4v8.7h-.1z"
      ></path>
      <path
        stroke="#fff"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit="10"
        strokeWidth="4"
        d="M21.1 289.3h15.6M10.1 289.3h1.1M21.1 280.7h39.5M10.1 280.7h1.1"
      ></path>
      <path
        stroke="#64BDFF"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit="10"
        strokeWidth="4"
        d="M79.4 272h10.8"
      ></path>
      <path
        stroke="#fff"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit="10"
        strokeWidth="4"
        d="M50 272h20"
      ></path>
      <path
        stroke="#FF5F5F"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit="10"
        strokeWidth="4"
        d="M21.1 272h19.8"
      ></path>
      <path
        stroke="#fff"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit="10"
        strokeWidth="4"
        d="M10.1 272h1.1M54.4 263.4h48.2"
      ></path>
      <path
        stroke="#64BDFF"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit="10"
        strokeWidth="4"
        d="M21.1 263.4h25.2"
      ></path>
      <path
        stroke="#fff"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit="10"
        strokeWidth="4"
        d="M10.1 263.4h1.1"
      ></path>
      <path
        stroke="#FF5F5F"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit="10"
        strokeWidth="4"
        d="M54.4 254.8h18"
      ></path>
      <path
        stroke="#FFBE78"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit="10"
        strokeWidth="4"
        d="M21.1 254.8h25.2"
      ></path>
      <path
        stroke="#fff"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit="10"
        strokeWidth="4"
        d="M10.1 254.8h1.1"
      ></path>
      <path
        stroke="#64BDFF"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit="10"
        strokeWidth="4"
        d="M57.9 246.2h4.9"
      ></path>
      <path
        stroke="#FF5F5F"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit="10"
        strokeWidth="4"
        d="M38.9 246.2H50"
      ></path>
      <path
        stroke="#C383F2"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit="10"
        strokeWidth="4"
        d="M21.1 246.2h9.2"
      ></path>
      <path
        stroke="#fff"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit="10"
        strokeWidth="4"
        d="M10.1 246.2h1.1"
      ></path>
      <path
        stroke="#64BDFF"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit="10"
        strokeWidth="4"
        d="M93.9 237.5h8.7"
      ></path>
      <path
        stroke="#FF5F5F"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit="10"
        strokeWidth="4"
        d="M48.8 237.5h34.1"
      ></path>
      <path
        stroke="#FFBE78"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit="10"
        strokeWidth="4"
        d="M21.1 237.5h20.3"
      ></path>
      <path
        stroke="#fff"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit="10"
        strokeWidth="4"
        d="M10.1 237.5h1.1"
      ></path>
      <path
        stroke="#FFBE78"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit="10"
        strokeWidth="4"
        d="M72.4 228.9h17.8"
      ></path>
      <path
        stroke="#6DBF7B"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit="10"
        strokeWidth="4"
        d="M50 228.9h13.8"
      ></path>
      <path
        stroke="#FFBE78"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit="10"
        strokeWidth="4"
        d="M35 228.9h7.8"
      ></path>
      <path
        stroke="#6DBF7B"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit="10"
        strokeWidth="4"
        d="M21.1 228.9h6.4"
      ></path>
      <path
        stroke="#fff"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit="10"
        strokeWidth="4"
        d="M10.1 228.9h1.1"
      ></path>
      <path
        fill="#E7534E"
        d="M15.7 213.2a2.5 2.5 0 100-5 2.5 2.5 0 000 5z"
      ></path>
      <path
        fill="#444E59"
        d="M24.7 213.2a2.5 2.5 0 100-5 2.5 2.5 0 000 5zM33.8 213.2a2.5 2.5 0 100-5 2.5 2.5 0 000 5z"
      ></path>
      <path
        fill="#fff"
        d="M182.4 227.5H92.8c-4.4 0-8-3.6-8-8v-80.9c0-4.4 3.6-8 8-8h89.6c4.4 0 8 3.6 8 8v80.9c0 4.4-3.6 8-8 8z"
      ></path>
      <path
        fill="#fff"
        d="M182.4 227.5H92.8c-4.4 0-8-3.6-8-8v-80.9c0-4.4 3.6-8 8-8h89.6c4.4 0 8 3.6 8 8v80.9c0 4.4-3.6 8-8 8z"
      ></path>
      <path
        stroke="#444E59"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit="10"
        strokeWidth="4"
        d="M182.4 227.5H92.8c-4.4 0-8-3.6-8-8v-80.9c0-4.4 3.6-8 8-8h89.6c4.4 0 8 3.6 8 8v80.9c0 4.4-3.6 8-8 8z"
      ></path>
      <path fill="#9483C4" d="M180.7 138.8H93.9v57.7h86.8v-57.7z"></path>
      <path
        stroke="#444E59"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit="10"
        strokeWidth="4"
        d="M180.7 138.8H93.9v57.7h86.8v-57.7zM93.9 205.7h54.8M93.9 214.9h32.4"
      ></path>
      <path
        stroke="#444E59"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit="10"
        strokeWidth="4"
        d="M102.6 186.2l18.7-18.5 17.4 17.4M171.3 186.2l-22.6-29.5-18.1 20.2M171.1 214.8a4.9 4.9 0 100-9.8 4.9 4.9 0 000 9.8z"
      ></path>
      <path
        fill="#F09F54"
        d="M126.8 162.9a6.2 6.2 0 100-12.4 6.2 6.2 0 000 12.4z"
      ></path>
      <path
        stroke="#444E59"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit="10"
        strokeWidth="4"
        d="M126.8 162.9a6.2 6.2 0 100-12.4 6.2 6.2 0 000 12.4zM83.1 102.1h26.8M68.8 102.1h7.1M96.5 89.7h13.4M85.7 89.7h4M54.1 180.5H75M43 180.5h5.5M66.5 168.1H75M56.1 168.1h3.2M387.4 35.4h19.8M375.2 35.4h5.6M398.7 23h8.5M388.4 23h3.1"
      ></path>
      <path
        fill="#2FA9ED"
        d="M402.8 105.3h-78.2c-4.8 0-8.6-3.9-8.6-8.6V58.8c0-4.8 3.9-8.6 8.6-8.6h78.2c4.8 0 8.6 3.9 8.6 8.6v37.8c0 4.8-3.8 8.7-8.6 8.7z"
      ></path>
      <path
        stroke="#444E59"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit="10"
        strokeWidth="3"
        d="M402.8 105.3h-78.2c-4.8 0-8.6-3.9-8.6-8.6V58.8c0-4.8 3.9-8.6 8.6-8.6h78.2c4.8 0 8.6 3.9 8.6 8.6v37.8c0 4.8-3.8 8.7-8.6 8.7z"
      ></path>
      <path
        stroke="#fff"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit="10"
        strokeWidth="3"
        d="M363.7 65h33.8M363.7 75.9h22.4"
        opacity="0.56"
      ></path>
      <g opacity="0.56">
        <path
          fill="#fff"
          d="M380.7 92.2h-13.6c-1.8 0-3.3-1.5-3.3-3.3 0-1.8 1.5-3.3 3.3-3.3h13.6c1.8 0 3.3 1.5 3.3 3.3 0 1.8-1.4 3.3-3.3 3.3z"
          opacity="0.56"
        ></path>
        <path
          stroke="#fff"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit="10"
          strokeWidth="3"
          d="M380.7 92.2h-13.6c-1.8 0-3.3-1.5-3.3-3.3 0-1.8 1.5-3.3 3.3-3.3h13.6c1.8 0 3.3 1.5 3.3 3.3 0 1.8-1.4 3.3-3.3 3.3z"
          opacity="0.56"
        ></path>
      </g>
      <path
        stroke="#fff"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit="10"
        strokeWidth="3"
        d="M349.6 92.7h-17.9c-2.6 0-4.6-2.1-4.6-4.6V67.2c0-2.6 2.1-4.6 4.6-4.6h17.9c2.6 0 4.6 2.1 4.6 4.6v20.9c0 2.5-2 4.6-4.6 4.6z"
      ></path>
      <path
        stroke="#fff"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit="10"
        strokeWidth="3"
        d="M340.7 79a4.8 4.8 0 100-9.6 4.8 4.8 0 000 9.6zM331.6 92.2c0-5 4.1-9.1 9.1-9.1s9.1 4.1 9.1 9.1"
      ></path>
    </svg>
  );
}

export default FinalFigure1;
