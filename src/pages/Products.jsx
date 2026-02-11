import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ProductCard from '../components/ProductCard';

const productsData = [
    {
        id: 1,
        title: "DIS NEEM 24",
        description: "Advanced herbal floor cleaner and disinfectant powered by pure Neem extracts.",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBIsbEXh44GPoA_kQTAcyYZ7MDaSGt3am3tJ0VI6cPSu8rKAtf3cQ3gHhgAq-OioERHFOeU7NJapR_-SaYBLW2S4G5WQrvv05X1a06YQAw4-n2X0EPc20dID8FH_D960DG6ajQz4EwkIp12bsKTaI3Klsq1dAKL1Nm82h5GGyuVX_VyKN4HiHO4P9eq6GRdUZFw_lLS4sF5w8b4kYqLSqpDQlV4ea0Ix5k1F9L6l67Of21ZH8DMDQC__rLg5FNCnoIOEYaq9f1lrvT4",
        tag: "Flagship",
        category: "Herbal Cleaners",
        features: ["99.9% Germ Protection", "24-Hour Active Shield", "Natural Neem Fragrance"]
    },
    {
        id: 2,
        title: "Super Strong Phenyl",
        description: "High-concentration cleaning formula designed for hospitals and industrial spaces.",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAw6cQvy2XciiHnWLee_7aDmuYKz6tCtHJ1ATxiNzWKYnd40N6tyhm9fjjzlRHBehPbCTU3GFR56xf2F4Da5QqgMiNL4A70_vFi8OLld_O6O0ycHj85uSlOZ3UZLVt87FSrRp2AxWlyZIJ4OutxJcF9zo3yfTkaCXByMwbZ89DIxxhOWOghp_6IVG4i6vl2kUWToNZLZhD4Q0j00bUHuRi9zzPf5uB7hwnoZ1MfqxBRBUYplDdb4rJrxa5_vLN2o7NUHRKEC_A2k8Kt",
        tag: "Hospital Grade",
        category: "Medical Grade",
        features: ["Heavy Duty Action", "Anti-Bacterial Formula", "Economical Bulk Usage"]
    },
    {
        id: 3,
        title: "Vogplus Citronella",
        description: "100% pure steam-distilled Citronella oil for wellness and natural insect repellent.",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuA6DfMxgpUgW6Fuxfbl_WD8Ex28xGepXNadAnhDSqlRhgoA6mJQOxWbxZ7SiuL_t6s3JjmKfn6tv6s0cHA8f8N8epso-2EnDYIr5RpMkkVeoRrNl6GNNv0-_Q47HzX9RKl2RfyyL6c9QMrahOYCaBZ3jLnYfeX9JVFnwKfgptKryvNtCY-saPyP_qVYxJZTaYuQh09PdjvhEWyyCCfCklaajnEh1-CsUwPPH29Tk-Sb8887akGVcdQKAMpLYFsbXtM1Xptt8ui569up",
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
    },
    {
        id: 5,
        title: "Instant Hand Gel",
        description: "70% Isopropyl Alcohol based sanitizer enriched with Aloe Vera and Glycerin.",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBYt-IVSIwJhvcr2itC4YU9csMhzUeC1ZY5_jKiJP9w-ppklNEdEz1Y7Cp0g7O4v5oN5SP2V8xx-4vNokm26PLR5aUcdvxeXdk2VRotLW6DR3BwUfFz_RI846TIboeb-thPt2WmgmeHqZzxm9nmNcO55u3B9AiIPfOiRS14gsPU1CtXmb4oYWCiR21nAAKdGl6Gc6A1OLj8ZwwqRB3Q1LaCHxgrnG7vvNGHbGNoXFK3_kPoAQpo1noyD9OyjR3WxGImyHmHJWRrplpo",
        tag: "Skin Care",
        category: "Personal Protection",
        features: ["Kills 99.9% Bacteria", "Moisturizing Formula", "No Sticky Residue"]
    },
    {
        id: 6,
        title: "Zupiter Shield Spray",
        description: "DEET-free, herbal mosquito and insect repellent safe for infants and adults.",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDIFOnPTRYPyeOfbKmewAZBwDIxUxYiRd85P0PTjnqyN9XepJWOVvBOor3iBpuJWflIMmAxZ1OBeXJGgq1BsNWfA7VeBhvMAABZaZOwMGBJRF5ohx9JSRPTbB6Wm5GiKjoWZ7-6Cc2_HS2LVMdufHZwTB_HvRjRQdIwMGXNVUv7_LQ6uJdYylTjJWczWpfKoUILQjJaoWY93Z6OEARYq6Tcy6qd491gWXH99NsqwqXpyTIa3S7024sn6EWRvKy3juSOOQ0OvPtjSQkm",
        tag: "Natural",
        category: "Herbal Cleaners",
        features: ["8-Hour Protection", "Natural Citronella Base", "Eco-Friendly Spray"]
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
            <Navbar />

            {/* Header */}
            <header className="relative overflow-hidden pt-16 pb-12 lg:pt-24 lg:pb-20">
                <div className="max-w-7xl mx-auto px-6 text-center">
                    <h1 className="text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white mb-6">
                        Advanced Hygiene for <span className="text-primary">Healthy Spaces</span>
                    </h1>
                    <p className="max-w-2xl mx-auto text-lg text-slate-600 dark:text-slate-400 mb-8">
                        Based in Assam, Zupiter blends traditional herbal wisdom with medical-grade precision.
                    </p>

                    {/* Filters */}
                    <div className="flex flex-wrap items-center justify-center gap-3">
                        {categories.map(cat => (
                            <button
                                key={cat}
                                onClick={() => setFilter(cat)}
                                className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-200 ${filter === cat
                                        ? 'bg-primary text-slate-900 shadow-lg shadow-primary/20'
                                        : 'bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 hover:bg-primary/10'
                                    }`}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>
                </div>
            </header>

            {/* Product Grid */}
            <main className="max-w-7xl mx-auto px-6 pb-24 flex-grow w-full">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                    {filteredProducts.map(product => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </div>
            </main>

            <Footer />
        </div>
    );
};

export default Products;
