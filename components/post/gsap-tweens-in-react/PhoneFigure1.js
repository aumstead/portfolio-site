import styles from "./PhoneFigure1.module.scss";

function PhoneFigure1({ onMobile }) {
  function handleMouseEnter() {
    gsap.to("#red-icon-group", 1, { x: 45 });
  }

  return (
    <svg
      className={styles.svg}
      onMouseEnter={onMobile ? null : handleMouseEnter}
      onClick={onMobile ? handleMouseEnter : null}
      xmlns="http://www.w3.org/2000/svg"
      width="217"
      height="304"
      fill="none"
      viewBox="0 0 217 304"
    >
      <g id="phone">
        <path
          id="XMLID 75"
          fill="#848484"
          d="M200 302H68c-7.7 0-14-6.3-14-14V16c0-7.7 6.3-14 14-14h132c7.7 0 14 6.3 14 14v272c0 7.7-6.3 14-14 14z"
        ></path>
        <path
          id="XMLID 116"
          fill="#848484"
          d="M200 2h-8.4c7.7 0 14 6.3 14 14v272c0 7.7-6.3 14-14 14h8.5c7.7 0 14-6.3 14-14V16C214 8.2 207.7 2 200 2z"
          opacity="0.28"
        ></path>
        <path
          id="XMLID 81"
          fill="#848484"
          d="M62.3 288V16c0-7.7 6.3-14 14-14H68c-7.7 0-14 6.3-14 14v272c0 7.7 6.3 14 14 14h8.3c-7.7 0-14-6.3-14-14z"
          opacity="0.48"
        ></path>
        <path
          id="XMLID 3"
          stroke="#444E59"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit="10"
          strokeWidth="4"
          d="M200 302H68c-7.7 0-14-6.3-14-14V16c0-7.7 6.3-14 14-14h132c7.7 0 14 6.3 14 14v272c0 7.7-6.3 14-14 14z"
        ></path>
        <path
          id="XMLID 77"
          fill="#E9FBFF"
          d="M214.019 263.488v-224h-160v224h160z"
        ></path>
        <path
          id="XMLID 6"
          stroke="#444E59"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit="10"
          strokeWidth="4"
          d="M214.019 263.488v-224h-160v224h160z"
        ></path>
        <g
          id="XMLID 4"
          stroke="#444E59"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit="10"
          strokeWidth="5"
        >
          <path id="XMLID 9" d="M156 22h7"></path>
          <path id="XMLID 7" d="M105 22h40"></path>
        </g>
        <g id="XMLID 228">
          <path
            id="XMLID 8"
            fill="#848484"
            d="M134 291.4c6.075 0 11-4.925 11-11s-4.925-11-11-11-11 4.925-11 11 4.925 11 11 11z"
            opacity="0.29"
          ></path>
          <path
            id="XMLID 78"
            fill="#444E59"
            d="M134 288.8a8.4 8.4 0 100-16.8 8.4 8.4 0 000 16.8z"
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
                d="M97.5 236.7h-16c-4.4 0-8-3.6-8-8v-16c0-4.4 3.6-8 8-8h16c4.4 0 8 3.6 8 8v16c0 4.4-3.6 8-8 8z"
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
                d="M186 236.7h-16c-4.4 0-8-3.6-8-8v-16c0-4.4 3.6-8 8-8h16c4.4 0 8 3.6 8 8v16c0 4.4-3.6 8-8 8z"
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
                d="M142 236.7h-16c-4.4 0-8-3.6-8-8v-16c0-4.4 3.6-8 8-8h16c4.4 0 8 3.6 8 8v16c0 4.4-3.6 8-8 8z"
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
                d="M97.5 188.7h-16c-4.4 0-8-3.6-8-8v-16c0-4.4 3.6-8 8-8h16c4.4 0 8 3.6 8 8v16c0 4.4-3.6 8-8 8z"
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
                d="M186 188.7h-16c-4.4 0-8-3.6-8-8v-16c0-4.4 3.6-8 8-8h16c4.4 0 8 3.6 8 8v16c0 4.4-3.6 8-8 8z"
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
                d="M142 188.7h-16c-4.4 0-8-3.6-8-8v-16c0-4.4 3.6-8 8-8h16c4.4 0 8 3.6 8 8v16c0 4.4-3.6 8-8 8z"
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
                d="M97.5 140.7h-16c-4.4 0-8-3.6-8-8v-16c0-4.4 3.6-8 8-8h16c4.4 0 8 3.6 8 8v16c0 4.4-3.6 8-8 8z"
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
                d="M186 140.7h-16c-4.4 0-8-3.6-8-8v-16c0-4.4 3.6-8 8-8h16c4.4 0 8 3.6 8 8v16c0 4.4-3.6 8-8 8z"
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
                d="M142 140.7h-16c-4.4 0-8-3.6-8-8v-16c0-4.4 3.6-8 8-8h16c4.4 0 8 3.6 8 8v16c0 4.4-3.6 8-8 8z"
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
                d="M97.5 92.7h-16c-4.4 0-8-3.6-8-8v-16c0-4.4 3.6-8 8-8h16c4.4 0 8 3.6 8 8v16c0 4.4-3.6 8-8 8z"
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
                d="M186 92.7h-16c-4.4 0-8-3.6-8-8v-16c0-4.4 3.6-8 8-8h16c4.4 0 8 3.6 8 8v16c0 4.4-3.6 8-8 8z"
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
                d="M142 92.7h-16c-4.4 0-8-3.6-8-8v-16c0-4.4 3.6-8 8-8h16c4.4 0 8 3.6 8 8v16c0 4.4-3.6 8-8 8z"
                opacity="0.3"
              ></path>
            </g>
          </g>
        </g>
        <g id="blue-icon-group">
          <path
            id="XMLID 70"
            fill="#2FA9ED"
            d="M186 188.7h-16c-4.4 0-8-3.6-8-8v-16c0-4.4 3.6-8 8-8h16c4.4 0 8 3.6 8 8v16c0 4.4-3.6 8-8 8z"
          ></path>
          <path
            id="XMLID 71"
            stroke="#444E59"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeMiterlimit="10"
            strokeWidth="4"
            d="M186 188.7h-16c-4.4 0-8-3.6-8-8v-16c0-4.4 3.6-8 8-8h16c4.4 0 8 3.6 8 8v16c0 4.4-3.6 8-8 8z"
          ></path>
          <path
            id="XMLID 10"
            fill="#fff"
            d="M175.4 165.7l9.2 5.3c1.3.8 1.3 2.7 0 3.4l-9.2 5.3c-1.3.8-3-.2-3-1.7v-10.6c0-1.5 1.7-2.5 3-1.7z"
          ></path>
        </g>
        <g id="red-icon-group">
          <path
            id="XMLID 90"
            fill="#E7534E"
            d="M142 140.7h-16c-4.4 0-8-3.6-8-8v-16c0-4.4 3.6-8 8-8h16c4.4 0 8 3.6 8 8v16c0 4.4-3.6 8-8 8z"
          ></path>
          <path
            id="XMLID 23"
            stroke="#444E59"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeMiterlimit="10"
            strokeWidth="4"
            d="M142 140.7h-16c-4.4 0-8-3.6-8-8v-16c0-4.4 3.6-8 8-8h16c4.4 0 8 3.6 8 8v16c0 4.4-3.6 8-8 8z"
          ></path>
          <path
            id="XMLID 12"
            stroke="#fff"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeMiterlimit="10"
            strokeWidth="4"
            d="M134 132.2a7.5 7.5 0 100-15 7.5 7.5 0 000 15z"
          ></path>
        </g>
        <g id="yellow-icon-group">
          <path
            id="XMLID 72"
            fill="#F09F54"
            d="M142 236.7h-16c-4.4 0-8-3.6-8-8v-16c0-4.4 3.6-8 8-8h16c4.4 0 8 3.6 8 8v16c0 4.4-3.6 8-8 8z"
          ></path>
          <path
            id="XMLID 15"
            fill="#fff"
            d="M138.2 214.5h-8.4c-1.8 0-3.2 1.5-3.2 3.2v6.2c0 1.8 1.5 3.2 3.2 3.2h.3l-.7 2.8c-.1.2.2.4.4.2l4.3-3h4.3c1.8 0 3.2-1.5 3.2-3.2v-6.2a3.4 3.4 0 00-3.4-3.2z"
          ></path>
          <path
            id="XMLID 74"
            stroke="#444E59"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeMiterlimit="10"
            strokeWidth="4"
            d="M142 236.7h-16c-4.4 0-8-3.6-8-8v-16c0-4.4 3.6-8 8-8h16c4.4 0 8 3.6 8 8v16c0 4.4-3.6 8-8 8z"
          ></path>
        </g>
        <g id="green-icon-group">
          <path
            id="XMLID 73"
            fill="#71A850"
            d="M97.5 236.7h-16c-4.4 0-8-3.6-8-8v-16c0-4.4 3.6-8 8-8h16c4.4 0 8 3.6 8 8v16c0 4.4-3.6 8-8 8z"
          ></path>
          <path
            id="XMLID 11"
            stroke="#fff"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeMiterlimit="10"
            strokeWidth="4"
            d="M83.3 220.7l3.7 3.7c.5.5 1.3.5 1.8 0l8.3-8.3"
          ></path>
          <path
            id="XMLID 76"
            stroke="#444E59"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeMiterlimit="10"
            strokeWidth="4"
            d="M97.5 236.7h-16c-4.4 0-8-3.6-8-8v-16c0-4.4 3.6-8 8-8h16c4.4 0 8 3.6 8 8v16c0 4.4-3.6 8-8 8z"
          ></path>
        </g>
        <g id="gear-group">
          <path
            id="XMLID 115"
            fill="#fff"
            d="M73.6 85.7l-.2-15-10 .1c-.6-1.9-1.3-3.6-2.3-5.3l7-7.2-10.7-10.5-7 7.2c-1.7-.9-3.5-1.6-5.4-2.1l-.1-10-15 .2.1 10c-1.9.6-3.6 1.3-5.3 2.3l-7.2-7L7 59.1l7.2 7c-.9 1.7-1.6 3.5-2.1 5.4l-10 .1.2 15 10-.1c.6 1.9 1.3 3.6 2.3 5.3l-7 7.2 10.7 10.5 7-7.2c1.7.9 3.5 1.6 5.4 2.1l.1 10 15-.2-.1-10c1.9-.6 3.6-1.3 5.3-2.3l7.2 7 10.5-10.7-7.2-7c.9-1.7 1.6-3.5 2.1-5.4l10-.1zm-35.5 4.6c-6.5.1-11.7-5.1-11.8-11.6-.1-6.5 5.1-11.7 11.6-11.8 6.5-.1 11.7 5.1 11.8 11.6 0 6.5-5.2 11.7-11.6 11.8z"
          ></path>
          <path
            id="XMLID 191"
            fill="#F09F54"
            d="M73.6 85.7l-.2-15-10 .1c-.6-1.9-1.3-3.6-2.3-5.3l7-7.2-10.7-10.5-7 7.2c-1.7-.9-3.5-1.6-5.4-2.1l-.1-10-15 .2.1 10c-1.9.6-3.6 1.3-5.3 2.3l-7.2-7L7 59.1l7.2 7c-.9 1.7-1.6 3.5-2.1 5.4l-10 .1.2 15 10-.1c.6 1.9 1.3 3.6 2.3 5.3l-7 7.2 10.7 10.5 7-7.2c1.7.9 3.5 1.6 5.4 2.1l.1 10 15-.2-.1-10c1.9-.6 3.6-1.3 5.3-2.3l7.2 7 10.5-10.7-7.2-7c.9-1.7 1.6-3.5 2.1-5.4l10-.1zm-35.5 4.6c-6.5.1-11.7-5.1-11.8-11.6-.1-6.5 5.1-11.7 11.6-11.8 6.5-.1 11.7 5.1 11.8 11.6 0 6.5-5.2 11.7-11.6 11.8z"
          ></path>
          <path
            id="XMLID 234"
            fill="#F09F54"
            d="M73.6 85.7l-.2-15-10 .1c-.6-1.9-1.3-3.6-2.3-5.3l7-7.2-10.7-10.5-7 7.2c-1.7-.9-3.5-1.6-5.4-2.1l-.1-10-15 .2.1 10c-1.9.6-3.6 1.3-5.3 2.3l-7.2-7L7 59.1l7.2 7c-.9 1.7-1.6 3.5-2.1 5.4l-10 .1.2 15 10-.1c.6 1.9 1.3 3.6 2.3 5.3l-7 7.2 10.7 10.5 7-7.2c1.7.9 3.5 1.6 5.4 2.1l.1 10 15-.2-.1-10c1.9-.6 3.6-1.3 5.3-2.3l7.2 7 10.5-10.7-7.2-7c.9-1.7 1.6-3.5 2.1-5.4l10-.1zm-35.5 4.6c-6.5.1-11.7-5.1-11.8-11.6-.1-6.5 5.1-11.7 11.6-11.8 6.5-.1 11.7 5.1 11.8 11.6 0 6.5-5.2 11.7-11.6 11.8z"
          ></path>
          <g id="XMLID 246" fill="#F09F54" opacity="0.29">
            <path
              id="XMLID 250"
              d="M69.8 70.8s0 .1 0 0h3.7v-.1l-3.7.1z"
              opacity="0.29"
            ></path>
            <path
              id="XMLID 252"
              d="M56.8 55.1l3.9-4-3.2-3.2-5.2 5.3c1.6.5 3.1 1.1 4.5 1.9z"
              opacity="0.29"
            ></path>
            <path
              id="XMLID 255"
              d="M44.1 66.9c-1.1 0-2.1.2-3 .4 4.9 1.4 8.5 5.8 8.5 11.1.1 5.4-3.6 10-8.5 11.4 1 .3 2.2.5 3.3.4 6.5-.1 11.6-5.4 11.6-11.8s-5.4-11.5-11.9-11.5z"
              opacity="0.29"
            ></path>
            <path
              id="XMLID 259"
              d="M29.2 53.4l2 1.9c1.7-.9 3.4-1.7 5.3-2.3l-.1-10 8.6-.1v-.1L30 43l.1 10c-.2.2-.6.3-.9.4z"
              opacity="0.29"
            ></path>
            <path
              id="XMLID 263"
              d="M37 104.3c-1.9-.5-3.7-1.2-5.4-2.1l-1.8 1.9.9.3.1 10 6.3-.1-.1-10z"
              opacity="0.29"
            ></path>
            <path
              id="XMLID 267"
              d="M8.6 71.5l10-.1c.5-1.9 1.2-3.7 2.1-5.4l-7.2-7 7.4-7.5-3.2-3.2L7.2 59l7.2 7c-.9 1.7-1.6 3.5-2.1 5.4l-10 .1.2 15 6.3-.1-.2-14.9z"
              opacity="0.29"
            ></path>
            <path
              id="XMLID 270"
              d="M57.3 101.9c-1.4.8-2.8 1.4-4.3 1.9l5.2 5.1 3.1-3.2-4-3.8z"
              opacity="0.29"
            ></path>
            <path
              id="XMLID 271"
              d="M14 98.8l7-7.2c-.9-1.7-1.7-3.4-2.3-5.3l-6.3.1c.6 1.8 1.3 3.6 2.2 5.2l-7 7.2 10.7 10.5 3.1-3.2-7.4-7.3z"
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
            d="M73.6 85.7l-.2-15-10 .1c-.6-1.9-1.3-3.6-2.3-5.3l7-7.2-10.7-10.5-7 7.2c-1.7-.9-3.5-1.6-5.4-2.1l-.1-10-15 .2.1 10c-1.9.6-3.6 1.3-5.3 2.3l-7.2-7L7 59.1l7.2 7c-.9 1.7-1.6 3.5-2.1 5.4l-10 .1.2 15 10-.1c.6 1.9 1.3 3.6 2.3 5.3l-7 7.2 10.7 10.5 7-7.2c1.7.9 3.5 1.6 5.4 2.1l.1 10 15-.2-.1-10c1.9-.6 3.6-1.3 5.3-2.3l7.2 7 10.5-10.7-7.2-7c.9-1.7 1.6-3.5 2.1-5.4l10-.1zm-35.5 4.6c-6.5.1-11.7-5.1-11.8-11.6-.1-6.5 5.1-11.7 11.6-11.8 6.5-.1 11.7 5.1 11.8 11.6 0 6.5-5.2 11.7-11.6 11.8z"
          ></path>
        </g>
      </g>
    </svg>
  );
}

export default PhoneFigure1;
