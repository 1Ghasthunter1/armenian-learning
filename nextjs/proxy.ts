import { NextResponse, type NextRequest } from "next/server";
import { auth } from "@/src/lib/auth";

// Validates the session against the database, so revoked or expired sessions are sent to /login.
export async function proxy(request: NextRequest) {
  const session = await auth.api.getSession({ headers: request.headers });
  const isLoginPage = request.nextUrl.pathname === "/login";

  if (!session && !isLoginPage) {
    return NextResponse.redirect(new URL("/login", request.url));
  }
  if (session && isLoginPage) {
    return NextResponse.redirect(new URL("/", request.url));
  }
  return NextResponse.next();
}

export const config = {
  // Everything except the auth API and the framework's own static files.
  matcher: ["/((?!api/auth/|_next/static/|_next/image|favicon.ico).*)"],
};
