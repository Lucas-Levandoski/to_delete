import { IFilters, IRowData } from "@/models";
import { readFacets } from "@/services";
import { ChangeEvent, useEffect, useState } from "react"



export function useOnQuestion() {
  const [rows, setRows] = useState<IRowData[]>([]);
  const [question, setQuestion] = useState('');
  const [checkedDivision, setCheckedDivision] = useState<string[]>([])
  const [divisions, setDivisions] = useState<string[]>([])
  const [checkedDeliveryType, setCheckedDeliveryType] = useState<string[]>([])
  const [deliveryTypes, setDeliveryTypes] = useState<string[]>([])
  const [checkedMarketType, setCheckedMarketType] = useState<string[]>([])
  const [marketTypes, setMarketTypes] = useState<string[]>([])
  const [checkedClient, setCheckedClient] = useState<string[]>([])
  const [clients, setClients] = useState<string[]>([])

  useEffect(() => {
    getFacets();
  }, []);

  const getFacets = async() => {
    const facets = await readFacets({client: checkedClient, deliveryType: checkedDeliveryType, division: checkedDivision, marketType: checkedMarketType});

    if(!facets) {
      setDivisions([])
      setDeliveryTypes([])
      setMarketTypes([])
      setClients([])

      return;
    };

    setClients(facets.Client.map(client => client.value))
    setMarketTypes(facets.MarketType.map(marketType => marketType.value))
    setDeliveryTypes(facets.DeliveryType.map(deliveryType => deliveryType.value))
    setDivisions(facets.Division.map(division => division.value))
  };

  const onTyping = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setQuestion(event.target.value)
  }

  const onSubmit = (event:  ChangeEvent<HTMLFormElement>) => {
    event.preventDefault();

    if(question.length === 0) return;

    setRows([...rows, { question, filters: {
      division: checkedDivision,
      deliveryType: checkedDeliveryType,
      marketType: checkedMarketType,
      client: checkedClient,
    } }])

    setQuestion('');
  }

  const onChangeCheck = (target: keyof IFilters , value: string) => {
    switch(target) {
      case 'division':
        return setCheckedDivision(onToggleCheck(checkedDivision, value));
      case 'deliveryType':
        return setCheckedDeliveryType(onToggleCheck(checkedDeliveryType, value));
      case 'marketType':
        return setCheckedMarketType(onToggleCheck(checkedMarketType, value));
      case 'client':
        return setCheckedClient(onToggleCheck(checkedClient, value));
    }
  }

  const onToggleCheck = (arr: string[], value: string) => {
    if(arr.includes(value)) return arr.filter((val) => val !== value);

    return [...arr, value];
  }


  return {
    rows,
    question,
    checkedDivision,
    divisions,
    checkedDeliveryType,
    deliveryTypes,
    checkedMarketType,
    marketTypes,
    checkedClient,
    clients,
    onTyping,
    onSubmit,
    onChangeCheck
  }
}