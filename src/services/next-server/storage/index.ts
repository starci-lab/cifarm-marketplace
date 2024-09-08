import axios from "axios"

export interface NextServerWriteParams {
  key: string;
  data: string;
}

export interface NextServerReadParams {
  key: string;
}

export interface NextServerDeleteParams {
  key: string;
}

export const writeStorage = async (params: NextServerWriteParams) => {
    await axios.post("/api/storage", params)
}

export const readStorage = async ({ key }: NextServerReadParams): Promise<unknown> => {
    const { data } = await axios.get(`/api/storage/${key}`)
    return JSON.parse(data)
}

export const deleteStorage = async ({ key }: NextServerDeleteParams) => {
    await axios.delete(`/api/storage/${key}`)
}
