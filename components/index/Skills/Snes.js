import styles from "./Snes.module.scss";

function Snes({ myStackRunning, setMyStackRunning, setMouseEnteredSnes }) {
  function handleMouseEnter() {
    setMouseEnteredSnes(true)
    setMyStackRunning(true)
  }
  return (
    <svg
      onMouseEnter={myStackRunning ? null : handleMouseEnter}
      className={styles.snes}
      xmlns="http://www.w3.org/2000/svg"
      width="650"
      height="463"
      fill="none"
      viewBox="0 0 650 463"
    >
      <path
        stroke="#663C3B"
        strokeLinejoin="round"
        strokeMiterlimit="10"
        strokeWidth="10"
        d="M327.168 173v-55.949c0-6.419-11.197-11.62-25.016-11.62H113.016C99.196 105.431 88 100.229 88 93.81c0-6.42 11.197-11.62 25.016-11.62h400.968c13.819 0 25.016-5.202 25.016-11.622s-11.197-11.62-25.016-11.62h-161.9c-13.82 0-25.017-5.202-25.017-11.621V0"
      ></path>
      <path fill="#663C3B" d="M354 183h-58v12.5h58V183z"></path>
      <path fill="#663C3B" d="M345.7 176.8h-41.5v9.8h41.5v-9.8z"></path>
      <path fill="#663C3B" d="M340.2 170.5h-30.5v9.4h30.5v-9.4z"></path>
      <path
        fill="#DFDFDF"
        d="M515 195.8H135c-72.9 0-132 59.1-132 132s59.1 132 132 132c51.3 0 95.8-29.3 117.6-72h144.8c21.8 42.7 66.3 72 117.6 72 72.9 0 132-59.1 132-132s-59.1-132-132-132z"
      ></path>
      <path
        fill="#E086FF"
        d="M304.4 247.6h-28c-2.2 0-4-1.8-4-4s1.8-4 4-4h28c2.2 0 4 1.8 4 4s-1.7 4-4 4zM383.1 247.9h-56.9c-2.2 0-4-1.8-4-4s1.8-4 4-4h56.9c2.2 0 4 1.8 4 4s-1.7 4-4 4zM383.1 264.4H276.3c-2.2 0-4-1.8-4-4s1.8-4 4-4h106.8c2.2 0 4 1.8 4 4s-1.8 4-4 4z"
      ></path>
      <path
        fill="#EEBDFF"
        d="M275.1 346.7c-3.5-3.5-3.5-9.2 0-12.7l29.7-29.7c3.5-3.5 9.2-3.5 12.7 0s3.5 9.2 0 12.7l-29.7 29.7c-3.5 3.5-9.2 3.5-12.7 0zM342.1 346.7c-3.5-3.5-3.5-9.2 0-12.7l29.7-29.7c3.5-3.5 9.2-3.5 12.7 0s3.5 9.2 0 12.7l-29.7 29.7c-3.5 3.5-9.2 3.5-12.7 0z"
      ></path>
      <path
        fill="#D6D6D6"
        d="M135 207.3h380c71.3 0 129.4 55.6 131.9 125.1.1-1.6.1-3.1.1-4.7 0-72.9-59.1-132-132-132H135c-72.9 0-132 59.1-132 132 0 1.6 0 3.1.1 4.7C5.5 262.9 63.6 207.3 135 207.3z"
      ></path>
      <path
        fill="#B4B4B4"
        d="M515 442.8c-51.3 0-92.8-21.3-114.6-64H249.6c-21.8 42.7-63.3 64-114.6 64-70 0-127.3-54.6-131.7-123.5-.2 2.8-.3 5.6-.3 8.5 0 72.9 59.1 132 132 132 51.3 0 95.8-29.3 117.6-72h144.8c21.8 42.7 66.3 72 117.6 72 72.9 0 132-59.1 132-132 0-2.9-.1-5.7-.3-8.5-4.4 68.9-61.7 123.5-131.7 123.5z"
      ></path>
      <path
        fill="#EEBDFF"
        d="M135.5 420c46.944 0 85-38.056 85-85s-38.056-85-85-85-85 38.056-85 85 38.056 85 85 85z"
      ></path>
      <path
        fill="#835559"
        d="M135.5 411.8c46.392 0 84-37.608 84-84s-37.608-84-84-84-84 37.608-84 84 37.608 84 84 84z"
      ></path>
      <path
        fill="#95676B"
        d="M135.5 398.8c39.212 0 71-31.788 71-71s-31.788-71-71-71-71 31.788-71 71 31.788 71 71 71z"
      ></path>
      <path
        fill="#663C3B"
        d="M185.9 311.8h-34.4v-34.4c0-2.5-2.1-4.6-4.6-4.6h-22.8c-2.5 0-4.6 2.1-4.6 4.6v34.4H85.1c-2.5 0-4.6 2.1-4.6 4.6v22.8c0 2.5 2.1 4.6 4.6 4.6h34.4v34.4c0 2.5 2.1 4.6 4.6 4.6h22.8c2.5 0 4.6-2.1 4.6-4.6v-34.4h34.4c2.5 0 4.6-2.1 4.6-4.6v-22.8c0-2.6-2.1-4.6-4.6-4.6z"
      ></path>
      <path
        stroke="#663C3B"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit="10"
        strokeWidth="6"
        d="M135.5 411.8c46.392 0 84-37.608 84-84s-37.608-84-84-84-84 37.608-84 84 37.608 84 84 84z"
      ></path>
      <path
        fill="#EEBDFF"
        d="M515.5 420c46.944 0 85-38.056 85-85s-38.056-85-85-85-85 38.056-85 85 38.056 85 85 85z"
      ></path>
      <path
        fill="#835559"
        d="M515.5 411.8c46.392 0 84-37.608 84-84s-37.608-84-84-84-84 37.608-84 84 37.608 84 84 84z"
      ></path>
      <path
        fill="#95676B"
        d="M515.5 398.8c39.212 0 71-31.788 71-71s-31.788-71-71-71-71 31.788-71 71 31.788 71 71 71z"
      ></path>
      <path
        stroke="#663C3B"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit="10"
        strokeWidth="6"
        d="M515.5 411.8c46.392 0 84-37.608 84-84s-37.608-84-84-84-84 37.608-84 84 37.608 84 84 84z"
      ></path>
      <path
        fill="#FEC556"
        d="M129 291.2l5.5-9.6c.4-.7 1.4-.7 1.8 0l5.5 9.6c.4.7-.1 1.6-.9 1.6h-11.1c-.7 0-1.2-.9-.8-1.6zM129 364.4l5.5 9.6c.4.7 1.4.7 1.8 0l5.5-9.6c.4-.7-.1-1.6-.9-1.6h-11.1c-.7 0-1.2.9-.8 1.6z"
      ></path>
      <path
        stroke="#663C3B"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit="10"
        strokeWidth="3"
        d="M185.9 311.8h-34.4v-34.4c0-2.5-2.1-4.6-4.6-4.6h-22.8c-2.5 0-4.6 2.1-4.6 4.6v34.4H85.1c-2.5 0-4.6 2.1-4.6 4.6v22.8c0 2.5 2.1 4.6 4.6 4.6h34.4v34.4c0 2.5 2.1 4.6 4.6 4.6h22.8c2.5 0 4.6-2.1 4.6-4.6v-34.4h34.4c2.5 0 4.6-2.1 4.6-4.6v-22.8c0-2.6-2.1-4.6-4.6-4.6z"
      ></path>
      <path
        fill="#FEC556"
        d="M170.3 321.3l9.6 5.5c.7.4.7 1.4 0 1.8l-9.6 5.5c-.7.4-1.6-.1-1.6-.9v-11.1c0-.7.9-1.2 1.6-.8zM98.9 321.3l-9.6 5.5c-.7.4-.7 1.4 0 1.8l9.6 5.5c.7.4 1.6-.1 1.6-.9v-11.1c0-.7-.9-1.2-1.6-.8z"
      ></path>
      <path
        stroke="#663C3B"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit="10"
        strokeWidth="8"
        d="M424.7 189.8h90.8c19.5 0 38.1 4.1 55 11.4M80.5 201.2c16.9-7.4 35.5-11.4 55-11.4h89.2"
      ></path>
      <path
        stroke="#663C3B"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit="10"
        strokeWidth="6"
        d="M515 195.8H135c-72.9 0-132 59.1-132 132s59.1 132 132 132c51.3 0 95.8-29.3 117.6-72h144.8c21.8 42.7 66.3 72 117.6 72 72.9 0 132-59.1 132-132s-59.1-132-132-132z"
      ></path>
      <path
        fill="#000"
        d="M529 315.5l-39.6 39.6c-8.6 8.6-22.5 8.6-31.1 0-8.6-8.6-8.6-22.5 0-31.1l39.6-39.6c8.6-8.6 22.5-8.6 31.1 0 8.6 8.5 8.6 22.5 0 31.1z"
        opacity="0.17"
      ></path>
      <path
        fill="#FEC556"
        d="M527 311.5l-39.6 39.6c-8.6 8.6-22.5 8.6-31.1 0-8.6-8.6-8.6-22.5 0-31.1l39.6-39.6c8.6-8.6 22.5-8.6 31.1 0 8.6 8.5 8.6 22.5 0 31.1z"
      ></path>
      <path
        stroke="#663C3B"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit="10"
        strokeWidth="3"
        d="M527 311.5l-39.6 39.6c-8.6 8.6-22.5 8.6-31.1 0-8.6-8.6-8.6-22.5 0-31.1l39.6-39.6c8.6-8.6 22.5-8.6 31.1 0 8.6 8.5 8.6 22.5 0 31.1z"
      ></path>
      <path
        fill="#32B94D"
        d="M471.9 349.5c7.732 0 14-6.268 14-14s-6.268-14-14-14-14 6.268-14 14 6.268 14 14 14z"
      ></path>
      <path
        stroke="#663C3B"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit="10"
        strokeWidth="2"
        d="M462.9 334.7c.4-5 4.8-8.6 9.8-8.2"
      ></path>
      <path
        stroke="#663C3B"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit="10"
        strokeWidth="3"
        d="M471.9 349.5c7.732 0 14-6.268 14-14s-6.268-14-14-14-14 6.268-14 14 6.268 14 14 14z"
      ></path>
      <path
        fill="#8BD8F5"
        d="M511.5 309.9c7.732 0 14-6.268 14-14s-6.268-14-14-14-14 6.268-14 14 6.268 14 14 14z"
      ></path>
      <path
        stroke="#663C3B"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit="10"
        strokeWidth="2"
        d="M502.5 295.9c0-5 4-9 9-9"
      ></path>
      <path
        stroke="#663C3B"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit="10"
        strokeWidth="3"
        d="M511.5 309.9c7.732 0 14-6.268 14-14s-6.268-14-14-14-14 6.268-14 14 6.268 14 14 14z"
      ></path>
      <path
        fill="#000"
        d="M575.6 341.7L536 381.3c-8.6 8.6-22.5 8.6-31.1 0-8.6-8.6-8.6-22.5 0-31.1l39.6-39.6c8.6-8.6 22.5-8.6 31.1 0 8.6 8.6 8.6 22.5 0 31.1z"
        opacity="0.17"
      ></path>
      <path
        fill="#FEC556"
        d="M574.6 336.7L535 376.3c-8.6 8.6-22.5 8.6-31.1 0-8.6-8.6-8.6-22.5 0-31.1l39.6-39.6c8.6-8.6 22.5-8.6 31.1 0 8.6 8.6 8.6 22.5 0 31.1z"
      ></path>
      <path
        stroke="#663C3B"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit="10"
        strokeWidth="3"
        d="M574.6 336.7L535 376.3c-8.6 8.6-22.5 8.6-31.1 0-8.6-8.6-8.6-22.5 0-31.1l39.6-39.6c8.6-8.6 22.5-8.6 31.1 0 8.6 8.6 8.6 22.5 0 31.1z"
      ></path>
      <path
        fill="#FEF585"
        d="M519.5 374.8c7.732 0 14-6.268 14-14s-6.268-14-14-14-14 6.268-14 14 6.268 14 14 14z"
      ></path>
      <path
        stroke="#663C3B"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit="10"
        strokeWidth="2"
        d="M510.5 360.8c0-5 4-9 9-9"
      ></path>
      <path
        stroke="#663C3B"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit="10"
        strokeWidth="3"
        d="M519.5 374.8c7.732 0 14-6.268 14-14s-6.268-14-14-14-14 6.268-14 14 6.268 14 14 14z"
      ></path>
      <path
        fill="#E7503B"
        d="M559.1 335.2c7.732 0 14-6.268 14-14s-6.268-14-14-14-14 6.268-14 14 6.268 14 14 14z"
      ></path>
      <path
        stroke="#663C3B"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit="10"
        strokeWidth="2"
        d="M550.1 321.2c0-5 4-9 9-9"
      ></path>
      <path
        stroke="#663C3B"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit="10"
        strokeWidth="3"
        d="M559.1 335.2c7.732 0 14-6.268 14-14s-6.268-14-14-14-14 6.268-14 14 6.268 14 14 14z"
      ></path>
      <path
        fill="#663C3B"
        d="M275.1 342.7c-3.5-3.5-3.5-9.2 0-12.7l29.7-29.7c3.5-3.5 9.2-3.5 12.7 0s3.5 9.2 0 12.7l-29.7 29.7c-3.5 3.5-9.2 3.5-12.7 0zM342.1 342.7c-3.5-3.5-3.5-9.2 0-12.7l29.7-29.7c3.5-3.5 9.2-3.5 12.7 0s3.5 9.2 0 12.7l-29.7 29.7c-3.5 3.5-9.2 3.5-12.7 0z"
      ></path>
      <path
        fill="#FEC556"
        d="M135.5 343.8c8.837 0 16-7.163 16-16s-7.163-16-16-16-16 7.163-16 16 7.163 16 16 16z"
      ></path>
      <path
        fill="#F29940"
        d="M135.5 340.5c-8.1 0-15.1-6.4-15.9-14.4-.1.5-.1 1.1-.1 1.6 0 8.7 7.3 16 16 16s16-7.3 16-16c0-.6 0-1.1-.1-1.6-.9 8-7.8 14.4-15.9 14.4z"
      ></path>
      <path
        stroke="#663C3B"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit="10"
        strokeWidth="2"
        d="M123.5 327.8c0-6.5 5.5-12 12-12"
      ></path>
    </svg>
  );
}

export default Snes;
