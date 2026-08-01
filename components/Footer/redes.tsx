import Lista from './lista'
import { redes } from '@/ts/footer'

const Redes = () => {
  return (
    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8 pb-10 border-b border-white/10">
      <div>
        <h3 className="font-script text-4xl md:text-5xl text-rose">Dilo con amor</h3>
        <p className="font-body text-ink mt-2 max-w-xs">
          Regalos y detalles hechos a mano, con cariño, desde Isla de Margarita.
        </p>
      </div>

      <ul className="flex gap-3 justify-center">
        {redes.map((r) => (
          <Lista key={r.id} id={r.id} name={r.name} ref={r.ref} p={r.p} />
        ))}
      </ul>
    </div>
  )
}

export default Redes