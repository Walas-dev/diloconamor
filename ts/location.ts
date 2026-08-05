export const card = [
    { id: 1, title: 'Horarios', c: 'bg-rose text-white', p: 'M464 256a208 208 0 1 1 -416 0 208 208 0 1 1 416 0zM0 256a256 256 0 1 0 512 0 256 256 0 1 0 -512 0zM232 120l0 136c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2 280 120c0-13.3-10.7-24-24-24s-24 10.7-24 24z' },
    { id: 2, title: 'Nuestra Promesa', c: 'bg-white border border-rose/10 text-ink', p: 'M378.9 80c-27.3 0-53 13.1-69 35.2l-34.4 47.6c-4.5 6.2-11.7 9.9-19.4 9.9s-14.9-3.7-19.4-9.9l-34.4-47.6c-16-22.1-41.7-35.2-69-35.2-47 0-85.1 38.1-85.1 85.1 0 49.9 32 98.4 68.1 142.3 41.1 50 91.4 94 125.9 120.3 3.2 2.4 7.9 4.2 14 4.2s10.8-1.8 14-4.2c34.5-26.3 84.8-70.4 125.9-120.3 36.2-43.9 68.1-92.4 68.1-142.3 0-47-38.1-85.1-85.1-85.1zM271 87.1c25-34.6 65.2-55.1 107.9-55.1 73.5 0 133.1 59.6 133.1 133.1 0 68.6-42.9 128.9-79.1 172.8-44.1 53.6-97.3 100.1-133.8 127.9-12.3 9.4-27.5 14.1-43.1 14.1s-30.8-4.7-43.1-14.1C176.4 438 123.2 391.5 79.1 338 42.9 294.1 0 233.7 0 165.1 0 91.6 59.6 32 133.1 32 175.8 32 216 52.5 241 87.1l15 20.7 15-20.7z' }
]

export const horarios = [
    { id: 1, dias: 'Lunes - Viernes', hora: '8:00AM - 6:00PM' },
    { id: 2, dias: 'Sábados', hora: '9:00AM - 2:00PM' },
    { id: 3, dias: 'Domingos', hora: 'Entregas Programadas' },
]

export const cob = [
  { municipio: 'Maneiro', puntos: 'Pampatar, Playa el Ángel, Jorge Coll', color: 'rose' as const },
  { municipio: 'Mariño', puntos: 'Porlamar, Av. 4 de Mayo, Santiago Mariño', color: 'sky' as const },
  { municipio: 'Díaz y García', puntos: 'Villa Rosa, El Valle, San Juan (Consultar)', color: 'butter' as const },
]

export const dotColor: Record<'rose' | 'sky' | 'butter', string> = {
  rose: 'bg-rose',
  sky: 'bg-sky',
  butter: 'bg-butter',
}

export interface MapaProps {
  lat: number;
  lng: number;
  zoomMobile?: number;
  zoomDesktop?: number;
}