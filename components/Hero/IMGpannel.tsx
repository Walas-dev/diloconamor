import Image from 'next/image'

const IMGpannel = () => {
    return (
        <section className="relative w-full flex justify-center xl:h-[75vh] xl:pr-5">

            <div className="relative w-[85%] sm:w-[70%] xl:w-full max-w-md xl:max-w-none rotate-2 xl:rotate-0 animate-scale-in [animation-delay:200ms]">

                <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-20 h-7 bg-butter/70 -rotate-3 shadow-sm z-20" />

                <div className="relative bg-white p-3 pb-6 rounded-sm shadow-xl">
                    <div className="relative w-full aspect-4/5 xl:aspect-auto xl:h-[65vh] overflow-hidden rounded-sm">
                        <Image src="/image 1.png" alt="Detalle floral" fill priority className="object-cover" />
                    </div>
                </div>

                <div className="absolute -bottom-6 -left-6 xl:-left-10 h-24 w-24 xl:h-36 xl:w-36 rounded-full ring-4 ring-white overflow-hidden shadow-lg -rotate-6 bg-white">
                    <Image src="/logo.png" alt="Dilo con amor" fill className="object-cover" />
                </div>
            </div>
        </section>
    )
}

export default IMGpannel