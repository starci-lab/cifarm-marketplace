import { envConfig } from "@/config"
import { authAxios } from "../common"

export interface UploadJsonRequestBody {
  jsonString: string;
}

export interface UploadJsonResponseData {
  cid: string;
}

export interface UploadJsonResponse {
    message: string 
    data: UploadJsonResponseData
}

export interface RemoveParams {
  cid: string;
}

export interface RemoveResponse {
    message: string 
}

export class IpfsService {
    private apiUrl: string

    constructor() {
        this.apiUrl = `${envConfig().cibase.apiUrl}/ipfs`
    }

    async uploadJson(body: UploadJsonRequestBody): Promise<UploadJsonResponse> {
        const { data } = await authAxios.post<UploadJsonResponse>(
            `${this.apiUrl}/json`,
            body
        )
        return data
    }

    async remove({ cid }: RemoveParams): Promise<RemoveResponse> {
        const { data } = await authAxios.delete<RemoveResponse>(
            `${this.apiUrl}/${cid}`
        )
        return data
    }
}