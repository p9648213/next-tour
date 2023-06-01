import AllTours from "@/components/all-tours/AllTours";
import Filter from "@/components/shared/Filter";
import PagiContainer from "@/components/shared/PagiContainer";

import { fetchNumberOfTours } from "@/utils/tour-helper";

export const dynamic = "force-dynamic";

export default async function Home({ searchParams }) {
  const res = await fetchNumberOfTours();

  if (res.status === "fail") {
    throw new Error(res.message);
  }

  const totalTour = res.data.data;

  const selectTypeOptions = [
    { value: "createdAt", label: "New Tour" },
    { value: "price", label: "Price" },
    { value: "ratingsAverage", label: "Rating" },
    { value: "duration", label: "Duration" },
  ];

  const selectBehaviorOptions = [
    { value: "asc", label: "Ascending" },
    { value: "des", label: "Descending" },
  ];

  let defaultTypeOption = selectTypeOptions[0];
  let defaultBehaviorOption = selectBehaviorOptions[0];
  let defaultSearchTerm = "";

  for (const option of selectTypeOptions) {
    if (
      Object.keys(searchParams)[0] &&
      Object.keys(searchParams)[0] === option.value
    ) {
      defaultTypeOption = option;
    }
  }

  for (const option of selectBehaviorOptions) {
    if (
      Object.values(searchParams)[0] &&
      Object.values(searchParams)[0] === option.value
    ) {
      defaultBehaviorOption = option;
    }
  }

  if (
    Object.keys(searchParams)[1] &&
    Object.keys(searchParams)[1] === "search"
  ) {
    defaultSearchTerm = Object.values(searchParams)[1];
  }

  let sortString =
    defaultBehaviorOption.value === "asc"
      ? defaultTypeOption.value
      : `-${defaultTypeOption.value}`;

  let searchTerm = defaultSearchTerm;

  return (
    <main className="main">
      <div className="filter-container">
        <Filter
          selectTypeOptions={{
            name: "type",
            options: selectTypeOptions,
            default: defaultTypeOption,
          }}
          selectBehaviorOptions={{
            name: "behavior",
            options: selectBehaviorOptions,
            default: defaultBehaviorOption,
          }}
          defaultSearchTerm={defaultSearchTerm}
        />
      </div>
      <AllTours queryParams={{ sortString, searchTerm }} />
      <PagiContainer totalData={totalTour} />
    </main>
  );
}
