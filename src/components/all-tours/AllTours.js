import TourCard from "../tour-card/TourCard";

export default function AllTours({ tourData }) {
  let content = tourData.map((tour) => {
    return <TourCard key={tour.id} tour={tour} />;
  });

  return <div className="card-container">{content}</div>;
}
