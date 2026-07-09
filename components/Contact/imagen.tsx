import Image from 'next/image'

const Imagen = () => {
  return (
    <div className='relative w-[calc(100%-2rem)] lg:w-1/2 h-[50vh] lg:h-screen overflow-hidden 
        rounded-4xl mx-auto lg:mx-0
        lg:rounded-none lg:rounded-tl-[20rem] lg:rounded-tr-[10rem] lg:rounded-bl-[5rem] lg:rounded-br-[20rem]'>
    <Image
        src={'/image 1.png'} 
        alt='Arreglo floral con amor'
        fill
        className='object-cover' 
    />
    </div>
  )
}

export default Imagen
