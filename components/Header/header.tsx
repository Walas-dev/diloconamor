'use client';
import React, { useState, useEffect, useLayoutEffect, useRef } from 'react';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import Button from '../Ui/Button';

interface NavItem { id: number; name: string; ref: string; icon: React.ReactNode; }

const nav: NavItem[] = [
  { id: 1, name: 'inicio', ref: '#inicio', icon: (
      <>
        <path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"/>
        <path d="M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
      </>
  )},
  { id: 2, name: 'servicios', ref: '#servicios', icon: (
      <>
        <path d="M12 7v14"/>
        <path d="M20 11v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-8"/>
        <path d="M7.5 7a1 1 0 0 1 0-5A4.8 8 0 0 1 12 7a4.8 8 0 0 1 4.5-5 1 1 0 0 1 0 5"/>
        <rect x="3" y="7" width="18" height="4" rx="1"/>
      </>
  )},
  { id: 3, name: 'ubicación', ref: '#ubicacion', icon: (
      <>
        <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"/>
        <circle cx="12" cy="10" r="3"/>
      </>
  )},
  { id: 4, name: 'contacto', ref: '#contacto', icon: (
        <path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384"/>
  )},
];

const Nav = ({ active, m }: { active: string; m: boolean }) => {
  const containerRef = useRef<HTMLElement>(null)
  const linkRefs = useRef<Record<string, HTMLAnchorElement | null>>({})
  const [pill, setPill] = useState({ left: 0, top: 0, width: 0, height: 0 })

  useLayoutEffect(() => {
    const el = linkRefs.current[active]
    const container = containerRef.current
    if (el && container) {
      const elRect = el.getBoundingClientRect()
      const containerRect = container.getBoundingClientRect()
      setPill({
        left: elRect.left - containerRect.left,
        top: elRect.top - containerRect.top,
        width: elRect.width,
        height: elRect.height,
      })
    }
  }, [active, m])

  return (
    <nav ref={containerRef} className="relative flex flex-col md:flex-row items-center bg-white/95 shadow-md backdrop-blur-md rounded-4xl">
      <div
        className="absolute bg-primary/90 rounded-full transition-all duration-400 ease-out z-0"
        style={{ left: pill.left, top: pill.top, width: pill.width, height: pill.height }}
      />
      {nav.map((n, i) => {
        const isActive = active === n.ref
        return (
          <a
            key={n.id}
            ref={(el) => { linkRefs.current[n.ref] = el }}
            href={n.ref}
            aria-current={isActive ? 'page' : undefined}
            style={{ transitionDelay: m ? `${i * 60}ms` : '0ms' }}
            className={`relative z-10 group flex gap-3 items-center justify-center text-center font-medium transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-pink-300 rounded-full px-4 md:px-8 py-4 w-full lg:w-auto ${isActive ? 'text-white font-bold' : 'text-pink-300 hover:text-pink-500 hover:bg-primary/10'}`}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={`transition-colors duration-300 ${isActive ? 'text-white' : 'text-pink-500/25 group-hover:text-pink-500'}`}>
              {n.icon}
            </svg>
            {n.name}
          </a>
        )
      })}
    </nav>
  )
}

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('#hero');
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => { setMenuOpen(false); }, [pathname]);

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
    <div className="fixed top-0 left-0 w-full z-50 px-4 pt-3 pb-2 pointer-events-none animate-fade-down">
      <div className="flex justify-between items-center gap-3">

        <header className="pointer-events-auto hidden md:grid relative items-center backdrop-blur-md rounded-full transition-all duration-500 ease-in-out w-max min-w-60">
          <Nav active={activeSection} m={menuOpen} />
        </header>

        <div className="pointer-events-auto md:hidden flex items-center gap-2 bg-white/95 backdrop-blur-md rounded-full shadow-md border border-gray-100 pl-2 pr-2 py-2">
          <div className="relative h-9 w-9 rounded-full overflow-hidden ring-2 ring-white shadow-sm shrink-0">
            <Image src="/logo.png" alt="Dilo con amor" fill className="object-cover" />
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
          <Button url="" name="whatsapp" variant="primary">WhatsApp</Button>
        </div>
      </div>

      <div className={`pointer-events-auto md:hidden overflow-hidden transition-all duration-400 ease-out ${menuOpen ? 'max-h-80 opacity-100 mt-1' : 'max-h-0 opacity-0 mt-0'}`}>
        <Nav active={activeSection} m={menuOpen} />
      </div>
    </div>
  );
}