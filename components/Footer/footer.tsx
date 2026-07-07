'use client'
import React from 'react'
import Redes from './redes'
import Copyright from './copyright'

function Footer () {
  return (
    <section className='w-full px-8 py-4'>
        <Redes/>
        <Copyright/>
    </section>
  )
}

export default Footer
