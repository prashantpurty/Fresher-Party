import { useEffect, useRef } from "react";
import { Button } from "@nextui-org/react";
import { MapPin, Clock, Music, Coffee, Instagram } from "lucide-react";
import { IconBrandInstagram } from "@tabler/icons-react";
import { Link } from "react-router-dom";

export default function VenueSection() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particles = [];

    for (let i = 0; i < 50; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 2 + 1,
        color: `rgba(${Math.floor(Math.random() * 255)}, ${Math.floor(
          Math.random() * 255
        )}, ${Math.floor(Math.random() * 255)}, 0.5)`,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
      });
    }

    function animate() {
      requestAnimationFrame(animate);
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((particle) => {
        particle.x += particle.vx;
        particle.y += particle.vy;

        if (particle.x < 0 || particle.x > canvas.width) particle.vx *= -1;
        if (particle.y < 0 || particle.y > canvas.height) particle.vy *= -1;

        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
        ctx.fillStyle = particle.color;
        ctx.fill();
      });
    }

    animate();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <section className="relative w-full min-h-svh overflow-hidden">
      <canvas
        ref={canvasRef}
        className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-800"
      />
      <div className="relative z-10  px-4 md:px-6 py-12 flex items-center justify-center align-middle min-h-screen w-full">
        <div className="bg-black bg-opacity-70 p-8 rounded-lg backdrop-blur-sm">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="flex-1 space-y-4">
              <div className="inline-block">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="120"
                  height="60"
                  viewBox="0 0 120 60"
                  fill="none"
                  className="text-gray-400"
                >
                  <rect
                    x="1"
                    y="1"
                    width="118"
                    height="58"
                    rx="4"
                    stroke="currentColor"
                    strokeWidth="2"
                  />
                  <line
                    x1="30"
                    y1="1"
                    x2="30"
                    y2="59"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeDasharray="4 4"
                  />
                  <text
                    x="40"
                    y="25"
                    fill="currentColor"
                    fontSize="12"
                    fontFamily="sans-serif"
                  >
                    EVENT VENUE
                  </text>
                  <text
                    x="40"
                    y="45"
                    fill="currentColor"
                    fontSize="10"
                    fontFamily="sans-serif"
                  >
                    Date: 10/22/2024
                  </text>
                </svg>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tighter text-white">
                🎉 Freshers Party Invitation
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl">
                Kick off your college journey with an epic party! Join us for:
              </p>
            </div>
            <div className="flex-1 space-y-6">
              <div className="flex items-center gap-4 text-gray-300">
                <MapPin className="w-6 h-6" />
                <span>Kautilya Building 4th floor, CUTM</span>
              </div>
              <div className="flex items-center gap-4 text-gray-300">
                <Clock className="w-6 h-6" />
                <span>Doors open at 12.00 PM - Event starts at 1.00 PM</span>
              </div>
              <div className="flex items-center gap-4 text-gray-300">
                <Music className="w-6 h-6" />
                <span>Enjoy Event with Live DJ and Dance</span>
              </div>
              <div className="flex items-center gap-4 text-gray-300">
                <Coffee className="w-6 h-6" />
                <span> Complimentary Food & Refreshment</span>
              </div>
              <div className="relative">
                <Link
                  to={"https://www.instagram.com/cutm_bca_"}
                  target="_blank"
                >
                  <Button className="w-full bg-white text-black hover:bg-gray-200 transition-colors">
                    <IconBrandInstagram className="text-danger-50" />
                    Follow Us!
                  </Button>
                </Link>
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
