import React, { useEffect, useState } from 'react';
import deliveryImg from '../../assets/images/delivery.png';

const LeftSidebar = () => {
    const [catalogs, setCatalogs] = useState([]);
    useEffect(() => {
        fetch('catalog.json').then(res => res.json()).then(data => setCatalogs(data))
    }, [])
    return (
        <div className='px-4'>
            <div className='mt-6'>
                <h1 className='text-2xl font-semibold'>Доставка</h1>
                <div className='flex items-center'>
                    <img src={deliveryImg} />
                    <span>delivery unavailable</span>
                </div>
            </div>
            <h1 className='text-2xl font-medium mt-8'>Catalog</h1>
            <ul>
                {
                    catalogs?.map(catalog => <li 
                        key={catalog.id}
                        className='flex items-center gap-3 mt-2'
                    >
                        <img src={catalog?.image} className='w-11' />
                        <p className=''>{catalog?.name}</p>
                    </li>)
                }
            </ul>
        </div>
    );
};

export default LeftSidebar;