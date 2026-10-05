import { useEffect, useRef } from "react"

const DESKTOP_PARTICLES = 360
const MOBILE_PARTICLES = 150
const COMPACT_MOBILE_PARTICLES = 90

function InteractiveBackground() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const context = canvas?.getContext("2d")

    if (!canvas || !context) return undefined

    const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)")
    const blue =
      getComputedStyle(document.documentElement)
        .getPropertyValue("--blue")
        .trim() || "#3b82f6"

    let width = 1
    let height = 1
    let frameId = null
    let previousTime = null
    let elapsed = 0
    let targetScroll = window.scrollY
    let currentScroll = targetScroll
    let particles = []

    const pointer = {
      active: false,
      x: 0,
      y: 0,
      targetX: 0,
      targetY: 0,
      tiltX: 0,
      tiltY: 0,
    }

    function createParticles(count) {
      const goldenAngle = Math.PI * (3 - Math.sqrt(5))

      particles = Array.from({ length: count }, (_, index) => {
        const y = 1 - (index / (count - 1)) * 2
        const radius = Math.sqrt(Math.max(0, 1 - y * y))
        const angle = goldenAngle * index

        return {
          x: Math.cos(angle) * radius,
          y,
          z: Math.sin(angle) * radius,
          offsetX: 0,
          offsetY: 0,
        }
      })
    }

    function draw(delta = 0, snap = false) {
      const isMobile = width <= 768
      const reducedMotion = motionQuery.matches
      const time = reducedMotion ? 0 : elapsed
      const scrollProgress = reducedMotion
        ? 0
        : currentScroll / Math.max(height, 1)
      const easing = snap || reducedMotion ? 1 : 1 - Math.exp(-delta * 8)

      context.clearRect(0, 0, width, height)

      const targetTiltX = pointer.active && !reducedMotion ? pointer.targetX : 0
      const targetTiltY = pointer.active && !reducedMotion ? pointer.targetY : 0

      pointer.tiltX += (targetTiltX - pointer.tiltX) * easing
      pointer.tiltY += (targetTiltY - pointer.tiltY) * easing

      const centerX =
        width * (isMobile ? 0.68 : 0.76) +
        Math.sin(scrollProgress * 0.35) * (isMobile ? 8 : 36) +
        pointer.tiltX * (isMobile ? 6 : 18)
      const centerY =
        height * (isMobile ? 0.38 : 0.42) +
        Math.cos(scrollProgress * 0.28) * (isMobile ? 6 : 20) +
        pointer.tiltY * 12
      const sphereRadius = Math.min(
        width * (isMobile ? 0.32 : 0.19),
        height * (isMobile ? 0.22 : 0.29)
      )

      const angleX = -0.18 + pointer.tiltY * 0.2
      const angleY = time * 0.055 + scrollProgress * 0.1 + pointer.tiltX * 0.28
      const sinX = Math.sin(angleX)
      const cosX = Math.cos(angleX)
      const sinY = Math.sin(angleY)
      const cosY = Math.cos(angleY)
      const interactionRadius = isMobile ? 0 : 145

      const projected = particles.map((particle, index) => {
        const ripple =
          1 +
          Math.sin(particle.x * 3 + particle.y * 2.5 + time * 0.45) *
            Math.cos(particle.z * 3.4 - time * 0.25) *
            0.035
        const x = particle.x * ripple
        const y = particle.y * ripple
        const z = particle.z * ripple
        const y1 = y * cosX - z * sinX
        const z1 = y * sinX + z * cosX
        const x2 = x * cosY + z1 * sinY
        const z2 = -x * sinY + z1 * cosY
        const perspective = 4 / (4 - z2)
        const screenX = centerX + x2 * sphereRadius * perspective
        const screenY = centerY + y1 * sphereRadius * perspective
        let desiredOffsetX = 0
        let desiredOffsetY = 0
        let proximity = 0

        if (pointer.active && interactionRadius) {
          const distanceX = screenX - pointer.x
          const distanceY = screenY - pointer.y
          const distance = Math.hypot(distanceX, distanceY)

          if (distance < interactionRadius) {
            proximity = 1 - distance / interactionRadius
            const force = proximity * proximity * 28
            const directionX = distance > 0.001 ? distanceX / distance : 0
            const directionY = distance > 0.001 ? distanceY / distance : 0
            desiredOffsetX = directionX * force
            desiredOffsetY = directionY * force
          }
        }

        particle.offsetX += (desiredOffsetX - particle.offsetX) * easing
        particle.offsetY += (desiredOffsetY - particle.offsetY) * easing

        return {
          index,
          x: screenX + particle.offsetX,
          y: screenY + particle.offsetY,
          depth: z2,
          proximity,
        }
      })

      context.strokeStyle = blue
      context.lineWidth = 0.6

      for (let index = 0; index < projected.length; index += 1) {
        const point = projected[index]
        const nextPoint = projected[(index + 1) % projected.length]
        const verticalPoint = projected[(index + 13) % projected.length]

        const neighbors = [nextPoint, verticalPoint]

        neighbors.forEach((neighbor) => {
          const visibility = Math.max(0, (point.depth + neighbor.depth + 1.6) / 3.8)
          context.globalAlpha = visibility * (isMobile ? 0.035 : 0.065)
          context.beginPath()
          context.moveTo(point.x, point.y)
          context.lineTo(neighbor.x, neighbor.y)
          context.stroke()
        })
      }

      projected
        .sort((first, second) => first.depth - second.depth)
        .forEach((point) => {
          const depth = Math.max(0, Math.min(1, (point.depth + 1.1) / 2.2))
          const opacity = (isMobile ? 0.07 : 0.08) + depth * (isMobile ? 0.2 : 0.34)
          const size = 0.55 + depth * 0.8 + point.proximity * 0.45

          if (point.proximity > 0.12) {
            context.globalAlpha = point.proximity * 0.05
            context.beginPath()
            context.arc(point.x, point.y, size * 4, 0, Math.PI * 2)
            context.fillStyle = blue
            context.fill()
          }

          context.globalAlpha = opacity
          context.beginPath()
          context.arc(point.x, point.y, size, 0, Math.PI * 2)
          context.fillStyle = blue
          context.fill()
        })

      context.globalAlpha = 1
    }

    function animate(timestamp) {
      const delta = previousTime === null ? 0 : Math.min((timestamp - previousTime) / 1000, 0.05)

      previousTime = timestamp
      elapsed += delta
      currentScroll += (targetScroll - currentScroll) * (1 - Math.exp(-delta * 6))
      draw(delta)
      frameId = window.requestAnimationFrame(animate)
    }

    function resetPointer() {
      pointer.active = false
      pointer.targetX = 0
      pointer.targetY = 0
    }

    function handlePointerMove(event) {
      if (width <= 768 || event.pointerType === "touch" || motionQuery.matches) return

      pointer.active = true
      pointer.x = event.clientX
      pointer.y = event.clientY
      pointer.targetX = Math.max(-1, Math.min(1, (event.clientX / width) * 2 - 1))
      pointer.targetY = Math.max(-1, Math.min(1, (event.clientY / height) * 2 - 1))
    }

    function handlePointerOut(event) {
      if (event.relatedTarget === null) resetPointer()
    }

    function handleScroll() {
      targetScroll = window.scrollY
    }

    function resize() {
      width = Math.max(window.innerWidth, 1)
      height = Math.max(window.innerHeight, 1)
      const pixelRatio = Math.min(window.devicePixelRatio || 1, 1.5)

      canvas.width = Math.round(width * pixelRatio)
      canvas.height = Math.round(height * pixelRatio)
      context.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0)

      const particleCount = width <= 480
        ? COMPACT_MOBILE_PARTICLES
        : width <= 768
          ? MOBILE_PARTICLES
          : DESKTOP_PARTICLES
      if (particles.length !== particleCount) createParticles(particleCount)

      resetPointer()
      draw(0, true)
    }

    function syncAnimation() {
      if (frameId !== null) {
        window.cancelAnimationFrame(frameId)
        frameId = null
      }

      previousTime = null
      resetPointer()

      if (document.hidden) return

      targetScroll = window.scrollY
      if (motionQuery.matches) {
        draw(0, true)
      } else {
        frameId = window.requestAnimationFrame(animate)
      }
    }

    resize()
    syncAnimation()

    window.addEventListener("resize", resize)
    window.addEventListener("scroll", handleScroll, { passive: true })
    window.addEventListener("pointermove", handlePointerMove, { passive: true })
    window.addEventListener("pointerout", handlePointerOut)
    window.addEventListener("pointercancel", resetPointer)
    window.addEventListener("blur", resetPointer)
    document.addEventListener("visibilitychange", syncAnimation)
    motionQuery.addEventListener("change", syncAnimation)

    return () => {
      if (frameId !== null) window.cancelAnimationFrame(frameId)

      window.removeEventListener("resize", resize)
      window.removeEventListener("scroll", handleScroll)
      window.removeEventListener("pointermove", handlePointerMove)
      window.removeEventListener("pointerout", handlePointerOut)
      window.removeEventListener("pointercancel", resetPointer)
      window.removeEventListener("blur", resetPointer)
      document.removeEventListener("visibilitychange", syncAnimation)
      motionQuery.removeEventListener("change", syncAnimation)
    }
  }, [])

  return <canvas ref={canvasRef} className="interactive-background" aria-hidden="true" />
}

export default InteractiveBackground
