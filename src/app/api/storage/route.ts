import { NextRequest, NextResponse } from "next/server"
import { storageService } from "@/services"

import "@/config/server-env.config"

export const POST = async (request: NextRequest): Promise<NextResponse> => {
    const body = await request.json()
    const data = body.data
    await storageService.write({
        data,
        key: "listings"
    })
    return new NextResponse("")
}

export const GET = async (): Promise<NextResponse> => {
    const data = await storageService.read({
        key: "listings"
    })
    return new NextResponse(JSON.stringify(data))
}

export const DELETE = async (): Promise<NextResponse> => {
    await storageService.delete({
        key: "listings"
    })
    return new NextResponse("")
}

