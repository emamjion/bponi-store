import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Container from '../components/Container';
import Footer from './Footer';

const MainLayout = () => {
    return (
        <Container>
            <Navbar/>
            <Outlet/>
            {/* <Footer/> */}
        </Container>
    );
};

export default MainLayout;