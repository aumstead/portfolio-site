import DarkModeContext from './DarkModeContext'
import { useState } from 'react'

function DarkModeState({ children }) {
  const [isDarkMode, setIsDarkMode] = useState(false)
  return (
    <DarkModeContext.Provider value={{ isDarkMode, setIsDarkMode }}>
      {children}
    </DarkModeContext.Provider>
  )
}

export default DarkModeState