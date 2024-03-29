import { NextResponse, NextRequest } from "next/server";

process.env.TZ = 'Asia/Seoul';

export async function GET(request: NextRequest) {
  const dateQueryParam = request.nextUrl.searchParams.get("date");

  const serverSideDate = new Date(Number(new Date()));
  const clientSideDate = new Date(Number(dateQueryParam));

  return NextResponse.json({
    serverSideDateNumber: Number(serverSideDate),
    serverSideDateStr: serverSideDate.toLocaleString(),
    koreaServerSideDateStr: "",
    clientSideDateNumber: Number(dateQueryParam),
    clientSideDateStr:
      clientSideDate.toDateString() +
      " " +
      clientSideDate.getHours() +
      " " +
      clientSideDate.getMinutes(),
    koreaClientSideDateStr: "",
  });
}
