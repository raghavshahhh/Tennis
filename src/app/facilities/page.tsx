import SectionTitle from '@/components/SectionTitle';
import Link from 'next/link';
import { Target, Brain, Dumbbell, Heart, Users, Clock, CheckCircle, Video, Zap, Shield, Activity } from 'lucide-react';

export const metadata = {
  title: 'Facilities & Training | Pro Ace Tennis Academy',
  description: 'Explore our world-class tennis training facilities, equipment, and training methodology.',
};

const facilities = [
  { icon: Target, title: 'Quality Courts', desc: 'Well-maintained tennis courts at all our locations with proper surfaces for optimal play' },
  { icon: Zap, title: 'Professional Equipment', desc: 'Age-appropriate rackets, balls (red/orange/green/regular), and training aids' },
  { icon: Video, title: 'Video Analysis', desc: 'Modern video analysis tools to review and improve technique' },
  { icon: Dumbbell, title: 'Fitness Training', desc: 'Dedicated fitness sessions for agility, strength, and endurance' },
  { icon: Brain, title: 'Mental Conditioning', desc: 'Focus on mental toughness, concentration, and match psychology' },
  { icon: Users, title: 'Optimal Ratio', desc: 'Maintained player-coach ratio for personalized attention' },
];

const trainingAspects = [
  { title: 'Technical Training', icon: Target, items: ['Forehand & Backhand strokes', 'Serve & Return', 'Volleys & Overheads', 'Footwork patterns', 'Grip techniques'] },
  { title: 'Tactical Training', icon: Brain, items: ['Point construction', 'Singles strategies', 'Doubles positioning', 'Match situations', 'Opponent analysis'] },
  { title: 'Physical Training', icon: Dumbbell, items: ['Agility drills', 'Speed training', 'Endurance building', 'Flexibility exercises', 'Injury prevention'] },
  { title: 'Mental Training', icon: Heart, items: ['Focus & concentration', 'Handling pressure', 'Match temperament', 'Goal setting', 'Positive mindset'] },
];

const ratios = [
  { ratio: '4:1', program: 'Beginners', desc: 'Maximum attention for new players' },
  { ratio: '6:1', program: 'Intermediate', desc: 'Balanced group dynamics' },
  { ratio: '8:1', program: 'Advanced', desc: 'Competitive group training' },
];

export default function FacilitiesPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative py-16 sm:py-20 px-4">
        <div className="absolute inset-0 rounded-3xl mx-4 -mt-24 pt-24" style={{ background: 'linear-gradient(135deg, #1F7A4D 0%, #155c39 100%)' }}></div>
        <div className="relative max-w-7xl mx-auto text-center text-white">
          <Activity className="w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-4 opacity-80" />
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">Facilities & Training</h1>
          <p className="text-white/80 text-base sm:text-lg max-w-2xl mx-auto">
            World-class facilities and comprehensive training methodology
          </p>
        </div>
      </section>

      {/* Facilities Grid */}
      <section className="py-12 sm:py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <SectionTitle title="Our Facilities" subtitle="Everything you need for professional tennis training" />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {facilities.map((item) => (
              <div key={item.title} className="glass-card rounded-xl sm:rounded-2xl p-5 sm:p-6 hover-lift group">
                <item.icon className="w-8 h-8 sm:w-10 sm:h-10 mb-3 sm:mb-4 group-hover:scale-110 transition-transform" style={{ color: '#1F7A4D' }} />
                <h3 className="font-bold text-gray-800 mb-2 text-sm sm:text-base">{item.title}</h3>
                <p className="text-gray-600 text-xs sm:text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Training Methodology */}
      <section className="py-12 sm:py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <SectionTitle title="Training Methodology" subtitle="Comprehensive approach to player development" />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {trainingAspects.map((aspect) => (
              <div key={aspect.title} className="glass-card rounded-xl sm:rounded-2xl p-5 sm:p-6 hover-lift">
                <div className="flex items-center gap-3 mb-4">
                  <aspect.icon className="w-6 h-6" style={{ color: '#1F7A4D' }} />
                  <h3 className="font-bold text-sm sm:text-base" style={{ color: '#1F7A4D' }}>{aspect.title}</h3>
                </div>
                <ul className="space-y-2">
                  {aspect.items.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-xs sm:text-sm text-gray-600">
                      <CheckCircle className="w-4 h-4 mt-0.5 shrink-0" style={{ color: '#1F7A4D' }} />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Player-Coach Ratio */}
      <section className="py-12 sm:py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <SectionTitle title="Player-Coach Ratio" subtitle="Personalized attention for every student" />
          <div className="grid sm:grid-cols-3 gap-4 sm:gap-6">
            {ratios.map((item) => (
              <div key={item.program} className="rounded-2xl sm:rounded-3xl p-6 sm:p-8 hover-lift text-white" style={{ background: 'linear-gradient(135deg, #1F7A4D 0%, #2E8B57 100%)' }}>
                <Users className="w-8 h-8 mx-auto mb-3 opacity-80" />
                <p className="text-4xl sm:text-5xl font-bold mb-2">{item.ratio}</p>
                <p className="font-medium mb-1 text-base sm:text-lg">{item.program}</p>
                <p className="text-white/70 text-xs sm:text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Session Timings */}
      <section className="py-12 sm:py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="glass-card rounded-2xl sm:rounded-3xl p-6 sm:p-8">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-6 text-center">Training Schedule</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="flex items-center gap-4 p-4 rounded-xl" style={{ background: 'rgba(31, 122, 77, 0.1)' }}>
                <Clock className="w-8 h-8" style={{ color: '#1F7A4D' }} />
                <div>
                  <h3 className="font-medium text-gray-800 text-sm sm:text-base">Morning Sessions</h3>
                  <p className="text-gray-600 text-sm">6:00 AM - 9:00 AM</p>
                </div>
              </div>
              <div className="flex items-center gap-4 p-4 rounded-xl" style={{ background: 'rgba(31, 122, 77, 0.1)' }}>
                <Clock className="w-8 h-8" style={{ color: '#1F7A4D' }} />
                <div>
                  <h3 className="font-medium text-gray-800 text-sm sm:text-base">Evening Sessions</h3>
                  <p className="text-gray-600 text-sm">4:00 PM - 8:00 PM</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="glass-card rounded-2xl sm:rounded-3xl p-8 sm:p-10 text-center">
            <Shield className="w-12 h-12 mx-auto mb-4" style={{ color: '#1F7A4D' }} />
            <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-4">Experience Our Training</h2>
            <p className="text-gray-600 mb-6 text-sm sm:text-base">Book a trial session to experience our facilities and coaching firsthand</p>
            <Link href="/join" className="inline-flex items-center gap-2 px-6 sm:px-8 py-3 sm:py-4 text-white rounded-xl sm:rounded-2xl font-bold hover:shadow-xl hover:-translate-y-1 transition-all duration-300 text-sm sm:text-base" style={{ background: 'linear-gradient(135deg, #1F7A4D 0%, #2E8B57 100%)' }}>
              Book Trial Session
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
