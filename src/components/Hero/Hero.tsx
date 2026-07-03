import { IMAGES } from '../../data/content'
import { Button } from '../ui/Button'
import styles from './Hero.module.css'

interface HeroProps {
  onChooseProgram: () => void
}

export function Hero({ onChooseProgram }: HeroProps) {
  return (
    <section className={styles.hero} id="hero">
      <div className={styles.container}>
        <div className={styles.content}>
          <h1 className={styles.title}>
            Приведите тело в&nbsp;форму
            <br />
            с&nbsp;чемпионкой Катей Усмановой
          </h1>
          <p className={styles.subtitle}>
            без диет, голода и запретов
            <br />
            с&nbsp;пользой для здоровья
          </p>
          <p className={styles.description}>
            Похудеть, подтянуть попу и&nbsp;живот, набрать форму в&nbsp;зале,
            восстановиться после родов&nbsp;— тренировки и&nbsp;питание под вашу
            цель
          </p>
          <Button onClick={onChooseProgram}>Выбрать программу</Button>
          <p className={styles.vpnNotice}>
            Для корректной работы сайта отключите VPN
          </p>
        </div>
        <div className={styles.imageWrap}>
          <picture>
            <source media="(max-width: 768px)" srcSet={IMAGES.heroMobile} />
            <img
              src={IMAGES.heroDesktop}
              alt="Катя Усманова — фитнес-тренер"
              className={styles.image}
              loading="eager"
            />
          </picture>
        </div>
      </div>
    </section>
  )
}
