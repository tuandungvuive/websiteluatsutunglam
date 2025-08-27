import { LucideIcon } from "lucide-react";

// Blog related types
export interface BlogCategory {
  id: string;
  label: string;
  icon?: LucideIcon;
}

export interface BlogPost {
  id: string;
  category: string;
  categoryLabel: string;
  title: string;
  excerpt: string;
  author: string;
  date: string;
  readTime: string;
  image: string;
}

// Button related types
export interface ButtonData {
  text: string;
  href: string;
  variant: "primary" | "secondary";
  icon?: LucideIcon;
}

// Course related types
export interface CourseCategory {
  id: string;
  label: string;
  icon?: LucideIcon;
}

export interface Course {
  id: string;
  title: string;
  description: string;
  category: string;
  categoryLabel: string;
  instructor: string;
  duration: string;
  level?: string;
  students?: number;
  price?: string;
  image: string;
  rating?: number;
  date?: string;
  tags?: string[];
  featured?: boolean;
}

export interface CourseFeature {
  icon: LucideIcon | string;
  title: string;
  description: string;
}
