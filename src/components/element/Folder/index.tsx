import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import Card from "../Card";
import { dataApi } from "../../../pages/home";

interface Props {
  folder: {
    title: string;
    data: dataApi[];
    bgImage: string;
  };
}
const Folder = ({ folder }: Props) => {
  return (
    <>
      <div className="w-1200 mx-auto px-4 mb-6">
        <div
          style={{
            backgroundImage: `url(${folder.bgImage})`,
          }}
        >
          <div className="flex justify-between border-t border-[rgb(255,255,255,0.5)] px-4 h-14">
            <p className="text-[#FFFFFF] font-bold flex justify-center items-center text-20">
              {folder.title}
            </p>
            <div className="flex flex-row justify-center items-center">
              <span className="text-[#FFFFFF] text-14">Xem tất cả</span>
              <span>
                <svg
                  fill="none"
                  viewBox="0 0 24 24"
                  className="css-ymxljd"
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
              </span>
            </div>
          </div>
          <div className="p-3 ">
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
                  {folder.data.map((a) => (
                    <SwiperSlide>
                      <Card product={a} />
                    </SwiperSlide>
                  ))}
                </div>
              </div>
            </Swiper>
          </div>
        </div>
      </div>
    </>
  );
};

export default Folder;
