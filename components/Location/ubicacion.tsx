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
        <section className='w-full mx-auto px-4 md:px-8 lg:px-12 xl:px-16 pb-12 md:pb-16 lg:pb-20'>
            <div className="mb-8 md:mb-12">
                <h3 className="text-4xl md:text-5xl lg:text-6xl text-gray-900 font-medium font-serif leading-tight mb-4">
                    Estamos{' '}
                    <span className="text-maron font-script font-bold text-5xl md:text-6xl lg:text-7xl">
                        donde tú estás
                    </span>
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