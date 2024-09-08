import axios from "axios"

export interface UploadJsonParams {
  jsonString: string;
}

export const uploadJson = async (params: UploadJsonParams) : Promise<string> => {
    const { data } = await axios.post("/api/ipfs", params)
    return data
}
