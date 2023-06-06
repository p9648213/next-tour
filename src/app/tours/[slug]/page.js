import dynamic from "next/dynamic";

import Header from "@/components/tour-overview/Header";
import Description from "@/components/tour-overview/Description";
import Pictures from "@/components/tour-overview/Pictures";
import Review from "@/components/tour-overview/Review";
import MapBox from "@/components/tour-overview/MapBox";

const Booking = dynamic(() => import("@/components/tour-overview/Booking"), {
  ssr: false,
  loading: () => <p>Loading...</p>,
});

import { fetchTour } from "@/utils/tour-helper";

export default async function TourOverview({ params }) {
  const { slug } = params;
  const res = await fetchTour(slug);

  if (res.status === "fail") {
    throw new Error(res.message);
  }

  const tour = res.data.data;

  return (
    <>
      <Header tour={tour} />
      <Description tour={tour} />
      <Pictures tour={tour} />
      <MapBox tour={tour} />
      <Review tour={tour} />
      <Booking tour={tour} />
    </>
  );
}
