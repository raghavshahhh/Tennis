'use client';
import { useState, useEffect, memo } from 'react';
import Link from 'next/link';
import { Menu, X, Phone } from 'lucide-react';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/programs', label: 'Programs' },
  { href: '/coaches', label: 'Coaches' },
  { href: '/locations', label: 'Locations' },
  { href: '/contact', label: 'Contact' },
];

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed z-50 w-[94%] sm:w-[95%] max-w-5xl transition-all duration-300 ${scrolled ? 'top-2' : 'top-3 sm:top-4'}`} style={{ left: '50%', transform: 'translateX(-50%)' }}>
      <div className="rounded-xl sm:rounded-2xl shadow-lg" style={{ background: 'rgba(255, 255, 255, 0.95)', backdropFilter: 'blur(12px)' }}>
        <div className="px-3 sm:px-6">
          <div className="flex justify-between items-center h-12 sm:h-14">
            <Link href="/" className="flex items-center gap-1.5 sm:gap-2">
              <span className="text-xl sm:text-2xl">🎾</span>
              <div>
                <span className="font-bold text-sm sm:text-base" style={{ color: '#1F7A4D' }}>Pro Ace</span>
                <span className="text-gray-600 text-[10px] sm:text-xs block -mt-0.5">Tennis Academy</span>
              </div>
            </Link>

            <div className="hidden md:flex items-center space-x-1">
              {navLinks.map((link) => (
                <Link key={link.href} href={link.href} className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-green-700 rounded-lg hover:bg-green-50 transition-colors">
                  {link.label}
                </Link>
              ))}
              <Link href="/join" className="ml-3 px-4 py-2 text-white rounded-lg font-medium text-sm" style={{ background: 'linear-gradient(135deg, #1F7A4D 0%, #2E8B57 100%)' }}>
                Join Now
              </Link>
            </div>

            <div className="md:hidden flex items-center gap-0.5">
              <a href="tel:9911747408" className="p-2 rounded-lg text-green-700">
                <Phone className="w-5 h-5" />
              </a>
              <button onClick={() => setIsOpen(!isOpen)} className="p-2 rounded-lg text-gray-700" aria-label="Menu">
                {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </button>
            </div>
          </div>
        </div>

        {isOpen && (
          <div className="md:hidden px-3 pb-3 border-t border-gray-100 mt-1">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href} className="block px-3 py-2.5 text-sm font-medium text-gray-700 hover:bg-green-50 rounded-lg active:bg-green-100" onClick={() => setIsOpen(false)}>
                {link.label}
              </Link>
            ))}
            <Link href="/join" className="block mt-2 px-3 py-3 text-white rounded-lg font-medium text-sm text-center" style={{ background: 'linear-gradient(135deg, #1F7A4D 0%, #2E8B57 100%)' }} onClick={() => setIsOpen(false)}>
              Join Now
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}

export default memo(Navbar);
