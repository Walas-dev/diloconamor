import { cob, dotColor } from '@/ts/location'

const Delivery = () => {
  return (
    <section className="flex flex-col items-center justify-center w-full bg-white rounded-[2.5rem] py-5 px-6 md:px-10">
      <h3 className="font-display font-bold text-2xl md:text-3xl text-ink mb-8">
        Zona de Cobertura
      </h3>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 w-full max-w-3xl">
        {cob.map((c, index) => (
          <div key={index} className="flex flex-col items-center text-center gap-2 p-4">
            <span className={`h-2.5 w-2.5 rounded-full ${dotColor[c.color]}`} />
            <h5 className="font-body text-xs text-ink/50 uppercase tracking-wide">
              {c.municipio === 'Otros municipios' ? 'Otras Zonas' : `Zona ${index + 1}`}
            </h5>
            <h4 className="font-display font-bold text-lg text-ink">{c.municipio}</h4>
            <p className="font-body text-sm text-rose/70 leading-relaxed">{c.puntos}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Delivery