import styles from "./Pc.module.scss";
import { useEffect, useRef } from "react";

function Pc({ triggerTimeline, isDarkMode, onMobile }) {
  const isInitialRender = useRef(true);
  const zoom = useRef(null);

  useEffect(() => {
    const viewBox = onMobile ? "100 0 171 200" : "100 -10 171 240"
    zoom.current = gsap.to("#pc", 1, { attr: { viewBox } });
    zoom.current.pause();
  }, [onMobile]);

  useEffect(() => {
    if (isInitialRender.current) {
      isInitialRender.current = false;
      return;
    }

    if (triggerTimeline) {
      zoom.current.restart();
    } else {
      zoom.current.reverse();
    }
  }, [triggerTimeline]);

  return (
    <svg
      className={styles.svg}
      id="pc"
      width="371"
      height="360"
      viewBox="-100 -100 571 560"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="pc">
        <path
          id="XMLID 77"
          d="M64.5 215V15C64.5 8.4 69.9 3 76.5 3H296.5C303.1 3 308.5 8.4 308.5 15V215C308.5 221.6 303.1 227 296.5 227H76.5C69.8 227 64.5 221.6 64.5 215Z"
          fill="#EBEBEB"
        />
        <path
          id="XMLID 78"
          d="M72.5 205.7V17.7002C72.5 14.9002 74.7 12.7002 77.5 12.7002H295.5C298.3 12.7002 300.5 14.9002 300.5 17.7002V205.7C300.5 208.5 298.3 210.7 295.5 210.7H77.5C74.7 210.7 72.5 208.4 72.5 205.7Z"
          fill="#F4F4F4"
        />
        <path
          id="XMLID 79"
          d="M64.5 215V15C64.5 8.4 69.9 3 76.5 3H296.5C303.1 3 308.5 8.4 308.5 15V215C308.5 221.6 303.1 227 296.5 227H76.5C69.8 227 64.5 221.6 64.5 215Z"
          stroke={isDarkMode ? "#6f6f6f" : "#3A3842"}
          strokeWidth="6"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          id="XMLID 80"
          d="M82.5 177.7V31.7002C82.5 27.8002 85.6 24.7002 89.5 24.7002H283.5C287.4 24.7002 290.5 27.8002 290.5 31.7002V177.7C290.5 181.6 287.4 184.7 283.5 184.7H89.5C85.6 184.7 82.5 181.6 82.5 177.7Z"
          fill="#EBEBEB"
        />
        <path
          id="screen"
          d="M111.5 175.7C99.4 175.7 89.5 165.8 89.5 153.7V55.7002C89.5 43.6002 99.4 33.7002 111.5 33.7002H261.5C273.6 33.7002 283.5 43.6002 283.5 55.7002V153.7C283.5 165.8 273.6 175.7 261.5 175.7H111.5Z"
          fill="#3A3842"
        />
        <path
          id="XMLID 82"
          d="M265.5 245H107.5C103.1 245 99.5 241.4 99.5 237V227H273.5V237C273.5 241.4 269.9 245 265.5 245Z"
          fill="#F4F4F4"
        />
        <path id="XMLID 83" d="M273.5 227H99.5V236H273.5V227Z" fill="#EBEBEB" />
        <path
          id="XMLID 84"
          d="M265.5 245H107.5C103.1 245 99.5 241.4 99.5 237V227H273.5V237C273.5 241.4 269.9 245 265.5 245Z"
          stroke={isDarkMode ? "#6f6f6f" : "#3A3842"}
          strokeWidth="6"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          id="XMLID 85"
          d="M358.5 341H14.5C10.1 341 6.5 337.4 6.5 333V253C6.5 248.6 10.1 245 14.5 245H358.5C362.9 245 366.5 248.6 366.5 253V333C366.5 337.4 362.9 341 358.5 341Z"
          fill="#EBEBEB"
        />
        <path
          id="XMLID 86"
          d="M358.5 341H14.5C10.1 341 6.5 337.4 6.5 333V253C6.5 248.6 10.1 245 14.5 245H358.5C362.9 245 366.5 248.6 366.5 253V333C366.5 337.4 362.9 341 358.5 341Z"
          stroke={isDarkMode ? "#6f6f6f" : "#3A3842"}
          strokeWidth="6"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          id="XMLID 87"
          d="M18.8999 325V261C18.8999 256.6 22.4999 253 26.8999 253H346C350.4 253 354 256.6 354 261V325C354 329.4 350.4 333 346 333H26.8999C22.4999 333 18.8999 329.4 18.8999 325Z"
          fill="#F4F4F4"
        />
        <path
          id="XMLID 88"
          d="M256.7 204.8C260.842 204.8 264.2 201.442 264.2 197.3C264.2 193.158 260.842 189.8 256.7 189.8C252.558 189.8 249.2 193.158 249.2 197.3C249.2 201.442 252.558 204.8 256.7 204.8Z"
          fill="#CBCBCB"
        />
        <path
          id="XMLID 89"
          d="M256.7 203.8C260.29 203.8 263.2 200.89 263.2 197.3C263.2 193.71 260.29 190.8 256.7 190.8C253.11 190.8 250.2 193.71 250.2 197.3C250.2 200.89 253.11 203.8 256.7 203.8Z"
          fill="#3A3842"
        />
        <path
          id="XMLID 90"
          d="M256.7 202.9C259.793 202.9 262.3 200.393 262.3 197.3C262.3 194.207 259.793 191.7 256.7 191.7C253.607 191.7 251.1 194.207 251.1 197.3C251.1 200.393 253.607 202.9 256.7 202.9Z"
          fill="#33313A"
        />
        <g id="XMLID 91">
          <g id="XMLID 136">
            <path
              id="XMLID 137"
              d="M126.9 298.5V326"
              stroke="#EBEBEB"
              strokeWidth="6"
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </g>
          <g id="XMLID 133">
            <path
              id="XMLID 134"
              d="M116.9 298.5V326"
              stroke="#EBEBEB"
              strokeWidth="6"
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </g>
          <g id="XMLID 130">
            <path
              id="XMLID 131"
              d="M106.9 298.5V326"
              stroke="#EBEBEB"
              strokeWidth="6"
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </g>
          <g id="XMLID 127">
            <path
              id="XMLID 128"
              d="M96.8999 298.5V326"
              stroke="#EBEBEB"
              strokeWidth="6"
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </g>
          <g id="XMLID 124">
            <path
              id="XMLID 125"
              d="M86.8999 298.5V326"
              stroke="#EBEBEB"
              strokeWidth="6"
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </g>
          <g id="XMLID 121">
            <path
              id="XMLID 122"
              d="M76.8999 298.5V326"
              stroke="#EBEBEB"
              strokeWidth="6"
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </g>
          <g id="XMLID 118">
            <path
              id="XMLID 119"
              d="M66.8999 298.5V326"
              stroke="#EBEBEB"
              strokeWidth="6"
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </g>
          <g id="XMLID 115">
            <path
              id="XMLID 116"
              d="M56.8999 298.5V326"
              stroke="#EBEBEB"
              strokeWidth="6"
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </g>
          <g id="XMLID 112">
            <path
              id="XMLID 113"
              d="M46.8999 298.5V326"
              stroke="#EBEBEB"
              strokeWidth="6"
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </g>
        </g>
        <g id="XMLID 92">
          <g id="XMLID 60">
            <path
              id="XMLID 61"
              d="M127.8 298.5V326"
              stroke={isDarkMode ? "#6f6f6f" : "#3A3842"}
              strokeWidth="4"
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </g>
          <g id="XMLID 58">
            <path
              id="XMLID 59"
              d="M117.8 298.5V326"
              stroke={isDarkMode ? "#6f6f6f" : "#3A3842"}
              strokeWidth="4"
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </g>
          <g id="XMLID 56">
            <path
              id="XMLID 57"
              d="M107.8 298.5V326"
              stroke={isDarkMode ? "#6f6f6f" : "#3A3842"}
              strokeWidth="4"
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </g>
          <g id="XMLID 54">
            <path
              id="XMLID 55"
              d="M97.7999 298.5V326"
              stroke={isDarkMode ? "#6f6f6f" : "#3A3842"}
              strokeWidth="4"
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </g>
          <g id="XMLID 52">
            <path
              id="XMLID 53"
              d="M87.7999 298.5V326"
              stroke={isDarkMode ? "#6f6f6f" : "#3A3842"}
              strokeWidth="4"
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </g>
          <g id="XMLID 50">
            <path
              id="XMLID 51"
              d="M77.7999 298.5V326"
              stroke={isDarkMode ? "#6f6f6f" : "#3A3842"}
              strokeWidth="4"
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </g>
          <g id="XMLID 48">
            <path
              id="XMLID 49"
              d="M67.7999 298.5V326"
              stroke={isDarkMode ? "#6f6f6f" : "#3A3842"}
              strokeWidth="4"
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </g>
          <g id="XMLID 46">
            <path
              id="XMLID 47"
              d="M57.7999 298.5V326"
              stroke={isDarkMode ? "#6f6f6f" : "#3A3842"}
              strokeWidth="4"
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </g>
          <g id="XMLID 44">
            <path
              id="XMLID 45"
              d="M47.7999 298.5V326"
              stroke={isDarkMode ? "#6f6f6f" : "#3A3842"}
              strokeWidth="4"
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </g>
        </g>
        <g id="XMLID 93">
          <path
            id="XMLID 12"
            d="M49.3 265.4H42.5V272.2H49.3V265.4Z"
            fill="#F26640"
          />
          <path
            id="XMLID 25"
            d="M57.4999 265.4H50.7V272.2H57.4999V265.4Z"
            fill="#5EB755"
          />
          <path
            id="XMLID 26"
            d="M49.3 273.3H42.5V280.1H49.3V273.3Z"
            fill="#6A82EA"
          />
          <path
            id="XMLID 27"
            d="M57.4999 273.3H50.7V280.1H57.4999V273.3Z"
            fill="#EFAD43"
          />
        </g>
        <path
          id="XMLID 94"
          d="M261.5 33.7002H253.9C249.2 97.6002 195.9 148 130.8 148H89.5V153.7C89.5 165.8 99.4 175.7 111.5 175.7H261.5C273.6 175.7 283.5 165.8 283.5 153.7V55.7002C283.5 43.6002 273.6 33.7002 261.5 33.7002Z"
          fill="#33313A"
        />
        <path
          id="XMLID 95"
          opacity="0.34"
          d="M85.5999 268.7H60.7999V272.3H85.5999V268.7Z"
          fill="#3A3842"
        />
        <path
          id="XMLID 96"
          opacity="0.34"
          d="M73.1999 274.9H60.7999V276.8H73.1999V274.9Z"
          fill="#3A3842"
        />
        <path
          id="XMLID 97"
          d="M191.7 326.7H87.7V338.7H191.7V326.7Z"
          fill="#EBEBEB"
        />
        <path
          id="XMLID 98"
          d="M45.8999 326.7H25.8999V338.7H45.8999V326.7Z"
          fill="#EBEBEB"
        />
        <path
          id="XMLID 99"
          d="M76.7999 326.7H56.7999V338.7H76.7999V326.7Z"
          fill="#EBEBEB"
        />
        <path
          id="XMLID 100"
          d="M222.6 326.7H202.6V338.7H222.6V326.7Z"
          fill="#EBEBEB"
        />
        <path
          id="XMLID 101"
          d="M253.5 326.7H233.5V338.7H253.5V326.7Z"
          fill="#EBEBEB"
        />
        <path
          id="XMLID 102"
          d="M284.5 326.7H264.5V338.7H284.5V326.7Z"
          fill="#EBEBEB"
        />
        <path
          id="XMLID 103"
          d="M191.7 326.7H87.7V338.7H191.7V326.7Z"
          stroke={isDarkMode ? "#6f6f6f" : "#3A3842"}
          strokeWidth="6"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          id="XMLID 104"
          d="M45.8999 326.7H25.8999V338.7H45.8999V326.7Z"
          stroke={isDarkMode ? "#6f6f6f" : "#3A3842"}
          strokeWidth="6"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          id="XMLID 105"
          d="M76.7999 326.7H56.7999V338.7H76.7999V326.7Z"
          stroke={isDarkMode ? "#6f6f6f" : "#3A3842"}
          strokeWidth="6"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          id="XMLID 106"
          d="M222.6 326.7H202.6V338.7H222.6V326.7Z"
          stroke={isDarkMode ? "#6f6f6f" : "#3A3842"}
          strokeWidth="6"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          id="XMLID 107"
          d="M253.5 326.7H233.5V338.7H253.5V326.7Z"
          stroke={isDarkMode ? "#6f6f6f" : "#3A3842"}
          strokeWidth="6"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          id="XMLID 108"
          d="M284.5 326.7H264.5V338.7H284.5V326.7Z"
          stroke={isDarkMode ? "#6f6f6f" : "#3A3842"}
          strokeWidth="6"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          id="XMLID 109"
          d="M303.5 356.7H7.5C5.3 356.7 3.5 354.9 3.5 352.7V342.7C3.5 340.5 5.3 338.7 7.5 338.7H303.5C305.7 338.7 307.5 340.5 307.5 342.7V352.7C307.5 354.9 305.7 356.7 303.5 356.7Z"
          fill="#EBEBEB"
        />
        <path
          id="XMLID 110"
          d="M303.5 356.7H7.5C5.3 356.7 3.5 354.9 3.5 352.7V342.7C3.5 340.5 5.3 338.7 7.5 338.7H303.5C305.7 338.7 307.5 340.5 307.5 342.7V352.7C307.5 354.9 305.7 356.7 303.5 356.7Z"
          stroke={isDarkMode ? "#6f6f6f" : "#3A3842"}
          strokeWidth="6"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          id="XMLID 111"
          d="M367.8 356.7H330.5V351.9C330.5 344.6 336.4 338.7 343.7 338.7H354.7C362 338.7 367.9 344.6 367.9 351.9V356.7H367.8Z"
          fill="#EBEBEB"
        />
        <path
          id="XMLID 112_2"
          d="M367.8 356.7H330.5V351.9C330.5 344.6 336.4 338.7 343.7 338.7H354.7C362 338.7 367.9 344.6 367.9 351.9V356.7H367.8Z"
          stroke={isDarkMode ? "#6f6f6f" : "#3A3842"}
          strokeWidth="6"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <g id="XMLID 113_2">
          <path
            id="XMLID 14"
            d="M329.1 285.7H237.8C237.1 285.7 236.4 285.1 236.4 284.3V276.3C236.4 275.6 237 274.9 237.8 274.9H329.1C329.8 274.9 330.5 275.5 330.5 276.3V284.3C330.5 285.1 329.9 285.7 329.1 285.7Z"
            fill="#EBEBEB"
          />
          <path
            id="XMLID 13"
            d="M295.3 289.7H271.6C270.9 289.7 270.4 289.1 270.4 288.5V272.2C270.4 271.5 271 271 271.6 271H295.3C296 271 296.5 271.6 296.5 272.2V288.5C296.6 289.2 296 289.7 295.3 289.7Z"
            fill="#EBEBEB"
          />
          <path
            id="XMLID 9"
            d="M326.5 276.3H240.5V284.3H326.5V276.3Z"
            fill="#3A3842"
          />
          <path
            id="XMLID 11"
            d="M295.5 273.3H271.5V287.3H295.5V273.3Z"
            fill="#3A3842"
          />
          <path
            id="XMLID 73"
            d="M242.5 280.3C242.5 279.2 243.4 278.3 244.5 278.3H322.5C323.6 278.3 324.5 279.2 324.5 280.3C324.5 281.4 323.6 282.3 322.5 282.3H244.5C243.4 282.3 242.5 281.4 242.5 280.3Z"
            fill="#33313A"
          />
        </g>
        <g id="XMLID 114">
          <path
            id="XMLID 80_2"
            d="M329.1 311H237.8C237.1 311 236.4 310.4 236.4 309.6V301.6C236.4 300.9 237 300.2 237.8 300.2H329.1C329.8 300.2 330.5 300.8 330.5 301.6V309.6C330.5 310.4 329.9 311 329.1 311Z"
            fill="#EBEBEB"
          />
          <path
            id="XMLID 79_2"
            d="M295.3 315.1H271.6C270.9 315.1 270.4 314.5 270.4 313.9V297.6C270.4 296.9 271 296.4 271.6 296.4H295.3C296 296.4 296.5 297 296.5 297.6V313.9C296.6 314.5 296 315.1 295.3 315.1Z"
            fill="#EBEBEB"
          />
          <path
            id="XMLID 78_2"
            d="M326.5 301.7H240.5V309.7H326.5V301.7Z"
            fill="#3A3842"
          />
          <path
            id="XMLID 77_2"
            d="M295.5 298.7H271.5V312.7H295.5V298.7Z"
            fill="#3A3842"
          />
          <path
            id="XMLID 76"
            d="M242.5 305.7C242.5 304.6 243.4 303.7 244.5 303.7H322.5C323.6 303.7 324.5 304.6 324.5 305.7C324.5 306.8 323.6 307.7 322.5 307.7H244.5C243.4 307.7 242.5 306.8 242.5 305.7Z"
            fill="#33313A"
          />
        </g>
      </g>
    </svg>
  );
}

export default Pc;
