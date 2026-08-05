'use client';
import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import Nav, {nav} from './nav';
import { usePathname } from 'next/navigation';
import Button from '../Ui/Button';
import { whatsappLinks } from '@/ts/redes'

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('#hero');
  const pathname = usePathname();
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => { setMenuOpen(false); }, [pathname]);

  useEffect(() => {
    if (!menuOpen) return;

    const handleClickOutside = (e: MouseEvent | TouchEvent) => {
      if (rootRef.current && !rootRef.current.contains(e.target as Node)) {
        setMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('touchstart', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('touchstart', handleClickOutside);
    };
  }, [menuOpen]);

  useEffect(() => {
    const sections = nav
      .map((n) => document.querySelector(n.ref))
      .filter((el): el is Element => !!el);

    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(`#${entry.target.id}`);
          }
        });
      },
      { rootMargin: '-45% 0px -45% 0px', threshold: 0 }
    );

    sections.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={rootRef} className="fixed top-0 left-0 w-full z-50 px-4 pt-3 pb-2 pointer-events-none animate-fade-down">
      <div className="flex justify-between items-center gap-3">

        <header className="pointer-events-auto hidden lg:grid relative items-center backdrop-blur-md rounded-full transition-all duration-500 ease-in-out w-max min-w-60">
          <Nav active={activeSection} m={menuOpen} />
        </header>

        <div className="pointer-events-auto lg:hidden flex items-center gap-2 bg-white backdrop-blur-md rounded-full shadow-md border border-gray-100 pl-2 pr-2 py-2">
          <div className="relative h-9 w-9 rounded-full overflow-hidden ring-2 ring-white shadow-sm shrink-0">
            <Image src="/logo.png" alt="Dilo con amor" fill className="object-cover" sizes="36px" priority />
          </div>
          <button
            type='button'
            onClick={() => setMenuOpen((v) => !v)}
            aria-expanded={menuOpen}
            aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
            className='relative h-9 w-9 rounded-full bg-rose/15 flex items-center justify-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-pink-300'
          >
            <span className={`absolute w-1/2 h-0.5 bg-rose rounded-full transition-all duration-300 ease-in-out ${menuOpen ? 'rotate-45 translate-y-0' : '-translate-y-1.5'}`} />
            <span className={`absolute w-1/2 h-0.5 bg-rose rounded-full transition-all duration-300 ease-in-out ${menuOpen ? 'opacity-0 -translate-x-4' : 'opacity-100 translate-x-0'}`} />
            <span className={`absolute w-1/2 h-0.5 bg-rose rounded-full transition-all duration-300 ease-in-out ${menuOpen ? '-rotate-45 translate-y-0' : 'translate-y-1.5'}`} />
          </button>
        </div>

        <div className={`pointer-events-auto transition-all duration-300 ${isScrolled ? 'opacity-0 scale-95 pointer-events-none' : 'opacity-100 scale-100'}`}>
          <Button url={ whatsappLinks.general } name="whatsapp" variant="primary">WhatsApp</Button>
        </div>
      </div>

      <div className={`pointer-events-auto lg:hidden overflow-hidden transition-all duration-400 ease-out ${menuOpen ? 'max-h-80 opacity-100 mt-1' : 'max-h-0 opacity-0 mt-0'}`}>
        <Nav
           active={activeSection}
           m={menuOpen}
           onLinkClick={() => setMenuOpen(false)}
        />
      </div>
    </div>
  );
}