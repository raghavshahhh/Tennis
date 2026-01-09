'use client';
import { useState } from 'react';
import SectionTitle from '@/components/SectionTitle';
import Link from 'next/link';
import { Phone, MessageCircle, Calendar, UserPlus, ClipboardCheck, CheckCircle, Send, CreditCard, AlertCircle, Clock } from 'lucide-react';

const steps = [
  { step: 1, title: 'Contact Us', desc: 'Call, WhatsApp, or fill the enquiry form', icon: Phone },
  { step: 2, title: 'Book Trial', desc: 'Schedule a trial session at your preferred location', icon: Calendar },
  { step: 3, title: 'Assessment', desc: 'Our coach assesses and recommends the right program', icon: ClipboardCheck },
  { step: 4, title: 'Enroll', desc: 'Complete enrollment offline at the academy', icon: UserPlus },
];

const locations = [
  { value: 'delhi', label: 'Delhi HQ' },
  { value: 'experion', label: 'Experion Windchants, Gurugram' },
  { value: 'bestech', label: 'Bestech Park View, Gurugram' },
  { value: 'ats', label: 'ATS Kocoon, Gurugram' },
  { value: 'microtek', label: 'Microtek Greenburg, Gurugram' },
  { value: 'ramprastha', label: 'Ramprastha City, Gurugram' },
];

const programs = [
  { value: '', label: 'Not sure / Let coach decide' },
  { value: 'red', label: 'Red Ball (Under 6)' },
  { value: 'orange', label: 'Orange Ball (Under 10)' },
  { value: 'green', label: 'Green Ball (Under 12)' },
  { value: 'intermediate', label: 'Intermediate (12+)' },
  { value: 'advanced', label: 'Advanced (Competitive)' },
  { value: 'adult', label: 'Adult Program (18+)' },
];

