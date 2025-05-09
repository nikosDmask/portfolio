import React from 'react'
import darkSaasLandingPage from "../assets/images/dark-saas-landing-page.png"
import lightSaasLandingPage from "../assets/images/light-saas-landing-page.png"
import aiStartupLandingPage from "../assets/images/ai-startup-landing-page.png"
import CheckCircleIcon from './CheckCircleIcon'
import ArrowUpRightIcon from './ArrowUpRightIcon'
import SectionHeader from './SectionHeader'
import Card from "./Card"

const portfolioProjects = [
  {
    company: "Comp 1",
    year: "2025",
    title: "Project 1",
    results: [
      { title: "Enhanced user experience by 40%" },
      { title: "Improved site speed by 50%" },
      { title: "Increased mobile traffic by 35%" },
    ],
    link: "https://github.com/nikosDmask",
    image: darkSaasLandingPage,
    
  },
  {
    company: "Comp 2",
    year: "2025",
    title: "Project 2",
    results: [
      { title: "Boosted sales by 20%" },
      { title: "Expanded customer reach by 35%" },
      { title: "Increased brand awareness by 15%" },
    ],
    link: "https://github.com/nikosDmask",
    image: lightSaasLandingPage,
    
  },
  {
    company: "Comp 3",
    year: "2025",
    title: "Project 3",
    results: [
      { title: "Enhanced user experience by 40%" },
      { title: "Improved site speed by 50%" },
      { title: "Increased mobile traffic by 35%" },
    ],
    link: "https://github.com/nikosDmask",
    image: aiStartupLandingPage,
    
  },
];

const Projects = () => {
  return (
    <section id='projects' className="pb-16 lg:py-24">
      <div className="container px-6 lg:px-24 md:px-12">
        <SectionHeader
          eyebrow="Real-world Results"
          title="Featured Projects"
          description="See how I transformed concepts into engaging digital experiences."
        />

        <div className="flex flex-col mt-10 md:mt-20 gap-20">
          {portfolioProjects.map((project, projectIndex) => (
            <Card
              key={project.title}
              className="
                md:pt-12 md:px-10 
                px-8 pt-8 pb-0
                lg:pt-16 lg:px-20
                sticky
              "
              style={{
                top: `calc(64px + ${projectIndex * 40}px)`,
              }}
            >
              <div className="lg:grid lg:grid-cols-2 lg:gap-16">
                <div className="lg:pb-16">
                  <div className="bg-gradient-to-r from-emerald-300 to-sky-400 inline-flex gap-2 font-bold uppercase tracking-widest text-sm text-transparent bg-clip-text">
                    <span>{project.company}</span>
                    <span>&bull;</span>
                    <span>{project.year}</span>
                  </div>

                  <h3 className="font-serif text-2xl mt-2 md:text-4xl md:mt-5">
                    {project.title}
                  </h3>
                  <hr className="border-t-2 border-white/5 mt-4 md:mt-5" />
                  <ul className="flex flex-col gap-4 mt-4 md:mt-5">
                    {project.results.map((result, i) => (
                      <li
                        key={i}
                        className="flex gap-2 text-sm md:text-base text-white/50"
                      >
                        <CheckCircleIcon className="size-5 md:size-6" />
                        <span>{result.title}</span>
                      </li>
                    ))}
                  </ul>
                  <a href={project.link} target="_blank" rel="noreferrer">
                    <button className="md:w-auto md:px-6 bg-white text-gray-950 h-12 w-full rounded-xl font-semibold mt-8 gap-2 inline-flex items-center justify-center">
                      <span>Visit Live Site</span>
                      <ArrowUpRightIcon className="size-4" />
                    </button>
                  </a>
                </div>
                <div className="relative">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="mt-8 -mb-4 md:-mb-0 lg:mt-0 lg:absolute lg:h-full lg:w-auto lg:max-w-none"
                  />
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
