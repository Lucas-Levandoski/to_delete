import { IFilters, IRowData } from "@/models";
import axios from "axios";

const client = axios.create({ baseURL: 'https://funckmpqq2z5yen.azurewebsites.net/api' })

export async function onQuestion(question: string, filters?: IFilters): Promise<IRowData | void> {
  return await client.post<IRowData>('getAnswer', {question, filters})
    .then(res => res.data)
    .catch(console.error)
}

export async function onFacets({ client, deliveryType, division, marketType }: IFilters) {
  // return await client.post<IFilters>()
}