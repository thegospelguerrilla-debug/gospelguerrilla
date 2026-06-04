'use client';

import Link from 'next/link';
import { ReactNode } from 'react';

type CTAButtonProps = {
  variant?: 'primary' | 'secondary' | 'ghost';
  href?: string;
  onClick?: any;
  children: ReactNode;
  className?: string;
  type?: 'button' | 'submit';
  disabled?: boolean;
};

export default function CTAButton({
  variant = 'primary',
  href,
  onClick,
  children,
  className = '',
  type = 'button',
  disabled = false,
}: CTAButtonProps) {
  const base = 'btn';
  const variantStyle = variant || 'primary';
  const styles = {
    primary: 'btn-primary',
    secondary: 'btn-secondary',
    ghost: 'btn-ghost',
  }[variantStyle];

  const combined = `${base} ${styles} ${className}`.trim();

  if (href) {
    return (
      <Link href={href} className={combined} onClick={onClick}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={combined} disabled={disabled}>
      {children}
    </button>
  );
}
