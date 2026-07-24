'use client';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import Button from '../Ui/Button';

interface NavItem {
  id: number;
  name: string;
  ref: string;
}

const nav: NavItem[] = [
  { id: 1, name: 'inicio', ref: '/' },
  { id: 2, name: 'servicios', ref: '/servicios' },
  { id: 3, name: 'ubicación', ref: '/ubicacion' },
  { id: 4, name: 'contacto', ref: '/contacto' },
];

export default function Header() {

  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full z-50 flex justify-between pt-6 pb-2 px-4 pointer-events-none">
      <header 
        className={`
          pointer-events-auto relative grid items-center justify-between bg-white/95 backdrop-blur-md 
          rounded-full shadow-md border border-gray-100 transition-all duration-500 ease-in-out
          ${isScrolled ? ' w-max min-w-[320px] md:min-w-60' : ' w-max min-w-[320px] md:min-w-60'}
        `}
      >  
        <nav className="flex items-center">
          {nav.map((n) => {
            const isActive = pathname === n.ref;
            return (
              <a 
                key={n.id} 
                href={n.ref}
                aria-current={isActive ? 'page' : undefined}
                className={`
                  flex gap-3 items-center justify-center text-center font-medium transition-all duration-300 
                  focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-pink-300 rounded-full px-4 md:px-8 py-4
                  ${isActive ? 'text-white font-bold bg-primary/90' : 'text-pink-300 hover:text-pink-500 hover:bg-primary/20'}
                `}
              >
                {n.name}
              </a>
            );
          })}
        </nav>
      </header>
      <div className={`transition-all duration-300 ${isScrolled ? 'max-h-0 opacity-0 scale-95 pointer-events-non' : 'max-h-50 opacity-100 scale-100'}`}>
        <Button url='' name='whastApp' variant='primary'>
          <h3>WhastApp</h3>
        </Button>
      </div>
    </div>
  );
}


/**
 *  <div 
          className={`
            absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 
            transition-all duration-500 ease-in-out
            ${isScrolled ? 'w-14 h-14' : 'w-24 h-24'}
          `}
        >
          <div className="relative w-full h-full bg-white rounded-full p-1 shadow-lg border border-pink-100 overflow-hidden flex items-center justify-center">
            <Image
              src="/logo.png"
              alt="Logo principal"
              fill
              priority
              className={`
                object-cover transition-transform duration-500 ease-in-out
                ${isScrolled ? 'scale-[1.8]' : 'scale-100'}
              `}
            />
          </div>
        </div>
 * 
 */