import { BEFORE_AFTER_SLIDES, BASE_ONLINE_COUNT, STATS_BULLETS } from '../../data/content'
import { useCarousel } from '../../hooks/useCarousel'
import { useLiveCounter } from '../../hooks/useCounter'
import styles from './StatsSection.module.css'

export function StatsSection() {
  const liveCount = useLiveCounter(BASE_ONLINE_COUNT)
  const { index, next, prev, goTo } = useCarousel(BEFORE_AFTER_SLIDES.length)

  const formattedCount = liveCount.toLocaleString('ru-RU')

  return (
    <section className={styles.section} id="stats">
      <div className={styles.container}>
        <h2 className={styles.heading}>
          <span className={styles.highlight}>580&nbsp;000</span> девушек
          <br />
          уже тренируются с&nbsp;Катей
        </h2>

        <div className={styles.card}>
          <ul className={styles.bullets}>
            {STATS_BULLETS.map((text) => (
              <li key={text} className={styles.bullet}>
                <span className={styles.bulletIcon} aria-hidden="true">
                  →
                </span>
                {text}
              </li>
            ))}
          </ul>

          <div className={styles.liveBlock}>
            <div className={styles.liveLabel}>
              <span className={styles.liveDot} aria-hidden="true" />
              Тренируются прямо сейчас
            </div>
            <div className={styles.liveCount} aria-live="polite">
              {formattedCount}
            </div>
          </div>

          <div className={styles.carouselWrap}>
            <div className={styles.carousel}>
              <div
                className={styles.carouselTrack}
                style={{ transform: `translateX(-${index * 100}%)` }}
              >
                {BEFORE_AFTER_SLIDES.map((slide) => (
                  <div key={slide.id} className={styles.slide}>
                    <img
                      src={slide.image}
                      alt={slide.alt}
                      loading="lazy"
                    />
                  </div>
                ))}
              </div>

              <div className={styles.carouselControls}>
                <div className={styles.dots}>
                  {BEFORE_AFTER_SLIDES.map((slide, i) => (
                    <button
                      key={slide.id}
                      className={`${styles.dot} ${i === index ? styles.dotActive : ''}`}
                      onClick={() => goTo(i)}
                      aria-label={`Результат ${i + 1}`}
                      type="button"
                    />
                  ))}
                </div>
                <div className={styles.nav}>
                  <span className={styles.navHint}>Листай вправо/влево</span>
                  <button
                    className={styles.navBtn}
                    onClick={prev}
                    aria-label="Предыдущий результат"
                    type="button"
                  >
                    ←
                  </button>
                  <button
                    className={styles.navBtn}
                    onClick={next}
                    aria-label="Следующий результат"
                    type="button"
                  >
                    →
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
