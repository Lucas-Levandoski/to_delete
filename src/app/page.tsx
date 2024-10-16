'use client';

import { BouncingThreeDotsLoading, DropdownMenu, Row } from "@/components";
import { useOnQuestion } from "@/hooks/on-question";
import { BiCaretDown } from "react-icons/bi";


export default function QuestionAndAnswers() {
  const { 
    isFacetsLoading,
    rows, 
    question,
    onTyping,
    onSubmit,
    onChangeCheck,
    checkedClient,
    clients,
    checkedDeliveryType,
    deliveryTypes,
    checkedDivision,
    divisions,
    checkedMarketType,
    marketTypes,
  } = useOnQuestion();

  return (
    <div className="flex flex-col gap-6 w-full h-screen p-6 overflow-hidden">
      <form onSubmit={onSubmit} className="flex gap-6 z-10">
        <div className="flex flex-col w-full gap-4">
          <label htmlFor="question" className="text-lg font-bold">Question</label>
          <textarea 
            contentEditable
            placeholder="Wire your question here"
            className="border h-[44px] rounded-lg border-blue-700 px-6 py-2 placeholder:text-blue-700  focus-visible:border-blue-700 outline-none"
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
              <span className="flex h-[44px] w-40 relative text-nowrap rounded-lg border border-blue-700 text-blue-700 m-auto justify-between items-center px-6 py-2">
                Client {checkedClient.length ? checkedClient.length : ''}
                <BiCaretDown className="absolute right-1"/>
              </span>
            }>
              <div className="flex flex-col">
                {
                  isFacetsLoading 
                    ? <BouncingThreeDotsLoading />
                    : clients.map(client => (
                        <label
                          key={client}
                          className="flex w-fit gap-2 bg-sl"
                        >
                          <input
                            type="checkbox"
                            value={client}
                            checked={checkedClient.includes(client)}
                            onChange={() => onChangeCheck('client', client)}
                          />
                          {client}
                        </label>
                    ))
                }
              </div>
            </DropdownMenu>
            <DropdownMenu buttonContent={
              <span className="flex h-[44px] w-40 relative text-nowrap rounded-lg border border-blue-700 text-blue-700  m-auto justify-between items-center px-6 py-2">
                Delivery Type {checkedDeliveryType.length ? checkedDeliveryType.length : ''}
                <BiCaretDown className="absolute right-1"/>
              </span>
            }>
              <div className="flex flex-col">
                {
                  isFacetsLoading 
                    ? <BouncingThreeDotsLoading />
                    :deliveryTypes.map(type => (
                      <label
                        key={type}
                        className="flex w-full gap-2"
                      >
                        <input 
                          type="checkbox"
                          value={type}
                          checked={checkedDeliveryType.includes(type)}
                          onChange={() => onChangeCheck('deliveryType', type)}
                        />
                        {type}
                      </label>
                    ))
                }
              </div>
            </DropdownMenu>
            <DropdownMenu buttonContent={
              <span className="flex h-[44px] w-40 relative text-nowrap rounded-lg border border-blue-700 text-blue-700 m-auto justify-between items-center px-6 py-2">
                Division {checkedDivision.length ? checkedDivision.length : ''}
                <BiCaretDown className="absolute right-1"/>
              </span>
            }>
              <div className="flex flex-col">
                {
                  
                  isFacetsLoading 
                    ? <BouncingThreeDotsLoading />
                    : divisions.map(division => (
                      <label
                        key={division}
                        className="flex w-full gap-2"
                      >
                        <input 
                          type="checkbox"
                          value={division}
                          checked={checkedDivision.includes(division)}
                          onChange={() => onChangeCheck('division', division)}
                        />
                        {division}
                      </label>
                    ))
                }
              </div>
            </DropdownMenu>
            <DropdownMenu buttonContent={
              <span className="flex h-[44px] w-40 relative text-nowrap rounded-lg border border-blue-700 text-blue-700 m-auto justify-between items-center px-6 py-2">
                Market Types {checkedMarketType.length ? checkedMarketType.length : ''}
                <BiCaretDown className="absolute right-1"/>
              </span>
            }>
              <div className="flex flex-col">
                {marketTypes.map(type => (
                  <label
                    key={type}  
                    className="flex w-full gap-2"
                  >
                    <input 
                      type="checkbox"
                      value={type}
                      checked={checkedMarketType.includes(type)}
                      onChange={() => onChangeCheck('marketType', type)}
                    />
                    {type}
                  </label>
                ))}
              </div>
            </DropdownMenu>
            <button type="submit" className="h-[44px] rounded-lg bg-blue-700 text-white py-2 px-6 mt-auto mb-0 border border-blue-700">Submit</button>
          </div>
        </div>
      </form>

      <div className="h-full overflow-auto pr-1">
        <div className="grid grid-cols-5 gap-6">
          <b className="col-span-2 text-lg">Question</b>
          <b className="col-span-3 text-lg">Answer</b>
        </div>
        <div className="flex flex-col w-full h-full gap-5">
          {rows.map(row => <Row key={`row-element-${row.id}`} rowInput={row} />)}
        </div>
      </div>
    </div>
  );
}
