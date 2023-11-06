import { useEffect, useState } from "react";
import SearchIcon from "../../Svgs/SearchIcon";

const suggestProducts = [
  "Acer Nitro Phoenix ",
  "Acer Nitro 5  ",
  "Asus Vivobook Go",
  "Asus Rog Strix",
  "Laptop HP",
  "Laptop",
];

enum Status {
  search,
  result,
}
const Search = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [status, setStatus] = useState(Status.search);
  const [searchValue, setSearchValue] = useState("");

  const handleSearchFocus = () => {
    setStatus(Status.search);
    setIsModalVisible(true);
  };
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
    setStatus(Status.result);

    setIsModalVisible(true);
  };

  return (
    <div className="flex items-center  max-w-main  justify-center object-cover ">
      <div className="">
        <div className=" px-2 flex-1 mt-7">
          <div>
            <div className="flex rounded-md bg-lightGray border border-[#eaeaea]">
              <input
                className=" w-full px-3 py-1.5 bg-lightGray focus:outline-none relative"
                placeholder="Nhập từ khóa cần tìm"
                onFocus={handleSearchFocus}
                onChange={handleSearchChange}
              />
              <button className="w-9">
                <span className="text-26 text-gray">
                  <SearchIcon />
                </span>
              </button>
            </div>
          </div>
          {isModalVisible && status === Status.search && (
            <div
              onMouseLeave={() => {
                setIsModalVisible(false);
              }}
              onMouseEnter={() => {
                setIsModalVisible(true);
              }}
              className={
                " w-[25%] absolute bg-[rgb(255,255,255)] rounded-lg px-3 py-2 z-50 text-14 text-[#333333]  "
              }
            >
              <div className="flex text-[rgb(130,134,158)] justify-between">
                <p>LỊCH SỬ TÌM KIẾM</p>
                <p>Xóa lịch sử</p>
              </div>
              <div className="flex p-2">
                <img
                  className="w-5 h-5"
                  src="https://shopfront-cdn.tekoapis.com/static/b2c29b7046b45840.svg"
                  alt=""
                />
                <p>sadd</p>
              </div>
              <div className="text-[rgb(130,134,158)]">TỪ KHÓA PHỔ BIẾN</div>
              <div className="flex flex-wrap pt-1">
                <span className=" px-4 bg-slate-200 border border-[rgb(245,245,245)] rounded-2xl leading-8">
                  âfaasf
                </span>
              </div>
            </div>
          )}
          {isModalVisible && status === Status.result && searchValue && (
            <div
              onMouseLeave={() => setIsModalVisible(false)}
              className={
                "w-[25%] bg-[rgb(255,255,255)] rounded-lg absolute px-3 py-2 z-50 text-14 text-[#333333]}"
              }
            >
              <div className="flex text-[rgb(130,134,158)] items-center border-b my-2 border-[rgb(147,151,173)]">
                <SearchIcon />
                <div className="flex flex-col pl-2">
                  <p>ket qua</p>
                  <p>Trong </p>
                </div>
              </div>
            </div>
          )}
        </div>
        <div className="flex my-2 text-12 text-color03 gap-3 whitespace-nowrap ">
          {suggestProducts.map((item: string, index: number) => (
            <p key={index} className=" cursor-pointer">
              {item}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Search;
