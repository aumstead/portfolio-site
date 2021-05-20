import styles from "./CleanCodeSvg.module.scss";
import { useEffect, useRef } from "react";

function CleanCodeSvg({ onMobile }) {
  const explosionTl = useRef(null);
  const clientFadeOutTl = useRef(null);
  const clientFadeInTl = useRef(null);

  const colorsArr = [
    // green
    "#219653",
    // red
    "#EB5757",
    // yellow
    "#fff48f",
    // logo orange
    "#FCA417",
    // logo blue
    "#2AA1FF",
    // purple
    "#895ade",
    "pink",
  ];

  useEffect(() => {
    // timeline initializations
    clientFadeOutTl.current = gsap.timeline();
    explosionTl.current = gsap.timeline();

    const timeout = function () {
      setTimeout(() => {
        initClientFadeInTl();
        explosionTl.current.restart().timeScale(1);
        clientFadeOutTl.current.restart();
      }, 1000);
    };

    clientFadeOutTl.current
      .set(".clientBackground", { fill: "#fff" })
      .to(".clientTop", { duration: 1, opacity: 0 }, "<")
      .to(".clientMiddle", { duration: 1, opacity: 0 }, "<")
      .to(".clientBottom", { duration: 1, opacity: 0 }, "<");

    explosionTl.current
      .addLabel("start", 0)
      .to(
        ".code1",
        {
          duration: 2,
          motionPath: { path: "#pathCode1", align: "self" },
          rotate: 300,
        },
        "<"
      )
      .to(
        ".code2",
        {
          duration: 2,
          motionPath: { path: "#pathCode2", align: "self" },
          rotate: 600,
        },
        "<"
      )
      .to(
        ".code3",
        {
          duration: 2,
          motionPath: { path: "#pathCode3", align: "self" },
          rotate: 300,
        },
        "<"
      )
      .to(
        ".code4",
        {
          duration: 2,
          motionPath: { path: "#pathCode4", align: "self" },
          rotate: 90,
        },
        "<"
      )
      .to(
        ".code5",
        {
          duration: 2,
          motionPath: { path: "#pathCode5", align: "self" },
        },
        "<"
      )
      .to(
        ".code6",
        {
          duration: 2,
          motionPath: { path: "#pathCode6", align: "self" },
          rotate: 1400,
        },
        "<"
      )
      .to(
        ".code7",
        {
          duration: 2,
          motionPath: { path: "#pathCode7", align: "self" },
          rotate: 600,
        },
        "<"
      )
      .to(
        ".code8",
        {
          duration: 2,
          motionPath: { path: "#pathCode8", align: "self" },
        },
        "<"
      )
      .to(
        ".code9",
        {
          duration: 2,
          motionPath: { path: "#pathCode9", align: "self" },
        },
        "<"
      )
      .to(
        ".code10",
        {
          duration: 2,
          motionPath: { path: "#pathCode10", align: "self" },
        },
        "<"
      )
      .to(
        ".code11",
        {
          duration: 2,
          motionPath: { path: "#pathCode11", align: "self" },
        },
        "<"
      )
      .to(
        ".code12",
        {
          duration: 2,
          motionPath: { path: "#pathCode12", align: "self" },
          rotate: 900,
        },
        "<"
      )
      .to(
        ".code13",
        {
          duration: 2,
          motionPath: { path: "#pathCode13", align: "self" },
          rotate: 1200,
        },
        "<"
      )
      .to(
        ".code14",
        {
          duration: 2,
          motionPath: { path: "#pathCode14", align: "self" },
          rotate: 1200,
        },
        "<"
      )
      .to(
        ".code15",
        {
          duration: 2,
          motionPath: { path: "#pathCode15", align: "self" },
          rotate: 500,
        },
        "<"
      )
      .to(
        ".code16",
        {
          duration: 2,
          motionPath: { path: "#pathCode16", align: "self" },
          rotate: 400,
        },
        "<"
      )
      .to(
        ".code17",
        {
          duration: 2,
          motionPath: { path: "#pathCode17", align: "self" },
          rotate: 25,
        },
        "<"
      )
      .to(
        ".code18",
        {
          duration: 2,
          motionPath: { path: "#pathCode18", align: "self" },
          rotate: 120,
        },
        "<"
      )
      .to(
        ".code19",
        {
          duration: 2,
          motionPath: { path: "#pathCode19", align: "self" },
          rotate: 120,
        },
        "<"
      )
      .to(
        ".code20",
        {
          duration: 2,
          motionPath: { path: "#pathCode20", align: "self" },
          rotate: 120,
        },
        "<"
      )
      .to(
        ".code21",
        {
          duration: 2,
          motionPath: { path: "#pathCode21", align: "self" },
          rotate: 120,
        },
        "<"
      )
      .to(
        ".code22",
        {
          duration: 2,
          motionPath: { path: "#pathCode22", align: "self" },
          rotate: 1200,
        },
        "<"
      )
      .to(
        ".code23",
        {
          duration: 2,
          motionPath: { path: "#pathCode23", align: "self" },
          rotate: 1200,
        },
        "<"
      )

      // fade out the flying code blocks
      .to(".code1", { duration: 1, opacity: 0 }, "<1")
      .to(".code2", { duration: 1, opacity: 0 }, "<")
      .to(".code3", { duration: 1, opacity: 0 }, "<")
      .to(".code4", { duration: 1, opacity: 0 }, "<")
      .to(".code5", { duration: 1, opacity: 0 }, "<")
      .to(".code6", { duration: 1, opacity: 0 }, "<")
      .to(".code7", { duration: 1, opacity: 0 }, "<")
      .to(".code8", { duration: 1, opacity: 0 }, "<")
      .to(".code9", { duration: 1, opacity: 0 }, "<")
      .to(".code10", { duration: 1, opacity: 0 }, "<")
      .to(".code11", { duration: 1, opacity: 0 }, "<")
      .to(".code12", { duration: 1, opacity: 0 }, "<")
      .to(".code13", { duration: 1, opacity: 0 }, "<")
      .to(".code14", { duration: 1, opacity: 0 }, "<")
      .to(".code15", { duration: 1, opacity: 0 }, "<")
      .to(".code16", { duration: 1, opacity: 0 }, "<")
      .to(".code17", { duration: 1, opacity: 0 }, "<")
      .to(".code18", { duration: 1, opacity: 0 }, "<")
      .to(".code19", { duration: 1, opacity: 0 }, "<")
      .to(".code20", { duration: 1, opacity: 0 }, "<")
      .to(".code21", { duration: 1, opacity: 0 }, "<")
      .to(".code22", { duration: 1, opacity: 0 }, "<")
      .to(".code23", { duration: 1, opacity: 0 }, "<")

      .eventCallback("onComplete", () => {
        if (!explosionTl.current.reversed()) {
          explosionTl.current.reversed(true).timeScale(2);
        } else {
          explosionTl.current.reversed(false).timeScale(1);
        }
        explosionTl.current.reverse();
        clientFadeInTl.current.restart();
      });

    explosionTl.current.pause();
    clientFadeOutTl.current.pause();

    if (onMobile) {
      timeout();
    }

    return () => {
      clearTimeout(timeout);
    };
  }, []);

  function initClientFadeInTl() {
    clientFadeInTl.current = gsap.timeline();
    clientFadeInTl.current
      .to(".clientTop", {
        delay: 0.8,
        duration: 0.3,
        stroke: "#000",
        opacity: 0.34,
      })
      .to(
        ".clientMiddle",
        { duration: 0.3, stroke: "#000", opacity: 0.34 },
        "<"
      )
      .to(".clientBottom", { duration: 0.3, stroke: "#000", opacity: 1 }, "<")
      .to(
        ".clientBackground",
        {
          duration: 0.3,
          fill: colorsArr[Math.floor(Math.random() * 7)],
          opacity: 1,
        },
        "<"
      );
    clientFadeInTl.current.pause();
  }

  // function is used for both onMouseEnter and onClick events (desktop vs mobile)
  function handleMouseEnter() {
    // fadeIn timeline is initialized in handler in order to generate a random background color each time
    initClientFadeInTl();
    explosionTl.current.restart().timeScale(1);
    clientFadeOutTl.current.restart();
  }

  return (
    <svg
      className={styles.cleanCodeSvg}
      width={482}
      height={242}
      viewBox="0 0 482 242"
      fill="none"
      onMouseEnter={onMobile ? null : handleMouseEnter}
      onClick={onMobile ? handleMouseEnter : null}
    >
      <path
        opacity={0.1}
        d="M475.121 241.884H6.795c-3.775 0-6.795-2.992-6.795-6.732s3.02-6.732 6.795-6.732h468.326c3.775 0 6.795 2.992 6.795 6.732s-3.02 6.732-6.795 6.732z"
        fill="#C9C9C9"
      />
      <path
        d="M93.903 172.32c-7.248 0-13.061-5.835-13.061-12.941 0-7.106 5.889-12.94 13.061-12.94h73.991v25.955h-73.99v-.074z"
        fill="#CECECE"
      />
      <path
        d="M172.197 176.807H93.903c-9.739 0-17.591-7.854-17.591-17.428 0-9.649 7.928-17.429 17.591-17.429h78.294v34.857z"
        fill="#fff"
      />
      <path
        d="M89.072 155.34h78.822M89.072 163.269h78.822M93.903 172.32c-7.248 0-13.061-5.835-13.061-12.941 0-7.106 5.889-12.94 13.061-12.94h73.991v25.955h-73.99v-.074z"
        stroke="#1F3969"
        strokeWidth={4}
        strokeMiterlimit={10}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M93.903 172.319c-7.248 0-13.061-5.834-13.061-12.94s5.889-12.941 13.061-12.941h75.274l3.02-4.488H93.903c-9.739 0-17.591 7.854-17.591 17.429 0 9.649 7.928 17.428 17.591 17.428h78.294l-3.02-4.488H93.904z"
        fill="#FF3E3E"
      />
      <path
        d="M93.903 172.319c-7.248 0-13.061-5.834-13.061-12.94s5.889-12.941 13.061-12.941h75.274l3.02-4.488H93.903c-9.739 0-17.591 7.854-17.591 17.429 0 9.649 7.928 17.428 17.591 17.428h78.294l-3.02-4.488H93.904z"
        stroke="#1F3969"
        strokeWidth={4}
        strokeMiterlimit={10}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        opacity={0.28}
        d="M155.36 141.876h-13.891v34.932h13.891v-34.932z"
        fill="#1F3969"
        stroke="#1F3969"
        strokeWidth={4}
        strokeMiterlimit={10}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M164.118 205.606H20.744c-2.793 0-5.134-2.244-5.134-5.087v-18.7c0-2.767 2.265-5.086 5.134-5.086h143.374c2.794 0 5.135 2.244 5.135 5.086v18.7c0 2.843-2.266 5.087-5.135 5.087z"
        fill="#50B56F"
      />
      <path
        d="M164.118 205.606H20.744c-2.793 0-5.134-2.244-5.134-5.087v-18.7c0-2.767 2.265-5.086 5.134-5.086h143.374c2.794 0 5.135 2.244 5.135 5.086v18.7c0 2.843-2.266 5.087-5.135 5.087z"
        stroke="#1F3969"
        strokeWidth={4}
        strokeMiterlimit={10}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        opacity={0.28}
        d="M164.119 176.808h-22.65v11.22c0 7.031 5.738 12.79 12.91 12.79h14.874v-18.924c0-2.842-2.265-5.086-5.134-5.086z"
        fill="#1F3969"
        stroke="#1F3969"
        strokeWidth={4}
        strokeMiterlimit={10}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M204.511 211.44h-166.1c.981 2.394 1.51 5.386 1.51 8.527 0 3.142-.529 6.059-1.51 8.527h166.024c-.981-2.393-1.51-5.385-1.51-8.527.076-3.216.604-6.133 1.586-8.527z"
        fill="#CECECE"
      />
      <path
        d="M34.456 210.865v-3.488h174.085v3.488H34.457z"
        fill="#5F5AFF"
        stroke="#000"
      />
      <path
        d="M209.041 206.877H33.957v4.488H209.04v-4.488z"
        stroke="#1F3969"
        strokeWidth={4}
        strokeMiterlimit={10}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M209.041 228.42H33.957v4.488H209.04v-4.488z" fill="#F6F9FD" />
      <path d="M209.041 228.42H33.957v4.488H209.04v-4.488z" fill="#5F5AFF" />
      <path
        d="M209.041 228.42H33.957v4.488H209.04v-4.488z"
        stroke="#1F3969"
        strokeWidth={4}
        strokeMiterlimit={10}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M296.017 216.975l-2.265-25.207h-37.297l-2.265 25.207c-.528 5.835-4.077 11.445-9.664 15.933v.074h61.155v-.074c-5.587-4.488-9.135-10.098-9.664-15.933z"
        fill="#BFCFE2"
      />
      <path
        opacity={0.28}
        d="M256.455 191.768l-1.359 15.109h40.015l-1.359-15.109h-37.297z"
        fill="#1F3969"
        stroke="#1F3969"
        strokeWidth={4}
        strokeMiterlimit={10}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        // monitor base
        d="M296.017 216.975l-2.265-25.207h-37.297l-2.265 25.207c-.528 5.835-4.077 11.445-9.664 15.933v.074h61.155v-.074c-5.587-4.488-9.135-10.098-9.664-15.933z"
        stroke="#1F3969"
        strokeWidth={4}
        strokeMiterlimit={10}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M394.393 195.508h-238.58c-4.983 0-9.06-4.04-9.06-8.976V32.444c0-4.937 4.077-8.976 9.06-8.976h238.58c4.983 0 9.06 4.039 9.06 8.976v154.088c0 5.011-4.077 8.976-9.06 8.976z"
        fill="#fff"
      />
      <path
        d="M394.393 195.508h-238.58c-4.983 0-9.06-4.04-9.06-8.976V32.444c0-4.937 4.077-8.976 9.06-8.976h238.58c4.983 0 9.06 4.039 9.06 8.976v154.088c0 5.011-4.077 8.976-9.06 8.976z"
        fill="#BFCFE2"
      />
      <path
        // monitor outer border
        d="M394.393 195.508h-238.58c-4.983 0-9.06-4.04-9.06-8.976V32.444c0-4.937 4.077-8.976 9.06-8.976h238.58c4.983 0 9.06 4.039 9.06 8.976v154.088c0 5.011-4.077 8.976-9.06 8.976z"
        stroke="#1F3969"
        strokeWidth={4}
        strokeMiterlimit={10}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M390.66 166.805v-130.6H159.63v130.6h231.03z" fill="#F6F9FD" />
      <path
        opacity={0.28}
        d="M167.894 23.468V127.14c0 3.292 2.718 5.984 6.04 5.984h142.77c3.322 0 6.04-2.692 6.04-5.984V23.468h-154.85z"
        fill="#1F3969"
        stroke="#1F3969"
        strokeWidth={4}
        strokeMiterlimit={10}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        // monitor inner border
        d="M390.66 166.805v-130.6H159.63v130.6h231.03zM264.987 181.071h20.309"
        stroke="#1F3969"
        strokeWidth={4}
        strokeMiterlimit={10}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M323.499 124.896H180.728c-3.322 0-6.04-2.693-6.04-5.984V8.058c0-3.29 2.718-5.984 6.04-5.984h142.771c3.322 0 6.04 2.693 6.04 5.984v110.929c0 3.291-2.718 5.909-6.04 5.909z"
        fill="#2D425E"
      />
      <path
        // ??
        d="M329.539 16.586H174.688V7.984c0-3.291 2.718-5.984 6.04-5.984h142.771c3.322 0 6.04 2.693 6.04 5.984v8.602z"
        stroke="#1F3969"
        strokeWidth={4}
        strokeMiterlimit={10}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M329.539 19.428H174.688V7.984c0-3.291 2.718-5.984 6.04-5.984h142.771c3.322 0 6.04 2.693 6.04 5.984v11.444z"
        fill="#D0DDF0"
      />
      <path
        // ??
        d="M329.539 19.428H174.688V7.984c0-3.291 2.718-5.984 6.04-5.984h142.771c3.322 0 6.04 2.693 6.04 5.984v11.444z"
        stroke="#1F3969"
        strokeWidth={4}
        strokeMiterlimit={10}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        // ide toolbar border bottom
        d="M329.539 19.428H174.688V7.984c0-3.291 2.718-5.984 6.04-5.984h142.771c3.322 0 6.04 2.693 6.04 5.984v11.444z"
        stroke="#1F3969"
        strokeWidth={4}
        strokeMiterlimit={10}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        // ide border
        d="M323.499 124.896H180.728c-3.322 0-6.04-2.693-6.04-5.984V8.058c0-3.29 2.718-5.984 6.04-5.984h142.771c3.322 0 6.04 2.693 6.04 5.984v110.929c0 3.291-2.718 5.909-6.04 5.909z"
        stroke="#1F3969"
        strokeWidth={4}
        strokeMiterlimit={10}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        opacity={0.28}
        d="M398.017 151.376h-87.58c-3.322 0-6.04-2.693-6.04-5.984v-91.93c0-3.29 2.718-5.984 6.04-5.984h87.58c3.322 0 6.04 2.693 6.04 5.984v91.93c0 3.366-2.718 5.984-6.04 5.984z"
        fill="#1F3969"
        stroke="#1F3969"
        strokeWidth={4}
        strokeMiterlimit={10}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        className="clientBackground"
        id="clientBackground"
        d="M404.058 146.14h-87.58c-3.322 0-6.04-2.693-6.04-5.984v-91.93c0-3.29 2.718-5.984 6.04-5.984h87.58c3.322 0 6.04 2.693 6.04 5.984v91.93c0 3.366-2.718 5.984-6.04 5.984z"
        fill={colorsArr[Math.floor(Math.random() * 7)]}
      />
      <path
        // client outline
        d="M404.058 146.14h-87.58c-3.322 0-6.04-2.693-6.04-5.984v-91.93c0-3.29 2.718-5.984 6.04-5.984h87.58c3.322 0 6.04 2.693 6.04 5.984v91.93c0 3.366-2.718 5.984-6.04 5.984z"
        stroke="#1F3969"
        strokeWidth={4}
        strokeMiterlimit={10}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        className="clientTop"
        id="clientTop"
        opacity={0.34}
        d="M390.996 70.741h-61.608c-2.19 0-3.926-1.72-3.926-3.89v-5.834c0-2.169 1.736-3.89 3.926-3.89h61.608c2.189 0 3.926 1.721 3.926 3.89v5.835c0 2.169-1.737 3.89-3.926 3.89z"
        stroke="#000"
        strokeWidth={2}
        strokeMiterlimit={10}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <g
        opacity={0.34}
        stroke="#fff"
        strokeWidth={2}
        strokeMiterlimit={10}
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path
          className="clientMiddle"
          id="clientMiddle"
          stroke="#000"
          opacity={0.8}
          d="M363.967 92.658h-34.428c-2.189 0-3.926-1.72-3.926-3.89v-5.834c0-2.17 1.737-3.89 3.926-3.89h34.428c2.189 0 3.926 1.72 3.926 3.89v5.834c-.075 2.17-1.812 3.89-3.926 3.89zM391.071 92.658h-13.363c-2.19 0-3.926-1.72-3.926-3.89v-5.834c0-2.17 1.736-3.89 3.926-3.89h13.363c2.19 0 3.926 1.72 3.926 3.89v5.834c0 2.17-1.736 3.89-3.926 3.89z"
        />
      </g>
      <path
        className="clientBottom"
        id="clientBottom"
        d="M325.537 115.397h69.385M325.537 123.475h69.385M325.537 131.554h42.28"
        stroke="#000"
        strokeWidth={2}
        strokeMiterlimit={10}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M189.864 13.744c1.668 0 3.02-1.34 3.02-2.992 0-1.653-1.352-2.992-3.02-2.992s-3.02 1.34-3.02 2.992 1.352 2.992 3.02 2.992zM200.358 13.744c1.668 0 3.02-1.34 3.02-2.992 0-1.653-1.352-2.992-3.02-2.992s-3.02 1.34-3.02 2.992 1.352 2.992 3.02 2.992zM210.853 13.744c1.668 0 3.02-1.34 3.02-2.992 0-1.653-1.352-2.992-3.02-2.992s-3.02 1.34-3.02 2.992 1.352 2.992 3.02 2.992z"
        fill="#1F3969"
      />
      <path
        className={`code3`}
        id="code3"
        d="M263.628 33.266h9.815"
        stroke="#FF5757"
        strokeWidth={4}
        strokeMiterlimit={10}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        id="pathCode3"
        d="M39.5 1C-5.29998 151 -1.49998 193.167 6.00002 195.5"
      />
      <path
        className={`code2`}
        id="code2"
        d="M213.873 33.266h42.507"
        stroke="#7BFFA0"
        strokeWidth={4}
        strokeMiterlimit={10}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path id="pathCode2" d="M235 33C77.3308 95.7258 19.3045 189.136 10 228" />
      <path
        className="code1"
        id="code1"
        d="M192.884 33.266h14.949"
        stroke="#9169FF"
        strokeWidth={4}
        strokeMiterlimit={10}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path id="pathCode1" d="M0.5 1C261.7 47 329 68.8333 330 74" />
      <path
        className="code23"
        id="code23"
        d="M212.363 106.944h32.465"
        stroke="#9169FF"
        strokeWidth={4}
        strokeMiterlimit={10}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        id="pathCode23"
        d="M132 0.999997C60.7897 98.582 14.9957 131.659 0.999996 136"
      />
      <path
        className="code22"
        id="code22"
        d="M192.884 106.944h10.495"
        stroke="#7BFFA0"
        strokeWidth={4}
        strokeMiterlimit={10}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path id="pathCode22" d="M1 0.5C232.6 102.9 334.833 123.833 357 121.5" />
      <path
        className="code6"
        id="code6"
        d="M256.379 42.467h6.116"
        stroke="#FF5757"
        strokeWidth={4}
        strokeMiterlimit={10}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path id="pathCode6" d="M259.5 56.5C244.7 20.1 95.3333 20 22.5 24.5" />
      <path
        className="code5"
        id="code5"
        d="M228.595 42.467h20.536"
        stroke="#9169FF"
        strokeWidth={4}
        strokeMiterlimit={10}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        id="pathCode5"
        d="M238.5 56.5C114.5 110.1 85.8334 41.8333 87.0001 1"
      />
      <path
        className="code4"
        id="code4"
        d="M200.358 42.467h20.914"
        stroke="#FFC47D"
        strokeWidth={4}
        strokeMiterlimit={10}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path id="pathCode4" d="M259.5 56.5C244.7 20.1 95.3333 20 22.5 24.5" />
      <path
        className="code8"
        id="code8"
        d="M232.748 51.667h18.044"
        stroke="#7BFFA0"
        strokeWidth={4}
        strokeMiterlimit={10}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path id="pathCode8" d="M218 51.5C48.4 44.7 28 144 39 194.5" />
      <path
        className="code7"
        id="code7"
        d="M210.098 51.667h16.987"
        stroke="#FF5757"
        strokeWidth={4}
        strokeMiterlimit={10}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path id="pathCode7" d="M241.5 52C388.3 103.6 447.667 48.8333 459 15" />
      <path
        className="code11"
        id="code11"
        d="M235.164 60.868h3.699"
        stroke="#FFC47D"
        strokeWidth={4}
        strokeMiterlimit={10}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path id="pathCode11" d="M225 61.5C415.4 86.3 464 57.5 464.5 40" />
      <path
        className="code10"
        id="code10"
        d="M220.215 60.868h8.38"
        stroke="#9169FF"
        strokeWidth={4}
        strokeMiterlimit={10}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path id="pathCode10" d="M237.5 60.5C392.3 169.3 413 217.167 404 227.5" />
      <path
        className="code9"
        id="code9"
        d="M200.358 60.868h13.515"
        stroke="#7BFFA0"
        strokeWidth={4}
        strokeMiterlimit={10}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        id="pathCode9"
        d="M237 60.5C173.5 217.5 194 220.5 217.5 221C236.3 221.4 294 214.833 320.5 211.5"
      />
      <path
        className="code13"
        id="code13"
        d="M229.35 70.143h24.085"
        stroke="#FFC47D"
        strokeWidth={4}
        strokeMiterlimit={10}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path id="pathCode13" d="M241.5 70C431.1 60 483.167 43.1667 485.5 36" />
      <path
        className="code12"
        id="code12"
        d="M200.358 70.143h21.593"
        stroke="#FF5757"
        strokeWidth={4}
        strokeMiterlimit={10}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path id="pathCode12" d="M211.5 70C331.5 200 382.5 231.167 393 230.5" />
      <path
        className="code16"
        id="code16"
        d="M257.21 79.343h13.061"
        stroke="#9169FF"
        strokeWidth={4}
        strokeMiterlimit={10}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        id="pathCode16"
        d="M1.01054 73C0.533454 1.18176 16.2774 -0.881985 42.0403 1.59451C67.8031 4.071 144.615 1.18176 147 5.722"
      />
      <path
        className="code15"
        id="code15"
        d="M229.35 79.343h20.914"
        stroke="#FF5757"
        strokeWidth={4}
        strokeMiterlimit={10}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path id="pathCode15" d="M230.5 72C46.5 34.8 0.5 8.83333 0.5 0.5" />
      <path
        className="code14"
        id="code14"
        d="M210.098 79.343h11.853"
        stroke="#7BFFA0"
        strokeWidth={4}
        strokeMiterlimit={10}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        id="pathCode14"
        d="M1 1C255 69 216.5 -19.5 257 45.5C289.4 97.5 243.833 124.833 217 132"
      />
      <path
        className="code18"
        id="code18"
        d="M238.863 88.544h11.401"
        stroke="#FF5757"
        strokeWidth={4}
        strokeMiterlimit={10}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        id="pathCode18"
        d="M294 152C49.0577 105.812 -3.22114 32.0882 1.25721 1"
      />
      <path
        className="code17"
        id="code17"
        d="M210.098 88.544h20.913"
        stroke="#9169FF"
        strokeWidth={4}
        strokeMiterlimit={10}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        id="pathCode17"
        d="M208 15.5C23 -7.00001 31 -0.50001 20.5 15.5C10 31.5 -1.49997 47.5 1.00003 58"
      />
      <path
        className="code21"
        id="code21"
        d="M268.535 97.744h13.061"
        stroke="#fff"
        strokeWidth={4}
        strokeMiterlimit={10}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path id="pathCode21" d="M0.5 1C109.3 125.8 216.167 144.333 256 138" />
      <path
        className="code20"
        id="code20"
        d="M228.595 97.744h32.843"
        stroke="#FFC47D"
        strokeWidth={4}
        strokeMiterlimit={10}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path id="pathCode20" d="M42.5 1C-18.3 114.6 1.5 173.333 19 188.5" />
      <path
        className="code19"
        id="code19"
        d="M200.358 97.744h20.914"
        stroke="#FF5757"
        strokeWidth={4}
        strokeMiterlimit={10}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path id="pathCode19" d="M272.5 42C74.9 27.2 8.83333 8.16667 0.5 0.5" />
      <path
        // bottom book
        d="M40.298 216.601h162.703M40.298 222.585h162.703M204.511 211.44h-166.1c.981 2.394 1.51 5.386 1.51 8.527 0 3.142-.529 6.059-1.51 8.527h166.024c-.981-2.393-1.51-5.385-1.51-8.527.076-3.216.604-6.133 1.586-8.527z"
        stroke="#1F3969"
        strokeWidth={4}
        strokeMiterlimit={10}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M427.953 150.456l-7.349.855 6.391 53.936 7.349-.855-6.391-53.936z"
        fill="#FFA364"
      />
      <path
        d="M427.963 150.514l-7.349.854.651 5.498 7.349-.855-.651-5.497z"
        fill="#2AA1FF"
      />
      <path
        d="M427.963 150.514l-7.349.854.651 5.498 7.349-.855-.651-5.497z"
        stroke="#1F3969"
        strokeWidth={4}
        strokeMiterlimit={10}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M427.953 150.456l-7.349.855 6.391 53.936 7.349-.855-6.391-53.936z"
        stroke="#1F3969"
        strokeWidth={4}
        strokeMiterlimit={10}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M448.103 161.504l-7.355-.792-5.925 53.984 7.355.793 5.925-53.985z"
        fill="#FF5252"
      />
      <path
        d="M448.103 161.504l-7.355-.792-5.925 53.984 7.355.793 5.925-53.985z"
        stroke="#1F3969"
        strokeWidth={4}
        strokeMiterlimit={10}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M448.158 161.517l-7.356-.793-.603 5.503 7.355.793.604-5.503z"
        fill="#2D425E"
      />
      <path
        d="M448.158 161.517l-7.356-.793-.603 5.503 7.355.793.604-5.503z"
        stroke="#1F3969"
        strokeWidth={4}
        strokeMiterlimit={10}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M452.679 233.132h-29.671l-4.832-45.03h39.335l-4.832 45.03z"
        fill="#6567C3"
      />
      <path
        d="M418.176 188.102l.076.823h29.973l-4.756 44.207h9.21l4.832-45.03h-39.335z"
        fill="#6567C3"
      />
      <path
        d="M452.679 233.132h-29.671l-4.832-45.03h39.335l-4.832 45.03z"
        stroke="#1F3969"
        strokeWidth={4}
        strokeMiterlimit={10}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default CleanCodeSvg;
