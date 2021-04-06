import { useEffect, useRef } from 'react'

function Hamburger({ setHamburgerClicked, hamburgerClicked, isDarkMode }) {
  const tl = useRef(null)
  const firstUpdate = useRef(true);

  useEffect(() => {
    tl.current = gsap.timeline()
    tl.current
      .to("#top", .5, { y: 10})
      .to("#bottom", .5, { y: -10}, "<")
      .to("#top", .5, { rotate: 135, transformOrigin: "50% 50%" })
      .to("#bottom", .5, { rotate: 135, transformOrigin: "50% 50%" }, "<")
      .to("#middle", .5, { rotate: 225, transformOrigin: "50% 50%" }, "<")

    tl.current.pause()
  }, [])

  useEffect(() => {
    if (firstUpdate.current) {
      firstUpdate.current = false;
      return;
    }

    if (hamburgerClicked) {
      tl.current.pause(0);
      tl.current.restart();
    } else {
      tl.current.reverse();
    }
  }, [hamburgerClicked])

  function handleClick() {
    setHamburgerClicked(prevState => !prevState)
  }
  return (
    <svg
      onClick={handleClick}
      width="33"
      height="26"
      viewBox="0 0 33 26"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        id="middle"
        d="M30.1 13H3"
        stroke={isDarkMode ? "#FFF" : "#000"}
        strokeWidth="3"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        id="bottom"
        d="M30.1 23H3"
        stroke={isDarkMode ? "#FFF" : "#000"}
        strokeWidth="3"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        id="top"
        d="M30.1 3H3"
        stroke={isDarkMode ? "#FFF" : "#000"}
        strokeWidth="3"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default Hamburger;
