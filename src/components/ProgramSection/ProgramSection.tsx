import { useRef } from 'react'
import { PROGRAMS, type Program } from '../../data/content'
import { useCarousel } from '../../hooks/useCarousel'
import { ProgramCard } from './ProgramCard'
import styles from './ProgramSection.module.css'

interface ProgramSectionProps {
  onDetails: (program: Program) => void
}

export function ProgramSection({ onDetails }: ProgramSectionProps) {
  const trackRef = useRef<HTMLDivElement>(null)
  const { index, goTo } = useCarousel(PROGRAMS.length)

  const scrollToIndex = (i: number) => {
    goTo(i)
    const track = trackRef.current
    if (!track) return
    const card = track.children[i] as HTMLElement | undefined
    card?.scrollIntoView({ behavior: 'smooth', inline: 'start', block: 'nearest' })
  }

  const handleNext = () => {
    const nextIndex = (index + 1) % PROGRAMS.length
    scrollToIndex(nextIndex)
  }

  const handlePrev = () => {
    const prevIndex = (index - 1 + PROGRAMS.length) % PROGRAMS.length
    scrollToIndex(prevIndex)
  }

  return (
    <section className={styles.section} id="programs">
      <div className={styles.container}>
        <h2 className={styles.heading}>Тренировки дома</h2>

        <div className={styles.carousel}>
          <div className={styles.track} ref={trackRef}>
            {PROGRAMS.map((program) => (
              <ProgramCard
                key={program.id}
                program={program}
                onDetails={onDetails}
              />
            ))}
          </div>

          <div className={styles.controls}>
            <div className={styles.dots}>
              {PROGRAMS.map((_, i) => (
                <button
                  key={i}
                  className={`${styles.dot} ${i === index ? styles.dotActive : ''}`}
                  onClick={() => scrollToIndex(i)}
                  aria-label={`Слайд ${i + 1}`}
                  type="button"
                />
              ))}
            </div>
            <div className={styles.nav}>
              <span className={styles.navHint}>Листай вправо/влево</span>
              <button
                className={styles.navBtn}
                onClick={handlePrev}
                aria-label="Предыдущая программа"
                type="button"
              >
                ←
              </button>
              <button
                className={styles.navBtn}
                onClick={handleNext}
                aria-label="Следующая программа"
                type="button"
              >
                →
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
