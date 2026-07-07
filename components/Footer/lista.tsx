import Link from 'next/link';
import React from 'react'

interface List {
    id:number;
    name:string;
    ref?:string;
    p:string;
}

const lista = ({id, name, ref, p}:List) => {
  return (
    <>
        <Link
            key={id}
            href={ref || '#'}
            rel="noopener noreferrer"
            aria-label={`Visitar nuestro perfil en ${name || 'redes sociales'}`}
            className="relative flex items-center justify-center group hover:scale-110  transition-transform duration-300 rounded-full w-12 h-12"
        >
            <svg 
                className="text-primary/50 group-hover:text-primary transition-colors duration-300 p-2 "
                viewBox="0 0 640 640"
            >
                <path  fill="currentColor" d={p}/>
            </svg>
        </Link>
    </>
  )
}

export default lista
