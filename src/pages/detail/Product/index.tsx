import { useState, useEffect } from "react";
import { formatCurrency, formatPercentage } from "../../../utils/format-money";
import { useParams } from "react-router-dom";
import { dataApi } from "../../home";
import { useShoppingContext } from "../../../Context/demo";

const images = [
  "https://lh3.googleusercontent.com/PjhHXXreUCNNLITAJ3gfR2heYwi7JRjbjIwC4Rh-zDi8cUqQT0CoVQVQ0WzoOuKG487h__xpEZQ_zQDXfWvRWWrKDYFSmc0wZA=rw",
  "https://lh3.googleusercontent.com/dM3ZhRx_6i1cJKWkifzBO-HzLmR5ufQlk_QwG3imN8vzfImaY2hsEBLNcRVp6kliKL43Hw0MP-Zu1vR6O8uVc3xfv77nA18=rw",
  "https://lh3.googleusercontent.com/uw5u3pf1-LeSl_Vkln0oDKIMeNTt5LF4_jgSjcc03VYtqiTt7Olbbi7RIzAa2oECnt2-X-9kXG5cI9tEsCEOehewhSQJbLXp=rw",
  "https://lh3.googleusercontent.com/-qVXHLY--RVtdp_02Ffpf8i9DSsYpB21dfujF6Xi60e6oMZUScS9ws-Bkxmo0GgptHnkkjoNvRJadP4t0o8-vkc4PcLe3bc=rw",
  "https://lh3.googleusercontent.com/sNOeg9vzswbZ1V-scJyqvAOMrCaHhP6gIMkOXS66gvwAjQTRYM9RQTfBQkwiigCHqIv3uwTQzY4FxwWBpc59vWyrMs41Od4=rw",
];

