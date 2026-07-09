import Lista from './lista'
import { img } from '@/ts/footer'

const Copyright = () => {
  return (
    <section className='grid grid-rows-2 items-center justify-center'>
        <p className="text-primary font-light text-center text-xs md:text-sm text-balance">
            &copy; {new Date().getFullYear()} Dilo con amor - isla de Margarita, Venezuela. Hecho con alegría
        </p>
        <ul className='flex gap-2.5 items-center justify-center'>
            {img.map((i)=>(
                <Lista
                    key={i.id}
                    id={i.id}
                    name={i.name}
                    p={i.p}
                />
            ))}
        </ul>
    </section>
  )
}

export default Copyright
