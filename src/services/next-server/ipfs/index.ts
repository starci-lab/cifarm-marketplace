import axios from "axios"

export interface NextServerUploadJsonParams {
  jsonString: string;
}

export const uploadJson = async (params: NextServerUploadJsonParams) : Promise<string> => {
    const { data } = await axios.post("/api/ipfs", params)
    return data
}
