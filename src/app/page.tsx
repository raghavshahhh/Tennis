import Link from 'next/link';
import dynamic from 'next/dynamic';
import { Trophy, BarChart3, MapPin, Target, Dumbbell, Video, Users, Award, Shield, CheckCircle, Star, BadgeCheck } from 'lucide-react';

const CTAButtons = dynamic(() => import('@/components/CTAButtons'), { ssr: true });
const SectionTitle = dynamic(() => import('@/components/SectionTitle'), { ssr: true });

const programs = [
  { name: 'Red Ball', age: 'Under 6', color: '#ef4444', desc: 'Introduction to tennis basics' },
  { name: 'Orange Ball', age: 'Under 10', color: '#f97316', desc: 'Developing fundamental skills' },
  { name: 'Green Ball', age: 'Under 12', color: '#22c55e', desc: 'Transition to full court' },
  { name: 'Intermediate', age: '12+', color: '#1F7A4D', desc: 'Advanced techniques & tactics' },
  { name: 'Advanced', age: 'Competitive', color: '#155c39', desc: 'Tournament preparation' },
  { name: 'Adult Program', age: '18+', color: '#374151', desc: 'Fitness & recreational tennis' },
];

const features = [
  { icon: Trophy, title: 'Certified Coaches', desc: 'AITA, ITF & NIS certified coaches' },
  { icon: BarChart3, title: 'Structured Programs', desc: 'Age-appropriate training' },
  { icon: MapPin, title: 'Multiple Locations', desc: 'Delhi & Gurugram' },
  { icon: Target, title: 'Personal Attention', desc: 'Optimal player-coach ratio' },
  { icon: Dumbbell, title: 'Holistic Training', desc: 'Fitness & mental strength' },
  { icon: Video, title: 'Video Analysis', desc: 'Modern training methods' },
];

