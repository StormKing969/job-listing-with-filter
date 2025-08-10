import React, { type SetStateAction } from "react";

const InfoWrapper = ({
  info,
  setSearchTerm,
  setWasClicked,
}: {
  info: string;
  setSearchTerm: React.Dispatch<SetStateAction<string>>;
  setWasClicked: React.Dispatch<SetStateAction<boolean>>;
}) => {
  const handleClick = (e: React.MouseEvent) => {
    e.stopPropagation(); // Prevent the click from bubbling up to the parent
    setSearchTerm(info);
    setWasClicked(true);
  };

  return (
    <div
      className={
        "border-2 rounded-xl p-2 text-center items-center bg-blue-100 border-blue-100 shadow-2xl cursor-pointer"
      }
      onClick={handleClick}
    >
      <p className={"font-bold text-blue-400"}>{info}</p>
    </div>
  );
};

export default InfoWrapper;