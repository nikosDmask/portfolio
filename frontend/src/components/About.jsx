import React from 'react'
import SectionHeader from './SectionHeader'
import Card from "./Card"
import StarIcon from './StarIcon'
import bookImage from "../assets/images/book-cover.png"
import JavascriptIcon from "./svgcomponents/JavascriptIcon"
import HTMLIcon from "./svgcomponents/HTMLIcon"
import CssIcon from "./svgcomponents/CssIcon"
import ReactIcon from "./svgcomponents/ReactIcon"
import ChromeIcon from './svgcomponents/ChromeIcon'
import GithubIcon from "./svgcomponents/GithubIcon"

const toolboxItems = [
    {
        title: 'JavaScript',
        icon: <JavascriptIcon />
    },
    {
        title: 'HTML5',
        icon: <HTMLIcon />,
    },
    {
        title: 'CCS3',
        icon: <CssIcon />,
    },
    {
        title: 'React',
        icon: <ReactIcon />,
    },
    {
        title: 'Chrome',
        icon: <ChromeIcon />,
    },
    {
        title: 'Github',
        icon: <GithubIcon />,
    }
]

const About = () => {
  return (
  <div className='pb-96'>
    <SectionHeader 
    eyebrow="About Me" 
    title='A glimpse into my world'
    description='Learn more about who i am, what i do and what inspires me.'
    />
    <div>
        <Card>
            <div>
                <StarIcon />
                <h3>My Reads</h3>
                <p>Explore the books shaping my perspectives.</p>
                <img src={bookImage} alt="Book cover" /> 
            </div>
        </Card>
        <Card>
            <div>
                <StarIcon />
                <h3>Toolbox</h3>
                <p>Explore the technologies and tools i use to craft expectional digital 
                experiences.
                </p>
                <div>
                    {toolboxItems.map((item) => (
                        <div key={item.title}>
                            <span>{item.icon}</span>
                            <span>{item.title}</span>
                        </div>
                    ))}
                </div>
            </div>
        </Card>
    </div>
  </div>

  )
}

export default About