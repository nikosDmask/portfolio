
import React from 'react'
import SectionHeader from './SectionHeader'
import Card from "./Card"
import bookImage from "../assets/images/book-cover.png"
import JavascriptIcon from "./svgcomponents/JavascriptIcon"
import HTMLIcon from "./svgcomponents/HTMLIcon"
import CssIcon from "./svgcomponents/CssIcon"
import ReactIcon from "./svgcomponents/ReactIcon"
import ChromeIcon from './svgcomponents/ChromeIcon'
import GithubIcon from "./svgcomponents/GithubIcon"
import mapImage from "../assets/images/map.png"
import smileMemoji from "../assets/images/memoji-smile.png"
import CardHeader from './CardHeader'
import ToolboxItems from './ToolboxItems'
import { motion }  from 'framer-motion'
import { useRef } from 'react'

const toolboxItems = [
    {
        title: 'JavaScript',
        iconType: JavascriptIcon,
    },
    {
        title: 'HTML5',
        iconType: HTMLIcon,
    },
    {
        title: 'CSS3',
        iconType: CssIcon,
    },
    {
        title: 'React',
        iconType: ReactIcon,
    },
    {
        title: 'Chrome',
        iconType: ChromeIcon,
    },
    {
        title: 'Github',
        iconType: GithubIcon,
    }
]
const hobbies = [
    {
        title: 'Painting',
        emoji: '🎨',
        left : '5%',
        top: '5%',
    },
    {
        title: 'Photography',
        emoji: '📸',
        left : '50%',
        top: '5%',
    },
    {
        title: 'Hiking',
        emoji: '🥾',
        left : '35%',
        top: '40%',
    },
    {
        title: 'Gaming',
        emoji: '🎮',
        left : '10%',
        top: '35%',
    },
    {
        title: 'Music',
        emoji: '🎵',
        left : '70%',
        top: '45%',
    },
    {
        title: 'Fitness',
        emoji: '🤸',
        left : '5%',
        top: '65%',
    },
    {
        title: 'Reading',
        emoji: '📖',
        left : '45%',
        top: '70%'
    },
]
const About = () => {
  const constrainRef = useRef(null);
  return (
  <section id='about'>
  <div className='py-20 lg:py-28'>
    <div className='container px-6 lg:px-24 md:px-12'>
        <SectionHeader 
        eyebrow="About Me" 
        title='A glimpse into my world'
        description='Learn more about who i am, what i do and what inspires me.'
        />
        <div className='mt-20 flex flex-col gap-8'>
            <div className='grid grid-cols-1 gap-8 md:grid-cols-5 lg:grid-cols-3'>
                <Card className="h-[320px] md:col-span-2 lg:col-span-1 ">
                    <CardHeader 
                    title="My Reads" 
                    description="Explore the books shaping my perspectives."
                    />
                    <div className='w-40 mx-auto mt-2 md:mt-0'>
                        <img src={bookImage} alt="Book cover" /> 
                    </div>
                </Card>
                <Card className="h-[320px] md:col-span-3 lg:col-span-2">
                        <CardHeader 
                    className=""
                    title="Toolbox" 
                    description="Explore the technologies and tools i use to craft expectional digital 
                        experiences."
                    />
                    <ToolboxItems  items={toolboxItems} className="" itemsWrapperClassName="animate-move-left [animation-duration:90s]" /> 
                    <ToolboxItems  items={toolboxItems} className="mt-6" itemsWrapperClassName="animate-move-right [animation-duration:80s]" /> 
                </Card>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-5 gap-8 lg:grid-cols-3'>
                <Card className="h-[320px] p-0 flex flex-col md:col-span-3 lg:col-span-2">
                    <CardHeader 
                        title="Beyond The Code" 
                        description="Explore my interests and hobbies beyond the digital realm."
                        className="px-6 py-6"
                    />    
                    <div className='relative flex-1' ref={constrainRef}>
                        {hobbies.map(hobby => (
                            <motion.div 
                            key={hobby.title} 
                            className='inline-flex items-center 
                            gap-2 px-6 bg-gradient-to-r from-emerald-300
                            to-sky-400 rounded-full py-1.5 absolute'
                            style={{
                                left:hobby.left,
                                top:hobby.top,
                            }}
                            drag
                            dragConstraints={constrainRef}
                            >
                                <span className='font-medium text-gray-950'>{hobby.title}</span>
                                <span>{hobby.emoji}</span>
                            </motion.div>
                        ))}
                    </div>
                </Card>
                <Card className="h-[320px] p-0 relative md:col-span-2 lg:col-span-1">
                    <img src={mapImage} alt="map" className='h-full w-full object-cover object-left-top'/>
                    <div className="
                        absolute top-1/2 left-1/2
                        -translate-x-1/2 -translate-y-1/2
                        w-20 h-20
                        rounded-full
                        after:content-[''] after:absolute after:inset-0
                        after:outline-2 after:-outline-offset-2
                        after:rounded-full after:outline-gray-950/30
                        ">
                        <div className='absolute inset-0 rounded-full bg-gradient-to-r from-emerald-300 to-sky-400 -z-20 animate-ping [animation-duration:2s]'></div>
                        <div className='absolute inset-0 rounded-full bg-gradient-to-r from-emerald-300 to-sky-400 -z-10'></div>
                        <img src={smileMemoji} alt="smiling emoji" className='size-20'/>
                    </div>
                </Card>
            </div>
        </div>
    </div>
    </div>
    </section>
  )
}

export default About