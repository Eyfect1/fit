import { useEffect, useState } from 'react'

export function useLiveCounter(base: number, variance = 15, intervalMs = 4000) {
  const [count, setCount] = useState(base)

  useEffect(() => {
    const tick = () => {
      const delta = Math.floor(Math.random() * variance * 2) - variance
      setCount(base + delta)
    }

    const id = window.setInterval(tick, intervalMs)
    return () => window.clearInterval(id)
  }, [base, variance, intervalMs])

  return count
}
