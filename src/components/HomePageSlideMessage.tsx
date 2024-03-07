import React from 'react';
import '../styles/HomePageSlideMessage.css';

function HomePageSlideMessage() {

    const images = [
        { src: './img/homeSaliderMessage/Logo-funeral-verde.svg', tittle: 'Contigo', paragraph: 'En los momentos difíciles' },
        { src: './img/homeSaliderMessage/colombia.svg', tittle: 'Cubrimiento', paragraph: 'a nivel nacional' },
        { src: './img/homeSaliderMessage/AbrazoSVG.svg', tittle: 'Apoyamos', paragraph: 'Orientamos & acompañamos' },
        { src: './img/homeSaliderMessage/Offer.svg', tittle: 'Somos', paragraph: 'La mejor opción' },
    ];


    return (
        <div className='wrap__section py-5'>
            {images.map((image, index) => (
                <div key={image.src} className='d-flex align-items-center justify-content-center'>
                    <img
                        src={image.src}
                        className='slideImg'
                    />
                    <div className='wrap__icon'>
                        <h4>{image.tittle}</h4>
                        <p>{image.paragraph}</p>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default HomePageSlideMessage
