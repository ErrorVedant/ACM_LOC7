import React from 'react'

const timelineEvents = [
  {
    date: "2nd September, 2024",
    title: "Team filing procedure starts",
    details: ["The team filing procedure starts."],
    color: "blue"
  },
  {
    date: "22nd September, 2024",
    title: "Last day for filing the registration form",
    details: ["The team filing procedure ends."],
    color: "blue"
  },
  {
    date: "25th September, 2024",
    title: "Shortlisting Starts",
    details: ["The shortlist procedure will get confirmation."],
    color: "purple"
  },
  {
    date: "25th September, 2024",
    title: "Payment for final Registration",
    details: ["Shortlisted teams should complete their Registration by paying the registration fees."],
    color: "purple"
  },
  {
    date: "4th October, 2024",
    title: "Day 01",
    details: [
      "7:00 AM - Registration of Hackathon.",
      "8:00 AM - Start Hacking to Code the Cosmos.",
      "9:00 PM - First Day Ends."
    ],
    color: "purple"
  },
  {
    date: "5th October, 2024",
    title: "Day 02",
    details: [
      "8:00 AM - Second Day Starts.",
      "2:00 PM - Code & Judging Round Begins.",
      "4:00 PM - Pitching Round for Finale Begins.",
      "6:00 PM - Announcement of Winners."
    ],
    color: "purple"
  }
];

export default function Timeline() {
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
          Our Timeline
        </h2>
        <p className="text-center text-gray-400 mb-16">
          See what's coming up in our event schedule
        </p>
        
        <div className="relative max-w-4xl mx-auto">
          {/* Vertical Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-px bg-gradient-to-b from-blue-500 via-purple-500 to-purple-600" />
          
          {/* Timeline Events */}
          <div className="space-y-20">
            {timelineEvents.map((event, index) => (
              <div key={index} className={`relative flex items-center ${
                index % 2 === 0 ? 'flex-row-reverse' : 'flex-row'
              }`}>
                {/* Timeline Node */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full border-2 border-white
                  bg-black z-10 glow-timeline-node">
                  <div className={`absolute inset-1 rounded-full ${event.color === 'blue' ? 'bg-blue-500' : 'bg-purple-500'}`} />
                </div>

                {/* Content Card */}
                <div className={`w-full md:w-5/12 ${index % 2 === 0 ? 'pl-8' : 'pr-8'}`}>
                  <div className="bg-black/50 backdrop-blur-sm p-6 rounded-xl border border-white/10
                    hover:border-white/20 transition-all duration-500
                    hover:shadow-[0_0_30px_rgba(168,85,247,0.2)] group">
                    <div className="text-sm text-purple-400 mb-2">{event.date}</div>
                    <h3 className="text-xl font-bold mb-4 group-hover:text-transparent group-hover:bg-clip-text
                      group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-500">
                      {event.title}
                    </h3>
                    <ul className="space-y-2">
                      {event.details.map((detail, i) => (
                        <li key={i} className="text-gray-400 text-sm">
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
