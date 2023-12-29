import { NextRequest, NextResponse } from "next/server";

// export default function get(req: NextRequest, res: NextResponse) {
//     console.log(req, res);
//     return new Response('Hello, Next.js!', {
//         status: 200,
//     });
// }

export async function GET(req: NextRequest) {
    const response = {
        data: [
            {test: "hey hey"},
            {test: "hahaha"}
        ]
    };
    return NextResponse.json(
      response,
      {
        status: 200
      }
    );
  }