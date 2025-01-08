import React, { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import { Sun, Moon, Star, Sparkles, Rocket, Award, Globe } from "lucide-react";
import pacman from './pacman.jpg'; // Path to background image

const timelineEvents = [
  {
    date: "8th January, 2025 12:00 AM",
    title: "Registration Starts",
    details: ["Registration opens for the hackathon", "Make a team of 4 members"],
    icon: Sun
  },
  {
    date: "3rd February, 2025",
    title: "Last Date to Register",
    details: ["Final day for team registration"],
    icon: Moon
  },
  {
    date: "4th - 5th February, 2025",
    title: "Shortlisting Process",
    details: ["Teams will be evaluated and shortlisted for the hackathon"],
    icon: Star
  },
  {
    date: "6th February, 2025 12:00 PM",
    title: "Results Declaration",
    details: ["Shortlisted teams will be announced"],
    icon: Sparkles
  },
  {
    date: "6th - 7th February, 2025",
    title: "RSVP and Team Confirmation",
    details: [
      "Contacting team leaders via email for availability and confirmation",
      "Final team list will be prepared"
    ],
    icon: Moon
  },
  {
    date: "8th February, 2025",
    title: "Hackathon Day 1",
    details: [
      "7:30 AM - Reporting of participants",
      "Venue: Dwarkadas Jivanlal Sanghvi College of Engineering",
      "8:30 AM - Registration closes at the main door",
      "9:00 AM - Inauguration ceremony in the seminar hall (3rd floor)",
      "9:30 AM - 10:30 AM - Devfolio check-in",
      "10:30 AM - Team allocation (2 members in seminar hall, others in allocated rooms)",
      "11:00 AM - Hacking starts",
      "1:00 PM - 2:30 PM - Lunch for participants",
      "4:00 PM - 5:30 PM - First mentoring round",
      "5:30 PM - 6:30 PM - Evening snacks",
      "8:00 PM - 9:00 PM - Dinner for participants",
      "11:00 PM - 1:00 AM - Second mentoring round"
    ],
    icon: Rocket
  },
  {
    date: "9th February, 2025",
    title: "Hackathon Day 2",
    details: [
      "12:00 AM - Midnight snacks (energy drinks and dry snacks)",
      "8:00 AM - 9:00 AM - Breakfast",
      "12:00 PM - 1:30 PM - Judging round",
      "3:00 PM - 5:00 PM - Final judging round for selected teams",
      "6:00 PM - 7:00 PM - Closing ceremony"
    ],
    icon: Award
  },
  {
    date: "8th - 9th February, 2025",
    title: "Online Teams",
    details: [
      "The same schedule applies for online teams",
      "Ensure you have a stable internet connection",
      "Be available for virtual judging sessions",
      "Participate in online mentoring sessions",
      "Submit your project as per the provided guidelines"
    ],
    icon: Globe
  }
];

const TimelineEvent = ({ event, index }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  const cardVariants = {
    hidden: {
      x: index % 2 === 0 ? -200 : 200,
      opacity: 0,
      scale: 0.8,
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
        delay: index * 0.2,
      },
    },
  };

  const iconVariants = {
    hidden: {
      scale: 0,
      opacity: 0,
      rotate: -180,
    },
    visible: {
      scale: 1,
      opacity: 1,
      rotate: 0,
      transition: {
        duration: 0.5,
        delay: index * 0.2 + 0.3,
        type: "spring",
        stiffness: 200,
      },
    },
  };

  const Icon = event.icon;

  return (
    <div
      ref={ref}
      className={`flex items-center flex-col md:flex-row ${index % 2 === 0 ? "" : "md:flex-row-reverse"} mb-32`}
    >
      <motion.div
        className={`w-full md:w-1/2 ${index % 2 === 0 ? "pr-12" : "pl-12"}`}
        variants={cardVariants}
        initial="hidden"
        animate={controls}
      >
        <div className="bg-[#0a1128]/80 backdrop-blur-sm p-8 rounded-xl border border-white/10">
          <div className="text-lg text-purple-300 mb-3 font-medium">{event.date}</div>
          <h3 className="text-2xl font-bold mb-4 text-white">{event.title}</h3>
          <ul className="space-y-3">
            {event.details.map((detail, i) => (
              <li key={i} className="text-gray-300 text-base">
                {detail}
              </li>
            ))}
          </ul>
        </div>
      </motion.div>
      <motion.div
        className="w-16 h-16 rounded-full bg-[#0a1128] border-4 border-white flex items-center justify-center mt-4 md:mt-0"
        variants={iconVariants}
        initial="hidden"
        animate={controls}
      >
        <Icon className="w-8 h-8 text-white" />
      </motion.div>
      <div className={`w-full md:w-1/2 ${index % 2 === 0 ? "pl-12" : "pr-12"}`} />
    </div>
  );
};

export default function Timeline() {
  return (
    <section className="py-32 relative overflow-hidden min-h-screen"
      style={{
        backgroundImage: `url(${pacman})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}>
      <div className="container mx-auto px-4">
        <div className="flex justify-center">
          <h2 className="text-5xl font-extrabold mb-8">OUR TIMELINE</h2>
        </div>
        <div className="relative max-w-6xl mx-auto">
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-blue-500 to-purple-600" />
          {timelineEvents.map((event, index) => (
            <TimelineEvent key={index} event={event} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
