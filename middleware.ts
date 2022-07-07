import { type NextRequest, NextResponse } from "next/server"

export async function middleware(req: NextRequest) {
  if (req.nextUrl.pathname !== "/login") {
    req.nextUrl.pathname = "/login"
    return NextResponse.redirect(req.nextUrl)
  }
}
