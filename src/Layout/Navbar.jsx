import React, { useEffect, useState } from 'react';
import { IoSearchOutline } from "react-icons/io5";
import { TbLocationFilled } from "react-icons/tb";
import navPic1 from '../assets/images/navpic1.png';
import navPic2 from '../assets/images/navpic2.png';

const Navbar = () => {
    
    return (
        <div className=''>
            <div className='border-b border-gray-200 shadow-md h-20 fixed z-[999] w-full md:max-w-[1280px] bg-[#F5F4F2] flex items-center justify-between px-4 md:px-[30px]'>
                <div className='flex items-center'>
                    <h1 className='text-3xl font-semibold'>Store.</h1>
                    <div className='mx-4 border-r'>|</div>
                    <div className='bg-white flex items-center w-[100px] md:w-[150px] px-2 py-3 rounded-2xl'>
                        <img src={navPic1} />
                        <img src={navPic2} className='ml-1' />
                    </div>
                    <div className='flex items-center ml-16 border-2 border-[#D2D0CC] rounded-2xl w-[150px] md:w-[250px]'>
                        <input 
                            type="text"
                            className='px-9 py-3 rounded-2xl w-full text-lg text-[#7F7F7F]'
                            placeholder='Search Here'
                        />
                        <span className='absolute text-xl flex items-center gap-2 px-2 text-[#7F7F7F]'> <IoSearchOutline /> </span>
                    </div>
                    <div className='flex items-center ml-6 border-2 border-[#D2D0CC] px-4 py-3 rounded-2xl shadow-md'>
                        <span> <TbLocationFilled /> </span>
                        <p className='ml-1.5 font-medium'>Enter delivery address</p>
                    </div>
                </div>
                <div>
                    <button className='px-6 py-3 rounded-2xl font-medium bg-[#E7E6E4]'>Log in</button>
                </div>
            </div>
        
        </div>
    );
};

export default Navbar;