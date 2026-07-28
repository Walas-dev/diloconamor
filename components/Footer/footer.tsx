'use client'
import React from 'react'
import Redes from './redes'
import Copyright from './copyright'
import FooterBackdrop from './footerBackdrop'
function Footer () {
  return (
    <section className='relative w-full px-16 py-4 bg-cream text-primary'>
        <FooterBackdrop/>
        <Redes/>
        <Copyright/>
    </section>
  )
}

export default Footer
