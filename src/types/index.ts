export interface Project {
  title: string;
  description: string;
  contributions: string[];
  techstacks: string[];
  imagePaths: string[];
  sourceCodeLink: string;
}

export interface NavLinkItem {
  id: string;
  label: string;
}

export interface ContactLink {
  id: string;
  label: string;
  icon: string;
  href?: string;
  message?: string;
}

export interface Skill {
  title: string;
  image: string;
  alt: string;
}
