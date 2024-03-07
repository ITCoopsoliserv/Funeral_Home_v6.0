import '../styles/HomePageSlideSection.css';

function HomeSlideSectionA() {
    return (
        <div className="slide d-flex justify-content-evenly align-items-center">
            <div className="image__container">
                <img src="./img/homeSliderSection/SectionA.avif" alt="Funeral home somos todos" />
            </div>
            <div className="slide__info col-5">
                <h2>Somos la mejor opción</h2>
                <p>Funeral Home, cuenta con mas de 6 años de experiencia, logrando fortalecer nuestros servicios con una importante red de aliados estratégicos, que nos permite tener una cobertura nacional. Hoy contamos con mas de 2000 funerarias. </p>
            </div>
        </div>
    )
}

export default HomeSlideSectionA
