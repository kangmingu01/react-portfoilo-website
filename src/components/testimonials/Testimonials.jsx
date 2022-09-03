import React from "react";
import "./testimonials.css";
import AVTR1 from "../../assets/avatar1.jpg";
import AVTR2 from "../../assets/avatar2.jpg";
import AVTR3 from "../../assets/avatar3.jpg";
import AVTR4 from "../../assets/avatar4.jpg";

// import Swiper core and required modules
import { Pagination } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const data = [
  {
    avater: AVTR1,
    name: "Tina Snow",
    review:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Totam sed hic nobis dolorem praesentium, nisi provident aliquid quibusdam assumenda maiores voluptatum quod ipsam voluptate error nihil placeat, quam iste maxime!",
  },
  {
    avater: AVTR2,
    name: "Tina Snow",
    review:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Totam sed hic nobis dolorem praesentium, nisi provident aliquid quibusdam assumenda maiores voluptatum quod ipsam voluptate error nihil placeat, quam iste maxime!",
  },
  {
    avater: AVTR3,
    name: "Tina Snow",
    review:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Totam sed hic nobis dolorem praesentium, nisi provident aliquid quibusdam assumenda maiores voluptatum quod ipsam voluptate error nihil placeat, quam iste maxime!",
  },
  {
    avater: AVTR4,
    name: "Tina Snow",
    review:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Totam sed hic nobis dolorem praesentium, nisi provident aliquid quibusdam assumenda maiores voluptatum quod ipsam voluptate error nihil placeat, quam iste maxime!",
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials">
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>
      <Swiper
        className="container testimonials__container"
        // install Swiper modules
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {data.map(({ avater, name, review }, index) => {
          return (
            <SwiperSlide key={index} className="testimonial">
              <div className="client__avatar">
                <img src={avater} alt="Avatar One" />
              </div>
              <h5 className="client__name">{name}</h5>
              <small className="client__review">{review}</small>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Testimonials;
