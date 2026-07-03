import type { Program } from '../../data/content'
import { Badge } from '../ui/Badge'
import { Button } from '../ui/Button'
import styles from './ProgramCard.module.css'

interface ProgramCardProps {
  program: Program
  onDetails: (program: Program) => void
}

export function ProgramCard({ program, onDetails }: ProgramCardProps) {
  return (
    <article className={styles.card}>
      <div className={styles.imageWrap}>
        <img
          src={program.image}
          alt={program.title}
          className={styles.image}
          loading="lazy"
        />
      </div>
      <div className={styles.body}>
        <Badge label={program.badge} type={program.badgeType} />
        <h3 className={styles.title}>{program.title}</h3>
        <p className={styles.description}>{program.description}</p>
        <Button
          className={styles.btn}
          onClick={() => onDetails(program)}
        >
          Подробнее
        </Button>
      </div>
    </article>
  )
}
