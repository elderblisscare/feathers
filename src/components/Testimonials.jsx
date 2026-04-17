import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

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

export default function Testimonials() {
  return (
    <div className="max-w-5xl mx-auto py-12 px-4 text-center">
      <h3 className="text-xl font-semibold text-blue-400 mb-4">Our Testimonials</h3>
      <h2 className="text-3xl font-bold text-[#1C4571] mb-8">
        What Our Clients Say About Us
      </h2>

      <Swiper
        modules={[Autoplay, Pagination]}
        spaceBetween={20}
        slidesPerView={1}
        loop={true} // 🔥 MOST IMPORTANT
        loopFillGroupWithBlank={true}
        loopAdditionalSlides={testimonials.length}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false, // user click ke baad bhi chale
          pauseOnMouseEnter: true // hover pe stop (optional)
        }}
        speed={800} // smooth transition
        pagination={{ clickable: true }}
        breakpoints={{
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
      >
        {testimonials.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="bg-white shadow-lg border-2 border-blue-400 rounded-xl mb-8 p-6 h-[500px]">
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
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}