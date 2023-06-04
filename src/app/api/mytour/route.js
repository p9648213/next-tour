import { getMyBookingTours } from "@/utils/user-helper";
import { NextResponse } from "next/server";

export async function GET(request) {
  const token = request.cookies.get("jwt").value;

  const res = await getMyBookingTours(token);

  return NextResponse.json(res);
}
