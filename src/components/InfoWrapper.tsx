import React, { type SetStateAction } from "react";

const InfoWrapper = ({
  info,
  setSearchTerm,
}: {
  info: string;
  setSearchTerm: React.Dispatch<SetStateAction<string>>;
}) => {
  return (
    <div
      className={
        "border-2 rounded-xl p-2 text-center items-center bg-blue-100 border-blue-100 shadow-2xl cursor-pointer"
      }
      onClick={() => setSearchTerm(info)}
    >
      <p className={"font-bold text-blue-400"}>{info}</p>
    </div>
  );
};

export default InfoWrapper;