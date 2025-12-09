import React from 'react'
import { socialImgs } from '../constants'

const Footer = () => {
  return (
    <footer className='footer'>
        <div className='footer-container'>
            <div className='flex flex-col justify-center'>
                <a href="/">Back to top ⬆️</a>
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