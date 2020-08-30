import { useEffect, useRef } from "react";
import styles from "./Power.module.scss";

function Power({ onMobile }) {
  const popUp = useRef(null);
  useEffect(() => {
    popUp.current = gsap.to("#hand", 1, {
      y: "0rem",
      ease: "elastic.out(0.5, 0.4)",
    });

    const timeout = function () {
      setTimeout(() => {
        popUp.current.restart();
      }, 1000);
    };

    popUp.current.pause();
    timeout();

    return () => {
      clearTimeout(timeout);
    };
  }, []);

  function handleMouseEnter() {
    popUp.current.restart();
  }
  return (
    <svg
      className={styles.svg}
      onMouseEnter={onMobile ? null : handleMouseEnter}
      onClick={onMobile ? handleMouseEnter : null}
      xmlns="http://www.w3.org/2000/svg"
      width="398"
      height="373"
      fill="none"
      viewBox="0 0 398 373"
    >
      <g id="power">
        <g id="background">
          <path
            id="Vector"
            fill="#1895DE"
            d="M195.182 369c81.738 0 148-66.262 148-148s-66.262-148-148-148-148 66.262-148 148 66.262 148 148 148z"
          ></path>
          <clipPath
            id="mask0"
            width="398"
            height="373"
            x="0"
            y="0"
            maskUnits="userSpaceOnUse"
          >
            <path
              id="mask"
              fill="#1895DE"
              d="M199 373c109.905 0 199-83.499 199-186.5S308.905 0 199 0 0 83.499 0 186.5 89.095 373 199 373z"
            ></path>
          </clipPath>
          <g clipPath="url(#mask0)">
            <path
              id="Vector_2"
              fill="#28B1D5"
              d="M195.182 330.865c60.677 0 109.865-49.188 109.865-109.865 0-60.677-49.188-109.865-109.865-109.865-60.677 0-109.865 49.188-109.865 109.865 0 60.677 49.188 109.865 109.865 109.865z"
            ></path>
            <path
              id="star-11"
              fill="#fff"
              d="M148.303 165.339a2.533 2.533 0 01-2.532-2.532 1.777 1.777 0 00-1.562-1.8 1.702 1.702 0 00-1.312.443 1.71 1.71 0 00-.558 1.267v.089a2.532 2.532 0 01-2.532 2.532 1.778 1.778 0 00-1.8 1.562 1.708 1.708 0 001.017 1.725c.218.096.454.146.693.146h.089a2.535 2.535 0 012.532 2.531 1.771 1.771 0 001.562 1.8 1.725 1.725 0 001.312-.443 1.719 1.719 0 00.558-1.267v-.089a2.532 2.532 0 012.532-2.531h.089a1.719 1.719 0 001.71-1.871 1.782 1.782 0 00-1.798-1.562z"
            ></path>
            <path
              id="star-10"
              fill="#fff"
              d="M211.342 220.433a1.443 1.443 0 01-1.444-1.444 1.014 1.014 0 00-.891-1.026.976.976 0 00-.748.253.982.982 0 00-.319.722v.051a1.44 1.44 0 01-.891 1.334c-.175.073-.362.11-.552.11a1.013 1.013 0 00-1.026.891.993.993 0 00.047.401.99.99 0 00.533.583.979.979 0 00.395.083h.051a1.431 1.431 0 011.021.423 1.433 1.433 0 01.422 1.021 1.014 1.014 0 00.892 1.026.97.97 0 00.748-.253.98.98 0 00.318-.722v-.051a1.44 1.44 0 01.891-1.334 1.44 1.44 0 01.553-.11h.051a.98.98 0 00.975-1.067 1.012 1.012 0 00-1.026-.891z"
            ></path>
            <path
              id="star-9"
              fill="#fff"
              d="M175.448 240.67a3.302 3.302 0 01-2.331-.968 3.304 3.304 0 01-.964-2.332 2.328 2.328 0 00-2.01-2.358 2.243 2.243 0 00-2.473 2.23v.128a3.298 3.298 0 01-2.038 3.049c-.4.166-.829.251-1.262.251a2.332 2.332 0 00-2.358 2.01 2.235 2.235 0 00.565 1.732 2.241 2.241 0 001.665.741h.128a3.3 3.3 0 013.3 3.3 2.326 2.326 0 002.01 2.358 2.237 2.237 0 001.732-.565 2.246 2.246 0 00.741-1.665v-.116a3.306 3.306 0 013.307-3.307h.116c.313 0 .624-.066.911-.193a2.255 2.255 0 001.22-1.354c.097-.298.131-.614.099-.926a2.338 2.338 0 00-.795-1.457 2.335 2.335 0 00-1.563-.558z"
            ></path>
            <path
              id="star-8"
              fill="#fff"
              d="M247.605 166.677a5.067 5.067 0 01-5.063-5.063 3.555 3.555 0 00-3.125-3.6 3.435 3.435 0 00-3.741 3.42v.179a5.061 5.061 0 01-5.063 5.063 3.554 3.554 0 00-3.6 3.125 3.435 3.435 0 003.42 3.741h.178a5.06 5.06 0 015.063 5.063 3.557 3.557 0 003.126 3.6 3.44 3.44 0 002.624-.886 3.426 3.426 0 001.116-2.534v-.178a5.064 5.064 0 015.063-5.063h.179a3.438 3.438 0 003.253-2.336c.152-.452.209-.93.166-1.405a3.55 3.55 0 00-3.596-3.126z"
            ></path>
            <path
              id="star-1"
              fill="#fff"
              d="M110.879 209.215a5.06 5.06 0 01-5.063-5.063 3.555 3.555 0 00-3.125-3.6 3.418 3.418 0 00-1.405.167 3.422 3.422 0 00-2.044 1.868 3.437 3.437 0 00-.292 1.385v.179a5.062 5.062 0 01-5.063 5.063 3.555 3.555 0 00-3.6 3.125 3.432 3.432 0 003.42 3.741h.178a5.061 5.061 0 015.063 5.063 3.553 3.553 0 003.126 3.6c.475.043.953-.014 1.405-.167a3.422 3.422 0 002.044-1.868c.192-.437.291-.908.291-1.385v-.178a5.06 5.06 0 015.063-5.063h.179a3.434 3.434 0 003.419-3.741 3.557 3.557 0 00-3.596-3.126z"
            ></path>
            <path
              id="star-2"
              fill="#fff"
              d="M193.376 97.311a2.529 2.529 0 01-2.532-2.532 1.78 1.78 0 00-1.562-1.8 1.72 1.72 0 00-1.724 1.018 1.703 1.703 0 00-.146.692v.09a2.532 2.532 0 01-2.532 2.531 1.78 1.78 0 00-1.8 1.562 1.711 1.711 0 001.018 1.725c.218.096.454.146.692.146h.089a2.535 2.535 0 012.532 2.531 1.774 1.774 0 001.562 1.8 1.71 1.71 0 001.725-1.017c.096-.219.145-.455.145-.693v-.089a2.532 2.532 0 012.532-2.531h.089a1.727 1.727 0 001.267-.559 1.711 1.711 0 00.443-1.312 1.775 1.775 0 00-1.798-1.562z"
            ></path>
            <path
              id="star-3"
              fill="#fff"
              d="M129.342 301.433a1.443 1.443 0 01-1.444-1.444 1.014 1.014 0 00-.891-1.026.976.976 0 00-.748.253.982.982 0 00-.319.722v.051a1.44 1.44 0 01-.891 1.334c-.175.073-.362.11-.552.11a1.013 1.013 0 00-1.026.891.993.993 0 00.047.401.99.99 0 00.533.583.979.979 0 00.395.083h.051a1.431 1.431 0 011.021.423 1.433 1.433 0 01.422 1.021 1.014 1.014 0 00.892 1.026.97.97 0 00.748-.253.98.98 0 00.318-.722v-.051a1.44 1.44 0 01.891-1.334 1.44 1.44 0 01.553-.11h.051a.98.98 0 00.975-1.067 1.012 1.012 0 00-1.026-.891z"
            ></path>
            <path
              id="star-4"
              fill="#fff"
              d="M313.385 250.825a1.085 1.085 0 01-1.087-1.086.761.761 0 00-.671-.772.733.733 0 00-.561.191.734.734 0 00-.239.543v.039a1.086 1.086 0 01-1.087 1.086.761.761 0 00-.772.671.733.733 0 00.191.561.724.724 0 00.543.239h.038a1.085 1.085 0 011.087 1.086.765.765 0 00.67.772.733.733 0 00.561-.191.724.724 0 00.239-.543v-.038a1.085 1.085 0 011.088-1.083h.038a.734.734 0 00.734-.8.76.76 0 00-.772-.675z"
            ></path>
            <path
              id="star-5"
              fill="#fff"
              d="M296.565 204.107a2.778 2.778 0 01-2.562-1.712 2.778 2.778 0 01-.211-1.061 1.962 1.962 0 00-1.692-1.984 1.893 1.893 0 00-1.458.476 1.897 1.897 0 00-.624 1.401v.108a2.772 2.772 0 01-2.772 2.773 1.963 1.963 0 00-1.985 1.692 1.886 1.886 0 001.877 2.081h.108a2.772 2.772 0 012.772 2.773 1.96 1.96 0 001.692 1.985 1.893 1.893 0 001.458-.476 1.897 1.897 0 00.624-1.401v-.1a2.783 2.783 0 012.782-2.783h.1a1.897 1.897 0 001.401-.623 1.881 1.881 0 00.476-1.458 1.964 1.964 0 00-1.986-1.691z"
            ></path>
            <g id="star-7" style={{ mixBlendMode: "overlay" }} opacity="0.59">
              <path
                id="Vector_3"
                fill="#174268"
                d="M81.758 270.273a2.773 2.773 0 01-2.773-2.773 1.962 1.962 0 00-1.692-1.985 1.89 1.89 0 00-2.08 1.877v.108a2.776 2.776 0 01-2.774 2.773 1.962 1.962 0 00-1.985 1.692 1.883 1.883 0 001.11 1.918c.242.108.503.163.767.163h.108a2.776 2.776 0 012.773 2.773 1.96 1.96 0 001.692 1.985 1.889 1.889 0 002.081-1.877v-.1a2.784 2.784 0 012.783-2.783h.1a1.876 1.876 0 001.401-.623 1.888 1.888 0 00.475-1.458 1.959 1.959 0 00-1.986-1.69z"
                opacity="0.59"
              ></path>
            </g>
            <path
              id="star-6"
              fill="#fff"
              d="M274.812 259.825a3.302 3.302 0 01-3.295-3.3 2.326 2.326 0 00-2.01-2.358 2.252 2.252 0 00-1.733.565 2.246 2.246 0 00-.74 1.665v.128a3.297 3.297 0 01-3.3 3.3 2.329 2.329 0 00-2.358 2.01 2.236 2.236 0 00.565 1.732 2.235 2.235 0 001.665.741h.128a3.302 3.302 0 013.3 3.3 2.33 2.33 0 002.01 2.358 2.25 2.25 0 002.473-2.23v-.116a3.307 3.307 0 013.307-3.307h.116a2.235 2.235 0 002.131-1.547c.098-.298.131-.614.099-.926a2.329 2.329 0 00-2.358-2.015z"
            ></path>
            <path
              id="Vector_4"
              stroke="#020129"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="8"
              d="M195.182 369c81.738 0 148-66.262 148-148s-66.262-148-148-148-148 66.262-148 148 66.262 148 148 148z"
            ></path>
            <g id="hand" className={styles.hand}>
              <path
                id="Vector_5"
                fill="#FFA183"
                d="M232.682 228.394h-75V359.12h75V228.394z"
              ></path>
              <path
                id="Vector_6"
                fill="#F9A991"
                d="M232.682 228.394h-75V359.12h75V228.394z"
              ></path>
              <path
                id="Vector_7"
                fill="#FFA183"
                d="M157.685 263.767a51.985 51.985 0 0023.833 5.766h27.334a51.982 51.982 0 0023.833-5.766v-35.373h-75v35.373z"
                opacity="0.58"
              ></path>
              <path
                id="Vector_8"
                stroke="#020129"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="8"
                d="M232.682 228.394h-75V359.12h75V228.394z"
              ></path>
              <path
                id="Vector_9"
                fill="#F9A991"
                d="M137.185 150.453h116V217.2a44.333 44.333 0 01-44.333 44.333h-27.337a44.333 44.333 0 01-44.33-44.333v-66.747z"
              ></path>
              <path
                id="Vector_10"
                fill="#F98568"
                d="M208.848 247.374h-27.333a44.335 44.335 0 01-44.33-44.334v14.16a44.329 44.329 0 0012.985 31.348 44.329 44.329 0 0031.348 12.985h27.333a44.334 44.334 0 0044.334-44.333v-14.16a44.34 44.34 0 01-12.986 31.35 44.335 44.335 0 01-31.351 12.984z"
              ></path>
              <path
                id="Vector_11"
                stroke="#020129"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="8"
                d="M137.185 150.453h116V217.2a44.333 44.333 0 01-44.333 44.333h-27.337a44.333 44.333 0 01-44.33-44.333v-66.747z"
              ></path>
              <g id="pencil" filter="url(#filter0_d)">
                <path
                  id="XMLID 126"
                  fill="#47A942"
                  d="M315.741 182v-40H57.296v40h258.445z"
                ></path>
                <path
                  id="XMLID 22"
                  stroke="#1F2120"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeMiterlimit="10"
                  strokeWidth="8"
                  d="M315.741 182v-40H57.296v40h258.445z"
                ></path>
                <path
                  id="XMLID 128"
                  stroke="#1F2120"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeMiterlimit="10"
                  strokeWidth="8"
                  d="M315.741 169.408v-14.815H57.296v14.815h258.445z"
                ></path>
                <path
                  id="XMLID 129"
                  fill="#C4C4C4"
                  d="M315.741 182v-40l59.703 20-59.703 20z"
                ></path>
                <path
                  id="XMLID 23"
                  stroke="#1F2120"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeMiterlimit="10"
                  strokeWidth="8"
                  d="M315.741 182v-40l59.703 20-59.703 20z"
                ></path>
                <path
                  id="XMLID 130"
                  fill="#C4C4C4"
                  d="M57.296 142v40H44.037C35.741 182 29 175.259 29 166.963v-9.926C29 148.741 35.74 142 44.037 142h13.26z"
                ></path>
                <path
                  id="XMLID 24"
                  stroke="#1F2120"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeMiterlimit="10"
                  strokeWidth="8"
                  d="M57.296 142v40H44.037C35.741 182 29 175.259 29 166.963v-9.926C29 148.741 35.74 142 44.037 142h13.26v0z"
                ></path>
                <path
                  id="XMLID 127"
                  fill="#CC0"
                  d="M83.593 182v-40H57.37v40h26.223z"
                ></path>
                <path
                  id="XMLID 25"
                  stroke="#1F2120"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeMiterlimit="10"
                  strokeWidth="8"
                  d="M83.593 182v-40H57.37v40h26.223z"
                ></path>
                <path
                  id="XMLID 29"
                  fill="#1F2120"
                  d="M375.444 162l-24.074-8.074v16.148L375.444 162z"
                ></path>
              </g>
              <path
                id="Vector_12"
                fill="#F9A991"
                d="M166.182 142.791c0-8.008-6.492-14.5-14.5-14.5s-14.5 6.492-14.5 14.5v32.869c0 8.008 6.492 14.5 14.5 14.5s14.5-6.492 14.5-14.5v-32.869z"
              ></path>
              <path
                id="Vector_13"
                fill="#F9A991"
                d="M195.182 136.162c0-8.008-6.492-14.5-14.5-14.5s-14.5 6.492-14.5 14.5v39.389c0 8.008 6.492 14.5 14.5 14.5s14.5-6.492 14.5-14.5v-39.389z"
              ></path>
              <path
                id="Vector_14"
                fill="#F9A991"
                d="M224.182 134.953c0-8.008-6.492-14.5-14.5-14.5s-14.5 6.492-14.5 14.5v40.598c0 8.008 6.492 14.5 14.5 14.5s14.5-6.492 14.5-14.5v-40.598z"
              ></path>
              <path
                id="Vector_15"
                fill="#F9A991"
                d="M253.182 143.896c0-8.008-6.492-14.5-14.5-14.5s-14.5 6.492-14.5 14.5v29.551c0 8.008 6.492 14.5 14.5 14.5s14.5-6.492 14.5-14.5v-29.551z"
              ></path>
              <path
                id="Vector_16"
                fill="#F98568"
                d="M155.323 175.2h-7.283a10.86 10.86 0 01-10.855-10.864v11.324a14.5 14.5 0 0029 0v-11.324a10.866 10.866 0 01-3.18 7.683 10.851 10.851 0 01-7.682 3.181z"
              ></path>
              <path
                id="Vector_17"
                fill="#F98568"
                d="M184.323 175.086h-7.283a10.86 10.86 0 01-10.855-10.858v11.323a14.5 14.5 0 0029 0v-11.323a10.855 10.855 0 01-6.706 10.033c-1.317.545-2.73.826-4.156.825z"
              ></path>
              <path
                id="Vector_18"
                fill="#FFA183"
                d="M213.323 175.086h-7.283a10.86 10.86 0 01-10.855-10.858v11.323a14.5 14.5 0 0029 0v-11.323a10.855 10.855 0 01-6.706 10.033c-1.317.545-2.73.826-4.156.825z"
                opacity="0.58"
              ></path>
              <path
                id="Vector_19"
                fill="#FFA183"
                d="M242.323 172.982h-7.283a10.858 10.858 0 01-10.855-10.859v11.323a14.5 14.5 0 0029 0v-11.323a10.855 10.855 0 01-6.705 10.033 10.862 10.862 0 01-4.157.826z"
                opacity="0.58"
              ></path>
              <path
                id="Vector_20"
                fill="#fff"
                d="M151.685 128.291a14.5 14.5 0 00-14.5 14.5v9.6a14.495 14.495 0 014.247-10.253 14.493 14.493 0 0110.253-4.247 14.495 14.495 0 0110.253 4.247 14.495 14.495 0 014.247 10.253v-9.6a14.5 14.5 0 00-14.5-14.5z"
                opacity="0.43"
              ></path>
              <path
                id="Vector_21"
                fill="#fff"
                d="M180.685 121.662a14.5 14.5 0 00-14.5 14.5v9.6a14.5 14.5 0 0129 0v-9.6a14.5 14.5 0 00-14.5-14.5z"
                opacity="0.43"
              ></path>
              <path
                id="Vector_22"
                fill="#fff"
                d="M209.685 120.453a14.5 14.5 0 00-14.5 14.5v9.6a14.5 14.5 0 0129 0v-9.6a14.5 14.5 0 00-14.5-14.5z"
                opacity="0.43"
              ></path>
              <path
                id="Vector_23"
                fill="#fff"
                d="M238.685 129.4a14.5 14.5 0 00-14.5 14.5v9.6a14.5 14.5 0 0129 0v-9.6a14.5 14.5 0 00-14.5-14.5z"
                opacity="0.43"
              ></path>
              <path
                id="Vector_24"
                stroke="#020129"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="8"
                d="M166.182 142.791c0-8.008-6.492-14.5-14.5-14.5s-14.5 6.492-14.5 14.5v32.869c0 8.008 6.492 14.5 14.5 14.5s14.5-6.492 14.5-14.5v-32.869z"
              ></path>
              <path
                id="Vector_25"
                stroke="#020129"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="8"
                d="M195.182 136.162c0-8.008-6.492-14.5-14.5-14.5s-14.5 6.492-14.5 14.5v39.389c0 8.008 6.492 14.5 14.5 14.5s14.5-6.492 14.5-14.5v-39.389z"
              ></path>
              <path
                id="Vector_26"
                stroke="#020129"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="8"
                d="M224.182 134.953c0-8.008-6.492-14.5-14.5-14.5s-14.5 6.492-14.5 14.5v40.598c0 8.008 6.492 14.5 14.5 14.5s14.5-6.492 14.5-14.5v-40.598z"
              ></path>
              <path
                id="Vector_27"
                stroke="#020129"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="8"
                d="M253.182 143.896c0-8.008-6.492-14.5-14.5-14.5s-14.5 6.492-14.5 14.5v29.551c0 8.008 6.492 14.5 14.5 14.5s14.5-6.492 14.5-14.5v-29.551z"
              ></path>
              <path
                id="Vector_28"
                fill="#F9A991"
                d="M232.685 206.453h-25a14.5 14.5 0 01-14.5-14.5 14.5 14.5 0 0114.5-14.5h31a14.5 14.5 0 0114.5 14.5v14.5h-20.5z"
              ></path>
              <path
                id="Vector_29"
                fill="#F98568"
                d="M207.685 197.632a14.502 14.502 0 01-13.812-10.09 14.52 14.52 0 00-.565 6.307 14.765 14.765 0 0014.765 12.6h28.652a8.818 8.818 0 00-2.584-6.237 8.816 8.816 0 00-6.237-2.584l-20.219.004z"
              ></path>
              <path
                id="Vector_30"
                fill="#fff"
                d="M238.685 177.453h-31a14.5 14.5 0 00-13.869 18.732 14.506 14.506 0 0113.869-10.268h31a14.5 14.5 0 0114.5 14.5v-8.464a14.5 14.5 0 00-14.5-14.5z"
                opacity="0.43"
              ></path>
              <path
                id="Vector_31"
                stroke="#020129"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="8"
                d="M232.685 206.453h-25a14.5 14.5 0 01-14.5-14.5v0a14.5 14.5 0 0114.5-14.5h31a14.5 14.5 0 0114.5 14.5v14.5"
              ></path>
              <path
                id="Vector_32"
                stroke="#0A002D"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="4.022"
                d="M204.533 187.542h7.129a4.947 4.947 0 004.971-4.916v0"
              ></path>
              <g id="cuff">
                <path
                  id="Vector_33"
                  fill="#2561A1"
                  d="M144.185 359.977a148.64 148.64 0 00102 0v-66.22h-102v66.22z"
                ></path>
                <path
                  id="Vector_34"
                  fill="#2561A1"
                  d="M144.185 359.977a148.64 148.64 0 00102 0v-66.22h-102v66.22z"
                ></path>
                <path
                  id="Vector_35"
                  fill="#2561A1"
                  d="M144.185 359.977a148.64 148.64 0 00102 0v-66.22h-102v66.22z"
                ></path>
                <path
                  id="Vector_36"
                  fill="#1C5393"
                  d="M144.185 293.757v66.22a147.716 147.716 0 0051 9.023v-75.243h-51z"
                ></path>
                <path
                  id="Vector_37"
                  fill="#A4C7E2"
                  d="M246.182 293.757h-102v8.577h102v-8.577z"
                ></path>
                <path
                  id="Vector_38"
                  stroke="#020129"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="8"
                  d="M144.185 356.037a5.574 5.574 0 003.806 5.278 148.745 148.745 0 0094.387 0 5.576 5.576 0 003.807-5.278v-62.28h-102v62.28z"
                ></path>
              </g>
            </g>
          </g>
        </g>
      </g>
      <defs>
        <filter
          id="filter0_d"
          width="362.444"
          height="56"
          x="21"
          y="138"
          colorInterpolationFilters="sRGB"
          filterUnits="userSpaceOnUse"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
          <feColorMatrix
            in="SourceAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          ></feColorMatrix>
          <feOffset dy="4"></feOffset>
          <feGaussianBlur stdDeviation="2"></feGaussianBlur>
          <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"></feColorMatrix>
          <feBlend
            in2="BackgroundImageFix"
            result="effect1_dropShadow"
          ></feBlend>
          <feBlend
            in="SourceGraphic"
            in2="effect1_dropShadow"
            result="shape"
          ></feBlend>
        </filter>
      </defs>
    </svg>
  );
}

export default Power;
