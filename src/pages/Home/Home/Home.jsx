import React from 'react';
import Footer from '../../../Layout/Footer';
import LeftSidebar from '../LeftSidebar';
import Drinks from '../Drinks';
import RightSidebar from './RightSidebar';
import Pastries from '../Pastries';
import HotDogs from '../HotDogs';
import Hygiene from './Hygiene';

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
                    <Pastries/>
                    <HotDogs/>
                    <Hygiene/>
                </div>
                <div className='flex-[1.5] relative p-4 bg-[#fff] rounded-2xl mr-4'>
                    <div className='sticky top-10 h-[90vh]'>
                        <h1 className='text-2xl font-semibold'>Cart</h1>
                        <RightSidebar/>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    );
};

export default Home;