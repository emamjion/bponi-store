import React from 'react';
import { Link } from 'react-router-dom';
import {FaEnvelope} from 'react-icons/fa';

const CompanyInfo = () => {
    return (
        <div className='md:flex items-center gap-3 flex-col md:flex-row text-[#B8B8B8] mt-10'>
            <Link className='text-sm mr-5 md:mr-0'>User Agreement</Link>
            <Link className='text-sm mr-5 md:mr-0'>Contacts</Link>
            <Link className='text-sm mr-5 md:mr-0'>Delivery</Link>
            <Link className='text-sm mr-5 md:mr-0'>FAQ</Link>
            <Link className='text-sm mr-5 md:mr-0'>Become a partner</Link>
            <Link className='text-sm mr-5 md:mr-0'>Become a courier</Link>
            <Link className='text-sm mr-5 md:mr-0'>Eats for Business</Link>
            <Link className='text-sm mr-5 md:mr-0'>Plastic recycling</Link>
            <Link className='text-sm mr-5 md:mr-0'>Order food in the Yandex Go App</Link>
            <Link className='flex items-center gap-1 text-sm'>
                <span> <FaEnvelope /> </span>
                <span>Feedback</span>
            </Link>
        </div>
    );
};

export default CompanyInfo;