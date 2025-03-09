import React, { useState } from "react";

const testimonials = [
  {
    text: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip...",
    stars: "★★★★★",
    name: "Chris",
    role: "President and CEO, PrintReach, USA",
    image: "https://randomuser.me/api/portraits/women/1.jpg",
  },
  {
    text: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip...",
    stars: "★★★★★",
    name: "Chris",
    role: "President and CEO, PrintReach, USA",
    image: "https://randomuser.me/api/portraits/women/2.jpg",
  },
  {
    text: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip...",
    stars: "★★★★☆",
    name: "Chris",
    role: "President and CEO, PrintReach, USA",
    image: "https://randomuser.me/api/portraits/women/3.jpg",
  },
];

const TestimonialCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="carousel-container">
      <h2 className="title">What people say about us</h2>

      <div className="carousel">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="testimonial"
            style={{
              transform: `translateX(-${currentIndex * 100}%)`,
            }}
          >
            <span className="quote">“</span>
            <p>{testimonial.text}</p>
            <div className="stars">{testimonial.stars}</div>
            <div className="profile">
              <img src={testimonial.image} alt={testimonial.name} />
              <div>
                <strong>{testimonial.name}</strong>
                <br />
                <small>{testimonial.role}</small>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="nav-buttons">
        <button onClick={prevSlide}>‹</button>
        <button onClick={nextSlide}>›</button>
      </div>

      <div className="dots">
        {testimonials.map((_, index) => (
          <div
            key={index}
            className={`dot ${index === currentIndex ? "active" : ""}`}
            onClick={() => setCurrentIndex(index)}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default TestimonialCarousel;
