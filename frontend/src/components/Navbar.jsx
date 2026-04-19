import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Car, Bike, ChevronDown, Menu, X, LogIn, UserPlus } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdown, setDropdown] = useState(null);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  const navItems = [
    {
      name: 'Rentals',
      submenu: [
        { name: 'Luxury Cars', path: '/rentals/cars', icon: <Car size={15} /> },
        { name: 'Sport Bikes', path: '/rentals/bikes', icon: <Bike size={15} /> },
      ],
    },
    { name: 'Packages', path: '/packages' },
    { name: 'Destinations', path: '/places' },
    { name: 'Partners', path: '/owners' },
  ];

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.2, 0.8, 0.2, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'py-3 bg-navy-900/80 backdrop-blur-2xl border-b border-white/[0.07] shadow-[0_8px_32px_rgba(0,0,0,0.5)]'
            : 'py-5 bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <div className="w-9 h-9 bg-gradient-to-br from-primary to-indigo-600 rounded-xl flex items-center justify-center shadow-glow group-hover:scale-110 transition-transform duration-300">
              <span className="text-white font-black text-lg leading-none">G</span>
            </div>
            <span className="text-xl font-black tracking-tight bg-gradient-to-r from-white to-slate-400 bg-clip-text text-transparent">
              GADIGO
            </span>
          </Link>

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <div
                key={item.name}
                className="relative"
                onMouseEnter={() => item.submenu && setDropdown(item.name)}
                onMouseLeave={() => setDropdown(null)}
              >
                <Link
                  to={item.path || '#'}
                  className={`flex items-center gap-1 text-sm font-semibold tracking-wide transition-colors duration-200 ${
                    location.pathname === item.path
                      ? 'text-primary'
                      : 'text-slate-300 hover:text-white'
                  }`}
                >
                  {item.name}
                  {item.submenu && (
                    <ChevronDown
                      size={13}
                      className={`transition-transform duration-300 ${
                        dropdown === item.name ? 'rotate-180 text-primary' : ''
                      }`}
                    />
                  )}
                </Link>

                <AnimatePresence>
                  {item.submenu && dropdown === item.name && (
                    <motion.div
                      initial={{ opacity: 0, y: 8, scale: 0.97 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 8, scale: 0.97 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-[130%] left-1/2 -translate-x-1/2 w-52 bg-navy-900/95 backdrop-blur-xl rounded-2xl overflow-hidden border border-white/[0.08] shadow-premium p-1.5"
                    >
                      {item.submenu.map((sub) => (
                        <Link
                          key={sub.name}
                          to={sub.path}
                          className="flex items-center gap-3 px-4 py-3 text-sm font-medium text-slate-300 rounded-xl hover:bg-primary/10 hover:text-primary transition-all duration-200"
                        >
                          <span className="p-1.5 rounded-lg bg-white/[0.05]">{sub.icon}</span>
                          {sub.name}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>

          {/* Desktop Auth Buttons */}
          <div className="hidden lg:flex items-center gap-3">
            {localStorage.getItem('user') ? (
              <div className="flex items-center gap-4">
                <span className="text-sm font-semibold text-slate-300">
                  Hi, {JSON.parse(localStorage.getItem('user')).username}
                </span>
                <button
                  onClick={() => {
                    localStorage.removeItem('token');
                    localStorage.removeItem('user');
                    window.location.reload();
                  }}
                  className="flex items-center gap-2 text-sm font-bold px-4 py-2 rounded-xl bg-white/[0.05] border border-white/[0.08] text-white hover:bg-red-500/20 hover:border-red-500/50 hover:text-red-400 transition-all duration-200"
                >
                  Logout
                </button>
              </div>
            ) : (
              <>
                <Link to="/login" className="flex items-center gap-2 text-sm font-semibold text-slate-300 hover:text-white px-4 py-2.5 rounded-xl hover:bg-white/[0.06] transition-all duration-200">
                  <LogIn size={15} /> Login
                </Link>
                <Link to="/register" className="flex items-center gap-2 text-sm font-bold px-5 py-2.5 rounded-xl bg-gradient-to-r from-primary to-indigo-600 text-white shadow-glow hover:shadow-[0_0_30px_rgba(129,140,248,0.5)] hover:-translate-y-0.5 transition-all duration-300">
                  <UserPlus size={15} /> Sign Up
                </Link>
              </>
            )}
          </div>

          {/* Mobile Toggle */}
          <button
            className="lg:hidden w-10 h-10 flex items-center justify-center rounded-xl bg-white/[0.06] border border-white/[0.08] text-white hover:bg-white/10 transition-all"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ duration: 0.35, ease: [0.4, 0, 0.2, 1] }}
            className="lg:hidden fixed inset-0 z-40 bg-navy-950/98 backdrop-blur-2xl flex flex-col p-8 pt-24 gap-6"
          >
            {navItems.map((item, i) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.07 + 0.1 }}
              >
                <Link
                  to={item.path || '#'}
                  className="text-3xl font-black tracking-tight text-white hover:text-primary transition-colors block py-2"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              </motion.div>
            ))}
            <div className="mt-auto flex flex-col gap-3">
              {localStorage.getItem('user') ? (
                <button 
                  onClick={() => {
                    localStorage.removeItem('token');
                    localStorage.removeItem('user');
                    setIsOpen(false);
                    window.location.reload();
                  }}
                  className="btn-outline justify-center py-4 text-base border-red-500/50 text-red-400 hover:bg-red-500/10"
                >
                  Logout
                </button>
              ) : (
                <>
                  <Link to="/login" className="btn-outline justify-center py-4 text-base" onClick={() => setIsOpen(false)}>
                    Login
                  </Link>
                  <Link to="/register" className="btn-primary justify-center py-4 text-base" onClick={() => setIsOpen(false)}>
                    Sign Up
                  </Link>
                </>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
