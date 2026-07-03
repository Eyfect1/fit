import { useEffect, useRef } from 'react'
import type { Program } from '../../data/content'
import { Button } from '../ui/Button'
import styles from './ProgramModal.module.css'

interface ProgramModalProps {
  program: Program | null
  onClose: () => void
}

export function ProgramModal({ program, onClose }: ProgramModalProps) {
  const overlayRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!program) return

    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }

    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', handleKey)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', handleKey)
    }
  }, [program, onClose])

  if (!program) return null

  return (
    <div
      className={styles.overlay}
      ref={overlayRef}
      onClick={(e) => e.target === overlayRef.current && onClose()}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <div className={styles.modal}>
        <button
          className={styles.close}
          onClick={onClose}
          aria-label="Закрыть"
          type="button"
        >
          ×
        </button>
        <img
          src={program.image}
          alt={program.title}
          className={styles.image}
        />
        <div className={styles.body}>
          <span className={styles.badge}>{program.badge}</span>
          <h2 id="modal-title" className={styles.title}>
            {program.title}
          </h2>
          <p className={styles.description}>{program.description}</p>
          <form
            className={styles.form}
            onSubmit={(e) => {
              e.preventDefault()
              alert('Заявка отправлена! Мы свяжемся с вами в ближайшее время.')
              onClose()
            }}
          >
            <input
              type="tel"
              name="phone"
              placeholder="+7 (___) ___-__-__"
              required
              className={styles.input}
              aria-label="Номер телефона"
            />
            <Button type="submit" fullWidth>
              Записаться на программу
            </Button>
          </form>
        </div>
      </div>
    </div>
  )
}
