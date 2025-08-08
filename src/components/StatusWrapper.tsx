import React, { type SetStateAction } from "react";

const StatusWrapper = ({
  status,
  setSearchTerm,
  bgColor,
}: {
  status: string;
  setSearchTerm: React.Dispatch<SetStateAction<string>>;
  bgColor: string;
}) => {
  return (
    <div
      className={`border-1 rounded-4xl py-1 px-4 mx-2 font-bold ${bgColor} text-white uppercase cursor-pointer`}
      onClick={() => setSearchTerm(status)}
    >
      {status}
    </div>
  );
};

export default StatusWrapper;