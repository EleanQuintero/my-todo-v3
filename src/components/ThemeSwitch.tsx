'use client'

import { useState, useEffect } from 'react'
import * as Switch from '@radix-ui/react-switch'
import { Moon, Sun } from 'lucide-react'

const ThemeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(false)

  // Efecto para cargar el tema guardado y detectar preferencias del sistema
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme')
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
    
    const initialTheme = savedTheme 
      ? savedTheme === 'dark'
      : systemPrefersDark

    setIsDarkMode(initialTheme)
    document.documentElement.classList.toggle('dark', initialTheme)
  }, [])

  // Manejar el cambio de tema
  const handleThemeChange = (checked: boolean) => {
    setIsDarkMode(checked)
    document.documentElement.classList.toggle('dark', checked)
    localStorage.setItem('theme', checked ? 'dark' : 'light')
  }

  return (
    <div className="flex items-center gap-2">
      <Switch.Root
        checked={isDarkMode}
        onCheckedChange={handleThemeChange}
        className="relative h-6 w-11 rounded-full bg-gray-200 transition-colants
                 data-[state=checked]:bg-gray-600"
        aria-label="Alternar modo oscuro"
      >
        <Switch.Thumb className="flex h-5 w-5 translate-x-0.5 items-center justify-center
                                rounded-full bg-white shadow-sm transition-transform 
                                will-change-transform data-[state=checked]:translate-x-5">
          {isDarkMode ? (
            
            <Moon color="#000000" />
          ) : (
            <Sun />
          )}
        </Switch.Thumb>
      </Switch.Root>
    </div>
  )
}

export default ThemeToggle