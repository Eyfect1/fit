import { useCallback, useState } from 'react'
import type { Program } from './data/content'
import { Hero } from './components/Hero/Hero'
import { ProgramSection } from './components/ProgramSection/ProgramSection'
import { StatsSection } from './components/StatsSection/StatsSection'
import { ProgramModal } from './components/ProgramModal/ProgramModal'
import { CookieBanner } from './components/ui/CookieBanner'

function App() {
  const [selectedProgram, setSelectedProgram] = useState<Program | null>(null)
  const [cookiesAccepted, setCookiesAccepted] = useState(
    () => localStorage.getItem('cookiesAccepted') === 'true',
  )

  const scrollToPrograms = useCallback(() => {
    document.getElementById('programs')?.scrollIntoView({ behavior: 'smooth' })
  }, [])

  const handleDetails = useCallback((program: Program) => {
    setSelectedProgram(program)
  }, [])

  const handleCloseModal = useCallback(() => {
    setSelectedProgram(null)
  }, [])

  const handleAcceptCookies = useCallback(() => {
    localStorage.setItem('cookiesAccepted', 'true')
    setCookiesAccepted(true)
  }, [])

  return (
    <>
      <Hero onChooseProgram={scrollToPrograms} />
      <ProgramSection onDetails={handleDetails} />
      <StatsSection />
      <ProgramModal program={selectedProgram} onClose={handleCloseModal} />
      <CookieBanner visible={!cookiesAccepted} onAccept={handleAcceptCookies} />
    </>
  )
}

export default App
