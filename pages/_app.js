import "../styles.css";
import { useEffect } from 'react'
import { useRouter } from 'next/router'
import * as gtag from '../lib/gtag'
import DarkModeState from "../contexts/darkMode/DarkModeState";
import MobileState from "../contexts/mobile/MobileState";
import "prismjs/themes/prism-tomorrow.css";

function MyApp({ Component }) {
  const router = useRouter()
  
  useEffect(() => {
    const handleRouteChange = (url) => {
      gtag.pageview(url)
    }
    router.events.on('routeChangeComplete', handleRouteChange)
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange)
    }
  }, [router.events])

  return (
    <DarkModeState>
      <MobileState>
        <Component />
      </MobileState>
    </DarkModeState>
  );
}

export default MyApp;
