import { envConfig } from "@/config"
import { authAxios } from "../common"
import { join } from "path"

export interface WriteRequestBody {
  key: string;
  data: string;
}

export interface WriteResponseData {
  objectId: string;
}

export interface WriteResponse {
  message: string;
  data: WriteResponseData;
}

export interface ReadParams {
  key: string;
}

export interface DeleteParams {
  key: string;
}

export interface DeleteResponse {
  message: string;
}

export class StorageService {
    private apiUrl: string

    constructor() {
        this.apiUrl = `${envConfig().cibase.apiUrl}/storage`
    }

    async write(body: WriteRequestBody): Promise<WriteResponse> {
        const { data } = await authAxios.post<WriteResponse>(this.apiUrl, body)
        return data
    }

    async read({ key }: ReadParams): Promise<unknown> {
        const { data } = await authAxios.get(join(this.apiUrl, key))
        return data
    }

    async delete({ key }: DeleteParams): Promise<DeleteResponse> {
        const { data } = await authAxios.delete( `${this.apiUrl}/${key}`)
        return data
    }
}

export const storageService = new StorageService()
