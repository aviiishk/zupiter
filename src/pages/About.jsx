import { motion } from "framer-motion";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background-light dark:bg-background-dark">

      <main className="flex-grow">
        {/* Header */}
        <div className="relative py-20 bg-slate-900 overflow-hidden">
          <div className="absolute inset-0 bg-primary/10"></div>
          <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
            <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6">
              Pioneering <span className="text-primary">Hygiene</span>
            </h1>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              From the tea gardens of Assam to hospitals across India, Zupiter
              is redefining protection with nature's wisdom.
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
              <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6">
                Our Story
              </h2>
              <p className="text-slate-600 dark:text-slate-400 mb-6 leading-relaxed">
                In 2020, during the height of the COVID-19 pandemic, Zupiter was
                established with a singular focus: making the environment safe.
                Our journey began with DIS NEEM 24, a white floor disinfectant
                that blended traditional herbal wisdom with modern germ-killing
                science.
              </p>
              <p className="text-slate-600 dark:text-slate-400 mb-6 leading-relaxed">
                Now in our 4th year, Zupiter has evolved into a comprehensive
                hygiene brand. From heavy-duty hospital-grade cleaners to
                aromatic essential oils and personal protective equipment (PPE),
                we continue to expand our commitment to delivering "Victory Over
                Germs." Headquartered in Guwahati, Assam, we ensure that every
                space — from the air you breathe to the floors you walk on —
                remains a sanctuary.
              </p>

              <div className="grid grid-cols-2 gap-6 mt-8">
                <div className="p-4 bg-white dark:bg-slate-800 rounded-xl shadow-sm border border-slate-100 dark:border-slate-700">
                  <h3 className="text-2xl font-bold text-primary mb-1">4+</h3>
                  <p className="text-xs text-slate-500 uppercase tracking-wider">
                    Years of Innovation
                  </p>
                </div>
                <div className="p-4 bg-white dark:bg-slate-800 rounded-xl shadow-sm border border-slate-100 dark:border-slate-700">
                  <h3 className="text-2xl font-bold text-primary mb-1">1+</h3>
                  <p className="text-xs text-slate-500 uppercase tracking-wider">
                    Flagship Product at Launch
                  </p>
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
                  src="/mapAssam.png"
                  alt="Zupiter Factory"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-white dark:bg-slate-800 p-6 rounded-xl shadow-xl border border-slate-100 dark:border-slate-700 max-w-xs">
                <p className="text-sm font-semibold text-slate-900 dark:text-white">
                  "Victory Over Germs."
                </p>
                <p className="text-xs text-slate-500 mt-2">
                  - Zupiter  Team
                </p>
              </div>
            </motion.div>
          </div>
        </div>


      </main>

    </div>
  );
};

export default About;
