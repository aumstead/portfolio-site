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
      {/* <path
        d="M55.12 189.014h1.33a3.655 3.655 0 00-.476-1.4 3.432 3.432 0 00-.91-1.022 3.981 3.981 0 00-1.246-.616 5.138 5.138 0 00-1.484-.21c-.765 0-1.447.14-2.044.42a4.225 4.225 0 00-1.484 1.12 5 5 0 00-.896 1.68 6.605 6.605 0 00-.308 2.044c0 .728.093 1.409.28 2.044.196.635.485 1.185.868 1.652.383.467.863.835 1.442 1.106.579.261 1.255.392 2.03.392 1.279 0 2.287-.35 3.024-1.05.737-.7 1.171-1.68 1.302-2.94h-1.33a3.814 3.814 0 01-.252 1.148 2.686 2.686 0 01-1.47 1.526c-.336.14-.723.21-1.162.21-.597 0-1.11-.112-1.54-.336a3.108 3.108 0 01-1.064-.896 4.034 4.034 0 01-.602-1.33 6.56 6.56 0 01-.196-1.624c0-.523.065-1.027.196-1.512.13-.485.331-.915.602-1.288.28-.383.63-.686 1.05-.91.43-.224.943-.336 1.54-.336.7 0 1.302.177 1.806.532.513.355.845.887.994 1.596zm3.076-3.01V196h6.621v-1.12h-5.291v-8.876h-1.33zm7.779 0V196h6.944v-1.12h-5.614v-3.458h5.194v-1.12h-5.194v-3.178h5.572v-1.12h-6.902zm10.28 5.866l1.694-4.662h.028l1.666 4.662h-3.388zm.994-5.866L73.357 196h1.358l1.12-3.01h4.228l1.092 3.01h1.47l-3.906-9.996h-1.47zm6.349 0V196h1.26v-8.022h.027L90.107 196h1.457v-9.996h-1.26v8.106h-.029l-5.264-8.106h-1.413zm21.042 3.01h1.33a3.672 3.672 0 00-.476-1.4 3.436 3.436 0 00-.91-1.022 3.989 3.989 0 00-1.246-.616 5.143 5.143 0 00-1.484-.21c-.766 0-1.447.14-2.044.42a4.225 4.225 0 00-1.484 1.12 5.001 5.001 0 00-.896 1.68 6.605 6.605 0 00-.309 2.044c0 .728.094 1.409.28 2.044.197.635.486 1.185.868 1.652.383.467.864.835 1.442 1.106.579.261 1.256.392 2.031.392 1.278 0 2.286-.35 3.024-1.05.737-.7 1.171-1.68 1.302-2.94h-1.33a3.814 3.814 0 01-.252 1.148c-.14.355-.336.663-.588.924a2.692 2.692 0 01-.882.602c-.336.14-.724.21-1.162.21-.598 0-1.111-.112-1.54-.336a3.105 3.105 0 01-1.064-.896 4.036 4.036 0 01-.603-1.33 6.564 6.564 0 01-.196-1.624c0-.523.066-1.027.197-1.512a3.9 3.9 0 01.602-1.288c.28-.383.63-.686 1.05-.91.429-.224.942-.336 1.54-.336.7 0 1.302.177 1.806.532.513.355.844.887.994 1.596zm3.845 1.988c0-.504.065-.999.196-1.484.131-.495.336-.938.616-1.33.28-.392.639-.705 1.078-.938.439-.243.961-.364 1.568-.364.607 0 1.129.121 1.568.364.439.233.798.546 1.078.938.28.392.485.835.616 1.33.131.485.196.98.196 1.484a5.83 5.83 0 01-.196 1.498 4.068 4.068 0 01-.616 1.316c-.28.392-.639.709-1.078.952-.439.233-.961.35-1.568.35-.607 0-1.129-.117-1.568-.35a3.219 3.219 0 01-1.078-.952 4.068 4.068 0 01-.616-1.316 5.83 5.83 0 01-.196-1.498zm-1.33 0c0 .681.098 1.339.294 1.974.205.625.509 1.181.91 1.666.401.485.901.873 1.498 1.162.597.28 1.293.42 2.086.42.793 0 1.489-.14 2.086-.42a4.407 4.407 0 001.498-1.162c.401-.485.7-1.041.896-1.666a6.386 6.386 0 00.308-1.974c0-.681-.103-1.335-.308-1.96a4.852 4.852 0 00-.896-1.68 4.407 4.407 0 00-1.498-1.162c-.597-.289-1.293-.434-2.086-.434-.793 0-1.489.145-2.086.434a4.407 4.407 0 00-1.498 1.162 5.036 5.036 0 00-.91 1.68 6.515 6.515 0 00-.294 1.96zm12.527 3.878v-7.756h2.24c.616 0 1.134.089 1.554.266.42.168.76.42 1.022.756.27.327.462.728.574 1.204.121.467.182.999.182 1.596 0 .616-.066 1.143-.196 1.582-.122.429-.28.789-.476 1.078-.196.289-.42.518-.672.686a3.34 3.34 0 01-.742.392c-.252.084-.49.14-.714.168a6.812 6.812 0 01-.56.028h-2.212zm-1.33-8.876V196h3.43c.83 0 1.549-.117 2.156-.35a3.794 3.794 0 001.498-1.008c.392-.448.681-.994.868-1.638.186-.653.28-1.4.28-2.24 0-1.605-.416-2.8-1.246-3.584-.831-.784-2.016-1.176-3.556-1.176h-3.43zm9.857 0V196h6.944v-1.12h-5.614v-3.458h5.194v-1.12h-5.194v-3.178h5.572v-1.12h-6.902z"
        fill="#fff"
      />
      <path
        d="M55.12 189.014h1.33a3.655 3.655 0 00-.476-1.4 3.432 3.432 0 00-.91-1.022 3.981 3.981 0 00-1.246-.616 5.138 5.138 0 00-1.484-.21c-.765 0-1.447.14-2.044.42a4.225 4.225 0 00-1.484 1.12 5 5 0 00-.896 1.68 6.605 6.605 0 00-.308 2.044c0 .728.093 1.409.28 2.044.196.635.485 1.185.868 1.652.383.467.863.835 1.442 1.106.579.261 1.255.392 2.03.392 1.279 0 2.287-.35 3.024-1.05.737-.7 1.171-1.68 1.302-2.94h-1.33a3.814 3.814 0 01-.252 1.148 2.686 2.686 0 01-1.47 1.526c-.336.14-.723.21-1.162.21-.597 0-1.11-.112-1.54-.336a3.108 3.108 0 01-1.064-.896 4.034 4.034 0 01-.602-1.33 6.56 6.56 0 01-.196-1.624c0-.523.065-1.027.196-1.512.13-.485.331-.915.602-1.288.28-.383.63-.686 1.05-.91.43-.224.943-.336 1.54-.336.7 0 1.302.177 1.806.532.513.355.845.887.994 1.596zm3.076-3.01V196h6.621v-1.12h-5.291v-8.876h-1.33zm7.779 0V196h6.944v-1.12h-5.614v-3.458h5.194v-1.12h-5.194v-3.178h5.572v-1.12h-6.902zm10.28 5.866l1.694-4.662h.028l1.666 4.662h-3.388zm.994-5.866L73.357 196h1.358l1.12-3.01h4.228l1.092 3.01h1.47l-3.906-9.996h-1.47zm6.349 0V196h1.26v-8.022h.027L90.107 196h1.457v-9.996h-1.26v8.106h-.029l-5.264-8.106h-1.413zm21.042 3.01h1.33a3.672 3.672 0 00-.476-1.4 3.436 3.436 0 00-.91-1.022 3.989 3.989 0 00-1.246-.616 5.143 5.143 0 00-1.484-.21c-.766 0-1.447.14-2.044.42a4.225 4.225 0 00-1.484 1.12 5.001 5.001 0 00-.896 1.68 6.605 6.605 0 00-.309 2.044c0 .728.094 1.409.28 2.044.197.635.486 1.185.868 1.652.383.467.864.835 1.442 1.106.579.261 1.256.392 2.031.392 1.278 0 2.286-.35 3.024-1.05.737-.7 1.171-1.68 1.302-2.94h-1.33a3.814 3.814 0 01-.252 1.148c-.14.355-.336.663-.588.924a2.692 2.692 0 01-.882.602c-.336.14-.724.21-1.162.21-.598 0-1.111-.112-1.54-.336a3.105 3.105 0 01-1.064-.896 4.036 4.036 0 01-.603-1.33 6.564 6.564 0 01-.196-1.624c0-.523.066-1.027.197-1.512a3.9 3.9 0 01.602-1.288c.28-.383.63-.686 1.05-.91.429-.224.942-.336 1.54-.336.7 0 1.302.177 1.806.532.513.355.844.887.994 1.596zm3.845 1.988c0-.504.065-.999.196-1.484.131-.495.336-.938.616-1.33.28-.392.639-.705 1.078-.938.439-.243.961-.364 1.568-.364.607 0 1.129.121 1.568.364.439.233.798.546 1.078.938.28.392.485.835.616 1.33.131.485.196.98.196 1.484a5.83 5.83 0 01-.196 1.498 4.068 4.068 0 01-.616 1.316c-.28.392-.639.709-1.078.952-.439.233-.961.35-1.568.35-.607 0-1.129-.117-1.568-.35a3.219 3.219 0 01-1.078-.952 4.068 4.068 0 01-.616-1.316 5.83 5.83 0 01-.196-1.498zm-1.33 0c0 .681.098 1.339.294 1.974.205.625.509 1.181.91 1.666.401.485.901.873 1.498 1.162.597.28 1.293.42 2.086.42.793 0 1.489-.14 2.086-.42a4.407 4.407 0 001.498-1.162c.401-.485.7-1.041.896-1.666a6.386 6.386 0 00.308-1.974c0-.681-.103-1.335-.308-1.96a4.852 4.852 0 00-.896-1.68 4.407 4.407 0 00-1.498-1.162c-.597-.289-1.293-.434-2.086-.434-.793 0-1.489.145-2.086.434a4.407 4.407 0 00-1.498 1.162 5.036 5.036 0 00-.91 1.68 6.515 6.515 0 00-.294 1.96zm12.527 3.878v-7.756h2.24c.616 0 1.134.089 1.554.266.42.168.76.42 1.022.756.27.327.462.728.574 1.204.121.467.182.999.182 1.596 0 .616-.066 1.143-.196 1.582-.122.429-.28.789-.476 1.078-.196.289-.42.518-.672.686a3.34 3.34 0 01-.742.392c-.252.084-.49.14-.714.168a6.812 6.812 0 01-.56.028h-2.212zm-1.33-8.876V196h3.43c.83 0 1.549-.117 2.156-.35a3.794 3.794 0 001.498-1.008c.392-.448.681-.994.868-1.638.186-.653.28-1.4.28-2.24 0-1.605-.416-2.8-1.246-3.584-.831-.784-2.016-1.176-3.556-1.176h-3.43zm9.857 0V196h6.944v-1.12h-5.614v-3.458h5.194v-1.12h-5.194v-3.178h5.572v-1.12h-6.902z"
        fill="url(#prefix__paint0_linear)"
      />
      <defs>
        <linearGradient
          id="prefix__paint0_linear"
          x1={91.5}
          y1={182}
          x2={91.5}
          y2={199}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#fff" />
          <stop offset={1} stopColor="#fff" stopOpacity={0} />
        </linearGradient>
      </defs> */}
    </svg>
  );
}

export default CleanCodeSvg;
