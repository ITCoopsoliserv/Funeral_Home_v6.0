import '../styles/Footer.css';

const FooterMain = () => {
    return (

        <div className='footer__copyright py-3'>
            <div className='container-xxl'>
                <p className='text-center mb-0 text-white'>
                    &copy; {new Date().getFullYear()} Powered by Developer´s GRAVITI
                </p>
            </div>
        </div>

    );
};

export default FooterMain;