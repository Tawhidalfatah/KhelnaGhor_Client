import Gallery from "../Gallery/Gallery";
import OtherProducts from "../OtherProducts/OtherProducts";
import Partners from "../Partners/Partners";
import Banner from "../Reusable/Banner/Banner";
import PageTitle from "../Reusable/PageTitle/PageTitle";
import SubCategory from "../SubCategory/SubCategory";

const Home = () => {
  return (
    <div>
      <PageTitle title="KG || Home"></PageTitle>
      <Banner></Banner>
      <div className="divider"></div>
      <Gallery></Gallery>
      <div className="divider"></div>
      <SubCategory></SubCategory>
      <div className="divider"></div>
      <OtherProducts></OtherProducts>
      <div className="divider"></div>
      <Partners></Partners>
    </div>
  );
};

export default Home;
