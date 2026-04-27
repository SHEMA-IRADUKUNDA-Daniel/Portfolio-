export interface ButtonProps {
  text: string;
  onClick?: () => void;
  className?: string;
  href?: string;
  target?: string;
  variant?: string;
  download?: boolean;
}
export interface ContactIconsProps {
  className?: string;
  onClick?: () => void;
}

export type Project = {
  title: string;
  category: string;
  description: string;
  image: string;
  tag: string[];
  accent: string[];
  live?: string;
  github?: string;
  figma?: string;
};
