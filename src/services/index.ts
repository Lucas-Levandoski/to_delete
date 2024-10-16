import { IFacets, IFilters, IRowData } from "@/models";
import axios from "axios";

const faClient = axios.create({ baseURL: 'https://funckmpqq2z5yen.azurewebsites.net/api' })
const searchClient = axios.create({ baseURL: 'https://sekmadm2z5yencx4yqodq.search.windows.net/indexes', headers: { 'api-key': process.env.COG_SEARCH_KEY} })

export async function onQuestion(question: string, filters?: IFilters): Promise<IRowData | void> {
  return await faClient.post<IRowData>('getAnswer', {question, filters})
    .then(res => res.data)
    .catch(console.error)
}

export async function readFacets({ client, deliveryType, division, marketType }: IFilters): Promise<IFacets | void> {
  const facets = [
    'Client',
    'DeliveryType',
    'Division',
    'MarketType',
  ];

  return await faClient.post<IFacets>('getFacets', { fieldNames: facets } ).then(res => res.data);

  return await searchClient.post<{ "@search.facets": IFacets}>('pqq/docs/search?api-version=2020-06-30', { facets })
    .then(res => res.data["@search.facets"])
    .catch(console.error);

  // const clientFilter = client.length > 0 ? `Client/any(c: c eq '${client.join("' and c eq '")}')` : '';
  // const deliveryTypeFilter = deliveryType.length > 0 ? `DeliveryType/any(d: d eq '${deliveryType.join("' and d eq '")}')` : '';
  // const divisionFilter = division.length > 0 ? `Division/any(d: d eq '${division.join("' and d eq '")}')` : '';
  // const marketTypeFilter = marketType.length > 0 ? `MarketType/any(m: m eq '${marketType.join("' and m eq '")}')` : '';
}