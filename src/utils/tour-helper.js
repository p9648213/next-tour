async function fetchAllTour(queryParams) {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_URL}/api/v1/tours/?sort=${queryParams}`,
      {
        cache: "no-store",
      }
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
      {
        cache: "no-store",
      }
    );

    return res.json();
  } catch (error) {
    return { status: "fail", message: error.message };
  }
}

module.exports = { fetchAllTour, fetchTour };
