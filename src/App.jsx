import { useRef } from 'react'
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'

import Home from './pages/Home'
import Products from './pages/Products'
import About from './pages/About'
import Contact from './pages/Contact'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

// Scroll to top on route change
const ScrollToTop = () => {
    const { pathname } = useLocation();
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);
    return null;
}

function App() {
  return (
    <Router>
      <ScrollToTop />

      <div className="min-h-screen bg-background-light dark:bg-background-dark text-slate-900 dark:text-slate-100 font-display">
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}


export default App
