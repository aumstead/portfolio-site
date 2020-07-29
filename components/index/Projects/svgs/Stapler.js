import styles from "./Stapler.module.scss";

function Stapler({ setMouseEnteredStapler }) {
  function handleMouseEnter() {
    // this state triggers useEffect func which restarts gsap timeline
    setMouseEnteredStapler((prevState) => !prevState);
  }
  return (
    <svg
      onMouseEnter={handleMouseEnter}
      className={styles.stapler}
      id="stapler"
      width="342"
      height="274"
      viewBox="0 0 342 274"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path fill="#FFCED2" d="M337.953 222.8h-306.7v46.9h306.7v-46.9z"></path>
      <path
        fill="#D8B2B6"
        d="M337.953 255.5h-306.7v14.1h306.7v-14.1z"
        opacity="0.2"
      ></path>
      <path
        fill="#D8B2B6"
        d="M247.653 84.1l13.8 32.7-162.1 75 39-68.5 109.3-39.2z"
      ></path>
      <path
        stroke="#030037"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit="10"
        strokeWidth="8"
        d="M247.653 84.1l13.8 32.7-162.1 75 39-68.5 109.3-39.2zM337.953 222.8h-306.7v46.9h306.7v-46.9z"
      ></path>
      <path
        fill="#38AD3D"
        d="M277.653 62.3l-248.1 180.2-17.4-24c-13.7-18.9-9.6-45.4 9.4-59.1L235.353 4l42.3 58.3z"
      ></path>
      <path
        fill="#38AD3D"
        d="M26.053 222.4c-13.7-18.9-9.6-45.4 9.4-59.1l203.3-154.5-3.5-4.8-213.8 155.4c-18.9 13.7-23.1 40.2-9.4 59.1l17.4 24 7.3-5.3-10.7-14.8z"
        opacity="0.84"
      ></path>
      <path
        fill="#38AD3D"
        d="M235.253 4l-14.5 10.6 34.7 47.7L21.853 232l7.7 10.5 248.1-180.2-42.4-58.3z"
        opacity="0.6"
      ></path>
      <path
        stroke="#030037"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit="10"
        strokeWidth="8"
        d="M277.653 62.3l-248.1 180.2-17.4-24c-13.7-18.9-9.6-45.4 9.4-59.1L235.353 4l42.3 58.3z"
      ></path>
      <path fill="#D8B2B6" d="M312.553 191.8h-255.9v31h255.9v-31z"></path>
      <path
        fill="#D8B2B6"
        d="M312.553 208.4h-255.9v14.4h255.9v-14.4z"
        opacity="0.2"
      ></path>
      <path
        stroke="#030037"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit="10"
        strokeWidth="8"
        d="M312.553 191.8h-255.9v31h255.9v-31z"
      ></path>
      <path
        fill="#D8B2B6"
        d="M67.653 239c17.508 0 31.7-14.192 31.7-31.7 0-17.507-14.192-31.7-31.7-31.7-17.507 0-31.7 14.193-31.7 31.7 0 17.508 14.193 31.7 31.7 31.7z"
      ></path>
      <path
        stroke="#030037"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit="10"
        strokeWidth="8"
        d="M67.653 239c17.508 0 31.7-14.192 31.7-31.7 0-17.507-14.192-31.7-31.7-31.7-17.507 0-31.7 14.193-31.7 31.7 0 17.508 14.193 31.7 31.7 31.7z"
      ></path>
      <path
        fill="#247C1A"
        d="M67.653 223.9c9.168 0 16.6-7.432 16.6-16.6 0-9.168-7.432-16.6-16.6-16.6-9.168 0-16.6 7.432-16.6 16.6 0 9.168 7.433 16.6 16.6 16.6z"
      ></path>
      <path
        stroke="#030037"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit="10"
        strokeWidth="8"
        d="M67.653 223.9c9.168 0 16.6-7.432 16.6-16.6 0-9.168-7.432-16.6-16.6-16.6-9.168 0-16.6 7.432-16.6 16.6 0 9.168 7.433 16.6 16.6 16.6z"
      ></path>
    </svg>
  );
}

export default Stapler;
