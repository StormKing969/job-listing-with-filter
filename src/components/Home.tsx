import { loadData } from "../lib/utils.tsx";
import SearchBar from "./SearchBar.tsx";
import { useEffect, useState } from "react";
import ApplicationCard from "./ApplicationCard.tsx";
import type { JobApplication } from "../../types/job";

const Home = () => {
  const data = loadData();
  const [jobApplications, setJobApplications] =
    useState<JobApplication[]>(data);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [filter, setFilter] = useState<string[]>([]);
  const [searchTrigger, setSearchTrigger] = useState<boolean>(false);
  let ApplicationCardDynamicMargin = "first:mt-35";

  useEffect(() => {
    if (searchTerm) {
      setSearchTrigger(true);
      ApplicationCardDynamicMargin = "";
      if (filter.length !== 0) {
        setFilter((prevState) => [...prevState, searchTerm]);
      } else {
        setFilter([searchTerm]);
      }
    } else {
      setSearchTrigger(false);
      ApplicationCardDynamicMargin = "first:mt-35";
    }
  }, [searchTerm, searchTrigger]);

  return (
    <main className={"p-0 m-0 box-border bg-blue-50 relative z-10"}>
      <img
        src={"/bg-header-mobile.svg"}
        alt={"Background Image"}
        className={"w-full h-20 mb-5 absolute -z-1"}
      />

      <section
        className={"flex flex-col gap-3 items-center justify-center p-5"}
      >
        <div className={"w-[350px]"}>
          {searchTrigger && (
            <SearchBar
              searchTerm={searchTerm}
              setJobApplications={setJobApplications}
            />
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