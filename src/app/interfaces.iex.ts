export class ResponseIexProfile {
    symbol: string;
    companyName: string;
    exchange: string;
    industry: string;
    website: string;
    description: string;
    CEO: string;
    securityName: string;
    issueType: string;
    sector: string;
    primarySicCode: number;
    employees: number;
    tags?: (string)[] | null;
    address: string;
    address2?: null;
    state: string;
    city: string;
    zip: string;
    country: string;
    phone: string;
}


export class ResponseIexTops {
    symbol: string;
    bidSize: number;
    bidPrice: number;
    askSize: number;
    askPrice: number;
    volume: number;
    lastSalePrice: number;
    lastSaleSize: number;
    lastSaleTime: number;
    lastUpdated: number;
    sector: string;
    securityType: string;
}

export class ResponseIexPrevious {
    date: string;
    open: number;
    close: number;
    high: number;
    low: number;
    volume: number;
    uOpen: number;
    uClose: number;
    uHigh: number;
    uLow: number;
    uVolume: number;
    change: number;
    changePercent: number;
    changeOverTime: number;
    symbol: string;
  }
