import { NextResponse } from "next/server";

export function middleware(request) {
  // Add your custom logic here
  console.log("Executing logic before page unload...");
  // You can delay the response to simulate async work
  return NextResponse.next();
}

export const config = {
  matcher: "/:path*", // Apply middleware to all routes
};
