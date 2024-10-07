import { IFilters, IRowData } from "@/models";
import axios from "axios";

const client = axios.create({ baseURL: 'https://6703ebf8ab8a8f89273234c4.mockapi.io/qa' })

export async function onQuestion(question: string, filters?: IFilters): Promise<IRowData | void> {
  return await client.post<IRowData>('question', {question, filters})
    .then(res => res.data)
    .catch(console.error)
}