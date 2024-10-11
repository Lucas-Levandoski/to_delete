'use client';

import { DropdownMenu, Row } from "@/components";
import { useOnQuestion } from "@/hooks/on-question";
import { BiCaretDown } from "react-icons/bi";


export default function QuestionAndAnswers() {
  const { 
    rows, 
    question,
    onTyping,
    onSubmit,
    onChangeCheck,
    checkedBuildings,
    buildingTypes,
    checkedContracts,
    contractTypes,
    checkedRegions,
    regions,
  } = useOnQuestion();

  return (
    <div className="flex flex-col gap-6 w-full h-full p-6">
      <form onSubmit={onSubmit} className="flex gap-6">
        <div className="flex flex-col w-full gap-4">
          <label htmlFor="question" className="text-lg font-bold">Question</label>
          <textarea 
            contentEditable
            placeholder="Wire your question here"
            className="border rounded-lg border-blue-700 px-6 py-2 placeholder:text-blue-700 min-h-[44px] focus-visible:border-blue-700 outline-none"
            id="question"
            onChange={onTyping}
            value={question}
          />
        </div>
        <div className="flex flex-col gap-4">
          <div>
            <label htmlFor="filters" className="text-lg font-bold">Filters</label>
          </div>
          <div id="filters" className="flex gap-6">
            <DropdownMenu buttonContent={
              <span className="flex relative text-nowrap rounded-lg border border-blue-700 text-blue-700 m-auto justify-between items-center px-6 py-2">
                Building {checkedBuildings.length ? checkedBuildings.length : ''}
                <BiCaretDown className="absolute right-1"/>
              </span>
            }>
              <div className="flex flex-col">
                {buildingTypes.map(type => (
                  <label
                    key={type}
                    className="flex w-full justify-around"
                  >
                    <input 
                      type="checkbox"
                      value={type}
                      checked={checkedBuildings.includes(type)}
                      onChange={() => onChangeCheck('buildings', type)}
                    />
                    {type}
                  </label>
                ))}
              </div>
            </DropdownMenu>
            <DropdownMenu buttonContent={
              <span className="flex relative text-nowrap rounded-lg border border-blue-700 text-blue-700 m-auto justify-between items-center px-6 py-2">
                Contract {checkedContracts.length ? checkedContracts.length : ''}
                <BiCaretDown className="absolute right-1"/>
              </span>
            }>
              <div className="flex flex-col">
                {contractTypes.map(type => (
                  <label
                    key={type}
                    className="flex w-full justify-around"
                  >
                    <input 
                      type="checkbox"
                      value={type}
                      checked={checkedContracts.includes(type)}
                      onChange={() => onChangeCheck('contracts', type)}
                    />
                    {type}
                  </label>
                ))}
              </div>
            </DropdownMenu>
            <DropdownMenu buttonContent={
              <span className="flex relative text-nowrap rounded-lg border border-blue-700 text-blue-700 m-auto justify-between items-center px-6 py-2">
                Region {checkedRegions.length ? checkedRegions.length : ''}
                <BiCaretDown className="absolute right-1"/>
              </span>
            }>
              <div className="flex flex-col">
                {regions.map(region => (
                  <label
                    key={region}
                    className="flex w-full justify-around"
                  >
                    <input 
                      type="checkbox"
                      value={region}
                      checked={checkedRegions.includes(region)}
                      onChange={() => onChangeCheck('regions', region)}
                    />
                    {region}
                  </label>
                ))}
              </div>
            </DropdownMenu>
          </div>
        </div>
        <button type="submit" className="rounded-lg bg-blue-700 text-white py-2 px-6 mt-auto mb-2">Submit</button>
      </form>

      <div className="grid grid-cols-5 gap-6">
        <b className="col-span-2 text-lg">Question</b>
        <b className="col-span-3 text-lg">Answer</b>
      </div>
      <div className="flex flex-col w-full h-full gap-5 overflow-auto">
        {rows.map((row, i) => <Row key={`row-element-${i}`} rowInput={row} />)}
      </div>
    </div>
  );
}
