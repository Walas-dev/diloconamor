import React from 'react'
import ContentTop from './contentTop'
import ContentBottom from './contentBottom'
import IMGpannel from './IMGpannel'
import HeroBackdrop from './heroBackdrop'

const Hero = () => {
    return (
        <section id='inicio' className="scroll-mt-24 relative flex flex-col xl:grid xl:grid-cols-2 items-center justify-center xl:justify-between w-full min-h-fit xl:min-h-screen overflow-hidden bg-cream px-4 md:px-8 lg:px-12 xl:px-16 py-12 md:py-16 lg:py-17 gap-8 xl:gap-0">

            <HeroBackdrop />

            <div className="relative z-10 xl:col-start-1 w-full flex justify-center xl:justify-start pt-10 xl:pt-5">
                <ContentTop />
            </div>

            <div className="relative xl:absolute xl:inset-y-0 xl:right-0 xl:w-1/2 z-0 w-full xl:pt-22.5">
                <IMGpannel />
            </div>

            <div className="relative z-10 xl:col-start-1 w-full flex justify-center xl:justify-start">
                <ContentBottom />
            </div>

        </section>
    )
}

export default Hero