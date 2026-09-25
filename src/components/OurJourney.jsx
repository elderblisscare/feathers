import React from 'react';

const OurJourney = () => {
  const stats = [
    {
      id: 'staff-pool',
      value: '2500+',
      label: 'Staff Pool',
      sublabel: '',
      colorTheme: {
        badgeBg: 'bg-sky-50/90',
        badgeBorder: 'border-sky-100',
        iconGlow: 'bg-sky-200/40',
        accent: '#0284C7',
      },
      // Detailed SVG illustration for Staff Pool (caregiver & medical team)
      illustration: (
        <svg
          viewBox="0 0 100 100"
          className="w-16 h-16 sm:w-20 sm:h-20 transition-transform duration-300 group-hover:scale-110"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Soft background aura */}
          <circle cx="50" cy="50" r="42" fill="#E0F2FE" />
          <circle cx="50" cy="50" r="34" fill="#BAE6FD" fillOpacity="0.4" />

          {/* Background Team Silhouette Left */}
          <circle cx="30" cy="38" r="8" fill="#93C5FD" />
          <path
            d="M18 58C18 52 23 48 30 48C37 48 42 52 42 58"
            stroke="#60A5FA"
            strokeWidth="3.5"
            strokeLinecap="round"
          />

          {/* Background Team Silhouette Right */}
          <circle cx="70" cy="38" r="8" fill="#93C5FD" />
          <path
            d="M58 58C58 52 63 48 70 48C77 48 82 52 82 58"
            stroke="#60A5FA"
            strokeWidth="3.5"
            strokeLinecap="round"
          />

          {/* Central Doctor / Caregiver Head */}
          <circle cx="50" cy="33" r="11" fill="#0284C7" />
          {/* Medical Cap / Cross Accent */}
          <circle cx="50" cy="27" r="3" fill="#FFFFFF" />

          {/* Central Body with Coat */}
          <path
            d="M33 66C33 55 40 50 50 50C60 50 67 55 67 66V68H33V66Z"
            fill="#0369A1"
          />
          {/* Stethoscope */}
          <path
            d="M44 52V57C44 60.5 46.5 63 50 63C53.5 63 56 60.5 56 57V52"
            stroke="#38BDF8"
            strokeWidth="2.5"
            strokeLinecap="round"
          />
          <circle cx="50" cy="65" r="2.5" fill="#E0F2FE" stroke="#0284C7" strokeWidth="1.5" />

          {/* Certified Star Badge */}
          <circle cx="68" cy="65" r="9" fill="#38BDF8" stroke="#FFFFFF" strokeWidth="2" />
          <path
            d="M68 60L69.3 63.3L72.8 63.6L70.1 65.8L70.9 69.3L68 67.4L65.1 69.3L65.9 65.8L63.2 63.6L66.7 63.3L68 60Z"
            fill="#FFFFFF"
          />
        </svg>
      ),
    },
    {
      id: 'years-experience',
      value: '15+',
      label: 'Years of Experience',
      sublabel: 'in Elder Care',
      colorTheme: {
        badgeBg: 'bg-rose-50/90',
        badgeBorder: 'border-rose-100',
        iconGlow: 'bg-rose-200/40',
        accent: '#E11D48',
      },
      // Detailed SVG illustration for 15+ Years Experience (compassionate elder care & longevity)
      illustration: (
        <svg
          viewBox="0 0 100 100"
          className="w-16 h-16 sm:w-20 sm:h-20 transition-transform duration-300 group-hover:scale-110"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Soft background aura */}
          <circle cx="50" cy="50" r="42" fill="#FFE4E6" />
          <circle cx="50" cy="50" r="34" fill="#FECDD3" fillOpacity="0.5" />

          {/* Elder Care Holding Hands Arc */}
          <path
            d="M32 46C32 37 39 30 48 30C57 30 64 37 64 46"
            stroke="#FDA4AF"
            strokeWidth="3"
            strokeLinecap="round"
            strokeDasharray="3 3"
          />

          {/* Compassionate Heart Center */}
          <path
            d="M50 67C50 67 33 54 33 41C33 34.5 38 30 44 30C47.5 30 49.5 32 50 33C50.5 32 52.5 30 56 30C62 30 67 34.5 67 41C67 54 50 67 50 67Z"
            fill="#E11D48"
          />

          {/* Helping Caring Hand inside heart */}
          <path
            d="M44 48C45.5 45.5 48.5 44 51.5 45.5C53 46.2 54 48 53.5 50L51.5 55H46L44 48Z"
            fill="#FFFFFF"
            fillOpacity="0.9"
          />
          <circle cx="48" cy="40" r="3" fill="#FFFFFF" fillOpacity="0.9" />

          {/* 15 Years Rosette Ribbon Badge */}
          <circle cx="68" cy="33" r="10" fill="#BE123C" stroke="#FFFFFF" strokeWidth="2" />
          <path
            d="M65 33L67 35L71 31"
            stroke="#FFFFFF"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          {/* Ribbon tails */}
          <path d="M64 41L61 50L66 47L69 50L68 41" fill="#BE123C" />
        </svg>
      ),
    },
    {
      id: 'happy-customers',
      value: '10K+',
      label: 'Happy Customers',
      sublabel: '',
      colorTheme: {
        badgeBg: 'bg-amber-50/90',
        badgeBorder: 'border-amber-100',
        iconGlow: 'bg-amber-200/40',
        accent: '#D97706',
      },
      // Detailed SVG illustration for 10K+ Happy Customers (smiling senior, warmth, 5-stars)
      illustration: (
        <svg
          viewBox="0 0 100 100"
          className="w-16 h-16 sm:w-20 sm:h-20 transition-transform duration-300 group-hover:scale-110"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Soft background aura */}
          <circle cx="50" cy="50" r="42" fill="#FEF3C7" />
          <circle cx="50" cy="50" r="34" fill="#FDE68A" fillOpacity="0.5" />

          {/* Smiling Face - Warm & Happy */}
          <circle cx="50" cy="46" r="22" fill="#F59E0B" />
          {/* Eyes smiling */}
          <path
            d="M40 43C41.5 41 44 41 45.5 43"
            stroke="#78350F"
            strokeWidth="2.5"
            strokeLinecap="round"
          />
          <path
            d="M54.5 43C56 41 58.5 41 60 43"
            stroke="#78350F"
            strokeWidth="2.5"
            strokeLinecap="round"
          />
          {/* Cheerful Blush */}
          <circle cx="38" cy="48" r="3" fill="#FBBF24" />
          <circle cx="62" cy="48" r="3" fill="#FBBF24" />
          {/* Warm Wide Smile */}
          <path
            d="M42 51C44 57 56 57 58 51"
            stroke="#78350F"
            strokeWidth="2.8"
            strokeLinecap="round"
          />

          {/* Golden 5-Star Row / Floating Star */}
          <path
            d="M50 14L52 19.5L58 20L53.5 23.5L55 29L50 26L45 29L46.5 23.5L42 20L48 19.5L50 14Z"
            fill="#D97706"
            stroke="#FFFFFF"
            strokeWidth="1.5"
          />
          {/* Mini sparkle stars */}
          <path
            d="M26 28L27.2 31.2L30.5 31.6L28 33.8L28.7 37L26 35.3L23.3 37L24 33.8L21.5 31.6L24.8 31.2L26 28Z"
            fill="#F59E0B"
          />
          <path
            d="M74 28L75.2 31.2L78.5 31.6L76 33.8L76.7 37L74 35.3L71.3 37L72 33.8L69.5 31.6L72.8 31.2L74 28Z"
            fill="#F59E0B"
          />

          {/* Thumbs Up Satisfaction Badge */}
          <circle cx="70" cy="65" r="9" fill="#B45309" stroke="#FFFFFF" strokeWidth="2" />
          <path
            d="M67 67V64C67 63 68 61 70 61C70.5 61 71 61.5 71 62.5L70.5 64H73C73.8 64 74.2 64.6 74 65.2L73 68C72.8 68.6 72.2 69 71.5 69H67"
            stroke="#FFFFFF"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
    },
    {
      id: 'delhi-ncr',
      value: 'Hyper Local',
      label: 'Focus On',
      sublabel: 'Delhi-NCR',
      colorTheme: {
        badgeBg: 'bg-emerald-50/90',
        badgeBorder: 'border-emerald-100',
        iconGlow: 'bg-emerald-200/40',
        accent: '#059669',
      },
      // Detailed SVG illustration for Hyper Local Delhi-NCR (map pin, local home, radar pulse)
      illustration: (
        <svg
          viewBox="0 0 100 100"
          className="w-16 h-16 sm:w-20 sm:h-20 transition-transform duration-300 group-hover:scale-110"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Soft background aura */}
          <circle cx="50" cy="50" r="42" fill="#D1FAE5" />
          <circle cx="50" cy="50" r="34" fill="#A7F3D0" fillOpacity="0.5" />

          {/* Radar ripple rings */}
          <circle
            cx="50"
            cy="68"
            r="18"
            stroke="#6EE7B7"
            strokeWidth="2"
            strokeDasharray="4 3"
          />
          <circle
            cx="50"
            cy="68"
            r="28"
            stroke="#A7F3D0"
            strokeWidth="1.5"
            strokeDasharray="2 4"
          />

          {/* Map Location Pin */}
          <path
            d="M50 20C40.6 20 33 27.6 33 37C33 49 47 64 50 67C53 64 67 49 67 37C67 27.6 59.4 20 50 20Z"
            fill="#059669"
            stroke="#047857"
            strokeWidth="1.5"
          />

          {/* Home Care Silhouette inside Map Pin */}
          <path
            d="M50 28L41 36H44V44H48V40H52V44H56V36H59L50 28Z"
            fill="#FFFFFF"
          />
          {/* Heart inside House */}
          <path
            d="M50 35C49 33.5 47 33.5 46.5 34.5C46 35.5 47 36.8 50 38.5C53 36.8 54 35.5 53.5 34.5C53 33.5 51 33.5 50 35Z"
            fill="#34D399"
          />

          {/* Landmark / Metro Hub Accent */}
          <circle cx="50" cy="67" r="3.5" fill="#047857" />
          <ellipse cx="50" cy="74" rx="14" ry="4" fill="#059669" fillOpacity="0.25" />
        </svg>
      ),
    },
  ];

  return (
    <section className="bg-white py-16 md:py-24 px-4 sm:px-6 lg:px-8 border-b border-gray-100/60 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Section Heading */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#C41E3A] tracking-tight">
            Our Journey
          </h2>
          <div className="w-16 h-1 bg-[#C41E3A]/20 mx-auto mt-4 rounded-full"></div>
        </div>

        {/* 4 Statistics Cards Grid */}
        {/* Desktop: 4 in a row | Tablet: 2 in a row | Mobile: 1 in a row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-7 lg:gap-8">
          {stats.map((item) => (
            <div
              key={item.id}
              className="group bg-white rounded-2xl border border-gray-100/90 shadow-[0_4px_20px_rgba(0,0,0,0.04)] hover:shadow-[0_16px_36px_rgba(0,0,0,0.08)] hover:-translate-y-1.5 transition-all duration-300 ease-out p-7 sm:p-8 flex flex-col items-center text-center relative overflow-hidden"
            >
              {/* Subtle top ambient glow */}
              <div
                className={`absolute top-0 inset-x-0 h-1.5 ${item.colorTheme.badgeBg} opacity-80 group-hover:opacity-100 transition-opacity`}
              />

              {/* Large Illustration / Icon Container */}
              <div
                className={`w-24 h-24 sm:w-28 sm:h-28 rounded-2xl ${item.colorTheme.badgeBg} border ${item.colorTheme.badgeBorder} flex items-center justify-center mb-6 shadow-sm group-hover:shadow-md transition-all duration-300 relative`}
              >
                {/* Glow ring */}
                <div
                  className={`absolute inset-0 rounded-2xl ${item.colorTheme.iconGlow} filter blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10`}
                />
                {item.illustration}
              </div>

              {/* Large, Bold Statistic / Value */}
              <h3 className="font-serif text-3xl sm:text-4xl lg:text-[2.6rem] font-bold text-[#1C4571] tracking-tight leading-none mb-3 group-hover:text-blue-900 transition-colors">
                {item.value}
              </h3>

              {/* Supporting Text */}
              <div className="text-gray-600 text-sm sm:text-base font-medium leading-snug">
                <p>{item.label}</p>
                {item.sublabel && (
                  <p className="text-gray-500 font-normal mt-0.5">{item.sublabel}</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurJourney;
