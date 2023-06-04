import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import Table from "../shared/Table";

export default function MyBooking() {
  const [tableData, setTableData] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const user = useSelector((state) => state.users);

  async function getMyBookingTours() {
    setLoading(true);

    const response = await fetch(
      `${process.env.NEXT_PUBLIC_URL_INTERNAL}/api/mytour`,
      {
        method: "GET",
      }
    );

    const responseData = await response.json();

    setLoading(false);

    if (responseData.status === "success") {
      setTableData(responseData.data);
    } else {
      setError(responseData.message);
    }
  }

  const config = [
    {
      label: "Booker",
      render: (data) => data.user.name,
    },

    {
      label: "Tour",
      render: (data) => data.tour.name,
    },
    {
      label: "Price",
      render: (data) => data.price + "$",
    },
    {
      label: "Status",
      render: (data) => (data.paid ? "Success" : "Pending"),
    },
  ];

  const keyFn = (data) => {
    return data._id;
  };

  let content;

  if (loading) {
    content = <div>Loading...</div>;
  } else if (!loading && error) {
    content = <div>{error}</div>;
  } else {
    content = <Table data={tableData} config={config} keyFn={keyFn}></Table>;
  }

  useEffect(() => {
    if (user.name) {
      getMyBookingTours();
    }
  }, [user]);

  return (
    <>
      {user.name ? (
        <div className="booking-container">
          <h1>Booking Details</h1>
          {content}
        </div>
      ) : (
        <div className="booking-container">
          <div className="booking-title-nologin">
            <h1>You are not logged in.</h1>
            <h1>Please login to see your booking details.</h1>
          </div>
        </div>
      )}
    </>
  );
}
