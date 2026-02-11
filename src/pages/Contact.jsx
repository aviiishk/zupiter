import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { motion } from 'framer-motion';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        company: '',
        type: '',
        message: ''
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        // Placeholder for API call
        console.log("Form Submitted", formData);
        alert("Thank you for your inquiry. We will contact you shortly.");
        setFormData({ name: '', email: '', phone: '', company: '', type: '', message: '' });
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    return (
        <div className="min-h-screen flex flex-col bg-background-light dark:bg-background-dark">
            <Navbar />

            <main className="flex-grow">
                {/* Header */}
                <div className="bg-white dark:bg-slate-900 py-16 md:py-24">
                    <div className="max-w-7xl mx-auto px-6">
                        <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white mb-6">
                            Trade & Bulk <span className="text-primary">Inquiries</span>
                        </h1>
                        <p className="text-lg text-slate-600 dark:text-slate-400 max-w-3xl leading-relaxed">
                            Partner with Zupiter for premium medical-grade hygiene solutions. We provide specialized herbal and disinfectant products for hospitals, distributors, and large institutions across India.
                        </p>
                    </div>
                </div>

                <div className="max-w-7xl mx-auto px-6 pb-24 -mt-8">
                    <div className="grid lg:grid-cols-12 gap-12">

                        {/* Form */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="lg:col-span-7 bg-white dark:bg-slate-900 p-8 md:p-10 rounded-2xl shadow-xl border border-slate-100 dark:border-slate-800"
                        >
                            <h2 className="text-2xl font-bold mb-8 flex items-center gap-2 text-slate-900 dark:text-white">
                                <span className="material-icons text-primary">business</span>
                                Professional Inquiry
                            </h2>

                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div className="grid md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label className="text-sm font-semibold text-slate-700 dark:text-slate-300">Full Name</label>
                                        <input
                                            type="text"
                                            name="name"
                                            required
                                            value={formData.name}
                                            onChange={handleChange}
                                            className="w-full px-4 py-3 rounded-lg border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                                            placeholder="John Doe"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm font-semibold text-slate-700 dark:text-slate-300">Company Name</label>
                                        <input
                                            type="text"
                                            name="company"
                                            value={formData.company}
                                            onChange={handleChange}
                                            className="w-full px-4 py-3 rounded-lg border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                                            placeholder="HealthCare Pvt Ltd"
                                        />
                                    </div>
                                </div>

                                <div className="grid md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label className="text-sm font-semibold text-slate-700 dark:text-slate-300">Phone</label>
                                        <div className="relative">
                                            <span className="absolute left-4 top-3.5 text-slate-400 text-sm">+91</span>
                                            <input
                                                type="tel"
                                                name="phone"
                                                required
                                                value={formData.phone}
                                                onChange={handleChange}
                                                className="w-full pl-12 pr-4 py-3 rounded-lg border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                                                placeholder="98765 43210"
                                            />
                                        </div>
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm font-semibold text-slate-700 dark:text-slate-300">Email</label>
                                        <input
                                            type="email"
                                            name="email"
                                            required
                                            value={formData.email}
                                            onChange={handleChange}
                                            className="w-full px-4 py-3 rounded-lg border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                                            placeholder="procurement@company.com"
                                        />
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label className="text-sm font-semibold text-slate-700 dark:text-slate-300">Requirement Type</label>
                                    <select
                                        name="type"
                                        value={formData.type}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 rounded-lg border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                                    >
                                        <option value="">Select Requirement Type</option>
                                        <option value="bulk">Bulk Purchase</option>
                                        <option value="distributor">Distributor Partnership</option>
                                        <option value="hospital">Hospital Supply Chain</option>
                                        <option value="export">Export Inquiries</option>
                                    </select>
                                </div>

                                <div className="space-y-2">
                                    <label className="text-sm font-semibold text-slate-700 dark:text-slate-300">Message</label>
                                    <textarea
                                        name="message"
                                        rows="4"
                                        required
                                        value={formData.message}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 rounded-lg border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                                        placeholder="Tell us about your requirements..."
                                    ></textarea>
                                </div>

                                <button
                                    type="submit"
                                    className="w-full bg-primary hover:bg-opacity-90 text-slate-900 font-bold py-4 rounded-lg shadow-lg shadow-primary/20 transition-all flex items-center justify-center gap-2 transform active:scale-[0.98]"
                                >
                                    Send Inquiry
                                    <span className="material-icons">send</span>
                                </button>
                            </form>
                        </motion.div>

                        {/* Sidebar Info */}
                        <div className="lg:col-span-5 space-y-8">
                            <div className="bg-white dark:bg-slate-900 rounded-xl p-8 border border-slate-100 dark:border-slate-800 shadow-sm">
                                <h3 className="text-xl font-bold mb-6 text-slate-900 dark:text-white">Corporate Office</h3>
                                <div className="space-y-6">
                                    <div className="flex gap-4">
                                        <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                                            <span className="material-icons text-primary">location_on</span>
                                        </div>
                                        <div>
                                            <p className="font-semibold text-slate-900 dark:text-white">Guwahati Office</p>
                                            <p className="text-slate-600 dark:text-slate-400 text-sm mt-1">
                                                Zupiter Towers, Sector 4, G.S. Road,<br />Guwahati, Assam - 781005
                                            </p>
                                        </div>
                                    </div>
                                    {/* Add more info items as needed */}
                                </div>
                            </div>

                            {/* Map */}
                            <div className="rounded-xl overflow-hidden h-64 shadow-sm border border-slate-100 dark:border-slate-800 relative group">
                                <img
                                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuDzE3jDguixyu6NPo3996KOoo5pcvlvPV_PbqKlsCgAmK66jtpXH-laEZwmCMsztTIdrBqVSCLe3aMWW4qGLrGBfm9Mtmmr4AL1q0DAc6St-ERaJoU9LxarhhD-X_-7oUxe_jeuAiw7ABb-_rBXe0_b4HqzBRb3sOZh8Mci_oBXbeag8-Md9CfIBKiyh7wBSf_PCNjoPjI-8s4zhu-PiBGaXvpr6SXMBnMrNhO7kZYNqhiqDCQ4xK10SEoaEcBU_aWbgNnqNsupwQXC"
                                    alt="Map Location"
                                    className="w-full h-full object-cover grayscale opacity-80 group-hover:grayscale-0 transition-all duration-500"
                                />
                                <div className="absolute bottom-4 left-4 right-4 bg-white dark:bg-slate-900 p-3 rounded-lg flex items-center justify-between shadow-lg">
                                    <span className="text-xs font-bold uppercase tracking-widest text-slate-500">Main Factory Unit</span>
                                    <a href="#" className="text-xs text-primary font-bold hover:underline">View on Map →</a>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
};

export default Contact;
