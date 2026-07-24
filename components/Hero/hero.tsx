import React from 'react'
import Content from './content'
import IMGpannel from './IMGpannel'

const Hero = () => {
  return (
    <section className='relative flex items-center justify-center xl:justify-between w-full min-h-screen overflow-hidden px-4 md:px-8 lg:px-12 xl:px-16 py-12 md:py-16 lg:py-20'>
      
      <div className="relative z-10 w-full xl:w-1/2 flex justify-center xl:justify-start xl:pt-15">
        <Content />
      </div>

      <div className="absolute inset-0 z-0 xl:relative xl:w-1/2 xl:flex xl:justify-end xl:pt-15 pointer-events-none xl:pointer-events-auto">
        <IMGpannel />
      </div>

      
    </section>
  )
}

export default Hero