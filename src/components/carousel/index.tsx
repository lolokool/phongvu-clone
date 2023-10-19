import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import { Navigation, Pagination } from "swiper/modules";
import { Product } from "../../dataInput";

const Carousel = () => {
  const [hoveredTitle, setHoveredTitle] = useState<string | null>(null);
  return (
    <div className="relative w-full h-full">
      <Swiper
        navigation={true}
        modules={[Navigation, Pagination]}
        className="mySwiper"
        pagination={{ clickable: true }}
      >
        <SwiperSlide>
          <img
            className="h-[566px] w-full object-cover"
            src="https://lh3.googleusercontent.com/NOqD77NarWayhALIi4GxFbVCQ4oAg3HCI-iNEXfMoIBFx80gdY_LVOdaRHVPUTz5mwJ5rJopWVJQrc-nxUjWeMoo0v9EfoG6=w1920-rw"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="h-[566px] w-full object-cover"
            src="https://lh3.googleusercontent.com/7fLNK64SX-6-xlW1aHfS0kbJOs8XxPpVPvDJIhL_3PS34Vo9VXTZTzaFRRtdoY38r2_XYbjonorwEmSUQgYkZXnSuVqSTvmB=w1920-rw"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="h-[566px] w-full object-cover"
            src="https://lh3.googleusercontent.com/NEyGqAS4HkBmVGWbdLxRCJ7v4n7Xz-Xcfs6ffoxCNZMHBg0txwJk7L0FVyBvjZ9mwdFsV915-uAWlcX_JPHD1yJSq2EYfeV6=w1920-rw"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="h-[566px] w-full object-cover"
            src="https://lh3.googleusercontent.com/NOqD77NarWayhALIi4GxFbVCQ4oAg3HCI-iNEXfMoIBFx80gdY_LVOdaRHVPUTz5mwJ5rJopWVJQrc-nxUjWeMoo0v9EfoG6=w1920-rw"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="h-[566px] w-full object-cover"
            src="https://lh3.googleusercontent.com/7fLNK64SX-6-xlW1aHfS0kbJOs8XxPpVPvDJIhL_3PS34Vo9VXTZTzaFRRtdoY38r2_XYbjonorwEmSUQgYkZXnSuVqSTvmB=w1920-rw"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="h-[566px] w-full object-cover"
            src="https://lh3.googleusercontent.com/NEyGqAS4HkBmVGWbdLxRCJ7v4n7Xz-Xcfs6ffoxCNZMHBg0txwJk7L0FVyBvjZ9mwdFsV915-uAWlcX_JPHD1yJSq2EYfeV6=w1920-rw"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="h-[566px] w-full object-cover"
            src="https://lh3.googleusercontent.com/NOqD77NarWayhALIi4GxFbVCQ4oAg3HCI-iNEXfMoIBFx80gdY_LVOdaRHVPUTz5mwJ5rJopWVJQrc-nxUjWeMoo0v9EfoG6=w1920-rw"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="h-[566px] w-full object-cover"
            src="https://lh3.googleusercontent.com/7fLNK64SX-6-xlW1aHfS0kbJOs8XxPpVPvDJIhL_3PS34Vo9VXTZTzaFRRtdoY38r2_XYbjonorwEmSUQgYkZXnSuVqSTvmB=w1920-rw"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="h-[566px] w-full object-cover"
            src="https://lh3.googleusercontent.com/NEyGqAS4HkBmVGWbdLxRCJ7v4n7Xz-Xcfs6ffoxCNZMHBg0txwJk7L0FVyBvjZ9mwdFsV915-uAWlcX_JPHD1yJSq2EYfeV6=w1920-rw"
          />
        </SwiperSlide>
      </Swiper>
      <div className="w-full h-full">
        <div className="w-1200 absolute top-0  mt-16  z-10 left-[50%] translate-x-[-50%]">
          <div className="h-1 w-full flex justify-between">
            <div className=" rounded  bg-white h-456">
              <div className="w-12.375 text-12 h-32 font-medium ">
                {Product.map((item, index: number) => (
                  <div
                    key={index}
                    className="flex px-8 h-32 items-center space-x-2
                  "
                  >
                    <img className="w-22 h-22 " src={item.icon} />
                    <span
                      onMouseEnter={() => setHoveredTitle(item.title)}
                      onMouseLeave={() => setHoveredTitle(null)}
                    >
                      {item.title}
                    </span>
                  </div>
                ))}
                <div className="w-1000  absolute z-10 left-[198px] top-0 ${hoveredTitle ? '' : 'hidden'}`}">
                  <div className=" rounded-r-2xl  flex flex-col flex-wrap w-fit  h-full">
                    {hoveredTitle && (
                      <div className="w-1000 bg-white absolute z-10 h-456  top-0">
                        {Product.map((item, index: number) => {
                          if (item.title === hoveredTitle) {
                            return (
                              <div className="w-fit p-[15px]" key={index}>
                                <div className="text-red-100">{item.title}</div>
                                {item.detail.map((group, groupIndex) => (
                                  <div key={groupIndex}>
                                    <div className="text-red-100">
                                      {group.group}
                                    </div>
                                    <div>
                                      {group.child.map((child, childIndex) => (
                                        <div key={childIndex}>{child}</div>
                                      ))}
                                    </div>
                                  </div>
                                ))}
                              </div>
                            );
                          }
                          return null;
                        })}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
            <div className="w-12.375 flex flex-col h-[1px]">
              <img
                className="w-200 h-220 rounded mb-12"
                src="https://lh3.googleusercontent.com/7iRH6htrpI2HzoU92xxGWl68lVuKSO9XU9qBxcuuzpgIB3vgWz5WjOffN7WnWZ2VrWjQYRNwUu2LIGqIGmC-hhP32NjDr9Wx=w300-rw"
                alt=""
              />
              <img
                className="w-200 h-220 rounded"
                src="https://lh3.googleusercontent.com/cPEu8E3KSvDqFyPgZlISP7W_KYCf4ZoMiQazpVyxC_rx_r4Ee62B-Iu9xVA13czlalt5J1u9vg6cxO7lnZt5vaY9jZlTOII=w300-rw"
                alt=""
              />
            </div>
          </div>
          <div className="flex  w-full mt-90 absolute bottom-[-610px]">
            <img
              className="mr-8 rounded-2xl w-288 h-137"
              src="https://lh3.googleusercontent.com/q6lovS2WzW4BMMGaBywk4Hdbmv9L_Yh84PWNkRyczxqgtFgALpiCb44s1VfdeaHXrixHWjr8XtX5Wgl0HfePwZvmHN1EObA=w308-rw"
              alt=""
            />

            <img
              className="mx-8 rounded-2xl w-288 h-137 "
              src="https://lh3.googleusercontent.com/q6lovS2WzW4BMMGaBywk4Hdbmv9L_Yh84PWNkRyczxqgtFgALpiCb44s1VfdeaHXrixHWjr8XtX5Wgl0HfePwZvmHN1EObA=w308-rw"
              alt=""
            />

            <img
              className="mx-8 rounded-2xl w-288 h-137 "
              src="https://lh3.googleusercontent.com/q6lovS2WzW4BMMGaBywk4Hdbmv9L_Yh84PWNkRyczxqgtFgALpiCb44s1VfdeaHXrixHWjr8XtX5Wgl0HfePwZvmHN1EObA=w308-rw"
              alt=""
            />

            <img
              className="ml-8 rounded-2xl w-288 h-137 "
              src="https://lh3.googleusercontent.com/qXkOnaasWJ9E9TT2M3mHrVQK-gXoDFUzXV1Dho-Ya7XFlWMTkil3-gcdxtndiEBAhDC_gb1rbx-V-FR3Okrj7HHU4YXZJnYy=w308-rw"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
