import { useState } from "react";
import { motion } from "framer-motion";
import { Ticket, UtensilsCrossed, Pizza, Coffee } from "lucide-react";
import { RainbowButton } from "./ui/Rainbowbuttoncom";
import { Link } from "react-router-dom";

export default function PassTicket() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="relative w-full min-h-[400px] overflow-hidden bg-gradient-to-br from-zinc-900 to-black">
      {/* Metallic texture overlay */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj4KICA8ZmlsdGVyIGlkPSJhIiB4PSIwIiB5PSIwIj4KICAgIDxmZVR1cmJ1bGVuY2UgdHlwZT0iZnJhY3RhbE5vaXNlIiBiYXNlRnJlcXVlbmN5PSIuNzUiIHN0aXRjaFRpbGVzPSJzdGl0Y2giLz4KICAgIDxmZUNvbG9yTWF0cml4IHR5cGU9InNhdHVyYXRlIiB2YWx1ZXM9IjAiLz4KICA8L2ZpbHRlcj4KICA8cmVjdCB3aWR0aD0iMzAwIiBoZWlnaHQ9IjMwMCIgZmlsdGVyPSJ1cmwoI2EpIiBvcGFjaXR5PSIwLjA1Ii8+Cjwvc3ZnPg==')]" />

      {/* Realistic Ticket background */}
      <div className="absolute inset-y-0 left-0 w-1/2 opacity-20">
        <svg
          className="w-full h-full"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 100 100"
        >
          <pattern
            id="ticket-pattern"
            patternUnits="userSpaceOnUse"
            width="100"
            height="100"
          >
            <rect
              width="90"
              height="40"
              x="5"
              y="30"
              fill="none"
              stroke="white"
              strokeWidth="1"
              rx="4"
            />
            <path
              d="M5 50h90M85 30v40"
              stroke="white"
              strokeWidth="1"
              strokeDasharray="2 2"
            />
            <text x="10" y="45" fill="white" fontSize="8">
              EVENT TICKET
            </text>
            <text x="10" y="62" fill="white" fontSize="6">
              Date: 10/22/2024
            </text>
            <text x="50" y="62" fill="white" fontSize="6">
              Time: 1:00 PM
            </text>
            <rect x="86" y="32" width="7" height="16" fill="white" />
            <rect x="86" y="52" width="7" height="16" fill="white" />
            <Ticket
              style={{ width: "32px", height: "32px", fill: "white" }}
              x="65"
              y="33"
            />
          </pattern>
          <rect width="100%" height="100%" fill="url(#ticket-pattern)" />
        </svg>
      </div>

      {/* Food and Drinks background */}
      <div className="absolute inset-y-0 right-0 w-1/2 opacity-20">
        <svg
          className="w-full h-full"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 100 100"
        >
          <pattern
            id="food-pattern"
            patternUnits="userSpaceOnUse"
            width="100"
            height="100"
          >
            <circle
              cx="25"
              cy="25"
              r="20"
              fill="none"
              stroke="white"
              strokeWidth="1"
            />
            <UtensilsCrossed
              style={{ width: "32px", height: "32px", fill: "white" }}
              x="21"
              y="21"
            />
            <Pizza
              style={{ width: "40px", height: "40px", fill: "white" }}
              x="65"
              y="15"
            />
            <Coffee
              style={{ width: "32px", height: "32px", fill: "white" }}
              x="70"
              y="70"
            />
            <path
              d="M15 70 Q25 60, 35 70 T55 70"
              fill="none"
              stroke="white"
              strokeWidth="2"
            />
            <circle cx="20" cy="75" r="3" fill="white" />
            <circle cx="30" cy="75" r="3" fill="white" />
            <circle cx="40" cy="75" r="3" fill="white" />
          </pattern>
          <rect width="100%" height="100%" fill="url(#food-pattern)" />
        </svg>
      </div>

      {/* Main content */}
      <div className="relative z-10 flex flex-col items-center justify-center space-y-8 p-8 text-center min-h-[400px]">
        <motion.h2
          className="text-3xl md:text-5xl font-bold text-white"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Grab your Passes Now!
        </motion.h2>
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onHoverStart={() => setIsHovered(true)}
          onHoverEnd={() => setIsHovered(false)}
        >
          <Link to={"/ticket"} className="dark">
            <RainbowButton className={"dark:text-black"}>
              Grab Your Pass
            </RainbowButton>
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
