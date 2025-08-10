import { loadData, loadFilterJobApplications } from "../lib/utils.tsx";
import SearchBar from "./SearchBar.tsx";
import { useEffect, useState } from "react";
import ApplicationCard from "./ApplicationCard.tsx";
import type { JobApplication } from "../../types/job";

const Home = () => {
  const [originalData, setOriginalData] = useState<JobApplication[]>([]);
  const [jobApplications, setJobApplications] = useState<JobApplication[]>([]);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [filterData, setFilterData] = useState<string[]>([]);
  let ApplicationCardDynamicMargin = "first:mt-35";

  useEffect(() => {
    if (searchTerm) {
      ApplicationCardDynamicMargin = "";
      if (filterData.length !== 0) {
        if (!filterData.includes(searchTerm)) {
          setFilterData((prevState) => [...prevState, searchTerm]);
        }
      } else {
        setFilterData([searchTerm]);
      }
    }

    if (filterData.length === 0) {
      ApplicationCardDynamicMargin = "first:mt-35";
    }

    setSearchTerm("");
  }, [searchTerm]);

  useEffect(() => {
    loadData().then((data) => {
      setJobApplications(data);
      setOriginalData(data);
    });
  }, []);

  useEffect(() => {
    if (filterData.length !== 0) {
      const filteredData = loadFilterJobApplications(originalData, filterData);
      setJobApplications(filteredData);
    } else {
      setJobApplications(originalData);
    }
  }, [filterData]);

  return (
    <main className={"p-0 m-0 box-border bg-blue-50 relative z-10"}>
      <div className={"absolute h-20 w-full bg-blue-400 -z-10"} />

      <picture className={"w-full h-20 mb-5 absolute -z-10"}>
        <source media="(min-width: 1024px)" srcSet="/bg-header-desktop.svg" />
        <img
          src={"/bg-header-mobile.svg"}
          alt={"Responsive Background Image"}
          className={"w-full h-20"}
        />
      </picture>

      <section
        className={"flex flex-col gap-3 items-center justify-center p-5"}
      >
        <div className={"lg:w-3/4 w-[350px]"}>
          {filterData.length !== 0 && (
            <SearchBar filter={filterData} setFilterData={setFilterData} />
          )}

          {jobApplications.map((item) => (
            <ApplicationCard
              key={item.id}
              data={item}
              setSearchTerm={setSearchTerm}
              ApplicationCardDynamicMargin={ApplicationCardDynamicMargin}
            />
          ))}
        </div>
      </section>
    </main>
  );
};

export default Home;