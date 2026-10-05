import { useEffect, useState } from "react"
import useInView from "../hooks/useInView"

const directions = new Set(["bottom", "left", "right"])

function FadeIn({
  children,
  delay = 0,
  from = "bottom",
  tilt = false,
  className = "",
  style,
}) {
  const [ref, inView] = useInView()
  const [reducedMotion, setReducedMotion] = useState(false)
  const [canTilt, setCanTilt] = useState(false)
  const [tiltValues, setTiltValues] = useState({ x: 0, y: 0 })
  const direction = directions.has(from) ? from : "bottom"

  useEffect(() => {
    const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)")
    const pointerQuery = window.matchMedia("(hover: hover) and (pointer: fine)")

    const updatePreferences = () => {
      setReducedMotion(motionQuery.matches)
      setCanTilt(tilt && pointerQuery.matches && !motionQuery.matches)
    }

    updatePreferences()
    motionQuery.addEventListener("change", updatePreferences)
    pointerQuery.addEventListener("change", updatePreferences)

    return () => {
      motionQuery.removeEventListener("change", updatePreferences)
      pointerQuery.removeEventListener("change", updatePreferences)
    }
  }, [tilt])

  const handlePointerMove = (event) => {
    if (!canTilt || !inView) return

    const bounds = event.currentTarget.getBoundingClientRect()
    const horizontal = (event.clientX - bounds.left) / bounds.width - 0.5
    const vertical = (event.clientY - bounds.top) / bounds.height - 0.5

    setTiltValues({ x: vertical * -1.5, y: horizontal * 1.5 })
  }

  const handlePointerLeave = () => setTiltValues({ x: 0, y: 0 })

  const mergedStyle = {
    "--fade-delay": `${Math.max(delay, 0)}ms`,
    "--tilt-x": `${tiltValues.x}deg`,
    "--tilt-y": `${tiltValues.y}deg`,
    ...style,
  }

  return (
    <div
      ref={ref}
      className={`fade-in fade-in--${direction} ${
        inView || reducedMotion ? "fade-in--visible" : ""
      } ${canTilt ? "fade-in--tilt" : ""} ${className}`}
      style={mergedStyle}
      onPointerMove={canTilt ? handlePointerMove : undefined}
      onPointerLeave={canTilt ? handlePointerLeave : undefined}
    >
      {children}
    </div>
  )
}

export default FadeIn
