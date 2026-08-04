'use client'
import CardMap from './cardMap'
import dynamic from "next/dynamic";
import Delivery from './delivery';
const Mapa = dynamic(() => import("./mapa"), {
  ssr: false,
  loading: () => <div className="h-100 w-full flex items-center justify-center bg-gray-100 rounded-2xl animate-pulse text-gray-500">Cargando mapa...</div>,
});

const Ubicacion = () => {
    const latMargarita = 11.0100;
    const lngMargarita = -64.1000;

    return (
        <section id="ubicacion" className=' scroll-mt-3 flex flex-col w-full gap-3 mx-auto px-4 md:px-8 lg:px-12 xl:px-16 py-12 md:py-16 lg:py-20 bg-cream'>
            <div className="mb-3 md:mb-6 text-center md:text-left">
               
                <h3 className="text-4xl md:text-5xl lg:text-6xl text-ink font-extrabold font-display leading-tight mb-4">
                    Estamos{' '}
                    <span className="font-script font-extrabold text-5xl text-primary md:text-6xl lg:text-7xl">
                        donde tú estás
                    </span>
                </h3>
                <p className='text-ink/70 font-body text-lg max-w-2xl leading-relaxed mx-auto md:mx-0'>
                    Llevamos alegría y detalles a mano a cada rincón de nuestra hermosa Isla de Margarita.
                </p>
            </div>

            <div className='flex flex-col lg:flex-row gap-3 items-stretch'>
                <div className="w-full lg:w-2/3 flex flex-col">
                    <Mapa lat={latMargarita} lng={lngMargarita} zoomMobile={9} zoomDesktop={10.5} />
                </div>
                <div className='flex flex-col gap-3 w-full lg:w-1/3'>
                    <CardMap/>
                </div>
            </div>

            <Delivery/>
        </section>
    )
}

export default Ubicacion;