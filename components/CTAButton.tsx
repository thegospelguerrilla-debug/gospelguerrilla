'use client';

import Link from 'next/link';
import { ReactNode } from 'react';

type CTAButtonProps = {
  variant?: 'primary' | 'secondary' | 'ghost';
  href?: string;
  onClick?: () => void;
  children: ReactNode;
  className?: string;
  type?: 'button' | 'submit';
};

export default function CTAButton({
  variant = 'primary',
  href,
  onClick,
  children,
  className = '',
  type = 'button',
}: CTAButtonProps) {
  const base = 'btn';
  const styles = {
    primary: 'btn-primary',
    secondary: 'btn-secondary',
    ghost: 'btn-ghost',
  }[variant];

  const combined = `${base} ${styles} ${className}`.trim();

  if (href) {
    return (
      <Link href={href} className={combined} onClick={onClick}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={combined}>
      {children}
    </button>
  );
}
