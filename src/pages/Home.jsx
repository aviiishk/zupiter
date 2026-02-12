import { motion } from 'framer-motion';
import { Brain, MapPin, Shield } from "lucide-react";
import { Link } from 'react-router-dom';
import Hero from '../components/Hero';

const Home = () => {
    return (
        <div className="min-h-screen flex flex-col">
            <Hero />

            {/* Why Zupiter Section */}
            <section className="py-24 bg-white dark:bg-slate-950">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-sm font-bold text-primary uppercase tracking-[0.2em] mb-4">The Zupiter Standard</h2>
                        <p className="text-4xl font-extrabold text-slate-900 dark:text-white">Why Zupiter?</p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            {
                                icon: <Brain/>,
                                title: 'Herbal Efficiency',
                                desc: "Harnessing the natural antibacterial properties of Assam's finest Neem and organic extracts to create a safer environment."
                            },
                            {
                                icon: <MapPin/>,
                                title: 'Assam’s Own',
                                desc: "Proudly manufactured in the heart of Assam. We combine local heritage with global manufacturing standards for pure protection."
                            },
                            {
                                icon: <Shield />,
                                title: '24-Hour Shield',
                                desc: "Advanced medical-grade formulas that provide a persistent antimicrobial layer, ensuring safety long after application."
                            }
                        ].map((card, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.2 }}
                                className="p-8 bg-background-light dark:bg-background-dark rounded-2xl border border-slate-100 dark:border-slate-800 group hover:border-primary/50 transition-colors hover:shadow-lg"
                            >
                                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                                    <span className="material-icons text-3xl">{card.icon}</span>
                                </div>
                                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4">{card.title}</h3>
                                <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-sm">
                                    {card.desc}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Product Showcase Preview */}
            <section className="py-24 overflow-hidden bg-slate-50 dark:bg-slate-900/50">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="bg-primary/5 rounded-[2.5rem] p-8 md:p-16 flex flex-col md:flex-row items-center gap-12 border border-primary/10">
                        <div className="flex-1">
                            <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 dark:text-white mb-6 leading-tight">
                                Medical-Grade Science, <br />
                                <span className="text-primary italic">Nature's Essence.</span>
                            </h2>
                            <p className="text-lg text-slate-600 dark:text-slate-400 mb-8 max-w-lg">
                                Our range covers everything from hospital-grade floor cleaners to gentle yet effective hand sanitizers designed for daily use.
                            </p>
                            <ul className="space-y-4 mb-10">
                                {[
                                    '99.9% Germ Protection Guaranteed',
                                    'Non-toxic & Eco-friendly Formulas',
                                    'Certified ISO & GMP Manufacturing'
                                ].map((item, idx) => (
                                    <li key={idx} className="flex items-center gap-3">
                                        <span className="material-icons text-primary">check_circle</span>
                                        <span className="font-medium text-slate-700 dark:text-slate-300">{item}</span>
                                    </li>
                                ))}
                            </ul>
                            <Link  to="/products" className="px-8 py-4 bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-bold rounded-xl hover:bg-slate-800 transition-all shadow-xl">
                                Explore Our Range
                            </Link>
                        </div>

                        {/* Image Grid */}
                        <div className="flex-1 grid grid-cols-2 gap-4">
                            <div className="space-y-4 pt-8">
                                <div className="rounded-2xl overflow-hidden shadow-lg h-64 transform hover:scale-105 transition-transform duration-300">
                                    <img src="/disNeem24.jpeg" alt="Sanitizer" className="w-full h-full object-cover" />
                                </div>
                                <div className="rounded-2xl overflow-hidden shadow-lg h-48 bg-primary/20 flex items-center justify-center transform hover:scale-105 transition-transform duration-300">
                                    <span className="material-icons text-6xl text-primary opacity-50">sanitizer</span>
                                </div>
                            </div>
                            <div className="space-y-4">
                                <div className="rounded-2xl overflow-hidden shadow-lg h-48 transform hover:scale-105 transition-transform duration-300">
                                    <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuD3dzlxzqSFd0e-uFbqlrQVPLqs4nKc_CmGT80IOdd_CuneYCQV11OUpflQqz6wR9KEXxVnhoQENcb9CONQ0YqXerXQiGqeN6yI3hM4lfh0R_Qs_Xybu90aTDHlzBmes21OjNghF9DaAkUB2gvxTPVFaIHodoF3L83k6O2RmzgmCv3vJ_LqJEhfh4dTyayebUBRwPESWKfYbatBvk6hTfQGgFAurEBwywhGVf82cPdcFz5A9aaglzwued-3YU4crbVKfYDqHz1hBwBe" alt="Clean Floor" className="w-full h-full object-cover" />
                                </div>
                                <div className="rounded-2xl overflow-hidden shadow-lg h-64 transform hover:scale-105 transition-transform duration-300">
                                    <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuCUCEPjadL3gIRfRdew8rUyiIHMaCz8YIoOngWAWJAE6zpfZWDbnj24TseXQsa9SAqjzPRIqGUUajfqsNiaY4BHIqS1C8VvG960cWyaAA1yHHrpfZf-SO1Kj19h6sB1Cx20ik-zXZLupc3Z2tUDjoV9RGUYKFvCppCqGTfMI1OXGzjvvj4mvkBEs4clXb68D6PmQWPSQYSiMO0mq1htV5STeaCawhuvxbwq31Z9c9Q_n1YbHuqHlnmgRLUb-tVHnhCpNGyYJFbfKfOn" alt="Neem Herb" className="w-full h-full object-cover" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
