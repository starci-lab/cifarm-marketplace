import { NextRequest, NextResponse } from "next/server"
import { StorageService } from "@/services"

import "@/config/server-env.config"

export const GET = async (
    _: NextRequest,
    { params }: { params: { key: string } }
) => {
    if (!params.key) throw new Error("Key not found")
    const data = await new StorageService().read({
        key: params.key,
    })
    console.log(JSON.stringify(data))
    return new NextResponse(JSON.stringify(data), {
        status: 200,
        headers: { "content-type": "application/json" },
    })
}

export const DELETE = async (
    _: NextRequest,
    { params }: { params: { key: string } }
): Promise<NextResponse> => {
    if (!params.key) throw new Error("Key not found")
    await new StorageService().delete({
        key: params.key,
    })
    return new NextResponse("")
}
