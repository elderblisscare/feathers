import { useState, useEffect } from "react";

const testimonials = [
  {
    name: "Rohit Sharma, Noida",
    text: "ElderBliss provided excellent care for my father. Highly recommended!",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    name: "Priya Verma, Noida",
    text: "Very professional staff and great support. Thank you so much!",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    name: "Amit Kumar, Faridabad",
    text: "Amazing service. They truly care about patients.",
    image: "https://randomuser.me/api/portraits/men/76.jpg",
  },
];

const Testimonials = () => {
  const [current, setCurrent] = useState(0);

  // Auto slide
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const prevSlide = () => {
    setCurrent(current === 0 ? testimonials.length - 1 : current - 1);
  };

  const nextSlide = () => {
    setCurrent((current + 1) % testimonials.length);
  };

  return (
    <div className="w-full max-w-4xl mx-auto py-12 text-center">
      <h2 className="text-3xl font-bold text-[#1C4571] mb-8">
        What Our Clients Say
      </h2>

      <div className="relative overflow-hidden">
        {/* Slides */}
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${current * 100}%)` }}
        >
          {testimonials.map((item, index) => (
            <div key={index} className="w-full flex-shrink-0 px-4">
              <div className="bg-white shadow-lg rounded-xl p-6">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-16 h-16 rounded-full mx-auto mb-4"
                />
                <p className="text-gray-600 mb-3">"{item.text}"</p>
                <h4 className="font-semibold text-[#1C4571]">
                  {item.name}
                </h4>
              </div>
            </div>
          ))}
        </div>

        {/* Buttons */}
        <button
          onClick={prevSlide}
          className="absolute top-1/2 left-2 -translate-y-1/2 bg-white shadow p-2 rounded-full"
        >
          ◀
        </button>

        <button
          onClick={nextSlide}
          className="absolute top-1/2 right-2 -translate-y-1/2 bg-white shadow p-2 rounded-full"
        >
          ▶
        </button>
      </div>

      {/* Dots */}
      <div className="flex justify-center mt-6 space-x-2">
        {testimonials.map((_, index) => (
          <div
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-3 h-3 rounded-full cursor-pointer ${
              current === index ? "bg-[#1C4571]" : "bg-gray-300"
            }`}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;