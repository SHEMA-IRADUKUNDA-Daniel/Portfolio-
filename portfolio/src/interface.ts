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

export interface ProjectCardProps {
  project: {
    title: string;
    image: string;
    category: string;
    description: string;
    figma?: string;
    github?: string;
    live?: string;
    tag: string[];
    accent: string[];
  };
}
export interface BlogCardProps {
  blog: {
    title: string;
    image: string;
    category: string;
    date: string;
    accent: string;
  };
  onReadMore: () => void;
}

export interface TestimonialCardProps {
  testimonial: {
    name: string;
    role: string;
    feedback: string;
    rating: number;
  };
}
