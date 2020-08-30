function HTMLFigure2() {
  function handleMouseEnter() {
    const myTween1 = gsap.to("#greater-than", 4, { rotate: 360 * 3, transformOrigin: "50% 50%", ease: "power3.out" })  
    const myTween2 = gsap.to("#less-than", 4, { rotate: -360 * 3, transformOrigin: "50% 50%", ease: "power3.out" })  
    myTween1.restart()
    myTween2.restart()
  }
  return (
    <svg
      onMouseEnter={handleMouseEnter}
      id="svg"
      width="40"
      height="32"
      viewBox="0 0 40 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ height: "min-content", display: "block", margin: "0 auto" }}
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

export default HTMLFigure2;
