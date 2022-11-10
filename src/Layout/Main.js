import React from 'react';
import { Outlet } from 'react-router-dom';
import AuthProvider from '../contexts/AuthProvider/AuthProvider';
import Footer from '../Pages/Shared/Footer/Footer';
import Header from '../Pages/Shared/Header/Header';

const Main = () => {
    return (
        <AuthProvider>
           <Header></Header> 
           <Outlet></Outlet>
           <Footer></Footer>
        </AuthProvider>
    );
};

export default Main;