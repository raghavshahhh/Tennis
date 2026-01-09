import SectionTitle from '@/components/SectionTitle';
import Link from 'next/link';
import { MapPin, Users, Calendar, Phone, Navigation, ExternalLink } from 'lucide-react';

export const metadata = {
  title: 'Locations & Events | Pro Ace Tennis Academy',
  description: 'Find Pro Ace Tennis Academy locations across Delhi and Gurugram. View our events and training centers.',
};

const locations = [
  { 
    name: 'Experion Windchants', 
    area: 'Sector 112, Gurugram', 
    participants: '50+', 
    ageGroups: 'All ages', 
    events: 3,
    mapQuery: 'Experion+Windchants+Sector+112+Gurugram',
    coordinates: '28.4089,76.9789'
  },
  { 
    name: 'Bestech Park View', 
    area: 'Sector 66, Gurugram', 
    participants: '40+', 
    ageGroups: 'Kids & Adults', 
    events: 2,
    mapQuery: 'Bestech+Park+View+Sector+66+Gurugram',
    coordinates: '28.4156,77.0423'
  },
  { 
    name: 'ATS Kocoon', 
    area: 'Sector 109, Gurugram', 
    participants: '35+', 
    ageGroups: 'All ages', 
    events: 2,
    mapQuery: 'ATS+Kocoon+Sector+109+Gurugram',
    coordinates: '28.4012,76.9856'
  },
  { 
    name: 'Microtek Greenburg', 
    area: 'Sector 86, Gurugram', 
    participants: '45+', 
    ageGroups: 'Kids & Juniors', 
    events: 3,
    mapQuery: 'Microtek+Greenburg+Sector+86+Gurugram',
    coordinates: '28.4234,77.0156'
  },
  { 
    name: 'Ramprastha City', 
    area: 'Sector 37D, Gurugram', 
    participants: '30+', 
    ageGroups: 'All ages', 
    events: 2,
    mapQuery: 'Ramprastha+City+Sector+37D+Gurugram',
    coordinates: '28.4567,77.0234'
  },
  { 
    name: 'Delhi HQ', 
    area: 'Delhi', 
    participants: '60+', 
    ageGroups: 'All ages', 
    events: 5,
    mapQuery: 'Delhi+Tennis+Academy',
    coordinates: '28.6139,77.2090'
  },
];

const events = [
  { title: 'Summer Tennis Camp 2025', location: 'Multiple Locations', date: 'May - June 2025', participants: '100+', desc: 'Intensive summer training program for all age groups' },
  { title: 'Inter-Society Tournament', location: 'Gurugram', date: 'March 2025', participants: '80+', desc: 'Competitive tournament between society teams' },
  { title: 'Kids Tennis Festival', location: 'Delhi HQ', date: 'February 2025', participants: '60+', desc: 'Fun tennis activities and games for children' },
  { title: 'Adult Tennis League', location: 'Multiple Locations', date: 'Ongoing', participants: '40+', desc: 'Weekly league matches for adult players' },
];

