import Footer from "../../components/shared/Footer";
import NavBar from "../../components/shared/NavBar";

const MainLayout = () => {
  return (
    <div className="relative min-h-screen">
      <div className="mt-2">
        <NavBar></NavBar>
      </div>
      <h1>content</h1>
      <div className="absolute bottom-0 w-full h-10 ">
        <Footer></Footer>
      </div>
    </div>
  );
};

export default MainLayout;
