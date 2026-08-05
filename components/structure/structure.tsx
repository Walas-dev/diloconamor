import { card } from "@/ts/structure"

const Structure = () => {
  return (
    <section className="relative w-full px-4 md:px-8 lg:px-12 xl:px-16 py-16 md:py-24 bg-white/75 overflow-hidden">

        <div className="text-center mb-14">
            <span className="inline-block font-display font-semibold text-sm text-rose tracking-wide uppercase mb-2">
                Nuestro compromiso
            </span>
            <h2 className="font-display font-extrabold text-2xl sm:text-3xl md:text-4xl text-ink text-balance px-4">
                Por qué elegir <span className="font-script text-primary text-4xl sm:text-5xl">Dilo con amor ?</span>
            </h2>
        </div>

        <div className="relative flex flex-col md:flex-row items-center md:items-start gap-10 md:gap-6 w-full max-w-5xl mx-auto">
            <div className="hidden md:block absolute top-8 left-[16.6%] right-[16.6%] h-px bg-ink/15" />

            {card.map((c) => (
                <div key={c.id} className="relative flex flex-col items-center text-center flex-1 gap-4">
                    <div className={`relative z-10 flex items-center justify-center h-16 w-16 rounded-full ring-8 ring-cream ${c.c}`}>
                        <svg className={`w-7 h-7 ${c.iconColor}`} viewBox="0 0 640 640">
                            <path fill="currentColor" d={c.p} />
                        </svg>
                    </div>
                    <h4 className={`font-display font-bold text-xl md:text-2xl tracking-tight ${c.color}`}>
                        {c.title}
                    </h4>
                    <p className="text-ink/70 leading-relaxed text-sm max-w-55 font-body">
                        {c.text}
                    </p>
                </div>
            ))}
        </div>
    </section>
  )
}

export default Structure