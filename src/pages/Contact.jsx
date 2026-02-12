import { motion } from "framer-motion";

const Contact = () => {
  return (
    <div className="min-h-screen bg-background-light dark:bg-background-dark">
      <main>
        {/* Header */}
        <div className="bg-white dark:bg-slate-900 py-20 text-center">
          <div className="max-w-4xl mx-auto px-6">
            <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white mb-6">
              Visit <span className="text-primary">Zupiter</span>
            </h1>
            <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
              Connect with us directly for premium hygiene and medical-grade
              solutions. We’re located in the heart of Guwahati.
            </p>
          </div>
        </div>

        {/* Centered Content */}
        <div className="max-w-4xl mx-auto px-6 py-20">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-10"
          >
            {/* Address Card */}
            <div className="bg-white dark:bg-slate-900 rounded-2xl p-10 shadow-xl border border-slate-100 dark:border-slate-800 text-center">
              <div className="w-16 h-16 mx-auto rounded-full bg-primary/10 flex items-center justify-center mb-6">
                <span className="material-icons text-primary text-3xl">
                  location_on
                </span>
              </div>

              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
                Our Store Location
              </h3>

              <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                Health Zone, Barabazar, Pandu <br />
                Guwahati, Assam - 781012
              </p>

              {/* Action Buttons */}
              <div className="flex flex-col md:flex-row justify-center gap-4 mt-8">
                <a
                  href="mailto:thehealthzonemaligoan@rediffmail.com"
                  className="px-6 py-3 bg-primary text-slate-900 font-bold rounded-lg hover:shadow-lg hover:shadow-primary/20 transition-all flex items-center justify-center gap-2"
                >
                  <span className="material-icons text-sm">mail</span>
                  Email Us
                </a>

                <a
                  href="tel:9435591874"
                  className="px-6 py-3 border border-primary text-primary font-semibold rounded-lg hover:bg-primary hover:text-slate-900 transition-all flex items-center justify-center gap-2"
                >
                  <span className="material-icons text-sm">call</span>
                  Call Now
                </a>

                <a
                  href="https://www.google.com/maps/search/?api=1&query=Health+Zone+Barabazar+Pandu+Guwahati+Assam+781012"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 border border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-300 font-semibold rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-all flex items-center justify-center gap-2"
                >
                  <span className="material-icons text-sm">map</span>
                  View on Map
                </a>
              </div>
            </div>

            {/* Map Section */}
            <div className="rounded-2xl overflow-hidden shadow-xl border border-slate-100 dark:border-slate-800">
              <iframe
                title="Health Zone Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d40809.211497393415!2d91.6565322743164!3d26.162036500000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x375a5b22b65dd4d9%3A0xea2076855913960c!2sTHE%20HEALTH%20ZONE!5e1!3m2!1sen!2sin!4v1770895552191!5m2!1sen!2sin"
                className="w-full h-96"
                loading="lazy"
                allowFullScreen
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </motion.div>
        </div>
      </main>
    </div>
  );
};

export default Contact;
