import { auth } from "@/lib/backend/auth";
import { NextResponse } from "next/server";

export async function proxy(req) {
  const session = await auth.api.getSession(req);

  console.log({ session });

  if (!session) {
    return NextResponse.redirect(new URL("/signin", req.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/chat"],
};

