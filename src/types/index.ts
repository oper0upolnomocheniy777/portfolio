export interface Skill {
  id: number;
  name: string;
  level: number;
  category: 'frontend' | 'backend' | 'tools';
}

export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tech: string[];
  codeLink?: string;
  demoLink?: string;
}

export interface NavItem {
  id: string;
  label: string;
}