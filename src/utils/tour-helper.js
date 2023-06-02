async function fetchAllTour(queryParams) {
  const { sortString, searchTerm, page, limit } = queryParams;
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_URL}/api/v1/tours/?sort=${sortString}${
        searchTerm && `&name=${searchTerm}`
      }&page=${page}&limit=${limit}`,
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

async function fetchNumberOfTours() {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_URL}/api/v1/tours/numberoftours`,
      {
        cache: "no-store",
      }
    );

    return res.json();
  } catch (error) {
    return { status: "fail", message: error.message };
  }
}

module.exports = { fetchAllTour, fetchTour, fetchNumberOfTours };
