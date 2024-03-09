import { NavLink } from 'react-router-dom';
import '../styles/Header.css';
import { useEffect, useState } from 'react';

const HeaderNav = () => {

    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.pageYOffset > 300) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);


    return (
        <header id='headernav   ' className={`container-fluid ${isScrolled ? "headernav__noscroll fixed-top" : "headernav__scroll fixed-top"}`} >
            <div className='d-flex justify-content-around'>

                {/*Logo*/}
                <div className={`col-4 ${isScrolled ? 'headernav__logoscroll' : 'headernav__logo'}`} >
                    <div className='d-flex flex-column align-items-center'>
                        <img src={isScrolled ? "./img/Logo-funeral-blanco-bg.png" : "./img/Logo-funeral-verde-bg.png"} />
                        <div className='d-flex flex-column align-items-center'>
                            <span className={`${isScrolled ? 'headernav__text__logo1scroll' : 'headernav__text__logo1'}`}>FUNERAL HOME</span>
                            <span className={`${isScrolled ? 'headernav__text__logo2scroll' : 'headernav__text__logo2'}`}>TU APOYO CUANDO MAS LO NECESITAS</span>
                        </div>
                    </div>
                </div>

                {/*links*/}
                <div className='headernav__links col-5 d-flex align-items-center'>
                    <div className='container-xxl'>
                        <div className={`d-flex justify-content-around ${isScrolled ? 'headernav__linkscroll' : 'headernav__link'}`} >
                            <NavLink to="/">Home</NavLink>
                            <NavLink to="/">Servicios funerarios</NavLink>
                            <NavLink to="/">Nosotros</NavLink>
                            <NavLink to="./ContactPage">Contáctanos</NavLink>
                        </div>
                    </div>
                </div>
            </div>
            <div></div>
        </header >

    );
};

export default HeaderNav;