import { NextRequest, NextResponse } from "next/server"
import { add, uploadJsonToPinata } from "@/services"

import "@/config/server-env.config"

export const POST = async (request: NextRequest) : Promise<NextResponse> => {
    const body = await request.json()
    const json = JSON.parse(body.jsonString)
    const upload = await add()
    return new NextResponse(JSON.stringify(upload))
}