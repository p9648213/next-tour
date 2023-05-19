import AllTours from "@/components/all-tours/AllTours";
import Filter from "@/components/shared/Filter";

export const dynamic = "force-dynamic";

export default function Home({ searchParams }) {
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

  for (const option of selectTypeOptions) {
    if (Object.keys(searchParams)[0] === option.value) {
      defaultTypeOption = option;
    }
  }

  for (const option of selectBehaviorOptions) {
    if (Object.values(searchParams)[0] === option.value) {
      defaultBehaviorOption = option;
    }
  }

  let sortString =
    defaultBehaviorOption.value === "asc"
      ? defaultTypeOption.value
      : `-${defaultTypeOption.value}`;

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
        />
      </div>
      <AllTours queryParams={sortString} />
    </main>
  );
}
