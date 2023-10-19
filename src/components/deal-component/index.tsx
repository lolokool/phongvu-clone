import Card from "../element/card";
import Countdown from "react-countdown";

interface DealTab {
  title: string;
  desc: string;
  bgImage: string;
  countdown: string;
  products: [];
  saleUrl: string;
}
const Completionist = () => <span>You are good to go!</span>;
const renderer = ({
  days,
  hours,
  minutes,
  seconds,
  completed,
}: {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  completed: boolean;
}) => {
  if (completed) {
    // Render a completed state
    return <Completionist />;
  } else {
    // Render a countdown
    return (
      <div>
        <div className="text-[16px] mb-[16px]">Kết thúc sau {days} ngày</div>
        <div className="flex w-[200px] h-[45px]">
          <div>{hours}</div>
          <div>{minutes}</div>
          <div>{seconds}</div>
        </div>
      </div>
    );
  }
};
const DealPR = () => {
  return (
    <>
      <div className="w-full h-0 m-auto relative">
        <div className="h-0 w-full top-0  flex justify-between sticky mt-[124px]">
          <img
            className="w-[150px] h-[350px]"
            src="https://lh3.googleusercontent.com/0nOzNhfNFGmo0AXD3I3mdPtj5kU3DXi-k0JaksU4AweFfQW1LhAqVuKP7MPQvD-Nju2A4t6ZmJr4wfxX9GamWIqu3Fop465XeA"
            alt=""
          />
          <img
            className="w-[150px] h-[350px]"
            src="https://lh3.googleusercontent.com/ezi5oistLUPzIpJCHqF6Ggyd6ofw2P2jZX31-xMnpIOB3iHiaBJfKciRivcxBfLD6E47U9H8aQeP8TG_MReJPZmYdHGVq7grLg"
            alt=""
          />
        </div>
      </div>
      <div className="w-[1200px] h-[500px] m-auto relative">
        <div className=" h-full w-full bg-cover mt-[-24px]  bg-[url('https://lh3.googleusercontent.com/7v3REFEvhC1Aj4LfQZWL52-r94atCT70g9HkbRpQQu7cDcNIzdFsHzqCQttWV-5W2DcyYeKHYTKzL44uydyAhDFLEzga7YWXkQ=rw-w3840')]">
          <div className="h-[52px] flex flex-row bg-white  pt-8 space-x-[32px] text-center ">
            <div className="flex-1">
              <h2 className="font-bold"> Màn Hình Giá Sốc </h2>
              <p>Deal Bật Nốc</p>
            </div>
            <div className="flex-1">
              <h2 className="font-bold"> Chọn Quà Đúng Gu Săn</h2>
              <p>Deal Nửa Giá</p>
            </div>
            <div className="flex-1">
              <h2 className="font-bold"> Phụ Kiện Điện Thoại</h2>
              <p>Sạc Nhanh Tiện Lợi</p>
            </div>
            <div className="flex-1">
              <h2 className="font-bold">Nâng Cấp Văn Phòng</h2>
              <p>Quà Tặng Chính Hãng</p>
            </div>
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
          <div className="w-full flex">
            <div className=" bg-white">
              <Countdown date={"2024-02-01"} renderer={renderer} />
            </div>
            <Card
              product={{
                name: "DELL",
              }}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default DealPR;
