import styles from "./blogPostStyles.module.scss";
import Link from "next/link";
import Prism from "prismjs";
import { useContext, useEffect } from "react";
import Layout from "../../components/Layout/Layout";
import DarkModeContext from "../../contexts/darkMode/DarkModeContext";
import MobileContext from '../../contexts/mobile/MobileContext'
import Final from "../../components/post/gsap-tweens-in-react/Final";
import TimelineFigure1 from "../../components/post/gsap-timelines-in-react/TimelineFigure1";
import TimelineFigure2 from "../../components/post/gsap-timelines-in-react/TimelineFigure2";
import TimelineFigure3 from "../../components/post/gsap-timelines-in-react/TimelineFigure3";
import TimelineFigure4 from "../../components/post/gsap-timelines-in-react/TimelineFigure4";
import TimelineFigure5 from "../../components/post/gsap-timelines-in-react/TimelineFigure5";
import TimelineFigure6 from "../../components/post/gsap-timelines-in-react/TimelineFigure6";
import FinalFigure1 from "../../components/post/gsap-timelines-in-react/FinalFigure1";

export default () => {
  const darkModeContext = useContext(DarkModeContext);
  const { isDarkMode } = darkModeContext;
  const mobileContext = useContext(MobileContext)
  const { onMobile } = mobileContext

  useEffect(() => {
    Prism.highlightAll();
  });

  // Weird indention is for formatting.
  const codeFigure1__component = `
  import styles from "./MyTimelineComponent.module.scss";
import { useRef, useEffect } from "react";

function MyTimelineComponent() {
  const myTimeline = useRef(null);

  useEffect(() => {
    console.log('use effect running')
  }, []);

  function handleMouseEnter() {
    console.log('mouse entered')
  }

  return (
    <svg
      className={styles.svg}
      onMouseEnter={handleMouseEnter}
      xmlns="http://www.w3.org/2000/svg"
      ...`.trim();

  const codeFigure1__completed = `
    import styles from "./MyTimelineComponent.module.scss";
import { useRef, useEffect } from "react";

function MyTimelineComponent() {
  const myTimeline = useRef(null);

  useEffect(() => {
    myTimeline.current = gsap.timeline();
    myTimeline.current
      .to("#gear-group", {
        duration: 1,
        rotate: 360,
        transformOrigin: "50% 50%"
      })
      .to("#red-icon-group", { duration: 1, x: 45 })
      .to("#green-icon-group", { duration: 1, y: -48 })

    myTimeline.current.pause();
  }, []);

  function handleMouseEnter() {
    myTimeline.current.restart();
  }

  return (
    <svg
      className={styles.svg}
      onMouseEnter={handleMouseEnter}
      xmlns="http://www.w3.org/2000/svg"
      ...`.trim();

  const codeFigure1__instantiation = `
      useEffect(() => {
  myTimeline.current = gsap.timeline();
}, [])`.trim();

  const codeUseEffectTweens = `
      useEffect(() => {
  myTimeline.current = gsap.timeline();
  myTimeline.current
    .to("#gear-group", {
      duration: 1,
      rotate: 360,
      transformOrigin: "50% 50%"
    })
    .to("#red-icon-group", { duration: 1, x: 45 })
    .to("#green-icon-group", { duration: 1, y: -48 })
}, [])`.trim();

  const codeFigure2__moreTweens = `
        useEffect(() => {
  myTimeline.current = gsap.timeline();
  myTimeline.current
    .to("#gear-group", {
      duration: 1,
      rotate: 360,
      transformOrigin: "50% 50%"
    })
    .to("#red-icon-group", { duration: 1, x: 45 })
    .to("#green-icon-group", { duration: 1, y: -48 })
    .to("#blue-icon-group4", { duration: 1, y: 48 })
    .to("#yellow-icon-group4", { duration: 1, y: -48 })
}, [])`.trim();
  const codeFigure3__redIcon = `
    myTimeline.current
  .to("#gear-group", {
    duration: 1,
    rotate: 360,
    transformOrigin: "50% 50%"
  })
  .to("#red-icon-group", { duration: 1, x: 45 }, "<")`.trim();
  const codeFigure5 = `
    myTimeline.current
  .to("#gear-group", {
    duration: 1,
    rotate: 360,
    transformOrigin: "50% 50%"
  })
  .to("#red-icon-group", { duration: .2, x: 45 }, "<")
  .to("#green-icon-group", { duration: .2, y: -48 }, "<.2")
  .to("#blue-icon-group4", { duration: .2, y: 48 }, "<.2")
  .to("#yellow-icon-group4", { duration: .2, y: -48 }, "<.2")
}, [])`.trim();
  const codeFigure6__redIcon = `
  .to("#red-icon-group", { duration: .2, x: 45 }, "<")`.trim();
  const codeFigure6__greenIcon = `
  .to("#green-icon-group", { duration: .2, y: -48 }, "<")`.trim();
  const codeFigure6__blueIcon = `
  .to("#blue-icon-group", { duration: .2, y: 48 }, "<.2")`.trim();
  const codeFigure6__yellowIcon = `
  .to("#yellow-icon-group", { duration: .2, y: -48 }, "<")`.trim();
  const codeFinalFigure1__gear = `
  myTimeline.current
.to("#gear-group", {
  duration: 8,
  rotate: 360 * 4,
  transformOrigin: "50% 50%",
  ease: "power3.out",
})`.trim();
  const codeFinal = `
  import styles from "./Final.module.scss";
import { useEffect, useRef } from "react";

function Final() {
  const tl = useRef(null);

  useEffect(() => {
    tl.current = gsap.timeline();

    tl.current
      .to("#gear-group", 8, {
        rotate: 360 * 4,
        transformOrigin: "50% 50%",
        ease: "power3.out",
      })
      .to("#blue-icon-group", 0.2, { y: 48 }, "<")
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

    tl.current.pause();
  }, []);

  function handleMouseEnter() {
    tl.current.restart();
  }

  return (
    <svg
      className={styles.svg}
      onMouseEnter={handleMouseEnter}
      xmlns="http://www.w3.org/2000/svg"
      width="587"
      height="305"
      fill="none"
      viewBox="0 0 587 305"
    >
    ...`.trim();

  return (
    <Layout>
      <section className={styles.heroSection}>
        <h1 className={styles.h1}>GSAP in React - Part 2: Timelines</h1>
        <div className={styles.infoFlexContainer}>
          <div className={styles.infoFlexItem__author}>
            <img
              className={styles.profilePhoto}
              src="/images/profilePhoto.jpg"
              alt="Andrew Umstead"
            />
            <span className={styles.byLine}>Andrew Umstead</span>
          </div>
          <span className={styles.date}>August 4th, 2020</span>
        </div>
      </section>

      <article className={styles.article}>
        <p className={styles.note}>
          *Note: You may want to browse{" "}
          <a
            className={styles.internalLinkAnchor}
            target="_blank"
            href="/post/gsap-tweens-in-react"
          >
            part 1
          </a>{" "}
          of this guide if you want to learn more about the basics of GSAP,
          tweens, and how I use them in React with the{" "}
          <code
            className={
              isDarkMode
                ? `${styles.code} ${styles.code__dark}`
                : `${styles.code} ${styles.code__light}`
            }
          >
            useEffect
          </code>{" "}
          and{" "}
          <code
            className={
              isDarkMode
                ? `${styles.code} ${styles.code__dark}`
                : `${styles.code} ${styles.code__light}`
            }
          >
            useRef
          </code>{" "}
          hooks.
        </p>
        <p className={styles.p}>
          Timelines make sequenced or complex animations much easier. It's
          possible to set a{" "}
          <code
            className={
              isDarkMode
                ? `${styles.code} ${styles.code__dark}`
                : `${styles.code} ${styles.code__light}`
            }
          >
            delay
          </code>{" "}
          for each individual tween, similar to what you might do in a sequenced
          CSS animation. You might think, like I did, that if you already
          know how to write simple animations, then maybe it's easier to just
          use{" "}
          <code
            className={
              isDarkMode
                ? `${styles.code} ${styles.code__dark}`
                : `${styles.code} ${styles.code__light}`
            }
          >
            delay
          </code>{" "}
          to stagger them so that they run smoothly.
        </p>

        <p className={styles.p}>
          Well, I tried that for the animation we're making here, and it got
          ugly rather quickly.
        </p>

        <Final onMobile={onMobile} marginBottom=".5rem"/>

        <span className={isDarkMode ? `${styles.caption} ${styles.caption__dark}` : `${styles.caption} ${styles.caption__light}`}>Hover or tap to trigger animation.</span>

        <p className={styles.p}>
          With the icons sequence comprising of more than 30 tweens, any change
          in{" "}
          <code
            className={
              isDarkMode
                ? `${styles.code} ${styles.code__dark}`
                : `${styles.code} ${styles.code__light}`
            }
          >
            duration
          </code>{" "}
          or{" "}
          <code
            className={
              isDarkMode
                ? `${styles.code} ${styles.code__dark}`
                : `${styles.code} ${styles.code__light}`
            }
          >
            delay
          </code>{" "}
          resulted in a change for every tween thereafter.
        </p>

        <p className={styles.p}>
          This is where the beauty of GSAP timelines comes in, as every
          individual tween takes a parameter that gives you a bunch of options
          about the tween's timing, rather than having to always{" "}
          <code
            className={
              isDarkMode
                ? `${styles.code} ${styles.code__dark}`
                : `${styles.code} ${styles.code__light}`
            }
          >
            delay
          </code>{" "}
          its runtime from the start. The position parameter, as it's called,
          gives you an enormous amount of control over when a tween animates.
        </p>

        <p className={styles.p}>
          The result is that when you change the{" "}
          <code
            className={
              isDarkMode
                ? `${styles.code} ${styles.code__dark}`
                : `${styles.code} ${styles.code__light}`
            }
          >
            duration
          </code>{" "}
          or{" "}
          <code
            className={
              isDarkMode
                ? `${styles.code} ${styles.code__dark}`
                : `${styles.code} ${styles.code__light}`
            }
          >
            delay
          </code>{" "}
          of a tween, all the other tweens will fall in line with the sequence,
          or timeline, as a whole. So, in the end, when you change an
          animation's timing, you typically only have to change one or two
          values.
        </p>

        <h2 className={styles.h2}>Creating a Timeline</h2>

        <p className={styles.p}>
          In{" "}
          <a
            className={styles.internalLinkAnchor}
            target="_blank"
            href="/post/gsap-tweens-in-react"
          >
            part 1
          </a>{" "}
          about basic tweens we covered how to take advantage of the{" "}
          <code
            className={
              isDarkMode
                ? `${styles.code} ${styles.code__dark}`
                : `${styles.code} ${styles.code__light}`
            }
          >
            useRef
          </code>{" "}
          hook and the{" "}
          <code
            className={
              isDarkMode
                ? `${styles.code} ${styles.code__dark}`
                : `${styles.code} ${styles.code__light}`
            }
          >
            .current
          </code>{" "}
          property it gives us. In{" "}
          <code
            className={
              isDarkMode
                ? `${styles.code} ${styles.code__dark}`
                : `${styles.code} ${styles.code__light}`
            }
          >
            myTween.current
          </code>{" "}
          we stored our tween instance and had access to it throughout the
          component's scope.
        </p>

        <p className={styles.p}>
          Conveniently, for a timeline, we will create, store, and play it in
          almost the exact same way we did for a tween.
        </p>

        <p className={styles.p}>
          We can begin by simply looking at an example animation made with a
          GSAP timeline. Hover or tap and you'll see three tweens animate sequentially.
        </p>

        <TimelineFigure1 onMobile={onMobile} />

        <p className={styles.p}>
          To create this simple timeline, we'll first make a component that
          renders the SVG.
        </p>

        <div
          className={
            isDarkMode
              ? `${styles.codeblock} ${styles.codeblock__dark}`
              : `${styles.codeblock}`
          }
        >
          <pre
            style={{ borderRadius: "5px", margin: "0 0", padding: "2.5rem" }}
          >
            <code class="language-js">{codeFigure1__component}</code>
          </pre>
        </div>

        <p className={styles.p}>
          All we're doing here is importing some styling and our hooks, and
          creating the component for the SVG and animation. The first line of
          non-boiler-plate code is when we use the{" "}
          <code
            className={
              isDarkMode
                ? `${styles.code} ${styles.code__dark}`
                : `${styles.code} ${styles.code__light}`
            }
          >
            useRef
          </code>{" "}
          hook and store its returned object into{" "}
          <code
            className={
              isDarkMode
                ? `${styles.code} ${styles.code__dark}`
                : `${styles.code} ${styles.code__light}`
            }
          >
            myTimeline
          </code>
          . Then,{" "}
          <code
            className={
              isDarkMode
                ? `${styles.code} ${styles.code__dark}`
                : `${styles.code} ${styles.code__light}`
            }
          >
            useEffect
          </code>{" "}
          will run after the component has mounted, and the handler runs on the
          mouse enter event. The rest of the SVG code is absent, since it's
          hundreds of lines.
        </p>

        <p className={styles.note}>
          *Note: This particular SVG can be downloaded for free at{" "}
          <a
            className={
              isDarkMode
                ? `${styles.linkAnchor} ${styles.linkAnchor__dark}`
                : `${styles.linkAnchor} ${styles.linkAnchor__light}`
            }
            target="_blank"
            href="https://illlustrations.co/"
          >
            illlustrations.co
          </a>
          . In Figma, I deleted some of the graphics we won't be using for
          simplicity's sake.
        </p>

        <p className={styles.p}>
          For the next step, in the{" "}
          <code
            className={
              isDarkMode
                ? `${styles.code} ${styles.code__dark}`
                : `${styles.code} ${styles.code__light}`
            }
          >
            useEffect
          </code>{" "}
          hook, we'll instantiate our timeline and store it in{" "}
          <code
            className={
              isDarkMode
                ? `${styles.code} ${styles.code__dark}`
                : `${styles.code} ${styles.code__light}`
            }
          >
            myTimeline.current
          </code>
          .
        </p>

        <div
          className={
            isDarkMode
              ? `${styles.codeblock} ${styles.codeblock__dark}`
              : `${styles.codeblock}`
          }
        >
          <pre
            style={{ borderRadius: "5px", margin: "0 0", padding: "2.5rem" }}
          >
            <code class="language-js">{codeFigure1__instantiation}</code>
          </pre>
        </div>

        <p className={styles.p}>
          Easy enough. Now, we have a timeline stored in{" "}
          <code
            className={
              isDarkMode
                ? `${styles.code} ${styles.code__dark}`
                : `${styles.code} ${styles.code__light}`
            }
          >
            myTimeline.current
          </code>
          , to which we can attach any number of tweens. We can do this by
          calling the{" "}
          <code
            className={
              isDarkMode
                ? `${styles.code} ${styles.code__dark}`
                : `${styles.code} ${styles.code__light}`
            }
          >
            .to()
          </code>{" "}
          method, similar to how we would create a tween. The difference is that
          we're calling{" "}
          <code
            className={
              isDarkMode
                ? `${styles.code} ${styles.code__dark}`
                : `${styles.code} ${styles.code__light}`
            }
          >
            .to()
          </code>{" "}
          on the <em>timeline</em> instance, rather than the gsap object. We
          already used the gsap object above to instantiate our timeline with
          the{" "}
          <code
            className={
              isDarkMode
                ? `${styles.code} ${styles.code__dark}`
                : `${styles.code} ${styles.code__light}`
            }
          >
            .timeline()
          </code>{" "}
          method.
        </p>

        <p className={styles.p}>
          By calling{" "}
          <code
            className={
              isDarkMode
                ? `${styles.code} ${styles.code__dark}`
                : `${styles.code} ${styles.code__light}`
            }
          >
            .to()
          </code>{" "}
          on our timeline instance, each tween we create is run sequentially.
          GSAP understands that they are meant to run one after the other. It
          also allows us to chain our{" "}
          <code
            className={
              isDarkMode
                ? `${styles.code} ${styles.code__dark}`
                : `${styles.code} ${styles.code__light}`
            }
          >
            .to()
          </code>{" "}
          calls, rather than type out{" "}
          <code
            className={
              isDarkMode
                ? `${styles.code} ${styles.code__dark}`
                : `${styles.code} ${styles.code__light}`
            }
          >
            myTimeline.current.to()
          </code>{" "}
          every time, although you could if you wanted.
        </p>

        <div
          className={
            isDarkMode
              ? `${styles.codeblock} ${styles.codeblock__dark}`
              : `${styles.codeblock}`
          }
        >
          <pre
            style={{ borderRadius: "5px", margin: "0 0", padding: "2.5rem" }}
          >
            <code class="language-js">{codeUseEffectTweens}</code>
          </pre>
        </div>

        <p className={styles.p}>
          Above you can see the creation of 3 tweens — one with each{" "}
          <code
            className={
              isDarkMode
                ? `${styles.code} ${styles.code__dark}`
                : `${styles.code} ${styles.code__light}`
            }
          >
            .to()
          </code>{" "}
          call. The first targets the gear and animates a couple CSS properties
          to create a rotating effect. The second targets the red icon and moves
          it to the right on its x-axis. And, the third moves the green icon
          upwards on its y-axis. Each tween lasts for 1 second and the{" "}
          <code
            className={
              isDarkMode
                ? `${styles.code} ${styles.code__dark}`
                : `${styles.code} ${styles.code__light}`
            }
          >
            x
          </code>{" "}
          and{" "}
          <code
            className={
              isDarkMode
                ? `${styles.code} ${styles.code__dark}`
                : `${styles.code} ${styles.code__light}`
            }
          >
            y
          </code>{" "}
          values were chosen through experimentation.
        </p>

        <p className={styles.p}>
          For a basic timeline, that's pretty much it. We can{" "}
          <code
            className={
              isDarkMode
                ? `${styles.code} ${styles.code__dark}`
                : `${styles.code} ${styles.code__light}`
            }
          >
            .pause()
          </code>{" "}
          it in the{" "}
          <code
            className={
              isDarkMode
                ? `${styles.code} ${styles.code__dark}`
                : `${styles.code} ${styles.code__light}`
            }
          >
            useEffect
          </code>{" "}
          hook before it has a chance to animate, and then{" "}
          <code
            className={
              isDarkMode
                ? `${styles.code} ${styles.code__dark}`
                : `${styles.code} ${styles.code__light}`
            }
          >
            .restart()
          </code>{" "}
          it when our event handler is triggered, thus running the animation.
        </p>

        <p className={styles.p}>Here's the finished component.</p>

        <div
          className={
            isDarkMode
              ? `${styles.codeblock} ${styles.codeblock__dark}`
              : `${styles.codeblock}`
          }
        >
          <pre
            style={{ borderRadius: "5px", margin: "0 0", padding: "2.5rem" }}
          >
            <code class="language-js">{codeFigure1__completed}</code>
          </pre>
        </div>

        <h2 className={styles.h2}>Using the Positioner Parameter</h2>

        <p className={styles.p}>
          The positioner parameter is really what makes timelines so useful.
          Before we get into it, let's add a couple more tweens to our
          animation.
        </p>

        <div
          className={
            isDarkMode
              ? `${styles.codeblock} ${styles.codeblock__dark}`
              : `${styles.codeblock}`
          }
        >
          <pre
            style={{ borderRadius: "5px", margin: "0 0", padding: "2.5rem" }}
          >
            <code class="language-js">{codeFigure2__moreTweens}</code>
          </pre>
        </div>

        <p className={styles.p}>
          Now, we have a total of 5 tweens and can play around with their
          timings.
        </p>

        <TimelineFigure2 onMobile={onMobile}/>

        <p className={styles.p}>
          If these were all individual tweens, everything would animate together
          as soon as the handler is called, and it would look horrible. But, we
          have a timeline and each tween waits for the previous one to finish.
        </p>

        <p className={styles.p}>
          So, what if we want to make the first icon move right at the same time
          the gear starts to rotate?
        </p>

        <p className={styles.p}>
          Well, to control when the{" "}
          <code
            className={
              isDarkMode
                ? `${styles.code} ${styles.code__dark}`
                : `${styles.code} ${styles.code__light}`
            }
          >
            #red-icon-group
          </code>{" "}
          tween begins, we can use the position parameter. I highly recommend
          visiting the Greensock page on{" "}
          <a
            className={
              isDarkMode
                ? `${styles.linkAnchor} ${styles.linkAnchor__dark}`
                : `${styles.linkAnchor} ${styles.linkAnchor__light}`
            }
            href="https://greensock.com/docs/v3/GSAP/Timeline"
          >
            timelines
          </a>{" "}
          in the docs to get a feel for the position parameter and the values it
          can take. There aren't terribly many values, but each one has its own
          specific purpose and use case.
        </p>

        <p className={styles.p}>
          For our small animation, we'll only be using two kinds of values that
          control a tween's timing in relation to its{" "}
          <em>immediate predecessor</em>. Simply inserting{" "}
          <code
            className={
              isDarkMode
                ? `${styles.code} ${styles.code__dark}`
                : `${styles.code} ${styles.code__light}`
            }
          >
            "&lt;"
          </code>{" "}
          as the position parameter will make a tween start at the same time as
          the one right before it.
        </p>

        <p className={styles.p}>
          In the last line after the vars object,{" "}
          <code
            className={
              isDarkMode
                ? `${styles.code} ${styles.code__dark}`
                : `${styles.code} ${styles.code__light}`
            }
          >
            "&lt;"
          </code>{" "}
          is inserted as the position parameter.
        </p>

        <div
          className={
            isDarkMode
              ? `${styles.codeblock} ${styles.codeblock__dark}`
              : `${styles.codeblock}`
          }
        >
          <pre
            style={{ borderRadius: "5px", margin: "0 0", padding: "2.5rem" }}
          >
            <code class="language-js">{codeFigure3__redIcon}</code>
          </pre>
        </div>

        <p className={styles.p}>
          The Greensock docs recommend placing the position parameter after the
          vars object, as done above.
        </p>

        <p className={styles.p}>
          Now, the red icon starts to move on its x-axis at the same time the
          gear starts rotating.
        </p>

        <TimelineFigure3 onMobile={onMobile} />

        <p className={styles.p}>
          Notice, the other icons fall in line with the sequence, and the
          animation runs smoothly.
        </p>

        <p className={styles.p}>
          However, in our final animation, each icon tween moves much faster at
          .2 seconds, rather than the 1 second they're currently set at. If we
          go ahead and change the{" "}
          <code
            className={
              isDarkMode
                ? `${styles.code} ${styles.code__dark}`
                : `${styles.code} ${styles.code__light}`
            }
          >
            duration
          </code>{" "}
          property in the vars object to{" "}
          <code
            className={
              isDarkMode
                ? `${styles.code} ${styles.code__dark}`
                : `${styles.code} ${styles.code__light}`
            }
          >
            {`{ duration: .2 }`}
          </code>{" "}
          — we get the following result.
        </p>

        <TimelineFigure4 onMobile={onMobile}/>

        <p className={styles.p}>
          What's happening is the other tweens are waiting for the gear tween to
          finish. If we were to set the gear{" "}
          <code
            className={
              isDarkMode
                ? `${styles.code} ${styles.code__dark}`
                : `${styles.code} ${styles.code__light}`
            }
          >
            duration
          </code>{" "}
          to 5 seconds, we'd have a five second delay before the green icon
          started animating. Of course, this is because in a timeline everything
          runs sequentially. GSAP can't know we want our gear to rotate
          simultaneously with the icon animations running.
        </p>

        <p className={styles.p}>
          To sort it out we have to add position parameters to the other icons.
        </p>

        <p className={styles.p}>
          Let's say we want it to be sequential again, with the exception of our
          gear. We want the green icon to move immediately after the red, blue
          after green, and so on.
        </p>

        <p className={styles.p}>
          What we'll do is add{" "}
          <code
            className={
              isDarkMode
                ? `${styles.code} ${styles.code__dark}`
                : `${styles.code} ${styles.code__light}`
            }
          >
            "&lt;.2"
          </code>{" "}
          as the position parameter for the three remaining icon tweens. This
          will delay the respective tween by .2 seconds in relation to the tween
          directly before it.
        </p>

        <p className={styles.p}>
          So, the red icon's duration is .2 seconds, and because the green icon
          has{" "}
          <code
            className={
              isDarkMode
                ? `${styles.code} ${styles.code__dark}`
                : `${styles.code} ${styles.code__light}`
            }
          >
            "&lt;.2"
          </code>{" "}
          set as its position parameter, it will wait .2 seconds from the start
          of the red icon.
        </p>

        <p className={styles.p}>
          The result is a smooth animation from one tween to the next.
        </p>

        <TimelineFigure5 onMobile={onMobile}/>

        <p className={styles.p}>
          The green, blue, and yellow icon tweens are each waiting .2 seconds
          from the tween directly before it. The code is probably easier to
          understand than a written explanation.
        </p>

        <div
          className={
            isDarkMode
              ? `${styles.codeblock} ${styles.codeblock__dark}`
              : `${styles.codeblock}`
          }
        >
          <pre
            style={{ borderRadius: "5px", margin: "0 0", padding: "2.5rem" }}
          >
            <code class="language-js">{codeFigure5}</code>
          </pre>
        </div>

        <p className={styles.p}>
          What if we always want two icons to move at the same time together?
          This is what our final animation does. Well, knowing what we know
          about position parameters, this should be easy enough.
        </p>

        <p className={styles.p}>If the red icon tween looks like this:</p>

        <div
          className={
            isDarkMode
              ? `${styles.codeblock} ${styles.codeblock__dark}`
              : `${styles.codeblock}`
          }
        >
          <pre
            style={{ borderRadius: "5px", margin: "0 0", padding: "2.5rem" }}
          >
            <code class="language-js">{codeFigure6__redIcon}</code>
          </pre>
        </div>

        <p className={styles.p}>
          ...then we'll want the green icon to animate with it, so it'll take{" "}
          <code
            className={
              isDarkMode
                ? `${styles.code} ${styles.code__dark}`
                : `${styles.code} ${styles.code__light}`
            }
          >
            "&lt;"
          </code>{" "}
          as its position parameter.
        </p>

        <div
          className={
            isDarkMode
              ? `${styles.codeblock} ${styles.codeblock__dark}`
              : `${styles.codeblock}`
          }
        >
          <pre
            style={{ borderRadius: "5px", margin: "0 0", padding: "2.5rem" }}
          >
            <code class="language-js">{codeFigure6__greenIcon}</code>
          </pre>
        </div>

        <p className={styles.p}>
          Then, we'll want the blue icon to wait for .2 seconds before it
          starts. If we omitted the position parameter, the blue icon would wait
          for the gear to finish, which is not what we want. Instead, we want to
          control it relative to its immediate predecessor. So, we'll pass{" "}
          <code
            className={
              isDarkMode
                ? `${styles.code} ${styles.code__dark}`
                : `${styles.code} ${styles.code__light}`
            }
          >
            "&lt;.2"
          </code>{" "}
          to the position parameter.
        </p>

        <div
          className={
            isDarkMode
              ? `${styles.codeblock} ${styles.codeblock__dark}`
              : `${styles.codeblock}`
          }
        >
          <pre
            style={{ borderRadius: "5px", margin: "0 0", padding: "2.5rem" }}
          >
            <code class="language-js">{codeFigure6__blueIcon}</code>
          </pre>
        </div>

        <p className={styles.p}>
          Lastly, we're moving two icons together, so the yellow one will start
          with the blue. Therefore, it'll take{" "}
          <code
            className={
              isDarkMode
                ? `${styles.code} ${styles.code__dark}`
                : `${styles.code} ${styles.code__light}`
            }
          >
            "&lt;"
          </code>
          .
        </p>

        <div
          className={
            isDarkMode
              ? `${styles.codeblock} ${styles.codeblock__dark}`
              : `${styles.codeblock}`
          }
        >
          <pre
            style={{ borderRadius: "5px", margin: "0 0", padding: "2.5rem" }}
          >
            <code class="language-js">{codeFigure6__yellowIcon}</code>
          </pre>
        </div>

        <p className={styles.p}>
          And, voilà! Our icons are moving two at a time.
        </p>

        <TimelineFigure6 onMobile={onMobile} />

        <h2 className={styles.h2}>Making the Final Animation</h2>

        <p className={styles.p}>
          To put together the animation we originally set out to make really
          only requires a few minor additions and some adjustments to the tweens
          we've already made. For one, I'll bring back the graphics I removed
          earlier so I have the original SVG. And, then, to start, we can make
          the gear animation last for a good amount of time.
        </p>

        <p className={styles.p}>
          To do that, we'll just increase the{" "}
          <code
            className={
              isDarkMode
                ? `${styles.code} ${styles.code__dark}`
                : `${styles.code} ${styles.code__light}`
            }
          >
            duration
          </code>
          . Mine is set to 8 seconds. Now, 8 seconds to rotate 360 degrees makes
          the gear move quite slowly, so you'll want to increase the{" "}
          <code
            className={
              isDarkMode
                ? `${styles.code} ${styles.code__dark}`
                : `${styles.code} ${styles.code__light}`
            }
          >
            rotate
          </code>{" "}
          value as well. I just multiplied mine by 4, which ensures a full
          revolution made by the gear. If you don't use a multiple of 360, the
          gear will finish in a different spot, and on{" "}
          <code
            className={
              isDarkMode
                ? `${styles.code} ${styles.code__dark}`
                : `${styles.code} ${styles.code__light}`
            }
          >
            .restart()
          </code>{" "}
          the animation will be jerky.
        </p>

        <div
          className={
            isDarkMode
              ? `${styles.codeblock} ${styles.codeblock__dark}`
              : `${styles.codeblock}`
          }
        >
          <pre
            style={{ borderRadius: "5px", margin: "0 0", padding: "2.5rem" }}
          >
            <code class="language-js">{codeFinalFigure1__gear}</code>
          </pre>
        </div>

        <p className={styles.p}>
          Lastly, with the gear, you may recall the animation has the effect of
          slowing down as the gear loses steam. This is achieved with the{" "}
          <code
            className={
              isDarkMode
                ? `${styles.code} ${styles.code__dark}`
                : `${styles.code} ${styles.code__light}`
            }
          >
            ease
          </code>{" "}
          property seen in the vars object above.
        </p>

        <p className={styles.p}>
          The{" "}
          <code
            className={
              isDarkMode
                ? `${styles.code} ${styles.code__dark}`
                : `${styles.code} ${styles.code__light}`
            }
          >
            ease
          </code>{" "}
          property does the same thing as the CSS{" "}
          <code
            className={
              isDarkMode
                ? `${styles.code} ${styles.code__dark}`
                : `${styles.code} ${styles.code__light}`
            }
          >
            transition-timing-function
          </code>{" "}
          one. Whereas CSS has built-in bezier curves like{" "}
          <code
            className={
              isDarkMode
                ? `${styles.code} ${styles.code__dark}`
                : `${styles.code} ${styles.code__light}`
            }
          >
            linear
          </code>{" "}
          and{" "}
          <code
            className={
              isDarkMode
                ? `${styles.code} ${styles.code__dark}`
                : `${styles.code} ${styles.code__light}`
            }
          >
            ease-in-out
          </code>
          , GSAP has its own set of built-in eases. The docs has a great
          vizualizer{" "}
          <a
            className={
              isDarkMode
                ? `${styles.linkAnchor} ${styles.linkAnchor__dark}`
                : `${styles.linkAnchor} ${styles.linkAnchor__light}`
            }
            target="_blank"
            href="/post/gsap-tweens-in-react"
          >
            here
          </a>
          , and you can play around with it and copy/paste the{" "}
          <code
            className={
              isDarkMode
                ? `${styles.code} ${styles.code__dark}`
                : `${styles.code} ${styles.code__light}`
            }
          >
            ease
          </code>{" "}
          you prefer. I used{" "}
          <code
            className={
              isDarkMode
                ? `${styles.code} ${styles.code__dark}`
                : `${styles.code} ${styles.code__light}`
            }
          >
            power3.out
          </code>
          .
        </p>

        <FinalFigure1 onMobile={onMobile} />

        <p className={styles.p}>
          In terms of the icons, you should have everything you need to make the
          timeline yourself. When choosing the direction for the icons'
          movement, I just avoided overlapping them, and tried to keep it
          somewhat balanced on the screen, so not all four were in the
          bottom-right corner, for example.
        </p>

        <p className={styles.p}>
          However, at a certain point, you'll want to start adjusting the
          duration of the tweens to have them slow down in line with the ease,
          if you choose to use one. In my 32 tween timeline, I started my
          slow-down on the 8th from the end. I ended with my last tween lasting
          1 full second. Of course, you'll also need to adjust your position
          parameters accordingly.
        </p>

        <p className={styles.p}>
          If you'd rather just use the animation I made, you can find my
          timeline code in the component below. You'll have to add the{" "}
          <code
            className={
              isDarkMode
                ? `${styles.code} ${styles.code__dark}`
                : `${styles.code} ${styles.code__light}`
            }
          >
            id
          </code>
          's to the SVG yourself, though. I use Figma, and I wrote about how I
          do it in{" "}
          <a
            className={styles.internalLinkAnchor}
            target="_blank"
            href="/post/gsap-tweens-in-react"
          >
            part 1
          </a>
          .
        </p>

        <div
          className={
            isDarkMode
              ? `${styles.codeblock} ${styles.codeblock__dark}`
              : `${styles.codeblock}`
          }
        >
          <pre
            style={{ borderRadius: "5px", margin: "0 0", padding: "2.5rem" }}
          >
            <code class="language-js">{codeFinal}</code>
          </pre>
        </div>

        <p className={styles.p}>
          One thing that's different in my code is that I put the duration of
          each tween outside of the vars object. The second parameter can also
          be used to set a tween's duration. It's a little less typing, and a
          cleaner vars object.
        </p>

        <p className={styles.p}>
          Other than that, everything should work fine! Be sure to check out my
          posts on GSAP's motion path and scroll trigger too.
        </p>
      </article>

      <div className={styles.navPostFlexContainer}>
        <Link href="/post/gsap-tweens-in-react">
          <a
            className={
              isDarkMode
                ? `${styles.navPost} ${styles.navPost__dark}`
                : `${styles.navPost} ${styles.navPost__light}`
            }
          >
            &larr;
            <br />
            GSAP in React:
            <br />
            Basic Tweens
          </a>
        </Link>

        <Link href="/post/gsap-motion-path">
          <a className={styles.navPost}>
            &rarr;
            <br />
            GSAP in React:
            <br />
            MotionPath Plugin
          </a>
        </Link>
      </div>
    </Layout>
  );
};
