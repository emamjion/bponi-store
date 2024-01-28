import React from 'react';

const Container = ({children}) => {
    return (
        <div className='w-full max-w-[1280px] mx-auto bg-[#F5F4F2]'>
            {children}
        </div>
    );
};

export default Container;