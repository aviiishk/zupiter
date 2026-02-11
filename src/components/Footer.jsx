import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="bg-slate-900 text-slate-300 py-16 mt-auto">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid md:grid-cols-4 gap-12 mb-12">
                    {/* Brand Column */}
                    <div className="col-span-1 md:col-span-1">
                        <div className="flex items-center gap-2 mb-6">
                            <div className="w-8 h-8 bg-primary rounded flex items-center justify-center">
                                <span className="material-icons text-slate-900 text-sm">shield</span>
                            </div>
                            <span className="text-xl font-bold text-white">ZUPITER</span>
                        </div>
                        <p className="text-sm leading-relaxed mb-6 text-slate-400">
                            Pioneering herbal-medical hygiene solutions from the heart of Assam since 2020. Quality you can trust, protection you can feel.
                        </p>
                        <div className="flex gap-4">
                            {/* Social Icons */}
                            {['facebook', 'camera_alt', 'alternate_email'].map((icon) => (
                                <a
                                    key={icon}
                                    href="#"
                                    className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-primary hover:text-slate-900 transition-all duration-300"
                                >
                                    <span className="material-icons text-lg">{icon}</span>
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-white font-bold mb-6">Quick Links</h4>
                        <ul className="space-y-4 text-sm">
                            <li><Link to="/products" className="hover:text-primary transition-colors">Our Catalog</Link></li>
                            <li><Link to="/contact" className="hover:text-primary transition-colors">Bulk Orders</Link></li>
                            <li><Link to="/about" className="hover:text-primary transition-colors">Manufacturing Units</Link></li>
                            <li><Link to="/about" className="hover:text-primary transition-colors">Certifications</Link></li>
                        </ul>
                    </div>

                    {/* Support */}
                    <div>
                        <h4 className="text-white font-bold mb-6">Support</h4>
                        <ul className="space-y-4 text-sm">
                            <li><Link to="/contact" className="hover:text-primary transition-colors">Contact Us</Link></li>
                            <li><Link to="/contact" className="hover:text-primary transition-colors">Trade Inquiries</Link></li>
                            <li><span className="hover:text-primary transition-colors cursor-pointer">MSDS Sheets</span></li>
                            <li><span className="hover:text-primary transition-colors cursor-pointer">FAQs</span></li>
                        </ul>
                    </div>

                    {/* Newsletter */}
                    <div>
                        <h4 className="text-white font-bold mb-6">Newsletter</h4>
                        <p className="text-xs mb-4 text-slate-400">Stay updated on our latest products and hygiene tips.</p>
                        <form className="flex gap-2" onSubmit={(e) => e.preventDefault()}>
                            <input
                                type="email"
                                placeholder="Your email"
                                className="flex-1 bg-slate-800 border-none rounded-lg px-4 py-2 text-sm focus:ring-2 focus:ring-primary text-white placeholder-slate-500"
                            />
                            <button className="px-4 py-2 bg-primary text-slate-900 font-bold rounded-lg hover:bg-primary/90 transition-all">
                                Join
                            </button>
                        </form>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-12 border-t border-slate-800 flex flex-col md:flex-row items-center justify-between gap-6">
                    <p className="text-xs text-slate-500">
                        © {new Date().getFullYear()} Zupiter Hygiene Solutions. All rights reserved. Made in Assam, India.
                    </p>
                    <div className="flex gap-8 text-xs text-slate-500">
                        <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                        <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
