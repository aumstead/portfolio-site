import styles from "./MyStack.module.scss";
import DarkModeContext from "../../../contexts/darkMode/DarkModeContext";
import { useContext, useEffect } from "react";

function MyStack({ mouseEnteredSnes, setMouseEnteredSnes, setMyStackRunning }) {
  const darkModeContext = useContext(DarkModeContext);
  const { isDarkMode } = darkModeContext;

  useEffect(() => {
    if(mouseEnteredSnes) runAnimations()
  }, [mouseEnteredSnes])

  function runAnimations() {
    setTimeout(() => {
      setMouseEnteredSnes(false)
      setMyStackRunning(false)
    }, 15200);

    resetsAndRemoveClasses()
    
    const jsGear = gsap.to("#js-gear", {
      duration: 15,
      ease: Linear.easeNone,
      rotate: 860,
      transformOrigin: "50% 50%",
    });

    // add css classes that have delayed-staggered animations
    setTimeout(() => {
      document
        .getElementById("html-bubble")
        .classList.add(`${styles.htmlBubble}`);
      document.getElementById("html-dash").classList.add(`${styles.htmlDash}`);
      document.getElementById("client-text-top1").classList.add(`${styles.clientTextTop}`);
      document.getElementById("client-text-top2").classList.add(`${styles.clientTextTop}`);
      document.getElementById("css-line").classList.add(`${styles.cssLine}`);
      document.getElementById("js-line").classList.add(`${styles.jsLine}`);
      document.getElementById("js-bubble").classList.add(`${styles.jsBubble}`);
      document
        .getElementById("css-bubble")
        .classList.add(`${styles.cssBubble}`);
      document.getElementById("client-graphic-1").classList.add(`${styles.clientGraphic}`)
      document.getElementById("client-graphic-2").classList.add(`${styles.clientGraphic}`)
      document.getElementById("client-graphic-3").classList.add(`${styles.clientGraphic}`)
      document.getElementById("client-graphic-4").classList.add(`${styles.clientGraphic}`)
      document
        .getElementById("react-bubble")
        .classList.add(`${styles.reactBubble}`);
      document
        .getElementById("node-bubble")
        .classList.add(`${styles.nodeBubble}`);
      document
        .getElementById("big-textbox")
        .classList.add(`${styles.bigTextbox}`);
      document
        .getElementById("small-textbox")
        .classList.add(`${styles.smallTextbox}`);
      document
        .getElementById("textbox-text")
        .classList.add(`${styles.textboxText}`);
      document
        .getElementById("react-dash")
        .classList.add(`${styles.reactDash}`);
      document.getElementById("node-dash").classList.add(`${styles.nodeDash}`);
      document.getElementById("client-bar-1").classList.add(`${styles.clientBar}`);
      document.getElementById("client-bar-2").classList.add(`${styles.clientBar}`);
      document
        .getElementById("postgres-line")
        .classList.add(`${styles.postgresLine}`);
      document
        .getElementById("postgres-bubble")
        .classList.add(`${styles.postgresBubble}`);
      document
        .getElementById("mongo-bubble")
        .classList.add(`${styles.mongoBubble}`);
      document
        .getElementById("mongo-line")
        .classList.add(`${styles.mongoLine}`);
      document.getElementById("client-text-data1").classList.add(`${styles.clientTextData}`);
      document.getElementById("client-text-data2").classList.add(`${styles.clientTextData}`);
      document.getElementById("client-text-data3").classList.add(`${styles.clientTextData}`);
    }, 200);

    gsap.to("#node-gear", {
      duration: 10.8,
      delay: 4.2,
      ease: Linear.easeNone,
      rotate: 1560,
      transformOrigin: "50% 50%",
    });
    gsap.to("#react-gear", {
      duration: 10.8,
      delay: 4.2,
      ease: Linear.easeNone,
      rotate: 1560,
      transformOrigin: "50% 50%",
    });

    jsGear.eventCallback("onComplete", () => {
      // gsap.set("#js-gear", { rotate: 0 });
      // gsap.set("#node-gear", { rotate: 0 });
      // gsap.set("#react-gear", { rotate: 0 });
    });
  }

  function resetsAndRemoveClasses() {
    // reset the gears so animation can run again
    gsap.set("#js-gear", { rotate: 0 });
    gsap.set("#node-gear", { rotate: 0 });
    gsap.set("#react-gear", { rotate: 0 });

    document
      .getElementById("html-bubble")
      .classList.remove(`${styles.htmlBubble}`);
    document.getElementById("html-dash").classList.remove(`${styles.htmlDash}`);
    document.getElementById("client-text-top1").classList.remove(`${styles.clientTextTop}`);
    document.getElementById("client-text-top2").classList.remove(`${styles.clientTextTop}`);
    document.getElementById("css-line").classList.remove(`${styles.cssLine}`);
    document.getElementById("js-line").classList.remove(`${styles.jsLine}`);
    document.getElementById("js-bubble").classList.remove(`${styles.jsBubble}`);
    document
      .getElementById("css-bubble")
      .classList.remove(`${styles.cssBubble}`);
    document.getElementById("client-graphic-1").classList.remove(`${styles.clientGraphic}`)
    document.getElementById("client-graphic-2").classList.remove(`${styles.clientGraphic}`)
    document.getElementById("client-graphic-3").classList.remove(`${styles.clientGraphic}`)
    document.getElementById("client-graphic-4").classList.remove(`${styles.clientGraphic}`)
    document
      .getElementById("react-bubble")
      .classList.remove(`${styles.reactBubble}`);
    document
      .getElementById("node-bubble")
      .classList.remove(`${styles.nodeBubble}`);
    document
      .getElementById("big-textbox")
      .classList.remove(`${styles.bigTextbox}`);
    document
      .getElementById("small-textbox")
      .classList.remove(`${styles.smallTextbox}`);
    document
      .getElementById("textbox-text")
      .classList.remove(`${styles.textboxText}`);
    document
      .getElementById("react-dash")
      .classList.remove(`${styles.reactDash}`);
    document.getElementById("node-dash").classList.remove(`${styles.nodeDash}`);
    document.getElementById("client-bar-1").classList.remove(`${styles.clientBar}`);
    document.getElementById("client-bar-2").classList.remove(`${styles.clientBar}`);
    document
      .getElementById("postgres-line")
      .classList.remove(`${styles.postgresLine}`);
    document
      .getElementById("postgres-bubble")
      .classList.remove(`${styles.postgresBubble}`);
    document
      .getElementById("mongo-bubble")
      .classList.remove(`${styles.mongoBubble}`);
    document
      .getElementById("mongo-line")
      .classList.remove(`${styles.mongoLine}`);
    document.getElementById("client-text-data1").classList.remove(`${styles.clientTextData}`);
    document.getElementById("client-text-data2").classList.remove(`${styles.clientTextData}`);
    document.getElementById("client-text-data3").classList.remove(`${styles.clientTextData}`);
  }

  return (
    <svg
      className={styles.myStackSvg}
      width={891}
      height={273}
      viewBox="0 0 891 773"
      fill="none"
    >
      <g opacity={0.49} fill="#fff">
        
      </g>
      {/* js gear inner stuff */}
      <g opacity={0.39} fill={isDarkMode ? "#333" : "#fff"}>
        <path
          opacity={0.39}
          d="M114.133 391.112c11.26 0 20.388-9.128 20.388-20.388 0-11.26-9.128-20.388-20.388-20.388-11.26 0-20.388 9.128-20.388 20.388 0 11.26 9.128 20.388 20.388 20.388z"
        />
        <path
          opacity={0.39}
          d="M114.133 379.462a8.738 8.738 0 008.738-8.738 8.738 8.738 0 00-8.738-8.738 8.738 8.738 0 00-8.738 8.738 8.738 8.738 0 008.738 8.738z"
        />
      </g>
      <path
        id="postgres-bubble"
        d="M871.566 482H696.689c-9.77 0-17.689 4.831-17.689 10.79v30.621c0 5.959 7.919 10.79 17.689 10.79h174.877c9.77 0 17.689-4.831 17.689-10.79V492.79c0-5.959-7.919-10.79-17.689-10.79z"
        fill="#0270BB"
        stroke={isDarkMode ? "#eee" : "#1E223B"}
        strokeWidth={2}
        strokeMiterlimit={10}
      />
      <path
        // node background
        id="node-bubble"
        d="M781.951 202H660.304c-6.795 0-12.304 4.831-12.304 10.79v30.621c0 5.959 5.509 10.79 12.304 10.79h121.647c6.795 0 12.304-4.831 12.304-10.79V212.79c0-5.959-5.509-10.79-12.304-10.79z"
        fill="#777BB4"
        stroke={isDarkMode ? "#eee" : "#1E223B"}
        strokeWidth={2}
        strokeMiterlimit={10}
      />
      <path
        // html circle background
        opacity={0.39}
        d="M238.744 184.406c28.469 0 51.548-23.079 51.548-51.548S267.213 81.31 238.744 81.31s-51.548 23.079-51.548 51.548 23.079 51.548 51.548 51.548z"
        fill="#fff"
      />
      <path
        // html box right side
        d="M238.036 133.418l27.847-16.182-.086 30.273-27.847 16.183.086-30.274z"
        stroke="#1E223B"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        // ??
        d="M211.69 118.208l27.847-16.183 26.346 15.211-27.847 16.182-26.346-15.21z"
        stroke="#1E223B"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        // html box top
        d="M211.69 118.208l27.847-16.183 26.346 15.211-27.847 16.182-26.346-15.21z"
        fill="#028B9E"
        stroke="#1E223B"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        // html box left side background
        opacity={0.4}
        d="M238.036 133.418l-.086 30.274-26.346-15.211.086-30.273 26.346 15.21z"
        fill="#028B9E"
        stroke="#1E223B"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        // html box left side border
        d="M238.036 133.418l-.086 30.274-26.346-15.211.086-30.273 26.346 15.21z"
        stroke="#1E223B"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        // html circle outline
        d="M238.744 184.406c28.469 0 51.548-23.079 51.548-51.548S267.213 81.31 238.744 81.31s-51.548 23.079-51.548 51.548 23.079 51.548 51.548 51.548z"
        stroke="#1E223B"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <g
        style={{
          mixBlendMode: "multiply",
        }}
        opacity={0.11}
      >
        <path
          // ??
          d="M597.5 533.737h-282c-9.941 0-18 8.059-18 18v202c0 9.941 8.059 18 18 18h282c9.941 0 18-8.059 18-18v-202c0-9.941-8.059-18-18-18z"
          fill="#161616"
        />
        <path
          d="M597.5 533.737h-282c-9.941 0-18 8.059-18 18v202c0 9.941 8.059 18 18 18h282c9.941 0 18-8.059 18-18v-202c0-9.941-8.059-18-18-18z"
          stroke="#1E223B"
          strokeMiterlimit={10}
        />
      </g>
      <g
        style={{
          mixBlendMode: "multiply",
        }}
        opacity={0.11}
      >
        <path
          // ??
          d="M608.5 519.737h-304a7 7 0 100 14h304a7 7 0 100-14z"
          fill="#161616"
        />
        <path
          // ??
          d="M608.5 519.737h-304a7 7 0 100 14h304a7 7 0 100-14z"
          stroke="#1E223B"
          strokeMiterlimit={10}
        />
      </g>
      <path
        // computer bottom
        d="M587.5 525.737h-282c-9.941 0-18 8.059-18 18v202c0 9.941 8.059 18 18 18h282c9.941 0 18-8.059 18-18v-202c0-9.941-8.059-18-18-18z"
        fill="#2F4584"
      />
      <path
        // computer body
        d="M587.5 525.737h-282c-9.941 0-18 8.059-18 18v196c0 9.941 8.059 18 18 18h282c9.941 0 18-8.059 18-18v-196c0-9.941-8.059-18-18-18z"
        fill="#fff"
      />
      <path
        // keyboard stuff
        opacity={0.15}
        d="M587 543.237H306a4 4 0 00-4 4v113a4 4 0 004 4h281a4 4 0 004-4v-113a4 4 0 00-4-4z"
        fill="#1E223B"
        stroke="#1E223B"
        strokeWidth={2}
        strokeMiterlimit={11}
      />
      <path
        // keyboard border bottom
        d="M587.5 525.737h-282c-9.941 0-18 8.059-18 18v196c0 9.941 8.059 18 18 18h282c9.941 0 18-8.059 18-18v-196c0-9.941-8.059-18-18-18z"
        stroke="#1E223B"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M587.5 525.737h-282c-9.941 0-18 8.059-18 18v202c0 9.941 8.059 18 18 18h282c9.941 0 18-8.059 18-18v-202c0-9.941-8.059-18-18-18z"
        stroke="#1E223B"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M587.5 293.737h-282c-9.941 0-18 8.059-18 18v196c0 9.941 8.059 18 18 18h282c9.941 0 18-8.059 18-18v-196c0-9.941-8.059-18-18-18z"
        fill="#2F4584"
      />
      <path
        d="M587.5 293.737h-282c-9.941 0-18 8.059-18 18v196c0 9.941 8.059 18 18 18h282c9.941 0 18-8.059 18-18v-196c0-9.941-8.059-18-18-18z"
        stroke="#1E223B"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M599.501 507.737v-196c0-6.627-5.373-12-12-12h-282c-6.627 0-12 5.373-12 12v196c0 6.627 5.373 12 12 12h282c6.627 0 12-5.373 12-12z"
        fill="#fff"
      />
      <path
        d="M575.501 495.737v-172h-258v172h258z"
        fill="#FF5855"
        stroke="#1E223B"
        strokeMiterlimit={10}
      />
      <path
        d="M599.501 507.737v-196c0-6.627-5.373-12-12-12h-282c-6.627 0-12 5.373-12 12v196c0 6.627 5.373 12 12 12h282c6.627 0 12-5.373 12-12z"
        stroke="#1E223B"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M575.501 495.737v-172h-258v172h258z"
        stroke="#1E223B"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        // mousepad
        opacity={0.1}
        d="M485.25 673.737h-77.5a4.25 4.25 0 00-4.25 4.25v51.5a4.25 4.25 0 004.25 4.25h77.5a4.25 4.25 0 004.25-4.25v-51.5a4.25 4.25 0 00-4.25-4.25z"
        fill="#1E223B"
      />
      <path
        d="M485.25 673.737h-77.5a4.25 4.25 0 00-4.25 4.25v51.5a4.25 4.25 0 004.25 4.25h77.5a4.25 4.25 0 004.25-4.25v-51.5a4.25 4.25 0 00-4.25-4.25z"
        stroke="#1E223B"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M485 755.737h-76v8h76v-8z" fill="#263C72" />
      <path
        d="M485 755.737h-76v8h76v-8z"
        stroke="#1E223B"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <g
        style={{
          mixBlendMode: "multiply",
        }}
        opacity={0.11}
      >
        <path
          d="M547.5 269.737h-188a6 6 0 00-6 6v212a6 6 0 006 6h188a6 6 0 006-6v-212a6 6 0 00-6-6z"
          fill="#161616"
        />
        <path
          d="M547.5 269.737h-188a6 6 0 00-6 6v212a6 6 0 006 6h188a6 6 0 006-6v-212a6 6 0 00-6-6z"
          stroke="#1E223B"
          strokeMiterlimit={10}
        />
      </g>
      <path
        // browser body background
        d="M542 265.737H354a6 6 0 00-6 6v212a6 6 0 006 6h188a6 6 0 006-6v-212a6 6 0 00-6-6z"
        fill="#fff"
      />
      <path
        // browser body footer background
        d="M348 455.737h200v28a6.003 6.003 0 01-1.757 4.243 6.003 6.003 0 01-4.243 1.757H354a6.003 6.003 0 01-4.243-1.757 6.003 6.003 0 01-1.757-4.243v-28z"
        fill="#EFEFEF"
      />
      <path
        // window outline
        d="M542 265.737H354a6 6 0 00-6 6v212a6 6 0 006 6h188a6 6 0 006-6v-212a6 6 0 00-6-6z"
        stroke="#1E223B"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        // top bar fill
        d="M353.427 265.737h189.146a5.42 5.42 0 015.014 3.351 5.42 5.42 0 01.413 2.077v12.573H348v-12.573a5.42 5.42 0 011.589-3.838 5.428 5.428 0 013.838-1.59z"
        fill="#363D56"
      />
      <path
        // toolbar stuff
        d="M353.427 265.737h189.146a5.42 5.42 0 015.014 3.351 5.42 5.42 0 01.413 2.077v12.573H348v-12.573a5.42 5.42 0 011.589-3.838 5.428 5.428 0 013.838-1.59v0z"
        stroke="#1E223B"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M548 283.737H348v8h200v-8z" fill="#424960" />
      <path
        // toolbar stuff
        d="M548 283.737H348v8h200v-8z"
        stroke="#1E223B"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M359.167 277.737a3 3 0 100-6 3 3 0 000 6z" fill="#F73E39" />
      <path
        d="M359.167 277.737a3 3 0 100-6 3 3 0 000 6z"
        stroke="#1E223B"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M371.435 277.737a3 3 0 100-6 3 3 0 000 6z" fill="#383838" />
      <path
        d="M371.435 277.737a3 3 0 100-6 3 3 0 000 6z"
        stroke="#1E223B"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M382.662 277.737a3 3 0 100-6 3 3 0 000 6z" fill="#C6C6C6" />
      <path
        d="M382.662 277.737a3 3 0 100-6 3 3 0 000 6z"
        stroke="#1E223B"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        // toolbar stuff
        opacity={0.28}
        d="M461.5 271.737h-62a3 3 0 100 6h62a3 3 0 100-6z"
        fill="#8289A3"
      />
      <path
        // js gear outer circle
        d="M114.133 391.112c11.26 0 20.388-9.128 20.388-20.388 0-11.26-9.128-20.388-20.388-20.388-11.26 0-20.388 9.128-20.388 20.388 0 11.26 9.128 20.388 20.388 20.388z"
        stroke={isDarkMode ? "#eee" : "#1E223B"}
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        // js gear inner circle
        d="M114.133 379.462a8.738 8.738 0 008.738-8.738 8.738 8.738 0 00-8.738-8.738 8.738 8.738 0 00-8.738 8.738 8.738 8.738 0 008.738 8.738z"
        stroke={isDarkMode ? "#eee" : "#1E223B"}
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        // js gear outer
        id="js-gear"
        d="M145.878 341.476l-12.612 7.282.019.032a29.101 29.101 0 00-2.907-2.232l.034.01 3.769-14.068a4.37 4.37 0 00-3.089-5.351l-9.847-2.638a4.366 4.366 0 00-5.35 3.089l-3.769 14.067h.021a29.07 29.07 0 00-3.6.474l.016-.01-7.281-12.611a4.355 4.355 0 00-2.652-2.036 4.358 4.358 0 00-3.316.436l-8.828 5.1a4.372 4.372 0 00-2.148 4.353c.075.569.261 1.117.548 1.614l7.281 12.612.016-.009a29.12 29.12 0 00-2.212 2.884l.006-.02-14.067-3.77a4.37 4.37 0 00-5.35 3.09l-2.639 9.846a4.37 4.37 0 003.09 5.351l14.066 3.769.01-.034c.082 1.22.242 2.433.478 3.633l-.018-.032-12.612 7.281a4.37 4.37 0 00-1.6 5.968l5.1 8.828a4.363 4.363 0 004.354 2.148 4.369 4.369 0 001.614-.548l12.611-7.281-.028-.048a28.958 28.958 0 002.944 2.255l-.06-.016-3.77 14.066a4.368 4.368 0 003.09 5.351l9.846 2.638a4.366 4.366 0 005.35-3.089l3.769-14.067-.074-.02a28.691 28.691 0 003.706-.487l-.065.038 7.282 12.611a4.37 4.37 0 005.968 1.6l8.828-5.1a4.37 4.37 0 001.6-5.967l-7.281-12.612-.065.037a28.673 28.673 0 002.275-2.966l-.02.074 14.066 3.77a4.376 4.376 0 004.597-1.561c.35-.455.606-.975.754-1.529l2.638-9.846a4.357 4.357 0 00-.436-3.315 4.37 4.37 0 00-2.653-2.036L143.2 368.72l-.017.061a28.789 28.789 0 00-.481-3.677l.028.049 12.612-7.281a4.372 4.372 0 001.6-5.968l-5.1-8.828a4.367 4.367 0 00-5.964-1.6z"
        stroke={isDarkMode ? "#eee" : "#1E223B"}
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <g
        // ??
        opacity={0.32}
        stroke="#1E223B"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path
          opacity={0.32}
          d="M387.942 333.013a7.72 7.72 0 007.72-7.72 7.72 7.72 0 00-7.72-7.72 7.72 7.72 0 00-7.72 7.72 7.72 7.72 0 007.72 7.72z"
        />
        <path
          opacity={0.32}
          d="M387.942 328.602a3.309 3.309 0 100-6.618 3.309 3.309 0 000 6.618z"
        />
        <path
          opacity={0.32}
          d="M404.274 325.961l-5.327-1.427v.014a10.975 10.975 0 00-.18-1.376l.006.011 4.776-2.757a1.656 1.656 0 00.6-2.26l-1.93-3.342a1.658 1.658 0 00-2.259-.606l-4.776 2.757v.007a10.937 10.937 0 00-1.092-.838h.007l1.427-5.327a1.653 1.653 0 00-1.169-2.026l-3.729-1a1.653 1.653 0 00-2.026 1.17l-1.427 5.326h.007c-.458.032-.914.092-1.365.18h.007l-2.757-4.775a1.658 1.658 0 00-2.26-.606l-3.343 1.93a1.653 1.653 0 00-.605 2.26l2.757 4.776.011-.007c-.304.349-.586.716-.844 1.1v-.014l-5.326-1.427a1.647 1.647 0 00-1.255.165 1.668 1.668 0 00-.771 1.005l-1 3.728a1.656 1.656 0 001.17 2.027l5.326 1.427.006-.021c.031.467.093.932.184 1.392l-.012-.02-4.776 2.757a1.65 1.65 0 00-.771 1.005 1.664 1.664 0 00.166 1.255l1.93 3.342c.108.188.253.353.425.486a1.667 1.667 0 001.224.328 1.66 1.66 0 00.611-.208l4.775-2.757-.014-.025c.355.311.73.599 1.122.861l-.027-.007-1.427 5.327a1.647 1.647 0 00.165 1.255 1.668 1.668 0 001.005.771l3.728 1a1.653 1.653 0 002.026-1.17l1.433-5.327-.027-.007c.47-.031.938-.093 1.4-.185l-.025.015 2.757 4.775a1.656 1.656 0 002.26.606l3.343-1.93a1.653 1.653 0 00.605-2.26l-2.757-4.776-.02.012c.308-.352.594-.724.855-1.113v.02l5.326 1.428a1.653 1.653 0 002.026-1.17l1-3.729a1.654 1.654 0 00-1.169-2.025v0z"
        />
      </g>
      <path id="node-gear-inner2" d="M735.361 158.75C746.621 158.75 755.749 149.622 755.749 138.362C755.749 127.102 746.621 117.974 735.361 117.974C724.101 117.974 714.973 127.102 714.973 138.362C714.973 149.622 724.101 158.75 735.361 158.75Z" stroke={isDarkMode ? "#eee" : "#1E223B"} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
<path id="node-gear-inner1" d="M735.361 147.1C740.186 147.1 744.099 143.188 744.099 138.362C744.099 133.536 740.186 129.624 735.361 129.624C730.535 129.624 726.623 133.536 726.623 138.362C726.623 143.188 730.535 147.1 735.361 147.1Z" stroke={isDarkMode ? "#eee" : "#1E223B"} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
<path id="node-gear" d="M767.106 109.114L754.494 116.396L754.513 116.428C753.592 115.623 752.621 114.878 751.606 114.196L751.64 114.206L755.409 100.138C755.708 99.0185 755.551 97.8261 754.972 96.8227C754.393 95.8192 753.439 95.0869 752.32 94.7867L742.473 92.1487C741.354 91.849 740.161 92.0061 739.158 92.5854C738.155 93.1647 737.423 94.1187 737.123 95.2377L733.354 109.305H733.375C732.166 109.388 730.964 109.546 729.775 109.779L729.791 109.769L722.51 97.1577C722.223 96.6607 721.841 96.225 721.386 95.8756C720.931 95.5262 720.411 95.2699 719.857 95.1213C719.303 94.9727 718.725 94.9348 718.156 95.0096C717.587 95.0845 717.039 95.2708 716.542 95.5577L707.714 100.658C707.217 100.944 706.781 101.326 706.432 101.781C706.082 102.236 705.826 102.756 705.677 103.31C705.529 103.864 705.491 104.442 705.566 105.011C705.64 105.579 705.827 106.128 706.114 106.625L713.395 119.237L713.411 119.228C712.614 120.142 711.875 121.105 711.199 122.112L711.205 122.092L697.138 118.322C696.018 118.022 694.826 118.179 693.823 118.759C692.819 119.338 692.087 120.293 691.788 121.412L689.149 131.258C688.849 132.377 689.006 133.57 689.586 134.573C690.165 135.576 691.119 136.309 692.239 136.609L706.305 140.378L706.314 140.344C706.396 141.564 706.556 142.777 706.793 143.977L706.775 143.945L694.163 151.226C693.159 151.805 692.427 152.759 692.127 153.878C691.827 154.998 691.984 156.19 692.563 157.194L697.663 166.022C697.949 166.519 698.331 166.954 698.786 167.304C699.241 167.653 699.761 167.91 700.315 168.058C700.869 168.207 701.447 168.245 702.016 168.17C702.585 168.095 703.134 167.909 703.631 167.622L716.242 160.341L716.214 160.293C717.146 161.106 718.129 161.859 719.158 162.548L719.097 162.532L715.328 176.598C715.028 177.717 715.185 178.909 715.764 179.913C716.343 180.916 717.297 181.649 718.417 181.949L728.264 184.587C729.383 184.886 730.575 184.729 731.578 184.15C732.582 183.571 733.314 182.617 733.614 181.498L737.383 167.431L737.309 167.411C738.553 167.329 739.791 167.166 741.015 166.924L740.95 166.962L748.232 179.573C748.518 180.07 748.9 180.505 749.355 180.855C749.81 181.204 750.33 181.461 750.884 181.609C751.438 181.758 752.016 181.796 752.585 181.721C753.154 181.646 753.703 181.46 754.2 181.173L763.028 176.073C764.031 175.493 764.763 174.539 765.063 173.42C765.363 172.302 765.207 171.109 764.628 170.106L757.347 157.494L757.282 157.531C758.103 156.592 758.863 155.601 759.557 154.565L759.537 154.639L773.603 158.409C774.157 158.557 774.735 158.595 775.304 158.52C775.873 158.445 776.421 158.259 776.918 157.972C777.415 157.685 777.851 157.303 778.2 156.848C778.549 156.393 778.805 155.873 778.954 155.319L781.592 145.473C781.74 144.918 781.778 144.34 781.703 143.772C781.629 143.203 781.443 142.654 781.156 142.157C780.869 141.66 780.487 141.225 780.032 140.876C779.576 140.526 779.057 140.27 778.503 140.122L764.428 136.358L764.411 136.419C764.329 135.184 764.168 133.956 763.93 132.742L763.958 132.791L776.57 125.51C777.573 124.93 778.305 123.976 778.605 122.857C778.905 121.738 778.749 120.545 778.17 119.542L773.07 110.714C772.49 109.711 771.537 108.98 770.419 108.68C769.3 108.38 768.109 108.536 767.106 109.114Z" stroke={isDarkMode ? "#eee" : "#1E223B"} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path
        // react gear inner circle
        d="M630.432 52.612a8.184 8.184 0 10-.001-16.368 8.184 8.184 0 00.001 16.368z"
        stroke={isDarkMode ? "#eee" : "#1E223B"}
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        // react gear outer circle
        d="M630.431 63.525c10.547 0 19.096-8.55 19.096-19.096 0-10.547-8.549-19.096-19.096-19.096-10.546 0-19.096 8.55-19.096 19.096s8.55 19.096 19.096 19.096z"
        stroke={isDarkMode ? "#eee" : "#1E223B"}
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        // react gear outer
        id="react-gear"
        d="M669.826 46.084l-13.175-3.53-.009.033a27.02 27.02 0 00-.447-3.4l.016.028 11.813-6.82a4.082 4.082 0 001.908-2.484 4.077 4.077 0 00-.408-3.106l-4.771-8.271a4.092 4.092 0 00-5.59-1.5l-11.813 6.82.01.018a26.812 26.812 0 00-2.7-2.074h.017l3.53-13.176a4.09 4.09 0 00-2.894-5.011l-9.222-2.471a4.09 4.09 0 00-5.012 2.893l-3.53 13.175h.017a27.105 27.105 0 00-3.376.445l.018-.01-6.82-11.812a4.092 4.092 0 00-5.59-1.5l-8.269 4.774a4.107 4.107 0 00-1.908 2.484 4.098 4.098 0 00.408 3.106l6.82 11.812.028-.017a27.291 27.291 0 00-2.089 2.724l.009-.034-13.175-3.53a4.092 4.092 0 00-5.012 2.894l-2.471 9.222a4.094 4.094 0 002.893 5.012l13.176 3.53.013-.05c.079 1.156.231 2.306.456 3.443l-.029-.051-11.813 6.82a4.107 4.107 0 00-1.908 2.483 4.096 4.096 0 00.408 3.106l4.774 8.269a4.094 4.094 0 005.59 1.5l11.812-6.82-.035-.063c.879.77 1.807 1.482 2.777 2.132l-.068-.018-3.53 13.175a4.097 4.097 0 002.893 5.012l9.223 2.47a4.09 4.09 0 005.011-2.892l3.531-13.175-.068-.019a27.064 27.064 0 003.471-.457l-.062.035 6.82 11.813a4.092 4.092 0 005.59 1.5l8.268-4.775a4.097 4.097 0 001.909-2.484 4.098 4.098 0 00-.409-3.106l-6.82-11.811-.051.03a26.923 26.923 0 002.116-2.755l-.013.05 13.175 3.532a4.095 4.095 0 005.012-2.895l2.471-9.221a4.09 4.09 0 00-2.896-5.002v0z"
        stroke={isDarkMode ? "#eee" : "#1E223B"}
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        id="big-textbox"
        d="M523.47 163.288h-26.2l-27.34 18.227v-18.227h-19.366a9.113 9.113 0 01-9.113-9.113v-50.123a9.113 9.113 0 019.113-9.113h72.906a9.116 9.116 0 019.114 9.113v50.123a9.116 9.116 0 01-9.114 9.113v0z"
        stroke="#1E223B"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="#fff"
      />
      <path
        id="small-textbox"
        d="M524.4 85.657h16.966l17.7 11.8v-11.8H571.6a5.9 5.9 0 005.9-5.9V47.3a5.902 5.902 0 00-5.9-5.9h-47.2a5.9 5.9 0 00-5.9 5.9v32.455a5.893 5.893 0 001.727 4.173 5.903 5.903 0 004.173 1.729v0z"
        stroke="#1E223B"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="#fff"
      />
      <path
        // bottom right logo stuff
        d="M585.964 721.97a13.23 13.23 0 01-26.21 2.58 13.235 13.235 0 0122.335-11.937 13.235 13.235 0 013.875 9.357z"
        fill="#DD4814"
      />
      <path
        // bottom right logo stuff
        d="M563.734 720.2a1.77 1.77 0 00-1.633 1.089 1.767 1.767 0 101.633-1.089zm12.614 8.029a1.77 1.77 0 00-.446 2.694 1.772 1.772 0 001.896.508 1.765 1.765 0 10-1.45-3.199v-.003zm-8.776-6.263a5.157 5.157 0 012.194-4.221l-1.292-2.164a7.683 7.683 0 00-3.173 4.462 2.477 2.477 0 01.674 2.988 2.477 2.477 0 01-.674.859 7.68 7.68 0 003.173 4.462l1.292-2.164a5.151 5.151 0 01-2.194-4.219v-.003zm5.16-5.16a5.163 5.163 0 015.139 4.7l2.518-.037a7.65 7.65 0 00-2.28-4.978 2.48 2.48 0 01-3.327-1.923 7.671 7.671 0 00-5.451.516l1.227 2.2a5.145 5.145 0 012.174-.475v-.003zm0 10.321a5.135 5.135 0 01-2.174-.48l-1.227 2.2a7.676 7.676 0 005.451.515 2.481 2.481 0 013.327-1.923 7.65 7.65 0 002.28-4.978l-2.518-.037a5.16 5.16 0 01-5.139 4.706v-.003zm3.616-11.423a1.771 1.771 0 001.958-.129 1.767 1.767 0 10-1.958.132v-.003z"
        fill="#fff"
      />
      <path
        // css box right side
        d="M129.132 602.759l28.057-16.306-.086 30.503-28.058 16.305.087-30.502z"
        fill="#777BB4"
      />
      <path
        // css box right side outline
        d="M129.132 602.759l28.057-16.306-.086 30.503-28.058 16.305.087-30.502z"
        stroke="#1E223B"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        // css box top
        opacity={0.88}
        d="M102.587 587.433l28.057-16.306 26.545 15.326-28.057 16.306-26.545-15.326z"
        fill="#FF5855"
        stroke="#1E223B"
        strokeMiterlimit={10}
      />
      <path
        // css box left side
        d="M129.132 602.759l-.087 30.502-26.545-15.326.087-30.502 26.545 15.326z"
        fill="#0270BB"
      />
      <path
        d="M102.587 587.433l28.057-16.306 26.545 15.326-28.057 16.306-26.545-15.326zM129.132 602.759l-.087 30.502-26.545-15.326.087-30.502 26.545 15.326z"
        stroke="#1E223B"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        opacity={0.59}
        d="M108.545 559.737a6 6 0 100-12 6 6 0 000 12z"
        fill="#fff"
      />
      <path
        // left dot
        d="M108.545 559.737a6 6 0 100-12 6 6 0 000 12z"
        stroke="#1E223B"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        // css middle dot fill
        opacity={0.59}
        d="M129.045 559.737a6 6 0 100-12 6 6 0 000 12z"
        fill="#fff"
      />
      <path
        // middle dot
        d="M129.045 559.737a6 6 0 100-12 6 6 0 000 12z"
        stroke="#1E223B"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        opacity={0.59}
        d="M149.545 559.737a6 6 0 100-12 6 6 0 000 12z"
        fill="#fff"
      />
      <path
        opacity={0.32}
        d="M833.25 470.49c21.815 0 39.5-17.685 39.5-39.5s-17.685-39.5-39.5-39.5-39.5 17.685-39.5 39.5 17.685 39.5 39.5 39.5z"
        fill="#fff"
      />
      <path
        d="M149.545 559.737a6 6 0 100-12 6 6 0 000 12z"
        stroke="#1E223B"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        opacity={0.12}
        d="M833.792 431.419l-21.338-12.4.065 23.198 21.339 12.4-.066-23.198z"
        fill="#0270BB"
      />
      <path
        d="M833.792 431.419l-21.338-12.4.065 23.198 21.339 12.4-.066-23.198z"
        stroke="#1E223B"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        opacity={0.47}
        d="M853.98 419.764l-21.338-12.401-20.188 11.656 21.338 12.4 20.188-11.655z"
        fill="#0270BB"
      />
      <path
        d="M853.98 419.764l-21.338-12.401-20.188 11.656 21.338 12.4 20.188-11.655z"
        stroke="#1E223B"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M833.792 431.419l.066 23.198 20.188-11.655-.066-23.198-20.188 11.655z"
        fill="#fff"
        stroke="#1E223B"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M833.792 431.419l.066 23.198 20.188-11.655-.066-23.198-20.188 11.655z"
        stroke="#1E223B"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M833.25 470.49c21.815 0 39.5-17.685 39.5-39.5s-17.685-39.5-39.5-39.5-39.5 17.685-39.5 39.5 17.685 39.5 39.5 39.5z"
        stroke="#1E223B"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        // css bubble
        id="css-bubble"
        d="M170.983 641H85.095C78.968 641 74 645.048 74 650.042v27.125c0 4.994 4.968 9.042 11.095 9.042h85.888c6.128 0 11.095-4.048 11.095-9.042v-27.125c0-4.994-4.967-9.042-11.095-9.042z"
        fill="#0270BB"
        stroke={isDarkMode ? "#eee" : "#1E223B"}
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        id='client-graphic-1'
        d="M515.063 464.987c.281.407.453.375.671.282.218-.093 11.469-3.891 11.813-4.016.344-.125.234-.234.125-.406-.109-.172-3.859-5.266-4.047-5.563-.188-.297-.281-.234-.578-.14l-11.926 3.1s3.66 6.334 3.942 6.74v.003zM528.5 459.8v-5.963l-3.709.988c1.011 1.352 2.591 3.468 3.709 4.975zM524.78 447.483c-.184.041-4.254.777-4.5.81-.246.033-.167.176-.067.318l3.581 4.914s4.379-1.087 4.647-1.145l.063-.015v-.651a503.26 503.26 0 01-3.152-4.014c-.225-.309-.384-.259-.568-.217h-.004z"
        fill="#F35045"
      />
      <path
        id='client-graphic-2'
        d="M499.174 439.764c.881-.04.961.161 1.348.735l9.728 16.262 12.23-2.93a4201.33 4201.33 0 00-4.051-5.738c-.334-.468.008-.686.551-.777.543-.091 5.223-.878 5.624-.936.401-.058.719-.2 1.371.585.333.4 1.464 1.809 2.525 3.129v-7.607a6.76 6.76 0 00-6.75-6.75h-22.5a6.502 6.502 0 00-4.769 1.981 6.618 6.618 0 00-1.62 2.538c2.205-.181 5.7-.464 6.313-.492z"
        fill="#F35045"
      />
      <path
        id='client-graphic-3'
        d="M516.166 467.176c-1.032.313-1.494.468-2.166-.47-.5-.7-3.224-5.6-4.558-8.019-2.525.662-7.146 1.868-8.478 2.188a1.642 1.642 0 01-2.07-.948c-.15-.337-3.963-8.558-6.394-13.832v18.892a6.757 6.757 0 001.981 4.769 6.757 6.757 0 004.769 1.981h22.5a6.763 6.763 0 006.75-6.75v-2.219c-2.762 1.01-11.639 4.2-12.334 4.408z"
        fill="#F35045"
      />
      <path
        id='client-graphic-4'
        d="M501 458.981c.365-.084 7.215-1.723 7.362-1.754.147-.031.24-.115.083-.387l-9.131-15.762c-.083-.142-.059-.19-.284-.178-.2.011-5.279.464-6.455.562a6.983 6.983 0 00-.065.75c1.194 2.443 8.044 16.57 8.082 16.685.038.115.042.168.408.084z"
        fill="#F35045"
      />
      <path
        id='client-text-top1'
        d="M410.5 321.737h94M410.5 329.737h60"
        stroke="#1E223B"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        id='client-text-top2'
        d="M382.5 368.737h94"
        stroke="#1E223B"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        id='client-text-data1'
        d="M382.5 377.404h60M430.5 386.071h35"
        stroke="#1E223B"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        id='client-text-data2'
        d="M382.5 386.071h42"
        stroke="#1E223B"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        id='client-text-data3'
        d="M382.5 394.737h36"
        stroke="#1E223B"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        id='client-bar-1'
        d="M386.5 411.071a3.995 3.995 0 00-2.828 1.172 3.995 3.995 0 000 5.656 3.995 3.995 0 002.828 1.172h80.667v-8H386.5z"
        fill="#4AD3A5"
        stroke="#1E223B"
        strokeMiterlimit={10}
      />
      <path
        id='client-bar-2'
        d="M512.5 411.071h-126a4 4 0 000 8h126a4 4 0 000-8z"
        stroke="#1E223B"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M583.25 515.737h-273.5a2.25 2.25 0 00-2.25 2.25v8.5a2.25 2.25 0 002.25 2.25h273.5a2.25 2.25 0 002.25-2.25v-8.5a2.25 2.25 0 00-2.25-2.25z"
        fill="#263C72"
      />
      <path
        d="M585.5 515.737h-278v13h278v-13z"
        stroke="#1E223B"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        // keyboard
        d="M582.5 547.737h-16a3 3 0 00-3 3v6a3 3 0 003 3h16a3 3 0 003-3v-6a3 3 0 00-3-3zM550.5 547.737h-16a3 3 0 00-3 3v6a3 3 0 003 3h16a3 3 0 003-3v-6a3 3 0 00-3-3zM518.5 547.737h-16a3 3 0 00-3 3v6a3 3 0 003 3h16a3 3 0 003-3v-6a3 3 0 00-3-3zM486.5 547.737h-16a3 3 0 00-3 3v6a3 3 0 003 3h16a3 3 0 003-3v-6a3 3 0 00-3-3zM454.5 547.737h-16a3 3 0 00-3 3v6a3 3 0 003 3h16a3 3 0 003-3v-6a3 3 0 00-3-3zM422.5 547.737h-16a3 3 0 00-3 3v6a3 3 0 003 3h16a3 3 0 003-3v-6a3 3 0 00-3-3zM390.5 547.737h-16a3 3 0 00-3 3v6a3 3 0 003 3h16a3 3 0 003-3v-6a3 3 0 00-3-3zM358.5 547.737h-16a3 3 0 00-3 3v6a3 3 0 003 3h16a3 3 0 003-3v-6a3 3 0 00-3-3zM326.5 547.737h-16a3 3 0 00-3 3v6a3 3 0 003 3h16a3 3 0 003-3v-6a3 3 0 00-3-3zM518.5 573.214h-16a3 3 0 00-3 3v16a3 3 0 003 3h16a3 3 0 003-3v-16a3 3 0 00-3-3zM486.5 573.214h-16a3 3 0 00-3 3v16a3 3 0 003 3h16a3 3 0 003-3v-16a3 3 0 00-3-3zM454.5 573.214h-16a3 3 0 00-3 3v16a3 3 0 003 3h16a3 3 0 003-3v-16a3 3 0 00-3-3zM422.5 573.214h-16a3 3 0 00-3 3v16a3 3 0 003 3h16a3 3 0 003-3v-16a3 3 0 00-3-3zM390.5 573.214h-16a3 3 0 00-3 3v16a3 3 0 003 3h16a3 3 0 003-3v-16a3 3 0 00-3-3zM358.5 573.214h-16a3 3 0 00-3 3v16a3 3 0 003 3h16a3 3 0 003-3v-16a3 3 0 00-3-3zM326.5 573.214h-16a3 3 0 00-3 3v16a3 3 0 003 3h16a3 3 0 003-3v-16a3 3 0 00-3-3zM582.5 573.214h-16a3 3 0 00-3 3v47.512a3 3 0 003 3h16a3 3 0 003-3v-47.512a3 3 0 00-3-3z"
        fill="#363D56"
      />
      <path
        d="M550.5 573.214h-16c-.796 0-1.559.316-2.121.879a2.996 2.996 0 00-.879 2.121v25.512c0 .796-.316 1.559-.879 2.121a2.996 2.996 0 01-2.121.879h-26c-.796 0-1.559.316-2.121.879a2.996 2.996 0 00-.879 2.121v16c0 .796.316 1.559.879 2.121a2.996 2.996 0 002.121.879h48c.796 0 1.559-.316 2.121-.879a2.996 2.996 0 00.879-2.121v-47.512c0-.796-.316-1.559-.879-2.121a2.996 2.996 0 00-2.121-.879zM486.5 604.726h-16a3 3 0 00-3 3v16a3 3 0 003 3h16a3 3 0 003-3v-16a3 3 0 00-3-3zM454.5 604.726h-16a3 3 0 00-3 3v16a3 3 0 003 3h16a3 3 0 003-3v-16a3 3 0 00-3-3zM422.5 604.726h-16a3 3 0 00-3 3v16a3 3 0 003 3h16a3 3 0 003-3v-16a3 3 0 00-3-3zM390.5 604.726h-16a3 3 0 00-3 3v16a3 3 0 003 3h16a3 3 0 003-3v-16a3 3 0 00-3-3zM358.5 604.726h-48a3 3 0 00-3 3v16a3 3 0 003 3h48a3 3 0 003-3v-16a3 3 0 00-3-3zM582.5 636.237h-16a3 3 0 00-3 3v16a3 3 0 003 3h16a3 3 0 003-3v-16a3 3 0 00-3-3zM550.5 636.237h-16a3 3 0 00-3 3v16a3 3 0 003 3h16a3 3 0 003-3v-16a3 3 0 00-3-3zM518.5 636.237h-16a3 3 0 00-3 3v16a3 3 0 003 3h16a3 3 0 003-3v-16a3 3 0 00-3-3zM486.5 636.237h-80a3 3 0 00-3 3v16a3 3 0 003 3h80a3 3 0 003-3v-16a3 3 0 00-3-3zM390.5 636.237h-16a3 3 0 00-3 3v16a3 3 0 003 3h16a3 3 0 003-3v-16a3 3 0 00-3-3zM358.5 636.237h-16a3 3 0 00-3 3v16a3 3 0 003 3h16a3 3 0 003-3v-16a3 3 0 00-3-3zM326.5 636.237h-16a3 3 0 00-3 3v16a3 3 0 003 3h16a3 3 0 003-3v-16a3 3 0 00-3-3z"
        fill="#363D56"
      />
      <path
        d="M582.5 547.737h-16a3 3 0 00-3 3v6a3 3 0 003 3h16a3 3 0 003-3v-6a3 3 0 00-3-3zM550.5 547.737h-16a3 3 0 00-3 3v6a3 3 0 003 3h16a3 3 0 003-3v-6a3 3 0 00-3-3zM518.5 547.737h-16a3 3 0 00-3 3v6a3 3 0 003 3h16a3 3 0 003-3v-6a3 3 0 00-3-3zM486.5 547.737h-16a3 3 0 00-3 3v6a3 3 0 003 3h16a3 3 0 003-3v-6a3 3 0 00-3-3zM454.5 547.737h-16a3 3 0 00-3 3v6a3 3 0 003 3h16a3 3 0 003-3v-6a3 3 0 00-3-3zM422.5 547.737h-16a3 3 0 00-3 3v6a3 3 0 003 3h16a3 3 0 003-3v-6a3 3 0 00-3-3zM390.5 547.737h-16a3 3 0 00-3 3v6a3 3 0 003 3h16a3 3 0 003-3v-6a3 3 0 00-3-3zM358.5 547.737h-16a3 3 0 00-3 3v6a3 3 0 003 3h16a3 3 0 003-3v-6a3 3 0 00-3-3zM326.5 547.737h-16a3 3 0 00-3 3v6a3 3 0 003 3h16a3 3 0 003-3v-6a3 3 0 00-3-3zM518.5 573.214h-16a3 3 0 00-3 3v16a3 3 0 003 3h16a3 3 0 003-3v-16a3 3 0 00-3-3zM486.5 573.214h-16a3 3 0 00-3 3v16a3 3 0 003 3h16a3 3 0 003-3v-16a3 3 0 00-3-3zM454.5 573.214h-16a3 3 0 00-3 3v16a3 3 0 003 3h16a3 3 0 003-3v-16a3 3 0 00-3-3zM422.5 573.214h-16a3 3 0 00-3 3v16a3 3 0 003 3h16a3 3 0 003-3v-16a3 3 0 00-3-3zM390.5 573.214h-16a3 3 0 00-3 3v16a3 3 0 003 3h16a3 3 0 003-3v-16a3 3 0 00-3-3zM358.5 573.214h-16a3 3 0 00-3 3v16a3 3 0 003 3h16a3 3 0 003-3v-16a3 3 0 00-3-3zM326.5 573.214h-16a3 3 0 00-3 3v16a3 3 0 003 3h16a3 3 0 003-3v-16a3 3 0 00-3-3zM582.5 573.214h-16a3 3 0 00-3 3v47.512a3 3 0 003 3h16a3 3 0 003-3v-47.512a3 3 0 00-3-3z"
        stroke="#1E223B"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        // keyboard outline
        d="M550.5 573.214h-16c-.796 0-1.559.316-2.121.879a2.996 2.996 0 00-.879 2.121v25.512c0 .796-.316 1.559-.879 2.121a2.996 2.996 0 01-2.121.879h-26c-.796 0-1.559.316-2.121.879a2.996 2.996 0 00-.879 2.121v16c0 .796.316 1.559.879 2.121a2.996 2.996 0 002.121.879h48c.796 0 1.559-.316 2.121-.879a2.996 2.996 0 00.879-2.121v-47.512c0-.796-.316-1.559-.879-2.121a2.996 2.996 0 00-2.121-.879zM486.5 604.726h-16a3 3 0 00-3 3v16a3 3 0 003 3h16a3 3 0 003-3v-16a3 3 0 00-3-3zM454.5 604.726h-16a3 3 0 00-3 3v16a3 3 0 003 3h16a3 3 0 003-3v-16a3 3 0 00-3-3zM422.5 604.726h-16a3 3 0 00-3 3v16a3 3 0 003 3h16a3 3 0 003-3v-16a3 3 0 00-3-3zM390.5 604.726h-16a3 3 0 00-3 3v16a3 3 0 003 3h16a3 3 0 003-3v-16a3 3 0 00-3-3zM358.5 604.726h-48a3 3 0 00-3 3v16a3 3 0 003 3h48a3 3 0 003-3v-16a3 3 0 00-3-3zM582.5 636.237h-16a3 3 0 00-3 3v16a3 3 0 003 3h16a3 3 0 003-3v-16a3 3 0 00-3-3zM550.5 636.237h-16a3 3 0 00-3 3v16a3 3 0 003 3h16a3 3 0 003-3v-16a3 3 0 00-3-3zM518.5 636.237h-16a3 3 0 00-3 3v16a3 3 0 003 3h16a3 3 0 003-3v-16a3 3 0 00-3-3zM486.5 636.237h-80a3 3 0 00-3 3v16a3 3 0 003 3h80a3 3 0 003-3v-16a3 3 0 00-3-3zM390.5 636.237h-16a3 3 0 00-3 3v16a3 3 0 003 3h16a3 3 0 003-3v-16a3 3 0 00-3-3zM358.5 636.237h-16a3 3 0 00-3 3v16a3 3 0 003 3h16a3 3 0 003-3v-16a3 3 0 00-3-3zM326.5 636.237h-16a3 3 0 00-3 3v16a3 3 0 003 3h16a3 3 0 003-3v-16a3 3 0 00-3-3z"
        stroke="#1E223B"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        id="textbox-text"
        d="M461 115h54M461 128.5h42M461 142h24M533.213 58.5h27M533.213 65.5h17"
        stroke="#1E223B"
        strokeWidth={3}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        id="react-dash"
        d="M536.567 130h20.585c9.773 0 19.145 4.315 26.055 11.995 6.911 7.68 10.793 18.096 10.793 28.958v0a44.94 44.94 0 01-2.805 15.672c-1.852 4.968-4.566 9.483-7.988 13.286-3.421 3.803-7.483 6.819-11.954 8.877-4.47 2.058-9.262 3.118-14.101 3.118h-60.756c-5.436 0-10.819 1.189-15.841 3.501-5.023 2.312-9.586 5.701-13.43 9.973-3.844 4.272-6.894 9.344-8.974 14.926A50.5 50.5 0 00455 257.912V263"
        stroke={isDarkMode ? "#eee" : "#1E223B"}
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeDasharray="6 8"
      />
      <path
        id="html-dash"
        d="M160.357 377.84h125.542"
        stroke={isDarkMode ? "#eee" : "#1E223B"}
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeDasharray="6 8"
      />
      <path
        className="css-line"
        id="css-line"
        d="M157.137 604.726h26.25a45.115 45.115 0 0045.113-45.113v-18.994a44.881 44.881 0 0144.881-44.882H287.5"
        stroke={isDarkMode ? "#eee" : "#1E223B"}
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        id="js-line"
        d="M290.292 132.858h13.556a35.653 35.653 0 0135.652 35.653v0a35.65 35.65 0 0035.653 35.652h19.695a35.653 35.653 0 0135.652 35.653v25.921"
        stroke={isDarkMode ? "#eee" : "#1E223B"}
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      <path
        id="postgres-line"
        d="M605.5 431.419h188.25"
        stroke={isDarkMode ? "#eee" : "#1E223B"}
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      <path
        id="mongo-line"
        d="M760.986 632.113H606.5"
        stroke={isDarkMode ? "#eee" : "#1E223B"}
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      <path
        id="react-bubble"
        d="M488.951 28H367.304C360.509 28 355 32.83 355 38.79v30.621c0 5.96 5.509 10.79 12.304 10.79h121.647c6.795 0 12.304-4.83 12.304-10.79V38.79c0-5.96-5.509-10.79-12.304-10.79z"
        fill="#0270BB"
        stroke={isDarkMode ? "#eee" : "#1E223B"}
        strokeWidth={2}
        strokeMiterlimit={10}
      />

      
      <path
        id="mongo-bubble"
        d="M859.155 686H690.1c-9.444 0-17.1 4.831-17.1 10.79v30.621c0 5.959 7.656 10.79 17.1 10.79h169.055c9.444 0 17.1-4.831 17.1-10.79V696.79c0-5.959-7.656-10.79-17.1-10.79z"
        fill="#2CAB0D"
        stroke={isDarkMode ? "#eee" : "#1E223B"}
        strokeWidth={2}
        strokeMiterlimit={10}
      />
      <path
        d="M706.536 508.096v-8.384h5.952c1.728 0 2.987.363 3.776 1.088.811.704 1.216 1.739 1.216 3.104s-.405 2.411-1.216 3.136c-.789.725-2.048 1.077-3.776 1.056h-5.952zm-3.04-10.944V520h3.04v-9.344h6.976c2.304.021 4.043-.565 5.216-1.76 1.195-1.195 1.792-2.859 1.792-4.992s-.597-3.787-1.792-4.96c-1.173-1.195-2.912-1.792-5.216-1.792h-10.016zm22.286 14.592c0-1.003.128-1.888.384-2.656.277-.789.651-1.451 1.12-1.984a4.736 4.736 0 011.632-1.216 5.023 5.023 0 012.016-.416 4.8 4.8 0 011.984.416 4.66 4.66 0 011.664 1.216c.469.533.832 1.195 1.088 1.984.277.768.416 1.653.416 2.656 0 1.003-.139 1.899-.416 2.688-.256.768-.619 1.419-1.088 1.952a4.838 4.838 0 01-1.664 1.184 4.8 4.8 0 01-1.984.416 5.023 5.023 0 01-2.016-.416 4.921 4.921 0 01-1.632-1.184c-.469-.533-.843-1.184-1.12-1.952-.256-.789-.384-1.685-.384-2.688zm-2.88 0c0 1.216.171 2.347.512 3.392a7.898 7.898 0 001.536 2.752 7.332 7.332 0 002.528 1.824c1.003.427 2.155.64 3.456.64 1.323 0 2.475-.213 3.456-.64a7.332 7.332 0 002.528-1.824 7.898 7.898 0 001.536-2.752c.341-1.045.512-2.176.512-3.392 0-1.216-.171-2.347-.512-3.392-.341-1.067-.853-1.984-1.536-2.752a7.148 7.148 0 00-2.528-1.856c-.981-.448-2.133-.672-3.456-.672-1.301 0-2.453.224-3.456.672a7.148 7.148 0 00-2.528 1.856c-.683.768-1.195 1.685-1.536 2.752-.341 1.045-.512 2.176-.512 3.392zm20.935 3.04h-2.72c.043 1.024.256 1.899.64 2.624.384.704.896 1.28 1.536 1.728a6.62 6.62 0 002.208.928 11.64 11.64 0 002.624.288c.832 0 1.664-.085 2.496-.256.853-.149 1.611-.427 2.272-.832a4.684 4.684 0 001.632-1.6c.427-.661.64-1.493.64-2.496 0-.789-.16-1.451-.48-1.984a3.774 3.774 0 00-1.216-1.312 5.952 5.952 0 00-1.728-.864 19.313 19.313 0 00-1.984-.544c-.64-.149-1.28-.288-1.92-.416-.64-.149-1.216-.32-1.728-.512a4.611 4.611 0 01-1.28-.768 1.61 1.61 0 01-.48-1.184c0-.427.107-.768.32-1.024a2.08 2.08 0 01.832-.64 3.81 3.81 0 011.12-.352 8.416 8.416 0 011.248-.096c.448 0 .885.053 1.312.16.448.085.853.235 1.216.448.363.213.661.501.896.864.235.341.373.779.416 1.312h2.72c-.064-1.003-.277-1.835-.64-2.496a4.104 4.104 0 00-1.472-1.6c-.597-.405-1.291-.683-2.08-.832a12.246 12.246 0 00-2.592-.256c-.725 0-1.461.096-2.208.288a6.319 6.319 0 00-1.984.832 4.645 4.645 0 00-1.44 1.44c-.363.597-.544 1.312-.544 2.144 0 1.067.267 1.899.8 2.496a5.592 5.592 0 001.984 1.408c.811.32 1.685.576 2.624.768.939.171 1.803.373 2.592.608.811.213 1.483.501 2.016.864.533.363.8.896.8 1.6 0 .512-.128.939-.384 1.28-.256.32-.587.565-.992.736a4.692 4.692 0 01-1.28.352 9.951 9.951 0 01-1.344.096 8.271 8.271 0 01-1.632-.16 5.036 5.036 0 01-1.408-.512 3.153 3.153 0 01-.992-.992c-.256-.427-.395-.939-.416-1.536zm18.112-11.328v-4.96h-2.72v4.96h-2.816v2.4h2.816v10.528c0 .768.075 1.387.224 1.856.149.469.373.832.672 1.088.32.256.725.437 1.216.544.512.085 1.12.128 1.824.128h2.08v-2.4h-1.248c-.427 0-.779-.011-1.056-.032-.256-.043-.459-.117-.608-.224a.874.874 0 01-.32-.448 3.658 3.658 0 01-.064-.768v-10.272h3.296v-2.4h-3.296zm20.59 15.136v-15.136h-2.56v2.368h-.032c-.491-.917-1.174-1.6-2.048-2.048a6 6 0 00-2.88-.704c-1.43 0-2.635.277-3.616.832-.982.533-1.771 1.227-2.368 2.08a8.057 8.057 0 00-1.28 2.816 12.377 12.377 0 00-.384 3.008c0 1.131.149 2.208.448 3.232a8.117 8.117 0 001.408 2.656 6.836 6.836 0 002.304 1.792c.917.448 1.994.672 3.232.672a6.642 6.642 0 003.008-.704c.96-.491 1.674-1.248 2.144-2.272h.064v1.088c0 .917-.096 1.76-.288 2.528-.171.768-.459 1.419-.864 1.952a4.071 4.071 0 01-1.536 1.28c-.619.32-1.376.48-2.272.48-.448 0-.918-.053-1.408-.16a4.947 4.947 0 01-1.376-.448 3.63 3.63 0 01-1.056-.832c-.278-.341-.427-.757-.448-1.248h-2.72c.042.896.277 1.653.704 2.272.426.619.96 1.12 1.6 1.504a7.428 7.428 0 002.176.832c.81.171 1.6.256 2.368.256 2.645 0 4.586-.672 5.824-2.016 1.237-1.344 1.856-3.371 1.856-6.08zm-7.616-.8c-.896 0-1.643-.181-2.24-.544a4.51 4.51 0 01-1.44-1.472 6.545 6.545 0 01-.768-2.048 11.346 11.346 0 01-.224-2.24c0-.789.085-1.547.256-2.272.192-.725.48-1.365.864-1.92a4.341 4.341 0 011.536-1.312c.618-.341 1.365-.512 2.24-.512.853 0 1.578.171 2.176.512a4.05 4.05 0 011.44 1.376 5.61 5.61 0 01.832 1.888c.17.704.256 1.419.256 2.144 0 .768-.096 1.536-.288 2.304a6.654 6.654 0 01-.832 2.08 4.62 4.62 0 01-1.536 1.472c-.619.363-1.376.544-2.272.544zm11.623-14.336V520h2.72v-7.36c0-1.067.106-2.005.32-2.816.213-.832.554-1.536 1.024-2.112.469-.576 1.088-1.013 1.856-1.312.768-.299 1.696-.448 2.784-.448v-2.88c-1.472-.043-2.688.256-3.648.896s-1.771 1.632-2.432 2.976h-.064v-3.488h-2.56zm21.678 6.688h-9.504c.042-.64.181-1.237.416-1.792a4.755 4.755 0 01.96-1.504 4.236 4.236 0 011.44-.992 4.676 4.676 0 011.92-.384 4.38 4.38 0 011.856.384 4.178 4.178 0 011.472.992c.426.405.757.896.992 1.472.256.576.405 1.184.448 1.824zm2.623 4.608h-2.687c-.235 1.088-.726 1.899-1.472 2.432-.726.533-1.664.8-2.816.8-.896 0-1.675-.149-2.336-.448-.662-.299-1.206-.693-1.632-1.184a4.842 4.842 0 01-.928-1.728 6.688 6.688 0 01-.256-2.08h12.384a12.753 12.753 0 00-.288-3.168 8.769 8.769 0 00-1.216-3.072 6.896 6.896 0 00-2.336-2.304c-.96-.619-2.176-.928-3.648-.928-1.131 0-2.176.213-3.136.64a7.551 7.551 0 00-2.464 1.792c-.683.768-1.216 1.675-1.6 2.72-.384 1.045-.576 2.197-.576 3.456.042 1.259.224 2.421.544 3.488.341 1.067.842 1.984 1.504 2.752a6.816 6.816 0 002.432 1.792c.981.427 2.133.64 3.456.64 1.877 0 3.434-.469 4.672-1.408 1.237-.939 2.037-2.336 2.399-4.192zm16.74-10.912h2.88c-.043-1.259-.288-2.336-.736-3.232a6.077 6.077 0 00-1.792-2.272c-.747-.597-1.621-1.035-2.624-1.312-1.003-.277-2.091-.416-3.264-.416-1.045 0-2.069.139-3.072.416a8.15 8.15 0 00-2.656 1.216 6.02 6.02 0 00-1.856 2.08c-.469.832-.704 1.824-.704 2.976 0 1.045.203 1.92.608 2.624a5.483 5.483 0 001.664 1.696c.704.427 1.493.779 2.368 1.056.875.256 1.76.491 2.656.704.917.192 1.813.384 2.688.576.875.192 1.653.448 2.336.768.704.299 1.259.693 1.664 1.184.427.491.64 1.131.64 1.92 0 .832-.171 1.515-.512 2.048a3.86 3.86 0 01-1.344 1.28 6.347 6.347 0 01-1.888.64 11.09 11.09 0 01-2.048.192 9.785 9.785 0 01-2.496-.32 6.381 6.381 0 01-2.144-.992 5.397 5.397 0 01-1.472-1.696c-.363-.704-.544-1.536-.544-2.496h-2.88c0 1.387.245 2.592.736 3.616a7.32 7.32 0 002.048 2.496c.875.64 1.877 1.12 3.008 1.44 1.152.32 2.368.48 3.648.48 1.045 0 2.091-.128 3.136-.384a9.068 9.068 0 002.88-1.152 6.783 6.783 0 002.08-2.112c.555-.875.832-1.92.832-3.136 0-1.131-.213-2.069-.64-2.816a5.337 5.337 0 00-1.664-1.856 8.216 8.216 0 00-2.336-1.152 27.663 27.663 0 00-2.688-.768 67.28 67.28 0 00-2.656-.576 15.62 15.62 0 01-2.368-.704c-.683-.277-1.237-.629-1.664-1.056-.405-.448-.608-1.024-.608-1.728 0-.747.139-1.365.416-1.856a3.515 3.515 0 011.152-1.216 5.19 5.19 0 011.664-.64 9.297 9.297 0 011.888-.192c1.579 0 2.869.373 3.872 1.12 1.024.725 1.621 1.909 1.792 3.552zm19.438 9.632l-1.6 1.856 2.528 2.016a8.155 8.155 0 01-3.168.64c-1.387 0-2.581-.267-3.584-.8a7.356 7.356 0 01-2.464-2.176 9.286 9.286 0 01-1.408-3.008 13.34 13.34 0 01-.448-3.424c0-1.152.149-2.283.448-3.392a9.24 9.24 0 011.408-3.04 7.04 7.04 0 012.464-2.144c1.003-.555 2.197-.832 3.584-.832s2.581.277 3.584.832a7.04 7.04 0 012.464 2.144 9.24 9.24 0 011.408 3.04c.299 1.109.448 2.24.448 3.392a12.95 12.95 0 01-.64 4.064c-.427 1.28-1.088 2.368-1.984 3.264l-3.04-2.432zm6.72 8.48l1.536-1.92-3.008-2.368a11.086 11.086 0 002.592-4.096c.576-1.579.864-3.243.864-4.992 0-1.557-.235-3.051-.704-4.48-.448-1.451-1.131-2.731-2.048-3.84s-2.059-1.995-3.424-2.656c-1.365-.661-2.955-.992-4.768-.992-1.813 0-3.403.331-4.768.992-1.365.661-2.507 1.547-3.424 2.656-.917 1.109-1.611 2.389-2.08 3.84a14.89 14.89 0 00-.672 4.48c0 1.557.224 3.061.672 4.512a11.583 11.583 0 002.08 3.808c.917 1.109 2.059 1.995 3.424 2.656 1.365.64 2.955.96 4.768.96 2.112 0 3.936-.448 5.472-1.344l3.488 2.784zm5.689-24.8V520h15.135v-2.56h-12.095v-20.288h-3.04zM26.496 448.152V471h3.04v-10.464h12.032V471h3.04v-22.848h-3.04v9.824H29.536v-9.824h-3.04zm28.278 2.56V471h3.04v-20.288h7.616v-2.56H47.158v2.56h7.616zm13.255-2.56V471h2.88v-19.008h.064L78.109 471H80.7l7.136-19.008h.064V471h2.88v-22.848h-4.16l-7.232 19.2-7.2-19.2h-4.16zm27.81 0V471h15.137v-2.56H98.88v-20.288h-3.04zM386.496 42.152V65h3.04v-9.76h7.424c.747 0 1.344.117 1.792.352.448.213.811.512 1.088.896.277.363.48.8.608 1.312.128.49.235 1.013.32 1.568.107.555.171 1.12.192 1.696.021.576.043 1.12.064 1.632.021.49.064.939.128 1.344.085.405.235.725.448.96h3.392a4.175 4.175 0 01-.736-1.312 12.492 12.492 0 01-.352-1.6 14.731 14.731 0 01-.16-1.696 41.518 41.518 0 00-.096-1.696 12.498 12.498 0 00-.288-1.6 4.136 4.136 0 00-.544-1.376 3.21 3.21 0 00-.992-1.088c-.405-.299-.939-.512-1.6-.64v-.064c1.387-.384 2.389-1.099 3.008-2.144.64-1.045.96-2.261.96-3.648 0-1.856-.619-3.317-1.856-4.384-1.216-1.067-2.912-1.6-5.088-1.6h-10.752zm9.376 10.528h-6.336v-7.968h7.552c1.429 0 2.464.363 3.104 1.088.64.725.96 1.664.96 2.816 0 .832-.149 1.515-.448 2.048a3.399 3.399 0 01-1.152 1.248c-.469.299-1.024.501-1.664.608-.64.107-1.312.16-2.016.16zm23.57 2.464h-9.504a5.53 5.53 0 01.416-1.792 4.786 4.786 0 01.96-1.504 4.256 4.256 0 011.44-.992 4.676 4.676 0 011.92-.384c.683 0 1.302.128 1.856.384a4.17 4.17 0 011.472.992c.427.405.758.896.992 1.472.256.576.406 1.184.448 1.824zm2.624 4.608h-2.688c-.234 1.088-.725 1.899-1.472 2.432-.725.533-1.664.8-2.816.8-.896 0-1.674-.15-2.336-.448-.661-.299-1.205-.693-1.632-1.184a4.858 4.858 0 01-.928-1.728 6.718 6.718 0 01-.256-2.08h12.384a12.661 12.661 0 00-.288-3.168 8.726 8.726 0 00-1.216-3.072A6.892 6.892 0 00418.482 49c-.96-.619-2.176-.928-3.648-.928-1.13 0-2.176.213-3.136.64a7.558 7.558 0 00-2.464 1.792 8.423 8.423 0 00-1.6 2.72c-.384 1.045-.576 2.197-.576 3.456.043 1.259.224 2.421.544 3.488.342 1.067.843 1.984 1.504 2.752a6.821 6.821 0 002.432 1.792c.982.427 2.134.64 3.456.64 1.878 0 3.435-.47 4.672-1.408 1.238-.939 2.038-2.336 2.4-4.192zm17.732 5.184c-.47.277-1.12.416-1.952.416-.704 0-1.27-.192-1.696-.576-.406-.405-.608-1.056-.608-1.952-.747.896-1.622 1.547-2.624 1.952-.982.384-2.048.576-3.2.576a8.801 8.801 0 01-2.144-.256 4.945 4.945 0 01-1.728-.8 4.01 4.01 0 01-1.184-1.408c-.278-.597-.416-1.312-.416-2.144 0-.939.16-1.707.48-2.304a4.106 4.106 0 011.248-1.44 5.804 5.804 0 011.792-.864 22.58 22.58 0 012.08-.48c.746-.15 1.45-.256 2.112-.32.682-.085 1.28-.192 1.792-.32.512-.15.917-.352 1.216-.608.298-.277.448-.672.448-1.184 0-.597-.118-1.077-.352-1.44a2.168 2.168 0 00-.864-.832 3.368 3.368 0 00-1.184-.384 8.627 8.627 0 00-1.28-.096c-1.152 0-2.112.224-2.88.672-.768.427-1.184 1.248-1.248 2.464h-2.72c.042-1.024.256-1.888.64-2.592a4.713 4.713 0 011.536-1.696 6.273 6.273 0 012.176-.96 11.785 11.785 0 012.656-.288c.746 0 1.482.053 2.208.16.746.107 1.418.33 2.016.672.597.32 1.077.779 1.44 1.376.362.597.544 1.376.544 2.336v8.512c0 .64.032 1.11.096 1.408.085.299.341.448.768.448.234 0 .512-.053.832-.16v2.112zm-4.416-8.48c-.342.256-.79.448-1.344.576-.555.107-1.142.203-1.76.288-.598.064-1.206.15-1.824.256a6.32 6.32 0 00-1.664.448 3.09 3.09 0 00-1.216.928c-.299.384-.448.917-.448 1.6 0 .448.085.832.256 1.152.192.299.426.544.704.736.298.192.64.33 1.024.416.384.085.789.128 1.216.128.896 0 1.664-.117 2.304-.352.64-.256 1.162-.565 1.568-.928.405-.384.704-.79.896-1.216.192-.448.288-.864.288-1.248v-2.784zm18.179-2.688h2.816c-.106-.981-.362-1.824-.768-2.528a5.535 5.535 0 00-1.568-1.792c-.618-.47-1.344-.81-2.176-1.024a9.394 9.394 0 00-2.624-.352c-1.301 0-2.442.235-3.424.704a6.755 6.755 0 00-2.464 1.888c-.64.79-1.12 1.728-1.44 2.816-.32 1.067-.48 2.219-.48 3.456s.16 2.379.48 3.424c.342 1.024.832 1.91 1.472 2.656a6.664 6.664 0 002.432 1.728c.982.405 2.102.608 3.36.608 2.112 0 3.776-.555 4.992-1.664 1.238-1.11 2.006-2.688 2.304-4.736h-2.784c-.17 1.28-.64 2.272-1.408 2.976-.746.704-1.792 1.056-3.136 1.056-.853 0-1.589-.17-2.208-.512a4.363 4.363 0 01-1.504-1.344 6.478 6.478 0 01-.864-1.952 9.784 9.784 0 01-.256-2.24c0-.832.086-1.632.256-2.4.171-.79.448-1.483.832-2.08a4.542 4.542 0 011.6-1.44c.662-.363 1.483-.544 2.464-.544 1.152 0 2.07.288 2.752.864.683.576 1.131 1.387 1.344 2.432zm9.732-5.312v-4.96h-2.72v4.96h-2.816v2.4h2.816v10.528c0 .768.074 1.387.224 1.856.149.47.373.832.672 1.088.32.256.725.437 1.216.544.512.085 1.12.128 1.824.128h2.08v-2.4h-1.248c-.427 0-.779-.01-1.056-.032-.256-.043-.459-.117-.608-.224a.867.867 0 01-.32-.448 3.658 3.658 0 01-.064-.768V50.856h3.296v-2.4h-3.296zM115.56 660.032h3.04c-.171-1.216-.533-2.283-1.088-3.2a7.848 7.848 0 00-2.08-2.336 9.107 9.107 0 00-2.848-1.408 11.744 11.744 0 00-3.392-.48c-1.749 0-3.307.32-4.672.96a9.649 9.649 0 00-3.392 2.56c-.896 1.088-1.579 2.368-2.048 3.84-.47 1.451-.704 3.008-.704 4.672 0 1.664.213 3.221.64 4.672.448 1.451 1.109 2.709 1.984 3.776.875 1.067 1.973 1.909 3.296 2.528 1.323.597 2.869.896 4.64.896 2.923 0 5.227-.8 6.912-2.4 1.685-1.6 2.677-3.84 2.976-6.72h-3.04a8.718 8.718 0 01-.576 2.624 6.375 6.375 0 01-1.344 2.112 6.15 6.15 0 01-2.016 1.376c-.768.32-1.653.48-2.656.48-1.365 0-2.539-.256-3.52-.768a7.102 7.102 0 01-2.432-2.048c-.619-.875-1.077-1.888-1.376-3.04a14.98 14.98 0 01-.448-3.712c0-1.195.149-2.347.448-3.456.299-1.109.757-2.091 1.376-2.944a7.039 7.039 0 012.4-2.08c.981-.512 2.155-.768 3.52-.768 1.6 0 2.976.405 4.128 1.216 1.173.811 1.931 2.027 2.272 3.648zm20.246-.192h2.88c-.043-1.259-.288-2.336-.736-3.232a6.077 6.077 0 00-1.792-2.272c-.747-.597-1.622-1.035-2.624-1.312-1.003-.277-2.091-.416-3.264-.416-1.046 0-2.07.139-3.072.416a8.14 8.14 0 00-2.656 1.216 6.02 6.02 0 00-1.856 2.08c-.47.832-.704 1.824-.704 2.976 0 1.045.202 1.92.608 2.624a5.472 5.472 0 001.664 1.696c.704.427 1.493.779 2.368 1.056.874.256 1.76.491 2.656.704.917.192 1.813.384 2.688.576.874.192 1.653.448 2.336.768.704.299 1.258.693 1.664 1.184.426.491.64 1.131.64 1.92 0 .832-.171 1.515-.512 2.048-.342.533-.79.96-1.344 1.28a6.347 6.347 0 01-1.888.64c-.683.128-1.366.192-2.048.192a9.774 9.774 0 01-2.496-.32 6.372 6.372 0 01-2.144-.992 5.384 5.384 0 01-1.472-1.696c-.363-.704-.544-1.536-.544-2.496h-2.88c0 1.387.245 2.592.736 3.616a7.309 7.309 0 002.048 2.496c.874.64 1.877 1.12 3.008 1.44 1.152.32 2.368.48 3.648.48 1.045 0 2.09-.128 3.136-.384a9.086 9.086 0 002.88-1.152 6.794 6.794 0 002.08-2.112c.554-.875.832-1.92.832-3.136 0-1.131-.214-2.069-.64-2.816a5.347 5.347 0 00-1.664-1.856 8.229 8.229 0 00-2.336-1.152 27.663 27.663 0 00-2.688-.768 67.672 67.672 0 00-2.656-.576 15.62 15.62 0 01-2.368-.704c-.683-.277-1.238-.629-1.664-1.056-.406-.448-.608-1.024-.608-1.728 0-.747.138-1.365.416-1.856A3.497 3.497 0 01126.59 656a5.18 5.18 0 011.664-.64 9.29 9.29 0 011.888-.192c1.578 0 2.869.373 3.872 1.12 1.024.725 1.621 1.909 1.792 3.552zm20.75 0h2.88c-.043-1.259-.288-2.336-.736-3.232a6.077 6.077 0 00-1.792-2.272c-.747-.597-1.622-1.035-2.624-1.312-1.003-.277-2.091-.416-3.264-.416-1.046 0-2.07.139-3.072.416a8.14 8.14 0 00-2.656 1.216 6.02 6.02 0 00-1.856 2.08c-.47.832-.704 1.824-.704 2.976 0 1.045.202 1.92.608 2.624a5.472 5.472 0 001.664 1.696c.704.427 1.493.779 2.368 1.056.874.256 1.76.491 2.656.704.917.192 1.813.384 2.688.576.874.192 1.653.448 2.336.768.704.299 1.258.693 1.664 1.184.426.491.64 1.131.64 1.92 0 .832-.171 1.515-.512 2.048-.342.533-.79.96-1.344 1.28a6.347 6.347 0 01-1.888.64c-.683.128-1.366.192-2.048.192a9.774 9.774 0 01-2.496-.32 6.372 6.372 0 01-2.144-.992 5.384 5.384 0 01-1.472-1.696c-.363-.704-.544-1.536-.544-2.496h-2.88c0 1.387.245 2.592.736 3.616a7.309 7.309 0 002.048 2.496c.874.64 1.877 1.12 3.008 1.44 1.152.32 2.368.48 3.648.48 1.045 0 2.09-.128 3.136-.384a9.086 9.086 0 002.88-1.152 6.794 6.794 0 002.08-2.112c.554-.875.832-1.92.832-3.136 0-1.131-.214-2.069-.64-2.816a5.347 5.347 0 00-1.664-1.856 8.229 8.229 0 00-2.336-1.152 27.663 27.663 0 00-2.688-.768 67.672 67.672 0 00-2.656-.576 15.62 15.62 0 01-2.368-.704c-.683-.277-1.238-.629-1.664-1.056-.406-.448-.608-1.024-.608-1.728 0-.747.138-1.365.416-1.856A3.497 3.497 0 01147.34 656a5.18 5.18 0 011.664-.64 9.29 9.29 0 011.888-.192c1.578 0 2.869.373 3.872 1.12 1.024.725 1.621 1.909 1.792 3.552zM669.464 217.152V240h2.88v-18.336h.064L684.344 240h3.328v-22.848h-2.88v18.528h-.064l-12.032-18.528h-3.232zm24.662 14.592c0-1.003.128-1.888.384-2.656.277-.789.65-1.451 1.12-1.984a4.736 4.736 0 011.632-1.216 5.023 5.023 0 012.016-.416 4.8 4.8 0 011.984.416 4.67 4.67 0 011.664 1.216c.469.533.832 1.195 1.088 1.984.277.768.416 1.653.416 2.656 0 1.003-.139 1.899-.416 2.688-.256.768-.619 1.419-1.088 1.952a4.848 4.848 0 01-1.664 1.184 4.8 4.8 0 01-1.984.416 5.023 5.023 0 01-2.016-.416 4.921 4.921 0 01-1.632-1.184c-.47-.533-.843-1.184-1.12-1.952-.256-.789-.384-1.685-.384-2.688zm-2.88 0c0 1.216.17 2.347.512 3.392a7.898 7.898 0 001.536 2.752c.682.768 1.525 1.376 2.528 1.824 1.002.427 2.154.64 3.456.64 1.322 0 2.474-.213 3.456-.64 1.002-.448 1.845-1.056 2.528-1.824a7.93 7.93 0 001.536-2.752c.341-1.045.512-2.176.512-3.392 0-1.216-.171-2.347-.512-3.392-.342-1.067-.854-1.984-1.536-2.752a7.157 7.157 0 00-2.528-1.856c-.982-.448-2.134-.672-3.456-.672-1.302 0-2.454.224-3.456.672a7.139 7.139 0 00-2.528 1.856c-.683.768-1.195 1.685-1.536 2.752-.342 1.045-.512 2.176-.512 3.392zm21.255.128c0-.811.085-1.6.256-2.368.17-.768.448-1.451.832-2.048a4.338 4.338 0 011.536-1.44c.64-.363 1.418-.544 2.336-.544.938 0 1.738.181 2.4.544.661.341 1.194.8 1.6 1.376.426.576.736 1.248.928 2.016a9.344 9.344 0 010 4.608 5.899 5.899 0 01-.864 2.016 4.76 4.76 0 01-1.568 1.408c-.64.363-1.419.544-2.336.544-.875 0-1.643-.171-2.304-.512a4.732 4.732 0 01-1.6-1.376 6.578 6.578 0 01-.928-1.952 9.09 9.09 0 01-.288-2.272zm12.8 8.128v-22.848h-2.72v8.512h-.064a4.083 4.083 0 00-1.12-1.216 5.292 5.292 0 00-1.376-.8 6.48 6.48 0 00-1.472-.448 8.1 8.1 0 00-1.376-.128c-1.259 0-2.368.235-3.328.704a6.748 6.748 0 00-2.368 1.856c-.619.768-1.088 1.675-1.408 2.72a12.048 12.048 0 00-.448 3.328c0 1.173.16 2.283.48 3.328.32 1.045.789 1.963 1.408 2.752a7.084 7.084 0 002.368 1.888c.96.469 2.08.704 3.36.704 1.152 0 2.208-.203 3.168-.608.96-.405 1.664-1.067 2.112-1.984h.064V240h2.72zm15.673-9.856h-9.504c.042-.64.181-1.237.416-1.792a4.755 4.755 0 01.96-1.504 4.236 4.236 0 011.44-.992 4.676 4.676 0 011.92-.384 4.38 4.38 0 011.856.384 4.178 4.178 0 011.472.992c.426.405.757.896.992 1.472.256.576.405 1.184.448 1.824zm2.623 4.608h-2.687c-.235 1.088-.726 1.899-1.472 2.432-.726.533-1.664.8-2.816.8-.896 0-1.675-.149-2.336-.448-.662-.299-1.206-.693-1.632-1.184a4.842 4.842 0 01-.928-1.728 6.688 6.688 0 01-.256-2.08h12.384a12.753 12.753 0 00-.288-3.168 8.769 8.769 0 00-1.216-3.072 6.896 6.896 0 00-2.336-2.304c-.96-.619-2.176-.928-3.648-.928-1.131 0-2.176.213-3.136.64a7.551 7.551 0 00-2.464 1.792c-.683.768-1.216 1.675-1.6 2.72-.384 1.045-.576 2.197-.576 3.456.042 1.259.224 2.421.544 3.488.341 1.067.842 1.984 1.504 2.752a6.816 6.816 0 002.432 1.792c.981.427 2.133.64 3.456.64 1.877 0 3.434-.469 4.672-1.408 1.237-.939 2.037-2.336 2.399-4.192zm3.684 1.696V240h3.552v-3.552h-3.552zm11.178-15.968v-3.328h-2.72v3.328h2.72zm0 21.6v-18.624h-2.72v18.176c0 .853-.106 1.44-.32 1.76-.213.341-.618.512-1.216.512h-.576a.72.72 0 01-.224-.032c-.085 0-.181-.011-.288-.032v2.336c.427.085.886.128 1.376.128 1.216 0 2.176-.341 2.88-1.024.726-.661 1.088-1.728 1.088-3.2zm5.878-7.296h-2.72c.043 1.024.256 1.899.64 2.624.384.704.896 1.28 1.536 1.728a6.62 6.62 0 002.208.928 11.64 11.64 0 002.624.288c.832 0 1.664-.085 2.496-.256.853-.149 1.611-.427 2.272-.832a4.684 4.684 0 001.632-1.6c.427-.661.64-1.493.64-2.496 0-.789-.16-1.451-.48-1.984a3.774 3.774 0 00-1.216-1.312 5.952 5.952 0 00-1.728-.864 19.313 19.313 0 00-1.984-.544c-.64-.149-1.28-.288-1.92-.416-.64-.149-1.216-.32-1.728-.512a4.611 4.611 0 01-1.28-.768 1.61 1.61 0 01-.48-1.184c0-.427.107-.768.32-1.024a2.08 2.08 0 01.832-.64 3.81 3.81 0 011.12-.352 8.416 8.416 0 011.248-.096c.448 0 .885.053 1.312.16.448.085.853.235 1.216.448.363.213.661.501.896.864.235.341.373.779.416 1.312h2.72c-.064-1.003-.277-1.835-.64-2.496a4.104 4.104 0 00-1.472-1.6c-.597-.405-1.291-.683-2.08-.832a12.246 12.246 0 00-2.592-.256c-.725 0-1.461.096-2.208.288a6.319 6.319 0 00-1.984.832 4.645 4.645 0 00-1.44 1.44c-.363.597-.544 1.312-.544 2.144 0 1.067.267 1.899.8 2.496a5.592 5.592 0 001.984 1.408c.811.32 1.685.576 2.624.768.939.171 1.803.373 2.592.608.811.213 1.483.501 2.016.864.533.363.8.896.8 1.6 0 .512-.128.939-.384 1.28-.256.32-.587.565-.992.736a4.692 4.692 0 01-1.28.352 9.951 9.951 0 01-1.344.096 8.271 8.271 0 01-1.632-.16 5.036 5.036 0 01-1.408-.512 3.153 3.153 0 01-.992-.992c-.256-.427-.395-.939-.416-1.536z"
        fill="#fff"
      />
      <path
        className="html-bubble"
        id="html-bubble"
        d="M118.465 434H11.79C5.83 434 1 438.831 1 444.79v30.621c0 5.959 4.83 10.79 10.79 10.79h106.675c5.959 0 10.79-4.831 10.79-10.79V444.79c0-5.959-4.831-10.79-10.79-10.79z"
        fill="#E44D26"
        stroke={isDarkMode ? "#eee" : "#1E223B"}
        strokeWidth={2}
        strokeMiterlimit={10}
      />
      <path
        id="js-bubble"
        d="M255.155 192H86.1c-9.444 0-17.1 4.831-17.1 10.79v30.621c0 5.959 7.656 10.79 17.1 10.79h169.055c9.444 0 17.1-4.831 17.1-10.79V202.79c0-5.959-7.656-10.79-17.1-10.79z"
        fill="#2CAB0D"
        stroke={isDarkMode ? "#eee" : "#1E223B"}
        strokeWidth={2}
        strokeMiterlimit={10}
      />
      <path
        d="M705.56 700.152V723h2.88v-19.008h.064L715.64 723h2.592l7.136-19.008h.064V723h2.88v-22.848h-4.16l-7.232 19.2-7.2-19.2h-4.16zm29.347 14.592c0-1.003.128-1.888.384-2.656.277-.789.651-1.451 1.12-1.984a4.736 4.736 0 011.632-1.216 5.023 5.023 0 012.016-.416 4.8 4.8 0 011.984.416 4.66 4.66 0 011.664 1.216c.469.533.832 1.195 1.088 1.984.277.768.416 1.653.416 2.656 0 1.003-.139 1.899-.416 2.688-.256.768-.619 1.419-1.088 1.952a4.838 4.838 0 01-1.664 1.184 4.8 4.8 0 01-1.984.416 5.023 5.023 0 01-2.016-.416 4.921 4.921 0 01-1.632-1.184c-.469-.533-.843-1.184-1.12-1.952-.256-.789-.384-1.685-.384-2.688zm-2.88 0c0 1.216.171 2.347.512 3.392a7.898 7.898 0 001.536 2.752 7.332 7.332 0 002.528 1.824c1.003.427 2.155.64 3.456.64 1.323 0 2.475-.213 3.456-.64a7.332 7.332 0 002.528-1.824 7.898 7.898 0 001.536-2.752c.341-1.045.512-2.176.512-3.392 0-1.216-.171-2.347-.512-3.392-.341-1.067-.853-1.984-1.536-2.752a7.148 7.148 0 00-2.528-1.856c-.981-.448-2.133-.672-3.456-.672-1.301 0-2.453.224-3.456.672a7.148 7.148 0 00-2.528 1.856c-.683.768-1.195 1.685-1.536 2.752-.341 1.045-.512 2.176-.512 3.392zm19.271-8.288V723h2.72v-9.344c0-.747.096-1.429.288-2.048.213-.64.523-1.195.928-1.664a4.081 4.081 0 011.504-1.088c.619-.256 1.344-.384 2.176-.384 1.045 0 1.867.299 2.464.896s.896 1.408.896 2.432V723h2.72v-10.88c0-.896-.096-1.707-.288-2.432-.171-.747-.48-1.387-.928-1.92-.448-.533-1.035-.949-1.76-1.248-.725-.299-1.632-.448-2.72-.448-2.453 0-4.245 1.003-5.376 3.008h-.064v-2.624h-2.56zm32.053 15.136v-15.136h-2.56v2.368h-.032c-.49-.917-1.173-1.6-2.048-2.048a5.994 5.994 0 00-2.88-.704c-1.429 0-2.634.277-3.616.832-.981.533-1.77 1.227-2.368 2.08a8.075 8.075 0 00-1.28 2.816 12.377 12.377 0 00-.384 3.008c0 1.131.15 2.208.448 3.232a8.136 8.136 0 001.408 2.656 6.856 6.856 0 002.304 1.792c.918.448 1.995.672 3.232.672 1.067 0 2.07-.235 3.008-.704.96-.491 1.675-1.248 2.144-2.272h.064v1.088c0 .917-.096 1.76-.288 2.528-.17.768-.458 1.419-.864 1.952a4.056 4.056 0 01-1.536 1.28c-.618.32-1.376.48-2.272.48a6.61 6.61 0 01-1.408-.16 4.969 4.969 0 01-1.376-.448 3.657 3.657 0 01-1.056-.832c-.277-.341-.426-.757-.448-1.248h-2.72c.043.896.278 1.653.704 2.272.427.619.96 1.12 1.6 1.504a7.45 7.45 0 002.176.832c.811.171 1.6.256 2.368.256 2.646 0 4.587-.672 5.824-2.016 1.238-1.344 1.856-3.371 1.856-6.08zm-7.616-.8c-.896 0-1.642-.181-2.24-.544a4.53 4.53 0 01-1.44-1.472 6.595 6.595 0 01-.768-2.048 11.421 11.421 0 01-.224-2.24c0-.789.086-1.547.256-2.272.192-.725.48-1.365.864-1.92a4.359 4.359 0 011.536-1.312c.619-.341 1.366-.512 2.24-.512.854 0 1.579.171 2.176.512.598.341 1.078.8 1.44 1.376a5.59 5.59 0 01.832 1.888c.171.704.256 1.419.256 2.144 0 .768-.096 1.536-.288 2.304a6.63 6.63 0 01-.832 2.08 4.62 4.62 0 01-1.536 1.472c-.618.363-1.376.544-2.272.544zm13.703-6.048c0-1.003.128-1.888.384-2.656.278-.789.651-1.451 1.12-1.984a4.755 4.755 0 011.632-1.216 5.023 5.023 0 012.016-.416c.704 0 1.366.139 1.984.416a4.66 4.66 0 011.664 1.216c.47.533.832 1.195 1.088 1.984.278.768.416 1.653.416 2.656 0 1.003-.138 1.899-.416 2.688-.256.768-.618 1.419-1.088 1.952a4.838 4.838 0 01-1.664 1.184 4.797 4.797 0 01-1.984.416 5.023 5.023 0 01-2.016-.416 4.942 4.942 0 01-1.632-1.184c-.469-.533-.842-1.184-1.12-1.952-.256-.789-.384-1.685-.384-2.688zm-2.88 0c0 1.216.171 2.347.512 3.392a7.93 7.93 0 001.536 2.752c.683.768 1.526 1.376 2.528 1.824 1.003.427 2.155.64 3.456.64 1.323 0 2.475-.213 3.456-.64 1.003-.448 1.846-1.056 2.528-1.824a7.898 7.898 0 001.536-2.752c.342-1.045.512-2.176.512-3.392 0-1.216-.17-2.347-.512-3.392-.341-1.067-.853-1.984-1.536-2.752a7.139 7.139 0 00-2.528-1.856c-.981-.448-2.133-.672-3.456-.672-1.301 0-2.453.224-3.456.672a7.157 7.157 0 00-2.528 1.856c-.682.768-1.194 1.685-1.536 2.752-.341 1.045-.512 2.176-.512 3.392zm22.759 5.696v-17.728h5.12c1.408 0 2.592.203 3.552.608.96.384 1.739.96 2.336 1.728.619.747 1.056 1.664 1.312 2.752.278 1.067.416 2.283.416 3.648 0 1.408-.149 2.613-.448 3.616-.277.981-.64 1.803-1.088 2.464-.448.661-.96 1.184-1.536 1.568a7.621 7.621 0 01-1.696.896c-.576.192-1.12.32-1.632.384-.512.043-.938.064-1.28.064h-5.056zm-3.04-20.288V723h7.84c1.899 0 3.542-.267 4.928-.8 1.387-.533 2.528-1.301 3.424-2.304.896-1.024 1.558-2.272 1.984-3.744.427-1.493.64-3.2.64-5.12 0-3.669-.949-6.4-2.848-8.192-1.898-1.792-4.608-2.688-8.128-2.688h-7.84zm25.572 9.824v-7.264h6.08c.661 0 1.28.043 1.856.128.597.064 1.12.224 1.568.48.448.256.8.619 1.056 1.088.256.469.384 1.109.384 1.92 0 1.216-.384 2.133-1.152 2.752-.747.597-1.984.896-3.712.896h-6.08zm-3.04-9.824V723h11.04c1.13 0 2.122-.181 2.976-.544.874-.384 1.6-.875 2.176-1.472a6.16 6.16 0 001.344-2.112c.298-.789.448-1.6.448-2.432 0-1.408-.374-2.603-1.12-3.584-.747-.981-1.824-1.621-3.232-1.92v-.064c1.088-.427 1.92-1.077 2.496-1.952.597-.896.896-1.952.896-3.168 0-1.152-.267-2.123-.8-2.912-.512-.789-1.142-1.408-1.888-1.856-.342-.213-.758-.373-1.248-.48-.47-.107-.982-.181-1.536-.224a14.79 14.79 0 00-1.696-.096 41.646 41.646 0 00-1.568-.032h-8.288zm3.04 20.288v-7.904h6.944c.64 0 1.258.064 1.856.192.597.107 1.12.309 1.568.608a3.06 3.06 0 011.12 1.152c.277.491.416 1.109.416 1.856 0 1.28-.384 2.283-1.152 3.008-.747.725-1.792 1.088-3.136 1.088h-7.616zM111.112 222.304v-17.152h-3.04v16.704c0 1.259-.267 2.261-.8 3.008-.512.747-1.461 1.12-2.848 1.12-.747 0-1.365-.107-1.856-.32a2.902 2.902 0 01-1.12-.96 4.134 4.134 0 01-.544-1.44 9.653 9.653 0 01-.16-1.824v-.96h-3.04v1.408c0 2.176.576 3.829 1.728 4.96 1.152 1.109 2.795 1.664 4.928 1.664 1.28 0 2.347-.171 3.2-.512.875-.363 1.568-.832 2.08-1.408a5.094 5.094 0 001.12-2.016 7.528 7.528 0 00.352-2.272zm19.186 5.632c-.47.277-1.12.416-1.952.416-.704 0-1.27-.192-1.696-.576-.406-.405-.608-1.056-.608-1.952-.747.896-1.622 1.547-2.624 1.952-.982.384-2.048.576-3.2.576a8.787 8.787 0 01-2.144-.256 4.945 4.945 0 01-1.728-.8 4.013 4.013 0 01-1.184-1.408c-.278-.597-.416-1.312-.416-2.144 0-.939.16-1.707.48-2.304a4.111 4.111 0 011.248-1.44 5.804 5.804 0 011.792-.864 22.58 22.58 0 012.08-.48c.746-.149 1.45-.256 2.112-.32.682-.085 1.28-.192 1.792-.32.512-.149.917-.352 1.216-.608.298-.277.448-.672.448-1.184 0-.597-.118-1.077-.352-1.44a2.166 2.166 0 00-.864-.832 3.368 3.368 0 00-1.184-.384 8.627 8.627 0 00-1.28-.096c-1.152 0-2.112.224-2.88.672-.768.427-1.184 1.248-1.248 2.464h-2.72c.042-1.024.256-1.888.64-2.592a4.715 4.715 0 011.536-1.696 6.273 6.273 0 012.176-.96 11.785 11.785 0 012.656-.288c.746 0 1.482.053 2.208.16a5.648 5.648 0 012.016.672c.597.32 1.077.779 1.44 1.376.362.597.544 1.376.544 2.336v8.512c0 .64.032 1.109.096 1.408.085.299.341.448.768.448.234 0 .512-.053.832-.16v2.112zm-4.416-8.48c-.342.256-.79.448-1.344.576-.555.107-1.142.203-1.76.288-.598.064-1.206.149-1.824.256a6.32 6.32 0 00-1.664.448 3.09 3.09 0 00-1.216.928c-.299.384-.448.917-.448 1.6 0 .448.085.832.256 1.152.192.299.426.544.704.736.298.192.64.331 1.024.416.384.085.789.128 1.216.128.896 0 1.664-.117 2.304-.352.64-.256 1.162-.565 1.568-.928.405-.384.704-.789.896-1.216.192-.448.288-.864.288-1.248v-2.784zM140.285 228l6.048-16.544h-2.848l-4.512 13.792h-.064l-4.64-13.792h-3.04L137.373 228h2.912zm23.2-.064c-.469.277-1.12.416-1.952.416-.704 0-1.269-.192-1.696-.576-.405-.405-.608-1.056-.608-1.952-.746.896-1.621 1.547-2.624 1.952-.981.384-2.048.576-3.2.576a8.798 8.798 0 01-2.144-.256 4.962 4.962 0 01-1.728-.8 4.035 4.035 0 01-1.184-1.408c-.277-.597-.416-1.312-.416-2.144 0-.939.16-1.707.48-2.304a4.111 4.111 0 011.248-1.44 5.826 5.826 0 011.792-.864 22.655 22.655 0 012.08-.48 21.363 21.363 0 012.112-.32c.683-.085 1.28-.192 1.792-.32.512-.149.918-.352 1.216-.608.299-.277.448-.672.448-1.184 0-.597-.117-1.077-.352-1.44a2.153 2.153 0 00-.864-.832 3.361 3.361 0 00-1.184-.384 8.607 8.607 0 00-1.28-.096c-1.152 0-2.112.224-2.88.672-.768.427-1.184 1.248-1.248 2.464h-2.72c.043-1.024.256-1.888.64-2.592a4.715 4.715 0 011.536-1.696 6.281 6.281 0 012.176-.96 11.791 11.791 0 012.656-.288c.747 0 1.483.053 2.208.16a5.634 5.634 0 012.016.672c.598.32 1.078.779 1.44 1.376.363.597.544 1.376.544 2.336v8.512c0 .64.032 1.109.096 1.408.086.299.342.448.768.448.235 0 .512-.053.832-.16v2.112zm-4.416-8.48c-.341.256-.789.448-1.344.576-.554.107-1.141.203-1.76.288-.597.064-1.205.149-1.824.256a6.34 6.34 0 00-1.664.448c-.49.213-.896.523-1.216.928-.298.384-.448.917-.448 1.6 0 .448.086.832.256 1.152.192.299.427.544.704.736.299.192.64.331 1.024.416.384.085.79.128 1.216.128.896 0 1.664-.117 2.304-.352.64-.256 1.163-.565 1.568-.928.406-.384.704-.789.896-1.216.192-.448.288-.864.288-1.248v-2.784zm8.612 3.328h-2.72c.042 1.024.256 1.899.64 2.624.384.704.896 1.28 1.536 1.728a6.62 6.62 0 002.208.928c.832.192 1.706.288 2.624.288.832 0 1.664-.085 2.496-.256.853-.149 1.61-.427 2.272-.832a4.7 4.7 0 001.632-1.6c.426-.661.64-1.493.64-2.496 0-.789-.16-1.451-.48-1.984a3.774 3.774 0 00-1.216-1.312 5.952 5.952 0 00-1.728-.864 19.383 19.383 0 00-1.984-.544c-.64-.149-1.28-.288-1.92-.416-.64-.149-1.216-.32-1.728-.512a4.611 4.611 0 01-1.28-.768 1.61 1.61 0 01-.48-1.184c0-.427.106-.768.32-1.024.213-.277.49-.491.832-.64a3.8 3.8 0 011.12-.352 8.396 8.396 0 011.248-.096c.448 0 .885.053 1.312.16.448.085.853.235 1.216.448.362.213.661.501.896.864.234.341.373.779.416 1.312h2.72c-.064-1.003-.278-1.835-.64-2.496a4.111 4.111 0 00-1.472-1.6c-.598-.405-1.291-.683-2.08-.832a12.26 12.26 0 00-2.592-.256c-.726 0-1.462.096-2.208.288a6.309 6.309 0 00-1.984.832 4.645 4.645 0 00-1.44 1.44c-.363.597-.544 1.312-.544 2.144 0 1.067.266 1.899.8 2.496a5.584 5.584 0 001.984 1.408c.81.32 1.685.576 2.624.768a24.57 24.57 0 012.592.608c.81.213 1.482.501 2.016.864.533.363.8.896.8 1.6 0 .512-.128.939-.384 1.28-.256.32-.587.565-.992.736a4.692 4.692 0 01-1.28.352c-.47.064-.918.096-1.344.096a8.271 8.271 0 01-1.632-.16 5.025 5.025 0 01-1.408-.512 3.143 3.143 0 01-.992-.992c-.256-.427-.395-.939-.416-1.536zm25.568-6.016h2.816c-.107-.981-.363-1.824-.768-2.528a5.547 5.547 0 00-1.568-1.792 6.037 6.037 0 00-2.176-1.024 9.393 9.393 0 00-2.624-.352c-1.302 0-2.443.235-3.424.704a6.735 6.735 0 00-2.464 1.888c-.64.789-1.12 1.728-1.44 2.816-.32 1.067-.48 2.219-.48 3.456s.16 2.379.48 3.424c.341 1.024.832 1.909 1.472 2.656a6.648 6.648 0 002.432 1.728c.981.405 2.101.608 3.36.608 2.112 0 3.776-.555 4.992-1.664 1.237-1.109 2.005-2.688 2.304-4.736h-2.784c-.171 1.28-.64 2.272-1.408 2.976-.747.704-1.792 1.056-3.136 1.056-.854 0-1.59-.171-2.208-.512a4.348 4.348 0 01-1.504-1.344 6.481 6.481 0 01-.864-1.952 9.727 9.727 0 01-.256-2.24c0-.832.085-1.632.256-2.4.17-.789.448-1.483.832-2.08a4.53 4.53 0 011.6-1.44c.661-.363 1.482-.544 2.464-.544 1.152 0 2.069.288 2.752.864.682.576 1.13 1.387 1.344 2.432zm5.859-5.312V228h2.72v-7.36c0-1.067.107-2.005.32-2.816.214-.832.555-1.536 1.024-2.112.47-.576 1.088-1.013 1.856-1.312.768-.299 1.696-.448 2.784-.448v-2.88c-1.472-.043-2.688.256-3.648.896s-1.77 1.632-2.432 2.976h-.064v-3.488h-2.56zm13.633-2.976v-3.328h-2.72v3.328h2.72zm-2.72 2.976V228h2.72v-16.544h-2.72zm7.029 0v22.848h2.72v-8.512h.064c.299.491.662.907 1.088 1.248.448.32.918.576 1.408.768.491.192.982.331 1.472.416a8.5 8.5 0 001.376.128c1.259 0 2.358-.224 3.296-.672.96-.448 1.75-1.056 2.368-1.824a7.642 7.642 0 001.408-2.752c.32-1.045.48-2.155.48-3.328s-.16-2.283-.48-3.328a8.068 8.068 0 00-1.44-2.752 6.53 6.53 0 00-2.368-1.92c-.938-.469-2.048-.704-3.328-.704-1.152 0-2.208.213-3.168.64-.96.405-1.664 1.067-2.112 1.984h-.064v-2.24h-2.72zm12.8 8.128c0 .811-.085 1.6-.256 2.368a6.247 6.247 0 01-.832 2.048 4.338 4.338 0 01-1.536 1.44c-.618.363-1.397.544-2.336.544-.938 0-1.738-.171-2.4-.512a4.988 4.988 0 01-1.632-1.408 6.019 6.019 0 01-.896-1.984 9.724 9.724 0 01-.288-2.368c0-.768.086-1.525.256-2.272a6.019 6.019 0 01.896-1.984 4.631 4.631 0 011.568-1.44c.64-.363 1.419-.544 2.336-.544.875 0 1.632.171 2.272.512.662.341 1.195.8 1.6 1.376.427.576.736 1.237.928 1.984.214.725.32 1.472.32 2.24zm9.849-8.128v-4.96h-2.72v4.96h-2.816v2.4h2.816v10.528c0 .768.075 1.387.224 1.856.149.469.373.832.672 1.088.32.256.725.437 1.216.544.512.085 1.12.128 1.824.128h2.08v-2.4h-1.248c-.427 0-.779-.011-1.056-.032-.256-.043-.459-.117-.608-.224a.874.874 0 01-.32-.448 3.658 3.658 0 01-.064-.768v-10.272h3.296v-2.4h-3.296z"
        fill="#fff"
      />
      <path
        // html text
        d="M26.496 448.152V471h3.04v-10.464h12.032V471h3.04v-22.848h-3.04v9.824H29.536v-9.824h-3.04zm28.278 2.56V471h3.04v-20.288h7.616v-2.56H47.158v2.56h7.616zm13.255-2.56V471h2.88v-19.008h.064L78.109 471H80.7l7.136-19.008h.064V471h2.88v-22.848h-4.16l-7.232 19.2-7.2-19.2h-4.16zm27.81 0V471h15.137v-2.56H98.88v-20.288h-3.04z"
        fill="#fff"
      />
      <path
        // node line
        id="node-dash"
        d="M606.5 381.732h68.177c5.926.001 11.793-.905 17.268-2.666 5.474-1.761 10.448-4.341 14.639-7.595 4.19-3.254 7.513-7.116 9.781-11.368 2.268-4.251 3.435-8.808 3.435-13.409v-92.772"
        stroke={isDarkMode ? "#eee" : "#1E223B"}
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeDasharray="6 8"
      />
      <path id="mongoCircle" opacity="0.32" d="M803.5 671C825.315 671 843 653.315 843 631.5C843 609.685 825.315 592 803.5 592C781.685 592 764 609.685 764 631.5C764 653.315 781.685 671 803.5 671Z" fill="white"/>
      <path id="mongoBox4" opacity="0.12" d="M803.042 631.929L781.704 619.529L781.769 642.727L803.108 655.127L803.042 631.929Z" fill="#BBBBBB"/>
<path id="mongoBox" d="M803.042 631.929L781.704 619.529L781.769 642.727L803.108 655.127L803.042 631.929Z" stroke="#1E223B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
<path id="mongoBox3" opacity="0.47" d="M823.23 620.274L801.892 607.873L781.704 619.529L803.042 631.929L823.23 620.274Z" fill="#2CAB0D"/>
<path id="mongoBox2" d="M823.23 620.274L801.892 607.873L781.704 619.529L803.042 631.929L823.23 620.274Z" stroke="#1E223B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
<path id="mongoBox1" d="M803.042 631.929L803.108 655.127L823.296 643.472L823.23 620.274L803.042 631.929Z" fill="#B4D8BF" stroke="#1E223B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
<path id="mongoV" d="M802.5 671C824.315 671 842 653.315 842 631.5C842 609.685 824.315 592 802.5 592C780.685 592 763 609.685 763 631.5C763 653.315 780.685 671 802.5 671Z" stroke="#1E223B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

export default MyStack;
