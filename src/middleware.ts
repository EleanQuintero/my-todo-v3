import { NextRequest, NextResponse } from "next/server";
import { jwtVerify } from "jose";
import { SECRET_KEY } from "@/app/lib/utils";

export async function middleware(request: NextRequest) {
  const tokenCookie = request.cookies.get("access_token");
  const token = tokenCookie ? tokenCookie.value : undefined;

  if (request.nextUrl.pathname.includes("/dashboard")) {
    if (!token) {
      return NextResponse.redirect(new URL("/login", request.url));
    }

    try {
      const payload = await jwtVerify(
        token,
        new TextEncoder().encode(SECRET_KEY)
      );
      console.log(payload);
      return NextResponse.next();
    } catch (error) {
      console.error(error);
      return NextResponse.redirect(new URL("/login", request.url));
    }
  }
  return NextResponse.next();
}
