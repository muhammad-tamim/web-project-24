import React from 'react';
import Hero from '../shared/components/structure/Hero';
import wave from '../assets/images/wave.svg'

const HomePage = () => {
    return (
        <div className='flex relative flex-col items-center justify-center min-h-[calc(100vh-52px)]'>
            <Hero></Hero>
            <img className='absolute bottom-0 w-full' src={wave} alt="" />
        </div>
    );
};

export default HomePage;