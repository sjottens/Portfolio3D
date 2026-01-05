import { useEffect, useState } from "react";
import { navLinks } from "../constants/index.js";
import ReactGA from "react-ga4";

const handleButtonClick = () => {
    console.log("Contact Me button clicked");
  ReactGA.event({
    category: 'User',
    action: 'Contact btn Clicked',
    label: 'Contact Me Button'
  });
};

const NavBar = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const isScrolled = window.scrollY > 10;
            setScrolled(true);
        }
        window.addEventListener('scroll', handleScroll);
        
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

  return (
    <header className={`navbar ${scrolled ? 'scrolled' : 'not-scrolled'}`}>
        <div className="inner">
            <a className='logo' href='#hero'>
                Rogier | Ottens
            </a>

            <nav className='desktop'>
                <ul>
                    {navLinks.map(({ link, name }) => (
                        <li key={name} className="group">
                            <a href={link}>
                                <span>{name}</span>
                                <span className="underline" />
                            </a>
                        </li>
                    ))}
                </ul>
            </nav>

            <a className='contact-btn group' href='#contact' onClick={handleButtonClick}>
                <div className='inner'>
                    <span>Contact Me</span>
                </div>
            </a>
        </div>
    </header>
  )
}

export default NavBar