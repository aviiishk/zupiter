import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <header className="relative overflow-hidden pt-20 sm:pt-24 md:pt-32 pb-16 sm:pb-24 md:pb-40">
      
      {/* Background Gradient */}
      <div className="absolute inset-0 z-0 herbal-gradient"></div>

      {/* Decorative Blobs (Responsive Sized) */}
      <div className="absolute top-0 right-0 w-60 h-60 sm:w-80 sm:h-80 md:w-96 md:h-96 bg-primary/10 rounded-full blur-3xl animate-pulse -translate-y-1/3 translate-x-1/3"></div>
      <div className="absolute bottom-0 left-0 w-60 h-60 sm:w-80 sm:h-80 md:w-96 md:h-96 bg-primary/5 rounded-full blur-3xl translate-y-1/3 -translate-x-1/3"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* TEXT SECTION */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-wider mb-6">
              <span className="material-icons text-sm">verified</span>
              Since 2020
            </div>

            {/* Heading */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-extrabold text-slate-900 dark:text-white leading-tight mb-6">
              4 Years of <span className="text-primary">Uncompromising</span> Hygiene
            </h1>

            {/* Paragraph */}
            <p className="text-base sm:text-lg md:text-xl text-slate-600 dark:text-slate-400 leading-relaxed mb-8 max-w-xl mx-auto lg:mx-0">
              Protecting homes, clinics, and businesses across India with medical-grade disinfectants infused with the healing power of Neem and herbal extracts.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link
                to="/products"
                className="px-6 sm:px-8 py-3 sm:py-4 bg-primary text-slate-900 font-bold rounded-xl shadow-xl shadow-primary/20 hover:scale-[1.02] transition-transform flex items-center justify-center gap-2"
              >
                View Our Full Catalog
                <span className="material-icons">arrow_forward</span>
              </Link>

              <Link
                to="/contact"
                className="px-6 sm:px-8 py-3 sm:py-4 border-2 border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 font-bold rounded-xl hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors flex items-center justify-center"
              >
                Trade Inquiries
              </Link>
            </div>

            {/* Trusted By */}
            <div className="mt-12 flex flex-col sm:flex-row items-center gap-6 opacity-60 grayscale hover:grayscale-0 transition-all duration-500 justify-center lg:justify-start">
              <span className="text-xs font-semibold uppercase tracking-widest text-slate-500">
                TRUSTED BY
              </span>
              <div className="flex gap-6">
                <span className="material-icons text-2xl sm:text-3xl">local_hospital</span>
                <span className="material-icons text-2xl sm:text-3xl">apartment</span>
                <span className="material-icons text-2xl sm:text-3xl">school</span>
              </div>
            </div>
          </motion.div>

          {/* IMAGE SECTION */}
          <motion.div
            className="relative max-w-md sm:max-w-lg lg:max-w-none mx-auto"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="aspect-square rounded-3xl overflow-hidden shadow-2xl relative z-10 group">
              <img
                src="/hero-home.jpeg"
                alt="Laboratory Environment"
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>

            {/* Floating Badge (Responsive Positioned) */}
            <div className="absolute -bottom-4 sm:-bottom-6 left-1/2 -translate-x-1/2 lg:left-0 lg:translate-x-0 lg:-left-6 bg-white dark:bg-slate-900 p-4 sm:p-6 rounded-2xl shadow-xl border border-slate-100 dark:border-slate-800 flex items-center gap-4 z-20">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary/20 rounded-full flex items-center justify-center text-primary">
                <span className="material-icons">eco</span>
              </div>
              <div>
                <p className="text-sm font-bold text-slate-900 dark:text-white">
                  Herbal Formula
                </p>
                <p className="text-xs text-slate-500">
                  Safe for skin and surfaces
                </p>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </header>
  );
};

export default Hero;
