import React from 'react'
import { socialImgs } from '../constants'

const Footer = () => {

    const scrollToTop = () => {
        window.scrollTo({
        top: 0,
        behavior: "smooth", // smooth scrolling
        });
    };


  return (
    <footer className='footer'>
        <div className='footer-container'>
            <div className='flex flex-col justify-center'>
                <a className="cta-button" onClick={scrollToTop}>Back to top ⬆️</a>
            </div>
            <div className='socials'>
                {socialImgs.map((img) => (
                    <a href={img.url} key={img.url} className='icon' target='_blank'>
                        <img src={img.imgPath} />
                    </a>
                ))}
            </div>
        </div>
    </footer>
  )
}

export default Footer