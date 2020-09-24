import DarkModeContext from './DarkModeContext'
import { useState, useEffect } from 'react'

function DarkModeState({ children }) {
  const [isDarkMode, setIsDarkMode] = useState(null)

  useEffect(() => {
    setIsDarkMode(JSON.parse(localStorage.getItem('isDarkMode')))
  }, [])
  return (
    <DarkModeContext.Provider value={{ isDarkMode, setIsDarkMode }}>
      {children}
    </DarkModeContext.Provider>
  )
}

export default DarkModeState