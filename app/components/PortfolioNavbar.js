'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Github, Linkedin, Mail } from 'lucide-react';

export default function PortfolioNavbar() {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY < lastScrollY || currentScrollY < 50) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 bg-white border-b border-[#e5e5e5] transition-transform duration-200 ${
        isVisible ? 'translate-y-0' : '-translate-y-full'
      }`}
    >
      <div className="max-w-3xl mx-auto px-6 h-10 sm:h-16 flex items-center justify-between">
        <Link
          href="/portfolio"
          className="text-[10px] sm:text-[14px] font-medium text-black hover:text-[#3B82F6] transition-colors duration-200"
        >
          Carlos Mejia
        </Link>

        <div className="flex items-center gap-4 sm:gap-6">
          <Link
            href="/portfolio#projects"
            className="text-[10px] sm:text-[14px] text-[#666666] hover:text-black transition-colors duration-200"
          >
            Projects
          </Link>
          <Link
            href="/portfolio#about"
            className="text-[10px] sm:text-[14px] text-[#666666] hover:text-black transition-colors duration-200"
          >
            About
          </Link>
        </div>

        <div className="flex items-center gap-3 sm:gap-4">
          <a
            href="https://github.com/camejiaf"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#666666] hover:text-black transition-colors duration-200"
            aria-label="GitHub"
          >
            <Github className="w-4 h-4 sm:w-5 sm:h-5" />
          </a>
          <a
            href="https://www.linkedin.com/in/camejiaf"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#666666] hover:text-[#3B82F6] transition-colors duration-200"
            aria-label="LinkedIn"
          >
            <Linkedin className="w-4 h-4 sm:w-5 sm:h-5" />
          </a>
          <a
            href="mailto:your.email@example.com"
            className="text-[#666666] hover:text-[#EF4444] transition-colors duration-200"
            aria-label="Email"
          >
            <Mail className="w-4 h-4 sm:w-5 sm:h-5" />
          </a>
        </div>
      </div>
    </nav>
  );
}
