import Layout from "../../components/layouts";
import Carousel from "../../components/carousel/index.tsx";
import DealPR from "../../components/deal-component/index.tsx";
import Card from "../../components/element/card/index.tsx";

const Home = () => {
  return (
    <Layout>
      <Carousel />
      <DealPR />
    </Layout>
  );
};
export default Home;
