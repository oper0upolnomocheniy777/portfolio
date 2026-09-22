export interface SkillGroup {
  level: 'Уверенно' | 'Работала' | 'Знакома';
  items: string[];
}

export const skillGroups: SkillGroup[] = [
  {
    level: 'Уверенно',
    items: ['HTML', 'CSS', 'JavaScript', 'Git'],
  },
  {
    level: 'Работала',
    items: ['React', 'TypeScript', 'Java', 'Node.js', 'SQL'],
  },
  {
    level: 'Знакома',
    items: ['Python', 'C#', 'C++', 'Ruby', 'Photoshop', 'Figma'],
  },
];