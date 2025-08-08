import React, { type SetStateAction } from "react";
import type { JobApplication } from "../../types/job";

const SearchBar = ({
  searchTerm,
  setJobApplications,
}: {
  searchTerm: string;
  setJobApplications: React.Dispatch<SetStateAction<JobApplication[]>>;
}) => {
  return (
    <div className="bg-blue-50 rounded-xs shadow-2xl p-5 mb-15 mt-8">
      <div>{searchTerm}</div>
    </div>
  );
};

export default SearchBar;