import { dataApi } from "../../../pages/home";
import Card from "../Card";
import { SwiperSlide } from "swiper/react"; // Import SwiperSlide here

interface Props {
  listPr: {
    title: string;
    data: dataApi[];
  };
}

const ListProduct = ({ listPr }: Props) => {
  return (
    <>
      <div className="w-1200 m-auto  mb-10 bg-white rounded-md">
        <div className="flex w-full h-[56px] justify-between items-center  px-[16px] border-b-[2px] border-[aliceblue]">
          <p className="font-bold flex-1 text-[20px] px-8">{listPr.title}</p>
          <p className="text-sm"> Xem tất cả</p>
          <span>
            <svg
              className="text-[14px] text-center text-[black]"
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
                strokeWidth={1.5}
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
            </svg>
          </span>
        </div>
        <div className="grid grid-cols-5 grid-flow-row gap-1">
          {listPr.data.map((item, index) => (
            <SwiperSlide key={index}>
              <Card product={item} />
            </SwiperSlide>
          ))}
        </div>
      </div>
    </>
  );
};

export default ListProduct;
