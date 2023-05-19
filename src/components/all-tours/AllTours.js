import TourCard from "../tour-card/TourCard";

import { fetchAllTour } from "@/utils/tour-helper";

export default async function AllTours({ queryParams }) {
  const res = await fetchAllTour(queryParams);

  if (res.status === "fail") {
    throw new Error(res.message);
  }

  const tourData = res.data.data;

  let content = tourData.map((tour) => {
    return <TourCard key={tour.id} tour={tour} />;
  });

  return <div className="card-container">{content}</div>;
}
