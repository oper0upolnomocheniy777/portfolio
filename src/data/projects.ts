import type { Project } from '../types';

export const projects: Project[] = [
  {
    id: 1,
    title: 'Конструктор туров',
    description:
      'Веб-сервис для планирования путешествий: интерактивная карта, добавление точек маршрута, drag-and-drop, сохранение туров в личном кабинете.',
    image: '/projects/tour-constructor.png',
    tech: ['React', 'TypeScript', 'Node.js', 'SQLite'],
    codeLink: 'https://github.com/oper0upolnomocheniy777/tour-constructor',
  },
  {
    id: 2,
    title: 'Поиск фильмов',
    description:
      'SPA-приложение для поиска фильмов через API Кинопоиска. Авторизация, защищённые маршруты, сохранение сессии в localStorage, адаптивный интерфейс с анимациями.',
    image: '/projects/js-simple-page.png',
    tech: ['React', 'TypeScript', 'Redux Toolkit', 'SCSS', 'Webpack'],
    codeLink: 'https://github.com/oper0upolnomocheniy777/js-simple-page',
  },
];