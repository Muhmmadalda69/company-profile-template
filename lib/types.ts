export interface NavLink {
  label: string;
  href: string;
}

export interface Service {
  slug: string;
  title: string;
  description: string;
  longDescription: string;
  icon: IconName;
  features: string[];
}

export interface Stat {
  value: number;
  suffix: string;
  label: string;
}

export interface Testimonial {
  quote: string;
  name: string;
  role: string;
  company: string;
}

export interface TeamMember {
  name: string;
  role: string;
  bio: string;
}

export interface Milestone {
  year: string;
  title: string;
  description: string;
}

export interface CompanyValue {
  title: string;
  description: string;
  icon: IconName;
}

export interface ProcessStep {
  step: string;
  title: string;
  description: string;
}

export interface Faq {
  question: string;
  answer: string;
}

export type IconName =
  | "code"
  | "cloud"
  | "shield"
  | "chart"
  | "mobile"
  | "cog"
  | "spark"
  | "users"
  | "target"
  | "heart"
  | "globe"
  | "rocket";

export interface ContactFormState {
  status: "idle" | "success" | "error";
  message: string;
  errors?: Partial<Record<"name" | "email" | "subject" | "message", string>>;
}
