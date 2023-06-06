const pause = (duration) => {
  return new Promise((resolve) => {
    setTimeout(resolve, duration);
  });
};

async function fetchAllTour(queryParams) {
  await pause(3000);
  const { sortString, searchTerm, page, limit } = queryParams;
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_URL}/api/v1/tours/?sort=${sortString}${
        searchTerm && `&name=${searchTerm}`
      }&page=${page}&limit=${limit}`,
      { next: { tags: ["fetchAllTour"] } }
    );

    return res.json();
  } catch (error) {
    return { status: "fail", message: error.message };
  }
}

async function fetchTour(params) {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_URL}/api/v1/tours/slug/${params}`,
      { next: { tags: [params] } }
    );

    return res.json();
  } catch (error) {
    return { status: "fail", message: error.message };
  }
}

async function bookTour(tourId, token) {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_URL}/api/v1/bookings/checkout-session/${tourId}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
        cache: "no-store",
      }
    );

    return res.json();
  } catch (error) {
    return { status: "fail", message: error.message };
  }
}

module.exports = { fetchAllTour, fetchTour, bookTour };
