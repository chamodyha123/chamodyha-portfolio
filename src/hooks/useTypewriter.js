import { useEffect, useMemo, useState } from "react"

function useTypewriter(words = [], typingSpeed = 85, pauseDuration = 1700) {
  const wordKey = useMemo(() => words.join("\u0001"), [words])
  const [state, setState] = useState({
    key: wordKey,
    wordIndex: 0,
    characterIndex: 0,
    isDeleting: false,
  })
  const [reducedMotion, setReducedMotion] = useState(
    () => window.matchMedia("(prefers-reduced-motion: reduce)").matches
  )

  useEffect(() => {
    const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)")
    const updateReducedMotion = (event) => setReducedMotion(event.matches)

    motionQuery.addEventListener("change", updateReducedMotion)

    return () => motionQuery.removeEventListener("change", updateReducedMotion)
  }, [])

  useEffect(() => {
    if (words.length === 0 || reducedMotion) return undefined

    const activeState = state.key === wordKey
      ? state
      : { key: wordKey, wordIndex: 0, characterIndex: 0, isDeleting: false }
    const currentWord = words[activeState.wordIndex % words.length]
    const atWordEnd = activeState.characterIndex >= currentWord.length
    const delay = activeState.isDeleting
      ? Math.max(typingSpeed / 2, 25)
      : atWordEnd
        ? pauseDuration
        : typingSpeed

    const timer = window.setTimeout(() => {
      setState((currentState) => {
        const nextState = currentState.key === wordKey
          ? currentState
          : { key: wordKey, wordIndex: 0, characterIndex: 0, isDeleting: false }
        const nextWord = words[nextState.wordIndex % words.length]

        if (!nextState.isDeleting && nextState.characterIndex >= nextWord.length) {
          return { ...nextState, isDeleting: true }
        }

        if (nextState.isDeleting && nextState.characterIndex === 0) {
          return {
            key: wordKey,
            wordIndex: (nextState.wordIndex + 1) % words.length,
            characterIndex: 0,
            isDeleting: false,
          }
        }

        return {
          ...nextState,
          characterIndex: nextState.characterIndex + (nextState.isDeleting ? -1 : 1),
        }
      })
    }, delay)

    return () => window.clearTimeout(timer)
  }, [pauseDuration, reducedMotion, state, typingSpeed, words, wordKey])

  if (words.length === 0) return ""
  if (reducedMotion) return words[0]

  const displayState = state.key === wordKey
    ? state
    : { wordIndex: 0, characterIndex: 0 }

  return words[displayState.wordIndex % words.length].slice(0, displayState.characterIndex)
}

export default useTypewriter
