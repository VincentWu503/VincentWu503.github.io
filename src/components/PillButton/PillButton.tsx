import type { ButtonHTMLAttributes } from 'react';
import './PillButton.css';

interface PillButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  /** "logo" renders the transparent icon-only style */
  variant?: 'default' | 'logo';
}

export default function PillButton({
  variant = 'default',
  className,
  type = 'button',
  children,
  ...rest
}: PillButtonProps) {
  const classes = ['pill', variant === 'logo' ? 'logo' : '', className ?? '']
    .filter(Boolean)
    .join(' ');

  return (
    <button type={type} className={classes} {...rest}>
      {children}
    </button>
  );
}
