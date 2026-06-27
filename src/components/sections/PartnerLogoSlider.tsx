"use client";

import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const partners = ["Apex Group", "Eastern Bank", "Port City Corp", "Summit Pharma", "BluePeak Insurance", "Delta Holdings"];

export function PartnerLogoSlider() {
  return (
    <div className="rounded-2xl border border-slate-100 bg-white p-5 shadow-soft">
      <Swiper
        modules={[Autoplay]}
        autoplay={{ delay: 1600, disableOnInteraction: false }}
        loop
        slidesPerView={2}
        breakpoints={{ 640: { slidesPerView: 3 }, 1024: { slidesPerView: 5 } }}
      >
        {partners.map((partner) => (
          <SwiperSlide key={partner}>
            <div className="mx-2 flex h-20 items-center justify-center rounded-xl bg-surface-soft px-4 text-center font-heading text-sm font-bold text-navy-900">
              {partner}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
