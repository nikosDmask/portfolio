import React from 'react'
import { twMerge } from 'tailwind-merge'
import grain from '../assets/images/grain.jpg'

const Card = ({ className, children }) => (
  <div
    className={twMerge(
      `
        bg-gray-800 overflow-hidden rounded-3xl relative z-0
        after:z-10 after:content-[''] after:absolute after:inset-0
        after:outline-2 after:outline after:-outline-offset-2
        after:pointer-events-none after:rounded-3xl after:outline-white/20
        p-6
      `,
      className
    )}
  >
    <div
      className="absolute inset-0 -z-10 opacity-5"
      style={{ backgroundImage: `url(${grain.src})` }}
    />
    {children}
  </div>
)

export default Card
