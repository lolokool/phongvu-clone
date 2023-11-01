import { Link } from "react-router-dom";
import Menu from "../../Svgs/Menu";
import { useEffect, useState } from "react";
import DropDown from "../../../pages/home/components/Dropdown";

const Logo = () => {
  const [isAtTop, setIsAtTop] = useState(true);
  const [showDropDown, setShowDropDown] = useState(false);
  useEffect(() => {
    // Function to handle the scroll event
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setIsAtTop(true);
        setShowDropDown(false);
      } else {
        setIsAtTop(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleShowDropDown = () => {
    setShowDropDown(true);
  };
  const handleRemoDropDown = () => {
    setShowDropDown(false);
  };
  return (
    <>
      {isAtTop ? (
        <Link to={"/"}>
          <div className="px-2 relative">
            <img
              className="w-full h-35"
              src="https://shopfront-cdn.tekoapis.com/static/phongvu/logo-full.svg"
              loading="lazy"
              decoding="async"
              alt="phongvu"
            />
          </div>
        </Link>
      ) : (
        <div className="px-2 flex flex-row">
          <div className="w-[35px] h-[35px] mr-4 ml-2 ">
            <img
              src="https://shopfront-cdn.tekoapis.com/static/phongvu/logo.svg"
              alt=""
            />
          </div>
          <div
            className="flex justify-center items-center border border-[#e0e0e0] rounded px-3 py-2 hover:bg-[#f3f0f0]"
            onClick={handleShowDropDown}
          >
            <Menu />
            <p className="ml-2 text-[#82869E]">Danh mục sản phẩm</p>
          </div>
        </div>
      )}
      {showDropDown && (
        <div className="">
          <div
            className=" bg-white top-[120%] left-[20%] absolute z-50 "
            onMouseLeave={handleRemoDropDown}
          >
            <DropDown />
          </div>
        </div>
      )}
    </>
  );
};

export default Logo;
