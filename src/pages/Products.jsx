import { useState } from 'react';
import ProductCard from '../components/ProductCard';

const productsData = [
    {
        id: 1,
        title: "DIS NEEM 24",
        description: "Advanced herbal floor cleaner and disinfectant powered by pure Neem extracts.",
        image: "/disNeem24.jpeg",
        tag: "Flagship",
        category: "Herbal Cleaners",
        features: ["99.9% Germ Protection", "24-Hour Active Shield", "Natural Neem Fragrance"]
    },
    {
        id: 2,
        title: "Super Strong Phenyl",
        description: "High-concentration cleaning formula designed for hospitals and industrial spaces.",
        image: "/superStrongPhenyl.jpeg",
        tag: "Hospital Grade",
        category: "Medical Grade",
        features: ["Heavy Duty Action", "Anti-Bacterial Formula", "Economical Bulk Usage"]
    },
    {
        id: 3,
        title: "Vogplus Citronella",
        description: "100% pure steam-distilled Citronella oil for wellness and natural insect repellent.",
        image: "/citronella.jpeg",
        tag: "Wellness",
        category: "Essential Oils",
        features: ["Therapeutic Grade", "Natural Aroma", "Skin Safe Dilution"]
    },
    {
        id: 4,
        title: "Personal Protection",
        description: "Certified 3-ply surgical masks and premium N95 respirators for daily safety.",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuArGIlJNzHUacN9wdEdN73vPdRmXt0HaX6aCXjofClA8QezbOY-RIfrhV9nVAfXNZXVSmtVwYspT0M54vslEvPso8H6V-CQ4dXHc-070MCMOVAC_r_XEktuAIinFftxb511F3pLYUdnDKhuRLz1-kC1I4BDoqfVHd8NgNWhoUxiN_CceNcK6O8c6THushnM5D7pDAsdBK-n4cw6kZON37t7XODvOu8Rq_9qgNZ2R305f1rJGqxMVEK5-BTtRib4LHdnWPh8tf09nmn5",
        tag: "Safety Gear",
        category: "Personal Protection",
        features: ["BFE > 95% Certified", "Soft Inner Layer", "Lightweight Design"]
    }
];

const Products = () => {
    const [filter, setFilter] = useState('All');
    const categories = ['All', 'Herbal Cleaners', 'Medical Grade', 'Essential Oils', 'Personal Protection'];

    const filteredProducts = filter === 'All'
        ? productsData
        : productsData.filter(p => p.category === filter);

    return (
        <div className="min-h-screen flex flex-col bg-background-light dark:bg-background-dark">

            {/* Header */}
            <header className="relative overflow-hidden pt-20 sm:pt-24 lg:pt-28 pb-12 sm:pb-16 lg:pb-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">

                    <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white mb-4 sm:mb-6">
                        Advanced Hygiene for <span className="text-primary">Healthy Spaces</span>
                    </h1>

                    <p className="max-w-2xl mx-auto text-base sm:text-lg text-slate-600 dark:text-slate-400 mb-8">
                        Based in Assam, Zupiter blends traditional herbal wisdom with medical-grade precision.
                    </p>

                    {/* Mobile Horizontal Scroll Filters */}
                    <div className="relative">
                        <div className="flex gap-3 overflow-x-auto whitespace-nowrap no-scrollbar px-1">
                            {categories.map(cat => (
                                <button
                                    key={cat}
                                    onClick={() => setFilter(cat)}
                                    className={`flex-shrink-0 px-5 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                                        filter === cat
                                            ? 'bg-primary text-slate-900 shadow-lg shadow-primary/20'
                                            : 'bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 hover:bg-primary/10'
                                    }`}
                                >
                                    {cat}
                                </button>
                            ))}
                        </div>
                    </div>

                </div>
            </header>

            {/* Product Grid */}
            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20 sm:pb-24 flex-grow w-full">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8">
                    {filteredProducts.map(product => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </div>
            </main>

        </div>
    );
};

export default Products;
