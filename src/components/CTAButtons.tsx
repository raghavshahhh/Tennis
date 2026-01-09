import { memo } from 'react';
import Link from 'next/link';
import { Phone, MessageCircle, Calendar } from 'lucide-react';

function CTAButtons() {
  return (
    <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 w-full sm:w-auto sm:justify-center md:justify-start">
      <a href="tel:9911747408" className="flex items-center justify-center gap-2 px-5 py-3 text-white rounded-xl font-medium text-sm w-full sm:w-auto" style={{ background: 'linear-gradient(135deg, #1F7A4D 0%, #2E8B57 100%)' }}>
        <Phone className="w-4 h-4" /> Call Now
      </a>
      <a href="https://wa.me/919911747408?text=Hi, I'm interested in tennis coaching" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 px-5 py-3 bg-green-600 text-white rounded-xl font-medium text-sm w-full sm:w-auto">
        <MessageCircle className="w-4 h-4" /> WhatsApp
      </a>
      <Link href="/join" className="flex items-center justify-center gap-2 px-5 py-3 bg-white rounded-xl font-medium text-sm w-full sm:w-auto" style={{ border: '2px solid #1F7A4D', color: '#1F7A4D' }}>
        <Calendar className="w-4 h-4" /> Book Trial
      </Link>
    </div>
  );
}

export default memo(CTAButtons);
