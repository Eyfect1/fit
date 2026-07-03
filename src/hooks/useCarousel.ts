import { useCallback, useState } from 'react'

export function useCarousel(total: number) {
  const [index, setIndex] = useState(0)

  const next = useCallback(() => {
    setIndex((prev) => (prev + 1) % total)
  }, [total])

  const prev = useCallback(() => {
    setIndex((prev) => (prev - 1 + total) % total)
  }, [total])

  const goTo = useCallback((i: number) => {
    setIndex(i)
  }, [])

  return { index, next, prev, goTo }
}
