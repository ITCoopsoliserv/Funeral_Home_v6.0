import React, { useEffect, useState } from 'react';
import '../styles/Home.css';

function HomePageSlider() {
    const [currentIndex, setCurrentIndex] = useState(0);

    const images = [
        { src: './img/homepageslider/HomePageSlider1.avif', caption: 'TU APOYO CUANDO MAS LO NECESITAS', link: '', className: 'dark', newAtrr: 'text-dark' },
        { src: './img/homepageslider/HomePageSlider2.avif', caption: '¿Quienes es Funeral Home?', link: '...', className: 'light', newAtrr: 'text-light' },
        { src: './img/homepageslider/HomePageSlider3.avif', caption: 'Contigo en los momentos dificiles', link: '2', className: 'dark', newAtrr: 'text-dark' },
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 5000); // 4 minutos

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="HomePage__sliders">
            <div className='carrousel'>
                {images.map((image, index) => (
                    <div key={image.src} className="slide">

                        <img
                            key={image.src}
                            src={image.src}
                            className={image.className}
                            style={{ display: index === currentIndex ? 'block' : 'none' }}
                        />

                        {index === currentIndex && (
                            <div className={`caption ${image.newAtrr}`} >
                                <p>{image.caption}</p>
                                {image.link.length > 0 && (
                                    <a href={image.link}>Ver más...</a>
                                )}
                            </div>
                        )}

                    </div>
                ))}
            </div>
            <div className="dot">
                {images.map((_, index) => (
                    <button
                        key={index}
                        className={index === currentIndex ? 'active' : ''}
                        onClick={() => setCurrentIndex(index)}
                    />
                ))}
            </div>

        </div>
    )
}

export default HomePageSlider