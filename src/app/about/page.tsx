import SectionTitle from '@/components/SectionTitle';
import CTAButtons from '@/components/CTAButtons';
import { Target, Eye, Award, CheckCircle, Users, Calendar, MapPin, Trophy } from 'lucide-react';

export const metadata = {
  title: 'About Us | Pro Ace Tennis Academy',
  description: 'Learn about Pro Ace Tennis Academy - our mission, vision, and commitment to developing skilled tennis players since 2022.',
};

const stats = [
  { icon: Users, number: '500+', label: 'Students Trained' },
  { icon: Award, number: '15+', label: 'Certified Coaches' },
  { icon: MapPin, number: '10+', label: 'Locations' },
  { icon: Calendar, number: '2022', label: 'Established' },
];

const philosophy = [
  'Technical excellence through structured, progressive training',
  'Physical fitness and injury prevention',
  'Mental toughness and competitive mindset',
  'Sportsmanship and respect for the game',
  'Fun and enjoyment at every level',
];

const certifications = ['AITA Certified', 'ITF Certified', 'NIS Certified'];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative py-16 sm:py-20 px-4">
        <div className="absolute inset-0 rounded-3xl mx-4 -mt-24 pt-24" style={{ background: 'linear-gradient(135deg, #1F7A4D 0%, #155c39 100%)' }}></div>
        <div className="relative max-w-7xl mx-auto text-center text-white">
          <Trophy className="w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-4 opacity-80" />
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">About Our Academy</h1>
          <p className="text-white/80 text-base sm:text-lg max-w-2xl mx-auto">
            Building champions on and off the court since 2022
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="relative z-10 -mt-8 sm:-mt-12 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="glass-card rounded-2xl sm:rounded-3xl p-6 sm:p-8 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <stat.icon className="w-6 h-6 sm:w-8 sm:h-8 mx-auto mb-2" style={{ color: '#1F7A4D' }} />
                <p className="text-2xl sm:text-3xl font-bold gradient-text">{stat.number}</p>
                <p className="text-gray-600 text-xs sm:text-sm">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Content */}
      <section className="py-12 sm:py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="glass-card rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-12">
            <h2 className="text-xl sm:text-2xl font-bold mb-4" style={{ color: '#1F7A4D' }}>Who We Are</h2>
            <p className="text-gray-600 mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base">
              Pro Ace Tennis Academy (also known as Metro Tennis Academy) is a professional lawn tennis coaching academy established in 2022 with the mission to develop skilled, disciplined, and confident tennis players.
            </p>
            <p className="text-gray-600 mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base">
              With experienced and certified coaches, structured training programs, and modern training methods, we provide coaching for beginners to advanced-level players across multiple locations in Delhi and Gurugram.
            </p>
            <p className="text-gray-600 mb-6 sm:mb-8 leading-relaxed text-sm sm:text-base">
              Our focus is not just on tennis skills, but also on fitness, discipline, sportsmanship, and mental strength — helping players grow both on and off the court.
            </p>

            <div className="grid sm:grid-cols-2 gap-4 sm:gap-6 my-8 sm:my-12">
              <div className="glass p-5 sm:p-6 rounded-xl sm:rounded-2xl hover-lift" style={{ borderLeft: '4px solid #1F7A4D' }}>
                <div className="flex items-center gap-3 mb-3">
                  <Target className="w-6 h-6" style={{ color: '#1F7A4D' }} />
                  <h3 className="text-lg sm:text-xl font-bold" style={{ color: '#1F7A4D' }}>Our Mission</h3>
                </div>
                <p className="text-gray-600 text-sm sm:text-base">
                  To make tennis a lifelong sport by providing structured coaching, personal attention, and a positive learning environment for players of all ages and skill levels.
                </p>
              </div>
              <div className="glass p-5 sm:p-6 rounded-xl sm:rounded-2xl hover-lift" style={{ borderLeft: '4px solid #C62828' }}>
                <div className="flex items-center gap-3 mb-3">
                  <Eye className="w-6 h-6 text-red-600" />
                  <h3 className="text-lg sm:text-xl font-bold text-red-600">Our Vision</h3>
                </div>
                <p className="text-gray-600 text-sm sm:text-base">
                  To develop competitive tennis players at district, state, and national levels while building a strong tennis community in India.
                </p>
              </div>
            </div>

            <h2 className="text-xl sm:text-2xl font-bold mb-4" style={{ color: '#1F7A4D' }}>Our Philosophy</h2>
            <p className="text-gray-600 mb-4 sm:mb-6 text-sm sm:text-base">
              We believe tennis is more than just a sport — it's a journey of self-improvement. Our coaching philosophy centers around:
            </p>
            <ul className="space-y-3 mb-6 sm:mb-8">
              {philosophy.map((item) => (
                <li key={item} className="flex items-start gap-3 glass p-3 rounded-xl">
                  <CheckCircle className="w-5 h-5 mt-0.5 shrink-0" style={{ color: '#1F7A4D' }} />
                  <span className="text-gray-600 text-sm sm:text-base">{item}</span>
                </li>
              ))}
            </ul>

            <h2 className="text-xl sm:text-2xl font-bold mb-4" style={{ color: '#1F7A4D' }}>Our Certifications</h2>
            <div className="flex flex-wrap gap-2 sm:gap-3">
              {certifications.map((cert) => (
                <span key={cert} className="px-4 sm:px-5 py-2 sm:py-2.5 text-white rounded-xl sm:rounded-2xl font-medium text-sm sm:text-base" style={{ background: 'linear-gradient(135deg, #1F7A4D 0%, #2E8B57 100%)' }}>
                  <Award className="w-4 h-4 inline mr-2" />
                  {cert}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <SectionTitle title="Join Our Tennis Family" subtitle="Start your tennis journey with us today" />
          <CTAButtons />
        </div>
      </section>
    </>
  );
}
