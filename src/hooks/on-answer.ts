import { IFilters, IRowData } from "@/models";
import { onQuestion } from "@/services";
import { useEffect, useState } from "react"

type props = {
  question: string;
  filters: IFilters;
}

export function useOnAnswer({ question, filters }: props) {
  const [isLoading, setIsLoading] = useState(true);
  const [row, setRow] = useState<IRowData>({ question, filters })

  useEffect(() => {
    onQuestion(question, filters)
      .then(res => {
        if(res) 
          setRow({ ... row, answer: res.answer, filters: res.filters });
      })
      .finally(() => setIsLoading(false));
  }, []);

  return {
    isLoading,
    row,
  }
}