'use client';
import React, { useState, useLayoutEffect, useRef } from 'react';
import { NavItem } from '@/ts/header';

export const nav: NavItem[] = [
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

const Nav = ({ active, m, onLinkClick }: { active: string; m: boolean; onLinkClick?: () => void }) => {
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
            onClick={() => { onLinkClick?.() }}
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

export default Nav
