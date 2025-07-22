import React, { useState, useEffect, useRef } from 'react';
const EVENT_TITLE = (
  <>
    <span className="text-gray-900">BNP Paribas</span>{' '}<br/>
    <span className="text-[#007749]">ISPL Campus Challenge 2025</span>
  </>
);
const EVENT_DESC =
  "Join the brightest minds in technology for a campus challenge where innovation meets opportunity. Register now and shape the future!";
const REGISTRATION_DEADLINE = new Date('2025-08-09T23:59:59');
const EVENT_DATE = 'August 10-12, 2025 · Global Virtual Event';
const EVENT_IMAGES = [
  'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg',
  'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg',
  'https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg',
];
function getTimeLeft() {
  const now = new Date();
  const diff = REGISTRATION_DEADLINE.getTime() - now.getTime();
  if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);
  const seconds = Math.floor((diff / 1000) % 60);
  return { days, hours, minutes, seconds };
}
const Hero: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState(getTimeLeft());
  const [currentImage, setCurrentImage] = useState(0);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(getTimeLeft());
    }, 1000);
    return () => clearInterval(timer);
  }, []);
  useEffect(() => {
    timeoutRef.current = setTimeout(() => {
      setCurrentImage((prev) => (prev + 1) % EVENT_IMAGES.length);
    }, 3500);
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [currentImage]);
  return (
    <section className="relative bg-gradient-to-br from-white to-[#007749]/30 py-12 md:py-20 min-h-[80vh] flex items-center">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-10 md:gap-16">
        {/* Left: Event Info */}
        <div className="flex-1 max-w-xl text-left">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight mb-2">
            {EVENT_TITLE}
          </h1>
          <p className="text-gray-700 text-lg md:text-xl mb-6">
            {EVENT_DESC}
          </p>
          {/* Countdown Card */}
          <div className="bg-white/80 shadow-lg rounded-2xl p-6 mb-6 w-full max-w-md">
            <div className="text-gray-700 font-semibold mb-3 text-base md:text-lg">Event Starts In</div>
            <div className="flex gap-3 md:gap-5 mb-2">
              {['days', 'hours', 'minutes', 'seconds'].map((unit) => (
                <div key={unit} className="flex flex-col items-center bg-[#F4FAFF] rounded-lg px-3 py-2 min-w-[56px]">
                  <span className="text-2xl md:text-3xl font-mono font-bold text-gray-900">
                    {String(timeLeft[unit as keyof typeof timeLeft]).padStart(2, '0')}
                  </span>
                  <span className="text-xs md:text-sm uppercase tracking-widest text-gray-500">
                    {unit}
                  </span>
                </div>
              ))}
            </div>
            <div className="text-xs md:text-sm text-gray-500 mt-2">{EVENT_DATE}</div>
          </div>
          {/* Register Button */}
          <a
            href="#register"
            className="inline-flex items-center gap-2 bg-[#007749] hover:bg-[#007749]/80 text-white font-bold text-lg md:text-xl px-7 py-3 rounded-full shadow-md transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[#00BFAE] focus:ring-offset-2"
          >
            Register Now
            <svg className="w-5 h-5 ml-1" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
          </a>
        </div>
        {/* Right: Sliding Images Carousel */}
        <div className="flex-1 flex justify-center items-center w-full h-[400px] md:h-[520px] relative">
          {EVENT_IMAGES.map((img, idx) => (
            <img
              key={img}
              src={img}
              alt={`Tech event visual ${idx + 1}`}
              className={`absolute top-0 left-0 w-full h-full object-cover rounded-3xl shadow-2xl border border-[#E6F7F6] bg-white transition-opacity duration-700 ${
                idx === currentImage ? 'opacity-100 z-10' : 'opacity-0 z-0'
              }`}
              style={{ minHeight: 320, maxHeight: '100%' }}
            />
          ))}
          {/* Carousel indicators */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-20">
            {EVENT_IMAGES.map((_, idx) => (
              <button
                key={idx}
                className={`w-3 h-3 rounded-full border-2 border-[#00BFAE] transition-all duration-200 ${
                  idx === currentImage ? 'bg-[#00BFAE]' : 'bg-white'
                }`}
                onClick={() => setCurrentImage(idx)}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
export default Hero;
