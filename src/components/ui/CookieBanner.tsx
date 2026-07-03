import { useEffect } from 'react'
import './CookieBanner.css'

interface CookieBannerProps {
  visible: boolean
  onAccept: () => void
}

export function CookieBanner({ visible, onAccept }: CookieBannerProps) {
  useEffect(() => {
    if (visible) {
      document.body.style.paddingBottom = '100px'
    } else {
      document.body.style.paddingBottom = ''
    }
    return () => {
      document.body.style.paddingBottom = ''
    }
  }, [visible])

  if (!visible) return null

  return (
    <div className="cookie-banner" role="dialog" aria-label="Cookie consent">
      <p className="cookie-banner__text">
        Мы используем cookie-файлы. Это нужно для лучшей работы сайта. Продолжая
        пользоваться сайтом, вы соглашаетесь с этим.
      </p>
      <button className="cookie-banner__btn" onClick={onAccept} type="button">
        Ok
      </button>
    </div>
  )
}
