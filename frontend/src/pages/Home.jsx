import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  ArrowRight, Search, MapPin, Calendar, ShieldCheck,
  Clock, Award, Zap, Users, Headphones,
  Globe, Share2, Mail, Star, ChevronDown, Link2
} from 'lucide-react';

/* ─── Animation Variants ─────────────────────────────────── */
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.2, 0.8, 0.2, 1] } },
};
const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};
const fadeIn = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 0.6 } },
};

/* ─── Data ───────────────────────────────────────────────── */
const stats = [
  { icon: <Zap size={22} className="text-primary" />, value: '500+', label: 'Vehicles' },
  { icon: <Users size={22} className="text-primary" />, value: '12k', label: 'Happy Clients' },
  { icon: <Headphones size={22} className="text-primary" />, value: '24/7', label: 'Support' },
  { icon: <Award size={22} className="text-primary" />, value: '98%', label: 'Satisfaction' },
];

const cars = [
  {
    name: 'Porsche 911 Turbo S',
    price: '$299',
    rating: 4.9,
    reviews: 128,
    image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&q=80&w=800',
    features: ['Full Insurance', 'Premium Coverage', 'GPS Included'],
    badge: 'Most Popular',
    badgeColor: 'bg-primary/20 text-primary',
  },
  {
    name: 'Ferrari SF90 Stradale',
    price: '$449',
    rating: 4.8,
    reviews: 94,
    image: 'https://images.unsplash.com/photo-1592198084033-aade902d1aae?auto=format&fit=crop&q=80&w=800',
    features: ['Premium Insurance', 'Concierge Service', 'Track Ready'],
    badge: 'Exotic',
    badgeColor: 'bg-red-500/20 text-red-400',
  },
  {
    name: 'Lamborghini Huracán',
    price: '$399',
    rating: 4.9,
    reviews: 76,
    image: 'https://images.unsplash.com/photo-1544636331-e26879cd4d9b?auto=format&fit=crop&q=80&w=800',
    features: ['Full Coverage', 'Airport Pickup', 'VIP Service'],
    badge: 'VIP Choice',
    badgeColor: 'bg-amber-500/20 text-amber-400',
  },
];

const locations = [
  'New York, USA', 'Los Angeles, USA', 'Miami, USA',
  'London, UK', 'Dubai, UAE', 'Paris, France', 'Tokyo, Japan',
];

const features = [
  {
    icon: <ShieldCheck size={28} className="text-primary" />,
    title: 'Full Insurance',
    desc: 'Every ride includes comprehensive premium insurance for total peace of mind on every journey.',
  },
  {
    icon: <Clock size={28} className="text-primary" />,
    title: '24/7 Support',
    desc: 'Our concierge team is available around the clock to assist you anywhere, anytime, worldwide.',
  },
  {
    icon: <Award size={28} className="text-primary" />,
    title: 'Premium Fleet',
    desc: 'Only vehicles meeting our rigorous standards for performance, luxury, and safety make the cut.',
  },
];

/* ─── Helpers ────────────────────────────────────────────── */
const SectionWrapper = ({ children, className = '' }) => (
  <motion.div
    variants={stagger}
    initial="hidden"
    whileInView="show"
    viewport={{ once: true, margin: '-80px' }}
    className={className}
  >
    {children}
  </motion.div>
);

