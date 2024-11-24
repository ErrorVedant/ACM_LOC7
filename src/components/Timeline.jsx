import React, { useEffect, useRef } from 'react'
import { motion, useAnimation, useInView } from 'framer-motion'
import { Sun, SpaceIcon as Planet, CompassIcon as Comet, Rocket, Star, Sparkles, Moon, Orbit } from 'lucide-react'

const timelineEvents = [
  {
    date: "1st December, 2024",
    title: "Registration Starts",
    details: ["Make a team of 4 members", "Registration opens for the hackathon"],
    icon: Sun
  },
  {
    date: "28th January, 2025",
    title: "Last Date to Register",
    details: ["Final day for team registration"],
    icon: Moon
  },
  {
    date: "29th January - 1st February, 2025",
    title: "Shortlisting Process",
    details: ["Teams will be evaluated and shortlisted for the hackathon"],
    icon: Star
  },
  {
    date: "2nd - 4th February, 2025",
    title: "RSVP and Team Confirmation",
    details: [
      "Contacting team leaders via email for availability and confirmation",
      "Final team list will be prepared"
    ],
    icon: Planet
  },
  {
    date: "8th February, 2025",
    title: "Hackathon Day",
    details: [
      "7:30 AM - Reporting of participants",
      "Venue: Dwarkadas Jivanlal Sanghvi College of Engineering",
      "8:30 AM - Registration closes at the main door",
      "9:00 AM - Inauguration ceremony in the seminar hall (3rd floor)",
      "Rules and regulations will be explained to participants",
      "11:00 AM - Hacking starts"
    ],
    icon: Rocket
  },
  {
    date: "Vedant",
    title: "Vedant",
    details: ["Vedant"],
    icon: Comet
  },
  {
    date: "Vedant",
    title: "Vedant",
    details: ["Vedant"],
    icon: Sparkles
  },
  {
    date: "Vedant",
    title: "Vedant",
    details: ["Vedant"],
    icon: Orbit
  },
  {
    date: "Vedant",
    title: "Vedant",
    details: ["Vedant"],
    icon: Star
  }
]

const TimelineEvent = ({ event, index }) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const controls = useAnimation()

  useEffect(() => {
    if (isInView) {
      controls.start("visible")
    }
  }, [isInView, controls])

  const cardVariants = {
    hidden: { 
      x: index % 2 === 0 ? -200 : 200,
      opacity: 0,
      scale: 0.8
    },
    visible: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        damping: 20,
        stiffness: 100,
        duration: 0.8,
        delay: index * 0.2
      }
    }
  }

  const iconVariants = {
    hidden: { 
      scale: 0,
      opacity: 0,
      rotate: -180
    },
    visible: {
      scale: 1,
      opacity: 1,
      rotate: 0,
      transition: { 
        duration: 0.5,
        delay: index * 0.2 + 0.3,
        type: "spring",
        stiffness: 200
      }
    }
  }

  const Icon = event.icon

  return (
    <div ref={ref} className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'} mb-32`}>
      <motion.div
        className={`w-1/2 ${index % 2 === 0 ? 'pr-12' : 'pl-12'}`}
        variants={cardVariants}
        initial="hidden"
        animate={controls}
      >
        <div className="bg-[#0a1128]/80 backdrop-blur-sm p-8 rounded-xl border border-white/10 
                       group relative overflow-hidden transform transition-all duration-500
                       hover:scale-105 hover:border-white/20">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 
                          opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          
          <div className="relative z-10">
            <div className="text-lg text-purple-300 mb-3 font-medium">{event.date}</div>
            <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-transparent 
                           group-hover:bg-clip-text group-hover:bg-gradient-to-r 
                           group-hover:from-blue-400 group-hover:to-purple-500 
                           transition-all duration-300">
              {event.title}
            </h3>
            <ul className="space-y-3">
              {event.details.map((detail, i) => (
                <li key={i} className="text-gray-300 text-base group-hover:text-white transition-colors duration-300">
                  {detail}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </motion.div>
      
      <motion.div
        className="w-16 h-16 rounded-full bg-[#0a1128] border-4 border-white flex items-center justify-center
                   shadow-[0_0_20px_rgba(255,255,255,0.3)] relative z-20"
        variants={iconVariants}
        initial="hidden"
        animate={controls}
      >
        <Icon className="w-8 h-8 text-white" />
      </motion.div>
      
      <div className={`w-1/2 ${index % 2 === 0 ? 'pl-12' : 'pr-12'}`} />
    </div>
  )
}

export default function Timeline() {
  return (
    <section className="py-32 relative overflow-hidden min-h-screen">
      
      <div className="container mx-auto px-4 relative z-10">

      <div className="flex justify-center">
  <h2 className="text-5xl md:text-7xl font-extrabold mb-8 tracking-wider text-center">
    OUR TIMELINE
  </h2>
</div>


        <motion.p
          className="text-center text-gray-300 mb-24 text-xl"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          See what's coming up in our event schedule
        </motion.p>
        
        <div className="relative max-w-6xl mx-auto">
          {/* Vertical Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 
                        bg-gradient-to-b from-blue-500 via-purple-500 to-purple-600 
                        rounded-full blur-[1px]" />
          
          {/* Timeline Events */}
          <div>
            {timelineEvents.map((event, index) => (
              <TimelineEvent key={index} event={event} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
