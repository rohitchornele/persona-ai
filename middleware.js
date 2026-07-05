import { NextResponse } from "next/server";

// Kept as a plain literal (not imported from lib/auth.js) because that file
// is a client module ("use client") and middleware runs in the edge runtime.
const SESSION_COOKIE = "chatter_session";

// Route protection lives here, at the edge, rather than scattered across
// pages. Swap the cookie check for verifying a real session/JWT when you
// wire up real auth — the redirect behavior below can stay the same.
export function middleware(request) {
  const session = request.cookies.get(SESSION_COOKIE);

  if (!session) {
    const url = request.nextUrl.clone();
    url.pathname = "/";
    url.searchParams.set("auth", "required");
    return NextResponse.redirect(url);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/chat/:path*"],
};
