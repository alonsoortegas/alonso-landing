import { ReactNode } from 'react';

interface LinkCardProps {
  icon: ReactNode;
  title: string;
  href: string;
  external?: boolean;
}

export default function LinkCard({ icon, title, href, external = true }: LinkCardProps) {
  return (
    <a
      href={href}
      target={external ? '_blank' : '_self'}
      rel={external ? 'noopener noreferrer' : undefined}
      className="flex items-center gap-4 w-full px-6 py-4 bg-white/80 backdrop-blur-sm border border-primary/15 rounded-xl hover:border-primary/30 hover:shadow-lg hover:scale-[1.02] hover:-translate-y-0.5 active:scale-[0.98] transition-all duration-200 ease-out tap-highlight-transparent group min-h-[56px]"
      aria-label={title}
    >
      <span className="w-6 h-6 sm:w-7 sm:h-7 flex-shrink-0 flex items-center justify-center" aria-hidden="true">
        {icon}
      </span>
      <span className="text-base sm:text-lg text-accent font-medium group-hover:text-primary transition-colors">
        {title}
      </span>
    </a>
  );
}
