import styles from "./Camera.module.scss";
import { useEffect, useRef } from "react";

function Camera({ isDarkMode, setShowPicture, onMobile }) {
  const shutterTl = useRef(null);

  useEffect(() => {
    shutterTl.current = gsap.timeline();
    if (isDarkMode) {
      shutterTl.current
        .to("#lens", 0.5, { scale: 0, transformOrigin: "50% 50%" })
        .to("#lens", 0.5, { scale: 1, transformOrigin: "50% 50%" }, "<.5");
    } else {
      shutterTl.current
        .set("#svg", { opacity: 0 })
        .to("#svg", 1, { opacity: 1 })
        .to("#lens", 0.5, { scale: 0, transformOrigin: "50% 50%" }, "<")
        .to("#lens", 0.5, { scale: 1, transformOrigin: "50% 50%" }, "<.5");
  
      }
    shutterTl.current.pause();
  }, [isDarkMode]);
  function handleMouseEnter() {
    shutterTl.current.restart();
    setShowPicture(prevState => !prevState)
  }
  return (
    <svg
      id="svg"
      className={styles.camera}
      onMouseEnter={onMobile ? null : handleMouseEnter}
      onClick={onMobile ? handleMouseEnter : null}
      width="557"
      height="330"
      viewBox="0 0 557 330"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="camera">
        <path
          id="XMLID_89_"
          d="M182.5 42.6001H98.5V28.6001C98.5 19.8001 105.7 12.6001 114.5 12.6001H166.5C175.3 12.6001 182.5 19.8001 182.5 28.6001V42.6001Z"
          fill="#C1A7A7"
        />
        <path
          id="XMLID_2_"
          d="M182.5 42.6001H98.5V28.6001C98.5 19.8001 105.7 12.6001 114.5 12.6001H166.5C175.3 12.6001 182.5 19.8001 182.5 28.6001V42.6001Z"
          stroke="#493B3B"
          strokeWidth="6"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <g id="XMLID_190_">
          <g id="XMLID_217_">
            <path
              id="XMLID_218_"
              d="M177.8 15.8999V42.5999"
              stroke="#493B3B"
              strokeWidth="4"
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </g>
          <g id="XMLID_214_">
            <path
              id="XMLID_215_"
              d="M168.8 15.8999V42.5999"
              stroke="#493B3B"
              strokeWidth="4"
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </g>
          <g id="XMLID_211_">
            <path
              id="XMLID_212_"
              d="M159.8 15.8999V42.5999"
              stroke="#493B3B"
              strokeWidth="4"
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </g>
          <g id="XMLID_208_">
            <path
              id="XMLID_209_"
              d="M150.8 15.8999V42.5999"
              stroke="#493B3B"
              strokeWidth="4"
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </g>
          <g id="XMLID_205_">
            <path
              id="XMLID_206_"
              d="M141.8 15.8999V42.5999"
              stroke="#493B3B"
              strokeWidth="4"
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </g>
          <g id="XMLID_202_">
            <path
              id="XMLID_203_"
              d="M132.8 15.8999V42.5999"
              stroke="#493B3B"
              strokeWidth="4"
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </g>
          <g id="XMLID_199_">
            <path
              id="XMLID_200_"
              d="M123.8 15.8999V42.5999"
              stroke="#493B3B"
              strokeWidth="4"
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </g>
          <g id="XMLID_196_">
            <path
              id="XMLID_197_"
              d="M114.8 15.8999V42.5999"
              stroke="#493B3B"
              strokeWidth="4"
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </g>
          <g id="XMLID_193_">
            <path
              id="XMLID_194_"
              d="M105.8 15.8999V42.5999"
              stroke="#493B3B"
              strokeWidth="4"
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </g>
        </g>
        <path
          id="XMLID_53_"
          d="M523.9 6.7002H201.9C193 6.7002 184.8 11.0002 179.4 18.0002C168.1 33.0002 150.1 42.7002 129.9 42.7002H11.8999V294.7C11.8999 308 22.5999 318.7 35.8999 318.7H523.9C537.2 318.7 547.9 308 547.9 294.7V30.7002C547.9 17.4002 537.1 6.7002 523.9 6.7002Z"
          fill="#E2A86D"
        />
        <path
          id="XMLID_80_"
          d="M40.8999 86.3999H11.8999V290.5H40.8999V86.3999Z"
          fill="#D6975F"
        />
        <path
          id="XMLID_111_"
          d="M547.9 86.3999H518.9V290.5H547.9V86.3999Z"
          fill="#D6975F"
        />
        <g id="XMLID_120_">
          <path
            id="XMLID_117_"
            d="M169.1 273.9L219.4 251.7L200 207.8L149.7 230C137.6 235.4 132.1 249.5 137.4 261.6C142.8 273.8 157 279.2 169.1 273.9Z"
            fill="#E5D6D6"
          />
          <path
            id="XMLID_106_"
            d="M169.1 273.9L219.4 251.7L200 207.8L149.7 230C137.6 235.4 132.1 249.5 137.4 261.6C142.8 273.8 157 279.2 169.1 273.9Z"
            stroke="#493B3B"
            strokeWidth="6"
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            id="XMLID_119_"
            d="M159.4 266.3C167.353 266.3 173.8 259.853 173.8 251.9C173.8 243.947 167.353 237.5 159.4 237.5C151.447 237.5 145 243.947 145 251.9C145 259.853 151.447 266.3 159.4 266.3Z"
            fill="#EFE6E6"
          />
          <path
            id="XMLID_110_"
            d="M159.4 266.3C167.353 266.3 173.8 259.853 173.8 251.9C173.8 243.947 167.353 237.5 159.4 237.5C151.447 237.5 145 243.947 145 251.9C145 259.853 151.447 266.3 159.4 266.3Z"
            stroke="#493B3B"
            strokeWidth="4"
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>
        <path
          id="XMLID_55_"
          d="M11.8999 290.5V294.6C11.8999 307.9 22.5999 318.6 35.8999 318.6H523.9C537.2 318.6 547.9 307.9 547.9 294.6V290.5H11.8999Z"
          fill="#E5D6D6"
        />
        <path
          id="XMLID_147_"
          opacity="0.2"
          d="M279.9 89.2998C217.2 89.2998 166.4 140.3 166.4 203.1C166.4 211.1 167.2 218.9 168.8 226.5L149.7 234.9C137.6 240.3 132.1 254.4 137.4 266.5C142.8 278.6 156.9 284.1 169 278.8L188.2 270.3C208.8 298.6 242.2 316.9 279.8 316.9C342.5 316.9 393.3 265.9 393.3 203.1C393.4 140.3 342.6 89.2998 279.9 89.2998Z"
          fill="#2D2D2D"
          stroke="#2D2D2D"
          strokeWidth="8"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          id="XMLID_153_"
          d="M523.9 318.7H518.9V290.6H547.9V294.7C547.9 307.9 537.1 318.7 523.9 318.7Z"
          fill="#DBC8C8"
        />
        <path
          id="XMLID_133_"
          d="M35.8999 318.7H40.8999V290.6H11.8999V294.7C11.8999 307.9 22.5999 318.7 35.8999 318.7Z"
          fill="#DBC8C8"
        />
        <path
          id="XMLID_54_"
          d="M523.9 6.3999H201.9C193 6.3999 184.7 10.6999 179.4 17.7999C168.1 32.8999 150.1 42.5999 129.9 42.5999H11.8999V86.3999H547.9V30.4999C547.9 17.1999 537.1 6.3999 523.9 6.3999Z"
          fill="#E5D6D6"
        />
        <path
          id="XMLID_4_"
          d="M40.8999 43.6001H11.8999V86.4001H40.8999V43.6001Z"
          fill="#DBC8C8"
        />
        <path
          id="XMLID_166_"
          d="M379.1 70.6H44.0998C42.2998 70.6 40.7998 69.1 40.7998 67.3C40.7998 65.5 42.2998 64 44.0998 64H379.1C380.9 64 382.4 65.5 382.4 67.3C382.4 69.1 380.9 70.6 379.1 70.6Z"
          fill="#C1A7A7"
        />
        <path
          id="XMLID_142_"
          d="M523.8 6.3999H518.8V86.3999H547.8V30.3999C547.8 17.1999 537.1 6.3999 523.8 6.3999Z"
          fill="#DBC8C8"
        />
        <path
          id="shutter"
          d="M279 279C329.258 279 370 238.258 370 188C370 137.742 329.258 97 279 97C228.742 97 188 137.742 188 188C188 238.258 228.742 279 279 279Z"
          fill="#493B3B"
        />
        <g id="lens">
          <path
            id="part2"
            d="M279.9 300C342.584 300 393.4 249.05 393.4 186.2C393.4 123.35 342.584 72.3999 279.9 72.3999C217.216 72.3999 166.4 123.35 166.4 186.2C166.4 249.05 217.216 300 279.9 300Z"
            fill="#E5D6D6"
          />
          <path
            id="XMLID_90_"
            d="M279.9 277.2C330.158 277.2 370.9 236.458 370.9 186.2C370.9 135.942 330.158 95.2002 279.9 95.2002C229.642 95.2002 188.9 135.942 188.9 186.2C188.9 236.458 229.642 277.2 279.9 277.2Z"
            fill="#845B5B"
          />
          <path
            id="XMLID_126_"
            d="M279.9 115.2C326.7 115.2 365.4 150.7 370.3 196.2C370.7 192.9 370.9 189.6 370.9 186.2C370.9 136 330.1 95.2002 279.9 95.2002C229.7 95.2002 188.9 136 188.9 186.2C188.9 189.6 189.1 192.9 189.5 196.2C194.4 150.7 233.1 115.2 279.9 115.2Z"
            fill="#704848"
          />
          <path
            id="XMLID_24_"
            d="M279.9 288.7C336.509 288.7 382.4 242.809 382.4 186.2C382.4 129.591 336.509 83.7002 279.9 83.7002C223.291 83.7002 177.4 129.591 177.4 186.2C177.4 242.809 223.291 288.7 279.9 288.7Z"
            stroke="#493B3B"
            strokeWidth="3"
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            id="XMLID_25_"
            d="M279.9 277.2C330.158 277.2 370.9 236.458 370.9 186.2C370.9 135.942 330.158 95.2002 279.9 95.2002C229.642 95.2002 188.9 135.942 188.9 186.2C188.9 236.458 229.642 277.2 279.9 277.2Z"
            stroke="#493B3B"
            strokeWidth="8"
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            id="XMLID_82_"
            d="M279.9 248.2C314.142 248.2 341.9 220.442 341.9 186.2C341.9 151.959 314.142 124.2 279.9 124.2C245.658 124.2 217.9 151.959 217.9 186.2C217.9 220.442 245.658 248.2 279.9 248.2Z"
            fill="#B57F7F"
          />
          <path
            id="XMLID_91_"
            opacity="0.34"
            d="M322.6 186.2C352.6 186.2 369.1 221.2 349.9 244.2C333.2 264.3 308 277.2 279.9 277.2C251.8 277.2 226.6 264.4 209.9 244.2C190.7 221.1 207.3 186.2 237.2 186.2H322.6Z"
            fill="white"
          />
          <path
            id="XMLID_108_"
            d="M279.9 144.2C310.7 144.2 336.3 166.8 341.1 196.2C341.6 192.9 341.9 189.6 341.9 186.2C341.9 152 314.1 124.2 279.9 124.2C245.7 124.2 217.9 152 217.9 186.2C217.9 189.6 218.2 192.9 218.7 196.2C223.5 166.7 249.1 144.2 279.9 144.2Z"
            fill="#AD6D6D"
          />
          <path
            id="XMLID_27_"
            d="M279.9 248.2C314.142 248.2 341.9 220.442 341.9 186.2C341.9 151.959 314.142 124.2 279.9 124.2C245.658 124.2 217.9 151.959 217.9 186.2C217.9 220.442 245.658 248.2 279.9 248.2Z"
            stroke="#493B3B"
            strokeWidth="6"
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            id="XMLID_84_"
            d="M316.438 192.13C319.712 171.96 306.014 152.954 285.843 149.68C265.672 146.407 246.666 160.105 243.393 180.276C240.119 200.447 253.817 219.452 273.988 222.726C294.159 225.999 313.165 212.301 316.438 192.13Z"
            fill="#4C3535"
          />
          <path
            id="XMLID_37_"
            d="M316.438 192.13C319.712 171.96 306.014 152.954 285.843 149.68C265.672 146.407 246.666 160.105 243.393 180.276C240.119 200.447 253.817 219.452 273.988 222.726C294.159 225.999 313.165 212.301 316.438 192.13Z"
            stroke="#493B3B"
            strokeWidth="3"
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            id="part1"
            d="M303.113 189.968C305.192 177.157 296.492 165.085 283.68 163.006C270.869 160.927 258.798 169.627 256.719 182.438C254.64 195.25 263.34 207.321 276.151 209.4C288.962 211.479 301.033 202.779 303.113 189.968Z"
            fill="#3F2E2E"
          />
          <path
            id="XMLID_98_"
            opacity="0.38"
            d="M279.9 162.7C266.9 162.7 256.4 173.2 256.4 186.2C256.4 186.3 256.4 186.3 256.4 186.4C259.5 183.8 264.1 182.4 270.2 182.9C276.3 183.4 277.4 185.3 284.2 187.3C290.2 189 297.9 188.4 303.4 185.7C303.1 172.9 292.7 162.7 279.9 162.7Z"
            fill="white"
          />
        </g>
        <path
          id="XMLID_150_"
          d="M87.3 42.6001H35V32.6001C35 29.3001 37.7 26.6001 41 26.6001H81.3C84.6 26.6001 87.3 29.3001 87.3 32.6001V42.6001Z"
          fill="#6A4949"
        />
        <path
          id="XMLID_20_"
          d="M87.3 42.6001H35V32.6001C35 29.3001 37.7 26.6001 41 26.6001H81.3C84.6 26.6001 87.3 29.3001 87.3 32.6001V42.6001Z"
          stroke="#493B3B"
          strokeWidth="6"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          id="XMLID_29_"
          d="M79.2002 14.7002H43.2002V26.6002H79.2002V14.7002Z"
          stroke="#493B3B"
          strokeWidth="6"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          id="XMLID_115_"
          d="M79.2002 14.7002H43.2002V26.6002H79.2002V14.7002Z"
          fill="#493B3B"
        />
        <path
          id="XMLID_79_"
          d="M279.9 300C342.584 300 393.4 249.05 393.4 186.2C393.4 123.35 342.584 72.3999 279.9 72.3999C217.216 72.3999 166.4 123.35 166.4 186.2C166.4 249.05 217.216 300 279.9 300Z"
          stroke="#493B3B"
          strokeWidth="8"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          id="XMLID_52_"
          d="M523.9 6.7002H201.9C193 6.7002 184.8 11.0002 179.4 18.0002C168.1 33.0002 150.1 42.7002 129.9 42.7002H11.8999V294.7C11.8999 308 22.5999 318.7 35.8999 318.7H523.9C537.2 318.7 547.9 308 547.9 294.7V30.7002C547.9 17.4002 537.1 6.7002 523.9 6.7002Z"
          stroke="#493B3B"
          strokeWidth="6"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          id="XMLID_26_"
          d="M279.9 262.2C321.874 262.2 355.9 228.174 355.9 186.2C355.9 144.227 321.874 110.2 279.9 110.2C237.926 110.2 203.9 144.227 203.9 186.2C203.9 228.174 237.926 262.2 279.9 262.2Z"
          stroke="#493B3B"
          strokeWidth="3"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          id="XMLID_86_"
          d="M279.9 277.2C330.158 277.2 370.9 236.458 370.9 186.2C370.9 135.942 330.158 95.2002 279.9 95.2002C229.642 95.2002 188.9 135.942 188.9 186.2C188.9 236.458 229.642 277.2 279.9 277.2Z"
          stroke="#493B3B"
          strokeWidth="8"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          id="XMLID_114_"
          d="M493.4 78.4001H407.7C401.2 78.4001 395.9 73.1001 395.9 66.6001V32.4001C395.9 25.9001 401.2 20.6001 407.7 20.6001H493.4C499.9 20.6001 505.2 25.9001 505.2 32.4001V66.6001C505.2 73.1001 499.9 78.4001 493.4 78.4001Z"
          fill="#443636"
        />
        <path
          id="XMLID_151_"
          d="M493.4 78.4001H407.7C401.2 78.4001 395.9 73.1001 395.9 66.6001V32.4001C395.9 25.9001 401.2 20.6001 407.7 20.6001H493.4C499.9 20.6001 505.2 25.9001 505.2 32.4001V66.6001C505.2 73.1001 499.9 78.4001 493.4 78.4001Z"
          stroke="#493B3B"
          strokeWidth="4"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          id="XMLID_149_"
          d="M485.9 72.4001H415.2C409.7 72.4001 405.2 67.9001 405.2 62.4001V36.6001C405.2 31.1001 409.7 26.6001 415.2 26.6001H485.9C491.4 26.6001 495.9 31.1001 495.9 36.6001V62.4001C495.9 68.0001 491.4 72.4001 485.9 72.4001Z"
          fill="#845B5B"
        />
        <path
          id="XMLID_395_"
          opacity="0.38"
          d="M468.6 72.4001L495.8 35.2001C495.1 30.4001 491 26.6001 485.9 26.6001H482.7L449.3 72.4001H468.6Z"
          fill="white"
        />
        <path
          id="XMLID_394_"
          opacity="0.38"
          d="M442 72.4001L475.4 26.6001H469.5L436.1 72.4001H442Z"
          fill="white"
        />
      </g>
    </svg>
  );
}

export default Camera;
