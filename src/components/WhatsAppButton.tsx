'use client';
import { MessageCircle } from 'lucide-react';

export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/919911747408?text=Hi, I'm interested in tennis coaching at Pro Ace Academy"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-3 right-3 sm:bottom-6 sm:right-6 z-50 w-11 h-11 sm:w-14 sm:h-14 bg-green-500 text-white rounded-xl sm:rounded-2xl shadow-lg hover:bg-green-600 flex items-center justify-center transition-all hover:scale-110 active:scale-95"
      aria-label="Chat on WhatsApp"
      style={{ boxShadow: '0 4px 20px rgba(34, 197, 94, 0.4)' }}
    >
      <MessageCircle className="w-5 h-5 sm:w-7 sm:h-7" />
    </a>
  );
}
