import React from 'react'
import ArrowUpRightIcon from './ArrowUpRightIcon'

const Contact = () => {
  return (
    <section id='contact' className="pt-20">
    <div className='py-16 pt-12 lg:py-24 lg:pt-20'>
        <div className='container'>
            <div className='bg-gradient-to-r from-emerald-300 to-sky-400 
                 text-gray-900 py-8 px-10 rounded-3xl text-center md:text-left'>
                <div className='flex flex-col md:flex-row gap-8 md:gap-16 items-center'>
                    <div>
                        <h2 className='font-serif text-2xl md:text-3xl font-semibold'>Let's create something amazing together</h2>
                        <p className='text-sm md:text-base mt-2'>
                            Ready to bring your next project to life? Let's connect and discuss how i can help you achieve your goals.
                        </p>
                    </div>
                    <div>
                        <button className='text-white bg-gray-900 inline-flex w-max border border-gray-900 items-center px-6 h-12 rounded-xl gap-2 mt-8'>
                        <span className='font-semibold'>Contact Me</span>
                        <ArrowUpRightIcon className="size-4"/>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </section>
  )
}

export default Contact