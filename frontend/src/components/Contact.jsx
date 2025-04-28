import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ArrowUpRightIcon from './ArrowUpRightIcon';

const Contact = () => {
  const [openForm, setOpenForm] = useState(false);

  return (
  <section id="contact" className="pt-20">
  <div className="py-16 pt-12 lg:py-24 lg:pt-20">
    <div className="container">

      {/* AnimatePresence around whole box */}
      <AnimatePresence mode="wait">
        <motion.div
          key={openForm ? 'form-open' : 'form-closed'}
          layout
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="rounded-3xl p-[2px] bg-gradient-to-r from-emerald-300 to-sky-400"
        >
          {/* Inner gray content */}
          <motion.div
            layout
            initial={false}
            animate={{
              backgroundColor: '#1f2937',
              boxShadow: openForm
                ? '0 0 30px rgba(110, 231, 183, 0.4)'
                : '0 0 0 rgba(0,0,0,0)',
            }}
            transition={{ duration: 0.6 }}
            className="rounded-3xl p-8 md:p-10 text-center md:text-left bg-gray-900"
          >

            {/* Flex container */}
            <div className={`flex ${openForm ? 'flex-col' : 'flex-col md:flex-row'} gap-8 md:gap-16 items-center`}>
              <div className="flex-1">
                <h2 className="font-serif text-2xl md:text-3xl font-semibold text-white">
                  Let's create something amazing together
                </h2>
                <p className="text-sm md:text-base mt-2 text-gray-400">
                  Ready to bring your next project to life? Let's connect and discuss how I can help you achieve your goals.
                </p>
              </div>

              {/* Animate "Contact Me" Button */}
              <AnimatePresence>
                {!openForm && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
                  >
                    <button
                      onClick={() => setOpenForm(true)}
                      className="text-white bg-gradient-to-r from-emerald-300 to-sky-400 inline-flex w-max border border-gray-800 items-center px-6 h-12 rounded-xl gap-2 mt-8"
                    >
                      <span className="font-semibold">Contact Me</span>
                      <ArrowUpRightIcon className="size-4" />
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>

            </div>

            {/* Contact form appears */}
            <AnimatePresence>
              {openForm && (
                <motion.form
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.6 }}
                  className="mt-8 flex flex-col gap-4 overflow-hidden"
                >
                  <input
                    type="text"
                    placeholder="Name"
                    className="h-12 rounded-xl px-4 bg-white/10 border border-white/20 text-white focus:outline-none"
                  />
                  <input
                    type="email"
                    placeholder="Email"
                    className="h-12 rounded-xl px-4 bg-white/10 border border-white/20 text-white focus:outline-none"
                  />
                  <input
                    type="text"
                    placeholder="Subject"
                    className="h-12 rounded-xl px-4 bg-white/10 border border-white/20 text-white focus:outline-none"
                  />
                  <button
                    type="submit"
                    className="bg-gradient-to-r from-emerald-300 to-sky-400 z-20 mt-4 h-12 text-gray-900 font-semibold rounded-xl"
                  >
                    Send Message
                  </button>
                </motion.form>
              )}
            </AnimatePresence>

          </motion.div>
        </motion.div>
      </AnimatePresence>

    </div>
  </div>
</section>

  );
};

export default Contact;
