
import "../styles/AboutUs.css"

const AbautUs = () =>{


return(

    <body className="bg__main">
    {/* <!-- About--> */}
        <section className="page-section" id="about">
        <div className="breadcrumbs" data-aos="fade-in">
          <div className="container">
            <h2>Nosotros</h2>
            <p>Conoce un poco más sobre nuestro legado, estaremos contigo en los momentos mas difíciles.</p>
          </div>
        </div>

            <div className="container conter1">
                
                <ul className="timeline">
                    <li>
                        <div className="timeline-image"><img className="rounded-circle img-fluid" src="/img/AboutUs/about/2.jpg" alt="..." /></div>
                        <div className="timeline-panel">
                            <div className="timeline-heading">
                            <h4>Más de 6 años</h4>
                            <h4 className="subheading">¿Quienes somos?</h4>
                            </div>
                            <div className="timeline-body">
                                <p className="text-muted">Somos una Cooperativa con más de 6 años de experiencia dedicada a prestar servicios funerarios, pre exequiales y todo lo relacionado con pompas fúnebres a personas naturales y jurídicas en todo el territorio Colombiano.</p>
                                <br></br>
                                <p className="text-muted">Apoyamos, orientamos y acompañamos a las familias ante el infortunado fallecimiento de su ser querido, proporcionando un trato digno, respetuoso y profesional frente a una situación de duelo. Gracias a nuestra ayuda logramos tranquilidad y satisfacción en el manejo de esta dificil situación.</p>
                            </div>
                        </div>
                    </li>
                    <li className="timeline-inverted">
                        <div className="timeline-image"><img className="rounded-circle img-fluid" src="/img/AboutUs/about/1.jpg" alt="..." /></div>
                        <div className="timeline-panel">
                            <div className="timeline-heading">
                                <h4>¿Por qué somos</h4>
                                <h4 className="subheading">la mejor opción?</h4>
                            </div>
                            <div className="timeline-body"><p className="text-muted">FUNERAL HOME, es una Cooperativa con más de 6 años logrando fortalecer nuestros servicios con la red aliados estratégicos más grande del país y que nos permite tener una cobertura nacional, hoy contamos con más de 2.000 funerarias a nivel Nacional con las principales funerarias del pais, además, nuestro equipo de trabajo esta contormado por un selecto grupo de profesionales para facil-tar la mejor orientación, asesoria y servicio de calidad.</p></div>
                        </div>
                    </li>
                    <li>
                        <div className="timeline-image"><img className="rounded-circle img-fluid" src="/img/AboutUs/about/3.jpg" alt="..." /></div>
                        <div className="timeline-panel">
                            <div className="timeline-heading">
                                <h4>Año 2025</h4>
                                <h4 className="subheading">Nos proyectamos</h4>
                            </div>
                            <div className="timeline-body"><p className="text-muted">FUNERAL HOME, estará en el año 2025 dentro de las mejores y mas sobresalientes I empresas del sector de previsión exequial, con cubrimiento nacional, manteniendo excelentes estándares de calidad en nuestros servicios. garantizado por los procedimientos y orientación correcta, ofreciendo la tranquilidad y preferencia de las familias colombianas.</p></div>
                        </div>
                    </li>
                    
                    <li className="timeline-inverted">
                        <div className="timeline-image">
                            <h4>
                                Se parte
                                <br />
                                de nuestra
                                <br />
                                história!
                            </h4>
                        </div>
                    </li>
                </ul>
            </div>
        </section>

    {/* <!-- Clients--> */}
        <div className="py-5">
            <div className="container conter2">
               
                <div className="row align-items-center">
                    <div className="col-md-2 col-sm-6 my-3">
                        <a href="#!"><img className="img-fluid img-brand d-block mx-auto" src="./img/AboutUs/logos/olivos.png" alt="..." aria-label="Microsoft Logo" /></a>
                    </div>
                    <div className="col-md-3 col-sm-6 my-3">
                        <a href="#!"><img className="img-fluid img-brand d-block mx-auto" src="./img/AboutUs/logos/la_ascension.png" alt="..." aria-label="Facebook Logo" /></a>
                    </div>
                    <div className="col-md-2 col-sm-6 my-3">
                        <a href="#!"><img className="img-fluid img-brand d-block mx-auto" src="./img/AboutUs/logos/recordar.svg" alt="..." aria-label="IBM Logo" /></a>
                    </div>
                    <div className="col-md-2 col-sm-6 my-3">
                        <a href="#!"><img className="img-fluid img-brand3 d-block mx-auto" src="./img/AboutUs/logos/jardines_apogeo.png" alt="..." aria-label="Google Logo" /></a>
                    </div>
                    <div className="col-md-3 col-sm-6 my-3">
                        <a href="#!"><img className="img-fluid img-brand2 d-block mx-auto" src="./img/AboutUs/logos/gaviria.png" alt="..." aria-label="Google Logo" /></a>
                    </div>
                    <div className="col-md-3 col-sm-6 my-3">
                        <a href="#!"><img className="img-fluid img-brand2 d-block mx-auto" src="./img/AboutUs/logos/la_esperanza.png" alt="..." aria-label="Google Logo" /></a>
                    </div>
                    <div className="col-md-3 col-sm-6 my-3">
                        <a href="#!"><img className="img-fluid img-brand1 d-block mx-auto" src="./img/AboutUs/logos/sura.png" alt="..." aria-label="Google Logo" /></a>
                    </div>
                    <div className="col-md-3 col-sm-6 my-3">
                        <a href="#!"><img className="img-fluid img-brand1 d-block mx-auto" src="./img/AboutUs/logos/seguros_estado.png" alt="..." aria-label="Google Logo" /></a>
                    </div>
                    <div className="col-md-3 col-sm-6 my-3">
                        <a href="#!"><img className="img-fluid img-brand1 d-block mx-auto" src="./img/AboutUs/logos/san_vicente.png" alt="..." aria-label="Google Logo" /></a>
                    </div>

                </div>
            </div>
        </div>
    </body>
)
}

export default AbautUs