import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { motion } from 'framer-motion';

const About = () => {
    return (
        <div className="min-h-screen flex flex-col bg-background-light dark:bg-background-dark">
            <Navbar />

            <main className="flex-grow">
                {/* Header */}
                <div className="relative py-20 bg-slate-900 overflow-hidden">
                    <div className="absolute inset-0 bg-primary/10"></div>
                    <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
                        <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6">
                            Pioneering <span className="text-primary">Hygiene</span>
                        </h1>
                        <p className="text-xl text-slate-300 max-w-2xl mx-auto">
                            From the tea gardens of Assam to hospitals across India, Zupiter is redefining protection with nature's wisdom.
                        </p>
                    </div>
                </div>

                {/* Content */}
                <div className="max-w-7xl mx-auto px-6 py-24">
                    <div className="grid md:grid-cols-2 gap-16 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6">Our Story</h2>
                            <p className="text-slate-600 dark:text-slate-400 mb-6 leading-relaxed">
                                Founded in 2020 during the height of the global health crisis, Zupiter emerged with a singular mission: to provide uncompromising hygiene solutions that are effective against medical-grade threats yet safe for daily use.
                            </p>
                            <p className="text-slate-600 dark:text-slate-400 mb-6 leading-relaxed">
                                Headquartered in Guwahati, Assam, we leverage the region's rich botanical heritage, incorporating locally sourced Neem and herbal extracts into our ISO-certified disinfectant formulas.
                            </p>

                            <div className="grid grid-cols-2 gap-6 mt-8">
                                <div className="p-4 bg-white dark:bg-slate-800 rounded-xl shadow-sm border border-slate-100 dark:border-slate-700">
                                    <h3 className="text-2xl font-bold text-primary mb-1">50+</h3>
                                    <p className="text-xs text-slate-500 uppercase tracking-wider">Products Developed</p>
                                </div>
                                <div className="p-4 bg-white dark:bg-slate-800 rounded-xl shadow-sm border border-slate-100 dark:border-slate-700">
                                    <h3 className="text-2xl font-bold text-primary mb-1">10k+</h3>
                                    <p className="text-xs text-slate-500 uppercase tracking-wider">Happy Customers</p>
                                </div>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            className="relative"
                        >
                            <div className="aspect-video rounded-2xl overflow-hidden shadow-2xl">
                                <img
                                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuAKISG6g1y7B1fgiHoVOEvKRVRVlX9vkRco1Tnv7veGusL9OBevDO0UVgadMbfEqvWqoNpyGV9dNGibfzNHcMweSZUQKGwtuEz6XS1lsQIWKe01MVuStr5mj8wjUdwLMMNYIM2y8zWWTLA2TkM7H8xAHl3adPOouhGnBK10ijTf5XnzexBCCTg1Q9CfIUorFBtvyuuNc_Iqr6Fs0zzRslRuhgcOjqH1xUEzsssgXOjzT7R_gc8jwzirvjg8so-5-0Okpjptlj8mC69J"
                                    alt="Zupiter Factory"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <div className="absolute -bottom-6 -right-6 bg-white dark:bg-slate-800 p-6 rounded-xl shadow-xl border border-slate-100 dark:border-slate-700 max-w-xs">
                                <p className="text-sm font-semibold text-slate-900 dark:text-white">"Quality is not an act, it is a habit."</p>
                                <p className="text-xs text-slate-500 mt-2">- Zupiter Manufacturing Team</p>
                            </div>
                        </motion.div>
                    </div>
                </div>

                {/* Certifications */}
                <div className="bg-slate-50 dark:bg-slate-900 py-24">
                    <div className="max-w-7xl mx-auto px-6 text-center">
                        <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-12">Certified Excellence</h2>
                        <div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-70 grayscale hover:grayscale-0 transition-all duration-500">
                            {['ISO 9001:2015', 'GMP Certified', 'WHO Compliant', 'MSME Registered'].map((cert, idx) => (
                                <div key={idx} className="flex flex-col items-center gap-4">
                                    <div className="w-20 h-20 bg-white dark:bg-slate-800 rounded-full flex items-center justify-center shadow-md">
                                        <span className="material-icons text-4xl text-primary">verified_user</span>
                                    </div>
                                    <span className="font-bold text-slate-700 dark:text-slate-300">{cert}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
};

export default About;
