import React from "react";
import "../styles/Contact.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';



const Contact = () => {
  const [show] = useState(true);

  return (

    <body>
      {/* se importa los iconos de boostrap*/}
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css"></link>


      <main id="main">

        <div className="breadcrumbs" data-aos="fade-in">
          <div className="container">
            <h2>Contáctanos</h2>
            <p>¿Tienes alguna duda? Por favor contáctenos y nos comunicaremos lo más pronto posible.</p>
          </div>
        </div>


        <section id="contact" className="contact">
          <div data-aos="fade-up">
            <iframe style={{ border: 0, width: "100%", height: "200px" }} src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d7954.984978248079!2d-74.1171235!3d4.5048574!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses!2sco!4v1709911602916!5m2!1ses!2sco" frameBorder="0" allowFullScreen></iframe>
          </div>

          <div className="container" data-aos="fade-up">

            <div className="row mt-5">

              <div className="col-lg-4">
                <div className="info">
                  <div className="address">
                    <i className="bi bi-geo-alt"></i>

                    <h4>Dirección:</h4>
                    <p>A108 Adam Street, New York, NY 535022</p>
                  </div>

                  <div className="email">
                    <i className="bi bi-envelope"></i>
                    <h4>Correo Electrónico:</h4>
                    <p>FuneralHom@example.com</p>
                  </div>

                  <div className="phone">
                    <i className="bi bi-phone"></i>
                    <h4>Telélefono:</h4>
                    <p>589 55488 55</p>
                  </div>

                </div>

              </div>

              <div className="col-lg-8 mt-5 mt-lg-0">

              <>
                  <Alert show={show} style={{ padding: "10px" }} variant="success">
                    <Alert.Heading>Mensaje Enviado!!</Alert.Heading>
                    <p>
                      El mensaje a sido enviado correctamente, le daremos respuesta lo antes posible.
                    </p>
                    <hr />
                    <div className="d-flex justify-content-center" >
                      <Button onClick={() => window.location.replace('http://localhost:3000/ContactPage')} variant="outline-success">
                        Aceptar
                      </Button><a />
                    </div>
                  </Alert>
                </>


              </div>

            </div>

          </div>
        </section>

      </main>

    </body>
  )
}

export default Contact
