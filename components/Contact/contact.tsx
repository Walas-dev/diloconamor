import Contenido from './contenido'
import Imagen from './imagen'


const Contacto = () => {
  return (
    <section className='relative flex flex-col-reverse lg:flex-row bg-[#FAF8F5] min-h-screen items-center py-12 lg:py-16 w-full overflow-hidden gap-12 lg:gap-0'>
        <Contenido/>
        <Imagen/>
    </section>
  )
}

export default Contacto
