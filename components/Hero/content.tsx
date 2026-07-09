import React from 'react'
import Button from '../Ui/Button'

const botones = [
    {id: 1, title: 'Ver Catálogo', ref: '#catalogo'},
    {id: 2, title: 'Personalizar Regalo', ref: '#contacto'}
]

const Content = () => {
  return (
    <div className="flex flex-col items-start w-full max-w-2xl z-10">
        <h2 className='text-6xl md:text-7xl lg:text-[6rem] text-gray-900 font-medium font-serif leading-[0.9] tracking-tight mb-6 flex flex-col'>
            Regalos que cuentan 
            <span className='text-maron font-script font-bold text-7xl md:text-8xl lg:text-[7rem] -rotate-2'>
                tu propia historia
            </span>
        </h2>
        <p className='text-gray-600 text-lg md:text-xl leading-relaxed mb-10'>
            Creamos detalles personalizados con la ternura y dedicación que tus momentos especiales merecen. Globos, desayunos y sorpresas hechas a mano.
        </p>
        <div className='flex flex-col sm:flex-row gap-4 w-full sm:w-auto'>
            {botones.map((b) => (
                <Button
                    key={b.id}
                    name={b.title}
                    url={b.ref}
                    variant={b.id === 1 ? 'primary' : 'secondary'}
                >
                    {b.title}
                </Button>
            ))}
        </div>

    </div>
  )
}

export default Content