/* ─── Component ──────────────────────────────────────────── */
const Home = () => {
  const [location, setLocation] = useState('');
  const [pickup, setPickup] = useState('');
  const [dropoff, setDropoff] = useState('');

  return (
    <div className="flex flex-col min-h-screen bg-[#020617]">

      {/* ── Hero ─────────────────────────────────────────── */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* BG Image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1544636331-e26879cd4d9b?auto=format&fit=crop&q=80&w=1920')`,
          }}
        />
        {/* Overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#020617] via-[#020617]/85 to-[#020617]/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-transparent to-[#020617]/30" />

        {/* Orbs */}
        <div className="absolute top-20 left-10 w-96 h-96 bg-primary/10 rounded-full blur-[120px] animate-pulse-slow pointer-events-none" />
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-indigo-600/10 rounded-full blur-[100px] pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 pt-28 pb-16 w-full">
          <SectionWrapper className="max-w-3xl">
            {/* Badge */}
            <motion.div variants={fadeUp} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.06] border border-white/[0.1] text-primary text-xs font-bold tracking-widest uppercase mb-8">
              <Award size={13} />
              The Gold Standard in Rentals
            </motion.div>

            {/* Headline */}
            <motion.h1
              variants={fadeUp}
              className="text-6xl md:text-7xl lg:text-[5.5rem] font-black leading-[0.9] tracking-tighter mb-6"
            >
              DRIVE THE
              <br />
              <span className="bg-gradient-to-r from-primary via-indigo-400 to-violet-400 bg-clip-text text-transparent italic">
                EXTRAORDINARY.
              </span>
            </motion.h1>

            {/* Subtext */}
            <motion.p
              variants={fadeUp}
              className="text-lg md:text-xl text-slate-400 max-w-lg leading-relaxed font-medium mb-10"
            >
              Experience the pinnacle of luxury mobility. From sleek supercars to rugged adventure bikes — Gadigo delivers unforgettable journeys.
            </motion.p>

            {/* CTAs */}
            <motion.div variants={fadeUp} className="flex flex-wrap gap-4 mb-16">
              <button className="btn-primary text-base px-9 py-4">
                Explore Fleet <ArrowRight size={18} />
              </button>
              <button className="btn-outline text-base px-9 py-4">
                Our Services
              </button>
            </motion.div>

            {/* Mini Stats */}
            <motion.div
              variants={fadeUp}
              className="flex flex-wrap gap-10 pt-8 border-t border-white/[0.07]"
            >
              {[
                { val: '500+', label: 'Vehicles' },
                { val: '12k', label: 'Happy Clients' },
                { val: '24/7', label: 'Support' },
              ].map((s) => (
                <div key={s.label}>
                  <p className="text-3xl font-black text-white">{s.val}</p>
                  <p className="text-xs text-slate-500 font-bold uppercase tracking-widest mt-1">{s.label}</p>
                </div>
              ))}
            </motion.div>
          </SectionWrapper>
        </div>

        {/* Scroll hint */}
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-slate-500 text-xs font-semibold"
        >
          <ChevronDown size={18} />
          Scroll
        </motion.div>
      </section>

      {/* ── Booking Form ─────────────────────────────────── */}
      <section className="relative z-20 max-w-7xl mx-auto px-6 -mt-8 w-full">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-navy-900/80 backdrop-blur-2xl border border-white/[0.08] rounded-3xl p-3 shadow-[0_20px_60px_rgba(0,0,0,0.5)]"
        >
          <div className="grid md:grid-cols-4 gap-2">
            {/* Location */}
            <div className="p-5 rounded-2xl bg-white/[0.03] hover:bg-white/[0.07] transition-colors group">
              <label className="flex items-center gap-1.5 text-[10px] font-black uppercase text-slate-500 tracking-widest mb-2">
                <MapPin size={11} className="text-primary" /> Location
              </label>
              <div className="relative">
                <select
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  className="w-full bg-transparent border-none outline-none text-white font-semibold text-sm appearance-none cursor-pointer"
                  style={{ colorScheme: 'dark' }}
                >
                  <option value="" className="bg-navy-900">Select City</option>
                  {locations.map((l) => (
                    <option key={l} value={l} className="bg-navy-900">{l}</option>
                  ))}
                </select>
                <ChevronDown size={13} className="absolute right-0 top-1/2 -translate-y-1/2 text-slate-500 pointer-events-none" />
              </div>
            </div>

            {/* Pickup Date */}
            <div className="p-5 rounded-2xl bg-white/[0.03] hover:bg-white/[0.07] transition-colors">
              <label className="flex items-center gap-1.5 text-[10px] font-black uppercase text-slate-500 tracking-widest mb-2">
                <Calendar size={11} className="text-primary" /> Pickup Date
              </label>
              <input
                type="date"
                value={pickup}
                onChange={(e) => setPickup(e.target.value)}
                className="w-full bg-transparent border-none outline-none text-white font-semibold text-sm"
                style={{ colorScheme: 'dark' }}
              />
            </div>

            {/* Drop-off Date */}
            <div className="p-5 rounded-2xl bg-white/[0.03] hover:bg-white/[0.07] transition-colors">
              <label className="flex items-center gap-1.5 text-[10px] font-black uppercase text-slate-500 tracking-widest mb-2">
                <Calendar size={11} className="text-primary" /> Drop-off Date
              </label>
              <input
                type="date"
                value={dropoff}
                onChange={(e) => setDropoff(e.target.value)}
                className="w-full bg-transparent border-none outline-none text-white font-semibold text-sm"
                style={{ colorScheme: 'dark' }}
              />
            </div>

            {/* Submit */}
            <div className="p-1.5">
              <button className="w-full h-full bg-gradient-to-r from-primary to-indigo-600 hover:from-primary/90 hover:to-indigo-500 text-white rounded-2xl font-bold text-sm flex items-center justify-center gap-2.5 shadow-glow hover:shadow-[0_0_40px_rgba(129,140,248,0.5)] hover:-translate-y-0.5 transition-all duration-300 min-h-[60px]">
                <Search size={19} />
                Find My Ride
              </button>
            </div>
          </div>
        </motion.div>
      </section>

      {/* ── Stats ────────────────────────────────────────── */}
      <section className="max-w-7xl mx-auto px-6 py-24 w-full">
        <SectionWrapper>
          <motion.div variants={fadeUp} className="text-center mb-14">
            <p className="section-label mb-3">By The Numbers</p>
            <h2 className="section-title text-white">Our Achievements</h2>
          </motion.div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {stats.map((s, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                className="stat-card rounded-2xl"
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  {s.icon}
                </div>
                <div>
                  <p className="text-2xl font-black text-white">{s.value}</p>
                  <p className="text-xs text-slate-500 font-bold uppercase tracking-wide">{s.label}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </SectionWrapper>
      </section>

      {/* ── Featured Vehicles ────────────────────────────── */}
      <section className="max-w-7xl mx-auto px-6 pb-24 w-full">
        <SectionWrapper>
          <motion.div variants={fadeUp} className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-4">
            <div>
              <p className="section-label mb-3">Hand-Picked</p>
              <h2 className="section-title text-white">Featured Vehicles</h2>
            </div>
            <button className="flex items-center gap-2 text-primary text-sm font-bold hover:gap-3 transition-all duration-200">
              View All Fleet <ArrowRight size={16} />
            </button>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {cars.map((car, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                className="car-card group"
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
              >
                {/* Image */}
                <div className="relative h-52 overflow-hidden">
                  <img
                    src={car.image}
                    alt={car.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-950/90 via-transparent to-transparent" />
                  {/* Badge */}
                  <span className={`absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-bold ${car.badgeColor} backdrop-blur-sm border border-white/10`}>
                    {car.badge}
                  </span>
                </div>

                {/* Info */}
                <div className="p-6">
                  <div className="flex items-start justify-between mb-1">
                    <h3 className="text-base font-bold text-white leading-tight">{car.name}</h3>
                  </div>

                  <div className="flex items-center gap-1.5 mb-4">
                    <Star size={13} className="text-amber-400 fill-amber-400" />
                    <span className="text-sm font-bold text-white">{car.rating}</span>
                    <span className="text-xs text-slate-500">({car.reviews} reviews)</span>
                  </div>

                  <div className="flex items-end justify-between mb-5">
                    <div>
                      <p className="text-xs text-slate-500 font-semibold">Starting at</p>
                      <p className="text-2xl font-black text-primary">{car.price}<span className="text-sm font-medium text-slate-400">/day</span></p>
                    </div>
                  </div>

                  {/* Features */}
                  <div className="space-y-2 mb-6">
                    {car.features.map((f, fi) => (
                      <div key={fi} className="flex items-center gap-2 text-xs text-slate-400">
                        <div className="w-1 h-1 rounded-full bg-primary flex-shrink-0" />
                        {f}
                      </div>
                    ))}
                  </div>

                  <button className="w-full py-3 rounded-xl bg-white/[0.05] border border-white/[0.08] text-white text-sm font-bold hover:bg-primary/20 hover:border-primary/30 transition-all duration-300">
                    Book Now
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </SectionWrapper>
      </section>

      {/* ── Why Choose Us ────────────────────────────────── */}
      <section className="max-w-7xl mx-auto px-6 pb-24 w-full">
        <SectionWrapper>
          <motion.div variants={fadeUp} className="text-center mb-14">
            <p className="section-label mb-3">Excellence Guaranteed</p>
            <h2 className="section-title text-white mb-4">The Gadigo Experience</h2>
            <p className="text-slate-400 max-w-xl mx-auto text-base">
              We don't just rent vehicles — we provide a gateway to your most memorable journeys.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {features.map((f, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                className="glass-card p-8 rounded-3xl hover:bg-white/[0.06] group transition-all duration-300"
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
              >
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
                  {f.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{f.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </SectionWrapper>
      </section>

      {/* ── Footer ───────────────────────────────────────── */}
      <footer className="border-t border-white/[0.06] mt-auto">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            {/* Brand */}
            <div className="md:col-span-1 space-y-5">
              <div className="flex items-center gap-2">
                <div className="w-9 h-9 bg-gradient-to-br from-primary to-indigo-600 rounded-xl flex items-center justify-center shadow-glow">
                  <span className="text-white font-black text-lg">G</span>
                </div>
                <span className="text-xl font-black tracking-tight bg-gradient-to-r from-white to-slate-400 bg-clip-text text-transparent">
                  GADIGO
                </span>
              </div>
              <p className="text-slate-500 text-sm leading-relaxed">
                The world's leading luxury travel and rental platform. Redefining how you explore the planet.
              </p>
              {/* Social Icons */}
              <div className="flex gap-3">
                {[Globe, Share2, Mail, Link2].map((Icon, i) => (
                  <button key={i} className="w-9 h-9 rounded-xl bg-white/[0.05] border border-white/[0.08] flex items-center justify-center text-slate-400 hover:text-primary hover:bg-primary/10 hover:border-primary/20 transition-all duration-200">
                    <Icon size={15} />
                  </button>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div className="space-y-4">
              <h4 className="text-white font-bold text-sm uppercase tracking-widest">Quick Links</h4>
              <ul className="space-y-3">
                {['Rentals', 'Packages', 'Destinations', 'Partners'].map((item) => (
                  <li key={item}>
                    <a href="#" className="text-slate-500 hover:text-primary text-sm font-medium transition-colors duration-200">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div className="space-y-4">
              <h4 className="text-white font-bold text-sm uppercase tracking-widest">Contact Info</h4>
              <ul className="space-y-3">
                {[
                  { icon: <Mail size={14} />, text: 'hello@gadigo.com' },
                  { icon: <Globe size={14} />, text: 'www.gadigo.com' },
                  { icon: <MapPin size={14} />, text: 'New York, USA' },
                  { icon: <Clock size={14} />, text: '24/7 Support' },
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-2.5 text-slate-500 hover:text-slate-300 text-sm font-medium transition-colors duration-200 cursor-pointer">
                    <span className="text-primary">{item.icon}</span>
                    {item.text}
                  </li>
                ))}
              </ul>
            </div>

            {/* Newsletter */}
            <div className="space-y-4">
              <h4 className="text-white font-bold text-sm uppercase tracking-widest">Stay Updated</h4>
              <p className="text-slate-500 text-sm">Get exclusive deals and the latest from Gadigo.</p>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="your@email.com"
                  className="flex-1 bg-white/[0.04] border border-white/[0.08] rounded-xl px-4 py-2.5 text-sm text-white placeholder:text-slate-600 outline-none focus:border-primary/40 transition-colors"
                />
                <button className="px-4 py-2.5 rounded-xl bg-primary/20 border border-primary/30 text-primary hover:bg-primary/30 transition-all duration-200">
                  <ArrowRight size={16} />
                </button>
              </div>
            </div>
          </div>

          <div className="pt-8 border-t border-white/[0.06] flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-slate-600 text-xs font-bold uppercase tracking-widest">
              © 2024 Gadigo Luxury Travel. All Rights Reserved.
            </p>
            <div className="flex gap-6">
              {['Privacy Policy', 'Terms of Service', 'Cookies'].map((item) => (
                <a key={item} href="#" className="text-slate-600 hover:text-slate-400 text-xs font-semibold transition-colors duration-200">
                  {item}
                </a>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
