# Cайт посвященный фитнесу

Реплика трёх экранов лендинга [usmanovafit.gymteam.ru/mainpage](https://usmanovafit.gymteam.ru/mainpage), собранная с помощью **Cursor** (вайбкодинг).

## Что реализовано

| Экран | Секция | Функциональность |
|-------|--------|------------------|
| 1 | Hero | Главный оффер, CTA «Выбрать программу», адаптив desktop/mobile |
| 2 | Тренировки дома | Карусель карточек программ, кнопки «Подробнее», модалка с формой |
| 3 | 580 000 девушек | Live-счётчик, карусель фото результатов, bullet-списки |

Дополнительно: cookie-баннер, модальное окно записи, мобильная адаптация.

## Стек

- React 18 + TypeScript
- Vite 5
- CSS Modules

## Структура проекта

```
src/
├── components/
│   ├── Hero/              # Экран 1
│   ├── ProgramSection/    # Экран 2
│   ├── StatsSection/      # Экран 3
│   ├── ProgramModal/
│   └── ui/
├── data/content.ts        # Тексты, программы, URL изображений
├── hooks/                 # Карусель, live-счётчик
└── styles/variables.css   # Design tokens
```

## Локальный запуск

```bash
npm install
npm run dev
```

Сайт откроется на [http://localhost:5173](http://localhost:5173).

## Сборка

```bash
npm run build
npm run preview
```

Превью продакшн-сборки: [http://localhost:4173](http://localhost:4173).

## Деплой на GitHub Pages

В репозитории уже есть workflow `.github/workflows/deploy.yml`. После пуша в ветку `main` сайт публикуется автоматически.

**Однократно в настройках репозитория на GitHub:**

1. `Settings` → `Pages`
2. `Build and deployment` → Source: **GitHub Actions**

**Адрес сайта:**

`https://<ваш-username>.github.io/<имя-репозитория>/`

Параметр `base` для сборки подставляется автоматически из имени репозитория через переменную `VITE_BASE`.

## Инструмент и время

- **Инструмент:** Cursor
- **Время:** _указать при сдаче тестового_
