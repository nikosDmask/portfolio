import React from 'react';

const SectionHeader = ({ eyebrow, title, description }) => {
    return (
        <>
        <div className='flex justify-center'>
          <p className='uppercase font-semibold tracking-widest bg-gradient-to-r from-emerald-300 to-sky-400 text-transparent bg-clip-text'>
            {eyebrow}
          </p>
        </div>
        <h2 className='font-serif text-3xl text-center mt-6 md:text-5xl'>
            {title}
        </h2>
        <p className=' text-white/60 mt-4 text-center md:text-large lg:text-xl max-w-md mx-auto p-4'>
            {description}
        </p>
        </>
    );
};


export default SectionHeader;

