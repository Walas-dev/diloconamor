'use client';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import Button from '../Ui/Button';

interface NavItem { id: number; name: string; ref: string; }

const nav: NavItem[] = [
  { id: 1, name: 'inicio', ref: '#' },
  { id: 2, name: 'servicios', ref: '#servicios' },
  { id: 3, name: 'ubicación', ref: '#ubicacion' },
  { id: 4, name: 'contacto', ref: '#contacto' },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => { setMenuOpen(false); }, [pathname]);

  return (
    <div className="fixed top-0 left-0 w-full z-50 px-4 pt-3 pb-2 pointer-events-none animate-fade-down">
      <div className="flex justify-between items-center gap-3">

        <header className="pointer-events-auto hidden md:grid relative items-center bg-white/95 backdrop-blur-md rounded-full shadow-md border border-gray-100 transition-all duration-500 ease-in-out w-max min-w-60">
          <nav className="flex items-center">
            {nav.map((n) => {
              const isActive = pathname === n.ref;
              return (
                <a key={n.id} href={n.ref} aria-current={isActive ? 'page' : undefined}
                  className={`flex gap-3 items-center justify-center text-center font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-pink-300 rounded-full px-4 md:px-8 py-4 ${isActive ? 'text-white font-bold bg-primary/90' : 'text-pink-300 hover:text-pink-500 hover:bg-primary/20'}`}>
                  {n.name}
                </a>
              );
            })}
          </nav>
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
                <span className={`absolute w-1/2 h-0.5 bg-rose rounded-full transition-all duration-300 ease-in-out ${
                    menuOpen ? 'rotate-45 translate-y-0' : '-translate-y-1.5'
                }`} />
                
                <span className={`absolute w-1/2 h-0.5 bg-rose rounded-full transition-all duration-300 ease-in-out ${
                    menuOpen ? 'opacity-0 -translate-x-4' : 'opacity-100 translate-x-0'
                }`} />
                
                <span className={`absolute w-1/2 h-0.5 bg-rose rounded-full transition-all duration-300 ease-in-out ${
                    menuOpen ? '-rotate-45 translate-y-0' : 'translate-y-1.5'
                }`} />
            </button>
        </div>

        <div className={`pointer-events-auto transition-all duration-300 ${isScrolled ? 'opacity-0 scale-95 pointer-events-none' : 'opacity-100 scale-100'}`}>
          <Button url="" name="whatsapp" variant="primary">WhatsApp</Button>
        </div>
      </div>

      <div className={`pointer-events-auto md:hidden overflow-hidden transition-all duration-400 ease-out ${menuOpen ? 'max-h-80 opacity-100 mt-3' : 'max-h-0 opacity-0 mt-0'}`}>
        <nav className="flex flex-col bg-white/95 backdrop-blur-md rounded-3xl shadow-md border border-gray-100">
          {nav.map((n, i) => {
            const isActive = pathname === n.ref;
            return (
              <a
                key={n.id}
                href={n.ref}
                style={{ transitionDelay: menuOpen ? `${i * 60}ms` : '0ms' }}
                className={`px-4 py-3 rounded-3xl font-medium text-center transition-all duration-300 ${menuOpen ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-2'} ${isActive ? 'bg-primary/90 text-white font-bold' : 'text-ink hover:bg-primary/10'}`}
              >
                {n.name}
              </a>
            );
          })}
          
        </nav>
        
      </div>
    </div>

    
  );
}

/**
 * <nav className="flex flex-col bg-white/95 backdrop-blur-md rounded-3xl shadow-md border border-gray-100">
          {nav.map((n, i) => {
            const isActive = pathname === n.ref;
            return (
              <a
                key={n.id}
                href={n.ref}
                style={{ transitionDelay: menuOpen ? `${i * 60}ms` : '0ms' }}
                className={`px-4 py-3 rounded-3xl font-medium text-center transition-all duration-300 ${menuOpen ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-2'} ${isActive ? 'bg-primary/90 text-white font-bold' : 'text-ink hover:bg-primary/10'}`}
              >
                {n.name}
              </a>
            );
          })}
          
        </nav>
 * 
 */