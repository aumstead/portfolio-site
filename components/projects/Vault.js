import styles from './Vault.module.scss'
import { useEffect } from 'react'

function Vault() {
  useEffect(() => {
    tl.current = gsap.timeline()
    tl.current.pause()
  }, [])
  return (
    <svg className={styles.vault} width="384" height="416" viewBox="0 0 384 416" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M182.6 415.9C283.447 415.9 365.2 405.692 365.2 393.1C365.2 380.508 283.447 370.3 182.6 370.3C81.7528 370.3 0 380.508 0 393.1C0 405.692 81.7528 415.9 182.6 415.9Z" fill="#212552"/>
<path d="M142.1 377V369.6C142.1 366.3 139.4 363.6 136.1 363.6H70.1001C66.8001 363.6 64.1001 366.3 64.1001 369.6V391.6C64.1001 394.9 66.8001 397.6 70.1001 397.6H114C118.8 397.6 123.4 395.7 126.8 392.3L142.1 377Z" fill="#92D6E9"/>
<path opacity="0.3" d="M136.1 363.6H70.1001C66.8001 363.6 64.1001 366.3 64.1001 369.6V390H129.1L142.1 377V369.6C142.1 366.3 139.4 363.6 136.1 363.6Z" fill="#0A1E2B" stroke="#0A1E2B" stroke-width="6" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M223.1 377V369.6C223.1 366.3 225.8 363.6 229.1 363.6H295.1C298.4 363.6 301.1 366.3 301.1 369.6V391.6C301.1 394.9 298.4 397.6 295.1 397.6H251.2C246.4 397.6 241.8 395.7 238.4 392.3L223.1 377Z" fill="#92D6E9"/>
<path opacity="0.3" d="M295.1 363.6H229.1C225.8 363.6 223.1 366.3 223.1 369.6V377L236.1 390H301.1V369.6C301.1 366.3 298.4 363.6 295.1 363.6Z" fill="#0A1E2B" stroke="#0A1E2B" stroke-width="6" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M142.1 377V369.6C142.1 366.3 139.4 363.6 136.1 363.6H70.1001C66.8001 363.6 64.1001 366.3 64.1001 369.6V391.6C64.1001 394.9 66.8001 397.6 70.1001 397.6H114C118.8 397.6 123.4 395.7 126.8 392.3L142.1 377Z" stroke="#212552" stroke-width="6" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M223.1 377V369.6C223.1 366.3 225.8 363.6 229.1 363.6H295.1C298.4 363.6 301.1 366.3 301.1 369.6V391.6C301.1 394.9 298.4 397.6 295.1 397.6H251.2C246.4 397.6 241.8 395.7 238.4 392.3L223.1 377Z" stroke="#212552" stroke-width="6" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M312.6 377.1H52.6001C30.5001 377.1 12.6001 359.2 12.6001 337.1V77.1001C12.6001 55.0001 30.5001 37.1001 52.6001 37.1001H312.6C334.7 37.1001 352.6 55.0001 352.6 77.1001V337.1C352.6 359.2 334.7 377.1 312.6 377.1Z" fill="#CBEDF9"/>
<path opacity="0.23" d="M251.3 36.7002H276.9L259.6 73.1002L251.3 36.7002Z" fill="#0A1E2B" stroke="#0A1E2B" stroke-width="6" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M312.6 377.1H52.6001C30.5001 377.1 12.6001 359.2 12.6001 337.1V77.1001C12.6001 55.0001 30.5001 37.1001 52.6001 37.1001H312.6C334.7 37.1001 352.6 55.0001 352.6 77.1001V337.1C352.6 359.2 334.7 377.1 312.6 377.1Z" stroke="#212552" stroke-width="6" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M300.6 73.1001H64.6001C55.8001 73.1001 48.6001 80.3001 48.6001 89.1001V97.1001C48.6001 88.3001 55.8001 84.1001 64.6001 84.1001H300.6C309.4 84.1001 316.6 88.3001 316.6 97.1001V89.1001C316.6 80.2001 309.4 73.1001 300.6 73.1001Z" fill="#E8F9FF"/>
<path d="M300.6 328.1H64.6001C55.8001 328.1 48.6001 320.9 48.6001 312.1V325.1C48.6001 333.9 55.8001 341.1 64.6001 341.1H300.6C309.4 341.1 316.6 333.9 316.6 325.1V312.1C316.6 320.9 309.4 328.1 300.6 328.1Z" fill="#92D6E9"/>
<path d="M64.6001 341.1C55.8001 341.1 48.6001 333.9 48.6001 325.1V89.1001C48.6001 80.3001 55.8001 73.1001 64.6001 73.1001H300.6C309.4 73.1001 316.6 80.3001 316.6 89.1001V325.1C316.6 333.9 309.4 341.1 300.6 341.1H64.6001Z" stroke="#212552" stroke-width="6" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path opacity="0.23" d="M287.9 302.2H285.9C283.7 302.2 281.9 300.4 281.9 298.2V146.2C281.9 144 283.7 142.2 285.9 142.2H287.9C290.1 142.2 291.9 144 291.9 146.2V298.2C291.9 300.4 290.1 302.2 287.9 302.2Z" fill="#0A1E2B" stroke="#0A1E2B" stroke-width="6" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M287.9 282.2H285.9C283.7 282.2 281.9 280.4 281.9 278.2V126.2C281.9 124 283.7 122.2 285.9 122.2H287.9C290.1 122.2 291.9 124 291.9 126.2V278.2C291.9 280.4 290.1 282.2 287.9 282.2Z" fill="#92D6E9"/>
<path d="M287.9 282.2H285.9C283.7 282.2 281.9 280.4 281.9 278.2V126.2C281.9 124 283.7 122.2 285.9 122.2H287.9C290.1 122.2 291.9 124 291.9 126.2V278.2C291.9 280.4 290.1 282.2 287.9 282.2Z" stroke="#212552" stroke-width="6" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path opacity="0.23" d="M182.6 280.1C218.499 280.1 247.6 250.999 247.6 215.1C247.6 179.202 218.499 150.1 182.6 150.1C146.702 150.1 117.6 179.202 117.6 215.1C117.6 250.999 146.702 280.1 182.6 280.1Z" fill="#0A1E2B" stroke="#0A1E2B" stroke-width="6" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M182.6 272.1C218.499 272.1 247.6 242.999 247.6 207.1C247.6 171.202 218.499 142.1 182.6 142.1C146.702 142.1 117.6 171.202 117.6 207.1C117.6 242.999 146.702 272.1 182.6 272.1Z" fill="#CBEDF9"/>
<path d="M182.6 272.1C218.499 272.1 247.6 242.999 247.6 207.1C247.6 171.202 218.499 142.1 182.6 142.1C146.702 142.1 117.6 171.202 117.6 207.1C117.6 242.999 146.702 272.1 182.6 272.1Z" stroke="#212552" stroke-width="6" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M182.6 261.1C212.423 261.1 236.6 236.923 236.6 207.1C236.6 177.277 212.423 153.1 182.6 153.1C152.777 153.1 128.6 177.277 128.6 207.1C128.6 236.923 152.777 261.1 182.6 261.1Z" fill="#92D6E9"/>
<path d="M182.6 166.1V248.1" stroke="#212552" stroke-width="10" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M223.6 207.1H141.6" stroke="#212552" stroke-width="10" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M211.6 178.1L153.6 236.1" stroke="#212552" stroke-width="10" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M211.6 236.1L153.6 178.1" stroke="#212552" stroke-width="10" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path opacity="0.3" d="M182.6 254.8C168.8 254.8 157.6 243.6 157.6 229.8V204.8H207.6V229.8C207.6 243.6 196.4 254.8 182.6 254.8Z" fill="#0A1E2B" stroke="#0A1E2B" stroke-width="6" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path opacity="0.23" d="M48.6001 169.6C44.2001 169.6 40.6001 166 40.6001 161.6V137.6C40.6001 133.2 44.2001 129.6 48.6001 129.6C53.0001 129.6 56.6001 133.2 56.6001 137.6V161.6C56.6001 166 53.0001 169.6 48.6001 169.6Z" fill="#0A1E2B" stroke="#0A1E2B" stroke-width="6" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path opacity="0.23" d="M48.6001 300.1C44.2001 300.1 40.6001 296.5 40.6001 292.1V268.1C40.6001 263.7 44.2001 260.1 48.6001 260.1C53.0001 260.1 56.6001 263.7 56.6001 268.1V292.1C56.6001 296.5 53.0001 300.1 48.6001 300.1Z" fill="#0A1E2B" stroke="#0A1E2B" stroke-width="6" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M48.6001 161.6C44.2001 161.6 40.6001 158 40.6001 153.6V129.6C40.6001 125.2 44.2001 121.6 48.6001 121.6C53.0001 121.6 56.6001 125.2 56.6001 129.6V153.6C56.6001 158 53.0001 161.6 48.6001 161.6Z" fill="#92D6E9"/>
<path d="M48.6001 292.6C44.2001 292.6 40.6001 289 40.6001 284.6V260.6C40.6001 256.2 44.2001 252.6 48.6001 252.6C53.0001 252.6 56.6001 256.2 56.6001 260.6V284.6C56.6001 289 53.0001 292.6 48.6001 292.6Z" fill="#92D6E9"/>
<path d="M48.6001 161.6C44.2001 161.6 40.6001 158 40.6001 153.6V129.6C40.6001 125.2 44.2001 121.6 48.6001 121.6C53.0001 121.6 56.6001 125.2 56.6001 129.6V153.6C56.6001 158 53.0001 161.6 48.6001 161.6Z" stroke="#212552" stroke-width="6" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M48.6001 292.6C44.2001 292.6 40.6001 289 40.6001 284.6V260.6C40.6001 256.2 44.2001 252.6 48.6001 252.6C53.0001 252.6 56.6001 256.2 56.6001 260.6V284.6C56.6001 289 53.0001 292.6 48.6001 292.6Z" stroke="#212552" stroke-width="6" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M182.6 232.1C196.407 232.1 207.6 220.907 207.6 207.1C207.6 193.293 196.407 182.1 182.6 182.1C168.793 182.1 157.6 193.293 157.6 207.1C157.6 220.907 168.793 232.1 182.6 232.1Z" fill="#FFEA9E"/>
<path d="M182.6 218.3C188.786 218.3 193.8 213.286 193.8 207.1C193.8 200.915 188.786 195.9 182.6 195.9C176.415 195.9 171.4 200.915 171.4 207.1C171.4 213.286 176.415 218.3 182.6 218.3Z" fill="#EDC75D"/>
<path d="M182.6 230.1C195.303 230.1 205.6 219.803 205.6 207.1C205.6 194.398 195.303 184.1 182.6 184.1C169.898 184.1 159.6 194.398 159.6 207.1C159.6 219.803 169.898 230.1 182.6 230.1Z" stroke="#212552" stroke-width="8" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M261.6 73.1002H193.1V20.9002C193.1 16.9002 196.3 13.7002 200.3 13.7002H254.3C258.3 13.7002 261.5 16.9002 261.5 20.9002L261.6 73.1002Z" fill="#5F9E71" stroke="#212552" stroke-width="6" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M248.1 26.1001H233.5C233.5 29.5001 230.8 32.2001 227.4 32.2001C224 32.2001 221.3 29.5001 221.3 26.1001H206.6C204.9 26.1001 203.4 27.5001 203.4 29.3001V73.1001H251.2V29.3001C251.3 27.5001 249.8 26.1001 248.1 26.1001Z" fill="#90C49E"/>
<path d="M227.4 76.7001C235.684 76.7001 242.4 70.2978 242.4 62.4001C242.4 54.5024 235.684 48.1001 227.4 48.1001C219.116 48.1001 212.4 54.5024 212.4 62.4001C212.4 70.2978 219.116 76.7001 227.4 76.7001Z" fill="white"/>
<path d="M261.6 73.1002H193.1V20.9002C193.1 16.9002 196.3 13.7002 200.3 13.7002H254.3C258.3 13.7002 261.5 16.9002 261.5 20.9002L261.6 73.1002Z" stroke="#212552" stroke-width="6" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M380.6 54.9001L360.4 52.1001" stroke="#212552" stroke-width="6" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M332.5 23.2L329.5 3" stroke="#212552" stroke-width="6" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M352.5 30.5L367 16" stroke="#212552" stroke-width="6" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

  )
}

export default Vault