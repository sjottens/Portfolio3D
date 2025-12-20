import React from 'react'
import TitleHeader from '../components/TitleHeader'
import { testimonials } from '../constants'
import GlowCard from '../components/GlowCard'

const Testimonials = () => {
  return (
    <section id='testimonials' className='flex-center section-padding'>
        <div className='w-full h-full md:px-10 px-5'>
            <TitleHeader 
                title="a few more projects I've worked on"
                sub="👌 Project Highlights"
            />

            <div className='lg:columns-3 md:columns-2 columns-1 mt-16'>
                {testimonials.map(({ imgPath, name, urlName, mentions, review, stack }) => (
                    <GlowCard card={{review, name, stack }} key={name}>
                        <div className='mb-2'>
                            <img src={imgPath} alt={name} />
                        </div>
                        <div>
                            <p ><a href={mentions} target="_blank" alt={name} className='font-bold relative z-99'>{urlName}</a></p>
                        </div>
                    </GlowCard>
                ))}
            </div>
        </div>
    </section>
  )
}

export default Testimonials