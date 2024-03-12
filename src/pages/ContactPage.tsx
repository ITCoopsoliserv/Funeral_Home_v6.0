import "../components/Contact"
import Contact from '../components/Contact';
import Meta from "../components/Meta";

const ContactPage = () => {
    return (
        <body>
            <Meta title={'Contacto'} />
            <div>
                <header>
                    <h1></h1>
                </header>
            </div>
            <div>
                <Contact />
            </div>
        </body>
    );
};

export default ContactPage;