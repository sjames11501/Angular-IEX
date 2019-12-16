export enum iexEndPointType {
    keyStats = 'https://cloud.iexapis.com/stock/{symbol}/stats?token={token}',
    profile = 'https://cloud.iexapis.com/stable/stock/{symbol}/company?token={token}',
    tops = 'https://cloud.iexapis.com/stable/tops?symbols={symbol}&token={token}',
    previous = 'https://cloud.iexapis.com/stable/stock/{symbol}/previous?token={token}'
}

