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
        Object.values(item).includes(ele) ||
        (item.languages &&
          item.languages.every((lang) => {
            return lang.toLowerCase() === ele.toLowerCase();
          })) ||
        (item.tools &&
          item.tools.every((tool) => {
            return tool.toLowerCase() === ele.toLowerCase();
          }))
      );
    });
  });
}