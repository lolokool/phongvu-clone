import { useLocation } from "react-router-dom";
import Layout from "../../components/layouts";
import ScrollToTop from "../../utils/scrollToTop";
import DetailPR from "./DetailPr";
import Product from "./Product";
import Seller from "./Seller";
import Suggest from "./SuggestPr";

const Detail = () => {
  const location = useLocation();
  console.log("asdaddsd", location);
  return (
    <Layout>
      <ScrollToTop />
      <div className="w-1200 mx-auto px-4 text-14">
        <div className="flex mb-6 space-x-3 text-[#333333] ">
          <Product />
          <Seller />
        </div>
        <Suggest />
        <DetailPR />
      </div>
    </Layout>
  );
};

export default Detail;
