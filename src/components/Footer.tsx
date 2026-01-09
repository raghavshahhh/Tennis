import { memo } from 'react';
import Link from 'next/link';
import { Phone, Mail, MapPin, Instagram, MessageCircle } from 'lucide-react';

function Footer() {
  return (
    <footer className="mt-8 sm:mt-12">
      <div className="max-w-7xl mx-auto px-3 sm:px-4 pb-4 sm:pb-6">
        <div className="rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8" style={{ background: 'rgba(31, 41, 51, 0.95)' }}>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5 sm:gap-6">
            {/* Logo & Social */}
            <div className="sm:col-span-2 text-center sm:text-left">
              <div className="flex items-center justify-center sm:justify-start gap-2 mb-2 sm:mb-3">
                <span className="text-2xl sm:text-3xl">🎾</span>
                <div>
                  <span className="text-green-400 font-bold text-base sm:text-lg">Pro Ace Tennis Academy</span>
                  <p className="text-gray-400 text-[10px] sm:text-xs">Professional Tennis Coaching</p>
                </div>
              </div>
              <p className="text-gray-400 text-xs mb-3 sm:mb-4 max-w-sm mx-auto sm:mx-0">
                Professional lawn tennis coaching since 2022. Delhi & Gurugram.
              </p>
              <div className="flex gap-2 justify-center sm:justify-start">
                <a href="https://www.instagram.com/vinodkumar11" target="_blank" rel="noopener noreferrer" className="w-9 h-9 sm:w-8 sm:h-8 rounded-lg flex items-center justify-center text-white hover:scale-110 transition-transform" style={{ background: 'linear-gradient(135deg, #833AB4 0%, #E1306C 50%, #F77737 100%)' }}>
                  <Instagram className="w-4 h-4" />
                </a>
                <a href="https://wa.me/919911747408" target="_blank" rel="noopener noreferrer" className="w-9 h-9 sm:w-8 sm:h-8 rounded-lg flex items-center justify-center text-white hover:scale-110 transition-transform bg-green-600">
                  <MessageCircle className="w-4 h-4" />
                </a>
                <a href="tel:9911747408" className="w-9 h-9 sm:w-8 sm:h-8 rounded-lg flex items-center justify-center text-white hover:scale-110 transition-transform" style={{ background: '#1F7A4D' }}>
                  <Phone className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div className="text-center sm:text-left">
              <h3 className="text-green-400 font-semibold mb-2 sm:mb-3 text-sm">Quick Links</h3>
              <ul className="space-y-1.5 sm:space-y-2 text-xs">
                {[
                  { href: '/programs', label: 'Programs' },
                  { href: '/coaches', label: 'Coaches' },
                  { href: '/locations', label: 'Locations' },
                  { href: '/join', label: 'Join' },
                ].map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="text-gray-400 hover:text-white transition-colors">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div className="text-center sm:text-left">
              <h3 className="text-green-400 font-semibold mb-2 sm:mb-3 text-sm">Contact</h3>
              <ul className="space-y-1.5 sm:space-y-2 text-xs text-gray-400">
                <li><a href="tel:9911747408" className="hover:text-white flex items-center justify-center sm:justify-start gap-2"><Phone className="w-3 h-3" /> +91 99117 47408</a></li>
                <li><a href="mailto:vinodkumar.edutennis@gmail.com" className="hover:text-white flex items-center justify-center sm:justify-start gap-2"><Mail className="w-3 h-3" /> Email Us</a></li>
                <li className="flex items-center justify-center sm:justify-start gap-2"><MapPin className="w-3 h-3" /> Delhi & Gurugram</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-white/10 mt-4 sm:mt-6 pt-3 sm:pt-4 text-center">
            <p className="text-gray-500 text-[10px] sm:text-xs">© 2022 - {new Date().getFullYear()} Pro Ace Tennis Academy</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default memo(Footer);
