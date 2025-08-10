import React, { type SetStateAction } from "react";

const SearchInfoWrapper = ({
  filterName,
  setFilterData,
}: {
  filterName: string;
  setFilterData: React.Dispatch<SetStateAction<string[]>>;
}) => {
  const handleRemoveFilterName = (e: React.MouseEvent) => {
    e.stopPropagation(); // Prevent the click from bubbling up to the parent
    setFilterData((prevState) =>
      prevState.filter((item) => item !== filterName),
    );
  };

  return (
    <div
      className={
        "border-2 rounded-xl bg-blue-100 border-blue-100 shadow-2xl flex flex-row gap-2 justify-center items-center"
      }
    >
      <p className={"font-bold text-blue-400 p-2"}>{filterName}</p>
      <div
        className={
          "bg-blue-400 h-full w-full p-2 flex justify-center items-center rounded-r-xl"
        }
      >
        <img
          src={"/icon-remove.svg"}
          alt={"Remove Icon"}
          className={"size-5 cursor-pointer"}
          onClick={handleRemoveFilterName}
        />
      </div>
    </div>
  );
};

export default SearchInfoWrapper;