import type { ReactNode } from 'react';
import './Section.css';

interface SectionProps {
  id: string;
  title?: string;
  children: ReactNode;
}

export default function Section({ id, title, children }: SectionProps) {
  return (
    <section id={id} className="content">
      <div className="section-container">
        {title && <h1 className="decorated-title">{title}</h1>}
        {children}
      </div>
    </section>
  );
}
