import { useState, useEffect } from "react";

const testimonials = [
  {
    name: "Nitish Arun",
    text: "Feathers truly came through when my father needed medical attention early in the morning. They quickly arranged a doctor visit and diagnostics at home, making the whole process smooth and stress-free. Their prompt and caring service made all the difference.",
    location: "Munirka, Delhi",
    service_taken: "Emergency Doctor Visit",
    image: "/Testimonials_Img/Nitish_Arun_test.jpeg",
  },
  {
    name: "Saurabh Das Gupta",
    text: "Feathers has been a great support for my father, who has mild memory issues. The attendant they provided is exceptionally patient, attentive, and handles him with genuine care and respect. It’s a huge comfort knowing someone trustworthy is there for him when we can’t be, allowing us to focus on our daily lives without added worry.",
    location: "CR Park, South Delhi",
    service_taken: "Caregiver Services (Attendant)",
    image: "/Testimonials_Img/Saurabh_Das_Test.jpg",
  },
  {
    name: "Antionette Martin",
    text: "When my mother needed a doctor late at night, Feathers came through without delay. The doctor arrived quickly, was calm and reassuring, and took great care of her. I truly appreciate their dependable service during such a tense moment.",
    location: "Jungpura, South Delhi",
    service_taken: "Doctor Visit",
    image: "/Testimonials_Img/Antionette_Test.jpg",
  },
  {
    name: "Raminder Kaur",
    text: "The physiotherapy sessions from Feathers have really helped me regain my strength and mobility. The therapist is gentle, patient, and always encourages me to keep going. I feel more confident and active than I have in a long time.",
    location: "Gurgaon",
    service_taken: "Physiotherapy at home",
    image: "/Testimonials_Img/Raminder_Test.jpg",
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
                <h5 className=" text-[#1C4571]">
                  {item.location}
                </h5>
                <h5 className=" text-[#1C4571]">
                  {item.service_taken}
                </h5>
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
            className={`w-3 h-3 rounded-full cursor-pointer ${current === index ? "bg-[#1C4571]" : "bg-gray-300"
              }`}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;