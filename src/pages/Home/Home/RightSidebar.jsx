import React from 'react';
import cartImg from '../../../assets/images/cart-img.svg';

const RightSidebar = () => {
    return (
        <div className='sticky top-0'>
            <div className='flex items-center flex-col justify-center h-screen'>
                <img src={cartImg} />
                <div className='text-center mt-3'>
                    <h1 className='text-xl font-bold'>Your cart is currently <br /> empty</h1>
                </div>
            </div>
        </div>
    );
};

export default RightSidebar;