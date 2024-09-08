import { NextRequest, NextResponse } from "next/server"
import { storageService } from "@/services"

import "@/config/server-env.config"

const defaultKey = "defaultKey"

export const POST = async (request: NextRequest): Promise<NextResponse> => {
    const body = await request.json()
    const data = body.data
    const key = body.key
    await storageService.write({
        data,
        key: key ?? defaultKey
    })
    return new NextResponse("")
}

export const GET = async (request: NextRequest): Promise<NextResponse> => {
    const url = new URL(request.url)
    const key = url.pathname.split("/").pop() 
    const data = await storageService.read({
        key: key ?? defaultKey
    })
    return new NextResponse(JSON.stringify(data))
}

export const DELETE = async (request: NextRequest): Promise<NextResponse> => {
    const url = new URL(request.url)
    const key = url.pathname.split("/").pop() 

    await storageService.delete({
        key: key ?? defaultKey
    })
    return new NextResponse("")
}

