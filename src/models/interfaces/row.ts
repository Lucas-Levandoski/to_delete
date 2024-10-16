import { IFilters } from "./filters";

export interface IRowData {
  question: string;
  filters: IFilters;
  id?: number;
  answer?: string;
}