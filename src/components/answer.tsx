import { IFilters } from "@/models";
import { twMerge } from "tailwind-merge";

type props = {
  answer: string;
  filters: IFilters;
  onError?: boolean;
}


export function Answer({ answer, onError, filters }: props) {
  const groupedFilters = [...filters.buildings, ...filters.contractTypes, ...filters.regions];

  return (
    <div className="flex flex-col gap-1 justify-end">
      <div className={twMerge('px-5 py-2 rounded-lg bg-blue-200', onError && 'bg-red-200')}>
        {answer}
      </div>
      { 
        groupedFilters.length
          ? (
            <div className="flex flex-wrap justify-end w-full items-center gap-4">
              Filters: {groupedFilters.map(element => (
                <span className="px-2 py-1 rounded-md bg-slate-200" key={element}>{element}</span>
              ))}
            </div>  
          )
          : <></>
      }
    </div>
  )
}