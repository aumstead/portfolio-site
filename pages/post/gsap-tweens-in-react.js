import Layout from "../../components/Layout/Layout";
import styles from "./blogPostStyles.module.scss";
import { useContext, useEffect } from "react";
import Prism from "prismjs";
import DarkModeContext from "../../contexts/darkMode/DarkModeContext";
import Link from "next/link";
import Final from "../../components/post/gsap-timelines-in-react.js/Final";
import OwlFigure1 from "../../components/post/gsap-timelines-in-react.js/OwlFigure1";
import OwlFigure2 from "../../components/post/gsap-timelines-in-react.js/OwlFigure2";
import HTMLFigure1 from "../../components/post/gsap-timelines-in-react.js/HTMLFigure1";
import AppFigure1 from "../../components/post/gsap-timelines-in-react.js/PhoneFigure1";
import AppFigure2 from "../../components/post/gsap-timelines-in-react.js/PhoneFigure2";

export default () => {
  const darkModeContext = useContext(DarkModeContext);
  const { isDarkMode } = darkModeContext;

  useEffect(() => {
    Prism.highlightAll();
  });
  const codeHTMLSVG = `<svg width="40" height="32" viewBox="0 0 40 32" fill="none" xmlns="http://www.w3.org/2000/svg">
  <g id="my-svg-group">
    <path
      id="greater-than"
      d="M26 23L29 26L39 16L29 6L26 9L33 16L26 23Z"
      fill="black"
    />
    <path
      id="less-than"
      d="M14 9L11 6L1 16L11 26L14 23L7 16L14 9Z"
      fill="black"
    />
    <path
      id="forward-slash"
      d="M21.916 4.7041L24.087 5.2961L18.087 27.2971L15.916 26.7051L21.916 4.7041V4.7041Z"
      fill="black"
    />
  </g>
</svg>`.trim();

  const codeReactSVG = `
  function ExampleSVG() {
  useEffect(() => {
    console.log('in use effect')
  }, [])

  function handleMouseEnter() {
    console.log('mouse entered')
  }

  return (
    <svg
      onMouseEnter={handleMouseEnter}
      id="example-svg"
      width="40"
      height="32"
      viewBox="0 0 40 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="my-svg-group">
        <path
          id="greater-than"
          d="M26 23L29 26L39 16L29 6L26 9L33 16L26 23Z"
          fill="black"
        />
        <path
          id="less-than"
          d="M14 9L11 6L1 16L11 26L14 23L7 16L14 9Z"
          fill="black"
        />
        <path
          id="forward-slash"
          d="M21.916 4.7041L24.087 5.2961L18.087 27.2971L15.916 26.7051L21.916 4.7041V4.7041Z"
          fill="black"
        />
      </g>
    </svg>
  );
}

export default ExampleSVG;
`.trim();

  const codePhoneFigure1 = `
  function handleMouseEnter() {
    gsap.to("#red-icon-group", { x: 45, duration: 1 })
}`.trim();

  const codePhoneFigure2 = `
  import styles from "./ExampleTweenComponent.module.scss";
import { useRef } from 'react'

function ExampleTweenComponent() {
  const myTween = useRef(null)

  return (
    <svg
      className={styles.svg}
      xmlns="http://www.w3.org/2000/svg"
      ...`.trim();

  const codePhoneFigure3 = `
  import styles from "./ExampleTweenComponent.module.scss";
import { useRef, useEffect } from 'react'

function ExampleTweenComponent() {
  const myTween = useRef(null)

  useEffect(() => {
    myTween.current = gsap.to("#red-icon-group2", 1, { x: 45 });
    myTween.current.pause()
  }, [])

  function handleMouseEnter() {
    myTween.current.restart()
  }

  return (
    <svg
      onMouseEnter={handleMouseEnter}
      className={styles.svg}
      xmlns="http://www.w3.org/2000/svg"
      ...`.trim();

  return (
    <Layout>
      <h1 className={styles.h1}>
        Greensock in React Part 1:
        <br />
        Basic Tweens
      </h1>
      <div className={styles.infoFlexContainer}>
        <div className={styles.infoFlexItem__author}>
          <img
            className={styles.profilePhoto}
            src="/static/images/profilePhoto.jpg"
            alt="Andrew Umstead"
          />
          <span className={styles.byLine}>Andrew Umstead</span>
        </div>
        <span className={styles.date}>August 4th, 2020</span>
      </div>

      <article className={styles.article}>
        <p className={styles.p}>
          This post is the first in a series about using GSAP in React. This
          first post will cover how I use GSAP with the{" "}
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
          hooks to create animations that start on events like click or hover.
          As an example for us to walk through together, I'll use this animation
          I made for my portfolio site (hover to animate).
        </p>

        <Final />

        <p className={styles.p}>
          By the end of{" "}
          <a
            className={
              isDarkMode
                ? `${styles.linkAnchor} ${styles.linkAnchor__dark}`
                : `${styles.linkAnchor} ${styles.linkAnchor__light}`
            }
            target="_blank"
            href="/gsap-times-in-react"
          >
            part 2
          </a>{" "}
          in the series, we will have covered everything to make the animation
          above.
        </p>

        <p className={styles.p}>
          If you don't have GSAP yet, you'll want to visit the{" "}
          <a
            className={
              isDarkMode
                ? `${styles.linkAnchor} ${styles.linkAnchor__dark}`
                : `${styles.linkAnchor} ${styles.linkAnchor__light}`
            }
            target="_blank"
            href="https://greensock.com/docs/"
          >
            GreenSock docs
          </a>{" "}
          and follow the simple installation instructions. I used to just paste
          the CDN into the{" "}
          <code
            className={
              isDarkMode
                ? `${styles.code} ${styles.code__dark}`
                : `${styles.code} ${styles.code__light}`
            }
          >
            &lt;Head&gt;
          </code>{" "}
          component, but I've since opted to just download the library and place
          it at the bottom near my closing{" "}
          <code
            className={
              isDarkMode
                ? `${styles.code} ${styles.code__dark}`
                : `${styles.code} ${styles.code__light}`
            }
          >
            &lt;/body&gt;
          </code>{" "}
          tag. Occassionally I'd have issues with the library not loading before
          with the CDN.
        </p>

        <p className={styles.note}>
          *Note: All the SVG art I use is available for free at{" "}
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
          , an awesome site by an awesome artist whose work I used throughout my
          portfolio site.
        </p>

        <p className={styles.p}>
          Before we get into using GSAP in React, I'll say a few quick things
          about SVGs.
        </p>

        <p className={styles.p}>
          You might already be aware of some of the benefits of using SVGs, such
          as their ability to scale without losing any quality or increasing in
          file size. But, my other favorite thing about them, which I don't ever
          really see mentioned, is that I can go into their code and manipulate
          the images. It's quite easy to change a color, remove part of the
          graphic I don't want, or add a class for some CSS styles.
        </p>

        <div style={{ display: "flex", justifyContent: "center" }}>
          <OwlFigure1 />
          <OwlFigure2 />
        </div>

        <p className={styles.p}>
          Here, I've simply changed a few{" "}
          <code
            className={
              isDarkMode
                ? `${styles.code} ${styles.code__dark}`
                : `${styles.code} ${styles.code__light}`
            }
          >
            fill
          </code>{" "}
          properties to brown on certain vectors, moved the eye groups on the
          x-axis, and deleted a few vectors at the top of the eyes.
        </p>

        <h2 className={styles.h2}>Working with SVGs and Figma</h2>

        <p className={styles.p}>
          In order to get in there and really pick an SVG apart, you'll want to
          use some sort of graphics software. I use Figma because it's free and
          the most powerful I've found. You can use it in the browser or
          download the desktop app{" "}
          <a
            className={
              isDarkMode
                ? `${styles.linkAnchor} ${styles.linkAnchor__dark}`
                : `${styles.linkAnchor} ${styles.linkAnchor__light}`
            }
            target="_blank"
            href="https://figma.com"
          >
            here
          </a>
          .
        </p>

        <p className={styles.p}>
          With Figma, it's easy to find the exact vector you want to work with
          by just clicking on it. On the left side of the Figma window, in the
          layer panel, you can rename the vector. This vector will then have an{" "}
          <code
            className={
              isDarkMode
                ? `${styles.code} ${styles.code__dark}`
                : `${styles.code} ${styles.code__light}`
            }
          >
            id
          </code>{" "}
          in the code when you export the SVG file. You can then grab it and
          manipulate it with GSAP or CSS. In the layers panel you can also
          create groups, ungroup, and layer your graphic. Groups are useful to
          animate something in the image that is made up of multiple vectors,
          like the owl's eyes and pupils above. You can have them all move
          together as one.
        </p>

        <p className={styles.p}>
          To export, Figma has an option in the bottom-right corner. Select the
          SVG, group, or single vector you want the code for, and then click
          export. There's an option to export as PNG, JPG, SVG, or PDF — choose
          SVG. And then if you want the{" "}
          <code
            className={
              isDarkMode
                ? `${styles.code} ${styles.code__dark}`
                : `${styles.code} ${styles.code__light}`
            }
          >
            id
          </code>
          's you've created to be in the XML, you'll need to click the ellipsis
          and select the "Include 'id' Attribute".
        </p>

        <p className={styles.p}>Here's a simple SVG.</p>

        <HTMLFigure1 isDarkMode={isDarkMode} />

        <p className={styles.p}>
          And here's the XML for it with{" "}
          <code
            className={
              isDarkMode
                ? `${styles.code} ${styles.code__dark}`
                : `${styles.code} ${styles.code__light}`
            }
          >
            id
          </code>{" "}
          attributes that I added through Figma and then exported.
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
            <code class="language-xml">{codeHTMLSVG}</code>
          </pre>
        </div>

        <p className={styles.p}>
          Notice the{" "}
          <code
            className={
              isDarkMode
                ? `${styles.code} ${styles.code__dark}`
                : `${styles.code} ${styles.code__light}`
            }
          >
            id
          </code>
          's on each{" "}
          <code
            className={
              isDarkMode
                ? `${styles.code} ${styles.code__dark}`
                : `${styles.code} ${styles.code__light}`
            }
          >
            &lt;path&gt;
          </code>{" "}
          element, and even the group, or{" "}
          <code
            className={
              isDarkMode
                ? `${styles.code} ${styles.code__dark}`
                : `${styles.code} ${styles.code__light}`
            }
          >
            &lt;g&gt;
          </code>{" "}
          element. With GSAP, we'll be grabbing the parts we want to animate
          with these{" "}
          <code
            className={
              isDarkMode
                ? `${styles.code} ${styles.code__dark}`
                : `${styles.code} ${styles.code__light}`
            }
          >
            id
          </code>
          's.
        </p>

        <p className={styles.p}>
          Imagine an SVG with hundreds of lines, and you can see why visually
          clicking on the element in Figma and adding an{" "}
          <code
            className={
              isDarkMode
                ? `${styles.code} ${styles.code__dark}`
                : `${styles.code} ${styles.code__light}`
            }
          >
            id
          </code>{" "}
          is appealing, rather than sifting through the code.
        </p>

        <h2 className={styles.h2}>GSAP in React</h2>
        <p className={styles.p}>
          In order to avoid errors with GSAP and React, you'll want your
          animation code to run after the component has mounted. I'll be using
          functional components and the{" "}
          <code
            className={
              isDarkMode
                ? `${styles.code} ${styles.code__dark}`
                : `${styles.code} ${styles.code__light}`
            }
          >
            useEffect
          </code>{" "}
          hook. I also often use a handler function, which could be called on a
          click event or something else. Here, I'll be using the mouse enter
          event to simulate a hover effect.
        </p>

        <p className={styles.p}>
          In React, SVG's can be displayed a few different ways, but I find if
          you're going to animate one, the best approach is put it into its own
          component. So, an entire component for the simple SVG above would look
          something like this:
        </p>

        <p className={styles.note}>
          *Note: I'm also using Next.js, so the code snippets below are Next
          specific, i.e. no React import, etc.
        </p>

        <div
          className={
            isDarkMode
              ? `${styles.codeblock} ${styles.codeblock__dark}`
              : styles.codeblock
          }
        >
          <pre
            style={{ borderRadius: "5px", margin: "0 0", padding: "2.5rem" }}
          >
            <code class="language-js">{codeReactSVG}</code>
          </pre>
        </div>

        <p className={styles.p}>
          Depending on how and when you want the animation to run, you'd put
          your code in the{" "}
          <code
            className={
              isDarkMode
                ? `${styles.code} ${styles.code__dark}`
                : `${styles.code} ${styles.code__light}`
            }
          >
            useEffect
          </code>{" "}
          hook or a handler for a click, mouse enter, or scroll-related event,
          etc.
        </p>

        <p className={styles.p}>
          This{" "}
          <code
            className={
              isDarkMode
                ? `${styles.code} ${styles.code__dark}`
                : `${styles.code} ${styles.code__light}`
            }
          >
            onMouseEnter
          </code>{" "}
          event handler creates the below animation.
        </p>

        <div
          className={
            isDarkMode
              ? `${styles.codeblock} ${styles.codeblock__dark}`
              : styles.codeblock
          }
        >
          <pre
            style={{ borderRadius: "5px", margin: "0 0", padding: "2.5rem" }}
          >
            <code class="language-js">{codePhoneFigure1}</code>
          </pre>
        </div>

        <p className={styles.p}>Hover to see the small animation.</p>
        <AppFigure1 />
        <p className={styles.p}>
          If you need to learn the basics of GSAP, the docs explaining basic{" "}
          <a
            className={
              isDarkMode
                ? `${styles.linkAnchor} ${styles.linkAnchor__dark}`
                : `${styles.linkAnchor} ${styles.linkAnchor__light}`
            }
            target="_blank"
            href="https://greensock.com/docs/v3/GSAP/Tween"
          >
            tweens
          </a>{" "}
          are probably the best place to go. Essentially, there are a few
          methods you can call, like{" "}
          <code
            className={
              isDarkMode
                ? `${styles.code} ${styles.code__dark}`
                : `${styles.code} ${styles.code__light}`
            }
          >
            gsap.to()
          </code>{" "}
          and{" "}
          <code
            className={
              isDarkMode
                ? `${styles.code} ${styles.code__dark}`
                : `${styles.code} ${styles.code__light}`
            }
          >
            gsap.from()
          </code>
          .{" "}
          <code
            className={
              isDarkMode
                ? `${styles.code} ${styles.code__dark}`
                : `${styles.code} ${styles.code__light}`
            }
          >
            .to()
          </code>{" "}
          takes your image <em>to</em> the animation settings you provide in the
          "vars" object (which we'll discuss below), and{" "}
          <code
            className={
              isDarkMode
                ? `${styles.code} ${styles.code__dark}`
                : `${styles.code} ${styles.code__light}`
            }
          >
            .from()
          </code>{" "}
          brings it <em>from</em> your provided settings.
        </p>

        <p className={styles.note}>
          *Note: A "tween" is like a key-frame and a term applicable to all
          types of animation.
        </p>

        <p className={styles.p}>
          The methods' first parameter selects the target you want to animate.
          It uses{" "}
          <code
            className={
              isDarkMode
                ? `${styles.code} ${styles.code__dark}`
                : `${styles.code} ${styles.code__light}`
            }
          >
            querySelectorAll()
          </code>{" "}
          under the hood, so you can use selectors like{" "}
          <code
            className={
              isDarkMode
                ? `${styles.code} ${styles.code__dark}`
                : `${styles.code} ${styles.code__light}`
            }
          >
            .class
          </code>{" "}
          or{" "}
          <code
            className={
              isDarkMode
                ? `${styles.code} ${styles.code__dark}`
                : `${styles.code} ${styles.code__light}`
            }
          >
            #id
          </code>
          .{" "}
        </p>

        <p className={styles.p}>
          The second parameter is the "vars" object, which is where the magic
          happens. Here, you set key-value pairs to do things like animate CSS
          properties and set the animation's duration. I often use "onComplete",
          which you set to a callback function that will run when your animation
          finishes. It's worth knowing that there are a lot of cool things you
          can do in the "vars" object, and that they're detailed in the
          documentation.
        </p>
        <h2 className={styles.h2}>
          Using the{" "}
          <code
            className={
              isDarkMode
                ? `${styles.code} ${styles.code__dark}`
                : `${styles.code} ${styles.code__light}`
            }
          >
            useRef
          </code>{" "}
          hook
        </h2>
        <p className={styles.p}>
          If you want to be able to run an animation more than once, for example
          on every click or mouse enter event, rather than just a one-time
          fade-in or something, then you'll have to write more code. The way I
          made this work was by using the{" "}
          <code
            className={
              isDarkMode
                ? `${styles.code} ${styles.code__dark}`
                : `${styles.code} ${styles.code__light}`
            }
          >
            useRef
          </code>{" "}
          hook to use the{" "}
          <code
            className={
              isDarkMode
                ? `${styles.code} ${styles.code__dark}`
                : `${styles.code} ${styles.code__light}`
            }
          >
            .current
          </code>{" "}
          property it gives us. In the{" "}
          <code
            className={
              isDarkMode
                ? `${styles.code} ${styles.code__dark}`
                : `${styles.code} ${styles.code__light}`
            }
          >
            .current
          </code>{" "}
          property we can store a mutable value, or our tween, and have access
          to it throughout the component's scope.
        </p>

        <p className={styles.p}>
          Here's a step-by-step look at how I use{" "}
          <code
            className={
              isDarkMode
                ? `${styles.code} ${styles.code__dark}`
                : `${styles.code} ${styles.code__light}`
            }
          >
            useRef
          </code>{" "}
          and GSAP together.
        </p>

        <div
          className={
            isDarkMode
              ? `${styles.codeblock} ${styles.codeblock__dark}`
              : styles.codeblock
          }
        >
          <pre
            style={{ borderRadius: "5px", margin: "0 0", padding: "2.5rem" }}
          >
            <code class="language-js">{codePhoneFigure2}</code>
          </pre>
        </div>

        <p className={styles.p}>
          After importing styles, I import the{" "}
          <code
            className={
              isDarkMode
                ? `${styles.code} ${styles.code__dark}`
                : `${styles.code} ${styles.code__light}`
            }
          >
            useRef
          </code>{" "}
          hook. Within my component I call it and store its returned value into
          a variable, here named{" "}
          <code
            className={
              isDarkMode
                ? `${styles.code} ${styles.code__dark}`
                : `${styles.code} ${styles.code__light}`
            }
          >
            myTween
          </code>
          . Now,{" "}
          <code
            className={
              isDarkMode
                ? `${styles.code} ${styles.code__dark}`
                : `${styles.code} ${styles.code__light}`
            }
          >
            myTween
          </code>{" "}
          has a{" "}
          <code
            className={
              isDarkMode
                ? `${styles.code} ${styles.code__dark}`
                : `${styles.code} ${styles.code__light}`
            }
          >
            .current
          </code>{" "}
          property that can be accessed in the scope of{" "}
          <code
            className={
              isDarkMode
                ? `${styles.code} ${styles.code__dark}`
                : `${styles.code} ${styles.code__light}`
            }
          >
            useEffect
          </code>{" "}
          and any handlers we create.
        </p>

        <p className={styles.p}>
          Here's the built-out{" "}
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
            handleMouseEnter
          </code>{" "}
          functions using GSAP to create the animation.
        </p>

        <div
          className={
            isDarkMode
              ? `${styles.codeblock} ${styles.codeblock__dark}`
              : styles.codeblock
          }
        >
          <pre
            style={{ borderRadius: "5px", margin: "0 0", padding: "2.5rem" }}
          >
            <code class="language-js">{codePhoneFigure3}</code>
          </pre>
        </div>

        <p className={styles.p}>
          And here's the SVG with an animation that restarts every time the{" "}
          <code
            className={
              isDarkMode
                ? `${styles.code} ${styles.code__dark}`
                : `${styles.code} ${styles.code__light}`
            }
          >
            onMouseEnter
          </code>{" "}
          event is fired.
        </p>

        <AppFigure2 />

        <p className={styles.p}>
          By storing the tween in the{" "}
          <code
            className={
              isDarkMode
                ? `${styles.code} ${styles.code__dark}`
                : `${styles.code} ${styles.code__light}`
            }
          >
            .current
          </code>{" "}
          property we can control it with its methods such as{" "}
          <code
            className={
              isDarkMode
                ? `${styles.code} ${styles.code__dark}`
                : `${styles.code} ${styles.code__light}`
            }
          >
            .play()
          </code>
          ,
          <code
            className={
              isDarkMode
                ? `${styles.code} ${styles.code__dark}`
                : `${styles.code} ${styles.code__light}`
            }
          >
            .pause()
          </code>
          ,
          <code
            className={
              isDarkMode
                ? `${styles.code} ${styles.code__dark}`
                : `${styles.code} ${styles.code__light}`
            }
          >
            .resume()
          </code>
          ,
          <code
            className={
              isDarkMode
                ? `${styles.code} ${styles.code__dark}`
                : `${styles.code} ${styles.code__light}`
            }
          >
            .reverse()
          </code>
          ,
          <code
            className={
              isDarkMode
                ? `${styles.code} ${styles.code__dark}`
                : `${styles.code} ${styles.code__light}`
            }
          >
            .restart()
          </code>
          , etc.
        </p>

        <h2 className={styles.h2}>SVG to JSX</h2>
        <p className={styles.p}>
          Lastly, before moving on to more complex animations with GSAP
          timelines, you may have noticed warnings in the console about "Invalid
          DOM properties" such as 'stroke-width', accompanied with a question
          asking if you meant 'strokeWidth'? In fact, changing these attributes
          to the suggested, JSX syntax will remove the warnings.
        </p>

        <p className={styles.p}>
          Manually changing the names is easy enough for smaller SVGs, but for
          larger ones you'll want to use some sort of converter. I find{" "}
          <a
            className={
              isDarkMode
                ? `${styles.linkAnchor} ${styles.linkAnchor__dark}`
                : `${styles.linkAnchor} ${styles.linkAnchor__light}`
            }
            target="_blank"
            href="https://svg2jsx.com/"
          >
            svg2jsx.com
          </a>{" "}
          to be the best because it keeps the{" "}
          <code
            className={
              isDarkMode
                ? `${styles.code} ${styles.code__dark}`
                : `${styles.code} ${styles.code__light}`
            }
          >
            id
          </code>{" "}
          attributes we named in Figma. In the menu bar at svg2jsx.com there's a
          "Remove IDs" option you'll want to have switched off.
        </p>

        <p className={styles.p}>
          And there you have it. The basics of how I use GSAP to animate SVGs in
          React. Continue with{" "}
          <a
            className={
              isDarkMode
                ? `${styles.linkAnchor} ${styles.linkAnchor__dark}`
                : `${styles.linkAnchor} ${styles.linkAnchor__light}`
            }
            target="_blank"
            href="https://svg2jsx.com/"
          >
            part 2
          </a>{" "}
          to learn about making animations more complex with{" "}
          <code
            className={
              isDarkMode
                ? `${styles.code} ${styles.code__dark}`
                : `${styles.code} ${styles.code__light}`
            }
          >
            gsap.timeline()
          </code>
          .
        </p>
      </article>

      <div className={styles.nextPostFlexContainer}>
        <Link href="/post/gsap-timelines-in-react">
          <a
            className={
              isDarkMode
                ? `${styles.nextPost} ${styles.nextPost__dark}`
                : `${styles.nextPost} ${styles.nextPost__light}`
            }
          >
            Next - GreenSock in React: Timelines &rarr;
          </a>
        </Link>
      </div>
    </Layout>
  );
};
