"use client"

import * as React from "react"
import { useTheme } from "next-themes"

import { MoonStarIcon, SunIcon } from "lucide-react"

export function ToggleTheme() {
  const { setTheme, theme = "light" } = useTheme()

  // Avoinding system default values on purpose
  const toggleTheme = React.useCallback(() => {
    switch (theme) {
      case 'light':
        return setTheme('dark');
      case 'dark':
        return setTheme('light');

      default:
        return setTheme('dark');
    }
  }, [theme])

	return (
    <a className="w-5 h-5 p-0 m-0 my-auto text-primary/40 hover:text-primary transition-all duration-300" onClick={toggleTheme}>
      {theme !== 'light' ?
        <MoonStarIcon className="w-full h-full" strokeWidth={2} /> :
        <SunIcon className="w-full h-full" strokeWidth={2.25} />}

      <span className="sr-only">Toggle theme</span>
    </a>
  )
}
