import Marquee from "react-fast-marquee";
import '../styles/HomePageSlideServices.css';

function HomeSlideServices() {

    const images = [
        { src: './img/HomeSliderServices/church.svg', tittle: 'Ceremonia de exequias' },
        { src: './img/HomeSliderServices/bx-book-open.svg', tittle: 'Trámites legales' },
        { src: './img/HomeSliderServices/tanaxo.svg', tittle: 'Tanatopraxia' },
        { src: './img/HomeSliderServices/church.svg', tittle: 'Salas de velación' },
        { src: './img/HomeSliderServices/church.svg', tittle: 'Cofre funebre' },
        { src: './img/HomeSliderServices/church.svg', tittle: 'Arreglo floral' },
        { src: './img/HomeSliderServices/bx-bus-school.svg', tittle: 'Vehiculo hasta 20 acompañantes' },
        { src: './img/HomeSliderServices/bx-bible.svg', tittle: 'Libro de novedades, firma y denario' },
        { src: './img/HomeSliderServices/bxs-car-wash.svg', tittle: 'Traslado de cuerpo' },
        { src: './img/HomeSliderServices/church.svg', tittle: 'Serie de carteles' },
        { src: './img/HomeSliderServices/church.svg', tittle: 'Cinta impresa' },
        { src: './img/HomeSliderServices/bxs-car.svg', tittle: 'Carroza funebre' },

    ];


    return (
        <div className='py-4'>
            <div className='container-xxxl'>
                <div className='row'>
                    <div className='col-12'>
                        <div className='card__wripper'>
                            <Marquee >
                                <div className='d-flex card__wripper_maq'>
                                    {images.map((image, index) => (
                                        <div key={image.src} className='marquee__div d-flex align-items-center flex-column justify-content-center '>
                                            <img src={image.src} alt='Funeral Home Servicios'></img>
                                            <span>{image.tittle}</span>
                                        </div>

                                    ))}
                                </div>
                            </Marquee>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomeSlideServices
