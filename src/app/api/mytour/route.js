import { getMyBookingTours } from "@/utils/user-helper";
import { NextResponse } from "next/server";

export async function GET(request) {
  const token = request.cookies.get("jwt");

  if (token) {
    const res = await getMyBookingTours(token.value);
    return NextResponse.json(res);
  } else {
    return NextResponse.json({
      status: "fail",
      message: "You are not logged in",
    });
  }
}
