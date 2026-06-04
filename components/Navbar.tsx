'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import CTAButton from './CTAButton';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/prayer', label: 'Prayer' },
  { href: '/reach', label: 'Reach Out' },
  { href: '/questions', label: 'Questions' },
  { href: '/about', label: 'About' },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const closeMobile = (e?: any) => setMobileOpen(false);

  return (
    <nav className="sticky top-0 z-50 bg-[#0a0a0a]/95 backdrop-blur border-b border-[#2a2a2a]">
      <div className="max-w-6xl mx-auto px-5 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group" onClick={closeMobile}>
          <div className="w-6 h-6 bg-[#FF5A6D] flex items-center justify-center">
            <span className="text-[#0a0a0a] text-[13px] font-black tracking-[-1px]">GG</span>
          </div>
          <span className="font-black text-2xl tracking-[-1.5px] text-white group-hover:text-[#FF5A6D] transition-colors">
            GOSPELGUERRILLA
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8 text-sm font-medium">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="hover:text-[#FF5A6D] transition-colors"
            >
              {link.label}
            </Link>
          ))}
          <CTAButton href="/prayer" variant="primary" className="text-sm px-6 min-h-[44px]">
            NEED PRAYER
          </CTAButton>
        </div>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden text-white p-2 -mr-2"
          aria-label="Toggle menu"
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`md:hidden fixed inset-0 top-16 bg-[#0a0a0a] mobile-menu ${mobileOpen ? 'open' : 'closed'}`}
      >
        <div className="px-5 py-8 flex flex-col gap-6 text-lg font-medium">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={closeMobile}
              className="py-1 border-b border-[#2a2a2a] hover:text-[#FF5A6D] transition-colors"
            >
              {link.label}
            </Link>
          ))}

          <div className="pt-4 flex flex-col gap-3">
            <CTAButton href="/prayer" variant="primary" onClick={closeMobile}>
              I NEED PRAYER NOW
            </CTAButton>
            <CTAButton href="/questions" variant="secondary" onClick={closeMobile}>
              I HAVE QUESTIONS
            </CTAButton>
          </div>

          <p className="text-xs text-[#a3a3a3] pt-6">
            No fluff. No performance.<br />Just the raw Gospel.
          </p>
        </div>
      </div>
    </nav>
  );
}
