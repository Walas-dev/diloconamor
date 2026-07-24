import React from 'react'
import Button from '../Ui/Button'

const botones = [
    {id: 1, title: 'Ver Catálogo', ref: '#catalogo'},
    {id: 2, title: 'Personalizar Regalo', ref: '#contacto'}
]

const Content = () => {
  return (
    <div className="flex flex-col items-center text-center xl:items-start xl:text-left w-full 2xl:max-w-full z-10">
        
        <h2 className='text-5xl md:text-6xl xl:text-[4rem] 2xl:text-[5.5rem] text-gray-900 font-medium font-serif leading-[1.1] tracking-tight mb-4 flex flex-col'>
            Regalos que cuentan 
            <span className='text-primary font-script font-bold text-6xl md:text-7xl xl:text-[5.5rem] 2xl:text-[6rem] -rotate-2 mt-2'>
                tu propia historia
            </span>
        </h2>
        
        <p className='text-gray-800 xl:text-gray-600 text-base md:text-lg xl:text-xl leading-relaxed py-5 max-w-lg font-medium xl:font-normal'>
            Creamos detalles personalizados con la ternura y dedicación que tus momentos especiales merecen. Globos, desayunos y sorpresas hechas a mano.
        </p>
        
        <div className='flex flex-col sm:flex-row gap-4 w-full sm:w-auto mt-4'>
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