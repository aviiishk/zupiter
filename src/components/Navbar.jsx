import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();

    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'Products', path: '/products' },
        { name: 'About Us', path: '/about' },
        { name: 'Contact', path: '/contact' },
    ];

    const isActive = (path) => location.pathname === path;

    return (
        <nav className="sticky top-0 z-50 bg-white/80 dark:bg-background-dark/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 transition-colors duration-300">
            <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
                {/* Logo */}
                <Link to="/" className="flex items-center gap-2 group">
                    <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center transform group-hover:scale-110 transition-transform">
                        <span className="material-icons text-white">shield</span>
                    </div>
                    <span className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white">ZUPITER</span>
                </Link>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center space-x-8">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            to={link.path}
                            className={`text-sm font-medium transition-colors duration-200 ${isActive(link.path)
                                    ? 'text-primary font-semibold'
                                    : 'text-slate-600 dark:text-slate-300 hover:text-primary dark:hover:text-primary'
                                }`}
                        >
                            {link.name}
                        </Link>
                    ))}
                </div>

                {/* CTA Button */}
                <div className="hidden md:flex items-center gap-4">
                    <Link
                        to="/contact"
                        className="px-6 py-2.5 bg-primary text-slate-900 font-bold rounded-lg hover:shadow-lg hover:shadow-primary/20 hover:-translate-y-0.5 transition-all duration-200"
                    >
                        Request Quote
                    </Link>
                </div>

                {/* Mobile Menu Button */}
                <div className="md:hidden flex items-center">
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="text-slate-900 dark:text-white hover:text-primary focus:outline-none"
                    >
                        <span className="material-icons text-2xl">{isOpen ? 'close' : 'menu'}</span>
                    </button>
                </div>
            </div>

            {/* Mobile Menu Dropdown */}
            {isOpen && (
                <div className="md:hidden bg-white dark:bg-background-dark border-t border-slate-200 dark:border-slate-800">
                    <div className="px-6 py-4 space-y-4 flex flex-col">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                to={link.path}
                                onClick={() => setIsOpen(false)}
                                className={`text-base font-medium transition-colors ${isActive(link.path)
                                        ? 'text-primary'
                                        : 'text-slate-600 dark:text-slate-300 hover:text-primary'
                                    }`}
                            >
                                {link.name}
                            </Link>
                        ))}
                        <Link
                            to="/contact"
                            onClick={() => setIsOpen(false)}
                            className="px-6 py-3 bg-primary text-slate-900 font-bold rounded-lg text-center shadow-lg shadow-primary/20"
                        >
                            Request Quote
                        </Link>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
