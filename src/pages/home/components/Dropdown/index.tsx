import { useState } from "react";
import { Product } from "../../../../dataInput";

const DropDown = () => {
  const [hoveredTitle, setHoveredTitle] = useState("");
  return (
    <div className="w-52 text-12  font-medium ">
      {Product.map((item, index: number) => (
        <div
          key={index}
          className="flex px-2 h-8 items-center space-x-2 hover:bg-slate-300
                  "
          onMouseEnter={() => {
            setHoveredTitle(item.title);
          }}
          onMouseLeave={() => {
            setHoveredTitle("");
          }}
        >
          <img className="w-[22px] h-[22px] " src={item.icon} />
          <span>{item.title}</span>
        </div>
      ))}
      <div
        className="w-1000 absolute z-10 left-[198px] top-0 cursor-pointer"
        onMouseEnter={() => {
          setHoveredTitle(hoveredTitle);
        }}
        onMouseLeave={() => {
          setHoveredTitle("");
        }}
      >
        <div className=" rounded-r-2xl w-fit h-full">
          {hoveredTitle && (
            <div className="w-[1000px] bg-white absolute z-10 h-auto min-h-[456px] top-0">
              {Product.map((item, index: number) => {
                if (item.title === hoveredTitle) {
                  return (
                    <div className="w-full flex flex-wrap p-5  " key={index}>
                      {item.detail.map((group, groupIndex) => (
                        <div key={groupIndex} className="mr-12 ">
                          <div className="text-[rgb(20,53,195)] mb-2 text-[15px] font-bold leading-6 mr-12">
                            {group.group}
                          </div>
                          <div className="text-14 mb-7">
                            {group.child.map((child, childIndex) => (
                              <div
                                key={childIndex}
                                className="mb-1 text-[#4e4c4c]"
                              >
                                {child}
                              </div>
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
  );
};

export default DropDown;
