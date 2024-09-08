import { envConfig } from "@/config"
import { authAxios } from "../common"
import { Response } from "@/types"
import { join } from "path"

export interface UploadJsonRequestBody {
  jsonString: string;
}

export interface UploadJsonResponseData {
  cid: string;
}

export type UploadJsonResponse = Response<UploadJsonResponseData>

export interface RemoveParams {
  cid: string;
}

export type RemoveResponse = Response

export class IpfsService {
    private apiUrl: string

    constructor() {
        this.apiUrl = join(envConfig().cibase.apiUrl, "ipfs")
    }

    async uploadJson(body: UploadJsonRequestBody): Promise<UploadJsonResponse> {
        const { data } = await authAxios.post<UploadJsonResponse>(
            this.apiUrl,
            body
        )
        return data
    }

    async remove({ cid }: RemoveParams): Promise<RemoveResponse> {
        const { data } = await authAxios.delete<RemoveResponse>(
            join(this.apiUrl, cid)
        )
        return data
    }
}

export const ifpsService = new IpfsService()
