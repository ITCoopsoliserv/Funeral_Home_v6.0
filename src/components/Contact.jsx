import React from "react";
import "../styles/Contact.css"
import emailjs from '@emailjs/browser';


const Contact = () => {
  const refForm = React.useRef();
  
  

  const sendEmail = (event) => {
    event.preventDefault();

    const serviceId = "service_84mtioi"
    const templateId = "template_01blx92"
    const apiKey = "mIp1sBwXYGAhqlhX6"

    emailjs.sendForm(serviceId, templateId, refForm.current, {
        publicKey: apiKey
      })
      .then(
        () => {
          window.location.replace('http://localhost:3000/contactAlert')
        
        },
        (error) => {
          console.log('FAILED...', error.text);
          
        },
      );
  };



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
             
                <form action="" ref={refForm} onSubmit={sendEmail} role="form" className="php-email-form">
                  <div className="row">
                    <div className="col-md-6 form-group">
                      <input type="text" name="to_name" className="form-control" id="name" placeholder="Nombre" required />
                    </div>
                    <div className="col-md-6 form-group mt-3 mt-md-0">
                      <input type="email" className="form-control" name="email" id="email" placeholder="Correo electrónico" required /></div>
                  </div>
                  <div className="form-group mt-3">
                    <input type="text" className="form-control" name="asunto" id="subject" placeholder="Asunto" required /></div>
                  <div className="form-group mt-3">
                    <textarea className="form-control" name="message" rows={5} placeholder="Mensaje" required></textarea>
                  </div>

                  <div className="form-check" style={{padding:"17px", fontSize: "14px"}}>
                    <input type="checkbox" className="form-check-input" style={{height: "15px"}} id="exampleCheck1" required/>
                    <label className="form-check-label" for="exampleCheck1">Autorizo a Funeral Home el tratamiento de mis datos personales conforme a las finalidades establecidas en la base de datos de Clientes.</label>
                  </div>

                  <div className="text-center" ><button  type="submit">Enviar mensaje</button></div>
                
                
                </form>
           
              </div>

            </div>

          </div>
        </section>

      </main>

    </body>
  )
}

export default Contact

