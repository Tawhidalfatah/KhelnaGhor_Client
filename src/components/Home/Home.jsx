import Gallery from "../Gallery/Gallery";
import OtherProducts from "../OtherProducts/OtherProducts";
import Banner from "../Reusable/Banner/Banner";
import PageTitle from "../Reusable/PageTitle/PageTitle";
import SubCategory from "../SubCategory/SubCategory";

const Home = () => {
  return (
    <div>
      <PageTitle title="Home Page"></PageTitle>
      <Banner></Banner>
      <Gallery></Gallery>
      <SubCategory></SubCategory>
      <OtherProducts></OtherProducts>
    </div>
  );
};

export default Home;
