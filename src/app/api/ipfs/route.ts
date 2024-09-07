import { NextRequest, NextResponse } from "next/server"

import { uploadJsonToPinata } from "@/services"
import { envConfig } from "@/config"

import "@/config/server-env.config"

export const POST = async (request: NextRequest) : Promise<NextResponse> => {
    const body = await request.json()
    console.log(envConfig())
    const json = JSON.parse(body.jsonString)
    const cid = await uploadJsonToPinata(json)
    return new NextResponse(`${envConfig().pinata.gateway}${cid}`)
}