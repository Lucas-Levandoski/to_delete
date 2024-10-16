interface IFacet {
  count: number;
  value: string;
}

export interface IFacets {
  Client: IFacet[];
  Division: IFacet[];
  DeliveryType: IFacet[];
  MarketType: IFacet[];
}