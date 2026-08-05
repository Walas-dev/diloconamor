import Image from 'next/image'

const Imagen = () => {
  return (
    <div className="relative w-full lg:w-1/2 flex justify-center items-center py-8 lg:py-0">

      <div aria-hidden className="absolute -z-10 -top-6 -right-2 h-48 w-48 sm:h-64 sm:w-64 lg:h-80 lg:w-80 rounded-full bg-lavender/25 blur-2xl" />
      <div aria-hidden className="absolute -z-10 bottom-4 left-2 h-36 w-36 sm:h-48 sm:w-48 lg:h-64 lg:w-64 rounded-full bg-butter/25 blur-2xl" />

      <div className="absolute w-[80%] max-w-sm lg:w-[85%] lg:max-w-none aspect-4/5 lg:aspect-auto lg:h-[70vh] rotate-6 translate-x-4 translate-y-4 rounded-4xl overflow-hidden border-4 border-white shadow-lg opacity-90">
        <Image src="/image 1.png" alt="" fill className="object-cover" sizes="(max-width: 1024px) 80vw, 40vw"/>
      </div>

      <div className="relative w-[85%] max-w-sm lg:w-[75%] lg:max-w-none -rotate-2">
        <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-16 sm:w-20 h-6 sm:h-7 bg-butter/70 -rotate-3 shadow-sm z-20" />

        <div className="relative bg-white p-2.5 sm:p-3 pb-5 sm:pb-6 rounded-[1.75rem] shadow-xl">
          <div className="relative w-full aspect-4/5 lg:aspect-auto lg:h-[62vh] overflow-hidden rounded-[1.25rem]">
            <Image
              src="/image 1.png"
              alt="Arreglo floral con amor"
              fill
              sizes="(max-width: 1024px) 90vw, 45vw"
              className="object-cover"
            />
          </div>
        </div>

        <div className="absolute -bottom-6 -left-6 h-16 w-16 sm:h-20 sm:w-20 rounded-full ring-4 ring-white overflow-hidden shadow-lg rotate-6 bg-white">
          <Image src="/logo.png" alt="Dilo con amor" fill className="object-cover" sizes="(max-width: 640px) 64px, 80px"/>
        </div>
      </div>
    </div>
  )
}

export default Imagen