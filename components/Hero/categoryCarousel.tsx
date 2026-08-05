'use client'
import { useEffect, useState } from 'react'
import { cat, cardStyles, iconStyles, dotStyles } from '@/ts/hero';

const CategoryCarousel = () => {
    const [index, setIndex] = useState(0)
    const [visible, setVisible] = useState(true)

    const goTo = (next: number) => {
        setVisible(false)
        setTimeout(() => {
            setIndex(next)
            setVisible(true)
        }, 250)
    }

    useEffect(() => {
        const interval = setInterval(() => {
            goTo((index + 1) % cat.length)
        }, 3500)
        return () => clearInterval(interval)
    }, [index])

    const c = cat[index]

    return (
        <div className="w-full max-w-lg mx-auto xl:mx-0 mt-6">
            <div
                className={`text-ink flex rounded-4xl p-4 gap-3 items-center border-2 transition-all duration-300 ease-out ${cardStyles[c.color]} ${visible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-3'}`}
            >
                <svg className={`flex items-center justify-center p-4 size-16 rounded-2xl text-ink shrink-0 ${iconStyles[c.color]}`} viewBox="0 0 640 640">
                    <path fill="currentColor" d={c.d} />
                </svg>
                <div className="text-left">
                    <h3 className="font-display font-bold text-2xl text-ink">{c.title}</h3>
                    <p className="font-body text-ink/70">{c.p}</p>
                </div>
            </div>

            <div className="flex gap-2 justify-center xl:justify-start mt-3">
                {cat.map((item, i) => (
                    <button
                        key={item.id}
                        onClick={() => goTo(i)}
                        aria-label={`Ver ${item.title}`}
                        className={`h-2 rounded-full transition-all duration-300 ${i === index ? `w-6 ${dotStyles[item.color]}` : 'w-2 bg-ink/20'}`}
                    />
                ))}
            </div>
        </div>
    )
}

export default CategoryCarousel