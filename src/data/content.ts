export const IMAGES = {
  heroDesktop:
    'https://fs-thb02.getcourse.ru/fileservice/file/thumbnail/h/8d7e3aa384b597937b9504925ead6325.png/s/s1200x/a/934144/sc/68',
  heroMobile:
    'https://fs-thb01.getcourse.ru/fileservice/file/thumbnail/h/0ab22056b482979979f9203c2db57c87.png/s/s1200x/a/934144/sc/17',
} as const

/** Фото результатов учениц — карусель в блоке «580 000 девушек» */
export const BEFORE_AFTER_SLIDES = [
  {
    id: 'result-1',
    image:
      'https://fs.getcourse.ru/fileservice/file/download/a/934144/sc/237/h/2aa546db37de028e6ac3fb2786aa9452.jpg',
    alt: 'Результат ученицы — трансформация 1',
  },
  {
    id: 'result-2',
    image:
      'https://fs.getcourse.ru/fileservice/file/download/a/934144/sc/85/h/690560420ca42fc7a6b317093fb821fb.jpg',
    alt: 'Результат ученицы — трансформация 2',
  },
  {
    id: 'result-3',
    image:
      'https://fs.getcourse.ru/fileservice/file/download/a/934144/sc/374/h/1b12583b7b7cd12c7ab0b2bdee77c7ef.jpg',
    alt: 'Результат ученицы — трансформация 3',
  },
  {
    id: 'result-4',
    image:
      'https://fs.getcourse.ru/fileservice/file/download/a/934144/sc/73/h/804bfecb9a8fcf5ec3f16ffaf93cda1e.jpg',
    alt: 'Результат ученицы — трансформация 4',
  },
] as const

export interface Program {
  id: string
  badge: string
  badgeType: 'flagship' | 'marathon' | 'course'
  title: string
  description: string
  image: string
}

export const PROGRAMS: Program[] = [
  {
    id: 'metod',
    badge: 'ФЛАГМАН',
    badgeType: 'flagship',
    title: 'Метод Усмановой',
    description:
      'Освоите технику и втянетесь в регулярные тренировки — без травм и через силу. Первая программа, с которой начинают все ученицы Кати.',
    image:
      'https://fs.getcourse.ru/fileservice/file/download/a/934144/sc/464/h/fc6a33bedad095fcceb9b228a0e26ba1.png',
  },
  {
    id: 'stroynost',
    badge: 'Марафон',
    badgeType: 'marathon',
    title: 'Стройности',
    description:
      'Первый видимый результат за 21 день — уходит первый жир, появляется тонус и лёгкость. Для тех, кто стартует с нуля.',
    image:
      'https://fs.getcourse.ru/fileservice/file/download/a/934144/sc/484/h/52d50659565480b991c629cf6453df15.png',
  },
  {
    id: 'popa1',
    badge: 'Марафон',
    badgeType: 'marathon',
    title: 'Упругая попа 1.0',
    description:
      'Первый объём и подтянутость ягодиц — с собственным весом. Для тех, кто впервые целенаправленно работает над попой.',
    image:
      'https://fs.getcourse.ru/fileservice/file/download/a/934144/sc/361/h/4b1c3f214dc7c40c17af48103ddcbdeb.png',
  },
  {
    id: 'popa2',
    badge: 'Марафон',
    badgeType: 'marathon',
    title: 'Упругая попа 2.0',
    description:
      'Плотные, упругие ягодицы — следующий уровень после 1.0. С резинкой и утяжелителями, для подготовленных.',
    image:
      'https://fs.getcourse.ru/fileservice/file/download/a/934144/sc/250/h/fde40eec42d735ce23b758f6b8282d08.png',
  },
  {
    id: 'zhivot',
    badge: 'Марафон',
    badgeType: 'marathon',
    title: 'Плоский живот',
    description:
      'Убрать вываливающийся живот, который не уходит даже после похудения. Тренировки на глубокие мышцы пресса.',
    image:
      'https://fs.getcourse.ru/fileservice/file/download/a/934144/sc/327/h/d4d3841aca9fb0bd2b9666c23d217cfa.png',
  },
  {
    id: 'zhir',
    badge: 'Курс',
    badgeType: 'course',
    title: 'Жиросжигающий',
    description:
      'Сжечь жир и проявить рельеф — за 6 недель. Для тех, кто уже тренировался: с гантелями, по схеме интервальных нагрузок.',
    image:
      'https://fs.getcourse.ru/fileservice/file/download/a/934144/sc/492/h/8a1d46cc0fd29eca5de6eee284ff79ab.png',
  },
]

export const STATS_BULLETS = [
  'Первые видимые результаты уже на 6-й день тренировок',
  'В среднем ученицы теряют 4–6 кг за первый месяц',
]

export const BASE_ONLINE_COUNT = 3696
