'use client'
import CardMap from './cardMap'
import dynamic from "next/dynamic";

const Mapa = dynamic(() => import("./mapa"), {
  ssr: false,
  loading: () => <div className="h-100 w-full flex items-center justify-center bg-gray-100 rounded-2xl animate-pulse text-gray-500">Cargando mapa...</div>,
});

const Ubicacion = () => {
    const latMargarita = 11.0100;
    const lngMargarita = -64.1000;
    
    return (
        <section className='py-16 px-4 md:px-8 w-full mx-auto'>
            <div className="mb-8 md:mb-12">
                <h3 className='text-maron font-serif font-bold text-4xl md:text-5xl mb-3'>
                    Estamos donde tú estás
                </h3>
                <p className='text-gray-600 font-sans text-lg max-w-2xl leading-relaxed'>
                    Llevamos alegría y detalles a mano a cada rincón de nuestra hermosa Isla de Margarita.
                </p>
            </div>
            
            <div className='flex flex-col lg:flex-row gap-6 items-stretch'>
                
                <div className="w-full lg:w-2/3 flex flex-col">
                    <Mapa lat={latMargarita} lng={lngMargarita} 
                        zoomMobile={9}
                        zoomDesktop={10.5}
                    />
                </div>
                
                <div className='flex flex-col gap-6 w-full lg:w-1/3'>
                    <CardMap/>
                </div>
                
            </div>
        </section>
    )
}

export default Ubicacion;