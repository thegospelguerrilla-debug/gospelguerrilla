import Link from 'next/link';
import { Instagram } from 'lucide-react';

const INSTAGRAM_URL = 'https://www.instagram.com/thegospelguerrilla/';

export default function Footer() {
  return (
    <footer className="bg-[#111111] border-t border-[#2a2a2a] py-12 text-sm">
      <div className="max-w-6xl mx-auto px-5 grid grid-cols-1 md:grid-cols-3 gap-y-10">
        {/* Brand */}
        <div>
          <div className="flex items-center gap-2 mb-3">
            <div className="w-5 h-5 bg-[#FF5A6D]" />
            <span className="font-black tracking-[-1px] text-lg">GOSPELGUERRILLA</span>
          </div>
          <p className="text-[#a3a3a3] max-w-[240px] mb-4">
            Raw Gospel. No performance. No fluff.<br />For the broken and the skeptic.
          </p>
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-[#a3a3a3] hover:text-[#FF5A6D] transition-colors"
            aria-label="Follow GospelGuerrilla on Instagram"
          >
            <Instagram size={18} strokeWidth={2.25} />
            <span>@thegospelguerrilla</span>
          </a>
        </div>

        {/* Quick Links */}
        <div className="flex flex-col md:flex-row gap-y-2 gap-x-10 text-[#a3a3a3]">
          <div className="flex flex-col gap-y-1.5">
            <Link href="/prayer" className="hover:text-white transition-colors">Prayer Requests</Link>
            <Link href="/reach" className="hover:text-white transition-colors">Reach Out</Link>
            <Link href="/questions" className="hover:text-white transition-colors">Questions</Link>
            <Link href="/about" className="hover:text-white transition-colors">About Us</Link>
            <Link href="/#gospel" className="hover:text-white transition-colors">The Gospel</Link>
          </div>
        </div>

        {/* Legal / Small Print */}
        <div className="text-[#737373] text-xs md:text-right space-y-2">
          <p>
            This site is not affiliated with any denomination or religious organization.
          </p>
          <p>
            Form submissions powered by{' '}
            <a href="https://formspree.io" target="_blank" rel="noopener noreferrer" className="underline hover:text-[#a3a3a3]">
              Formspree
            </a>.
          </p>
          <p className="pt-2">
            © {new Date().getFullYear()} GospelGuerrilla. The truth doesn’t need branding.
          </p>
        </div>
      </div>
    </footer>
  );
}
