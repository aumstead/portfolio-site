import styles from './Explosion.module.scss'
import { useEffect, useRef } from 'react'

function Explosion({ mouseEnteredStapler }) {
  // gsap timeline
  const tl = useRef(null)
  // ref to know if it's the initial render
  const firstUpdate = useRef(true);

  useEffect(() => {
    tl.current = gsap.timeline()

    tl.current.pause()

    tl.current.set("#item1", {opacity: 1}, "<")
      .set("#item2", {opacity: 1}, "<")
      .set("#item3", {opacity: 1}, "<")
      .set("#item4", {opacity: 1}, "<")
      .set("#item5", {opacity: 1}, "<")
      .set("#item6", {opacity: 1}, "<")
      .set("#item7", {opacity: 1}, "<")
      .set("#item8", {opacity: 1}, "<")
      .set("#item9", {opacity: 1}, "<")
      .set("#item10", {opacity: 1}, "<")
      .set("#item11", {opacity: 1}, "<")
      .set("#item12", {opacity: 1}, "<")

    tl.current.to("#item1", {ease: "power2.out", duration: 3, rotate: 45, motionPath: {path: "#path1", align: "self"}}, "<") 
      .to("#item2", {ease: "power2.out", duration: 3, rotate: 90, motionPath: {path: "#path2", align: "self"}}, "<") 
      .to("#item3", {ease: "power2.out", duration: 3, rotate: 180, motionPath: {path: "#path3", align: "self"}}, "<") 
      .to("#item4", {ease: "power2.out", duration: 3, rotate: 360, motionPath: {path: "#path4", align: "self"}}, "<") 
      .to("#item5", {ease: "power2.out", duration: 3, rotate: 20, motionPath: {path: "#path5", align: "self"}}, "<") 
      .to("#item6", {ease: "power2.out", duration: 3, rotate: 44, motionPath: {path: "#path6", align: "self"}}, "<") 
      .to("#item7", {ease: "power2.out", duration: 3, rotate: 330, motionPath: {path: "#path7", align: "self"}}, "<") 
      .to("#item8", {ease: "power2.out", duration: 3, rotate: 330, motionPath: {path: "#path8", align: "self"}}, "<") 
      .to("#item9", {ease: "power2.out", duration: 3, rotate: 177, motionPath: {path: "#path9", align: "self"}}, "<") 
      .to("#item10", {ease: "power2.out", duration: 3, rotate: 390, motionPath: {path: "#path10", align: "self"}}, "<") 
      .to("#item11", {ease: "power2.out", duration: 3, rotate: 190, motionPath: {path: "#path11", align: "self"}}, "<") 
      .to("#item12", {ease: "power2.out", duration: 3, rotate: 190, motionPath: {path: "#path12", align: "self"}}, "<") 

    tl.current.to("#item1", {duration: 1, opacity: 0}, "<1")
      .to("#item2", {duration: 1, opacity: 0}, "<")
      .to("#item3", {duration: 1, opacity: 0}, "<")
      .to("#item4", {duration: 1, opacity: 0}, "<")
      .to("#item5", {duration: 1, opacity: 0}, "<")
      .to("#item6", {duration: 1, opacity: 0}, "<")
      .to("#item7", {duration: 1, opacity: 0}, "<")
      .to("#item8", {duration: 1, opacity: 0}, "<")
      .to("#item9", {duration: 1, opacity: 0}, "<")
      .to("#item10", {duration: 1, opacity: 0}, "<")
      .to("#item11", {duration: 1, opacity: 0}, "<")
      .to("#item12", {duration: 1, opacity: 0}, "<")
  }, [])

  useEffect(() => {
    if (firstUpdate.current) {
      firstUpdate.current = false;
      return
    }

    tl.current.restart()
  }, [mouseEnteredStapler])

  return (
    <svg
      className={styles.explosion}
      xmlns="http://www.w3.org/2000/svg"
      width="4902"
      height="3001"
      fill="none"
      viewBox="0 0 4902 3001"
    >
      <g id="explosion">
        <path id="Rectangle 5" fill="transparent" d="M1 1H4901V3001H1z"></path>
        <g id="item9" opacity={0}>
          <path
            id="XMLID 202"
            fill="#CB0000"
            stroke="#CB0000"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeMiterlimit="10"
            strokeWidth="8"
            d="M2618.46 1310.99l-351.8 244.2c-4.9 3.3-2.6 11 3.3 11h353.9c2.2 0 4-1.8 4-4v-246.2c0-4.8-5.4-7.6-9.4-5zm-204.1 205.4l163.6-118.3v118.3h-163.6z"
          ></path>
          <g id="XMLID 28">
            <path
              id="XMLID 155"
              fill="#FF9E03"
              d="M2607.46 1298.99l-351.8 244.2c-4.9 3.3-2.6 11 3.3 11h353.9c2.2 0 4-1.8 4-4v-246.2c0-4.8-5.4-7.6-9.4-5zm-204.1 205.4l163.6-118.3v118.3h-163.6z"
            ></path>
            <path
              id="XMLID 32"
              stroke="#340600"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeMiterlimit="10"
              strokeWidth="8"
              d="M2607.46 1298.99l-351.8 244.2c-4.9 3.3-2.6 11 3.3 11h353.9c2.2 0 4-1.8 4-4v-246.2c0-4.8-5.4-7.6-9.4-5zm-204.1 205.4l163.6-118.3v118.3h-163.6z"
            ></path>
            <g id="XMLID 6">
              <g id="XMLID 150">
                <path
                  id="XMLID 154"
                  stroke="#340600"
                  strokeLinejoin="round"
                  strokeMiterlimit="10"
                  strokeWidth="3"
                  d="M2595.76 1553.99v-16.5"
                ></path>
              </g>
              <g
                id="XMLID 145"
                stroke="#340600"
                strokeLinejoin="round"
                strokeMiterlimit="10"
                strokeWidth="3"
              >
                <path id="XMLID 149" d="M2550.76 1553.99v-16.5"></path>
                <path id="XMLID 148" d="M2562.56 1553.99v-8.6"></path>
                <path id="XMLID 147" d="M2584.26 1553.99v-8.6"></path>
                <path id="XMLID 146" d="M2573.36 1553.99v-12"></path>
              </g>
              <g
                id="XMLID 140"
                stroke="#340600"
                strokeLinejoin="round"
                strokeMiterlimit="10"
                strokeWidth="3"
              >
                <path id="XMLID 144" d="M2505.76 1553.99v-16.5"></path>
                <path id="XMLID 143" d="M2517.56 1553.99v-8.6"></path>
                <path id="XMLID 142" d="M2539.26 1553.99v-8.6"></path>
                <path id="XMLID 141" d="M2528.36 1553.99v-12"></path>
              </g>
              <g
                id="XMLID 135"
                stroke="#340600"
                strokeLinejoin="round"
                strokeMiterlimit="10"
                strokeWidth="3"
              >
                <path id="XMLID 139" d="M2460.76 1553.99v-16.5"></path>
                <path id="XMLID 138" d="M2472.56 1553.99v-8.6"></path>
                <path id="XMLID 137" d="M2494.26 1553.99v-8.6"></path>
                <path id="XMLID 136" d="M2483.36 1553.99v-12"></path>
              </g>
              <g
                id="XMLID 130"
                stroke="#340600"
                strokeLinejoin="round"
                strokeMiterlimit="10"
                strokeWidth="3"
              >
                <path id="XMLID 134" d="M2415.76 1553.99v-16.5"></path>
                <path id="XMLID 133" d="M2427.56 1553.99v-8.6"></path>
                <path id="XMLID 132" d="M2449.26 1553.99v-8.6"></path>
                <path id="XMLID 131" d="M2438.36 1553.99v-12"></path>
              </g>
              <g
                id="XMLID 124"
                stroke="#340600"
                strokeLinejoin="round"
                strokeMiterlimit="10"
                strokeWidth="3"
              >
                <path id="XMLID 129" d="M2370.76 1553.99v-16.5"></path>
                <path id="XMLID 128" d="M2382.56 1553.99v-8.6"></path>
                <path id="XMLID 126" d="M2404.26 1553.99v-8.6"></path>
                <path id="XMLID 125" d="M2393.36 1553.99v-12"></path>
              </g>
              <g
                id="XMLID 99"
                stroke="#340600"
                strokeLinejoin="round"
                strokeMiterlimit="10"
                strokeWidth="3"
              >
                <path id="XMLID 123" d="M2325.76 1553.99v-16.5"></path>
                <path id="XMLID 117" d="M2337.56 1553.99v-8.6"></path>
                <path id="XMLID 111" d="M2359.26 1553.99v-8.6"></path>
                <path id="XMLID 105" d="M2348.36 1553.99v-12"></path>
              </g>
              <g
                id="XMLID 74"
                stroke="#340600"
                strokeLinejoin="round"
                strokeMiterlimit="10"
                strokeWidth="3"
              >
                <path id="XMLID 98" d="M2280.76 1553.99v-16.5"></path>
                <path id="XMLID 92" d="M2292.56 1553.99v-8.6"></path>
                <path id="XMLID 86" d="M2314.26 1553.99v-8.6"></path>
                <path id="XMLID 80" d="M2303.36 1553.99v-12"></path>
              </g>
            </g>
            <g
              id="XMLID 5"
              stroke="#340600"
              strokeLinejoin="round"
              strokeMiterlimit="10"
              strokeWidth="3"
            >
              <g id="XMLID 177">
                <path id="XMLID 181" d="M2615.96 1353.79h-16.6"></path>
                <path id="XMLID 180" d="M2615.96 1341.89h-8.7"></path>
                <path id="XMLID 179" d="M2615.96 1320.29h-8.7"></path>
                <path id="XMLID 178" d="M2615.96 1331.09h-12.1"></path>
              </g>
              <g id="XMLID 172">
                <path id="XMLID 176" d="M2615.96 1398.79h-16.6"></path>
                <path id="XMLID 175" d="M2615.96 1386.89h-8.7"></path>
                <path id="XMLID 174" d="M2615.96 1365.29h-8.7"></path>
                <path id="XMLID 173" d="M2615.96 1376.09h-12.1"></path>
              </g>
              <g id="XMLID 167">
                <path id="XMLID 171" d="M2615.96 1443.79h-16.6"></path>
                <path id="XMLID 170" d="M2615.96 1431.89h-8.7"></path>
                <path id="XMLID 169" d="M2615.96 1410.29h-8.7"></path>
                <path id="XMLID 168" d="M2615.96 1421.09h-12.1"></path>
              </g>
              <g id="XMLID 162">
                <path id="XMLID 166" d="M2615.96 1488.79h-16.6"></path>
                <path id="XMLID 165" d="M2615.96 1476.89h-8.7"></path>
                <path id="XMLID 164" d="M2615.96 1455.29h-8.7"></path>
                <path id="XMLID 163" d="M2615.96 1466.09h-12.1"></path>
              </g>
              <g id="XMLID 157">
                <path id="XMLID 161" d="M2615.96 1533.79h-16.6"></path>
                <path id="XMLID 160" d="M2615.96 1521.89h-8.7"></path>
                <path id="XMLID 159" d="M2615.96 1500.29h-8.7"></path>
                <path id="XMLID 158" d="M2615.96 1511.09h-12.1"></path>
              </g>
            </g>
          </g>
        </g>
        <g id="item8" opacity={0}>
          <path
            id="XMLID 25"
            stroke="#340600"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeMiterlimit="10"
            strokeWidth="8"
            d="M2384.6 1435.7h167.6"
          ></path>
          <path
            id="XMLID 151"
            fill="#BFBFBF"
            d="M2473.4 1456.1h-10.2c-2.4 0-4.3-1.9-4.3-4.3v-30.7c0-2.4 1.9-4.3 4.3-4.3h10.2c2.4 0 4.3 1.9 4.3 4.3v30.7c0 2.4-2 4.3-4.3 4.3z"
          ></path>
          <path
            id="XMLID 245"
            fill="#fff"
            d="M2460.7 1417.5c-1.1.8-1.9 2.1-1.9 3.6v30.7c0 1.5.8 2.8 1.9 3.6 3.2-2.9 5.6-10.3 5.6-18.9 0-8.7-2.3-16.1-5.6-19z"
          ></path>
          <path
            id="XMLID 23"
            stroke="#340600"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeMiterlimit="10"
            strokeWidth="6"
            d="M2473.4 1456.1h-10.2c-2.4 0-4.3-1.9-4.3-4.3v-30.7c0-2.4 1.9-4.3 4.3-4.3h10.2c2.4 0 4.3 1.9 4.3 4.3v30.7c0 2.4-2 4.3-4.3 4.3z"
          ></path>
          <path
            id="XMLID 9"
            fill="#fff"
            d="M2560.7 1544.5l-18.7 6.9-80.4-220.7 29.2-10.6 52.4 144 17.5 80.4z"
          ></path>
          <path
            id="XMLID 237"
            fill="#BFBFBF"
            d="M2543.2 1464.1l-52.4-144-8 2.9 51.4 141.1 17.5 80.4-10.8 4 1.1 2.9 18.7-6.9-17.5-80.4z"
          ></path>
          <path
            id="XMLID 231"
            fill="#BFBFBF"
            d="M2491.8 1319.1l-29.2 10.6 22.6 62.2c10-.2 19-7.3 21.4-17.2.7-3.1 1.4-6.1 2.1-9.1l-16.9-46.5z"
          ></path>
          <path
            id="XMLID 11"
            stroke="#340600"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeMiterlimit="10"
            strokeWidth="8"
            d="M2571.2 1612.2l10.6 29.2"
          ></path>
          <path
            id="XMLID 68"
            fill="#BFBFBF"
            d="M2564.74 1574.98l-12.5 4.55 12.11 33.27 12.5-4.55-12.11-33.27z"
          ></path>
          <path
            id="XMLID 14"
            stroke="#340600"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeMiterlimit="10"
            strokeWidth="8"
            d="M2560.7 1544.5l-18.7 6.9-80.4-220.7 29.2-10.6 52.4 144 17.5 80.4z"
          ></path>
          <path
            id="XMLID 12"
            stroke="#340600"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeMiterlimit="10"
            strokeWidth="8"
            d="M2564.74 1574.98l-12.5 4.55 12.11 33.27 12.5-4.55-12.11-33.27z"
          ></path>
          <path
            id="XMLID 62"
            fill="#fff"
            d="M2557.2 1580.7c10.99 0 19.9-8.91 19.9-19.9 0-10.99-8.91-19.9-19.9-19.9-10.99 0-19.9 8.91-19.9 19.9 0 10.99 8.91 19.9 19.9 19.9z"
          ></path>
          <path
            id="XMLID 233"
            fill="#BFBFBF"
            d="M2562.3 1552.6c-10.3 3.8-15.7 15.2-11.9 25.6.2.6.4 1.1.7 1.6 4.1 1.3 8.6 1.3 12.9-.2 10.3-3.8 15.7-15.2 11.9-25.6-.2-.6-.4-1.1-.7-1.6-4-1.4-8.5-1.4-12.9.2z"
          ></path>
          <path
            id="XMLID 13"
            stroke="#340600"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeMiterlimit="10"
            strokeWidth="8"
            d="M2557.2 1580.7c10.99 0 19.9-8.91 19.9-19.9 0-10.99-8.91-19.9-19.9-19.9-10.99 0-19.9 8.91-19.9 19.9 0 10.99 8.91 19.9 19.9 19.9z"
          ></path>
          <path
            id="XMLID 8"
            fill="#fff"
            d="M2376.1 1544.5l18.8 6.9 80.3-220.7-29.1-10.6-52.5 144-17.5 80.4z"
          ></path>
          <path
            id="XMLID 228"
            fill="#fff"
            d="M2376.1 1544.5l18.8 6.9 80.3-220.7-29.1-10.6-52.5 144-17.5 80.4z"
          ></path>
          <path
            id="XMLID 232"
            fill="#BFBFBF"
            d="M2446.1 1320.1l-1.1 2.9 21.2 7.7-79.3 217.8 8 2.9 80.3-220.7-29.1-10.6z"
          ></path>
          <path
            id="XMLID 230"
            fill="#BFBFBF"
            d="M2448.1 1319.1l-16.9 46.5c.6 3 1.3 6 2.1 9.1 2.4 9.8 11.4 16.9 21.4 17.1l22.6-62.2-29.2-10.5z"
          ></path>
          <path
            id="XMLID 18"
            stroke="#340600"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeMiterlimit="10"
            strokeWidth="8"
            d="M2376.1 1544.5l18.8 6.9 80.3-220.7-29.1-10.6-52.5 144-17.5 80.4z"
          ></path>
          <path
            id="XMLID 153"
            fill="#BFBFBF"
            d="M2372.06 1575l-12.1 33.27 12.49 4.55 12.11-33.27-12.5-4.55z"
          ></path>
          <path
            id="XMLID 16"
            stroke="#340600"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeMiterlimit="10"
            strokeWidth="8"
            d="M2372.06 1575l-12.1 33.27 12.49 4.55 12.11-33.27-12.5-4.55z"
          ></path>
          <path
            id="XMLID 15"
            stroke="#340600"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeMiterlimit="10"
            strokeWidth="8"
            d="M2365.6 1612.2l-10.6 29.2"
          ></path>
          <path
            id="XMLID 152"
            fill="#fff"
            d="M2399.56 1561.47c.36-10.99-8.24-20.19-19.23-20.55-10.98-.37-20.18 8.24-20.55 19.22-.36 10.99 8.24 20.19 19.23 20.55 10.98.37 20.18-8.24 20.55-19.22z"
          ></path>
          <path
            id="XMLID 227"
            fill="#fff"
            d="M2399.56 1561.47c.36-10.99-8.24-20.19-19.23-20.55-10.98-.37-20.18 8.24-20.55 19.22-.36 10.99 8.24 20.19 19.23 20.55 10.98.37 20.18-8.24 20.55-19.22z"
          ></path>
          <path
            id="XMLID 235"
            fill="#BFBFBF"
            d="M2398.4 1567.6c1.9-5.2 1.5-10.6-.7-15.2-10.2-3.3-21.2 2-24.8 12.1-1.9 5.2-1.5 10.6.7 15.2 10.1 3.3 21.1-2 24.8-12.1z"
          ></path>
          <path
            id="XMLID 17"
            stroke="#340600"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeMiterlimit="10"
            strokeWidth="8"
            d="M2399.56 1561.47c.36-10.99-8.24-20.19-19.23-20.55-10.98-.37-20.18 8.24-20.55 19.22-.36 10.99 8.24 20.19 19.23 20.55 10.98.37 20.18-8.24 20.55-19.22z"
          ></path>
          <path
            id="XMLID 183"
            fill="#BFBFBF"
            d="M2483.9 1381.9h-31c-5 0-9.8-3.8-11-8.8-5.5-23.2-9.3-46.7-8.9-69.9.2-5.9 5.9-11.1 11.8-11.1h47.4c5.9 0 11.6 5.2 11.8 11.1.4 23.2-3.4 46.7-8.9 69.9-1.4 5-6.2 8.8-11.2 8.8z"
          ></path>
          <path
            id="XMLID 238"
            fill="#fff"
            d="M2441.5 1373.1c-5.5-23.2-9.3-46.7-8.9-69.9.2-5.9 5.9-11.1 11.8-11.1h33.8c2.7 12.4 2.7 25.8-.7 39.1-5.1 20.2-11.7 47.8-32.3 47.8-1.8-1.5-3.1-3.6-3.7-5.9z"
          ></path>
          <path
            id="XMLID 19"
            stroke="#340600"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeMiterlimit="10"
            strokeWidth="8"
            d="M2483.9 1381.9h-31c-5 0-9.8-3.8-11-8.8-5.5-23.2-9.3-46.7-8.9-69.9.2-5.9 5.9-11.1 11.8-11.1h47.4c5.9 0 11.6 5.2 11.8 11.1.4 23.2-3.4 46.7-8.9 69.9-1.4 5-6.2 8.8-11.2 8.8z"
          ></path>
          <path
            id="XMLID 184"
            fill="#BFBFBF"
            d="M2485.7 1198h-35.4v78.6h35.4V1198z"
          ></path>
          <path
            id="XMLID 239"
            fill="#BFBFBF"
            d="M2460.3 1198h-10v78.6h10V1198z"
          ></path>
          <path
            id="XMLID 240"
            fill="#BFBFBF"
            d="M2485.8 1198h-12.5v78.6h12.5V1198z"
          ></path>
          <path
            id="XMLID 21"
            stroke="#340600"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeMiterlimit="10"
            strokeWidth="8"
            d="M2485.7 1198h-35.4v78.6h35.4V1198z"
          ></path>
          <path
            id="XMLID 199"
            fill="#606060"
            d="M2477.5 1276.6h-18.8v15.5h18.8v-15.5z"
          ></path>
          <path
            id="XMLID 22"
            stroke="#340600"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeMiterlimit="10"
            strokeWidth="8"
            d="M2477.5 1276.6h-18.8v15.5h18.8v-15.5z"
          ></path>
          <path
            id="XMLID 24"
            stroke="#340600"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeMiterlimit="10"
            strokeWidth="6"
            d="M2461.6 1212v45.4"
          ></path>
          <path
            id="XMLID 241"
            fill="#606060"
            d="M2469.9 1347.2c5.8 0 10.5-4.7 10.5-10.5s-4.7-10.5-10.5-10.5-10.5 4.7-10.5 10.5 4.7 10.5 10.5 10.5z"
          ></path>
          <path
            id="XMLID 185"
            stroke="#340600"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeMiterlimit="10"
            strokeWidth="8"
            d="M2469.9 1347.2c5.8 0 10.5-4.7 10.5-10.5s-4.7-10.5-10.5-10.5-10.5 4.7-10.5 10.5 4.7 10.5 10.5 10.5z"
          ></path>
        </g>
        <path
          id="path1"
          stroke="transparent"
          d="M2468 1372C386.519-310.983-41.8 136.992 4.226 571.353"
        ></path>
        <g id="item7" opacity={0}>
          <path
            id="XMLID 22_2"
            fill="#F42222"
            d="M2501.2 1359.1c8.4-7.9 17.8-20 19.5-31.1h-95c1.7 11.1 11.1 23.1 19.5 31.1 2.8 2.6-3.9 60-9.2 62.8-18.8 10.1-34 27.9-42 49.9h158.4c-8-22-23.2-39.8-42-49.9-5.3-2.8-12-60.2-9.2-62.8z"
          ></path>
          <path
            id="XMLID 4"
            fill="#F42222"
            d="M2501.2 1359.1c8.4-7.9 17.8-20 19.5-31.1h-95c1.7 11.1 11.1 23.1 19.5 31.1 2.8 2.6-3.9 60-9.2 62.8-18.8 10.1-34 27.9-42 49.9h158.4c-8-22-23.2-39.8-42-49.9-5.3-2.8-12-60.2-9.2-62.8z"
          ></path>
          <path
            id="XMLID 11_2"
            fill="#F42222"
            d="M2510.4 1421.9c-5.3-2.9-12-60.2-9.2-62.8 8.4-7.9 17.8-20 19.5-31.1h-7.7c-1.7 11.1-11.1 23.1-19.5 31.1-2.8 2.6 3.9 60 9.2 62.8 18.8 10.1 34 27.9 42 49.9h7.7c-8.1-22-23.2-39.7-42-49.9z"
          ></path>
          <path
            id="XMLID 32_2"
            fill="#FF7676"
            d="M2463 1328h-14.3s-4.5 16.7 11.5 27.2l-5.3 69s-25.2 15.4-27.8 47.7h18.8s-.4-32.3 16.6-47.1l3-69.5c-.1-.1-7.2-13-2.5-27.3z"
          ></path>
          <path
            id="XMLID 21_2"
            fill="#E8E8E8"
            d="M2486.2 1471.9h-26l13 95.1 13-95.1z"
          ></path>
          <g
            id="XMLID 5_2"
            stroke="#102D3B"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeMiterlimit="10"
            strokeWidth="8"
          >
            <path
              id="XMLID 14_2"
              d="M2501.2 1359.1c8.4-7.9 17.8-20 19.5-31.1h-95c1.7 11.1 11.1 23.1 19.5 31.1 2.8 2.6-3.9 60-9.2 62.8-18.8 10.1-34 27.9-42 49.9h158.4c-8-22-23.2-39.8-42-49.9-5.3-2.8-12-60.2-9.2-62.8z"
            ></path>
            <path
              id="XMLID 19_2"
              d="M2486.2 1471.9h-26l13 95.1 13-95.1z"
            ></path>
          </g>
        </g>
        <g id="item11" opacity={0}>
          <path
            id="XMLID 22_3"
            fill="#F42222"
            d="M2501.2 1367.1c8.4-7.9 17.8-20 19.5-31.1h-95c1.7 11.1 11.1 23.1 19.5 31.1 2.8 2.6-3.9 60-9.2 62.8-18.8 10.1-34 27.9-42 49.9h158.4c-8-22-23.2-39.8-42-49.9-5.3-2.8-12-60.2-9.2-62.8z"
          ></path>
          <path
            id="XMLID 4_2"
            fill="#114EFF"
            d="M2501.2 1367.1c8.4-7.9 17.8-20 19.5-31.1h-95c1.7 11.1 11.1 23.1 19.5 31.1 2.8 2.6-3.9 60-9.2 62.8-18.8 10.1-34 27.9-42 49.9h158.4c-8-22-23.2-39.8-42-49.9-5.3-2.8-12-60.2-9.2-62.8z"
          ></path>
          <path
            id="XMLID 11_3"
            fill="#114EFF"
            d="M2510.4 1429.9c-5.3-2.9-12-60.2-9.2-62.8 8.4-7.9 17.8-20 19.5-31.1h-7.7c-1.7 11.1-11.1 23.1-19.5 31.1-2.8 2.6 3.9 60 9.2 62.8 18.8 10.1 34 27.9 42 49.9h7.7c-8.1-22-23.2-39.7-42-49.9z"
          ></path>
          <path
            id="XMLID 32_3"
            fill="#114EFF"
            d="M2463 1336h-14.3s-4.5 16.7 11.5 27.2l-5.3 69s-25.2 15.4-27.8 47.7h18.8s-.4-32.3 16.6-47.1l3-69.5c-.1-.1-7.2-13-2.5-27.3z"
          ></path>
          <path
            id="XMLID 21_3"
            fill="#E8E8E8"
            d="M2486.2 1479.9h-26l13 95.1 13-95.1z"
          ></path>
          <g
            id="XMLID 5_3"
            stroke="#102D3B"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeMiterlimit="10"
            strokeWidth="8"
          >
            <path
              id="XMLID 14_3"
              d="M2501.2 1367.1c8.4-7.9 17.8-20 19.5-31.1h-95c1.7 11.1 11.1 23.1 19.5 31.1 2.8 2.6-3.9 60-9.2 62.8-18.8 10.1-34 27.9-42 49.9h158.4c-8-22-23.2-39.8-42-49.9-5.3-2.8-12-60.2-9.2-62.8z"
            ></path>
            <path
              id="XMLID 19_3"
              d="M2486.2 1479.9h-26l13 95.1 13-95.1z"
            ></path>
          </g>
        </g>
        <g id="item6" opacity={0}>
          <path
            id="XMLID 22_4"
            fill="#F42222"
            d="M2491.2 1351.1c8.4-7.9 17.8-20 19.5-31.1h-95c1.7 11.1 11.1 23.1 19.5 31.1 2.8 2.6-3.9 60-9.2 62.8-18.8 10.1-34 27.9-42 49.9h158.4c-8-22-23.2-39.8-42-49.9-5.3-2.8-12-60.2-9.2-62.8z"
          ></path>
          <path
            id="XMLID 4_3"
            fill="#114EFF"
            d="M2491.2 1351.1c8.4-7.9 17.8-20 19.5-31.1h-95c1.7 11.1 11.1 23.1 19.5 31.1 2.8 2.6-3.9 60-9.2 62.8-18.8 10.1-34 27.9-42 49.9h158.4c-8-22-23.2-39.8-42-49.9-5.3-2.8-12-60.2-9.2-62.8z"
          ></path>
          <path
            id="XMLID 11_4"
            fill="#114EFF"
            d="M2500.4 1413.9c-5.3-2.9-12-60.2-9.2-62.8 8.4-7.9 17.8-20 19.5-31.1h-7.7c-1.7 11.1-11.1 23.1-19.5 31.1-2.8 2.6 3.9 60 9.2 62.8 18.8 10.1 34 27.9 42 49.9h7.7c-8.1-22-23.2-39.7-42-49.9z"
          ></path>
          <path
            id="XMLID 32_4"
            fill="#114EFF"
            d="M2453 1320h-14.3s-4.5 16.7 11.5 27.2l-5.3 69s-25.2 15.4-27.8 47.7h18.8s-.4-32.3 16.6-47.1l3-69.5c-.1-.1-7.2-13-2.5-27.3z"
          ></path>
          <path
            id="XMLID 21_4"
            fill="#E8E8E8"
            d="M2476.2 1463.9h-26l13 95.1 13-95.1z"
          ></path>
          <g
            id="XMLID 5_4"
            stroke="#102D3B"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeMiterlimit="10"
            strokeWidth="8"
          >
            <path
              id="XMLID 14_4"
              d="M2491.2 1351.1c8.4-7.9 17.8-20 19.5-31.1h-95c1.7 11.1 11.1 23.1 19.5 31.1 2.8 2.6-3.9 60-9.2 62.8-18.8 10.1-34 27.9-42 49.9h158.4c-8-22-23.2-39.8-42-49.9-5.3-2.8-12-60.2-9.2-62.8z"
            ></path>
            <path
              id="XMLID 19_4"
              d="M2476.2 1463.9h-26l13 95.1 13-95.1z"
            ></path>
          </g>
        </g>
        <g id="item12" opacity={0}>
          <path
            id="XMLID 22_5"
            fill="#F42222"
            d="M2502.2 1351.1c8.4-7.9 17.8-20 19.5-31.1h-95c1.7 11.1 11.1 23.1 19.5 31.1 2.8 2.6-3.9 60-9.2 62.8-18.8 10.1-34 27.9-42 49.9h158.4c-8-22-23.2-39.8-42-49.9-5.3-2.8-12-60.2-9.2-62.8z"
          ></path>
          <path
            id="XMLID 4_4"
            fill="#32BF6B"
            d="M2502.2 1351.1c8.4-7.9 17.8-20 19.5-31.1h-95c1.7 11.1 11.1 23.1 19.5 31.1 2.8 2.6-3.9 60-9.2 62.8-18.8 10.1-34 27.9-42 49.9h158.4c-8-22-23.2-39.8-42-49.9-5.3-2.8-12-60.2-9.2-62.8z"
          ></path>
          <path
            id="XMLID 11_5"
            fill="#114EFF"
            d="M2511.4 1413.9c-5.3-2.9-12-60.2-9.2-62.8 8.4-7.9 17.8-20 19.5-31.1h-7.7c-1.7 11.1-11.1 23.1-19.5 31.1-2.8 2.6 3.9 60 9.2 62.8 18.8 10.1 34 27.9 42 49.9h7.7c-8.1-22-23.2-39.7-42-49.9z"
          ></path>
          <path
            id="XMLID 32_5"
            fill="#32BF6B"
            d="M2464 1320h-14.3s-4.5 16.7 11.5 27.2l-5.3 69s-25.2 15.4-27.8 47.7h18.8s-.4-32.3 16.6-47.1l3-69.5c-.1-.1-7.2-13-2.5-27.3z"
          ></path>
          <path
            id="XMLID 21_5"
            fill="#E8E8E8"
            d="M2487.2 1463.9h-26l13 95.1 13-95.1z"
          ></path>
          <g
            id="XMLID 5_5"
            stroke="#102D3B"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeMiterlimit="10"
            strokeWidth="8"
          >
            <path
              id="XMLID 14_5"
              d="M2502.2 1351.1c8.4-7.9 17.8-20 19.5-31.1h-95c1.7 11.1 11.1 23.1 19.5 31.1 2.8 2.6-3.9 60-9.2 62.8-18.8 10.1-34 27.9-42 49.9h158.4c-8-22-23.2-39.8-42-49.9-5.3-2.8-12-60.2-9.2-62.8z"
            ></path>
            <path
              id="XMLID 19_5"
              d="M2487.2 1463.9h-26l13 95.1 13-95.1z"
            ></path>
          </g>
        </g>
        <g id="item5" opacity={0}>
          <path
            id="XMLID 129_2"
            fill="#F9B03A"
            d="M2541.9 1313.1c-.6-6.6-3.3-12.9-7.7-18.1l-21.5-25.5c-4.5-5.4-7-12-7-18.8v-14.4h-78.8v14.4c0 6.8-2.5 13.4-7 18.8l-21.5 25.5c-4.4 5.2-7.1 11.5-7.7 18.1l-22.7 254.1h196.6l-22.7-254.1z"
          ></path>
          <path
            id="XMLID 119"
            fill="#F9B03A"
            d="M2565 1567.3l-22.7-254.1c-.6-6.6-3.3-12.9-7.7-18.1l-21.5-25.6c-4.5-5.4-7-12-7-18.8v-14.4h-33.8l-.1 15.3c-.1 8.1 2.8 16 8.1 22.4l25.2 30.1c5.1 6.1 8.2 13.5 8.8 21.1l13.5 155.3c2.8 32.3-13.1 57.1-44.3 65.6l-78.4 7.9 152.2 32.7-5.1-19.4h12.8z"
            opacity="0.4"
          ></path>
          <path
            id="XMLID 110"
            fill="#F9B03A"
            d="M2418.6 1325.2c.6-7.7 3.7-15 8.8-21.1l25.2-30.1c5.3-6.4 8.2-14.2 8.1-22.4l-.1-15.3h-33.8v14.4c0 6.8-2.5 13.4-7 18.8l-21.5 25.5c-4.4 5.2-7.1 11.5-7.7 18.1l-22.7 254.1 18 6.2 32.7-248.2z"
            opacity="0.68"
          ></path>
          <path
            id="XMLID 130_2"
            fill="#EF3E1B"
            d="M2556.9 1481.3h-181.3l10.9-121.9h159.6l10.8 121.9z"
          ></path>
          <path
            id="XMLID 111_2"
            fill="#EF3E1B"
            d="M2415.4 1359.4h-28.9l-2.2 24.8-8.7 97.1h22.5l17.3-121.9z"
            opacity="0.69"
          ></path>
          <path
            id="XMLID 107"
            fill="#C6321A"
            d="M2517.5 1359.4h29l2.2 24.8 8.7 97.1h-28.7l-11.2-121.9z"
            opacity="0.48"
          ></path>
          <path
            id="XMLID 13_2"
            stroke="#030037"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeMiterlimit="10"
            strokeWidth="8"
            d="M2541.9 1313.1c-.6-6.6-3.3-12.9-7.7-18.1l-21.5-25.5c-4.5-5.4-7-12-7-18.8v-14.4h-78.8v14.4c0 6.8-2.5 13.4-7 18.8l-21.5 25.5c-4.4 5.2-7.1 11.5-7.7 18.1l-22.7 254.1h196.6l-22.7-254.1z"
          ></path>
          <path
            id="XMLID 132_2"
            fill="#FF524E"
            d="M2570.6 1611.7h-208.7l-3.9-55.6h216.6l-4 55.6z"
          ></path>
          <path
            id="XMLID 109"
            fill="#FF524E"
            d="M2358 1556.1l3.9 55.6h19l-3.9-55.6h-19z"
            opacity="0.8"
          ></path>
          <path
            id="XMLID 116"
            fill="#FF524E"
            d="M2494.2 1599.3h-132.3l-2.4-43.2h-1.5l4 55.6h208.7l4-55.6H2540c-1.5 24.2-21.5 43.2-45.8 43.2z"
            opacity="0.5"
          ></path>
          <path
            id="XMLID 7"
            stroke="#030037"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeMiterlimit="10"
            strokeWidth="8"
            d="M2570.6 1611.7h-208.7l-3.9-55.6h216.6l-4 55.6z"
          ></path>
          <path
            id="XMLID 133_2"
            fill="#FF524E"
            d="M2520.6 1236.2h-108.7l3.3-27.5c1.5-12.9 11.7-22.7 23.1-22.7h55.9c11.5 0 21.6 9.8 23.1 22.7l3.3 27.5z"
          ></path>
          <path
            id="XMLID 113"
            fill="#FF524E"
            d="M2517.4 1208.7c-1.5-12.9-11.7-22.7-23.1-22.7h-55.9c-11.5 0-21.6 9.8-23.1 22.7l-3.3 27.5h.8l2.4-20.5c1.5-12.9 11.7-22.7 23.1-22.7h55.9c11.5 0 21.6 9.8 23.1 22.7l2.4 20.5h.8l-3.1-27.5z"
          ></path>
          <path
            id="XMLID 120"
            fill="#FF524E"
            d="M2517.4 1208.7c-1.5-12.9-11.7-22.7-23.1-22.7h-16.4c11.5 0 21.6 9.8 23.1 22.7l3.3 27.5h16.4l-3.3-27.5z"
            opacity="0.43"
          ></path>
          <path
            id="XMLID 114"
            fill="#FF524E"
            d="M2454.2 1186h-15.9c-11.5 0-21.6 9.8-23.1 22.7l-3.3 27.5h15.9l3.3-27.5c1.5-12.9 11.6-22.7 23.1-22.7z"
          ></path>
          <path
            id="XMLID 4_5"
            stroke="#030037"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeMiterlimit="10"
            strokeWidth="8"
            d="M2520.6 1236.2h-108.7l3.3-27.5c1.5-12.9 11.7-22.7 23.1-22.7h55.9c11.5 0 21.6 9.8 23.1 22.7l3.3 27.5z"
          ></path>
          <g
            id="XMLID 5_6"
            stroke="#030037"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeMiterlimit="10"
            strokeWidth="8"
          >
            <path id="XMLID 6_2" d="M2435.4 1213v23.2"></path>
            <path id="XMLID 8_2" d="M2456 1213v23.2"></path>
            <path id="XMLID 14_6" d="M2476.6 1213v23.2"></path>
            <path id="XMLID 15_2" d="M2497.2 1213v23.2"></path>
          </g>
          <g
            id="XMLID 16_2"
            stroke="#030037"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeMiterlimit="10"
            strokeWidth="8"
          >
            <path id="XMLID 12_2" d="M2386 1556.1l2.6 55.6"></path>
            <path id="Vector" d="M2412.8 1556.1l1.7 55.6"></path>
            <path id="Vector_2" d="M2439.5 1556.1l.9 55.6"></path>
            <path id="Vector_3" d="M2466.3 1556.1v55.6"></path>
            <path id="Vector_4" d="M2493 1556.1l-.8 55.6"></path>
            <path id="Vector_5" d="M2519.8 1556.1l-1.7 55.6"></path>
            <path id="XMLID 1" d="M2546.5 1556.1l-2.5 55.6"></path>
          </g>
          <g id="XMLID 29">
            <g
              id="Group"
              stroke="#030037"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="4"
            >
              <path id="Vector_6" d="M2392.3 1305.5h2"></path>
              <path
                id="Vector_7"
                strokeDasharray="3.84 3.84"
                d="M2403.9 1305.5h129.5"
              ></path>
              <path id="Vector_8" d="M2538.2 1305.5h2"></path>
            </g>
          </g>
          <path
            id="XMLID 47"
            stroke="#030037"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeMiterlimit="10"
            strokeWidth="8"
            d="M2556.9 1481.3h-181.3l10.9-121.9h159.6l10.8 121.9z"
          ></path>
          <path
            id="XMLID 46"
            stroke="#030037"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeMiterlimit="10"
            strokeWidth="8"
            d="M2558.4 1497.6h-184.2l1.4-16.3h181.3l1.5 16.3z"
          ></path>
          <path
            id="XMLID 131_2"
            fill="#D9D9FF"
            d="M2451.1 1411.5l15.2-27.7 15.2 27.7c6.3 11.5-2 25.6-15.2 25.6s-21.5-14-15.2-25.6z"
          ></path>
          <path
            id="XMLID 28_2"
            stroke="#030037"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeMiterlimit="10"
            strokeWidth="8"
            d="M2451.1 1411.5l15.2-27.7 15.2 27.7c6.3 11.5-2 25.6-15.2 25.6s-21.5-14-15.2-25.6z"
          ></path>
          <path
            id="XMLID 31"
            stroke="#030037"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeMiterlimit="10"
            strokeWidth="8"
            d="M2437.7 1458.4h59.5"
          ></path>
        </g>
        <path
          id="item4"
          opacity={0}
          stroke="#F42222"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit="10"
          strokeWidth="8"
          d="M2439.7 1480.32l43.19-125.02c3.98-11.39 16.89-17.54 28.84-13.79 12.11 3.74 18.64 15.89 14.66 27.13l-49.88 144.51c-6.85 19.64-29.16 30.43-50.03 23.98-20.87-6.44-32.35-27.43-25.5-47.07l55.61-161.3c8.61-24.88 37.13-38.52 63.58-30.43 26.45 8.1 40.95 34.93 32.35 59.82l-49.88 144.21"
        ></path>
        <path
          id="item3"
          opacity={0}
          stroke="#114EFF"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit="10"
          strokeWidth="8"
          d="M2430.7 1489.32l43.19-125.02c3.98-11.39 16.89-17.54 28.84-13.79 12.11 3.74 18.64 15.89 14.66 27.13l-49.88 144.51c-6.85 19.64-29.16 30.43-50.03 23.98-20.87-6.44-32.35-27.43-25.5-47.07l55.61-161.3c8.61-24.88 37.13-38.52 63.58-30.43 26.45 8.1 40.95 34.93 32.35 59.82l-49.88 144.21"
        ></path>
        <g id="item2" opacity={0}>
          <g
            id="XMLID 27"
            stroke="#2B5621"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeMiterlimit="10"
            strokeWidth="8"
            opacity="0.4"
          >
            <path
              id="XMLID 26"
              d="M2531.8 1549.8c-13.7-56.7-19.8-108.3-23-154.9-.6-9.4 3.3-18.3 10.1-24.5 5.2-4.7 8.5-10.9 8.5-16.9 0-10.8-10.9-22.6-24.5-24.4-15.6-1.6-31.4-1.6-47 0-13.7 1.8-24.5 13.7-24.5 24.4 0 5.9 3.3 12.1 8.5 16.9 6.8 6.2 10.7 15.1 10.1 24.5-3.1 46.7-9.2 98.3-23 154.9"
              opacity="0.4"
            ></path>
            <path
              id="XMLID 25_2"
              fill="#2B5621"
              d="M2599.4 1441.7h-240.2l16.7 110.3h52.4v3.2c0 6.6 1.8 11.9 8.3 11.9h85.2c6.6 0 8.3-5.3 8.3-11.9v-3.2h52.4l16.9-110.3z"
              opacity="0.4"
            ></path>
          </g>
          <path
            id="XMLID 18_2"
            fill="#FFC943"
            d="M2586.2 1427.9H2346l16.7 110.3h48.9v3.2c0 6.6 5.3 11.9 11.9 11.9h85.2c6.6 0 11.9-5.3 11.9-11.9v-3.2h48.9l16.7-110.3z"
          ></path>
          <g
            id="XMLID 35"
            stroke="#351915"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeMiterlimit="10"
            strokeWidth="8"
            opacity="0.18"
          >
            <path
              id="XMLID 38"
              d="M2447.1 1427.9c-3.7 37.7-9.7 78.3-20.3 121.9"
              opacity="0.18"
            ></path>
            <path
              id="XMLID 44"
              d="M2529.2 1538.6c-9-39.4-14.3-76.3-17.6-110.7"
              opacity="0.18"
            ></path>
          </g>
          <path
            id="XMLID 33"
            stroke="#351915"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeMiterlimit="10"
            strokeWidth="8"
            d="M2510.4 1546.6h-81.7c4-4.1 6.5-8.6 8.2-12.9 1.6-4.2 5.4-7.1 9.7-7.1h46c4.3 0 8 2.8 9.7 7.1 1.6 4.4 4.1 8.9 8.1 12.9z"
            opacity="0.18"
          ></path>
          <path
            id="XMLID 31_2"
            stroke="#351915"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeMiterlimit="10"
            strokeWidth="8"
            d="M2569.4 1533.7h-41.6l1.7-9c1.1-6 6.4-10.3 12.5-10.3h13.2c6.1 0 11.3 4.3 12.5 10.3l1.7 9z"
            opacity="0.18"
          ></path>
          <path
            id="XMLID 24_2"
            stroke="#102D3B"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeMiterlimit="10"
            strokeWidth="8"
            d="M2518.6 1535.9c-13.7-56.7-19.8-108.3-23-154.9-.6-9.4 3.3-18.3 10.1-24.5 5.2-4.7 8.5-10.9 8.5-16.9 0-10.8-10.9-22.6-24.5-24.4-15.6-1.6-31.4-1.6-47 0-13.7 1.8-24.5 13.7-24.5 24.4 0 5.9 3.3 12.1 8.5 16.9 6.8 6.2 10.7 15.1 10.1 24.5-3.1 46.7-9.2 98.3-23 154.9"
          ></path>
          <path
            id="XMLID 30"
            fill="#FFC943"
            d="M2569.2 1538.1h-41.6l1.7-9c1.1-6 6.4-10.3 12.5-10.3h13.3c6.1 0 11.3 4.3 12.5 10.3l1.6 9z"
          ></path>
          <path
            id="XMLID 6_3"
            stroke="#102D3B"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeMiterlimit="10"
            strokeWidth="8"
            d="M2569.2 1538.1h-41.6l1.7-9c1.1-6 6.4-10.3 12.5-10.3h13.3c6.1 0 11.3 4.3 12.5 10.3l1.6 9z"
          ></path>
          <path
            id="XMLID 13_3"
            stroke="#102D3B"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeMiterlimit="10"
            strokeWidth="8"
            d="M2511.5 1427.9H2346l16.7 110.3h52.4v3.2c0 6.6 1.8 11.9 8.3 11.9h85.2c6.6 0 8.3-5.3 8.3-11.9v-3.2h52.4l16.9-110.3h-74.7z"
          ></path>
          <path
            id="XMLID 34"
            fill="#FFC943"
            d="M2506 1553.3h-81.7c4-4.1 6.5-8.6 8.2-12.9 1.6-4.2 5.4-7.1 9.7-7.1h46c4.3 0 8 2.8 9.7 7.1 1.6 4.3 4.1 8.8 8.1 12.9z"
          ></path>
          <path
            id="XMLID 2"
            stroke="#102D3B"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeMiterlimit="10"
            strokeWidth="8"
            d="M2506 1553.3h-81.7c4-4.1 6.5-8.6 8.2-12.9 1.6-4.2 5.4-7.1 9.7-7.1h46c4.3 0 8 2.8 9.7 7.1 1.6 4.3 4.1 8.8 8.1 12.9z"
          ></path>
          <path
            id="XMLID 28_3"
            stroke="#351915"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeMiterlimit="10"
            strokeWidth="8"
            d="M2407.9 1533.7h-41.6l1.7-9c1.1-6 6.4-10.3 12.5-10.3h13.3c6.1 0 11.3 4.3 12.5 10.3l1.6 9z"
            opacity="0.18"
          ></path>
          <path
            id="XMLID 29_2"
            fill="#FFC943"
            d="M2405.7 1538.1h-41.6l1.7-9c1.1-6 6.4-10.3 12.5-10.3h13.3c6.1 0 11.3 4.3 12.5 10.3l1.6 9z"
          ></path>
          <path
            id="XMLID 8_3"
            stroke="#102D3B"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeMiterlimit="10"
            strokeWidth="8"
            d="M2405.7 1538.1h-41.6l1.7-9c1.1-6 6.4-10.3 12.5-10.3h13.3c6.1 0 11.3 4.3 12.5 10.3l1.6 9z"
          ></path>
        </g>
        <path
          id="path3"
          stroke="transparent"
          d="M2490 1407C4752.39 704.603 4769.67 177.001 4495.52 1"
        ></path>
        <path
          id="path4"
          stroke="transparent"
          d="M2475 1414C383.928 3064.06-43.303 2983.68 4.464 2737.23"
        ></path>
        <path
          id="path6"
          stroke="transparent"
          d="M2490 1431C515.91 1991.45 8.13 1495.19 1 1177"
        ></path>
        <path
          id="path7"
          stroke="transparent"
          d="M2487.93 1387.27C1982.11 2671.42 3885.88 1888.15 4901 1336"
        ></path>
        <path
          id="path8"
          stroke="transparent"
          d="M2351.71 1399C3439.99 2323.48 1478.02 2848.87 361 2996"
        ></path>
        <path
          id="path9"
          stroke="transparent"
          d="M2475 1391c85.93-1236.758 1653.14-766.841 2426-377.29"
        ></path>
        <path
          id="path10"
          stroke="transparent"
          d="M2505 1415.88C1992.85 538.538 622.27 1601.07 1 2242"
        ></path>
        <g id="item1" opacity={0}>
          <g
            id="XMLID 27_2"
            stroke="#2B5621"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeMiterlimit="10"
            strokeWidth="8"
            opacity="0.4"
          >
            <path
              id="XMLID 26_2"
              d="M2547.8 1536.8c-13.7-56.7-19.8-108.3-23-154.9-.6-9.4 3.3-18.3 10.1-24.5 5.2-4.7 8.5-10.9 8.5-16.9 0-10.8-10.9-22.6-24.5-24.4-15.6-1.6-31.4-1.6-47 0-13.7 1.8-24.5 13.7-24.5 24.4 0 5.9 3.3 12.1 8.5 16.9 6.8 6.2 10.7 15.1 10.1 24.5-3.1 46.7-9.2 98.3-23 154.9"
              opacity="0.4"
            ></path>
            <path
              id="XMLID 25_3"
              fill="#2B5621"
              d="M2615.4 1428.7h-240.2l16.7 110.3h52.4v3.2c0 6.6 1.8 11.9 8.3 11.9h85.2c6.6 0 8.3-5.3 8.3-11.9v-3.2h52.4l16.9-110.3z"
              opacity="0.4"
            ></path>
          </g>
          <path
            id="XMLID 18_3"
            fill="#32BF6B"
            d="M2602.2 1414.9H2362l16.7 110.3h48.9v3.2c0 6.6 5.3 11.9 11.9 11.9h85.2c6.6 0 11.9-5.3 11.9-11.9v-3.2h48.9l16.7-110.3z"
          ></path>
          <g
            id="XMLID 35_2"
            stroke="#351915"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeMiterlimit="10"
            strokeWidth="8"
            opacity="0.18"
          >
            <path
              id="XMLID 38_2"
              d="M2463.1 1414.9c-3.7 37.7-9.7 78.3-20.3 121.9"
              opacity="0.18"
            ></path>
            <path
              id="XMLID 44_2"
              d="M2545.2 1525.6c-9-39.4-14.3-76.3-17.6-110.7"
              opacity="0.18"
            ></path>
          </g>
          <path
            id="XMLID 33_2"
            stroke="#351915"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeMiterlimit="10"
            strokeWidth="8"
            d="M2526.4 1533.6h-81.7c4-4.1 6.5-8.6 8.2-12.9 1.6-4.2 5.4-7.1 9.7-7.1h46c4.3 0 8 2.8 9.7 7.1 1.6 4.4 4.1 8.9 8.1 12.9z"
            opacity="0.18"
          ></path>
          <path
            id="XMLID 31_3"
            stroke="#351915"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeMiterlimit="10"
            strokeWidth="8"
            d="M2585.4 1520.7h-41.6l1.7-9c1.1-6 6.4-10.3 12.5-10.3h13.2c6.1 0 11.3 4.3 12.5 10.3l1.7 9z"
            opacity="0.18"
          ></path>
          <path
            id="XMLID 24_3"
            stroke="#102D3B"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeMiterlimit="10"
            strokeWidth="8"
            d="M2534.6 1522.9c-13.7-56.7-19.8-108.3-23-154.9-.6-9.4 3.3-18.3 10.1-24.5 5.2-4.7 8.5-10.9 8.5-16.9 0-10.8-10.9-22.6-24.5-24.4-15.6-1.6-31.4-1.6-47 0-13.7 1.8-24.5 13.7-24.5 24.4 0 5.9 3.3 12.1 8.5 16.9 6.8 6.2 10.7 15.1 10.1 24.5-3.1 46.7-9.2 98.3-23 154.9"
          ></path>
          <path
            id="XMLID 30_2"
            fill="#32BF6B"
            d="M2585.2 1525.1h-41.6l1.7-9c1.1-6 6.4-10.3 12.5-10.3h13.3c6.1 0 11.3 4.3 12.5 10.3l1.6 9z"
          ></path>
          <path
            id="XMLID 6_4"
            stroke="#102D3B"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeMiterlimit="10"
            strokeWidth="8"
            d="M2585.2 1525.1h-41.6l1.7-9c1.1-6 6.4-10.3 12.5-10.3h13.3c6.1 0 11.3 4.3 12.5 10.3l1.6 9z"
          ></path>
          <path
            id="XMLID 13_4"
            stroke="#102D3B"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeMiterlimit="10"
            strokeWidth="8"
            d="M2527.5 1414.9H2362l16.7 110.3h52.4v3.2c0 6.6 1.8 11.9 8.3 11.9h85.2c6.6 0 8.3-5.3 8.3-11.9v-3.2h52.4l16.9-110.3h-74.7z"
          ></path>
          <path
            id="XMLID 34_2"
            fill="#32BF6B"
            d="M2522 1540.3h-81.7c4-4.1 6.5-8.6 8.2-12.9 1.6-4.2 5.4-7.1 9.7-7.1h46c4.3 0 8 2.8 9.7 7.1 1.6 4.3 4.1 8.8 8.1 12.9z"
          ></path>
          <path
            id="XMLID 2_2"
            stroke="#102D3B"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeMiterlimit="10"
            strokeWidth="8"
            d="M2522 1540.3h-81.7c4-4.1 6.5-8.6 8.2-12.9 1.6-4.2 5.4-7.1 9.7-7.1h46c4.3 0 8 2.8 9.7 7.1 1.6 4.3 4.1 8.8 8.1 12.9z"
          ></path>
          <path
            id="XMLID 28_4"
            stroke="#351915"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeMiterlimit="10"
            strokeWidth="8"
            d="M2423.9 1520.7h-41.6l1.7-9c1.1-6 6.4-10.3 12.5-10.3h13.3c6.1 0 11.3 4.3 12.5 10.3l1.6 9z"
            opacity="0.18"
          ></path>
          <path
            id="XMLID 29_3"
            fill="#32BF6B"
            d="M2421.7 1525.1h-41.6l1.7-9c1.1-6 6.4-10.3 12.5-10.3h13.3c6.1 0 11.3 4.3 12.5 10.3l1.6 9z"
          ></path>
          <path
            id="XMLID 8_4"
            stroke="#102D3B"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeMiterlimit="10"
            strokeWidth="8"
            d="M2421.7 1525.1h-41.6l1.7-9c1.1-6 6.4-10.3 12.5-10.3h13.3c6.1 0 11.3 4.3 12.5 10.3l1.6 9z"
          ></path>
        </g>
        <g id="item10" opacity={0}>
          <g
            id="XMLID 27_3"
            stroke="#2B5621"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeMiterlimit="10"
            strokeWidth="8"
            opacity="0.4"
          >
            <path
              id="XMLID 26_3"
              d="M2536.8 1541.8c-13.7-56.7-19.8-108.3-23-154.9-.6-9.4 3.3-18.3 10.1-24.5 5.2-4.7 8.5-10.9 8.5-16.9 0-10.8-10.9-22.6-24.5-24.4-15.6-1.6-31.4-1.6-47 0-13.7 1.8-24.5 13.7-24.5 24.4 0 5.9 3.3 12.1 8.5 16.9 6.8 6.2 10.7 15.1 10.1 24.5-3.1 46.7-9.2 98.3-23 154.9"
              opacity="0.4"
            ></path>
            <path
              id="XMLID 25_4"
              fill="#2B5621"
              d="M2604.4 1433.7h-240.2l16.7 110.3h52.4v3.2c0 6.6 1.8 11.9 8.3 11.9h85.2c6.6 0 8.3-5.3 8.3-11.9v-3.2h52.4l16.9-110.3z"
              opacity="0.4"
            ></path>
          </g>
          <path
            id="XMLID 18_4"
            fill="#FFC943"
            d="M2591.2 1419.9H2351l16.7 110.3h48.9v3.2c0 6.6 5.3 11.9 11.9 11.9h85.2c6.6 0 11.9-5.3 11.9-11.9v-3.2h48.9l16.7-110.3z"
          ></path>
          <g
            id="XMLID 35_3"
            stroke="#351915"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeMiterlimit="10"
            strokeWidth="8"
            opacity="0.18"
          >
            <path
              id="XMLID 38_3"
              d="M2452.1 1419.9c-3.7 37.7-9.7 78.3-20.3 121.9"
              opacity="0.18"
            ></path>
            <path
              id="XMLID 44_3"
              d="M2534.2 1530.6c-9-39.4-14.3-76.3-17.6-110.7"
              opacity="0.18"
            ></path>
          </g>
          <path
            id="XMLID 33_3"
            stroke="#351915"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeMiterlimit="10"
            strokeWidth="8"
            d="M2515.4 1538.6h-81.7c4-4.1 6.5-8.6 8.2-12.9 1.6-4.2 5.4-7.1 9.7-7.1h46c4.3 0 8 2.8 9.7 7.1 1.6 4.4 4.1 8.9 8.1 12.9z"
            opacity="0.18"
          ></path>
          <path
            id="XMLID 31_4"
            stroke="#351915"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeMiterlimit="10"
            strokeWidth="8"
            d="M2574.4 1525.7h-41.6l1.7-9c1.1-6 6.4-10.3 12.5-10.3h13.2c6.1 0 11.3 4.3 12.5 10.3l1.7 9z"
            opacity="0.18"
          ></path>
          <path
            id="XMLID 24_4"
            stroke="#102D3B"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeMiterlimit="10"
            strokeWidth="8"
            d="M2523.6 1527.9c-13.7-56.7-19.8-108.3-23-154.9-.6-9.4 3.3-18.3 10.1-24.5 5.2-4.7 8.5-10.9 8.5-16.9 0-10.8-10.9-22.6-24.5-24.4-15.6-1.6-31.4-1.6-47 0-13.7 1.8-24.5 13.7-24.5 24.4 0 5.9 3.3 12.1 8.5 16.9 6.8 6.2 10.7 15.1 10.1 24.5-3.1 46.7-9.2 98.3-23 154.9"
          ></path>
          <path
            id="XMLID 30_3"
            fill="#FFC943"
            d="M2574.2 1530.1h-41.6l1.7-9c1.1-6 6.4-10.3 12.5-10.3h13.3c6.1 0 11.3 4.3 12.5 10.3l1.6 9z"
          ></path>
          <path
            id="XMLID 6_5"
            stroke="#102D3B"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeMiterlimit="10"
            strokeWidth="8"
            d="M2574.2 1530.1h-41.6l1.7-9c1.1-6 6.4-10.3 12.5-10.3h13.3c6.1 0 11.3 4.3 12.5 10.3l1.6 9z"
          ></path>
          <path
            id="XMLID 13_5"
            stroke="#102D3B"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeMiterlimit="10"
            strokeWidth="8"
            d="M2516.5 1419.9H2351l16.7 110.3h52.4v3.2c0 6.6 1.8 11.9 8.3 11.9h85.2c6.6 0 8.3-5.3 8.3-11.9v-3.2h52.4l16.9-110.3h-74.7z"
          ></path>
          <path
            id="XMLID 34_3"
            fill="#FFC943"
            d="M2511 1545.3h-81.7c4-4.1 6.5-8.6 8.2-12.9 1.6-4.2 5.4-7.1 9.7-7.1h46c4.3 0 8 2.8 9.7 7.1 1.6 4.3 4.1 8.8 8.1 12.9z"
          ></path>
          <path
            id="XMLID 2_3"
            stroke="#102D3B"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeMiterlimit="10"
            strokeWidth="8"
            d="M2511 1545.3h-81.7c4-4.1 6.5-8.6 8.2-12.9 1.6-4.2 5.4-7.1 9.7-7.1h46c4.3 0 8 2.8 9.7 7.1 1.6 4.3 4.1 8.8 8.1 12.9z"
          ></path>
          <path
            id="XMLID 28_5"
            stroke="#351915"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeMiterlimit="10"
            strokeWidth="8"
            d="M2412.9 1525.7h-41.6l1.7-9c1.1-6 6.4-10.3 12.5-10.3h13.3c6.1 0 11.3 4.3 12.5 10.3l1.6 9z"
            opacity="0.18"
          ></path>
          <path
            id="XMLID 29_4"
            fill="#FFC943"
            d="M2410.7 1530.1h-41.6l1.7-9c1.1-6 6.4-10.3 12.5-10.3h13.3c6.1 0 11.3 4.3 12.5 10.3l1.6 9z"
          ></path>
          <path
            id="XMLID 8_5"
            stroke="#102D3B"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeMiterlimit="10"
            strokeWidth="8"
            d="M2410.7 1530.1h-41.6l1.7-9c1.1-6 6.4-10.3 12.5-10.3h13.3c6.1 0 11.3 4.3 12.5 10.3l1.6 9z"
          ></path>
        </g>
        <path
          id="path11"
          stroke="transparent"
          d="M2471 1449.34c1517.94 123.73 2252.47-8 2430-89.34"
        ></path>
        <path
          id="path5"
          stroke="transparent"
          d="M2481.5 1424.5c2004 982.8 2436.33 1397.83 2402 1482.5"
        ></path>
        <path
          id="path12"
          stroke="transparent"
          d="M2474.5 1376.5C2611.7 97.3 2298.33-53.5 2124.5 31"
        ></path>
        <path
          id="path2"
          stroke="transparent"
          d="M2474.5 1410.5c1208 1257.6 1272 1572 1153 1572"
        ></path>
      </g>
    </svg>
  );
}

export default Explosion;
