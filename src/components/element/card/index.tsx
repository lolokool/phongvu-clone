import { Link } from "react-router-dom";
import { dataApi } from "../../../pages/home";

interface TabProps {
  product: dataApi;
}

const Card = ({ product }: TabProps) => {
  const formatCurrency = (amount: any) => {
    // Sử dụng Number.toLocaleString() để định dạng số tiền với dấu phẩy ngăn cách phần ngàn
    return amount.toLocaleString("vi-VN", {
      style: "currency",
      currency: "VND",
    });
  };

  const formatPercentage = (percent: any) => {
    // Thêm dấu phần trăm (%) vào số
    return `${percent}%`;
  };
  return (
    <div className="bg-white w-full h-full">
      <div className="px-[16px]  pt-[16px] relative w-auto h-full">
        <div className="">
          <Link to={`/${product.canonical}`}>
            <div className="relative">
              <img
                className="w-auto h-auto object-cover hover:scale-105"
                src={product.image}
              />
              <div className=" px-[8px] py-[4px] h-[36px] rounded absolute bottom-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iOTYiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA5NiA0MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8cmVjdCB3aWR0aD0iOTYiIGhlaWdodD0iNDAiIHJ4PSI0IiBmaWxsPSJ1cmwoI3BhaW50MF9saW5lYXIpIiAvPgogIDxtYXNrIGlkPSJtYXNrMCIgbWFzay10eXBlPSJhbHBoYSIgbWFza1VuaXRzPSJ1c2VyU3BhY2VPblVzZSIgeD0iMCIgeT0iMCIgd2lkdGg9Ijk2IiBoZWlnaHQ9IjQwIj4KICAgIDxyZWN0IHdpZHRoPSI5NiIgaGVpZ2h0PSI0MCIgcng9IjQiIGZpbGw9IndoaXRlIiAvPgogIDwvbWFzaz4KICA8ZyBtYXNrPSJ1cmwoI21hc2swKSI+CiAgICA8cGF0aCBvcGFjaXR5PSIwLjMiCiAgICAgIGQ9Ik03NC4yNDQ2IC05LjAyODY5TDY1Ljg3NjcgOC45MTYyMUw3MC43NzA4IDExLjE5ODNMNjMuOTI0NCAyNS44ODA1TDg0LjQ3MjQgMTEuNjI5M0w3Ny45NDcgOC41ODY0Mkw5MC41NTgxIC0xLjQyMTU2TDc0LjI0NDYgLTkuMDI4NjlaIgogICAgICBmaWxsPSIjMUIxRDI5IiAvPgogIDwvZz4KICA8ZGVmcz4KICAgIDxsaW5lYXJHcmFkaWVudCBpZD0icGFpbnQwX2xpbmVhciIgeDE9IjM1LjcyMDkiIHkxPSIxLjY2NTQ0ZS0wNiIgeDI9IjU3Ljg4ODYiIHkyPSI0MC4wODczIgogICAgICBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+CiAgICAgIDxzdG9wIHN0b3AtY29sb3I9IiNBQTIwRkYiIC8+CiAgICAgIDxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iIzQxM0VGRiIgLz4KICAgIDwvbGluZWFyR3JhZGllbnQ+CiAgPC9kZWZzPgo8L3N2Zz4=')]">
                <div className="text-[10px] text-[rgb(255,213,145)]">
                  TIẾT KIỆM
                </div>
                <div className="text-[13px] text-white">
                  {formatCurrency(Number(product.discountAmount))}
                </div>
              </div>
            </div>
          </Link>
          <div className="text-[13px] text-[#82869E] mb-[4px]">
            {product.brand}
          </div>
          <div className="text-[12px] text-[#434657] line-clamp-2">
            {product.name}
          </div>
          <div className="text-[15px] text-[#1435C3] font-bold">
            {formatCurrency(Number(product.latestPrice))}
          </div>
          <span className="text-[12px] text-[#82869E] line-through">
            {formatCurrency(Number(product.sellPrice))}
          </span>
          <span className="text-[12px] text-[#1435C3]">
            {" "}
            - {formatPercentage(product.discountPercent)}
          </span>
          <div className="w-[22px] h-[22px] flex flex-row space-x-2">
            <img src={product.gifts} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
