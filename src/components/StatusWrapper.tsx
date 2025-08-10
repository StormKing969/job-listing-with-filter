import React, { type SetStateAction } from "react";

const StatusWrapper = ({
  status,
  setSearchTerm,
  bgColor,
  setWasClicked,
}: {
  status: string;
  setSearchTerm: React.Dispatch<SetStateAction<string>>;
  bgColor: string;
  setWasClicked: React.Dispatch<SetStateAction<boolean>>;
}) => {
  const handleClick = (e: React.MouseEvent) => {
    e.stopPropagation(); // Prevent the click from bubbling up to the parent
    setSearchTerm(status);
    setWasClicked(true);
  };

  return (
    <div
      className={`border-1 rounded-4xl py-1 px-4 mx-2 font-bold ${bgColor} text-white uppercase cursor-pointer`}
      onClick={handleClick}
    >
      {status}
    </div>
  );
};

export default StatusWrapper;