import { NextRequest, NextResponse } from "next/server"
import { StorageService } from "@/services"

import "@/config/server-env.config"

export const POST = async (request: NextRequest): Promise<NextResponse> => {
    const body = await request.json()
    const data = body.data
    const key = body.key
    if (!key) throw new Error("Key not found")
    await new StorageService().write({
        data,
        key,
    })
    return new NextResponse("")
}