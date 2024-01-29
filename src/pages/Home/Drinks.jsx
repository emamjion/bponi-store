import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import { GoPlus } from 'react-icons/go';

const Drinks = () => {
    const [drinks, setDrinks] = useState([]);
    useEffect(() => {
        fetch('colddrinks.json').then(response => response.json()).then(data => setDrinks(data))
    }, [])
    return (
        <div className='mt-12'>
            <h1 className='font-bold text-2xl'>Cold Drinks</h1>
            <div className='grid grid-cols-1  md:grid-cols-3'>
                
            </div>
        </div>
    );
};

export default Drinks;