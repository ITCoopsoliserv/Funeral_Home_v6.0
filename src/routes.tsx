// src/routes.tsx
import { Route, Routes } from 'react-router-dom';
import './styles/Home.css';

import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import ContactPage from './pages/ContactPage';
import ServicesPage from './pages/ServicesPage';

const AppRoutes = () => {
    return (
        <div className='bg__main'>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<HomePage />} />
                    <Route path="/contact" element={<ContactPage />} />
                    <Route path="/services" element={<ServicesPage />} />
                </Route>
            </Routes>
        </div>
    );
};

export default AppRoutes;