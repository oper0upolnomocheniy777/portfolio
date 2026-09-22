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