import Card from "../../../../components/element/Card";
import Countdown from "react-countdown";
import { Renderer } from "../../../../components/element/Cowndown";
import { Swiper, SwiperSlide } from "swiper/react";

// import required modules
import { Navigation } from "swiper/modules";
import { TabData } from "../..";
import { useState } from "react";

interface TabProps {
  dataDeal: TabData;
}

const DealPR = ({ dataDeal }: TabProps) => {
  const [tab, setTab] = useState(0);
  const changeTab = (index: number) => {
    setTab(index);
  };

  const content = dataDeal.detail[tab];

  return (
    <>
      {dataDeal && dataDeal.detail && (
        <div>
          <div className="sticky top-[112px]">
            <div className="w-[1600px] mx-auto h-0 m-auto z-30">
              {dataDeal.img1 && dataDeal.img2 ? (
                <div className=" w-full flex justify-between ">
                  <img className="w-[150px] h-[350px]" src={dataDeal.img1} />
                  <img className="w-[150px] h-[350px]" src={dataDeal.img2} />
                </div>
              ) : null}
            </div>
          </div>
          <div
            className="w-[1200px] mx-auto relative mb-[60px] rounded-md"
            style={{
              backgroundImage: `url(${content.backgroundImage})`,
            }}
          >
            <div className="flex">
              {dataDeal.detail.map((a, i) => (
                <div
                  onClick={() => changeTab(i)}
                  className=" w-full bg-cover  "
                >
                  <div
                    className="flex flex-row pt-8 space-x-[32px] text-center rounded-tr-md"
                    style={{
                      backgroundColor: i === tab ? "transparent" : "white",
                      color: i === tab ? "#fff" : "#434657",
                      borderTopLeftRadius: i === tab ? "6px" : "none",
                      borderTopRightRadius: i === tab ? "6px" : "none",
                    }}
                  >
                    <div className=" flex w-full">
                      <div className="flex-1">
                        <h2 className="font-bold text-20">{a.title}</h2>
                        <p className="text-13">{a.description}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="w-full h-[60px] p-[20px] flex justify-end items-center">
              <span className="text-white text-[14px]">Xem tất cả</span>
              <svg
                fill="none"
                viewBox="0 0 24 24"
                color="white"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8.49976 19.0001L15.4998 12.0001L8.49976 5.00012"
                  stroke="currentColor"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
              </svg>
            </div>
            <div className="w-full flex space-x-10 px-2 pb-2">
              <div className="   bg-transparent flex flex-col justify-center items-center">
                <Countdown date={dataDeal.endDate} renderer={Renderer} />
              </div>
              <Swiper
                slidesPerView={5}
                spaceBetween={8}
                navigation={true}
                modules={[Navigation]}
                className="mySwiper"
                pagination={{ clickable: true }}
              >
                <div className="flex flex-cols-5">
                  <div>
                    {content.data.map((item, index) => (
                      <SwiperSlide key={index}>
                        <Card product={item} />
                      </SwiperSlide>
                    ))}
                  </div>
                </div>
              </Swiper>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default DealPR;
