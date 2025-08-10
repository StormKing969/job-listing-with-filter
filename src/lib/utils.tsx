import type { JobApplication } from "../../types/job";

export async function loadData(): Promise<JobApplication[]> {
  const response = await fetch("/data.json");
  const jsonData = await response.json();
  return jsonData as JobApplication[];
}

export function loadFilterJobApplications(
  jobApplications: JobApplication[],
  filterData: string[],
) {
    console.log(jobApplications)
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