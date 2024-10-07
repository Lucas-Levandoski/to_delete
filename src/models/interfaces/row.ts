import { IFilters } from "./filters";

export interface IRowData {
  question: string;
  answer?: string;
  filters?: IFilters;
}