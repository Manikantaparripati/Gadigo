import React from 'react';
import { Search, MapPin, Calendar, ShieldCheck, Clock, Award, ArrowRight, Globe, Share2, Mail } from 'lucide-react';

const Home = () => {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
        {/* Animated Background Orbs */}
        <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-primary/20 blur-[150px] rounded-full animate-pulse"></div>
        <div className="absolute bottom-[10%] right-[-5%] w-[400px] h-[400px] bg-indigo-600/10 blur-[120px] rounded-full"></div>

        <div className="container relative z-10 grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8 text-left reveal">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-light border-white/5 text-primary text-xs font-bold tracking-widest uppercase">
              <Award size={14} /> The Gold Standard in Rentals
            </div>
            <h1 className="text-6xl md:text-8xl font-black leading-[0.9] tracking-tighter">
              DRIVE THE <br />
              <span className="text-primary italic">EXTRAORDINARY.</span>
            </h1>
            <p className="text-xl text-text-secondary max-w-lg leading-relaxed font-medium">
              Experience the pinnacle of luxury mobility. From sleek supercars to rugged adventure bikes, Gadigo delivers premium experiences for every journey.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <button className="btn btn-primary px-10 py-4 text-base">
                Explore Fleet <ArrowRight size={18} />
              </button>
              <button className="btn btn-outline px-10 py-4 text-base">
                Our Services
              </button>
            </div>

            <div className="flex gap-12 pt-8 border-t border-white/5">
              <div>
                <h4 className="text-3xl font-bold">500+</h4>
                <p className="text-sm text-text-muted font-semibold uppercase tracking-wider">Vehicles</p>
              </div>
              <div>
                <h4 className="text-3xl font-bold">12k</h4>
                <p className="text-sm text-text-muted font-semibold uppercase tracking-wider">Happy Clients</p>
              </div>
              <div>
                <h4 className="text-3xl font-bold">24/7</h4>
                <p className="text-sm text-text-muted font-semibold uppercase tracking-wider">Support</p>
              </div>
            </div>
          </div>

          <div className="relative reveal delay-300 hidden lg:block">
            <div className="relative z-10 rounded-[40px] overflow-hidden shadow-2xl border-white/10 glass p-4">
              <div className="aspect-[4/5] bg-slate-800 rounded-[30px] overflow-hidden relative group">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent"></div>
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&q=80&w=1000')] bg-cover bg-center group-hover:scale-110 transition-transform duration-1000"></div>
                <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black/80 to-transparent">
                  <h3 className="text-2xl font-bold">Porsche 911 Turbo S</h3>
                  <p className="text-primary font-bold mt-2">Starting at $299 / day</p>
                </div>
              </div>
            </div>
            <div className="absolute -bottom-10 -left-20 glass p-6 rounded-3xl shadow-2xl animate-bounce-slow">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-accent rounded-2xl flex items-center justify-center text-black">
                  <ShieldCheck size={24} />
                </div>
                <div>
                  <p className="text-xs font-bold text-text-muted uppercase">Insurance</p>
                  <p className="text-sm font-bold">Premium Coverage</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Booking Search Bar Section */}
      <section className="container -mt-20 relative z-30">
        <div className="glass p-4 rounded-[32px] shadow-2xl">
          <div className="grid md:grid-cols-4 gap-2">
            <div className="p-6 rounded-2xl bg-white/5 hover:bg-white/10 transition-colors cursor-pointer group">
              <label className="flex items-center gap-2 text-[10px] font-black uppercase text-text-muted mb-2 tracking-widest">
                <MapPin size={12} className="text-primary" /> Location
              </label>
              <input type="text" placeholder="Select City" className="bg-transparent border-none outline-none font-bold w-full text-white placeholder:text-slate-500" />
            </div>
            <div className="p-6 rounded-2xl bg-white/5 hover:bg-white/10 transition-colors cursor-pointer group">
              <label className="flex items-center gap-2 text-[10px] font-black uppercase text-text-muted mb-2 tracking-widest">
                <Calendar size={12} className="text-primary" /> Pick up
              </label>
              <input type="date" className="bg-transparent border-none outline-none font-bold w-full text-white color-scheme-dark" />
            </div>
            <div className="p-6 rounded-2xl bg-white/5 hover:bg-white/10 transition-colors cursor-pointer group">
              <label className="flex items-center gap-2 text-[10px] font-black uppercase text-text-muted mb-2 tracking-widest">
                <Calendar size={12} className="text-primary" /> Drop off
              </label>
              <input type="date" className="bg-transparent border-none outline-none font-bold w-full text-white color-scheme-dark" />
            </div>
            <div className="p-2">
              <button className="w-full h-full bg-primary hover:bg-primary-hover rounded-2xl text-lg font-bold flex items-center justify-center gap-3 transition-all group">
                <Search size={24} className="group-hover:scale-110 transition-transform" />
                Find My Ride
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-32 container">
        <div className="text-center space-y-4 mb-20 reveal">
          <h5 className="text-primary font-black uppercase tracking-[0.3em] text-xs">Excellence Guaranteed</h5>
          <h2 className="text-5xl font-bold tracking-tight">THE GADIGO EXPERIENCE</h2>
          <p className="text-text-secondary max-w-xl mx-auto">We don't just rent vehicles; we provide a gateway to your most memorable journeys with unmatched service quality.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-12">
          {[
            { icon: <ShieldCheck className="text-primary" />, title: "Full Insurance", desc: "Every ride comes with comprehensive premium insurance for total peace of mind." },
            { icon: <Clock className="text-primary" />, title: "24/7 Support", desc: "Our concierge team is available around the clock to assist you anywhere, anytime." },
            { icon: <Award className="text-primary" />, title: "Premium Fleet", desc: "We only list vehicles that meet our rigorous standards for performance and luxury." }
          ].map((feature, i) => (
            <div key={i} className="glass-light p-10 rounded-[40px] hover:bg-white/5 transition-all group">
              <div className="w-16 h-16 bg-white/5 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-primary/20 transition-all">
                {feature.icon}
              </div>
              <h3 className="text-2xl font-bold mb-4">{feature.title}</h3>
              <p className="text-text-secondary leading-relaxed">{feature.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="pt-32 pb-12 border-t border-white/5">
        <div className="container">
          <div className="grid md:grid-cols-4 gap-16 mb-20">
            <div className="col-span-2 space-y-8">
               <h2 className="text-4xl font-black italic tracking-tighter">GADIGO.</h2>
               <p className="text-text-secondary max-w-sm leading-relaxed">The world's leading luxury travel and rental platform. Redefining how you explore the planet since 2024.</p>
               <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-full glass-light flex items-center justify-center hover:bg-primary transition-colors cursor-pointer"><Globe size={18}/></div>
                  <div className="w-10 h-10 rounded-full glass-light flex items-center justify-center hover:bg-primary transition-colors cursor-pointer"><Share2 size={18}/></div>
                  <div className="w-10 h-10 rounded-full glass-light flex items-center justify-center hover:bg-primary transition-colors cursor-pointer"><Mail size={18}/></div>
               </div>
            </div>
            <div className="space-y-6">
              <h4 className="font-bold text-lg">Company</h4>
              <ul className="space-y-4 text-text-secondary text-sm font-medium">
                <li className="hover:text-primary cursor-pointer transition-colors">About Us</li>
                <li className="hover:text-primary cursor-pointer transition-colors">Career</li>
                <li className="hover:text-primary cursor-pointer transition-colors">Blog</li>
                <li className="hover:text-primary cursor-pointer transition-colors">Press</li>
              </ul>
            </div>
            <div className="space-y-6">
              <h4 className="font-bold text-lg">Support</h4>
              <ul className="space-y-4 text-text-secondary text-sm font-medium">
                <li className="hover:text-primary cursor-pointer transition-colors">Privacy Policy</li>
                <li className="hover:text-primary cursor-pointer transition-colors">Terms of Service</li>
                <li className="hover:text-primary cursor-pointer transition-colors">Contact Us</li>
                <li className="hover:text-primary cursor-pointer transition-colors">Help Center</li>
              </ul>
            </div>
          </div>
          <div className="pt-8 border-t border-white/5 text-center text-text-muted text-xs font-bold uppercase tracking-widest">
            © 2024 GADIGO LUXURY TRAVEL. ALL RIGHTS RESERVED.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
