import Tick from "../../../components/Svgs/Tick";

const Seller = () => {
  return (
    <div className="max-w-24.4">
      <div className="flex  flex-col space-y-4">
        <div className="flex bg-white p-4">
          <div className="flex gap-2">
            <img
              className="rounded-[50%] w-[40px] h-[40px] object-contain border border-[#e4e5f0]"
              src="https://lh3.googleusercontent.com/qOnchEYD7No58bjEQs5pf_05IV-0DmoaCmEFXD007VHs5cn16LZ6PC98IlY3OiBL9UXsEwNzwiVHRrvSDMQ"
              alt=""
            />
            <div className="">
              <div className="text-[15px] font-medium ">
                <p>
                  CÔNG TY CỔ PHẦN THƯƠNG MẠI DỊCH VỤ PHONG VŨ
                  <Tick />
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="p-4  bg-white flex-1">
          <div>
            <p className="text-[15px] font-medium pb-2">Chính sách bán hàng</p>
            <div className="flex gap-1">
              <img
                className="w-[24px] h-[24px] "
                src="https://lh3.googleusercontent.com/uvWBg1q90XtEWvHkWGDbDemjEaANJ_kX3NEfIywURPTMeaSZTORdttpehuFBNKpYiWQ3jHgito4ciCt9pEJIHH1V4IlPYoE=rw"
                alt=""
              />
              <p className="">
                Miễn phí giao hàng cho đơn hàng từ 5 triệu Xem chi tiết
              </p>
            </div>
            <div className="flex gap-1">
              <img
                className="w-[24px] h-[24px] "
                src="https://lh3.googleusercontent.com/LT3jrA76x0rGqq9TmqrwY09FgyZfy0sjMxbS4PLFwUekIrCA9GlLF6EkiFuKKL711tFBT7f2JaUgKT3--To8zOW4kHxPPHs4=rw"
                alt=""
              />
              <p className="">Cam kết hàng chính hãng 100% </p>
            </div>
            <div className="flex gap-1">
              <img
                className="w-[24px] h-[24px] "
                src="https://lh3.googleusercontent.com/TECKlw8DFChVXu_FAYdNjbCuaDVhmOhbqsKLnayhIgx5Pvv0EX051qHWJR7vUgxiUXN5heAlx4bIDYsoES7X8pby5Pn9LXWN=rw"
                alt=""
              />
              <p className="">Đổi trả trong vòng 10 ngày Xem chi tiết</p>
            </div>
          </div>
          <div className="mt-6 ">
            <p className="text-[15px] font-bold pb-2">Dịch vụ khác</p>
            <div className="flex gap-1">
              <img
                className="w-[24px] h-[24px] "
                src="https://lh3.googleusercontent.com/cjYniX0PTM1twy6bUEw4nSG47EEsTcFf7O6NRgWfdrq7JpNTccsNkqxnBExVVTGeocVdkUVbupp17dLNFn-E2gG2V-_aejU=rw"
                alt=""
              />
              <p className="">
                Gói dịch vụ bảo hành/ Sửa chữa tận nơi Xem chi tiết
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Seller;
