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
        <Tabs className="tabs tabs-boxed">
          <TabList>
            <Tab
              onClick={() => {
                setActiveTab("Marvel");
              }}
              className={activeTab === "Marvel" ? "tab tab-active" : "tab"}
            >
              Marvel
            </Tab>
            <Tab
              onClick={() => {
                setActiveTab("DC");
              }}
              className={activeTab === "DC" ? "tab tab-active" : "tab"}
            >
              DC
            </Tab>
            <Tab
              onClick={() => {
                setActiveTab("Star Wars");
              }}
              className={activeTab === "Star Wars" ? "tab tab-active" : "tab"}
            >
              Star Wars
            </Tab>
            <Tab
              onClick={() => {
                setActiveTab(" ");
              }}
              className={activeTab === " " ? "tab tab-active" : "tab"}
            >
              All
            </Tab>
          </TabList>
          <TabPanel>
            <h1></h1>
          </TabPanel>
          <TabPanel>
            <h1></h1>
          </TabPanel>
          <TabPanel>
            <h1></h1>
          </TabPanel>
          <TabPanel>
            <h1></h1>
          </TabPanel>
        </Tabs>
      </div>

      {loader ? (
        <div className="flex justify-center my-72">
          <InfinitySpin width="200" color="#F5BB00"></InfinitySpin>
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 mt-14">
          {allToys.map((toy) => (
            <ToyCard key={toy._id} toy={toy}></ToyCard>
          ))}
        </div>
      )}
    </>
  );
};

export default SubCategory;
