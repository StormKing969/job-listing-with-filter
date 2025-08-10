import data from "../../data/data.json";
import type { JobApplication } from "../../types/job";

export function loadData() {
  return data as JobApplication[];
}

export function loadFilterJobApplications(
  jobApplications: JobApplication[],
  filterData: string[],
): JobApplication[] {
  return jobApplications.filter((item) => {
    return filterData.every((ele) => {
      return (
        (item.new && ele === "New!") ||
        (item.featured && ele === "Featured") ||
        item.role?.toLowerCase() === ele.toLowerCase() ||
        item.level?.toLowerCase() === ele.toLowerCase() ||
        (item.languages &&
          item.languages.some((lang) => {
            return lang.toLowerCase() === ele.toLowerCase();
          })) ||
        (item.tools &&
          item.tools.some((tool) => {
            return tool.toLowerCase() === ele.toLowerCase();
          }))
      );
    });
  });
}