export default function LocationsPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative py-16 sm:py-20 px-4">
        <div className="absolute inset-0 rounded-3xl mx-4 -mt-24 pt-24" style={{ background: 'linear-gradient(135deg, #1F7A4D 0%, #155c39 100%)' }}></div>
        <div className="relative max-w-7xl mx-auto text-center text-white">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">Our Locations</h1>
          <p className="text-white/80 text-base sm:text-lg max-w-2xl mx-auto">
            Training centers across Delhi & Gurugram for your convenience
          </p>
        </div>
      </section>

      {/* Main Map */}
      <section className="py-12 sm:py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <SectionTitle title="Find Us" subtitle="All our training locations in Delhi NCR" />
          <div className="glass-card rounded-2xl sm:rounded-3xl overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d224346.54004883842!2d76.82493894863278!3d28.42314829999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d19d582e38859%3A0x2cf5fe8e5c64b1e!2sGurugram%2C%20Haryana!5e0!3m2!1sen!2sin!4v1704067200000!5m2!1sen!2sin"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-[300px] sm:h-[400px]"
            ></iframe>
          </div>
        </div>
      </section>

      {/* Locations Grid */}
      <section className="py-12 sm:py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <SectionTitle title="Training Centers" subtitle="Click on any location to get directions" />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {locations.map((location) => (
              <div key={location.name} className="glass-card rounded-2xl sm:rounded-3xl overflow-hidden hover-lift">
                <div className="h-32 sm:h-40 relative" style={{ background: 'linear-gradient(135deg, #1F7A4D 0%, #2E8B57 100%)' }}>
                  <MapPin className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 sm:w-16 sm:h-16 text-white/30" />
                  <div className="absolute bottom-3 left-3 right-3">
                    <h3 className="font-bold text-white text-base sm:text-lg">{location.name}</h3>
                    <p className="text-white/80 text-xs sm:text-sm">{location.area}</p>
                  </div>
                </div>
                <div className="p-4 sm:p-6">
                  <div className="grid grid-cols-3 gap-2 text-center mb-4">
                    <div className="glass rounded-xl p-2">
                      <Users className="w-4 h-4 mx-auto mb-1" style={{ color: '#1F7A4D' }} />
                      <p className="font-bold text-sm" style={{ color: '#1F7A4D' }}>{location.participants}</p>
                      <p className="text-gray-500 text-xs">Players</p>
                    </div>
                    <div className="glass rounded-xl p-2">
                      <Calendar className="w-4 h-4 mx-auto mb-1" style={{ color: '#1F7A4D' }} />
                      <p className="font-bold text-sm" style={{ color: '#1F7A4D' }}>{location.events}</p>
                      <p className="text-gray-500 text-xs">Events</p>
                    </div>
                    <div className="glass rounded-xl p-2">
                      <p className="font-bold text-xs" style={{ color: '#1F7A4D' }}>{location.ageGroups}</p>
                      <p className="text-gray-500 text-xs">Ages</p>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <a 
                      href={`https://www.google.com/maps/search/?api=1&query=${location.mapQuery}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-2 px-3 py-2.5 rounded-xl text-white text-sm font-medium hover:shadow-lg transition-all"
                      style={{ background: 'linear-gradient(135deg, #1F7A4D 0%, #2E8B57 100%)' }}
                    >
                      <Navigation className="w-4 h-4" />
                      Directions
                    </a>
                    <a 
                      href="tel:9911747408"
                      className="flex items-center justify-center gap-2 px-3 py-2.5 rounded-xl text-sm font-medium hover:shadow-lg transition-all"
                      style={{ background: 'rgba(31, 122, 77, 0.1)', color: '#1F7A4D' }}
                    >
                      <Phone className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Events Section */}
      <section className="py-12 sm:py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <SectionTitle title="Upcoming Events" subtitle="Tennis events and tournaments across our locations" />
          <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
            {events.map((event) => (
              <div key={event.title} className="glass-card rounded-xl sm:rounded-2xl p-5 sm:p-6 hover-lift">
                <div className="flex justify-between items-start mb-3 gap-2">
                  <h3 className="font-bold text-gray-800 text-sm sm:text-base">{event.title}</h3>
                  <span className="px-3 py-1 text-white text-xs sm:text-sm rounded-xl whitespace-nowrap" style={{ background: 'linear-gradient(135deg, #1F7A4D 0%, #2E8B57 100%)' }}>
                    {event.participants} players
                  </span>
                </div>
                <p className="text-gray-600 text-xs sm:text-sm mb-3">{event.desc}</p>
                <div className="flex flex-wrap gap-2 text-xs sm:text-sm text-gray-500">
                  <span className="glass px-3 py-1.5 rounded-lg flex items-center gap-1">
                    <MapPin className="w-3 h-3" /> {event.location}
                  </span>
                  <span className="glass px-3 py-1.5 rounded-lg flex items-center gap-1">
                    <Calendar className="w-3 h-3" /> {event.date}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Society Collaboration */}
      <section className="py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="glass-card rounded-2xl sm:rounded-3xl p-8 sm:p-10 text-center">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-4">Society Collaboration</h2>
            <p className="text-gray-600 mb-6 text-sm sm:text-base">
              Interested in bringing professional tennis coaching to your society or residential complex?
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link href="/contact" className="inline-flex items-center justify-center gap-2 px-6 py-3 text-white rounded-xl font-medium hover:shadow-xl hover:-translate-y-1 transition-all duration-300 text-sm sm:text-base" style={{ background: 'linear-gradient(135deg, #1F7A4D 0%, #2E8B57 100%)' }}>
                Contact Us
              </Link>
              <a href="tel:9911747408" className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-medium hover:shadow-lg transition-all text-sm sm:text-base" style={{ background: 'rgba(31, 122, 77, 0.1)', color: '#1F7A4D' }}>
                <Phone className="w-4 h-4" /> Call Head Coach
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
