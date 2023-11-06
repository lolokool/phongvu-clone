import { Link } from "react-router-dom";
import Menu from "../../Svgs/Menu";
import { useEffect, useState } from "react";
import DropDown from "../../../pages/home/components/Dropdown";
import { createPortal } from "react-dom";

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
  const handleRemoveDropDown = () => {
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
          <Link to="/">
            <div className="w-[35px] h-[35px] mr-4 ml-2 ">
              <img
                src="https://shopfront-cdn.tekoapis.com/static/phongvu/logo.svg"
                alt=""
              />
            </div>
          </Link>
          <div
            className="flex justify-center items-center border border-[#e0e0e0] rounded px-3 py-2 hover:bg-[#f3f0f0]"
            onClick={handleShowDropDown}
          >
            <Menu />
            <p className="ml-2 text-[#82869E]">Danh mục sản phẩm</p>
          </div>
        </div>
      )}
      {showDropDown &&
        createPortal(
          <div className="bg-[#0000003d] fixed top-[100px] bottom-0 left-0 right-0 z-50">
            <div
              className="bg-white fixed top-[10%] left-[20%] rounded"
              onClick={handleRemoveDropDown}
            >
              <DropDown />
            </div>
          </div>,
          document.body
        )}
    </>
  );
};

export default Logo;
