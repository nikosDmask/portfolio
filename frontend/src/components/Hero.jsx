import React from 'react'
import memojiImage from '../assets/images/memoji-computer.png'
import ArrowDown from "../assets/icons/arrow-down.svg"
import grainImage from "../assets/images/grain.jpg"
import HeroOrbit from './HeroOrbit'
import StarIcon from './StarIcon';
import SparkleIcon from './SparkleIcon';
import { Link } from 'react-scroll';    


const Hero = () => {
  return (
    <section id='home'>
    <div className='py-32 md:py-48 lg:py-60 relative z-0 overflow-x-clip'>
    <div className='absolute inset-0 [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_70%,transparent)]'>
        <div 
            className='absolute inset-0 -z-30 opacity-5' 
            style={{
                backgroundImage: `url(${grainImage})`,
            }}
        ></div>
        <div className='size-[620px] hero-ring'></div>
        <div className='size-[820px] hero-ring'></div>
        <div className='size-[1020px] hero-ring'></div>
        <div className='size-[1220px] hero-ring'></div>
        {/* <div className='absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2'>
            <div className=' border border-red-500 size-[800px]'>
                <div className='inline-flex border border-red-500 '>
                    <StarIcon className='size-28 text-emerald-300'/>
                </div>
            </div>
        </div> */}
        <HeroOrbit
            rotation="-72"
            size="size-[800px]" 
            starClass="size-28 text-emerald-300"
        /> 
        <HeroOrbit
            rotation="20"
            size="size-[550px]"
            starClass="size-12 text-emerald-300"
        />
        <HeroOrbit
            rotation="98"
            size="size-[590px]"
            starClass="size-8 text-emerald-300"
        />
        <HeroOrbit
            icon={SparkleIcon}
            rotation="-14"
            size="size-[430px]"
            starClass="size-8 text-emerald-300/20"
        />
        <HeroOrbit
            icon={SparkleIcon}
            rotation="79"
            size="size-[440px]"
            starClass="size-5 text-emerald-300/20"
        />
        <HeroOrbit
            icon={SparkleIcon}
            rotation="178"
            size="size-[530px]"
            starClass="size-10 text-emerald-300/20"
        /> 
        <HeroOrbit
            icon={SparkleIcon}
            rotation="144"
            size="size-[710px]"
            starClass="size-14 text-emerald-300/20"
        /> 
        <HeroOrbit
            icon='null'
            rotation="85"
            size="size-[720px]"
            starClass="size-3 bg-emerald-300/20 rounded-full"
        /> 
        <HeroOrbit
            icon='null'
            rotation="-41"
            size="size-[520px]"
            starClass="size-2 bg-emerald-300/20 rounded-full"
        /> 
        <HeroOrbit
            icon='null'
            rotation="-5"
            size="size-[650px]"
            starClass="size-2 bg-emerald-300/20 rounded-full"
        /> 
        </div>
        <div className='container relative z-index-10'>
            <div className='flex flex-col items-center'>
                <img src={memojiImage} className='size-[100px]' alt="Person peeking from behind laptop" />   
                <div className='bg-gray-950 border border-gray-800 px-4 py-1.5 inline-flex items-center gap-4 rounded-lg'>
                    <div className='bg-green-500 size-2.5 rounded-full relative'>
                        <div className='bg-green-500 absolute inset-0 animate-ping-large rounded-full'></div>
                    </div>
                    <div className='text-sm font-medium'>Available for new projects</div>
                </div>
            </div>
                <div className='max-w-lg mx-auto'>
                    <h1 className='font-serif text-3xl text-center mt-8 tracking-wide md:text-5xl'>Eager to Learn. Ready to Ship.</h1>
                    <p className='mt-4 text-center text-white/60 md:text-lg'>
                    As a junior software engineer, I turn ideas into working apps while growing my skills every day. Let’s collaborate and build something great together.
                    </p>
                </div>
            <div className='flex flex-col md:flex-row justify-center items-center mt-8 gap-4'>
                <Link 
                    to='projects'
                    smooth={true}
                    duration={500}
                    className='cursor-pointer inline-flex items-center gap-2 border border-white/15 px-6 h-12 rounded-xl'>
                    <span className='font-semibold'>Explore My Work</span>
                    <img src={ArrowDown} className='size-4'/>
                </Link>
                <Link
                    to='contact'
                    smooth={true}
                    duration={500}
                    className='cursor-pointer inline-flex items-center gap-2 border border-white bg-white text-gray-900 h-12 px-6 rounded-xl'>
                    <span>👋</span>
                    <span className='font-semibold'>Let's Connect</span>
                </Link>
            </div>
        </div>
    </div>
    </section>
  )
};

export default Hero;

