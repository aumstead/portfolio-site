import styles from "./Knife.module.scss";
import { useEffect, useRef, useState } from "react";

// Hint animation logic involving timeouts, state, and useEffects explained in ../Writing/Book.js

function Knife({ setMouseEnteredKnife, onMobile }) {
  const [animateHint, setAnimateHint] = useState(false);
  const [timerFunc, setTimerFunc] = useState(false);
  const [cancelAnimation, setCancelAnimation] = useState(false);

  const knifeRef = useRef(null);

  useEffect(() => {
    // create tl property on current in order to not overwrite DOM element
    knifeRef.current.tl = gsap
      .timeline()
      .to("#filer", 1, { rotate: 45, transformOrigin: "-20% 110%" })
      .to("#corkscrew", 1, { rotate: 50, transformOrigin: "-10% 100%" }, "<.2")
      .to("#can-opener", 1, { rotate: 70, transformOrigin: "40% 100%" }, "<.2")
      .to("#blade", 1, { rotate: 110, transformOrigin: "80% 99%" }, "<.2")
      .to("#blade", 1, { rotate: 0, transformOrigin: "80% 99%" }, "<11")
      .to("#can-opener", 1, { rotate: 0, transformOrigin: "40% 100%" }, "<.2")
      .to("#corkscrew", 1, { rotate: 0, transformOrigin: "-10% 100%" }, "<.2")
      .to("#filer", 1, { rotate: 0, transformOrigin: "-20% 110%" }, "<.2")

    knifeRef.current.tl.pause();
  }, []);

  let firstTimeout;
  let secondTimeout;

  useEffect(() => {
    if (!cancelAnimation) {
      firstTimeout = setTimeout(() => {
        setAnimateHint(true);
      }, 10000);
    }

    return () => clearTimeout(firstTimeout);
  }, [timerFunc]);

  useEffect(() => {
    if (animateHint && !cancelAnimation) {
      knifeRef.current.classList.add(`${styles.vibrate}`);
      secondTimeout = setTimeout(() => {
        knifeRef.current.classList.remove(`${styles.vibrate}`);
        setTimerFunc((prevState) => !prevState);
        setAnimateHint(false);
      }, 6000);
    }
    return () => clearTimeout(secondTimeout);
  }, [animateHint]);

  // function is used for both onMouseEnter and onClick events (desktop vs mobile)
  function handleMouseEnter() {
    setMouseEnteredKnife((prevState) => !prevState);
    clearTimeout(firstTimeout);
    clearTimeout(secondTimeout);
    setCancelAnimation(true);
    knifeRef.current.tl.restart();
  }
  return (
    <svg
      ref={knifeRef}
      onMouseEnter={onMobile ? null : handleMouseEnter}
      onClick={onMobile ? handleMouseEnter : null}
      className={styles.knife}
      width="460"
      height="393"
      viewBox="0 0 460 393"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="knife">
        <g id="filer">
          <path
            id="XMLID 16"
            d="M202.3 263.1L206.7 254.1L216.3 256.8L220.7 247.8L230.4 250.5L234.8 241.5L244.5 244.2L248.9 235.2L258.6 237.9L263 228.9L272.7 231.6L277.1 222.6L286.8 225.3L291.2 216.3L300.9 219L305.3 210L315 212.7L319.4 203.7L329.1 206.4L333.5 197.4L343.2 200.1L347.6 191.1L341.8 183.3C334.7 173.7 321.9 170.3 311 175.2L183.2 232.8L202.3 263.1Z"
            fill="#D2DDE1"
          />
          <path
            id="XMLID 5"
            d="M202.3 263.1L206.7 254.1L216.3 256.8L220.7 247.8L230.4 250.5L234.8 241.5L244.5 244.2L248.9 235.2L258.6 237.9L263 228.9L272.7 231.6L277.1 222.6L286.8 225.3L291.2 216.3L300.9 219L305.3 210L315 212.7L319.4 203.7L329.1 206.4L333.5 197.4L343.2 200.1L347.6 191.1L341.8 183.3C334.7 173.7 321.9 170.3 311 175.2L183.2 232.8L202.3 263.1Z"
            stroke="#474747"
            strokeWidth="6"
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>
        <g id="can-opener">
          <path
            id="XMLID 13"
            d="M178.8 222.7C167.6 233.3 157.9 226.8 158.1 217.9C158.5 203.6 166 188.6 174 177.2C178.7 170.4 190.8 158.2 197.5 163.5L213.9 91.3L187.7 57.1L182.9 65.3C171.4 85.1 161.2 105.5 152.3 126.6C143.3 147.8 136 169.6 130 191.9L103 292.7L150.2 307.9C150.2 307.9 165.8 291.2 170.4 280.8C183 252.2 189.1 226.5 189.1 226.5L178.8 222.7Z"
            fill="#D2DDE1"
          />
          <path
            id="XMLID 7"
            d="M178.8 222.7C167.6 233.3 157.9 226.8 158.1 217.9C158.5 203.6 166 188.6 174 177.2C178.7 170.4 190.1 160.9 197.5 163.5L213.9 91.3L187.7 57.1L182.9 65.3C171.4 85.1 161.2 105.5 152.3 126.6C143.3 147.8 136 169.6 130 191.9L103 292.7L150.2 307.9C150.2 307.9 165.8 291.2 170.4 280.8C183 252.2 189.1 226.5 189.1 226.5L178.8 222.7Z"
            stroke="#474747"
            strokeWidth="6"
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            id="XMLID 32"
            d="M165.8 129.8C165.8 129.8 150.5 168.5 146.2 189.8"
            stroke="#474747"
            strokeWidth="3"
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>
        <g id="corkscrew">
          <path
            id="XMLID 15"
            d="M175.7 242.8L190 242.3C193 242.2 194.9 240 194.5 237L192.5 222.8L206.8 222.3C209.8 222.2 211.7 220 211.3 217L209.3 202.8L223.6 202.3C226.6 202.2 228.5 200 228.1 197L226.1 182.8L240.4 182.3C243.4 182.2 245.3 180 244.9 177L242.9 162.8L257.2 162.3C260.2 162.2 262.1 160 261.7 157L259.7 142.8L275.3 141.3C278.7 141 280.4 137.9 279 134.4L265.6 100.9L262 127.7L248.2 128.2C244.9 128.3 242.8 130.8 243.3 134L245.2 147.7L231.4 148.2C228.1 148.3 226 150.8 226.5 154L228.4 167.7L214.6 168.2C211.3 168.3 209.2 170.8 209.7 174L211.6 187.7L197.8 188.2C194.5 188.3 192.4 190.8 192.9 194L194.8 207.7L181 208.2C177.7 208.3 175.6 210.8 176.1 214L178 227.7L158.5 228.4L139.8 250.7L163.2 270.3L175.7 242.8Z"
            fill="#BCC6C9"
          />
          <path
            id="XMLID 6"
            d="M175.7 242.8L190 242.3C193 242.2 194.9 240 194.5 237L192.5 222.8L206.8 222.3C209.8 222.2 211.7 220 211.3 217L209.3 202.8L223.6 202.3C226.6 202.2 228.5 200 228.1 197L226.1 182.8L240.4 182.3C243.4 182.2 245.3 180 244.9 177L242.9 162.8L257.2 162.3C260.2 162.2 262.1 160 261.7 157L259.7 142.8L275.3 141.3C278.7 141 280.4 137.9 279 134.4L265.6 100.9L262 127.7L248.2 128.2C244.9 128.3 242.8 130.8 243.3 134L245.2 147.7L231.4 148.2C228.1 148.3 226 150.8 226.5 154L228.4 167.7L214.6 168.2C211.3 168.3 209.2 170.8 209.7 174L211.6 187.7L197.8 188.2C194.5 188.3 192.4 190.8 192.9 194L194.8 207.7L181 208.2C177.7 208.3 175.6 210.8 176.1 214L178 227.7L158.5 228.4L139.8 250.7L163.2 270.3L175.7 242.8Z"
            stroke="#474747"
            strokeWidth="6"
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>
        <g id="blade">
          <path
            id="XMLID 11"
            d="M139.8 297.9L65.1 312.9L3 3C44.9 14.4 77.4 47.4 88.4 89.4L139.8 297.9Z"
            fill="#BACED3"
          />
          <path
            id="XMLID 12"
            d="M24.3 11L90.0001 307.9L139.7 297.9L88.3 89.3C79.4 54.8 55.7 26.4 24.3 11Z"
            fill="#E7EFF1"
          />
          <path
            id="XMLID 14"
            d="M85.7 242.7L116.5 234.2"
            stroke="#474747"
            strokeWidth="3"
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            id="XMLID 30"
            d="M62.3 182.5L72.4001 228.2"
            stroke="#474747"
            strokeWidth="3"
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            id="XMLID 20"
            d="M30.1001 36.9L58.5001 165.3"
            stroke="#474747"
            strokeWidth="3"
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            id="XMLID 4"
            d="M139.8 297.9L65.1 312.9L3 3C44.9 14.4 77.4 47.4 88.4 89.4L139.8 297.9Z"
            stroke="#474747"
            strokeWidth="6"
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>
        <path
          id="XMLID 8"
          d="M386.8 389.7H126.8C88.1 389.7 56.8 358.4 56.8 319.7C56.8 281 88.1 249.7 126.8 249.7H386.8C425.5 249.7 456.8 281 456.8 319.7C456.8 358.4 425.5 389.7 386.8 389.7Z"
          fill="#50B56F"
        />
        <path
          id="XMLID 46"
          d="M386.8 249.7H126.8C88.1 249.7 56.8 281 56.8 319.7C56.8 322.2 56.9 324.8 57.2 327.2C61 292.1 90.7001 264.7 126.8 264.7H386.8C422.9 264.7 452.6 292.1 456.4 327.2C456.7 324.7 456.8 322.2 456.8 319.7C456.8 281.1 425.5 249.7 386.8 249.7Z"
          fill="#50B56F"
        />
        <path
          id="XMLID 47"
          d="M386.8 373.7H126.8C90.9 373.7 61.3 346.6 57.3 311.7C57 314.3 56.8 317 56.8 319.7C56.8 358.4 88.1 389.7 126.8 389.7H386.8C425.5 389.7 456.8 358.4 456.8 319.7C456.8 317 456.6 314.3 456.3 311.7C452.4 346.6 422.8 373.7 386.8 373.7Z"
          fill="#50B56F"
        />
        <path
          id="XMLID 21"
          d="M131.1 344.9C145.018 344.9 156.3 333.618 156.3 319.7C156.3 305.782 145.018 294.5 131.1 294.5C117.182 294.5 105.9 305.782 105.9 319.7C105.9 333.618 117.182 344.9 131.1 344.9Z"
          fill="#D2DDE1"
        />
        <path
          id="XMLID 36"
          opacity="0.2"
          d="M110.7 356.6C97.7 349.4 88.9 335.6 88.9 319.7C88.9 310.3 92 301.6 97.3 294.5"
          stroke="#474747"
          strokeWidth="6"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          id="XMLID 19"
          d="M131.1 344.9C145.018 344.9 156.3 333.618 156.3 319.7C156.3 305.782 145.018 294.5 131.1 294.5C117.182 294.5 105.9 305.782 105.9 319.7C105.9 333.618 117.182 344.9 131.1 344.9Z"
          stroke="#474747"
          strokeWidth="6"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          id="XMLID 27"
          d="M131.1 303.7V335.8"
          stroke="#474747"
          strokeWidth="6"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          id="XMLID 24"
          d="M147.1 319.7H115"
          stroke="#474747"
          strokeWidth="6"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          id="XMLID 1"
          d="M386.8 389.7H126.8C88.1 389.7 56.8 358.4 56.8 319.7C56.8 281 88.1 249.7 126.8 249.7H386.8C425.5 249.7 456.8 281 456.8 319.7C456.8 358.4 425.5 389.7 386.8 389.7Z"
          stroke="#474747"
          strokeWidth="6"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
    </svg>
  );
}

export default Knife;
