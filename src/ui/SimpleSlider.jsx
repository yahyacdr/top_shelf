import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

export default function SimpleSwiper() {
  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={2}
      loop={true}
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide>Slide 1</SwiperSlide>
      <SwiperSlide>Slide 2</SwiperSlide>
      <SwiperSlide>Slide 3</SwiperSlide>
      <SwiperSlide>Slide 4</SwiperSlide>
    </Swiper>
  );
}
