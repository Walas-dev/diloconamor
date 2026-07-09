'use client'
import React from 'react'
import Redes from './redes'
import Copyright from './copyright'

function Footer () {
  return (
    <section className='w-full px-16 py-4 bg-white text-primary'>
        <Redes/>
        <Copyright/>
    </section>
  )
}

export default Footer
