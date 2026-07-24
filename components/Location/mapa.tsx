'use client'
import { useState, useEffect } from "react";
import { MapContainer, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";

interface MapaProps {
  lat: number;
  lng: number;
  zoomMobile?: number;
  zoomDesktop?: number;
}

const Mapa = ({ lat, lng, zoomMobile = 9.5, zoomDesktop = 10.5 }: MapaProps) => {
    const [zoom, setZoom] = useState<number | null>(null);
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 768) {
                setZoom(zoomMobile);
            } else {
                setZoom(zoomDesktop);
            }
        };

        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, [zoomMobile, zoomDesktop]);

    if (zoom === null) {
        return (
            <section className="relative w-full h-100 lg:h-full min-h-100 bg-gray-100 rounded-3xl animate-pulse flex items-center justify-center">
                <span className="text-gray-400 font-medium">Calculando coordenadas...</span>
            </section>
        );
    }

    const posicion: [number, number] = [lat, lng];
    const tileUrl = "https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png";
    const tileAttribution = '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>';

    return (
        <section className="relative w-full h-100 lg:h-full min-h-100 ">
            <MapContainer
                center={posicion}
                zoom={zoom}
                scrollWheelZoom={false}
                className="rounded-3xl shadow-sm z-0"
                style={{ height: "100%", width: "100%" }}
            >
                <TileLayer
                    attribution={tileAttribution}
                    url={tileUrl}
                />    
            </MapContainer>
            <div className="absolute bottom-4 left-4 right-4 md:right-auto z-20">
                <div className="flex items-start gap-4 p-5 bg-white/95 backdrop-blur-sm shadow-xl rounded-4xl md:rounded-[2.5rem] w-full max-w-sm border border-gray-100">
                    <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        viewBox="0 0 24 24" 
                        fill="none" 
                        stroke="currentColor" 
                        strokeWidth="2" 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        className="shrink-0 w-8 h-8 mt-1 text-rosa"
                    >
                        <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 15 4 10a8 8 0 0 1 16 0"/>
                        <circle cx="12" cy="10" r="3"/>
                    </svg>
                    <div className="flex flex-col gap-1">
                        <h3 className="text-xl md:text-2xl font-serif font-bold text-gray-900">Isla de Margarita</h3> 
                        <p className="text-sm md:text-base text-gray-600 leading-snug">
                            Cobertura total en los municipios Maneiro, Mariño y Arismendi.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Mapa;