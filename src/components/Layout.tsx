import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import Whatsapp from '../components/Whatsapp'

const Layout = () => {
    return (
        <div>
            <Header />
            <Outlet />
            <Whatsapp/>
            <Footer />
        </div>
    );
};

export default Layout;