'use client';

import { Row } from "@/components";
import { useOnQuestion } from "@/hooks/on-question";
import { BiCaretDown } from "react-icons/bi";


export default function QuestionAndAnswers() {
  const { rows, question, onTyping, onSubmit } = useOnQuestion();

  return (
    <div className="flex flex-col gap-6 w-full h-full p-6">
      <form onSubmit={onSubmit} className="flex gap-6">
        <div className="flex flex-col w-full gap-4">
          <label htmlFor="question" className="text-xl font-bold">Question</label>
          <textarea placeholder="Wire your question here" className="border-2 rounded-lg border-blue-700 px-6 py-2 placeholder:text-blue-700 h-[44px]" id="question" onChange={onTyping} value={question} />
        </div>
        <div className="flex flex-col gap-4">
          <div>
            <label htmlFor="filters" className="text-xl font-bold">Filters</label>
          </div>
          <div id="filters" className="flex gap-6">
            <button type="button" className="flex rounded-lg border-2 border-blue-700 text-blue-700 m-auto justify-between items-center px-6 py-2"><span>Building</span><BiCaretDown /></button>
            <button type="button" className="rounded-lg border-2 border-blue-700 text-blue-700 m-auto flex justify-center items-center px-6 py-2">Contract <BiCaretDown /></button>
            <button type="button" className="rounded-lg border-2 border-blue-700 text-blue-700 m-auto flex justify-center items-center px-6 py-2">Region <BiCaretDown /></button>
          </div>
        </div>
        <button type="submit" className="rounded-lg bg-blue-700 text-white py-2 px-6 mt-auto mb-2">Submit</button>
      </form>

      <div className="grid grid-cols-5 gap-6">
        <b className="col-span-2 text-xl">Question</b>
        <b className="col-span-3 text-xl">Answer</b>
      </div>
      <div className="flex flex-col w-full h-full gap-5">
        {rows.map((row, i) => <Row key={`row-element-${i}`} rowInput={row} />)}
      </div>
    </div>
  );
}
