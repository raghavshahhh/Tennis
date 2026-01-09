import SectionTitle from '@/components/SectionTitle';
import { Trophy, Users, Award, MapPin, Calendar, Target, Star, Medal, TrendingUp } from 'lucide-react';

export const metadata = {
  title: 'Achievements | Pro Ace Tennis Academy',
  description: 'View the achievements and milestones of Pro Ace Tennis Academy and our players.',
};

const stats = [
  { number: '500+', label: 'Students Trained', icon: Users },
  { number: '15+', label: 'Certified Coaches', icon: Award },
  { number: '10+', label: 'Locations', icon: MapPin },
  { number: '50+', label: 'Tournaments', icon: Trophy },
  { number: '100+', label: 'Tournament Players', icon: Target },
  { number: '3', label: 'Years of Excellence', icon: Star },
];

const achievements = [
  { year: '2025', items: ['Expanded to 10+ locations across Delhi NCR', 'Launched Adult Tennis League', 'Summer Camp with 100+ participants'] },
  { year: '2024', items: ['Multiple district-level champions', 'Introduced Advanced Training Program', 'Partnership with UTR Sports', 'Conducted 20+ inter-society tournaments'] },
  { year: '2023', items: ['Expanded to Gurugram societies', 'Team grew to 15+ coaches', 'First state-level qualifiers', 'Launched structured program curriculum'] },
  { year: '2022', items: ['Academy founded in Delhi', 'First batch of 50 students', 'AITA & ITF certified coaching team'] },
];

const playerAchievements = [
  { level: 'District Level', count: '25+', desc: 'Champions & runners-up', icon: Medal },
  { level: 'State Level', count: '10+', desc: 'Qualifiers & participants', icon: Trophy },
  { level: 'National Level', count: '5+', desc: 'Tournament participants', icon: Star },
];

const recognitions = ['AITA Recognized', 'Professional Coaching', 'Certified Trainers'];

export default function AchievementsPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative py-16 sm:py-20 px-4">
        <div className="absolute inset-0 rounded-3xl mx-4 -mt-24 pt-24" style={{ background: 'linear-gradient(135deg, #1F7A4D 0%, #155c39 100%)' }}></div>
        <div className="relative max-w-7xl mx-auto text-center text-white">
          <Trophy className="w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-4 opacity-80" />
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">Our Achievements</h1>
          <p className="text-white/80 text-base sm:text-lg max-w-2xl mx-auto">
            Milestones and success stories since 2022
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 sm:py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center glass-card p-4 sm:p-6 rounded-xl sm:rounded-2xl hover-lift">
                <stat.icon className="w-6 h-6 sm:w-8 sm:h-8 mx-auto mb-2" style={{ color: '#1F7A4D' }} />
                <p className="text-xl sm:text-2xl md:text-3xl font-bold gradient-text">{stat.number}</p>
                <p className="text-gray-600 text-xs sm:text-sm">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-12 sm:py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <SectionTitle title="Our Journey" subtitle="Key milestones in our growth" />
          <div className="space-y-4 sm:space-y-6">
            {achievements.map((year) => (
              <div key={year.year} className="flex gap-4 sm:gap-6">
                <div className="flex flex-col items-center">
                  <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-xl sm:rounded-2xl flex items-center justify-center text-white font-bold text-sm sm:text-lg shrink-0 shadow-lg" style={{ background: 'linear-gradient(135deg, #1F7A4D 0%, #2E8B57 100%)' }}>
                    {year.year}
                  </div>
                  <div className="w-0.5 flex-1 mt-2" style={{ background: 'linear-gradient(180deg, #1F7A4D 0%, #e8f5ed 100%)' }}></div>
                </div>
                <div className="flex-1 pb-4 sm:pb-6">
                  <div className="glass-card rounded-xl sm:rounded-2xl p-4 sm:p-6 hover-lift">
                    <ul className="space-y-2 sm:space-y-3">
                      {year.items.map((item) => (
                        <li key={item} className="flex items-start gap-2 sm:gap-3">
                          <TrendingUp className="w-4 h-4 sm:w-5 sm:h-5 mt-0.5 shrink-0" style={{ color: '#1F7A4D' }} />
                          <span className="text-gray-600 text-sm sm:text-base">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Player Achievements */}
      <section className="py-12 sm:py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <SectionTitle title="Player Achievements" subtitle="Our students making us proud" />
          <div className="grid sm:grid-cols-3 gap-4 sm:gap-6">
            {playerAchievements.map((item) => (
              <div key={item.level} className="rounded-2xl sm:rounded-3xl p-6 sm:p-8 text-center hover-lift text-white" style={{ background: 'linear-gradient(135deg, #1F7A4D 0%, #2E8B57 100%)' }}>
                <item.icon className="w-10 h-10 sm:w-12 sm:h-12 mx-auto mb-3 opacity-80" />
                <p className="text-4xl sm:text-5xl font-bold mb-2">{item.count}</p>
                <p className="text-lg sm:text-xl font-medium mb-1">{item.level}</p>
                <p className="text-white/70 text-xs sm:text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Recognition */}
      <section className="py-12 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-6">Recognition & Partnerships</h2>
          <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
            {recognitions.map((item) => (
              <div key={item} className="glass-card px-5 sm:px-6 py-3 sm:py-4 rounded-xl sm:rounded-2xl hover-lift flex items-center gap-2">
                <Award className="w-5 h-5" style={{ color: '#1F7A4D' }} />
                <p className="font-medium text-sm sm:text-base" style={{ color: '#1F7A4D' }}>{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
