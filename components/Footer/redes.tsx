import Lista from './lista'
import { redes } from '@/ts/footer'

const Redes = () => {
  return (
    <section className='flex justify-between'>
        <h3 className='text-3xl font-bold'>Dilo Con Amor</h3>
        <ul className='flex gap-2.5'>
            {redes.map((r)=>(
                <Lista
                    key={r.id}
                    id={r.id}
                    name={r.name}
                    ref={r.ref}
                    p={r.p}
                />
            ))}
        </ul>
        </section>
  )
}

export default Redes
