import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ArrowUpRightIcon from './ArrowUpRightIcon';
import { getCookie } from '../utils/csrf';

export default function Contact() {
  // 1) On mount, hit the CSRF endpoint so Django drops the csrftoken cookie
  useEffect(() => {
    fetch('/api/set-csrf/', { credentials: 'include' });
  }, []);

  const [openForm, setOpenForm] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [status, setStatus] = useState(null);

  const handleChange = (e) =>
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  // 2) On form submit, include CSRF header and cookie
  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');

    const csrftoken = getCookie('csrftoken');

    try {
      const response = await fetch('/api/contact/', {
        method: 'POST',
        credentials: 'include', // send the cookie
        headers: {
          'Content-Type': 'application/json',
          'X-CSRFToken': csrftoken,
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  return (
    <section id="contact" className="pt-20 pb-40 lg:pb-64">
      <div className="container py-16 lg:py-24">
        <AnimatePresence mode="wait">
          {/* Outer gradient border */}
          <motion.div
            key={openForm ? 'open' : 'closed'}
            layout
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="rounded-3xl p-[2px] bg-gradient-to-r from-emerald-300 to-sky-400"
          >
            {/* Inner dark box */}
            <motion.div
              layout
              initial={false}
              animate={{
                backgroundColor: '#1f2937',
                boxShadow: openForm
                  ? '0 0 30px rgba(110,231,183,0.4)'
                  : '0 0 0 rgba(0,0,0,0)',
              }}
              transition={{ duration: 0.6 }}
              className="rounded-3xl p-8 md:p-10 bg-gray-900 text-center md:text-left"
            >
              {/* Header + Contact Me button */}
              <div className={`flex ${openForm ? 'flex-col' : 'flex-col md:flex-row'} gap-8 md:gap-16 items-center`}>
                <div className="flex-1">
                  <h2 className="font-serif text-2xl md:text-3xl font-semibold text-white">
                    Let’s create something amazing together
                  </h2>
                  <p className="mt-2 text-gray-400">
                    Ready to bring your next project to life? Let’s connect and discuss how I can help you achieve your goals.
                  </p>
                </div>

                <AnimatePresence>
                  {!openForm && (
                    <motion.button
                      layout
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.4 }}
                      onClick={() => setOpenForm(true)}
                      className="relative z-10 mt-8 inline-flex h-12 items-center gap-2 rounded-xl bg-gradient-to-r from-emerald-300 to-sky-400 px-6 font-semibold text-white"
                    >
                      Contact Me <ArrowUpRightIcon className="size-4" />
                    </motion.button>
                  )}
                </AnimatePresence>
              </div>

              {/* Contact form */}
              <AnimatePresence>
                {openForm && (
                  <motion.form
                    layout
                    onSubmit={handleSubmit}
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.6 }}
                    className="mt-8 flex flex-col gap-4 overflow-hidden"
                  >
                    <input
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      type="text"
                      placeholder="Name"
                      required
                      className="h-12 rounded-xl bg-white/10 px-4 border border-white/20 text-white focus:outline-none"
                    />
                    <input
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      type="email"
                      placeholder="Email"
                      required
                      className="h-12 rounded-xl bg-white/10 px-4 border border-white/20 text-white focus:outline-none"
                    />
                    <input
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      type="text"
                      placeholder="Subject"
                      className="h-12 rounded-xl bg-white/10 px-4 border border-white/20 text-white focus:outline-none"
                    />
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Your message..."
                      required
                      className="h-32 rounded-xl bg-white/10 px-4 border border-white/20 text-white focus:outline-none"
                    />
                    <button
                      type="submit"
                      disabled={status === 'sending'}
                      className="mt-4 h-12 rounded-xl bg-gradient-to-r from-emerald-300 to-sky-400 font-semibold text-gray-900 disabled:opacity-50"
                    >
                      {status === 'sending'
                        ? 'Sending…'
                        : status === 'success'
                        ? 'Sent!'
                        : 'Send Message'}
                    </button>

                    {status === 'error' && (
                      <p className="text-red-400 mt-2">
                        Oops, something went wrong. Please try again.
                      </p>
                    )}
                  </motion.form>
                )}
              </AnimatePresence>
            </motion.div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}


