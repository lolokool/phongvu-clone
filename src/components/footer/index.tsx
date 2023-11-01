import { FooterData } from "../../dataInput";

const payMenthod = [
  {
    title: "QR Code",
    img: "https://shopfront-cdn.tekoapis.com/static/7534c48e46ec507e.svg",
  },
  {
    title: "Tiền mặt",
    img: "https://shopfront-cdn.tekoapis.com/static/0e924ede5a93187b.svg",
  },
  {
    title: "Trả góp",
    img: "https://shopfront-cdn.tekoapis.com/static/b2c29b7046b45840.svg ",
  },
  {
    title: "Internet Banking",
    img: "https://shopfront-cdn.tekoapis.com/static/abf02ec95226fd05.svg",
  },
];

const FooterComponent = () => {
  return (
    <div className="pt-5 border-t-[rgb(20,53,195)] border-t-[3px] ">
      <div className=" max-w-main1 text-color02 mx-auto justify-center ">
        <div className="grid grid-cols-5 text-12 px-4 mb-[2.5px] gap-3">
          {FooterData.map((item, index) => (
            <div key={index}>
              <h2 className="font-bold text-14 mb-[2.5px]">{item.title}</h2>
              <div>
                {item.child.map((a, i) => (
                  <a className="text-12 flex flex-col" key={i} href={a.url}>
                    {a.path}
                  </a>
                ))}
              </div>
            </div>
          ))}
          <div>
            <h2 className="mb-[2.5px] text-sm font-bold">Cộng đồng Phong Vũ</h2>
            <div>
              <span>Gọi mua hàng (miễn phí) </span>
              <span>
                <a>18006867</a>
              </span>
            </div>
            <div>
              <span>Gọi chăm sóc</span>
              <span>
                <a> 18006865</a>
              </span>
            </div>
            <p>Facebook Phong Vũ</p>
            <p>Phong Vũ Media</p>
            <p>Phong Vũ Hội</p>
            <p>OA Phong Vũ (zalo)</p>
          </div>
          <div>
            <div>
              <h2 className="mb-[2.5px] text-sm font-bold">Email liên hệ</h2>
            </div>
            <p>Hỗ trợ Khách hàng:</p>

            <a href="#">cskh@phongvu.vn</a>
            <p>Liên hệ báo giá:</p>

            <a href="#"> baogia@phongvu.vn</a>
            <p>Hợp tác phát triển:</p>

            <p>hoptac@phongvu.vn</p>
          </div>
        </div>
      </div>
      <div className=" max-w-main1 text-color02 mx-auto justify-center">
        <div className="flex px-4 mb-[2.5px] w-1264">
          <div className="basis-1/4">
            <div>
              <div className="mb-[2.5px] text-sm font-bold">
                Phương thức thanh toán
              </div>
              <div className="flex">
                {payMenthod.map((item: any, index: any) => (
                  <div className="w-60 h-60 text-12 " key={index}>
                    <img src={item.img} className="w-[30px] " />
                    {item.title}
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="basis-1/2">
            <div className="mb-2.5 text-sm font-bold ">
              Danh sách các ngân hàng thanh toán online
            </div>
            <img
              src="https://shopfront-cdn.tekoapis.com/static/vnpay_banks.png"
              className="w-full object-cover"
            />
          </div>
        </div>
      </div>
      <div className="w-full bg-color04 pt-[30px] pb-6 ">
        <div className="grid grid-cols-3  text-12 w-1264 m-auto gap-4 ">
          <div className="1">
            <h2 className="font-bold mb-[15px]">
              CÔNG TY CỔ PHẦN THƯƠNG MẠI - DỊCH VỤ PHONG VŨ
            </h2>
            © 1997 - 2020 Công Ty Cổ Phần Thương Mại - Dịch Vụ Phong Vũ Giấy
            chứng nhận đăng ký doanh nghiệp: 0304998358 do Sở KH-ĐT TP.HCM cấp
            lần đầu ngày 30 tháng 05 năm 2007
          </div>
          <div className="1">
            <h4 className="font-bold">Địa chỉ trụ sở chính:</h4>
            Tầng 5, Số 117-119-121 Nguyễn Du, Phường Bến Thành, Quận 1, Thành
            Phố Hồ Chí Minh
            <h4 className="font-bold">Văn phòng điều hành miền Bắc:</h4>
            Tầng 6, Số 1 Phố Thái Hà, Phường Trung Liệt, Quận Đống Đa, Hà Nội
            <h4 className="font-bold"> Văn phòng điều hành miền Nam:</h4>
            677/2A Điện Biên Phủ, Phường 25 , Quận Bình Thạnh , TP. Hồ Chí Minh
          </div>
          <div className="1">
            <img
              src="https://shopfront-cdn.tekoapis.com/common/da-dang-ky.png"
              alt=""
            />
            <img
              src="https://images.dmca.com/Badges/dmca-badge-w100-2x1-02.png?ID=53b44883-ed2a-434d-902b-5adce10aafd5"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterComponent;
