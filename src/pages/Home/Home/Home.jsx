import React from 'react';
import Footer from '../../../Layout/Footer';
import LeftSidebar from '../LeftSidebar';
import Drinks from '../Drinks';

const Home = () => {
    return (
        <div className='pt-6'>
            <div className='flex gap-4 pt-16'>
                <div className='flex-[1.5]'>
                    <div className='sticky top-0 '>
                        <LeftSidebar/>
                    </div>
                </div>
                <div className='flex-[4]'>
                    <Drinks/>
                </div>
                <div className='flex-[1.5] relative'>
                    <div className='sticky top-10 h-[90vh]'>
                        <h1>Right Sidebar</h1>
                        <h1>Right Sidebar</h1>
                        <h1>Right Sidebar</h1>
                        <h1>Right Sidebar</h1>
                        <h1>Right Sidebar</h1>
                        <h1>Right Sidebar</h1>
                        <h1>Right Sidebar</h1>
                        <h1>Right Sidebar</h1>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    );
};

export default Home;