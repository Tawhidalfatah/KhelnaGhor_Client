import { useEffect, useState } from "react";
import ToyCard from "./ToyCard";
import { Tab, TabList, Tabs } from "react-tabs";

const SubCategory = () => {
  const [allToys, setAllToys] = useState([]);
  const [activeTab, setActiveTab] = useState(" ");
  useEffect(() => {
    fetch(`http://localhost:5000/subcategory?subcategory=${activeTab}`)
      .then((res) => res.json())
      .then((data) => setAllToys(data));
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
        </Tabs>
      </div>
      <div className="grid grid-cols-3 gap-5">
        {allToys.map((toy) => (
          <ToyCard key={toy._id} toy={toy}></ToyCard>
        ))}
      </div>
    </>
  );
};

export default SubCategory;
