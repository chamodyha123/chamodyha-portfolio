import { useEffect, useRef, useState } from "react"

function useInView({ threshold = 0.15, rootMargin = "0px 0px -48px", once = true } = {}) {
  const ref = useRef(null)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    const element = ref.current

    if (!element || typeof IntersectionObserver === "undefined") {
      setInView(true)
      return undefined
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) {
          if (!once) setInView(false)
          return
        }

        setInView(true)

        if (once) observer.unobserve(entry.target)
      },
      { threshold, rootMargin }
    )

    observer.observe(element)

    return () => observer.disconnect()
  }, [once, rootMargin, threshold])

  return [ref, inView]
}

export default useInView
