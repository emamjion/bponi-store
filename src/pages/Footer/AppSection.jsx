import React from 'react';
import {FaApple,FaGooglePlay } from 'react-icons/fa';

const AppSection = () => {
    return (
        <div className=''>
        <h2 className='font-bold text-xl'>Even easier in the app</h2>
        <div className='flex items-center gap-4 mt-5'>
            <div className='text-[#6E6E6E] border border-[#b0b0b0] rounded-xl px-4 py-2 flex items-center gap-2'>
                <span className='text-xl'> <FaApple /> </span>
                <span className='font-medium'>App Store</span>
            </div>
            <div className='text-[#6E6E6E] border border-[#b0b0b0] rounded-xl px-4 py-2 flex items-center gap-2'>
                <span className='text-xl'> <FaGooglePlay /> </span>
                <span className='font-medium'>Play Store</span>
            </div>
        </div>
    </div>
    );
};

export default AppSection;