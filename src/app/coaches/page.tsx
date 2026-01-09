import SectionTitle from '@/components/SectionTitle';
import { Star, Award, Calendar, Target, Phone, MessageCircle } from 'lucide-react';

export const metadata = {
  title: 'Our Coaches | Pro Ace Tennis Academy',
  description: 'Meet our certified tennis coaches - AITA, ITF, and NIS certified professionals with years of experience.',
};

const headCoach = {
  name: 'Vinod Kumar',
  role: 'Head Coach & Founder',
  experience: '10+ years',
  certifications: ['AITA Certified', 'ITF Certified', 'NIS Certified'],
  specialization: 'Advanced Training & Tournament Preparation',
  rating: 5,
  bio: 'Founder of Pro Ace Tennis Academy with over a decade of coaching experience. Specializes in developing competitive players and has trained numerous district and state-level champions.',
};

const coaches = [
  { name: 'Coach Rahul', role: 'Senior Coach', experience: '8 years', certifications: ['AITA Certified'], specialization: 'Junior Development', rating: 5 },
  { name: 'Coach Priya', role: 'Senior Coach', experience: '6 years', certifications: ['ITF Certified'], specialization: 'Women\'s Tennis', rating: 5 },
  { name: 'Coach Amit', role: 'Coach', experience: '5 years', certifications: ['AITA Certified'], specialization: 'Red & Orange Ball', rating: 4 },
  { name: 'Coach Neha', role: 'Coach', experience: '4 years', certifications: ['NIS Certified'], specialization: 'Fitness & Conditioning', rating: 4 },
  { name: 'Coach Suresh', role: 'Coach', experience: '7 years', certifications: ['AITA Certified', 'ITF Certified'], specialization: 'Advanced Techniques', rating: 5 },
  { name: 'Coach Meera', role: 'Assistant Coach', experience: '3 years', certifications: ['AITA Certified'], specialization: 'Beginners & Kids', rating: 4 },
];

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5">
      {[1, 2, 3, 4, 5].map((star) => (
        <Star key={star} className={`w-4 h-4 ${star <= rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`} />
      ))}
    </div>
  );
}

export default function CoachesPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative py-16 sm:py-20 px-4">
        <div className="absolute inset-0 rounded-3xl mx-4 -mt-24 pt-24" style={{ background: 'linear-gradient(135deg, #1F7A4D 0%, #155c39 100%)' }}></div>
        <div className="relative max-w-7xl mx-auto text-center text-white">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">Our Coaches</h1>
          <p className="text-white/80 text-base sm:text-lg max-w-2xl mx-auto">
            Learn from certified professionals with years of experience
          </p>
        </div>
      </section>

      {/* Head Coach */}
      <section className="py-12 sm:py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <SectionTitle title="Head Coach" />
          <div className="glass-card rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-12 hover-lift">
            <div className="flex flex-col md:flex-row gap-6 sm:gap-8 items-center">
              <div className="w-28 h-28 sm:w-40 sm:h-40 rounded-2xl sm:rounded-3xl flex items-center justify-center text-white shrink-0 shadow-xl" style={{ background: 'linear-gradient(135deg, #1F7A4D 0%, #2E8B57 100%)' }}>
                <Award className="w-14 h-14 sm:w-20 sm:h-20" />
              </div>
              <div className="text-center md:text-left flex-1">
                <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-800 mb-1">{headCoach.name}</h2>
                <p className="font-medium mb-2" style={{ color: '#1F7A4D' }}>{headCoach.role}</p>
                <StarRating rating={headCoach.rating} />
                <p className="text-gray-600 mt-4 mb-4 leading-relaxed text-sm sm:text-base">{headCoach.bio}</p>
                <div className="flex flex-wrap gap-2 mb-4 justify-center md:justify-start">
                  {headCoach.certifications.map((cert) => (
                    <span key={cert} className="px-3 sm:px-4 py-1.5 text-white text-xs sm:text-sm rounded-xl" style={{ background: 'linear-gradient(135deg, #1F7A4D 0%, #2E8B57 100%)' }}>{cert}</span>
                  ))}
                </div>
                <div className="flex flex-wrap gap-2 sm:gap-3 text-xs sm:text-sm text-gray-600 justify-center md:justify-start">
                  <span className="glass px-3 py-1.5 rounded-xl flex items-center gap-1">
                    <Calendar className="w-3 h-3" /> {headCoach.experience}
                  </span>
                  <span className="glass px-3 py-1.5 rounded-xl flex items-center gap-1">
                    <Target className="w-3 h-3" /> {headCoach.specialization}
                  </span>
                </div>
                <div className="flex gap-3 mt-4 justify-center md:justify-start">
                  <a href="tel:9911747408" className="flex items-center gap-2 px-4 py-2 rounded-xl text-white text-sm font-medium" style={{ background: 'linear-gradient(135deg, #1F7A4D 0%, #2E8B57 100%)' }}>
                    <Phone className="w-4 h-4" /> Call
                  </a>
                  <a href="https://wa.me/919911747408" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-4 py-2 rounded-xl text-white text-sm font-medium bg-green-600">
                    <MessageCircle className="w-4 h-4" /> WhatsApp
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* All Coaches */}
      <section className="py-12 sm:py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <SectionTitle title="Our Coaching Team" subtitle="15+ certified coaches across all locations" />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {coaches.map((coach) => (
              <div key={coach.name} className="glass-card rounded-xl sm:rounded-2xl p-5 sm:p-6 hover-lift">
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-xl sm:rounded-2xl flex items-center justify-center shrink-0" style={{ background: 'rgba(31, 122, 77, 0.15)' }}>
                    <Award className="w-7 h-7 sm:w-8 sm:h-8" style={{ color: '#1F7A4D' }} />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-gray-800 text-sm sm:text-base">{coach.name}</h3>
                    <p className="text-xs sm:text-sm font-medium" style={{ color: '#1F7A4D' }}>{coach.role}</p>
                    <StarRating rating={coach.rating} />
                  </div>
                </div>
                <div className="mt-4 pt-4 border-t border-gray-100">
                  <div className="flex flex-wrap gap-1 mb-3">
                    {coach.certifications.map((cert) => (
                      <span key={cert} className="px-2 py-0.5 glass text-xs rounded-lg" style={{ color: '#1F7A4D' }}>{cert}</span>
                    ))}
                  </div>
                  <p className="text-gray-600 text-xs sm:text-sm flex items-center gap-1">
                    <Calendar className="w-3 h-3" /> {coach.experience} experience
                  </p>
                  <p className="text-gray-600 text-xs sm:text-sm flex items-center gap-1">
                    <Target className="w-3 h-3" /> {coach.specialization}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-12 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-6">Our Certifications</h2>
          <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
            {[
              { name: 'AITA', full: 'All India Tennis Association' },
              { name: 'ITF', full: 'International Tennis Federation' },
              { name: 'NIS', full: 'National Institute of Sports' },
            ].map((cert) => (
              <div key={cert.name} className="glass-card px-6 sm:px-8 py-4 sm:py-6 rounded-xl sm:rounded-2xl hover-lift">
                <p className="font-bold text-lg sm:text-xl" style={{ color: '#1F7A4D' }}>{cert.name}</p>
                <p className="text-gray-600 text-xs sm:text-sm">{cert.full}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