const Product = () => {
  const { canonical } = useParams();
  const { detailData, addCartItem } = useShoppingContext();
  const [detailPr, setDetailPr] = useState<dataApi | null>(null);

  useEffect(() => {
    const matchedPr = detailData.find(
      (product: dataApi) => product.canonical === canonical
    );
    if (matchedPr) {
      setDetailPr(matchedPr);
    }
  }, [canonical]);
  console.log("as", detailPr);
  const [targetImage, setTargetImage] = useState(images[0]);
  return (
    <div className="flex-1 bg-white max-w-75.6">
      <div className="flex p-6 ">
        {/* leftside - child */}
        <div className="flex-1 pr-4 max-w-40.5">
          <img src={targetImage} alt="" />
          {targetImage && (
            <div className="flex">
              {images.map((image) => (
                <img
                  className="w-[50px] h-[50px] border-transparent"
                  onMouseEnter={() => {
                    setTargetImage(image);
                  }}
                  src={image}
                  alt="item"
                />
              ))}
            </div>
          )}
          <div className="w-full py-3 my-3">
            <div className="border border-dashed border-[#e7e8f1]"></div>
          </div>
          <div className="leading-5  p-4">
            - CPU: Intel Core i3-1115G4
            <br />
            - Màn hình: 15.6" IPS (1920 x 1080)
            <br />
            - RAM: 1 x 8GB DDR4 3200MHz
            <br />
            - Đồ họa: Onboard Intel UHD Graphics
            <br />
            - Lưu trữ: 256GB SSD M.2 NVMe /<br />
            - Hệ điều hành: Windows 11 Home SL
            <br />
            - Pin: 3 cell 41 Wh Pin liền
            <br />
            - Khối lượng: 1.7kg
            <br />- Chuẩn Non-EVO
          </div>
          <p className="text-[#5590ff]">Xem thông tin chi tiết</p>
        </div>

        {/* rightside- child */}
        {detailPr ? (
          <div className="flex-1 ">
            <div>
              <h1 className="text-24 font-medium mb-8">{detailPr.name}</h1>
              <div className="leading-4 p-0 m-0">
                Thuơng hiệu :<span> {detailPr.brand}</span>
                <span> SKU:</span>
                <span> {detailPr.skuId}</span>
                <span> Mã vạch:</span>
                <span> 010150</span>
              </div>
            </div>
            <div className="mb-3">
              <div className="text-20 text-[#1435c3]">
                {formatCurrency(Number(`${detailPr.latestPrice}`))}
              </div>
              <div>
                <span className="line-through text-[rgb(130,134,158)] mr-1">
                  {formatCurrency(Number(`${detailPr.sellPrice}`))}
                </span>
                <span className="text-[#1435c3]">
                  - {formatPercentage(`${detailPr.discountPercent}`)}
                </span>
              </div>
            </div>
            <div className="border border-dashed border-[#e7e8f1]"></div>

            <div className="mt-4">
              <h4 className="mb-1">KHUYẾN MÃI ĐÃ NHẬN</h4>
              <div className="flex flex-col gap-2">
                <div className="flex m-y-1 ">
                  <div className="px-1">
                    <img
                      className="w-[25px] h-[25px]"
                      src="https://shopfront-cdn.tekoapis.com/cart/gift-filled.png"
                      alt=""
                    />
                  </div>
                  <div>
                    <p className="ml-4">
                      1x Mã giảm thêm 600.000đ cho màn hình LG Gram View
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-4 border rounded bg-[#f6f6f6] p-4 border-[rgb(228,229,240)]">
              <p className="mb-1">CHỌN 1 TRONG NHỮNG KHUYẾN MÃI SAU</p>
              <div className="bg-[#f3f5fc] border border-blue rounded flex mt-[10px] p-3">
                <div className="bg-[rgb(232,235,249)] min-w-[64px] w-[64px] h-[64px] mr-12 flex justify-center items-center">
                  <img
                    className="w-25 h-25"
                    src="https://shopfront-cdn.tekoapis.com/cart/gift-filled.png"
                    alt=""
                  />
                </div>
                <div>
                  <div>
                    <p className="text-[rgb(27,29,41)] text-13">
                      Giảm {formatCurrency(Number(2200000))} (áp dụng vào giá
                      sản phẩm)
                    </p>
                    <p className="mt-1 text-[rgb(132,135,136)]">
                      Khuyến mãi áp dụng khi mua tối thiểu 1 sản phẩm
                    </p>
                  </div>
                  <div className="flex justify-between">
                    <div className="text-[rgb(132,135,136)]">
                      HSD: 10/11/2023
                    </div>
                    <div>
                      <div className="text-[#3b98ff]">Áp dụng</div>
                      <div className="text-[#3b98ff] hidden">Bỏ chọn</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex mt-4 gap-2 w-full h-[46px]">
              <button className="bg-blue border rounded text-white flex-1">
                MUA NGAY
              </button>
              <button
                className="text-blue border rounded border-blue flex-1"
                onClick={() => addCartItem(detailPr)}
              >
                THÊM VÀO GIỎ HÀNG
              </button>
            </div>
            <div className="my-3 py-3">
              <div className="border border-dashed border-[#e7e8f1]"></div>
            </div>
            <div>
              <p className="mb-2 font-medium">Khuyến mãi liên quan</p>
              <ul className="pl-8 mb-4">
                <li className="mb-[7px]">
                  Giảm thêm đến 300.000đ dành cho Học sinh - sinh viên Xem chi
                  tiết
                </li>
                <li className="mb-[7px]">
                  <p>Nhập mã QRPV9 khi thanh toán qua VNPAY-QR:</p>
                  <p>- Giảm 50.000đ cho đơn từ 2,500,000đ </p>
                  <p>- Giảm 100.000đ cho đơn từ 5,000,000đ </p>
                  <p>- Giảm 350.000đ cho đơn từ 15,000,000đ Xem chi tiết</p>
                </li>
                <li className="mb-[7px]">
                  Nhập mã PVZLP200 giảm thêm đến 200.000đ khi thanh toán qua
                  ZaloPay Xem chi tiết
                </li>
              </ul>
            </div>
          </div>
        ) : (
          <div className="flex-1">
            <p>Sản phẩm không tồn tại hoặc đang tải...</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Product;
