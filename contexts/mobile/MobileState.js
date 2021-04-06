import MobileContext from './MobileContext'
import { useState } from 'react'

function MobileState({ children }) {
  // this state is set from disk.js in footer
  const [onMobile, setOnMobile] = useState(false);

  return (
    <MobileContext.Provider value={{ onMobile, setOnMobile }}>
      {children}
    </MobileContext.Provider>
  )
}

export default MobileState