"use client";
import sunglassImg from "@/assets/banner-1.jpg";
import sunglassSellImg from "@/assets/banner-2.jpg";
import sunglassAvatarImg from "@/assets/banner-3.jpg";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Banner = () => {
  return (
    <div className="container mx-auto mt-5 px-2">
      <Swiper
        pagination={{
          dynamicBullets: true,
        }}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        loop={true}
        modules={[Pagination, Autoplay]}
      >
        <SwiperSlide>
          <Image
            src={sunglassImg}
            alt={"summer"}
            width={1920}
            height={600}
            className="w-full h-70 md:h-96 lg:h-112 rounded-lg object-cover"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src={sunglassAvatarImg}
            alt={"summer"}
            width={1920}
            height={600}
            className="w-full h-70 md:h-96 lg:h-112 rounded-lg object-cover "
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src={sunglassSellImg}
            alt={"summer"}
            width={1920}
            height={600}
            className="w-full h-70 md:h-96 lg:h-112 rounded-lg object-cover"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Banner;