const testimonials = [
  { name: 'Parent, Experion Windchants', text: 'My son has improved tremendously in just 6 months. The coaches are very professional and patient.', rating: 5 },
  { name: 'Parent, Bestech Park View', text: 'Best tennis academy in Gurugram. Structured training and excellent facilities.', rating: 5 },
  { name: 'Adult Student, Delhi', text: 'Started as a complete beginner at 35. Now I play regularly. Great coaching for adults too!', rating: 5 },
  { name: 'Parent, ATS Kocoon', text: 'My daughter loves the training sessions. Coaches make learning fun while maintaining discipline.', rating: 5 },
  { name: 'Parent, Microtek Greenburg', text: 'Very systematic approach to teaching tennis. My kids look forward to every session.', rating: 5 },
  { name: 'Parent, Ramprastha City', text: 'Excellent academy with certified coaches. Highly recommend for kids of all ages.', rating: 5 },
];

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[80vh] sm:min-h-[85vh] flex items-center hero-parallax">
        <div className="absolute inset-0 rounded-b-[2rem] sm:rounded-b-[3rem] -mt-24" style={{ background: 'linear-gradient(135deg, #1F7A4D 0%, #155c39 100%)' }} />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-16">
          <div className="text-center max-w-3xl mx-auto md:mx-0 md:text-left">
            <div className="inline-block px-3 py-1.5 sm:px-4 sm:py-2 rounded-full text-white/90 text-xs sm:text-sm font-medium mb-3 sm:mb-4" style={{ background: 'rgba(255,255,255,0.15)' }}>
              Since 2022 • Delhi & Gurugram
            </div>
            <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-2 sm:mb-3 text-white leading-tight">
              Pro Ace Tennis Academy
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-white/80 mb-1">Metro Tennis Academy</p>
            <p className="text-lg sm:text-xl md:text-2xl font-medium text-white/90 mb-3 sm:mb-4">Professional Tennis Coaching</p>
            <p className="text-sm sm:text-base text-white/70 mb-5 sm:mb-6 max-w-xl mx-auto md:mx-0">
              Expert certified coaches, structured programs for all ages, modern training methods.
            </p>
            
            {/* Trust Badges */}
            <div className="flex flex-wrap justify-center md:justify-start gap-1.5 sm:gap-2 mb-5 sm:mb-6">
              <div className="flex items-center gap-1 px-2 py-1 sm:px-3 sm:py-1.5 rounded-full text-[10px] sm:text-xs font-medium" style={{ background: 'rgba(255,255,255,0.2)', color: 'white' }}>
                <BadgeCheck className="w-3 h-3 sm:w-4 sm:h-4" /> AITA Certified
              </div>
              <div className="flex items-center gap-1 px-2 py-1 sm:px-3 sm:py-1.5 rounded-full text-[10px] sm:text-xs font-medium" style={{ background: 'rgba(255,255,255,0.2)', color: 'white' }}>
                <BadgeCheck className="w-3 h-3 sm:w-4 sm:h-4" /> ITF Certified
              </div>
              <div className="flex items-center gap-1 px-2 py-1 sm:px-3 sm:py-1.5 rounded-full text-[10px] sm:text-xs font-medium" style={{ background: 'rgba(255,255,255,0.2)', color: 'white' }}>
                <Shield className="w-3 h-3 sm:w-4 sm:h-4" /> 500+ Students
              </div>
            </div>

            <CTAButtons />

            {/* Social Proof */}
            <div className="mt-5 sm:mt-6 flex flex-wrap justify-center md:justify-start items-center gap-3 sm:gap-4">
              <div className="flex items-center gap-0.5">
                {[1,2,3,4,5].map(i => <Star key={i} className="w-3 h-3 sm:w-4 sm:h-4 text-yellow-400 fill-yellow-400" />)}
                <span className="text-white/80 text-xs sm:text-sm ml-1">Trusted by parents</span>
              </div>
              <div className="flex items-center gap-1.5 text-white/70 text-xs sm:text-sm">
                <CheckCircle className="w-3 h-3 sm:w-4 sm:h-4 text-green-400" />
                Free Trial Available
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="relative z-10 -mt-5 sm:-mt-6 px-3 sm:px-4">
        <div className="max-w-4xl mx-auto">
          <div className="glass-card rounded-xl sm:rounded-2xl p-3 sm:p-4 grid grid-cols-2 sm:flex sm:flex-wrap sm:justify-center gap-2 sm:gap-6 text-center">
            <div className="flex items-center justify-center gap-1.5 sm:gap-2">
              <Shield className="w-4 h-4 sm:w-5 sm:h-5" style={{ color: '#1F7A4D' }} />
              <span className="text-xs sm:text-sm font-medium text-gray-700">Verified Academy</span>
            </div>
            <div className="flex items-center justify-center gap-1.5 sm:gap-2">
              <Award className="w-4 h-4 sm:w-5 sm:h-5" style={{ color: '#1F7A4D' }} />
              <span className="text-xs sm:text-sm font-medium text-gray-700">15+ Coaches</span>
            </div>
            <div className="flex items-center justify-center gap-1.5 sm:gap-2">
              <MapPin className="w-4 h-4 sm:w-5 sm:h-5" style={{ color: '#1F7A4D' }} />
              <span className="text-xs sm:text-sm font-medium text-gray-700">10+ Locations</span>
            </div>
            <div className="flex items-center justify-center gap-1.5 sm:gap-2">
              <Users className="w-4 h-4 sm:w-5 sm:h-5" style={{ color: '#1F7A4D' }} />
              <span className="text-xs sm:text-sm font-medium text-gray-700">500+ Students</span>
            </div>
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="py-10 sm:py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-6 sm:gap-8 items-center">
            <div className="order-2 md:order-1">
              <SectionTitle title="About Our Academy" centered={false} />
              <p className="text-gray-600 mb-3 sm:mb-4 text-sm leading-relaxed">
                Pro Ace Tennis Academy is a professional lawn tennis coaching academy established in 2022 with the mission to develop skilled, disciplined, and confident tennis players.
              </p>
              <p className="text-gray-600 mb-4 sm:mb-6 text-sm leading-relaxed">
                With experienced and certified coaches (AITA, ITF, NIS), we provide coaching for beginners to advanced-level players across Delhi and Gurugram.
              </p>
              <Link href="/about" className="inline-flex items-center gap-2 font-medium text-sm" style={{ color: '#1F7A4D' }}>
                Learn more →
              </Link>
            </div>
            <div className="order-1 md:order-2 glass-card rounded-xl sm:rounded-2xl p-6 sm:p-8 text-center" style={{ background: 'rgba(31, 122, 77, 0.1)' }}>
              <div className="w-20 h-20 sm:w-24 sm:h-24 mx-auto rounded-full flex items-center justify-center mb-3 sm:mb-4" style={{ background: 'linear-gradient(135deg, #1F7A4D 0%, #2E8B57 100%)' }}>
                <span className="text-3xl sm:text-4xl">🎾</span>
              </div>
              <p className="font-medium text-sm sm:text-base" style={{ color: '#1F7A4D' }}>Professional Tennis Training</p>
              <p className="text-gray-500 text-xs mt-1">AITA • ITF • NIS Certified</p>
            </div>
          </div>
        </div>
      </section>

      {/* Programs Preview */}
      <section className="py-10 sm:py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <SectionTitle title="Our Programs" subtitle="Training for every age and skill level" />
          <div className="grid grid-cols-2 md:grid-cols-3 gap-2 sm:gap-4">
            {programs.map((program, i) => (
              <Link href="/programs" key={program.name} className="glass-card rounded-lg sm:rounded-xl p-3 sm:p-4 cursor-pointer group">
                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl mb-2 sm:mb-3 flex items-center justify-center group-hover:scale-110 transition-transform duration-500" style={{ background: program.color }}>
                  <span className="text-base sm:text-xl">🎾</span>
                </div>
                <h3 className="font-bold text-gray-800 text-xs sm:text-sm">{program.name}</h3>
                <p className="text-[10px] sm:text-xs font-medium mb-0.5 sm:mb-1" style={{ color: '#1F7A4D' }}>{program.age}</p>
                <p className="text-gray-500 text-[10px] sm:text-xs hidden sm:block">{program.desc}</p>
              </Link>
            ))}
          </div>
          <div className="text-center mt-6 sm:mt-8">
            <Link href="/programs" className="inline-block w-full sm:w-auto px-6 py-3 text-white rounded-xl font-medium text-sm" style={{ background: 'linear-gradient(135deg, #1F7A4D 0%, #2E8B57 100%)' }}>
              View All Programs
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-10 sm:py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <SectionTitle title="Why Choose Pro Ace?" subtitle="What makes us different" />
          <div className="grid grid-cols-2 md:grid-cols-3 gap-2 sm:gap-4">
            {features.map((item, i) => (
              <div key={item.title} className="glass-card p-3 sm:p-5 rounded-lg sm:rounded-xl group">
                <item.icon className="w-6 h-6 sm:w-8 sm:h-8 mb-2 sm:mb-3 group-hover:scale-110 transition-transform duration-500" style={{ color: '#1F7A4D' }} />
                <h3 className="font-bold text-gray-800 mb-0.5 sm:mb-1 text-xs sm:text-sm">{item.title}</h3>
                <p className="text-gray-600 text-[10px] sm:text-xs">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-10 sm:py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <SectionTitle title="What Parents Say" subtitle="Trusted by 500+ families across Delhi NCR" />
          <div className="overflow-x-auto pb-4 -mx-4 px-4 scrollbar-hide">
            <div className="flex gap-3 sm:gap-4 w-max">
              {testimonials.map((item, i) => (
                <div key={i} className="glass-card p-4 sm:p-5 rounded-lg sm:rounded-xl w-[280px] sm:w-[320px] flex-shrink-0">
                  <div className="flex gap-0.5 mb-2 sm:mb-3">
                    {[1,2,3,4,5].map(s => <Star key={s} className={`w-3 h-3 sm:w-4 sm:h-4 ${s <= item.rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`} />)}
                  </div>
                  <p className="text-gray-600 text-xs sm:text-sm mb-2 sm:mb-3 italic">&ldquo;{item.text}&rdquo;</p>
                  <p className="text-[10px] sm:text-xs font-medium" style={{ color: '#1F7A4D' }}>{item.name}</p>
                </div>
              ))}
            </div>
          </div>
          <p className="text-center text-gray-400 text-xs mt-2 sm:hidden">← Swipe to see more →</p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-10 sm:py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="rounded-xl sm:rounded-2xl p-6 sm:p-8 text-center text-white" style={{ background: 'linear-gradient(135deg, #1F7A4D 0%, #155c39 100%)' }}>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-2 sm:mb-3">Ready to Start?</h2>
            <p className="text-white/80 mb-4 sm:mb-6 text-xs sm:text-sm">Book a trial session today</p>
            <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 justify-center">
              <a href="tel:9911747408" className="px-5 sm:px-6 py-2.5 sm:py-3 bg-white rounded-lg sm:rounded-xl font-bold text-xs sm:text-sm" style={{ color: '#1F7A4D' }}>
                Call: +91 99117 47408
              </a>
              <a href="https://wa.me/919911747408" target="_blank" rel="noopener noreferrer" className="px-5 sm:px-6 py-2.5 sm:py-3 bg-green-600 text-white rounded-lg sm:rounded-xl font-bold text-xs sm:text-sm">
                WhatsApp Us
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
