
 interface Service {
  id: number
  title: string
  description: string
  images: string[]
  color: 'lavender' | 'sky' | 'butter' | 'rose'
}

export const services: Service[] = [
  { id: 1, title: 'Flores', description: 'Arreglos frescos armados a mano, para cada ocasión.', images: ['/image1.png', '/img1.png'], color: 'rose' },
  { id: 2, title: 'Globos', description: 'Composiciones con globos para decorar cualquier celebración.', images: ['/img2.png', '/image1.png'], color: 'sky' },
  { id: 3, title: 'Dulces', description: 'Cajas y mesas dulces personalizadas para cada evento.', images: ['/img3.png', '/image1.png'], color: 'butter' },
  { id: 4, title: 'Decoraciones', description: 'Ambientación completa para tu celebración especial.', images: ['/img4.png', '/image1.png'], color: 'lavender' },
  { id: 5, title: 'Toppers', description: 'Detalles personalizados que rematan cada creación.', images: ['/img1.png', '/img2.png'], color: 'rose' },
  { id: 6, title: 'Desayunos sorpresa', description: 'Bandejas y desayunos armados con cariño para comenzar el día con una sorpresa.', images: ['/img1.png', '/image1.png'], color: 'sky' },
]

export const colorClasses: Record<Service['color'], string> = {
  lavender: 'bg-lavender/10 border-lavender/30',
  sky: 'bg-sky/10 border-sky/30',
  butter: 'bg-butter/15 border-butter/40',
  rose: 'bg-rose/10 border-rose/25',
}

export const titleClasses: Record<Service['color'], string> = {
  lavender: 'text-lavender',
  sky: 'text-sky',
  butter: 'text-butter',
  rose: 'text-rose',
}

export const STACK_SIZE = 4
export const EXIT_MS = 700