'use client'
import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import { ServicesBackdrop } from './servicesBackdrop' 
import { services, colorClasses, titleClasses, STACK_SIZE, EXIT_MS } from '@/ts/service'

const PhotoStack = ({ images }: { images: string[] }) => {
    const [stack, setStack] = useState<{ id: number; src: string }[]>(() =>
        Array.from({ length: STACK_SIZE }).map((_, i) => ({ id: i, src: images[i % images.length] }))
    )
    const [enteringId, setEnteringId] = useState<number | null>(null)
    const nextId = useRef(STACK_SIZE)

    useEffect(() => {
        const interval = setInterval(() => {
            const id = nextId.current
            const newItem = { id, src: images[id % images.length] }
            nextId.current += 1

            setStack((prev) => [newItem, ...prev])
            setEnteringId(id)

            requestAnimationFrame(() => {
                requestAnimationFrame(() => setEnteringId(null))
            })

            setTimeout(() => {
                setStack((prev) => prev.slice(0, STACK_SIZE))
            }, EXIT_MS)
        }, 3500)

        return () => clearInterval(interval)
    }, [images])

    return (
        <div className="relative w-full aspect-4/3 sm:aspect-square md:aspect-4/3">
            {stack.map((item, pos) => {
                const isEntering = item.id === enteringId
                const translateY = isEntering ? 140 : pos * 16
                const scale = isEntering ? 0.9 : 1 - pos * 0.06
                const rotate = isEntering ? -6 : (pos === 0 ? 0 : (pos % 2 === 0 ? 4 : -4))
                const opacity = pos < STACK_SIZE ? 1 : 0

                return (
                    <div
                        key={item.id}
                        className="absolute inset-4 md:inset-3 rounded-3xl overflow-hidden border-4 border-white shadow-xl transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]"
                        style={{
                            zIndex: STACK_SIZE - pos,
                            transform: `translateY(${translateY}px) scale(${scale}) rotate(${rotate}deg)`,
                            opacity,
                        }}
                    >
                        <Image src={item.src} alt="Muestra de nuestro servicio" fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover" />
                    </div>
                )
            })}
        </div>
    )
}
const Services = () => {
  return (
    <section id="servicios" className="scroll-mt-6 relative w-full px-4 md:px-8 lg:px-12 xl:px-16 py-16 md:py-14 overflow-hidden bg-cream">

      <ServicesBackdrop />

      <div className="relative z-10 max-w-7xl mx-auto">
        <h2 className="font-display font-extrabold text-4xl sm:text-5xl md:text-6xl text-ink text-center mb-16 text-balance px-4">
          Nuestros <span className="font-script text-primary text-5xl sm:text-6xl md:text-7xl">servicios</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 xl:gap-10">
          {services.map((s) => (
            <div
              key={s.id}
              className={`flex flex-col rounded-[2.5rem] overflow-hidden border-2 shadow-sm hover:shadow-xl transition-shadow duration-300 bg-white ${colorClasses[s.color]}`}
            >
              <div className="relative w-full p-2">
                <PhotoStack images={s.images} />
              </div>

              <div className="p-6 md:p-8 flex flex-col grow">
                <h3 className={`font-display font-bold text-2xl md:text-3xl mb-3 tracking-tight ${titleClasses[s.color]}`}>
                  {s.title}
                </h3>
                <p className="text-ink/70 leading-relaxed font-body">
                  {s.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services