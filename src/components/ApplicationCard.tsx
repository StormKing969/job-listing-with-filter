import type { JobApplication } from "../../types/job";
import StatusWrapper from "./StatusWrapper.tsx";
import InfoWrapper from "./InfoWrapper.tsx";
import React, { type SetStateAction } from "react";

const ApplicationCard = ({
  data,
  setSearchTerm,
  ApplicationCardDynamicMargin,
}: {
  data: JobApplication;
  setSearchTerm: React.Dispatch<SetStateAction<string>>;
  ApplicationCardDynamicMargin: string;
}) => {
  return (
    <div
      className={`relative border-2 h-full my-15 ${ApplicationCardDynamicMargin} rounded-2xl border-blue-50 border-l-5 border-l-blue-400 shadow-2xl`}
    >
      <img
        src={data.logo}
        alt={"logo"}
        className={"absolute top-0 left-5 transform -translate-y-[50%] size-15"}
      />

      <div className={"flex flex-col justify-center p-5 mt-2"}>
        <div className={"flex flex-row items-center mb-2"}>
          <h1 className={"mr-2 text-blue-400 font-bold"}>{data.company}</h1>
          {data.new && (
            <StatusWrapper
              status={"New!"}
              setSearchTerm={setSearchTerm}
              bgColor={"bg-blue-400"}
            />
          )}
          {data.featured && (
            <StatusWrapper
              status={"Featured"}
              setSearchTerm={setSearchTerm}
              bgColor={"bg-black"}
            />
          )}
        </div>

        <p className={"font-bold"}>{data.position}</p>

        <div className={"mt-3"}>
          <p className={"text-gray-400"}>
            {data.postedAt} • {data.contract} • {data.location}
          </p>
        </div>

        <span className={"border-t w-full border-gray-400 my-5"} />

        <div className={"flex flex-row flex-wrap gap-3"}>
          <InfoWrapper info={data.role} setSearchTerm={setSearchTerm} />
          <InfoWrapper info={data.level} setSearchTerm={setSearchTerm} />
          {data.languages &&
            data.languages.map((language, index) => (
              <InfoWrapper
                key={index}
                info={language}
                setSearchTerm={setSearchTerm}
              />
            ))}
          {data.tools &&
            data.tools.map((tool, index) => (
              <InfoWrapper
                key={index}
                info={tool}
                setSearchTerm={setSearchTerm}
              />
            ))}
        </div>
      </div>
    </div>
  );
};

export default ApplicationCard;