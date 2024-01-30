import React, { useEffect, useState } from 'react';
import { GoPlus } from 'react-icons/go';
import { LiaAngleRightSolid } from "react-icons/lia";

const Pastries = () => {
    const [pastries, setPastries] = useState([]);
    useEffect(() => {
        fetch('pastries.json').then(response => response.json()).then(data => setPastries(data))
    }, [])
    return (
        <div className='mt-12'>
            <div className='flex items-center justify-between'>
                <div className='flex items-center gap-2'>
                    <img src="https://i.ibb.co/2cQ2Gbq/second.png" className="w-12" />
                    <h1 className='font-bold text-2xl'>Pastries</h1>
                </div>
                <button className='flex items-center gap-0.5 px-4 py-2 hover:bg-[#E7E6E4] rounded-xl duration-300'>All <span></span><LiaAngleRightSolid /></button>
            </div>
            <div className='mt-6 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-x-2 gap-y-6'>
                {
                    pastries.map(pastrie => <div
                        key={pastrie.id}
                    >
                        <div className='bg-[#FFFFFF] p-3 rounded-3xl h-full'>
                            <img src={pastrie.image} />
                            <div>
                                <h2 className='text-2xl font-medium my-3'>{pastrie.price} $</h2>
                                <h4 className=''>{pastrie.name}</h4>
                            </div>
                            <div className='text-center mt-4 flex items-center justify-center relative'>
                                {/* TODO: Button will be fixed with bottom corner */}
                                <button className='flex items-center justify-center bg-[#F5F4F2] px-5 py-2 rounded-xl w-full' >
                                    <span className='mr-1'> <GoPlus /> </span>
                                    <span className='text-md'>Add</span>
                                </button>
                            </div>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default Pastries;