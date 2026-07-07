import Image from 'next/image'
import React from 'react'

const nav = [
  {id:1, name:'inicio', ref:'',p:''},
  {id:2, name:'servicios', ref:'',p:''},
  {id:3, name:'ubicación', ref:'',p:''},
  {id:4, name:'contacto', ref:'',p:''},
]

function Header () {
  return (
    <header className='flex justify-between w-full px-10 py-4'>
      <div className='flex gap-3 items-center'>
        <Image
            src="/logo.png"
            alt="logo"
            width={60}
            height={60}
            priority
          />
          <h3 className='text-2xl font-bold'>Dilo con amor</h3>
      </div>
      <nav className='flex gap-8 items-center'>
        {nav.map((n)=>(
          <div key={n.id} className=' cursor-pointer'>
            <h3>{n.name}</h3>
          </div>
        ))}
      </nav>
      <button type="button" className='bg-rose-500 px-4 rounded-2xl cursor-pointer'>WhatsApp</button>
    </header>
  )
}

export default Header
