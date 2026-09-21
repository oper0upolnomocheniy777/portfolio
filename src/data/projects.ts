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
    title: 'Сайт о родном городе',
    description:
      'Многостраничный сайт про Таганрог: история, достопримечательности, маршруты. Семантическая вёрстка, адаптивность, базовый JavaScript.',
    image: '/projects/city-site.png',
    tech: ['HTML', 'CSS', 'JavaScript'],
  },
  {
    id: 3,
    title: 'Прототип музыкального сервиса',
    description:
      'Дизайн-концепт сайта для поиска музыки. Спроектированы экраны поиска, плейлиста и карточек исполнителей.',
    image: '/projects/music-app.png',
    tech: ['Photoshop', 'UI/UX'],
  },
];
