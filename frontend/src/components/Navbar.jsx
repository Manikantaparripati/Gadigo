import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Car, Bike, Map, Package, User, ChevronDown, Menu, X, LogIn } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdown, setDropdown] = useState(null);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { 
      name: 'Rentals', 
      submenu: [
        { name: 'Luxury Cars', path: '/rentals/cars', icon: <Car size={16} /> },
        { name: 'Sport Bikes', path: '/rentals/bikes', icon: <Bike size={16} /> }
      ]
    },
    { name: 'Packages', path: '/packages' },
    { name: 'Destinations', path: '/places' },
    { name: 'Partners', path: '/owners' }
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? 'py-4 glass shadow-2xl' : 'py-6 bg-transparent'}`}>
      <div className="container flex justify-between items-center">
        <Link to="/" className="text-2xl font-black tracking-tighter flex items-center gap-1 group">
          <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center group-hover:rotate-12 transition-transform">
            <span className="text-white text-lg">G</span>
          </div>
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-slate-400">
            GADIGO
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex gap-10 items-center">
          {navItems.map((item) => (
            <div 
              key={item.name} 
              className="relative group"
              onMouseEnter={() => item.submenu && setDropdown(item.name)}
              onMouseLeave={() => setDropdown(null)}
            >
              <Link 
                to={item.path || '#'} 
                className={`flex items-center gap-1.5 text-sm font-semibold tracking-wide transition-colors ${location.pathname === item.path ? 'text-primary' : 'text-slate-300 hover:text-white'}`}
              >
                {item.name}
                {item.submenu && <ChevronDown size={14} className={`transition-transform duration-300 ${dropdown === item.name ? 'rotate-180 text-primary' : ''}`} />}
              </Link>

              {item.submenu && dropdown === item.name && (
                <div className="absolute top-[120%] left-1/2 -translate-x-1/2 w-56 glass rounded-2xl overflow-hidden shadow-2xl border-white/5 animate-fade-in p-2">
                  {item.submenu.map((sub) => (
                    <Link
                      key={sub.name}
                      to={sub.path}
                      className="flex items-center gap-3 px-4 py-3 text-sm font-medium rounded-xl hover:bg-primary/10 hover:text-primary transition-all group/item"
                    >
                      <span className="p-2 rounded-lg bg-white/5 group-hover/item:bg-primary/20 transition-colors">
                        {sub.icon}
                      </span>
                      {sub.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="hidden lg:flex items-center gap-4">
          <button className="text-sm font-bold text-slate-300 hover:text-white transition-colors">
            Sign Up
          </button>
          <button className="btn btn-primary">
            <LogIn size={18} />
            Login
          </button>
        </div>

        {/* Mobile Toggle */}
        <button className="lg:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden glass fixed inset-0 top-0 z-[100] p-8 flex flex-col gap-8 animate-fade-in">
          <div className="flex justify-between items-center">
             <span className="text-2xl font-black">GADIGO</span>
             <button onClick={() => setIsOpen(false)}><X /></button>
          </div>
          <div className="flex flex-col gap-6">
            {navItems.map(item => (
              <Link key={item.name} to={item.path || '#'} className="text-2xl font-bold" onClick={() => setIsOpen(false)}>
                {item.name}
              </Link>
            ))}
          </div>
          <div className="mt-auto flex flex-col gap-4">
            <button className="btn btn-outline justify-center py-4">Sign Up</button>
            <button className="btn btn-primary justify-center py-4">Login</button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
