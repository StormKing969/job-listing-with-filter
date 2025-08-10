import React, { type SetStateAction } from "react";
import SearchInfoWrapper from "./SearchInfoWrapper.tsx";

const SearchBar = ({
  filter,
  setFilter,
}: {
  filter: string[];
  setFilter: React.Dispatch<SetStateAction<string[]>>;
}) => {
  return (
    <section className="bg-blue-50 rounded-xs shadow-2xl p-5 mb-15 mt-8 flex flex-row justify-between items-center">
      <div className={"flex flex-row flex-wrap w-full gap-2"}>
        {filter.map((ele, index) => (
          <SearchInfoWrapper
            key={index}
            filterName={ele}
            setFilter={setFilter}
          />
        ))}
      </div>

      <p
        className={"font-bold text-gray-400 text-xl ml-5 cursor-pointer"}
        onClick={() => setFilter([])}
      >
        Clear
      </p>
    </section>
  );
};

export default SearchBar;