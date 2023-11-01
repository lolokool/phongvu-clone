// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { Navigation, Pagination } from "swiper/modules";
import DropDown from "../Dropdown";

const Carousel = () => {
  const image = [
    "https://lh3.googleusercontent.com/NOqD77NarWayhALIi4GxFbVCQ4oAg3HCI-iNEXfMoIBFx80gdY_LVOdaRHVPUTz5mwJ5rJopWVJQrc-nxUjWeMoo0v9EfoG6=w1920-rw",
    "https://lh3.googleusercontent.com/7fLNK64SX-6-xlW1aHfS0kbJOs8XxPpVPvDJIhL_3PS34Vo9VXTZTzaFRRtdoY38r2_XYbjonorwEmSUQgYkZXnSuVqSTvmB=w1920-rw",
    "https://lh3.googleusercontent.com/NEyGqAS4HkBmVGWbdLxRCJ7v4n7Xz-Xcfs6ffoxCNZMHBg0txwJk7L0FVyBvjZ9mwdFsV915-uAWlcX_JPHD1yJSq2EYfeV6=w1920-rw",
    "https://lh3.googleusercontent.com/NOqD77NarWayhALIi4GxFbVCQ4oAg3HCI-iNEXfMoIBFx80gdY_LVOdaRHVPUTz5mwJ5rJopWVJQrc-nxUjWeMoo0v9EfoG6=w1920-rw",
    "https://lh3.googleusercontent.com/7fLNK64SX-6-xlW1aHfS0kbJOs8XxPpVPvDJIhL_3PS34Vo9VXTZTzaFRRtdoY38r2_XYbjonorwEmSUQgYkZXnSuVqSTvmB=w1920-rw",
    "https://lh3.googleusercontent.com/NEyGqAS4HkBmVGWbdLxRCJ7v4n7Xz-Xcfs6ffoxCNZMHBg0txwJk7L0FVyBvjZ9mwdFsV915-uAWlcX_JPHD1yJSq2EYfeV6=w1920-rw",
    "https://lh3.googleusercontent.com/NOqD77NarWayhALIi4GxFbVCQ4oAg3HCI-iNEXfMoIBFx80gdY_LVOdaRHVPUTz5mwJ5rJopWVJQrc-nxUjWeMoo0v9EfoG6=w1920-rw",
    "https://lh3.googleusercontent.com/7fLNK64SX-6-xlW1aHfS0kbJOs8XxPpVPvDJIhL_3PS34Vo9VXTZTzaFRRtdoY38r2_XYbjonorwEmSUQgYkZXnSuVqSTvmB=w1920-rw",
    "https://lh3.googleusercontent.com/NEyGqAS4HkBmVGWbdLxRCJ7v4n7Xz-Xcfs6ffoxCNZMHBg0txwJk7L0FVyBvjZ9mwdFsV915-uAWlcX_JPHD1yJSq2EYfeV6=w1920-rw",
  ];

  return (
    <div className="relative w-full h-full">
      <Swiper
        navigation={true}
        modules={[Navigation, Pagination]}
        className="mySwiper"
        pagination={{ clickable: true }}
      >
        {image.map((a, i) => (
          <SwiperSlide key={i}>
            <img className="h-[566px] w-full object-cover" src={a} />
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="h-[124px]"></div>
      <div className="w-full h-full">
        <div className="w-1200 absolute top-0  mt-4  z-10 left-[50%] translate-x-[-50%]">
          <div className="h-1 w-full flex justify-between">
            <div className=" rounded  bg-white h-[456px] cursor-pointer">
              <DropDown />
            </div>
            <div className="w-52 flex flex-col h-[1px]">
              <img
                className="w-[200px] h-[220px] rounded mb-3"
                src="https://lh3.googleusercontent.com/7iRH6htrpI2HzoU92xxGWl68lVuKSO9XU9qBxcuuzpgIB3vgWz5WjOffN7WnWZ2VrWjQYRNwUu2LIGqIGmC-hhP32NjDr9Wx=w300-rw"
                alt=""
              />
              <img
                className="w-[200px] h-[220px] rounded"
                src="https://lh3.googleusercontent.com/cPEu8E3KSvDqFyPgZlISP7W_KYCf4ZoMiQazpVyxC_rx_r4Ee62B-Iu9xVA13czlalt5J1u9vg6cxO7lnZt5vaY9jZlTOII=w300-rw"
                alt=""
              />
            </div>
          </div>
          <div className="flex  w-full mt-90 absolute bottom-[-610px]">
            <img
              className="mr-2 rounded-2xl w-[288px] h-[137px]"
              src="https://lh3.googleusercontent.com/q6lovS2WzW4BMMGaBywk4Hdbmv9L_Yh84PWNkRyczxqgtFgALpiCb44s1VfdeaHXrixHWjr8XtX5Wgl0HfePwZvmHN1EObA=w308-rw"
              alt=""
            />

            <img
              className="mx-2 rounded-2xl w-[288px] h-[137px] "
              src="https://lh3.googleusercontent.com/q6lovS2WzW4BMMGaBywk4Hdbmv9L_Yh84PWNkRyczxqgtFgALpiCb44s1VfdeaHXrixHWjr8XtX5Wgl0HfePwZvmHN1EObA=w308-rw"
              alt=""
            />

            <img
              className="mx-2 rounded-2xl w-[288px] h-[137px] "
              src="https://lh3.googleusercontent.com/q6lovS2WzW4BMMGaBywk4Hdbmv9L_Yh84PWNkRyczxqgtFgALpiCb44s1VfdeaHXrixHWjr8XtX5Wgl0HfePwZvmHN1EObA=w308-rw"
              alt=""
            />

            <img
              className="ml-2 rounded-2xl w-[288px] h-[137px] "
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
