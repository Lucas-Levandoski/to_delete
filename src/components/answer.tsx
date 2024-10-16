import { IFilters } from "@/models";
import { BiRefresh } from "react-icons/bi";
import { twMerge } from "tailwind-merge";
import { Remarkable } from 'remarkable';

type props = {
  answer: string;
  filters: IFilters;
  onError?: boolean;
  onRetry?: () => void;
}

const md = new Remarkable({
  breaks: true,
})

export function Answer({ answer, onError, filters, onRetry = () => {} }: props) {
  const groupedFilters = [...filters.client, ...filters.deliveryType, ...filters.division, ...filters.marketType];

  return (
    <div className="flex flex-col gap-1 justify-end">
      <div className={twMerge('px-5 py-2 rounded-lg bg-blue-200 relative', onError && 'bg-red-200')}>
        <div dangerouslySetInnerHTML={{ __html: md.render(answer) }} />
        {
          onError && <BiRefresh className="size-8 absolute right-0 bottom-0 cursor-pointer" onClick={() => onRetry()} />
        }
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