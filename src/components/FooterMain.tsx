import { Link } from 'react-router-dom';
import '../styles/Footer.css';

const FooterMain = () => {
    return (

        <footer className='py-3'>
            <div className='container-xxl'>
                <div className='row footer-main'>

                    <div className='col-lg-3 footer-section'>
                        <h5 className=''>Contáctanos</h5>
                        <div className='d-flex flex-column footer-link'>
                            <Link to='/contact' className='mt-2'>Servicio al cliente</Link>
                            <a href='https://wa.me/573504504073' className='mt-2'>Chatea con nosotros</a>
                            <a href='mailto:' className='mt-2'>servicioalcliente@funeralhome.com</a>
                        </div>
                    </div>

                    <div className='col-lg-3 footer-section'>
                        <h5 className=''>Enlaces de interes</h5>
                        <div className='d-flex flex-column footer-link'>
                            <Link className='mt-2' to='/' >Home</Link>
                            <Link className='mt-2' to='/'>Servicios funerarios</Link>
                            <Link className='mt-2' to='/'>Nosotros</Link>

                        </div>
                    </div>

                    <div className='col-lg-3 footer-section'>
                        <h5 className=''>Información</h5>
                        <div className='d-flex flex-column footer-link'>
                            <Link className='mt-2' to='/'>Términos y condiciones</Link>
                            <Link className='mt-2' to='/'>Política de privacidad</Link>
                            <Link className='mt-2' to='/'>Responsabilidad social</Link>
                        </div>
                    </div>

                    <div className='col-lg-3 d-flex flex-column align-item-center justify-content-center'>
                        <h5 className='text-center mt-3'>Redes sociales</h5>
                        <div className='d-flex align-items-center justify-content-center '>
                            <a className='footer-social' href='/' ><img src='/img/footer/Whatsapp.svg' alt='social icons' /></a>
                            <a className='footer-social' href='/' ><img src='/img/footer/Facebook.svg' alt='social icons' /></a>
                            <a className='footer-social' href='/' ><img src='/img/footer/Instagram.svg' alt='social icons' /></a>
                        </div>
                    </div>

                </div>
            </div>
        </footer>

    );
};

export default FooterMain;