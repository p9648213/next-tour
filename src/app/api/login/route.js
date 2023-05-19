import { cookies } from "next/headers";
import { login } from "@/utils/user-helper";
import { NextResponse } from "next/server";

export async function POST(request) {
  const cookieStore = cookies();

  const data = await request.json();
  const res = await login(data);

  if (res.status === "success") {
    cookieStore.set("jwt", res.token, {
      expires: new Date(res.expires),
      httpOnly: true,
    });

    return NextResponse.json({ status: res.status });
  }

  return NextResponse.json({ status: res.status, message: res.message });
}
