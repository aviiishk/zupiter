import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Hero = () => {
    return (
        <header className="relative overflow-hidden pt-16 pb-24 md:pt-32 md:pb-40">
            <div className="absolute inset-0 z-0 herbal-gradient"></div>

            {/* Decorative Blobs */}
            <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="grid lg:grid-cols-2 gap-12 items-center">

                    {/* Text Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-wider mb-6">
                            <span className="material-icons text-sm">verified</span>
                            Since 2020
                        </div>
                        <h1 className="text-5xl md:text-7xl font-extrabold text-slate-900 dark:text-white leading-[1.1] mb-6">
                            4 Years of <span className="text-primary">Uncompromising</span> Hygiene
                        </h1>
                        <p className="text-xl text-slate-600 dark:text-slate-400 leading-relaxed mb-10 max-w-xl">
                            Protecting homes, clinics, and businesses across India with medical-grade disinfectants infused with the healing power of Neem and herbal extracts.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4">
                            <Link
                                to="/products"
                                className="px-8 py-4 bg-primary text-slate-900 font-bold rounded-xl shadow-xl shadow-primary/20 hover:scale-[1.02] transition-transform flex items-center justify-center gap-2"
                            >
                                View Our Full Catalog
                                <span className="material-icons">arrow_forward</span>
                            </Link>
                            <Link
                                to="/contact"
                                className="px-8 py-4 border-2 border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 font-bold rounded-xl hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors flex items-center justify-center"
                            >
                                Trade Inquiries
                            </Link>
                        </div>

                        {/* Trusted By */}
                        <div className="mt-12 flex items-center gap-8 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
                            <span className="text-xs font-semibold uppercase tracking-widest text-slate-500">TRUSTED BY</span>
                            <div className="flex gap-6">
                                <span className="material-icons text-3xl">local_hospital</span>
                                <span className="material-icons text-3xl">apartment</span>
                                <span className="material-icons text-3xl">school</span>
                            </div>
                        </div>
                    </motion.div>

                    {/* Image Content */}
                    <motion.div
                        className="relative"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        <div className="aspect-square rounded-3xl overflow-hidden shadow-2xl relative z-10 group">
                            <img
                                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAhVj_E384S3licRiWUJPiNXAF3QhJsb-Y4Pgm2jF0J541lomlkWw1en_rNDBs0ofnESnjG6yfn5inNGUnox2voWtwB7GeOHCj208d7hLR1Obn3hkQZFsPP4jrMUimu-0GPxS9rEFHZCokOagkIQDkNurWGQ66tdvSuLpSL7zdvaba7WzjOxxeayugsvwxzmCdN_TqJ2zoKX929nMIpYiH9xz_pNPaCmP2ZpO1tZrxjKtS9C-Kkw8RsCYJVAJRudTp8Dv93CZtOtWgk"
                                alt="Laboratory Environment"
                                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                            />
                            {/* Overlay Gradient */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        </div>

                        {/* Floating Badge */}
                        <div className="absolute -bottom-6 -left-6 bg-white dark:bg-slate-900 p-6 rounded-2xl shadow-xl border border-slate-100 dark:border-slate-800 flex items-center gap-4 z-20 animate-bounce-slow">
                            <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center text-primary">
                                <span className="material-icons">eco</span>
                            </div>
                            <div>
                                <p className="text-sm font-bold text-slate-900 dark:text-white">Herbal Formula</p>
                                <p className="text-xs text-slate-500">Safe for skin and surfaces</p>
                            </div>
                        </div>
                    </motion.div>

                </div>
            </div>
        </header>
    );
};

export default Hero;
