import SectionTitle from '@/components/SectionTitle';
import Link from 'next/link';
import { Target, Brain, Dumbbell, Heart, Users, Clock, CheckCircle } from 'lucide-react';

export const metadata = {
  title: 'Programs | Pro Ace Tennis Academy',
  description: 'Explore our tennis training programs - Red Ball, Orange Ball, Green Ball, Intermediate, Advanced, and Adult programs for all ages.',
};

const programs = [
  {
    name: 'Red Ball Program',
    age: 'Under 6 years',
    color: '#ef4444',
    description: 'Introduction to tennis for the youngest players using modified equipment and smaller courts.',
    features: ['Foam balls and smaller rackets', 'Mini court (36 feet)', 'Basic hand-eye coordination', 'Fun games and activities', 'Introduction to basic strokes'],
  },
  {
    name: 'Orange Ball Program',
    age: 'Under 10 years',
    color: '#f97316',
    description: 'Developing fundamental tennis skills with low-compression balls on a mid-sized court.',
    features: ['Low-compression orange balls', 'Mid-sized court (60 feet)', 'Forehand & backhand development', 'Basic serve introduction', 'Point play and match situations'],
  },
  {
    name: 'Green Ball Program',
    age: 'Under 12 years',
    color: '#22c55e',
    description: 'Transition to full court play with green dot balls that bounce slightly lower.',
    features: ['Green dot balls (25% slower)', 'Full court play', 'All stroke refinement', 'Tactical awareness', 'Tournament preparation basics'],
  },
  {
    name: 'Intermediate Program',
    age: '12+ years',
    color: '#1F7A4D',
    description: 'Advanced technique development and tactical training for developing players.',
    features: ['Regular tennis balls', 'Advanced stroke mechanics', 'Singles & doubles tactics', 'Physical conditioning', 'Match play strategies'],
  },
  {
    name: 'Advanced Program',
    age: 'Competitive Players',
    color: '#155c39',
    description: 'High-performance training for competitive and tournament-level players.',
    features: ['Intensive training sessions', 'Tournament preparation', 'Video analysis', 'Mental conditioning', 'Personalized training plans'],
  },
  {
    name: 'Adult Program',
    age: '18+ years',
    color: '#374151',
    description: 'Tennis for adults - whether you\'re a beginner or looking to improve your game.',
    features: ['Flexible timing options', 'Beginner to advanced levels', 'Fitness-focused training', 'Social tennis opportunities', 'Corporate group sessions'],
  },
];

const methodology = [
  { icon: Target, title: 'Technical', desc: 'Proper stroke mechanics and footwork' },
  { icon: Brain, title: 'Tactical', desc: 'Game strategy and point construction' },
  { icon: Dumbbell, title: 'Physical', desc: 'Fitness, agility, and endurance' },
  { icon: Heart, title: 'Mental', desc: 'Focus, confidence, and resilience' },
];

export default function ProgramsPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative py-16 sm:py-20 px-4">
        <div className="absolute inset-0 rounded-3xl mx-4 -mt-24 pt-24" style={{ background: 'linear-gradient(135deg, #1F7A4D 0%, #155c39 100%)' }}></div>
        <div className="relative max-w-7xl mx-auto text-center text-white">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">Our Programs</h1>
          <p className="text-white/80 text-base sm:text-lg max-w-2xl mx-auto">
            Structured training programs designed for every age and skill level
          </p>
        </div>
      </section>

      {/* Programs Grid */}
      <section className="py-12 sm:py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {programs.map((program) => (
              <div key={program.name} className="glass-card rounded-2xl sm:rounded-3xl overflow-hidden hover-lift" style={{ borderTop: `4px solid ${program.color}` }}>
                <div className="p-5 sm:p-6">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-xl sm:rounded-2xl mb-4 flex items-center justify-center" style={{ background: program.color }}>
                    <span className="text-2xl sm:text-3xl">🎾</span>
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-1">{program.name}</h3>
                  <p className="font-medium mb-3 text-sm" style={{ color: '#1F7A4D' }}>{program.age}</p>
                  <p className="text-gray-600 text-xs sm:text-sm mb-4">{program.description}</p>
                  <ul className="space-y-2">
                    {program.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-2 text-xs sm:text-sm text-gray-600">
                        <CheckCircle className="w-4 h-4 mt-0.5 shrink-0" style={{ color: '#1F7A4D' }} />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Training Methodology */}
      <section className="py-12 sm:py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <SectionTitle title="Our Training Methodology" subtitle="A comprehensive approach to tennis development" />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
            {methodology.map((item) => (
              <div key={item.title} className="text-center glass-card p-5 sm:p-6 rounded-xl sm:rounded-2xl hover-lift">
                <item.icon className="w-8 h-8 sm:w-10 sm:h-10 mx-auto mb-3" style={{ color: '#1F7A4D' }} />
                <h3 className="font-bold text-gray-800 mb-2 text-sm sm:text-base">{item.title}</h3>
                <p className="text-gray-600 text-xs sm:text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Session Info */}
      <section className="py-12 sm:py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="glass-card rounded-2xl sm:rounded-3xl p-6 sm:p-8">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-6 text-center">Session Information</h2>
            <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
              <div className="flex items-center gap-4 p-4 rounded-xl" style={{ background: 'rgba(31, 122, 77, 0.1)' }}>
                <Clock className="w-8 h-8" style={{ color: '#1F7A4D' }} />
                <div>
                  <h3 className="font-medium text-gray-800 text-sm">Morning Sessions</h3>
                  <p className="text-gray-600 text-sm">6:00 AM - 9:00 AM</p>
                </div>
              </div>
              <div className="flex items-center gap-4 p-4 rounded-xl" style={{ background: 'rgba(31, 122, 77, 0.1)' }}>
                <Clock className="w-8 h-8" style={{ color: '#1F7A4D' }} />
                <div>
                  <h3 className="font-medium text-gray-800 text-sm">Evening Sessions</h3>
                  <p className="text-gray-600 text-sm">4:00 PM - 8:00 PM</p>
                </div>
              </div>
              <div className="flex items-center gap-4 p-4 rounded-xl" style={{ background: 'rgba(31, 122, 77, 0.1)' }}>
                <Users className="w-8 h-8" style={{ color: '#1F7A4D' }} />
                <div>
                  <h3 className="font-medium text-gray-800 text-sm">Group Size</h3>
                  <p className="text-gray-600 text-sm">4-8 players per batch</p>
                </div>
              </div>
              <div className="flex items-center gap-4 p-4 rounded-xl" style={{ background: 'rgba(31, 122, 77, 0.1)' }}>
                <Target className="w-8 h-8" style={{ color: '#1F7A4D' }} />
                <div>
                  <h3 className="font-medium text-gray-800 text-sm">Private Sessions</h3>
                  <p className="text-gray-600 text-sm">Available on request</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="rounded-2xl sm:rounded-3xl p-8 sm:p-10 text-center text-white" style={{ background: 'linear-gradient(135deg, #1F7A4D 0%, #155c39 100%)' }}>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4">Not sure which program is right for you?</h2>
            <p className="text-white/80 mb-6 text-sm sm:text-base">Book a trial session and our coaches will assess and recommend the best program</p>
            <Link href="/join" className="inline-block px-6 sm:px-8 py-3 sm:py-4 bg-white rounded-xl sm:rounded-2xl font-bold hover:shadow-xl hover:-translate-y-1 transition-all duration-300 text-sm sm:text-base" style={{ color: '#1F7A4D' }}>
              Book Trial Session
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
