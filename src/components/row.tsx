import { IRowData } from "@/models";
import { Answer } from "./answer";
import { Question } from "./question";
import { useOnAnswer } from "@/hooks/on-answer";
import { BouncingThreeDotsLoading } from "./bouncing-three-dots";

type props = {
  rowInput: IRowData;
}

export function Row({ rowInput }: props) {
  const { row, isLoading } = useOnAnswer({ question: rowInput.question, filters: rowInput.filters });

  return (
    <div className="grid grid-cols-5 w-full gap-6">
      <div className="col-span-2">
        <Question question={row.question}/>
      </div>

      <div className="col-span-3">
        {
          isLoading
            ? <BouncingThreeDotsLoading />
            : <Answer answer={row.answer ?? 'Error on loading your answer'} onError={!row.answer} filters={row.filters} />
        }
      </div>
    </div>
  )
}