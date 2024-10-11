import { IRowData } from "@/models";
import { ChangeEvent, useEffect, useState } from "react"



export function useOnQuestion() {
  const [rows, setRows] = useState<IRowData[]>([]);
  const [question, setQuestion] = useState('');
  const [checkedBuildings, setCheckedBuildings] = useState<string[]>([])
  const [buildingTypes, setBuildingTypes] = useState<string[]>([])
  const [checkedContracts, setCheckedContracts] = useState<string[]>([])
  const [contractTypes, setContractTypes] = useState<string[]>([])
  const [checkedRegions, setCheckedRegions] = useState<string[]>([])
  const [regions, setRegions] = useState<string[]>([])

  useEffect(() => {
    getFacets();
  }, []);

  const getFacets = async() => {
    setBuildingTypes(['school', 'something'])
    setContractTypes(['contract1', 'contract2'])
    setRegions(['south', 'north'])
  };

  const onTyping = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setQuestion(event.target.value)
  }

  const onSubmit = (event:  ChangeEvent<HTMLFormElement>) => {
    event.preventDefault();

    if(question.length === 0) return;

    setRows([...rows, { question, filters: {
      buildings: checkedBuildings,
      contractTypes: checkedContracts,
      regions: checkedRegions
    } }])

    setQuestion('');
  }

  const onChangeCheck = (target: 'buildings' | 'contracts' | 'regions', value: string) => {
    switch(target) {
      case 'buildings':
        return setCheckedBuildings(onToggleCheck(checkedBuildings, value));
      case 'contracts':
        return setCheckedContracts(onToggleCheck(checkedContracts, value));
      case 'regions':
        return setCheckedRegions(onToggleCheck(checkedRegions, value));
    }
  }

  const onToggleCheck = (arr: string[], value: string) => {
    if(arr.includes(value)) return arr.filter((val) => val !== value);

    return [...arr, value];
  }


  return {
    rows,
    question,
    checkedBuildings,
    buildingTypes,
    checkedContracts,
    contractTypes,
    checkedRegions,
    regions,
    onTyping,
    onSubmit,
    onChangeCheck
  }
}