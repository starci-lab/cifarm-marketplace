import { NextRequest, NextResponse } from "next/server"
import { ipfsService } from "@/services"

import "@/config/server-env.config"

export const POST = async (request: NextRequest): Promise<NextResponse> => {
    const body = await request.json()
    const jsonString = body.jsonString
    const { data : { cid } } = await ipfsService.uploadJson({
        jsonString,
    })
    return new NextResponse(cid)
}
