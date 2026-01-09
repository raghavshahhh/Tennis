'use client';
import { useState } from 'react';
import SectionTitle from '@/components/SectionTitle';
import { Phone, Mail, MapPin, MessageCircle, Instagram, Send, Clock, CheckCircle } from 'lucide-react';

export default function ContactPage() {
  const [formStatus, setFormStatus] = useState<'idle' | 'sending' | 'sent'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('sending');
    
    // Simulate form submission - in production, connect to your backend
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
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
          <p className="text-white/80 text-base sm:text-lg max-w-2xl mx-auto">
            Get in touch with us for enquiries, trial bookings, or any questions
          </p>
        </div>
      </section>

      {/* Contact Info + Form */}
      <section className="py-12 sm:py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-12">
            {/* Contact Info */}
            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-6">Get In Touch</h2>
              
              <div className="space-y-4">
                <a href="tel:9911747408" className="glass-card rounded-xl sm:rounded-2xl p-4 flex items-center gap-4 hover-lift group">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0" style={{ background: 'linear-gradient(135deg, #1F7A4D 0%, #2E8B57 100%)' }}>
                    <Phone className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-800 text-sm">Primary Phone</h3>
                    <p className="group-hover:text-green-700 transition-colors" style={{ color: '#1F7A4D' }}>+91 99117 47408</p>
                  </div>
                </a>

                <a href="tel:9555747408" className="glass-card rounded-xl sm:rounded-2xl p-4 flex items-center gap-4 hover-lift group">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0" style={{ background: 'linear-gradient(135deg, #1F7A4D 0%, #2E8B57 100%)' }}>
                    <Phone className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-800 text-sm">Secondary Phone</h3>
                    <p className="group-hover:text-green-700 transition-colors" style={{ color: '#1F7A4D' }}>+91 95557 47408</p>
                  </div>
                </a>

                <a href="https://wa.me/919911747408?text=Hi, I'm interested in tennis coaching at Pro Ace Academy" target="_blank" rel="noopener noreferrer" className="glass-card rounded-xl sm:rounded-2xl p-4 flex items-center gap-4 hover-lift group">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0 bg-green-600">
                    <MessageCircle className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-800 text-sm">WhatsApp</h3>
                    <p className="text-green-600 group-hover:text-green-700 transition-colors">Chat with us instantly</p>
                  </div>
                </a>

                <a href="mailto:vinodkumar.edutennis@gmail.com" className="glass-card rounded-xl sm:rounded-2xl p-4 flex items-center gap-4 hover-lift group">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0 bg-blue-600">
                    <Mail className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-800 text-sm">Email</h3>
                    <p className="text-blue-600 group-hover:text-blue-700 transition-colors text-sm break-all">vinodkumar.edutennis@gmail.com</p>
                  </div>
                </a>

                <a href="https://www.instagram.com/vinodkumar11" target="_blank" rel="noopener noreferrer" className="glass-card rounded-xl sm:rounded-2xl p-4 flex items-center gap-4 hover-lift group">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0" style={{ background: 'linear-gradient(135deg, #833AB4 0%, #E1306C 50%, #F77737 100%)' }}>
                    <Instagram className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-800 text-sm">Instagram</h3>
                    <p className="text-pink-600 group-hover:text-pink-700 transition-colors">@vinodkumar11</p>
                  </div>
                </a>

                <div className="glass-card rounded-xl sm:rounded-2xl p-4 flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0 bg-red-500">
                    <MapPin className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-800 text-sm">Locations</h3>
                    <p className="text-gray-600 text-sm">HQ: Delhi | Training: Gurugram (Multiple Societies)</p>
                  </div>
                </div>

                <div className="glass-card rounded-xl sm:rounded-2xl p-4 flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0 bg-orange-500">
                    <Clock className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-800 text-sm">Training Hours</h3>
                    <p className="text-gray-600 text-sm">Morning: 6 AM - 9 AM | Evening: 4 PM - 8 PM</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="glass-card rounded-2xl sm:rounded-3xl p-6 sm:p-8">
              <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-6">Send us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Your Name *</label>
                  <input type="text" id="name" name="name" required className="w-full px-4 py-3 glass rounded-xl border-0 focus:ring-2 focus:ring-green-500 outline-none transition-all text-sm sm:text-base" placeholder="Enter your name" />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone Number *</label>
                  <input type="tel" id="phone" name="phone" required className="w-full px-4 py-3 glass rounded-xl border-0 focus:ring-2 focus:ring-green-500 outline-none transition-all text-sm sm:text-base" placeholder="Enter your phone number" />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email (Optional)</label>
                  <input type="email" id="email" name="email" className="w-full px-4 py-3 glass rounded-xl border-0 focus:ring-2 focus:ring-green-500 outline-none transition-all text-sm sm:text-base" placeholder="Enter your email" />
                </div>
                <div>
                  <label htmlFor="interest" className="block text-sm font-medium text-gray-700 mb-1">Interested In</label>
                  <select id="interest" name="interest" className="w-full px-4 py-3 glass rounded-xl border-0 focus:ring-2 focus:ring-green-500 outline-none transition-all text-sm sm:text-base">
                    <option value="">Select an option</option>
                    <option value="trial">Book Trial Session</option>
                    <option value="kids">Kids Program (Under 12)</option>
                    <option value="junior">Junior Program (12-18)</option>
                    <option value="adult">Adult Program (18+)</option>
                    <option value="private">Private Coaching</option>
                    <option value="society">Society Collaboration</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                  <textarea id="message" name="message" rows={4} className="w-full px-4 py-3 glass rounded-xl border-0 focus:ring-2 focus:ring-green-500 outline-none transition-all resize-none text-sm sm:text-base" placeholder="Tell us about your requirements..."></textarea>
                </div>
                <button 
                  type="submit" 
                  disabled={formStatus !== 'idle'}
                  className="w-full py-3 sm:py-4 text-white rounded-xl font-bold hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-70 text-sm sm:text-base" 
                  style={{ background: formStatus === 'sent' ? '#22c55e' : 'linear-gradient(135deg, #1F7A4D 0%, #2E8B57 100%)' }}
                >
                  {formStatus === 'idle' && <><Send className="w-4 h-4" /> Send Message</>}
                  {formStatus === 'sending' && 'Sending...'}
                  {formStatus === 'sent' && <><CheckCircle className="w-4 h-4" /> Message Sent!</>}
                </button>
                <p className="text-gray-500 text-xs sm:text-sm text-center">
                  Or call us directly at <a href="tel:9911747408" className="font-medium" style={{ color: '#1F7A4D' }}>+91 99117 47408</a>
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <SectionTitle title="Find Us" subtitle="Visit our training centers across Delhi NCR" />
          <div className="glass-card rounded-2xl sm:rounded-3xl overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d224346.54004883842!2d76.82493894863278!3d28.42314829999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d19d582e38859%3A0x2cf5fe8e5c64b1e!2sGurugram%2C%20Haryana!5e0!3m2!1sen!2sin!4v1704067200000!5m2!1sen!2sin"
              width="100%"
              height="350"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-[250px] sm:h-[350px]"
            ></iframe>
          </div>
        </div>
      </section>
    </>
  );
}
