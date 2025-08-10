import type { JobApplication } from "../../types/job";
import StatusWrapper from "./StatusWrapper.tsx";
import InfoWrapper from "./InfoWrapper.tsx";
import React, { type SetStateAction, useState } from "react";

const ApplicationCard = ({
  data,
  setSearchTerm,
  ApplicationCardDynamicMargin,
}: {
  data: JobApplication;
  setSearchTerm: React.Dispatch<SetStateAction<string>>;
  ApplicationCardDynamicMargin: string;
}) => {
  const [wasClicked, setWasClicked] = useState<boolean>(false);

  return (
    <div
      className={`relative flex flex-col justify-center items-start gap-2 ${ApplicationCardDynamicMargin} my-15 p-5 
      rounded-2xl border-blue-50 shadow-2xl border-2 ${wasClicked ? "border-l-5 border-l-blue-400" : ""} h-full 
      lg:flex-row lg:justify-between lg:static lg:items-center`}
      onClick={() => setWasClicked(!wasClicked)}
    >
      <div className={"flex flex-row"}>
        <img
          src={data.logo}
          alt={"logo"}
          className={
            "absolute top-0 left-5 transform -translate-y-[50%] size-15 lg:static lg:translate-y-0 lg:left-0 lg:size-25 lg:mr-8"
          }
        />

        <div className={"mt-5 lg:mt-0"}>
          <div className={"flex flex-row h-fit"}>
            <h1 className={"mr-2 text-blue-400 font-bold"}>{data.company}</h1>
            {data.new && (
              <StatusWrapper
                status={"New!"}
                setSearchTerm={setSearchTerm}
                bgColor={"bg-blue-400"}
                setWasClicked={setWasClicked}
              />
            )}
            {data.featured && (
              <StatusWrapper
                status={"Featured"}
                setSearchTerm={setSearchTerm}
                bgColor={"bg-black"}
                setWasClicked={setWasClicked}
              />
            )}
          </div>

          <p className={"font-bold mt-2"}>{data.position}</p>

          <div className={"mt-3"}>
            <p className={"text-gray-400"}>
              {data.postedAt} • {data.contract} • {data.location}
            </p>
          </div>
        </div>
      </div>

      <span className={"border-t w-full border-gray-400 my-5 lg:hidden"} />

      <div className={"flex flex-row flex-wrap gap-3 lg:ml-25"}>
        <InfoWrapper
          info={data.role}
          setSearchTerm={setSearchTerm}
          setWasClicked={setWasClicked}
        />
        <InfoWrapper
          info={data.level}
          setSearchTerm={setSearchTerm}
          setWasClicked={setWasClicked}
        />
        {data.languages &&
          data.languages.map((language, index) => (
            <InfoWrapper
              key={index}
              info={language}
              setSearchTerm={setSearchTerm}
              setWasClicked={setWasClicked}
            />
          ))}

        {data.tools &&
          data.tools.map((tool, index) => (
            <InfoWrapper
              key={index}
              info={tool}
              setSearchTerm={setSearchTerm}
              setWasClicked={setWasClicked}
            />
          ))}
      </div>
    </div>
  );
};

export default ApplicationCard;