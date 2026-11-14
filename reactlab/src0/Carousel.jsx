import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export function Carousel({ images }) {
  return (
    <div style={{ maxWidth: "500px", margin: "auto" }}>
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={16}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 1500, disableOnInteraction: true }}
        loop={true}
      >
        {images.map((src, index) => (
          <SwiperSlide key={`${src}-${index}`}>
            <img
              src={src}
              alt={`Slide ${index + 1}`}
              style={{
                width: "100%",
                height: "250px",
                objectFit: "cover",
                borderRadius: "8px",
                display: "block",
              }}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}