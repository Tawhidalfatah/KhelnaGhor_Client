import { useEffect, useState } from "react";
import ToyCard from "./ToyCard";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import { InfinitySpin } from "react-loader-spinner";

const SubCategory = () => {
  const [allToys, setAllToys] = useState([]);
  const [activeTab, setActiveTab] = useState(" ");
  const [loader, setLoader] = useState(false);

  useEffect(() => {
    setLoader(true);
    fetch(
      `https://b7a11-toy-marketplace-server.vercel.app/subcategory?subcategory=${activeTab}`
    )
      .then((res) => res.json())
      .then((data) => {
        setAllToys(data);
        setLoader(false);
      });
  }, [activeTab]);

  console.log(allToys);

  return (
    <>
      <div>
        <h1 className="text-center text-6xl font-bold my-14">
          Browse by Sub-Category
        </h1>
        <Tabs className="tabs lg:flex lg:justify-center ">
          <TabList>
            <Tab
              onClick={() => {
                setActiveTab("Marvel");
              }}
              className={
                activeTab === "Marvel"
                  ? "tab tab-lifted text-2xl  bg-[#F5BB00] font-bold text-black"
                  : "tab tab-lifted text-2xl font-bold"
              }
            >
              Marvel
            </Tab>
            <Tab
              onClick={() => {
                setActiveTab("DC");
              }}
              className={
                activeTab === "DC"
                  ? "tab tab-lifted text-2xl bg-[#F5BB00] font-bold text-black"
                  : "tab tab-lifted text-2xl font-bold"
              }
            >
              DC
            </Tab>
            <Tab
              onClick={() => {
                setActiveTab("Star Wars");
              }}
              className={
                activeTab === "Star Wars"
                  ? "tab tab-lifted text-2xl bg-[#F5BB00] font-bold text-black"
                  : "tab tab-lifted text-2xl font-bold"
              }
            >
              Star Wars
            </Tab>
            <Tab
              onClick={() => {
                setActiveTab(" ");
              }}
              className={
                activeTab === " "
                  ? "tab tab-lifted text-2xl bg-[#F5BB00] font-bold text-black"
                  : "tab tab-lifted text-2xl font-bold"
              }
            >
              All
            </Tab>
          </TabList>
          <TabPanel></TabPanel>
          <TabPanel></TabPanel>
          <TabPanel></TabPanel>
          <TabPanel></TabPanel>
        </Tabs>
      </div>

      {loader ? (
        <div className="flex justify-center my-72">
          <InfinitySpin width="200" color="#F5BB00"></InfinitySpin>
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 ml-12 lg:ml-24 mt-14">
          {allToys.map((toy) => (
            <ToyCard key={toy._id} toy={toy}></ToyCard>
          ))}
        </div>
      )}
    </>
  );
};

export default SubCategory;
