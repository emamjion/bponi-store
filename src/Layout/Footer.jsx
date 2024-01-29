import React from 'react';
import AppSection from '../pages/Footer/AppSection';
import CompanyInfo from '../pages/Footer/CompanyInfo';

const Footer = () => {
    return (
        <footer className='bg-[#f9f9f9]'>
            <div className='mt-6 bg-[#f9f9f9] px-6 md:px-[260px] py-16'>
                <div>
                    <AppSection/>
                </div>
            </div>
            <div className='border my-8'></div>
            <div className=' px-6 md:px-[260px] py-16'>
                <h1 className='font-semibold text-lg text-[#646464]'>Company Information</h1>
                <CompanyInfo/>
            </div>
            <div className='border my-8'></div>
            <div className='bg-[#f9f9f9]  px-6 md:px-[260px] pb-12 flex items-center justify-between'>
                <p className='text-[#B8B8B8] text-sm md:text-base'>&copy; 2018-2024 Yandex Eats LLC</p>
                <p className='text-[#B8B8B8] text-sm md:text-base'>
                    Project for Yandex
                </p>
            </div>
        </footer>
    );
};

export default Footer;