import { useLayoutEffect, useState } from "react"

export const useDevice = () => {
  const [width, setWidth] = useState(window.innerWidth)
  const isMobile = width < 768
  const isTablet = width < 1024
  const isDesktop = !isMobile && !isTablet

  useLayoutEffect(() => {
    const updateWidth = () => setWidth(window.innerWidth)
    window.addEventListener("resize", updateWidth)
    return () => window.removeEventListener("resize", updateWidth)
  }, [])

  return { isDesktop, isMobile, isTablet, width }
}
