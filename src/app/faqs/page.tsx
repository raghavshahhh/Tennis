'use client';
import { useState } from 'react';
import SectionTitle from '@/components/SectionTitle';
import Link from 'next/link';
import { ChevronDown, Phone, MessageCircle, Mail, HelpCircle } from 'lucide-react';

const faqs = [
  { question: 'What age groups do you accept?', answer: 'We accept students from age 4 onwards. Our programs are designed for different age groups: Red Ball (Under 6), Orange Ball (Under 10), Green Ball (Under 12), Intermediate (12+), Advanced (Competitive), and Adult Program (18+).' },
  { question: 'Do you offer one-on-one coaching?', answer: 'Yes, we offer both group sessions and private one-on-one coaching. Private sessions can be arranged based on coach availability and your preferred timing.' },
  { question: 'What are the training timings?', answer: 'Training sessions are available in morning (6 AM - 9 AM) and evening (4 PM - 8 PM) slots. Specific timings may vary by location. Contact us for the schedule at your preferred location.' },
  { question: 'Do you provide equipment?', answer: 'For beginners and trial sessions, we provide rackets and balls. Regular students are encouraged to have their own equipment. We can guide you on selecting appropriate equipment based on age and level.' },
  { question: 'How can I book a trial session?', answer: 'You can book a trial session by calling us, sending a WhatsApp message, or filling out the enquiry form on our website. Our team will contact you within 24 hours to schedule your trial.' },
  { question: 'What is the fee structure?', answer: 'Fees vary based on the program, frequency of sessions, and whether it\'s group or private coaching. Please contact us for detailed fee information for your specific requirements.' },
  { question: 'Do you prepare students for tournaments?', answer: 'Yes, our Advanced program specifically focuses on tournament preparation. We also help students register for AITA tournaments and provide guidance on the competitive pathway.' },
  { question: 'What certifications do your coaches have?', answer: 'Our coaches are certified by AITA (All India Tennis Association), ITF (International Tennis Federation), and NIS (National Institute of Sports). All coaches undergo regular training updates.' },
  { question: 'Can adults with no experience join?', answer: 'Absolutely! Our Adult Program welcomes complete beginners. Many of our adult students started with zero tennis experience and now enjoy regular play.' },
  { question: 'What is the admission process?', answer: 'The process is simple: 1) Contact us via call/WhatsApp, 2) Book a trial session, 3) Our coach assesses and recommends the right program, 4) Complete enrollment offline at the academy.' },
  { question: 'Do you have locations near me?', answer: 'We have training centers across Delhi and multiple societies in Gurugram including Experion Windchants, Bestech Park View, ATS Kocoon, Microtek Greenburg, and Ramprastha City. Check our Locations page for details.' },
  { question: 'What is the refund policy?', answer: 'Fees once paid are generally non-refundable. Special cases are decided by management on a case-by-case basis. Please discuss any concerns before enrollment.' },
];

function FAQItem({ question, answer, isOpen, onClick }: { question: string; answer: string; isOpen: boolean; onClick: () => void }) {
  return (
    <div className={`glass-card rounded-xl sm:rounded-2xl overflow-hidden transition-all duration-300 ${isOpen ? 'shadow-lg' : ''}`}>
      <button onClick={onClick} className="w-full p-4 sm:p-5 flex justify-between items-center text-left hover:bg-white/50 transition-all gap-4">
        <span className="font-medium text-gray-800 text-sm sm:text-base">{question}</span>
        <span className={`w-8 h-8 rounded-xl flex items-center justify-center shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} style={{ background: 'linear-gradient(135deg, #1F7A4D 0%, #2E8B57 100%)' }}>
          <ChevronDown className="w-4 h-4 text-white" />
        </span>
      </button>
      <div className={`overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="px-4 sm:px-5 pb-4 sm:pb-5">
          <p className="text-gray-600 leading-relaxed text-sm sm:text-base">{answer}</p>
        </div>
      </div>
    </div>
  );
}

export default function FAQsPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <>
      {/* Hero */}
      <section className="relative py-16 sm:py-20 px-4">
        <div className="absolute inset-0 rounded-3xl mx-4 -mt-24 pt-24" style={{ background: 'linear-gradient(135deg, #1F7A4D 0%, #155c39 100%)' }}></div>
        <div className="relative max-w-7xl mx-auto text-center text-white">
          <HelpCircle className="w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-4 opacity-80" />
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">FAQs</h1>
          <p className="text-white/80 text-base sm:text-lg max-w-2xl mx-auto">
            Frequently asked questions about our academy
          </p>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-12 sm:py-16 px-4">
        <div className="max-w-3xl mx-auto space-y-3 sm:space-y-4">
          {faqs.map((faq, index) => (
            <FAQItem 
              key={faq.question} 
              question={faq.question} 
              answer={faq.answer} 
              isOpen={openIndex === index}
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
            />
          ))}
        </div>
      </section>

      {/* Still have questions */}
      <section className="py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="glass-card rounded-2xl sm:rounded-3xl p-6 sm:p-10 text-center">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-4">Still have questions?</h2>
            <p className="text-gray-600 mb-6 text-sm sm:text-base">Can't find the answer you're looking for? Please reach out to our team.</p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a href="tel:9911747408" className="flex items-center justify-center gap-2 px-5 sm:px-6 py-3 text-white rounded-xl sm:rounded-2xl font-medium hover:shadow-xl hover:-translate-y-1 transition-all duration-300 text-sm sm:text-base" style={{ background: 'linear-gradient(135deg, #1F7A4D 0%, #2E8B57 100%)' }}>
                <Phone className="w-4 h-4" /> Call Us
              </a>
              <a href="https://wa.me/919911747408?text=Hi, I have a question about Pro Ace Tennis Academy" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 px-5 sm:px-6 py-3 bg-green-600 text-white rounded-xl sm:rounded-2xl font-medium hover:bg-green-700 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 text-sm sm:text-base">
                <MessageCircle className="w-4 h-4" /> WhatsApp
              </a>
              <Link href="/contact" className="flex items-center justify-center gap-2 px-5 sm:px-6 py-3 rounded-xl sm:rounded-2xl font-medium hover:shadow-lg transition-all text-sm sm:text-base" style={{ background: 'rgba(31, 122, 77, 0.1)', color: '#1F7A4D' }}>
                <Mail className="w-4 h-4" /> Contact Form
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
