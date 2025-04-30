import React from 'react'
import { motion } from 'framer-motion'
import ArrowUpRightIcon from './ArrowUpRightIcon'

const links = [
  { title: 'LinkedIn', href: 'https://www.linkedin.com/in/your-profile' },
  { title: 'Facebook', href: 'https://www.facebook.com/your-profile' },
  { title: 'GitHub', href: 'https://github.com/your-profile' },
  { title: 'Twitter', href: 'https://twitter.com/your-profile' },
]

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    }
  }
}

const itemVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0 }
}

const Footer = () => {
  return (
    <footer className="relative overflow-x-clip pt-20">
      <div className="absolute h-[400px] w-[1600px] bottom-0 left-1/2 -translate-x-1/2
             bg-emerald-300/30
             [mask-image:radial-gradient(50%_50%_at_bottom_center,black,transparent)]
             pointer-events-none" />
      <div className="container">
        <div className="border-t border-white/15 py-6 text-sm flex flex-col md:flex-row md:justify-between items-center gap-8">
          <div className="text-white/40">&copy; 2025. All rights reserved</div>

          <motion.nav
            className="flex flex-col items-center gap-8 md:flex-row"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            {links.map(link => (
              <motion.a
                key={link.title}
                href={link.href}
                variants={itemVariants}
                className="inline-flex items-center gap-1.5"
              >
                <span className="font-semibold text-white">{link.title}</span>
                <ArrowUpRightIcon className="size-4 text-white" />
              </motion.a>
            ))}
          </motion.nav>
        </div>
      </div>
    </footer>
  )
}

export default Footer
