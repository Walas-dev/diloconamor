import Image from 'next/image'

interface IMGProps {
    src: string;
    alt: string;
    className: string; 
}

const IMG = ({ src, alt, className }: IMGProps) => {
    return (
        <div className={`overflow-hidden shadow-lg transition-transform duration-500 hover:scale-[1.02] ${className}`}>
            <Image
                src={src} 
                alt={alt}
                fill
                priority
                className='object-cover' 
            />
        </div>
    )
}

const IMGpannel = () => {
  return (
    <section className='w-full h-full flex flex-col xl:flex-row gap-4 xl:gap-6 xl:h-[80vh]'>
        
        <div className="absolute inset-0 bg-white/70 xl:hidden z-10 backdrop-blur-[2px]" />

        <IMG 
            src='/image 1.png'
            alt='Arreglo floral principal'
            className='absolute inset-0 z-0 xl:relative w-full h-full xl:w-1/2 xl:h-full xl:rounded-none xl:rounded-l-[15rem] xl:rounded-r-3xl'
        />

        

        <div className='w-full xl:w-1/2 flex-col gap-4 xl:gap-6 xl:h-full hidden xl:flex relative z-20'>
            
            <IMG 
                src='/image 1.png'
                alt='Detalle floral superior'
                className='relative w-full h-1/2 rounded-none rounded-tr-[10rem] rounded-tl-3xl rounded-b-3xl'
            />

            <IMG 
                src='/image 1.png'
                alt='Detalle floral inferior'
                className='relative w-full h-1/2 rounded-none rounded-br-[10rem] rounded-t-3xl rounded-bl-3xl'
            />

        </div>
    </section>
  )
}

export default IMGpannel