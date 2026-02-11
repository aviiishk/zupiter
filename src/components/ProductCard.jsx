import React from 'react';
import { motion } from 'framer-motion';

const ProductCard = ({ product }) => {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="group bg-white dark:bg-slate-800 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all border border-slate-200 dark:border-slate-700 flex flex-col h-full"
        >
            <div className="relative h-64 bg-slate-50 dark:bg-slate-900 p-8 flex items-center justify-center overflow-hidden">
                {product.tag && (
                    <div className="absolute top-4 left-4 z-10">
                        <span className={`text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-widest ${product.tag === 'Flagship'
                                ? 'bg-primary text-slate-900'
                                : 'bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-200'
                            }`}>
                            {product.tag}
                        </span>
                    </div>
                )}
                <img
                    src={product.image}
                    alt={product.title}
                    className="h-full w-full object-contain transform group-hover:scale-110 transition-transform duration-500"
                />
            </div>

            <div className="p-6 flex-grow flex flex-col">
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">{product.title}</h3>
                <p className="text-sm text-slate-600 dark:text-slate-400 mb-4 flex-grow line-clamp-3">
                    {product.description}
                </p>

                <ul className="space-y-2 mb-6">
                    {product.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-xs text-slate-500 dark:text-slate-400">
                            <span className="material-icons text-primary text-base mr-2">check_circle</span>
                            {feature}
                        </li>
                    ))}
                </ul>

                <button className="w-full py-3 bg-slate-100 dark:bg-slate-700 text-slate-900 dark:text-white font-bold rounded-lg hover:bg-primary hover:text-slate-900 transition-colors duration-200">
                    Inquire Now
                </button>
            </div>
        </motion.div>
    );
};

export default ProductCard;
