import React from 'react'
import TitleHeader from '../components/TitleHeader.jsx';
import { expCards } from '../constants/index.js';
import GlowCard from '../components/GlowCard.jsx';

const ExperienceSection = () => {
  return (
    <section id="experience" className='w-full md:mt-40 mt-20 section-padding xl:px-0'>
        <div className='w-full h-full md:px-20 px-5'>
            <TitleHeader 
                title="Professional Work Experience" 
                sub="💼 My Career Overview" 
            />
            <div className='mmt-32 relative'>
                {expCards.map((card) => (
                    <div key={card.title} className='exp-card-wrapper'>
                        <div className='xl:w-2/6'>
                            <GlowCard card={card}>
                                <div>
                                    <img src={card.imgPath} alt={card.title} />
                                </div>
                            </GlowCard>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </section>
  )
}

export default ExperienceSection