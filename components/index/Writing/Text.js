import styles from "./Text.module.scss";
import { useEffect, useRef } from "react";

function Text({ mouseEnteredBook, isDarkMode }) {
  // className config
  const stylesConfig = {
    stroke: isDarkMode ? "#fff" : "black"
  }

  const textAnimationTimeline = useRef(null);
  const isInitialRender = useRef(true);

  useEffect(() => {
    textAnimationTimeline.current = gsap.timeline();
    textAnimationTimeline.current.pause();

    textAnimationTimeline.current
      .to("#letter-r", 0.4, { strokeDashoffset: 0 })
      .to("#part-r", 0.3, { strokeDashoffset: 0 }, ">-.1")
      .to("#letter-e1", 0.3, { strokeDashoffset: 0 }, ">-.1")
      .to("#letter-c", 0.3, { strokeDashoffset: 0 }, ">-.1")
      .to("#letter-e2", 0.3, { strokeDashoffset: 0 }, ">-.1")
      .to("#part-n1", 0.2, { strokeDashoffset: 0 }, ">-.1")
      .to("#part-n2", 0.3, { strokeDashoffset: 0 }, ">-.1")
      .to("#letter-t1-part1", 0.3, { strokeDashoffset: 0 }, ">-.1")
      .to("#letter-t1-part2", 0.1, { strokeDashoffset: 0 }, ">.1")
      .to("#part-p1", 0.1, { strokeDashoffset: 0 }, ">.1")
      .to("#part-p2", 0.1, { strokeDashoffset: 0 }, ">")
      .to("#part-p3", 0.2, { strokeDashoffset: 0 }, ">.1")
      .to("#part-p4", 0.1, { strokeDashoffset: 0 }, ">")
      .to("#part-o1", 0.1, { strokeDashoffset: 0 }, ">-.1")
      .to("#part-o2", 0.3, { strokeDashoffset: 0 }, ">")
      .to("#part-o3", 0.1, { strokeDashoffset: 0 }, ">-.1")
      .to("#letter-s1-part1", 0.5, { strokeDashoffset: 0 }, ">-.1")
      .to("#letter-s1-part2", 0.4, { strokeDashoffset: 0 }, ">-.1")
      .to("#letter-t2-part1", 0.4, { strokeDashoffset: 0 }, ">-.1")
      .to("#letter-s2-part1", 0.5, { strokeDashoffset: 0 }, ">-.1")
      .to("#letter-s2-part2", 0.5, { strokeDashoffset: 0 }, ">-.1")
      .to("#letter-t2-part2", 0.1, { strokeDashoffset: 0 }, ">.1");
  }, []);

  useEffect(() => {
    if (isInitialRender.current) {
      isInitialRender.current = false;
      return;
    }

    textAnimationTimeline.current.restart();
  }, [mouseEnteredBook]);

  return (
    <svg
      className={styles.text}
      width="153"
      height="35"
      viewBox="0 0 153 35"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="recent">
        <path
          id="letter-e1"
          className={styles.letter__e1}
          d="M21 20L23 19L24 18L25 16V14L24 13H23L21 14L20 16V19L21 21L23 22H25L27 21L28 20L30 16.8L30.5 16L31.5 14.5L32.5 13.5L34 13H36L37 14V14.5"
          stroke={stylesConfig.stroke}
        />
        <path
          id="letter-r"
          className={styles.letter__r}
          d="M11 3L12 4V7L11 11M11 11L10 14L9 16L7 19L5 21L3 22H2L1 21V18L2 13L3 10L4 8L6 5L8 3L10 2L13 1H17L19 2L20 3L21 5V8L20 10L19 11L17 12H14L11 11Z"
          stroke={stylesConfig.stroke}
        />
        <path
          id="letter-c"
          className={styles.letter__c}
          d="M37 15V14L36 13H34L32 14L31 15L30 17V19L31 21L33 22H36L41 20"
          stroke={stylesConfig.stroke}
        />
        <path
          id="letter-e2"
          className={styles.letter__e2}
          d="M41 20L43 19L44 18L45 16V14L44 13H43L41 14L40 16V19L41 21L43 22H45L47 21L48 20L50 17"
          stroke={stylesConfig.stroke}
        />
        <path
          id="part-n1"
          className={styles.part__n1}
          d="M50 17L52 14L54 13L55 14V15L54 19L53 22"
          stroke={stylesConfig.stroke}
        />
        <path
          id="part-n2"
          className={styles.part__n2}
          d="M53 22L54 19L55 17L57 14L59 13H61L62 14V16L61 19V21L62 22H63L65 21L66 20L68 16.5"
          stroke={stylesConfig.stroke}
        />
        <path
          id="letter-t1-part1"
          className={styles.letter__t1__part1}
          d="M68 16.5L72.2 8.5L75 1L71.5 10.375L69 18.5V20.5L70 21.5H72L74 20.5L75 19.5"
          stroke={stylesConfig.stroke}
        />
        <path
          id="letter-t2-part1"
          className={styles.letter__t2__part1}
          d="M132 16.5L136.2 8.5L139 1L135.5 10.375L133 18.5V20.5L134 21.5H136L138 20.5"
          stroke={stylesConfig.stroke}
        />
        <path
          id="letter-t1-part2"
          className={styles.letter__t1__part2}
          d="M72.2 8H76H69"
          stroke={stylesConfig.stroke}
        />
        <path
          id="letter-t2-part2"
          className={styles.letter__t2__part2}
          d="M135.2 9H139H132"
          stroke={stylesConfig.stroke}
        />
        <path
          id="part-p1"
          className={styles.part__p1}
          d="M94.5 12C94.8148 13.574 94.5 13.7377 94 15.5L93 18L92 19L91 20L90.5 20.5L90 21"
          stroke={stylesConfig.stroke}
        />
        <path
          id="part-p3"
          className={styles.part__p3}
          d="M95 12L94 16L95 14L97 13H99L101 14L102 16V18L101 20L100 21L98 22H96L94 21"
          stroke={stylesConfig.stroke}
        />
        <path
          id="part-p4"
          className={styles.part__p4}
          d="M94 21L96 22H99L102 21L104 20L107 17"
          stroke={stylesConfig.stroke}
        />
        <path
          id="part-o2"
          className={styles.part__o2}
          d="M107 17V19L108 21L110 22H112L114 21L115 20L116 18V16L115 14L114 13.5"
          stroke={stylesConfig.stroke}
        />
        <path
          id="part-o1"
          className={styles.part__o1}
          d="M107 17L108 15L109 14L111 13H113L115 14"
          stroke={stylesConfig.stroke}
        />
        <path
          id="part-o3"
          className={styles.part__o3}
          d="M113 13L112 14V16L113 18L115 19H118L120 18L121 17"
          stroke={stylesConfig.stroke}
        />
        <path
          id="letter-s1-part1"
          className={styles.letter__s1__part1}
          d="M121 17L123 14L124 12V14L126 17L127 19V21L125 22H123L121 21"
          stroke={stylesConfig.stroke}
        />
        <path
          id="letter-s1-part2"
          className={styles.letter__s1__part2}
          d="M121 21L123 22H127L129 21L130 20L132 16.5"
          stroke={stylesConfig.stroke}
        />
        <path
          id="letter-s2-part1"
          className={styles.letter__s2__part1}
          d="M141 21L143 22H145L147 21V19L146 17L144 14V12L143 14L141 17L140 18.5L139 19.5L138 20.5L137 21"
          stroke={stylesConfig.stroke}
        />
        <path
          id="letter-s2-part2"
          className={styles.letter__s2__part2}
          d="M141 21L143 22H147L149 21L150 20L152 17"
          stroke={stylesConfig.stroke}
        />
        <path
          id="part-r"
          className={styles.part__r}
          d="M11 11L12 12L13 14V19L14 21L16 22L18 21.5L19 21L20 20.5L21 20"
          stroke={stylesConfig.stroke}
        />
        <path
          id="part-p2"
          className={styles.part__p2}
          d="M94.5 15L88 34"
          stroke={stylesConfig.stroke}
        />
      </g>
    </svg>
  );
}

export default Text;
