import React from 'react'
import StarIcon from './StarIcon';
import { Fragment } from 'react';


const words = [
    "Performant",
    "Accessible",
    "Secure",
    "Interactive",
    "Scalable",
    "User Friendly",
    "Responsive",
    "Maintainable",
    "Search Optimized",
    "Usable",
    "Reliable",
];

const Tape = () => {
  return (
    <div className='py-16  overflow-x-clip'>
        <div className='bg-gradient-to-r from-emerald-300 to-sky-400 -rotate-3 -mx-1'>
            <div className='flex [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]'>
                <div className='flex flex-none gap-4 py-3 pr-4 animate-move-left [animation-duration:90s]'>
                {[...new Array(2)].fill(0).map((_, idx) => (
                    <Fragment key={idx}>
                    {words.map(word => (
                        <div key={word} className='inline-flex gap-4 items-center'>
                            <span className='text-gray-900 uppercase font-extrabold text-sm'>{word}</span>
                            <StarIcon className="size-6 text-gray-900 -rotate-12" />
                        </div>
                    ))}
                    </Fragment>
                ))}
                    
                </div>
            </div>
        </div>
    </div>
  )
}

export default Tape