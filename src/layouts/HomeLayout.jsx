import React from 'react';
import Heder from '../components/Heder';
import LatestNews from '../components/LatestNews';
import Navbar from '../components/Navbar';
import LeftNavbar from '../components/layout-components/LeftNavbar';
import RightNav from '../components/layout-components/RightNav';
import CategoryNews from '../pages/CategoryNews';
import { Outlet } from 'react-router-dom';

const HomeLayout = () => {
    return (
        <div className='font-poppins max-w-7xl	mx-auto'>

            <header>
                <Heder></Heder>
                <section className='w-11/12 mx-auto'>
                    <LatestNews></LatestNews>
                </section>

            </header>
            <nav className='w-11/12 mx-auto'>
                <Navbar></Navbar>
            </nav>
            <main className='w-11/12 mx-auto pt-5 md:grid md:grid-cols-12 gap-3'>
                <aside className='col-span-3'><LeftNavbar></LeftNavbar></aside>
                <section className='col-span-6'><Outlet></Outlet></section>
                <aside className='col-span-3'><RightNav></RightNav></aside>
            </main>
        </div>
    );
};

export default HomeLayout;