export default function JoinPage() {
  const [formStatus, setFormStatus] = useState<'idle' | 'sending' | 'sent'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('sending');
    setTimeout(() => {
      setFormStatus('sent');
      setTimeout(() => setFormStatus('idle'), 3000);
    }, 1000);
  };

  return (
    <>
      {/* Hero */}
      <section className="relative py-16 sm:py-20 px-4">
        <div className="absolute inset-0 rounded-3xl mx-4 -mt-24 pt-24" style={{ background: 'linear-gradient(135deg, #1F7A4D 0%, #155c39 100%)' }}></div>
        <div className="relative max-w-7xl mx-auto text-center text-white">
          <UserPlus className="w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-4 opacity-80" />
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">Join Our Academy</h1>
          <p className="text-white/80 text-base sm:text-lg max-w-2xl mx-auto">
            Start your tennis journey with Pro Ace Tennis Academy
          </p>
        </div>
      </section>

      {/* How to Join */}
      <section className="py-12 sm:py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <SectionTitle title="How to Join" subtitle="Simple 4-step process to start your tennis journey" />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
            {steps.map((item, index) => (
              <div key={item.step} className="text-center relative">
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-8 left-1/2 w-full h-0.5" style={{ background: 'linear-gradient(90deg, #1F7A4D 0%, #2E8B57 100%)' }}></div>
                )}
                <div className="relative z-10 w-14 h-14 sm:w-16 sm:h-16 rounded-xl sm:rounded-2xl flex items-center justify-center text-white mx-auto mb-3 sm:mb-4 hover:scale-110 transition-transform" style={{ background: 'linear-gradient(135deg, #1F7A4D 0%, #2E8B57 100%)' }}>
                  <item.icon className="w-6 h-6 sm:w-7 sm:h-7" />
                </div>
                <div className="text-xs sm:text-sm font-medium mb-1" style={{ color: '#1F7A4D' }}>Step {item.step}</div>
                <h3 className="font-bold text-gray-800 mb-1 sm:mb-2 text-sm sm:text-base">{item.title}</h3>
                <p className="text-gray-600 text-xs sm:text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enquiry Form */}
      <section className="py-12 sm:py-16 px-4">
        <div className="max-w-2xl mx-auto">
          <SectionTitle title="Book Trial Session" subtitle="Fill the form and we'll contact you within 24 hours" />
          <div className="glass-card rounded-2xl sm:rounded-3xl p-6 sm:p-8">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="playerName" className="block text-sm font-medium text-gray-700 mb-1">Player Name *</label>
                  <input type="text" id="playerName" name="playerName" required className="w-full px-4 py-3 glass rounded-xl border-0 focus:ring-2 focus:ring-green-500 outline-none transition-all text-sm sm:text-base" placeholder="Enter player name" />
                </div>
                <div>
                  <label htmlFor="age" className="block text-sm font-medium text-gray-700 mb-1">Age *</label>
                  <input type="number" id="age" name="age" required min="4" max="80" className="w-full px-4 py-3 glass rounded-xl border-0 focus:ring-2 focus:ring-green-500 outline-none transition-all text-sm sm:text-base" placeholder="Enter age" />
                </div>
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone Number *</label>
                <input type="tel" id="phone" name="phone" required className="w-full px-4 py-3 glass rounded-xl border-0 focus:ring-2 focus:ring-green-500 outline-none transition-all text-sm sm:text-base" placeholder="Enter phone number" />
              </div>
              <div>
                <label htmlFor="location" className="block text-sm font-medium text-gray-700 mb-1">Preferred Location *</label>
                <select id="location" name="location" required className="w-full px-4 py-3 glass rounded-xl border-0 focus:ring-2 focus:ring-green-500 outline-none transition-all text-sm sm:text-base">
                  <option value="">Select location</option>
                  {locations.map(loc => <option key={loc.value} value={loc.value}>{loc.label}</option>)}
                </select>
              </div>
              <div>
                <label htmlFor="program" className="block text-sm font-medium text-gray-700 mb-1">Interested Program</label>
                <select id="program" name="program" className="w-full px-4 py-3 glass rounded-xl border-0 focus:ring-2 focus:ring-green-500 outline-none transition-all text-sm sm:text-base">
                  {programs.map(prog => <option key={prog.value} value={prog.value}>{prog.label}</option>)}
                </select>
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Any specific requirements?</label>
                <textarea id="message" name="message" rows={3} className="w-full px-4 py-3 glass rounded-xl border-0 focus:ring-2 focus:ring-green-500 outline-none transition-all resize-none text-sm sm:text-base" placeholder="Tell us about any specific requirements..."></textarea>
              </div>
              <button 
                type="submit" 
                disabled={formStatus !== 'idle'}
                className="w-full py-3 sm:py-4 text-white rounded-xl font-bold hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-70 text-sm sm:text-base" 
                style={{ background: formStatus === 'sent' ? '#22c55e' : 'linear-gradient(135deg, #1F7A4D 0%, #2E8B57 100%)' }}
              >
                {formStatus === 'idle' && <><Send className="w-4 h-4" /> Book Trial Session</>}
                {formStatus === 'sending' && 'Sending...'}
                {formStatus === 'sent' && <><CheckCircle className="w-4 h-4" /> Request Sent!</>}
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Alternative Ways */}
      <section className="py-12 sm:py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <SectionTitle title="Other Ways to Join" subtitle="Contact us directly for immediate assistance" />
          <div className="max-w-md mx-auto">
            <div className="glass-card rounded-2xl sm:rounded-3xl p-5 sm:p-6 hover-lift">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: 'linear-gradient(135deg, #1F7A4D 0%, #2E8B57 100%)' }}>
                  <Phone className="w-5 h-5 text-white" />
                </div>
                <h3 className="font-bold text-gray-800 text-base sm:text-lg">Direct Contact</h3>
              </div>
              <p className="text-gray-600 mb-4 text-sm">Call or WhatsApp us directly for immediate assistance</p>
              <div className="space-y-3">
                <a href="tel:9911747408" className="flex items-center justify-center gap-2 px-4 py-3 text-white rounded-xl font-medium hover:shadow-lg transition-all text-sm" style={{ background: 'linear-gradient(135deg, #1F7A4D 0%, #2E8B57 100%)' }}>
                  <Phone className="w-4 h-4" /> Call: +91 99117 47408
                </a>
                <a href="https://wa.me/919911747408?text=Hi, I want to book a trial session at Pro Ace Tennis Academy" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 px-4 py-3 bg-green-600 text-white rounded-xl font-medium hover:bg-green-700 hover:shadow-lg transition-all text-sm">
                  <MessageCircle className="w-4 h-4" /> WhatsApp Us
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Admission Policy */}
      <section className="py-12 px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-6 text-center">Admission Policy</h2>
          <div className="glass-card rounded-2xl sm:rounded-3xl p-5 sm:p-6 space-y-4">
            <div className="flex items-start gap-4 p-4 rounded-xl" style={{ background: 'rgba(31, 122, 77, 0.1)' }}>
              <CreditCard className="w-6 h-6 shrink-0" style={{ color: '#1F7A4D' }} />
              <div>
                <h3 className="font-medium text-gray-800 mb-1 text-sm sm:text-base">Payment Mode</h3>
                <p className="text-gray-600 text-xs sm:text-sm">Offline payment via Cash / UPI / Bank Transfer at the academy</p>
              </div>
            </div>
            <div className="flex items-start gap-4 p-4 rounded-xl" style={{ background: 'rgba(31, 122, 77, 0.1)' }}>
              <AlertCircle className="w-6 h-6 shrink-0" style={{ color: '#1F7A4D' }} />
              <div>
                <h3 className="font-medium text-gray-800 mb-1 text-sm sm:text-base">Refund Policy</h3>
                <p className="text-gray-600 text-xs sm:text-sm">Fees once paid are non-refundable (except special cases decided by management)</p>
              </div>
            </div>
            <div className="flex items-start gap-4 p-4 rounded-xl" style={{ background: 'rgba(31, 122, 77, 0.1)' }}>
              <Clock className="w-6 h-6 shrink-0" style={{ color: '#1F7A4D' }} />
              <div>
                <h3 className="font-medium text-gray-800 mb-1 text-sm sm:text-base">Trial Session</h3>
                <p className="text-gray-600 text-xs sm:text-sm">Trial sessions are available to help you experience our coaching before enrollment</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
