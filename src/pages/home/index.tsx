import Layout from "../../components/layouts";
import Carousel from "./components/Carousel/index.tsx";
import DealPR from "./components/DealComponent/index.tsx";
import Catagories from "../../components/element/Categories/index.tsx";

import BannerMaketing from "./components/BannerMaketing/index.tsx";
import ListProduct from "../../components/element/ListProduct/index.tsx";
import { useContext } from "react";
import { Featured } from "../../dataInput.ts";
import Folder from "../../components/element/Folder/index.tsx";
import ShoppingContext from "../../Context/demo.tsx";

export interface TabData {
  endDate: string;
  img1?: string;
  img2?: string;
  detail: {
    backgroundImage: string;
    title: string;
    description: string;
    data: dataApi[];
  }[];
}
[];
export interface dataApi {
  skuId: number;
  smallImage: string;
  image: string;
  name: string;
  brand: string;
  sellPrice: number;
  latestPrice: number;
  discountPercent: number;
  discountAmount: number;
  gifts: string;
  canonical: string;
  voucher: [
    {
      imageUrl: string;
      name: string;
      selectName: string;
      content?: string;
      endDate: string;
    }
  ];
}
[];
const Home = () => {
  const { detailData } = useContext(ShoppingContext);
  // const { detailData } = useContext(AppContext);
  const tabData: TabData = {
    endDate: "2024-10-22",
    img1: "https://lh3.googleusercontent.com/0nOzNhfNFGmo0AXD3I3mdPtj5kU3DXi-k0JaksU4AweFfQW1LhAqVuKP7MPQvD-Nju2A4t6ZmJr4wfxX9GamWIqu3Fop465XeA",
    img2: "https://lh3.googleusercontent.com/ezi5oistLUPzIpJCHqF6Ggyd6ofw2P2jZX31-xMnpIOB3iHiaBJfKciRivcxBfLD6E47U9H8aQeP8TG_MReJPZmYdHGVq7grLg",
    detail: [
      {
        backgroundImage:
          "https://lh3.googleusercontent.com/G4E6IOl-UmzXQSM16n-nSeW5Q3QzDfsepLCLGlt7ADT6_-35AMU8xOX1m50zKXDJ2Uv6EroDB6HvDQL_auKRRGN3ltxpThy9Ng=rw-w3840",
        title: "Chọn Quà Đúng Gu",
        description: "Săn Deal Nửa Giá",
        data: detailData,
      },
      {
        backgroundImage:
          "https://lh3.googleusercontent.com/7v3REFEvhC1Aj4LfQZWL52-r94atCT70g9HkbRpQQu7cDcNIzdFsHzqCQttWV-5W2DcyYeKHYTKzL44uydyAhDFLEzga7YWXkQ=rw-w1920",
        title: "Màn Hình Giá Sốc",
        description: "Deal Bật Nốc",
        data: detailData,
      },
      {
        backgroundImage:
          "https://lh3.googleusercontent.com/WBLtuOErPb6OV4Ij5HZrTRi8sXtN5gum8rWqggsYwjiLGuUpHMjAKFPl0Ya-UxbTRwE-F1wb6azav5GMS1r2cSLwoQkrcSz1=rw-w3840",
        title: "Phụ Kiện Điện Thoại",
        description: "Sạc Nhanh Tiện Lợi",
        data: detailData,
      },
      {
        backgroundImage:
          "https://lh3.googleusercontent.com/BcELBbC8gnIaaMmqm8FYRWiWUAfI1mfXnYT87GZJfllumAlvFG-F53O6SlgsVOxo7eijs2N1DUGnW9GslSzGtUKqt9kYiws=rw-w3840",
        title: "Nâng Cấp Văn Phòng",
        description: "Quà Tặng Chính Hãng",
        data: detailData,
      },
    ],
  };

  const tabData1: TabData = {
    endDate: "2023-11-11",
    detail: [
      {
        backgroundImage:
          "https://lh3.googleusercontent.com/BcELBbC8gnIaaMmqm8FYRWiWUAfI1mfXnYT87GZJfllumAlvFG-F53O6SlgsVOxo7eijs2N1DUGnW9GslSzGtUKqt9kYiws=rw-w3840",
        title: " Ưu đãi Samsung cho Học sinh sinh viên",
        description: "Giảm thêm đến 500K",
        data: detailData,
      },
      {
        backgroundImage:
          "https://lh3.googleusercontent.com/BcELBbC8gnIaaMmqm8FYRWiWUAfI1mfXnYT87GZJfllumAlvFG-F53O6SlgsVOxo7eijs2N1DUGnW9GslSzGtUKqt9kYiws=rw-w3840",
        title: "Sales Garmin - Chốt đơn liền",
        description: "Giảm đến 45%",
        data: detailData,
      },
    ],
  };

  return (
    <Layout>
      <Carousel />
      <DealPR dataDeal={tabData} />
      <DealPR dataDeal={tabData1} />
      <Catagories featured={Featured[0]} />
      <Catagories featured={Featured[1]} />
      <BannerMaketing
        img={{
          img1: "https://lh3.googleusercontent.com/XtKhmrgEt5uItWtpTA5kmLVhjiva1VZvRL1ROXtf0bvMYsGWOdV3tOiKpPFTg2B_KxvrVHQQtujsj0TkQVrsh9jsu_gKb4c1=w616-rw",
          img2: "https://lh3.googleusercontent.com/pmpFbS7kiNXIwKXjB4-snm6L31inUSAHv2UtBLIliQKFknmG5Tw2T_JrgbzAUbLTs3LWU32Plx3SSQsZdpJnV1aSwOQrOE_P=w616-rw",
        }}
      />

      <Folder
        folder={{
          title: "LAPTOP - CHỈ TỪ 8.99 triệu",
          data: detailData,
          bgImage:
            "https://lh3.googleusercontent.com/gVKL-i0fwAwNW07q1BlrXWrszrk3f-ktPdrMadJm2W8HX-fciH_nxiLcwz5EC9YmJLDLENX_H_BQIgFoabdpO4goEyMZVKJy=w1232",
        }}
      />
      <Folder
        folder={{
          title: "LINH KIỆN -GIẢM ĐẾN 62%",
          data: detailData,
          bgImage:
            "https://lh3.googleusercontent.com/p5ptKVVkjCvtIZkez7PxuYDxFvYlW1PIHFW7EuII7xEVrQoc17HVhg2UAK5bVPSJKMSPOJAv6LmZgdFRh8V-vJr4BrslPFiN=w1232",
        }}
      />
      <Folder
        folder={{
          title: "GAMING GEAR - CHỈ TỪ 99K",
          data: detailData,
          bgImage:
            "https://lh3.googleusercontent.com/F9Od-3pAVv2dUb7PoOlA3QEI-RU9grqSWizkSJoFPfs9FLcVYrg2luQJ8L0NPehlqFLfdwWAR0GtpZDIXN3COwavhiYY0sI=w1232",
        }}
      />
      <Folder
        folder={{
          title: "ĐỒ GIA DỤNG - GIẢM ĐẾN 77%",
          data: detailData,
          bgImage:
            "https://lh3.googleusercontent.com/wJTMsvomwRlC0-S4Sjh0jQiNWR_bq29KTlHV1xsTqSxOMghJF2WO--kJr9TaQNOAGmkhuJueo_ktAoqYrEddIp2ZIEOL-or1=w1232",
        }}
      />
      <BannerMaketing
        img={{
          img1: "https://lh3.googleusercontent.com/nZ5rz0tc9-lCJFASecXWaxLZJAEzVOm6sb6Dg4uForu9BNzKjEw8TUwd3OSrN30FrWL2N2Axi5pweB42WAFJ2SBMvfGXAtao2g=w616-rw",
          img2: "https://lh3.googleusercontent.com/ujXZa7dI9__qlz37mw-aZGM-c89r39fTw8roaGLf2MTroz-MXHjPB-nnRmFFoHnQFeQ4JLEHieEVX9G3Jnn_etTeLFXJekI=w616-rw",
        }}
      />
      <ListProduct listPr={{ title: "Sản phẩm nổi bật", data: detailData }} />
      <ListProduct listPr={{ title: "Dành cho bạn", data: detailData }} />
    </Layout>
  );
};

export default Home;
