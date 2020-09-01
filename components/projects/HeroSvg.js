import styles from "./HeroSvg.module.scss";
import { useEffect, useRef } from "react";

function HeroSvg({ onMobile }) {
  const tl = useRef(null);

  useEffect(() => {
    tl.current = gsap.timeline();

    const timeout = function() {
      setTimeout(() => {
        tl.current.restart();
      }, 2000)
    }

    tl.current
      .to("#gear-group", 8.5, {
        rotate: 360 * 4,
        transformOrigin: "50% 50%",
        ease: "power3.out",
      })
      .to("#blue-icon-group", 0.2, { y: 48 }, "<.5")
      .to("#yellow-icon-group", 0.2, { y: -48 }, "<")
      .to("#green-icon-group", 0.2, { y: -96 }, "<.2")
      .to("#red-icon-group", 0.2, { y: -48 }, "<")
      .to("#green-icon-group", 0.2, { x: 45 }, "<.2")
      .to("#blue-icon-group", 0.2, { x: -45 }, "<")
      .to("#red-icon-group", 0.2, { x: 45 }, "<.2")
      .to("#yellow-icon-group", 0.2, { x: 45 }, "<")
      .to("#blue-icon-group", 0.2, { y: 0 }, "<.2")
      .to("#green-icon-group", 0.2, { x: 0 }, "<")
      .to("#red-icon-group", 0.2, { y: 0 }, "<.2")
      .to("#yellow-icon-group", 0.2, { y: 0 }, "<.")
      .to("#blue-icon-group", 0.2, { x: 0 }, "<.2")
      .to("#green-icon-group", 0.2, { y: -144 }, "<.")
      .to("#red-icon-group", 0.2, { x: 0 }, "<.2")
      .to("#yellow-icon-group", 0.2, { x: 0 }, "<")
      .to("#green-icon-group", 0.2, { x: 45 }, "<.2")
      .to("#blue-icon-group", 0.2, { y: -48 }, "<")
      .to("#yellow-icon-group", 0.2, { y: -48 }, "<.2")
      .to("#red-icon-group", 0.2, { x: -45 }, "<")
      .to("#blue-icon-group", 0.2, { y: -96 }, "<.2")
      .to("#green-icon-group", 0.2, { y: -96 }, "<")
      .to("#red-icon-group", 0.2, { y: 48 }, "<.2")
      .to("#yellow-icon-group", 0.2, { x: 45 }, "<")
      .to("#green-icon-group", 0.4, { x: 0 }, "<.2")
      .to("#blue-icon-group", 0.4, { y: -48 }, "<")
      .to("#red-icon-group", 0.4, { x: 0 }, "<.4")
      .to("#yellow-icon-group", 0.4, { y: 0 }, "<")
      .to("#green-icon-group", 0.6, { y: -48 }, "<.4")
      .to("#blue-icon-group", 0.6, { x: -45 }, "<")
      .to("#red-icon-group", 0.8, { y: 96 }, "<.6")
      .to("#green-icon-group", 1, { y: 0 }, "<.8");
    
    if (onMobile) {
      tl.current.pause();
      timeout()
    } else {
      tl.current.pause();
    }

    return () => {
      clearTimeout(timeout)
    }
  }, []);

  function handleMouseEnter() {
    tl.current.restart();
  }
  return (
    <svg
      className={styles.heroSvg}
      onMouseEnter={onMobile ? null : handleMouseEnter}
      onClick={onMobile ? handleMouseEnter : null}
      xmlns="http://www.w3.org/2000/svg"
      width="587"
      height="305"
      fill="none"
      viewBox="0 0 587 305"
    >
      <g id="appdev">
        <g id="XMLID 45">
          <path
            id="XMLID 41"
            fill="#F09F54"
            d="M584.3 221.7c0-37.2-28.2-67.8-64.7-71.3V142h-21.9v160.7h21.9V293c36.4-3.5 64.7-34.1 64.7-71.3zm-64.8 48.2v-96.3c23.4 3.4 41.8 23.7 41.8 48.2 0 24.4-18.4 44.7-41.8 48.1z"
          ></path>
          <path
            id="XMLID 222"
            fill="#F09F54"
            d="M519.5 150.4V142h-21.9v160.7h21.9V293c36.5-3.5 64.7-34 64.7-71.3.1-37.2-28.2-67.8-64.7-71.3zm0 135.2v8.3H499V149.3h20.5v8.5c32.1 3.1 58 30.5 58 63.9.1 33.4-25.8 60.8-58 63.9z"
            opacity="0.29"
          ></path>
          <path
            id="XMLID 48"
            stroke="#444E59"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeMiterlimit="10"
            strokeWidth="4"
            d="M584.3 221.7c0-37.2-28.2-67.8-64.7-71.3V142h-21.9v160.7h21.9V293c36.4-3.5 64.7-34.1 64.7-71.3zm-64.8 48.2v-96.3c23.4 3.4 41.8 23.7 41.8 48.2 0 24.4-18.4 44.7-41.8 48.1z"
          ></path>
          <g id="XMLID 49">
            <g id="XMLID 67">
              <path
                id="XMLID 68"
                stroke="#444E59"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeMiterlimit="10"
                strokeWidth="3"
                d="M506.4 286.6h-8.8"
              ></path>
            </g>
            <g id="XMLID 65">
              <path
                id="XMLID 66"
                stroke="#444E59"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeMiterlimit="10"
                strokeWidth="3"
                d="M506.4 270.6h-8.8"
              ></path>
            </g>
            <g id="XMLID 63">
              <path
                id="XMLID 64"
                stroke="#444E59"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeMiterlimit="10"
                strokeWidth="3"
                d="M506.4 254.5h-8.8"
              ></path>
            </g>
            <g id="XMLID 61">
              <path
                id="XMLID 62"
                stroke="#444E59"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeMiterlimit="10"
                strokeWidth="3"
                d="M506.4 238.4h-8.8"
              ></path>
            </g>
            <g id="XMLID 59">
              <path
                id="XMLID 60"
                stroke="#444E59"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeMiterlimit="10"
                strokeWidth="3"
                d="M506.4 222.4h-8.8"
              ></path>
            </g>
            <g id="XMLID 56">
              <path
                id="XMLID 57"
                stroke="#444E59"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeMiterlimit="10"
                strokeWidth="3"
                d="M506.4 206.3h-8.8"
              ></path>
            </g>
            <g id="XMLID 54">
              <path
                id="XMLID 55"
                stroke="#444E59"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeMiterlimit="10"
                strokeWidth="3"
                d="M506.4 190.2h-8.8"
              ></path>
            </g>
            <g id="XMLID 52">
              <path
                id="XMLID 53"
                stroke="#444E59"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeMiterlimit="10"
                strokeWidth="3"
                d="M506.4 174.1h-8.8"
              ></path>
            </g>
            <g id="XMLID 50">
              <path
                id="XMLID 51"
                stroke="#444E59"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeMiterlimit="10"
                strokeWidth="3"
                d="M506.4 158.1h-8.8"
              ></path>
            </g>
          </g>
        </g>
        <g id="XMLID 212">
          <path
            id="XMLID 207"
            fill="#F09F54"
            d="M482.2 60.7h-33.1v241.6h33.1V60.7z"
          ></path>
          <path
            id="XMLID 208"
            fill="#F09F54"
            d="M482.2 60.7h-33.1v241.6h33.1V60.7z"
          ></path>
          <path
            id="XMLID 209"
            fill="#F09F54"
            d="M482.2 60.7h-14.4v241.6h14.4V60.7z"
            opacity="0.29"
          ></path>
          <path
            id="XMLID 121"
            stroke="#444E59"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeMiterlimit="10"
            strokeWidth="4"
            d="M482.2 60.7h-33.1v241.6h33.1V60.7z"
          ></path>
          <g
            id="XMLID 203"
            stroke="#444E59"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeMiterlimit="10"
            strokeWidth="3"
          >
            <g id="XMLID 266">
              <path id="XMLID 269" d="M460.6 277.9h-11.5"></path>
              <path id="XMLID 268" d="M456.2 289.4h-7.1"></path>
            </g>
            <g id="XMLID 262">
              <path id="XMLID 265" d="M460.6 254.9h-11.5"></path>
              <path id="XMLID 264" d="M456.2 266.4h-7.1"></path>
            </g>
            <g id="XMLID 258">
              <path id="XMLID 261" d="M460.6 231.9h-11.5"></path>
              <path id="XMLID 260" d="M456.2 243.4h-7.1"></path>
            </g>
            <g id="XMLID 254">
              <path id="XMLID 257" d="M460.6 208.8h-11.5"></path>
              <path id="XMLID 256" d="M456.2 220.3h-7.1"></path>
            </g>
            <g id="XMLID 249">
              <path id="XMLID 253" d="M460.6 185.8h-11.5"></path>
              <path id="XMLID 251" d="M456.2 197.3h-7.1"></path>
            </g>
            <g id="XMLID 245">
              <path id="XMLID 248" d="M460.6 162.8h-11.5"></path>
              <path id="XMLID 247" d="M456.2 174.3h-7.1"></path>
            </g>
            <g id="XMLID 223">
              <path id="XMLID 244" d="M460.6 139.8h-11.5"></path>
              <path id="XMLID 243" d="M456.2 151.3h-7.1"></path>
            </g>
            <g id="XMLID 215">
              <path id="XMLID 219" d="M460.6 116.8h-11.5"></path>
              <path id="XMLID 218" d="M456.2 128.3h-7.1"></path>
            </g>
            <g id="XMLID 118">
              <path id="XMLID 210" d="M460.6 93.8h-11.5"></path>
              <path id="XMLID 141" d="M456.2 105.3h-7.1"></path>
            </g>
            <g id="XMLID 36">
              <path id="XMLID 113" d="M460.6 70.8h-11.5"></path>
              <path id="XMLID 112" d="M456.2 82.3h-7.1"></path>
            </g>
          </g>
        </g>
        <g id="XMLID 1">
          <path
            id="XMLID 93"
            fill="#848484"
            d="M400.8 119.1h-12.9v34.1h12.9v-34.1z"
          ></path>
          <path
            id="XMLID 237"
            fill="#848484"
            d="M392.7 119.1h-4.8v34.1h4.8v-34.1z"
            opacity="0.25"
          ></path>
          <path
            id="XMLID 40"
            stroke="#444E59"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeMiterlimit="10"
            strokeWidth="4"
            d="M400.8 119.1h-12.9v34.1h12.9v-34.1z"
          ></path>
          <path
            id="XMLID 95"
            fill="#fff"
            d="M397.3 153.3h-5.9v16.5h5.9v-16.5z"
          ></path>
          <path
            id="XMLID 42"
            stroke="#444E59"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeMiterlimit="10"
            strokeWidth="4"
            d="M397.3 153.3h-5.9v16.5h5.9v-16.5z"
          ></path>
          <g id="XMLID 16">
            <path
              id="XMLID 98"
              fill="#fff"
              d="M384.4 184.5l-30 117.7L400 186.1l-15.6-1.6z"
            ></path>
            <path
              id="XMLID 37"
              stroke="#444E59"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeMiterlimit="10"
              strokeWidth="4"
              d="M384.4 184.5l-30 117.7L400 186.1l-15.6-1.6z"
            ></path>
            <path
              id="XMLID 97"
              fill="#fff"
              d="M404.4 184.5l30 117.7-45.5-116.1 15.5-1.6z"
            ></path>
            <path
              id="XMLID 38"
              stroke="#444E59"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeMiterlimit="10"
              strokeWidth="4"
              d="M404.4 184.5l30 117.7-45.5-116.1 15.5-1.6z"
            ></path>
          </g>
          <path
            id="XMLID 91"
            fill="#71A850"
            d="M394.4 207.6c11.046 0 20-8.954 20-20s-8.954-20-20-20-20 8.954-20 20 8.954 20 20 20z"
          ></path>
          <path
            id="XMLID 241"
            fill="#71A850"
            d="M380 187.6c0-10.1 7.5-18.4 17.2-19.8-.9-.1-1.8-.2-2.8-.2-11 0-20 9-20 20s9 20 20 20c.9 0 1.9-.1 2.8-.2-9.7-1.4-17.2-9.7-17.2-19.8z"
            opacity="0.4"
          ></path>
          <path
            id="XMLID 39"
            stroke="#444E59"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeMiterlimit="10"
            strokeWidth="4"
            d="M394.4 207.6c11.046 0 20-8.954 20-20s-8.954-20-20-20-20 8.954-20 20 8.954 20 20 20z"
          ></path>
          <path
            id="XMLID 94"
            fill="#444E59"
            d="M394.4 194.4a6.8 6.8 0 100-13.6 6.8 6.8 0 000 13.6z"
          ></path>
          <path
            id="XMLID 92"
            stroke="#444E59"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeMiterlimit="10"
            strokeWidth="4"
            d="M394.4 194.4a6.8 6.8 0 100-13.6 6.8 6.8 0 000 13.6z"
          ></path>
        </g>
        <path
          id="XMLID 75"
          fill="#848484"
          d="M322.2 302h-132c-7.7 0-14-6.3-14-14V16c0-7.7 6.3-14 14-14h132c7.7 0 14 6.3 14 14v272c0 7.7-6.3 14-14 14z"
        ></path>
        <path
          id="XMLID 116"
          fill="#848484"
          d="M322.2 2h-8.4c7.7 0 14 6.3 14 14v272c0 7.7-6.3 14-14 14h8.5c7.7 0 14-6.3 14-14V16c-.1-7.8-6.4-14-14.1-14z"
          opacity="0.28"
        ></path>
        <path
          id="XMLID 81"
          fill="#848484"
          d="M184.5 288V16c0-7.7 6.3-14 14-14h-8.3c-7.7 0-14 6.3-14 14v272c0 7.7 6.3 14 14 14h8.3c-7.7 0-14-6.3-14-14z"
          opacity="0.48"
        ></path>
        <path
          id="XMLID 3"
          stroke="#444E59"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit="10"
          strokeWidth="4"
          d="M322.2 302h-132c-7.7 0-14-6.3-14-14V16c0-7.7 6.3-14 14-14h132c7.7 0 14 6.3 14 14v272c0 7.7-6.3 14-14 14z"
        ></path>
        <path
          id="XMLID 77"
          fill="#E9FBFF"
          d="M336.219 263.488v-224h-160v224h160z"
        ></path>
        <path
          id="XMLID 5"
          fill="#C9C9C9"
          d="M335.4 111.7h-12.5c-6.8 0-12.3-5.5-12.3-12.3V68.9c0-6.8 5.5-12.3 12.3-12.3h12.5v55.1z"
        ></path>
        <path
          id="XMLID 2"
          fill="#C9C9C9"
          d="M185.4 235.3h-9.2V138h9.2c6.9 0 12.5 5.6 12.5 12.5v72.3c-.1 6.9-5.6 12.5-12.5 12.5z"
        ></path>
        <path
          id="XMLID 6"
          stroke="#444E59"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit="10"
          strokeWidth="4"
          d="M336.219 263.488v-224h-160v224h160z"
        ></path>
        <g
          id="XMLID 4"
          stroke="#444E59"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit="10"
          strokeWidth="5"
        >
          <path id="XMLID 9" d="M278.2 22h7"></path>
          <path id="XMLID 7" d="M227.2 22h40"></path>
        </g>
        <g id="XMLID 228">
          <path
            id="XMLID 8"
            fill="#848484"
            d="M256.2 291.4c6.075 0 11-4.925 11-11s-4.925-11-11-11-11 4.925-11 11 4.925 11 11 11z"
            opacity="0.29"
          ></path>
          <path
            id="XMLID 78"
            fill="#444E59"
            d="M256.2 288.8a8.4 8.4 0 100-16.8 8.4 8.4 0 000 16.8z"
          ></path>
        </g>
        <g id="XMLID 14" opacity="0.3">
          <g id="XMLID 32" opacity="0.3">
            <g id="XMLID 58" opacity="0.3">
              <path
                id="Vector"
                stroke="#444E59"
                strokeDasharray="4.08 4.08"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M219.7 236.7h-16c-4.4 0-8-3.6-8-8v-16c0-4.4 3.6-8 8-8h16c4.4 0 8 3.6 8 8v16c0 4.4-3.6 8-8 8z"
                opacity="0.3"
              ></path>
            </g>
            <g id="XMLID 35" opacity="0.3">
              <path
                id="Vector_2"
                stroke="#444E59"
                strokeDasharray="4.08 4.08"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M308.2 236.7h-16c-4.4 0-8-3.6-8-8v-16c0-4.4 3.6-8 8-8h16c4.4 0 8 3.6 8 8v16c0 4.4-3.6 8-8 8z"
                opacity="0.3"
              ></path>
            </g>
            <g id="XMLID 34" opacity="0.3">
              <path
                id="Vector_3"
                stroke="#444E59"
                strokeDasharray="4.08 4.08"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M264.2 236.7h-16c-4.4 0-8-3.6-8-8v-16c0-4.4 3.6-8 8-8h16c4.4 0 8 3.6 8 8v16c0 4.4-3.6 8-8 8z"
                opacity="0.3"
              ></path>
            </g>
          </g>
          <g id="XMLID 27" opacity="0.3">
            <g id="XMLID 31" opacity="0.3">
              <path
                id="Vector_4"
                stroke="#444E59"
                strokeDasharray="4.08 4.08"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M219.7 188.7h-16c-4.4 0-8-3.6-8-8v-16c0-4.4 3.6-8 8-8h16c4.4 0 8 3.6 8 8v16c0 4.4-3.6 8-8 8z"
                opacity="0.3"
              ></path>
            </g>
            <g id="XMLID 30" opacity="0.3">
              <path
                id="Vector_5"
                stroke="#444E59"
                strokeDasharray="4.08 4.08"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M308.2 188.7h-16c-4.4 0-8-3.6-8-8v-16c0-4.4 3.6-8 8-8h16c4.4 0 8 3.6 8 8v16c0 4.4-3.6 8-8 8z"
                opacity="0.3"
              ></path>
            </g>
            <g id="XMLID 29" opacity="0.3">
              <path
                id="Vector_6"
                stroke="#444E59"
                strokeDasharray="4.08 4.08"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M264.2 188.7h-16c-4.4 0-8-3.6-8-8v-16c0-4.4 3.6-8 8-8h16c4.4 0 8 3.6 8 8v16c0 4.4-3.6 8-8 8z"
                opacity="0.3"
              ></path>
            </g>
          </g>
          <g id="XMLID 22" opacity="0.3">
            <g id="XMLID 26" opacity="0.3">
              <path
                id="Vector_7"
                stroke="#444E59"
                strokeDasharray="4.08 4.08"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M219.7 140.7h-16c-4.4 0-8-3.6-8-8v-16c0-4.4 3.6-8 8-8h16c4.4 0 8 3.6 8 8v16c0 4.4-3.6 8-8 8z"
                opacity="0.3"
              ></path>
            </g>
            <g id="XMLID 25" opacity="0.3">
              <path
                id="Vector_8"
                stroke="#444E59"
                strokeDasharray="4.08 4.08"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M308.2 140.7h-16c-4.4 0-8-3.6-8-8v-16c0-4.4 3.6-8 8-8h16c4.4 0 8 3.6 8 8v16c0 4.4-3.6 8-8 8z"
                opacity="0.3"
              ></path>
            </g>
            <g id="XMLID 24" opacity="0.3">
              <path
                id="Vector_9"
                stroke="#444E59"
                strokeDasharray="4.08 4.08"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M264.2 140.7h-16c-4.4 0-8-3.6-8-8v-16c0-4.4 3.6-8 8-8h16c4.4 0 8 3.6 8 8v16c0 4.4-3.6 8-8 8z"
                opacity="0.3"
              ></path>
            </g>
          </g>
          <g id="XMLID 17" opacity="0.3">
            <g id="XMLID 21" opacity="0.3">
              <path
                id="Vector_10"
                stroke="#444E59"
                strokeDasharray="4.08 4.08"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M219.7 92.7h-16c-4.4 0-8-3.6-8-8v-16c0-4.4 3.6-8 8-8h16c4.4 0 8 3.6 8 8v16c0 4.4-3.6 8-8 8z"
                opacity="0.3"
              ></path>
            </g>
            <g id="XMLID 20" opacity="0.3">
              <path
                id="Vector_11"
                stroke="#444E59"
                strokeDasharray="4.08 4.08"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M308.2 92.7h-16c-4.4 0-8-3.6-8-8v-16c0-4.4 3.6-8 8-8h16c4.4 0 8 3.6 8 8v16c0 4.4-3.6 8-8 8z"
                opacity="0.3"
              ></path>
            </g>
            <g id="XMLID 19" opacity="0.3">
              <path
                id="Vector_12"
                stroke="#444E59"
                strokeDasharray="4.08 4.08"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M264.2 92.7h-16c-4.4 0-8-3.6-8-8v-16c0-4.4 3.6-8 8-8h16c4.4 0 8 3.6 8 8v16c0 4.4-3.6 8-8 8z"
                opacity="0.3"
              ></path>
            </g>
          </g>
        </g>
        <g id="blue-icon-group">
          <path
            id="XMLID 70"
            fill="#2FA9ED"
            d="M308.2 188.7h-16c-4.4 0-8-3.6-8-8v-16c0-4.4 3.6-8 8-8h16c4.4 0 8 3.6 8 8v16c0 4.4-3.6 8-8 8z"
          ></path>
          <path
            id="XMLID 71"
            stroke="#444E59"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeMiterlimit="10"
            strokeWidth="4"
            d="M308.2 188.7h-16c-4.4 0-8-3.6-8-8v-16c0-4.4 3.6-8 8-8h16c4.4 0 8 3.6 8 8v16c0 4.4-3.6 8-8 8z"
          ></path>
          <path
            id="XMLID 10"
            fill="#fff"
            d="M297.6 165.7l9.2 5.3c1.3.8 1.3 2.7 0 3.4l-9.2 5.3c-1.3.8-3-.2-3-1.7v-10.6c0-1.5 1.7-2.5 3-1.7z"
          ></path>
        </g>
        <g id="red-icon-group">
          <path
            id="XMLID 90"
            fill="#E7534E"
            d="M264.2 140.7h-16c-4.4 0-8-3.6-8-8v-16c0-4.4 3.6-8 8-8h16c4.4 0 8 3.6 8 8v16c0 4.4-3.6 8-8 8z"
          ></path>
          <path
            id="XMLID 23"
            stroke="#444E59"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeMiterlimit="10"
            strokeWidth="4"
            d="M264.2 140.7h-16c-4.4 0-8-3.6-8-8v-16c0-4.4 3.6-8 8-8h16c4.4 0 8 3.6 8 8v16c0 4.4-3.6 8-8 8z"
          ></path>
          <path
            id="XMLID 12"
            stroke="#fff"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeMiterlimit="10"
            strokeWidth="4"
            d="M256.2 132.2a7.5 7.5 0 100-15 7.5 7.5 0 000 15z"
          ></path>
        </g>
        <g id="yellow-icon-group">
          <path
            id="XMLID 72"
            fill="#F09F54"
            d="M264.2 236.7h-16c-4.4 0-8-3.6-8-8v-16c0-4.4 3.6-8 8-8h16c4.4 0 8 3.6 8 8v16c0 4.4-3.6 8-8 8z"
          ></path>
          <path
            id="XMLID 15"
            fill="#fff"
            d="M260.4 214.5H252c-1.8 0-3.2 1.5-3.2 3.2v6.2c0 1.8 1.5 3.2 3.2 3.2h.3l-.7 2.8c-.1.2.2.4.4.2l4.3-3h4.3c1.8 0 3.2-1.5 3.2-3.2v-6.2a3.4 3.4 0 00-3.4-3.2z"
          ></path>
          <path
            id="XMLID 74"
            stroke="#444E59"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeMiterlimit="10"
            strokeWidth="4"
            d="M264.2 236.7h-16c-4.4 0-8-3.6-8-8v-16c0-4.4 3.6-8 8-8h16c4.4 0 8 3.6 8 8v16c0 4.4-3.6 8-8 8z"
          ></path>
        </g>
        <g id="green-icon-group">
          <path
            id="XMLID 73"
            fill="#71A850"
            d="M219.7 236.7h-16c-4.4 0-8-3.6-8-8v-16c0-4.4 3.6-8 8-8h16c4.4 0 8 3.6 8 8v16c0 4.4-3.6 8-8 8z"
          ></path>
          <path
            id="XMLID 11"
            stroke="#fff"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeMiterlimit="10"
            strokeWidth="4"
            d="M205.5 220.7l3.7 3.7c.5.5 1.3.5 1.8 0l8.3-8.3"
          ></path>
          <path
            id="XMLID 76"
            stroke="#444E59"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeMiterlimit="10"
            strokeWidth="4"
            d="M219.7 236.7h-16c-4.4 0-8-3.6-8-8v-16c0-4.4 3.6-8 8-8h16c4.4 0 8 3.6 8 8v16c0 4.4-3.6 8-8 8z"
          ></path>
        </g>
        <g id="gear-group">
          <path
            id="XMLID 115"
            fill="#fff"
            d="M195.8 85.7l-.2-15-10 .1c-.6-1.9-1.3-3.6-2.3-5.3l7-7.2-10.7-10.5-7 7.2c-1.7-.9-3.5-1.6-5.4-2.1l-.1-10-15 .2.1 10c-1.9.6-3.6 1.3-5.3 2.3l-7.2-7-10.5 10.7 7.2 7c-.9 1.7-1.6 3.5-2.1 5.4l-10 .1.2 15 10-.1c.6 1.9 1.3 3.6 2.3 5.3l-7 7.2 10.7 10.5 7-7.2c1.7.9 3.5 1.6 5.4 2.1l.1 10 15-.2-.1-10c1.9-.6 3.6-1.3 5.3-2.3l7.2 7 10.5-10.7-7.2-7c.9-1.7 1.6-3.5 2.1-5.4l10-.1zm-35.5 4.6c-6.5.1-11.7-5.1-11.8-11.6-.1-6.5 5.1-11.7 11.6-11.8 6.5-.1 11.7 5.1 11.8 11.6 0 6.5-5.2 11.7-11.6 11.8z"
          ></path>
          <path
            id="XMLID 191"
            fill="#F09F54"
            d="M195.8 85.7l-.2-15-10 .1c-.6-1.9-1.3-3.6-2.3-5.3l7-7.2-10.7-10.5-7 7.2c-1.7-.9-3.5-1.6-5.4-2.1l-.1-10-15 .2.1 10c-1.9.6-3.6 1.3-5.3 2.3l-7.2-7-10.5 10.7 7.2 7c-.9 1.7-1.6 3.5-2.1 5.4l-10 .1.2 15 10-.1c.6 1.9 1.3 3.6 2.3 5.3l-7 7.2 10.7 10.5 7-7.2c1.7.9 3.5 1.6 5.4 2.1l.1 10 15-.2-.1-10c1.9-.6 3.6-1.3 5.3-2.3l7.2 7 10.5-10.7-7.2-7c.9-1.7 1.6-3.5 2.1-5.4l10-.1zm-35.5 4.6c-6.5.1-11.7-5.1-11.8-11.6-.1-6.5 5.1-11.7 11.6-11.8 6.5-.1 11.7 5.1 11.8 11.6 0 6.5-5.2 11.7-11.6 11.8z"
          ></path>
          <path
            id="XMLID 234"
            fill="#F09F54"
            d="M195.8 85.7l-.2-15-10 .1c-.6-1.9-1.3-3.6-2.3-5.3l7-7.2-10.7-10.5-7 7.2c-1.7-.9-3.5-1.6-5.4-2.1l-.1-10-15 .2.1 10c-1.9.6-3.6 1.3-5.3 2.3l-7.2-7-10.5 10.7 7.2 7c-.9 1.7-1.6 3.5-2.1 5.4l-10 .1.2 15 10-.1c.6 1.9 1.3 3.6 2.3 5.3l-7 7.2 10.7 10.5 7-7.2c1.7.9 3.5 1.6 5.4 2.1l.1 10 15-.2-.1-10c1.9-.6 3.6-1.3 5.3-2.3l7.2 7 10.5-10.7-7.2-7c.9-1.7 1.6-3.5 2.1-5.4l10-.1zm-35.5 4.6c-6.5.1-11.7-5.1-11.8-11.6-.1-6.5 5.1-11.7 11.6-11.8 6.5-.1 11.7 5.1 11.8 11.6 0 6.5-5.2 11.7-11.6 11.8z"
          ></path>
          <g id="XMLID 246" fill="#F09F54" opacity="0.29">
            <path
              id="XMLID 250"
              d="M192 70.8s0 .1 0 0h3.7v-.1l-3.7.1z"
              opacity="0.29"
            ></path>
            <path
              id="XMLID 252"
              d="M179 55.1l3.9-4-3.2-3.2-5.2 5.3c1.6.5 3.1 1.1 4.5 1.9z"
              opacity="0.29"
            ></path>
            <path
              id="XMLID 255"
              d="M166.3 66.9c-1.1 0-2.1.2-3 .4 4.9 1.4 8.5 5.8 8.5 11.1.1 5.4-3.6 10-8.5 11.4 1 .3 2.2.5 3.3.4 6.5-.1 11.6-5.4 11.6-11.8s-5.4-11.5-11.9-11.5z"
              opacity="0.29"
            ></path>
            <path
              id="XMLID 259"
              d="M151.4 53.4l2 1.9c1.7-.9 3.4-1.7 5.3-2.3l-.1-10 8.6-.1v-.1l-15 .2.1 10c-.2.2-.6.3-.9.4z"
              opacity="0.29"
            ></path>
            <path
              id="XMLID 263"
              d="M159.2 104.3c-1.9-.5-3.7-1.2-5.4-2.1l-1.8 1.9.9.3.1 10 6.3-.1-.1-10z"
              opacity="0.29"
            ></path>
            <path
              id="XMLID 267"
              d="M130.8 71.5l10-.1c.5-1.9 1.2-3.7 2.1-5.4l-7.2-7 7.4-7.5-3.2-3.2L129.4 59l7.2 7c-.9 1.7-1.6 3.5-2.1 5.4l-10 .1.2 15 6.3-.1-.2-14.9z"
              opacity="0.29"
            ></path>
            <path
              id="XMLID 270"
              d="M179.5 101.9c-1.4.8-2.8 1.4-4.3 1.9l5.2 5.1 3.1-3.2-4-3.8z"
              opacity="0.29"
            ></path>
            <path
              id="XMLID 271"
              d="M136.2 98.8l7-7.2c-.9-1.7-1.7-3.4-2.3-5.3l-6.3.1c.6 1.8 1.3 3.6 2.2 5.2l-7 7.2 10.7 10.5 3.1-3.2-7.4-7.3z"
              opacity="0.29"
            ></path>
          </g>
          <path
            id="XMLID 130"
            stroke="#444E59"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeMiterlimit="10"
            strokeWidth="4"
            d="M195.8 85.7l-.2-15-10 .1c-.6-1.9-1.3-3.6-2.3-5.3l7-7.2-10.7-10.5-7 7.2c-1.7-.9-3.5-1.6-5.4-2.1l-.1-10-15 .2.1 10c-1.9.6-3.6 1.3-5.3 2.3l-7.2-7-10.5 10.7 7.2 7c-.9 1.7-1.6 3.5-2.1 5.4l-10 .1.2 15 10-.1c.6 1.9 1.3 3.6 2.3 5.3l-7 7.2 10.7 10.5 7-7.2c1.7.9 3.5 1.6 5.4 2.1l.1 10 15-.2-.1-10c1.9-.6 3.6-1.3 5.3-2.3l7.2 7 10.5-10.7-7.2-7c.9-1.7 1.6-3.5 2.1-5.4l10-.1zm-35.5 4.6c-6.5.1-11.7-5.1-11.8-11.6-.1-6.5 5.1-11.7 11.6-11.8 6.5-.1 11.7 5.1 11.8 11.6 0 6.5-5.2 11.7-11.6 11.8z"
          ></path>
        </g>
        <g id="XMLID 190">
          <path
            id="XMLID 183"
            fill="#444E59"
            d="M133.3 302H9.6c-4.1 0-7.4-3.3-7.4-7.4V210c0-4.1 3.3-7.4 7.4-7.4h123.8c4.1 0 7.4 3.3 7.4 7.4v84.6c-.1 4.1-3.4 7.4-7.5 7.4z"
          ></path>
          <path
            id="XMLID 134"
            fill="#BCBCBC"
            d="M140.7 218.7H2.2V210c0-4.1 3.3-7.4 7.4-7.4h123.8c4.1 0 7.4 3.3 7.4 7.4v8.7h-.1z"
          ></path>
          <path
            id="XMLID 132"
            stroke="#444E59"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeMiterlimit="10"
            strokeWidth="4"
            d="M133.3 302H9.6c-4.1 0-7.4-3.3-7.4-7.4V210c0-4.1 3.3-7.4 7.4-7.4h123.8c4.1 0 7.4 3.3 7.4 7.4v84.6c-.1 4.1-3.4 7.4-7.5 7.4z"
          ></path>
          <path
            id="XMLID 182"
            stroke="#444E59"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeMiterlimit="10"
            strokeWidth="4"
            d="M133.3 302H9.6c-4.1 0-7.4-3.3-7.4-7.4V210c0-4.1 3.3-7.4 7.4-7.4h123.8c4.1 0 7.4 3.3 7.4 7.4v84.6c-.1 4.1-3.4 7.4-7.5 7.4z"
          ></path>
          <path
            id="XMLID 133"
            stroke="#444E59"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeMiterlimit="10"
            strokeWidth="4"
            d="M140.7 218.7H2.2V210c0-4.1 3.3-7.4 7.4-7.4h123.8c4.1 0 7.4 3.3 7.4 7.4v8.7h-.1z"
          ></path>
          <g
            id="XMLID 135"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeMiterlimit="10"
            strokeWidth="4"
          >
            <g id="XMLID 169" stroke="#fff">
              <path id="XMLID 172" d="M21.3 289.3h15.6"></path>
              <path id="XMLID 171" d="M10.3 289.3h1.1"></path>
            </g>
            <g id="XMLID 165" stroke="#fff">
              <path id="XMLID 168" d="M21.3 280.7h39.5"></path>
              <path id="XMLID 167" d="M10.3 280.7h1.1"></path>
            </g>
            <g id="XMLID 160">
              <path id="XMLID 163" stroke="#64BDFF" d="M79.6 272h10.8"></path>
              <path id="XMLID 185" stroke="#fff" d="M50.2 272h20"></path>
              <path id="XMLID 164" stroke="#FF5F5F" d="M21.3 272h19.8"></path>
              <path id="XMLID 162" stroke="#fff" d="M10.3 272h1.1"></path>
            </g>
            <g id="XMLID 156">
              <path id="XMLID 173" stroke="#fff" d="M54.6 263.4h48.2"></path>
              <path id="XMLID 159" stroke="#64BDFF" d="M21.3 263.4h25.2"></path>
              <path id="XMLID 158" stroke="#fff" d="M10.3 263.4h1.1"></path>
            </g>
            <g id="XMLID 152">
              <path id="XMLID 170" stroke="#FF5F5F" d="M54.6 254.8h18"></path>
              <path id="XMLID 155" stroke="#FFBE78" d="M21.3 254.8h25.2"></path>
              <path id="XMLID 154" stroke="#fff" d="M10.3 254.8h1.1"></path>
            </g>
            <g id="XMLID 148">
              <path id="XMLID 157" stroke="#64BDFF" d="M58.1 246.2H63"></path>
              <path id="XMLID 161" stroke="#FF5F5F" d="M39.1 246.2h11.1"></path>
              <path id="XMLID 151" stroke="#C383F2" d="M21.3 246.2h9.2"></path>
              <path id="XMLID 150" stroke="#fff" d="M10.3 246.2h1.1"></path>
            </g>
            <g id="XMLID 144">
              <path id="XMLID 137" stroke="#64BDFF" d="M94.1 237.5h8.7"></path>
              <path id="XMLID 149" stroke="#FF5F5F" d="M49 237.5h34.1"></path>
              <path id="XMLID 147" stroke="#FFBE78" d="M21.3 237.5h20.3"></path>
              <path id="XMLID 146" stroke="#fff" d="M10.3 237.5h1.1"></path>
            </g>
            <g id="XMLID 139">
              <path id="XMLID 145" stroke="#FFBE78" d="M72.6 228.9h17.8"></path>
              <path id="XMLID 138" stroke="#6DBF7B" d="M50.2 228.9H64"></path>
              <path id="XMLID 140" stroke="#FFBE78" d="M35.2 228.9H43"></path>
              <path id="XMLID 143" stroke="#6DBF7B" d="M21.3 228.9h6.4"></path>
              <path id="XMLID 142" stroke="#fff" d="M10.3 228.9h1.1"></path>
            </g>
          </g>
          <g id="XMLID 153">
            <path
              id="XMLID 136"
              fill="#E7534E"
              d="M15.9 213.2a2.5 2.5 0 100-5 2.5 2.5 0 000 5z"
            ></path>
            <path
              id="XMLID 166"
              fill="#444E59"
              d="M24.9 213.2a2.5 2.5 0 100-5 2.5 2.5 0 000 5z"
            ></path>
            <path
              id="XMLID 174"
              fill="#444E59"
              d="M34 213.2a2.5 2.5 0 100-5 2.5 2.5 0 000 5z"
            ></path>
          </g>
        </g>
        <g id="image-group">
          <path
            id="XMLID 176"
            fill="#fff"
            d="M182.6 227.5H93c-4.4 0-8-3.6-8-8v-80.9c0-4.4 3.6-8 8-8h89.6c4.4 0 8 3.6 8 8v80.9c0 4.4-3.6 8-8 8z"
          ></path>
          <path
            id="XMLID 184"
            fill="#fff"
            d="M182.6 227.5H93c-4.4 0-8-3.6-8-8v-80.9c0-4.4 3.6-8 8-8h89.6c4.4 0 8 3.6 8 8v80.9c0 4.4-3.6 8-8 8z"
          ></path>
          <path
            id="XMLID 175"
            stroke="#444E59"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeMiterlimit="10"
            strokeWidth="4"
            d="M182.6 227.5H93c-4.4 0-8-3.6-8-8v-80.9c0-4.4 3.6-8 8-8h89.6c4.4 0 8 3.6 8 8v80.9c0 4.4-3.6 8-8 8z"
          ></path>
          <path
            id="XMLID 186"
            fill="#9483C4"
            d="M180.9 138.8H94.1v57.7h86.8v-57.7z"
          ></path>
          <path
            id="XMLID 177"
            stroke="#444E59"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeMiterlimit="10"
            strokeWidth="4"
            d="M180.9 138.8H94.1v57.7h86.8v-57.7z"
          ></path>
          <path
            id="XMLID 179"
            stroke="#444E59"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeMiterlimit="10"
            strokeWidth="4"
            d="M94.1 205.7h54.8"
          ></path>
          <path
            id="XMLID 180"
            stroke="#444E59"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeMiterlimit="10"
            strokeWidth="4"
            d="M94.1 214.9h32.4"
          ></path>
          <path
            id="XMLID 178"
            stroke="#444E59"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeMiterlimit="10"
            strokeWidth="4"
            d="M102.8 186.2l18.7-18.5 17.4 17.4"
          ></path>
          <path
            id="XMLID 181"
            stroke="#444E59"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeMiterlimit="10"
            strokeWidth="4"
            d="M171.5 186.2l-22.6-29.5-18.1 20.2"
          ></path>
          <path
            id="XMLID 187"
            stroke="#444E59"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeMiterlimit="10"
            strokeWidth="4"
            d="M171.3 214.8a4.9 4.9 0 100-9.8 4.9 4.9 0 000 9.8z"
          ></path>
          <path
            id="XMLID 189"
            fill="#F09F54"
            d="M127 162.9a6.2 6.2 0 100-12.4 6.2 6.2 0 000 12.4z"
          ></path>
          <path
            id="XMLID 188"
            stroke="#444E59"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeMiterlimit="10"
            strokeWidth="4"
            d="M127 162.9a6.2 6.2 0 100-12.4 6.2 6.2 0 000 12.4z"
          ></path>
        </g>
        <g
          id="XMLID 194"
          stroke="#444E59"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit="10"
          strokeWidth="4"
        >
          <path id="XMLID 198" d="M83.3 102.1h26.8"></path>
          <path id="XMLID 195" d="M69 102.1h7.1"></path>
          <path id="XMLID 199" d="M96.7 89.7h13.4"></path>
          <path id="XMLID 196" d="M85.9 89.7h4"></path>
        </g>
        <g
          id="XMLID 200"
          stroke="#444E59"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit="10"
          strokeWidth="4"
        >
          <path id="XMLID 205" d="M54.3 180.5h20.9"></path>
          <path id="XMLID 204" d="M43.2 180.5h5.5"></path>
          <path id="XMLID 202" d="M66.7 168.1h8.5"></path>
          <path id="XMLID 201" d="M56.3 168.1h3.2"></path>
        </g>
        <g
          id="XMLID 229"
          stroke="#444E59"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit="10"
          strokeWidth="4"
        >
          <path id="XMLID 233" d="M387.6 35.4h19.8"></path>
          <path id="XMLID 232" d="M375.4 35.4h5.6"></path>
          <path id="XMLID 231" d="M398.9 23h8.5"></path>
          <path id="XMLID 230" d="M388.6 23h3.1"></path>
        </g>
        <g id="card-group">
          <path
            id="XMLID 211"
            fill="#2FA9ED"
            d="M403 105.3h-78.2c-4.8 0-8.6-3.9-8.6-8.6V58.8c0-4.8 3.9-8.6 8.6-8.6H403c4.8 0 8.6 3.9 8.6 8.6v37.8c0 4.8-3.8 8.7-8.6 8.7z"
          ></path>
          <path
            id="XMLID 197"
            stroke="#444E59"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeMiterlimit="10"
            strokeWidth="3"
            d="M403 105.3h-78.2c-4.8 0-8.6-3.9-8.6-8.6V58.8c0-4.8 3.9-8.6 8.6-8.6H403c4.8 0 8.6 3.9 8.6 8.6v37.8c0 4.8-3.8 8.7-8.6 8.7z"
          ></path>
          <path
            id="XMLID 214"
            stroke="#fff"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeMiterlimit="10"
            strokeWidth="3"
            d="M363.9 65h33.8"
            opacity="0.56"
          ></path>
          <path
            id="XMLID 216"
            stroke="#fff"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeMiterlimit="10"
            strokeWidth="3"
            d="M363.9 75.9h22.4"
            opacity="0.56"
          ></path>
          <g id="XMLID 224" opacity="0.56">
            <path
              id="XMLID 217"
              fill="#fff"
              d="M380.9 92.2h-13.6c-1.8 0-3.3-1.5-3.3-3.3 0-1.8 1.5-3.3 3.3-3.3h13.6c1.8 0 3.3 1.5 3.3 3.3 0 1.8-1.4 3.3-3.3 3.3z"
              opacity="0.56"
            ></path>
            <path
              id="XMLID 213"
              stroke="#fff"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeMiterlimit="10"
              strokeWidth="3"
              d="M380.9 92.2h-13.6c-1.8 0-3.3-1.5-3.3-3.3 0-1.8 1.5-3.3 3.3-3.3h13.6c1.8 0 3.3 1.5 3.3 3.3 0 1.8-1.4 3.3-3.3 3.3z"
              opacity="0.56"
            ></path>
          </g>
          <g
            id="XMLID 226"
            stroke="#fff"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeMiterlimit="10"
            strokeWidth="3"
          >
            <path
              id="XMLID 206"
              d="M349.8 92.7h-17.9c-2.6 0-4.6-2.1-4.6-4.6V67.2c0-2.6 2.1-4.6 4.6-4.6h17.9c2.6 0 4.6 2.1 4.6 4.6v20.9c0 2.5-2 4.6-4.6 4.6z"
            ></path>
            <path
              id="XMLID 225"
              d="M340.9 79a4.8 4.8 0 100-9.6 4.8 4.8 0 000 9.6z"
            ></path>
            <path
              id="XMLID 227"
              d="M331.8 92.2c0-5 4.1-9.1 9.1-9.1s9.1 4.1 9.1 9.1"
            ></path>
          </g>
        </g>
      </g>
    </svg>
  );
}

export default HeroSvg;
