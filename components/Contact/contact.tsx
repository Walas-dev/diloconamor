import Contenido from './contenido'
import Imagen from './imagen'

const Contacto = () => {
  return (
    <section  id="contacto" className=' scroll-mt-10 relative flex flex-col lg:flex-row bg-white/85 min-h-screen items-center px-6 md:px-8 lg:px-12 xl:px-16 py-12 md:py-16 lg:py-20 w-full overflow-hidden gap-12 lg:gap-0'>
        <Contenido/>
        <Imagen/>
    </section>
  )
}

export default Contacto