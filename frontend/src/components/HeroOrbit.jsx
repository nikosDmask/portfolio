import React from 'react'
import StarIcon from './StarIcon';
import SparkleIcon from './SparkleIcon';

const HeroOrbit = ({
    icon: IconComponent = StarIcon,
    starClass = "size-28 text-emerald-300",
    size = "800px",
    rotation = 0
}) => {
    return ( 
    <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 -z-20 animate-spin [animation-duration:40s]">
        <div 
        className={`flex items-start justify-start ${size}`}
        style={{transform: `rotate(${rotation}deg)`}}
        >
            <div 
            className="inline-flex"
            style={{ transform: `rotate(${rotation * -1}deg)`}}
            >
                <IconComponent className={starClass} />
            </div>
        </div>
     </div>
    );
};

export default HeroOrbit;


