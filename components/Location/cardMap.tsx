import React from 'react'
import { card, horarios } from '@/ts/location'

const Content = ({ id }: { id: number }) => {
    return id === 1 ? (
        <div className="mt-4">
            <ul className="py-1.5 flex flex-col gap-2">
                {horarios.map((h) => (
                    <li key={h.id} className="flex justify-between border-b border-white/20 pb-2 last:border-0">
                        <p className="font-body font-light opacity-90">{h.dias}</p>
                        <span className="font-display font-semibold">{h.hora}</span>
                    </li>
                ))}
            </ul>
        </div>
    ) : (
        <div className="mt-4">
            <p className="text-ink/70 font-body text-sm leading-relaxed text-justify py-1.5">
                Cada entrega es un momento sagrado para nosotros. No solo llevamos un regalo, llevamos tus sentimientos.
            </p>
            <div className="flex gap-2 mt-4">
                <div className="bg-linear-to-r from-lavender via-rose to-butter w-24 h-1.5 rounded-full" />
            </div>
        </div>
    );
}

const CardMap = () => {
    return (
        <>
            {card.map((c) => (
                <section key={c.id} className={`group flex-1 p-6 md:p-8 rounded-[2.5rem] shadow-sm transition-all duration-500 hover:-translate-y-1 hover:shadow-xl ${c.c}`}>
                    <div className='flex gap-3 items-center'>
                        <svg className={`transition-colors duration-300 w-7 h-7 ${c.id === 1 ? 'text-white' : 'text-rose group-hover:text-sky'}`} viewBox="0 0 512 512">
                            <path fill="currentColor" d={c.p} />
                        </svg>
                        <h3 className='text-2xl font-display font-bold'>
                            {c.title}
                        </h3>
                    </div>
                    <Content id={c.id} />
                </section>
            ))}
        </>
    )
}

export default CardMap;