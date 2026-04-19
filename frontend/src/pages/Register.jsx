import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Mail, Lock, User, ArrowRight } from 'lucide-react';

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    // Simulate registration
    console.log('Registering', name, email);
    navigate('/');
  };

  return (
    <div className="min-h-screen flex items-center justify-center pt-20 px-6 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/3 left-1/4 w-72 h-72 bg-indigo-600/10 rounded-full blur-[100px] pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.2, 0.8, 0.2, 1] }}
        className="w-full max-w-md glass p-10 rounded-[2rem] shadow-premium relative z-10"
      >
        <div className="text-center mb-8">
          <Link to="/" className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br from-primary to-indigo-600 rounded-2xl shadow-glow mb-6 hover:scale-105 transition-transform">
            <span className="text-white font-black text-2xl leading-none">G</span>
          </Link>
          <h2 className="text-3xl font-black text-white mb-2">Create Account</h2>
          <p className="text-slate-400 text-sm">Join Gadigo to start your luxury journey.</p>
        </div>

        <form onSubmit={handleRegister} className="space-y-5">
          <div className="space-y-1.5">
            <label className="text-xs font-bold text-slate-400 uppercase tracking-wider ml-1">Full Name</label>
            <div className="relative">
              <User className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500" size={18} />
              <input
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="John Doe"
                className="w-full bg-white/[0.03] border border-white/[0.08] rounded-xl py-3.5 pl-12 pr-4 text-white placeholder:text-slate-600 outline-none focus:border-primary/50 focus:bg-white/[0.05] transition-all text-sm font-medium"
              />
            </div>
          </div>

          <div className="space-y-1.5">
            <label className="text-xs font-bold text-slate-400 uppercase tracking-wider ml-1">Email</label>
            <div className="relative">
              <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500" size={18} />
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="hello@gadigo.com"
                className="w-full bg-white/[0.03] border border-white/[0.08] rounded-xl py-3.5 pl-12 pr-4 text-white placeholder:text-slate-600 outline-none focus:border-primary/50 focus:bg-white/[0.05] transition-all text-sm font-medium"
              />
            </div>
          </div>

          <div className="space-y-1.5">
            <label className="text-xs font-bold text-slate-400 uppercase tracking-wider ml-1">Password</label>
            <div className="relative">
              <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500" size={18} />
              <input
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className="w-full bg-white/[0.03] border border-white/[0.08] rounded-xl py-3.5 pl-12 pr-4 text-white placeholder:text-slate-600 outline-none focus:border-primary/50 focus:bg-white/[0.05] transition-all text-sm font-medium"
              />
            </div>
          </div>

          <button
            type="submit"
            className="w-full btn-primary py-4 flex justify-center mt-4 text-base"
          >
            Create Account <ArrowRight size={18} />
          </button>
        </form>

        <div className="mt-8 text-center">
          <p className="text-sm text-slate-400 font-medium">
            Already have an account?{' '}
            <Link to="/login" className="text-primary font-bold hover:underline">
              Sign In
            </Link>
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default Register;
