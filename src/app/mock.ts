// Mock iex responses:

import { ResponseIexProfile } from './interfaces.iex';
import { ResponseIexTops } from './interfaces.iex';


export const mockResponseIexTops: ResponseIexTops = {
  'symbol': 'SNAP',
  'bidSize': 200,
  'bidPrice': 110.94,
  'askSize': 100,
  'askPrice': 111.82,
  'volume': 177265,
  'lastSalePrice': 111.76,
  'lastSaleSize': 5,
  'lastSaleTime': 1480446905681,
  'lastUpdated': 1480446910557,
  'sector': 'softwareservices',
  'securityType': 'commonstock'
};
export const mockResponseIexKeyStats: any = {
  'companyName': 'Apple Inc.',
  'marketcap': 760334287200,
  'week52high': 156.65,
  'week52low': 93.63,
  'week52change': 58.801903,
  'sharesOutstanding': 5213840000,
  'float': 5203997571,
  'avg10Volume': 2774000,
  'avg30Volume': 12774000,
  'day200MovingAvg': 140.60541,
  'day50MovingAvg': 156.49678,
  'employees': 120000,
  'ttmEPS': 16.5,
  'ttmDividendRate': 2.25,
  'dividendYield': .021,
  'nextDividendDate': '2019-03-01',
  'exDividendDate': '2019-02-08',
  'nextEarningsDate': '2019-01-01',
  'peRatio': 14,
  'beta': 1.25,
  'maxChangePercent': 153.021,
  'year5ChangePercent': 0.5902546932200027,
  'year2ChangePercent': 0.3777449874142869,
  'year1ChangePercent': 0.39751716851558366,
  'ytdChangePercent': 0.36659492036160124,
  'month6ChangePercent': 0.12208398133748043,
  'month3ChangePercent': 0.08466584665846649,
  'month1ChangePercent': 0.009668596145283263,
  'day30ChangePercent': -0.002762605699968781,
  'day5ChangePercent': -0.005762605699968781
};

export const mockResponseIexProfile: any = {
  'symbol': 'AAPL',
  'companyName': 'Apple Inc.',
  'exchange': 'NASDAQ',
  'industry': 'Telecommunications Equipment',
  'website': 'http://www.apple.com',
  'description': 'Apple, Inc. engages in the design, manufacture, and marketing of mobile communication, media devices, personal computers, and portable digital music players. It operates through the following geographical segments: Americas, Europe, Greater China, Japan, and Rest of Asia Pacific. The Americas segment includes North and South America. The Europe segment consists of European countries, as well as India, the Middle East, and Africa. The Greater China segment comprises of China, Hong Kong, and Taiwan. The Rest of Asia Pacific segment includes Australia and Asian countries. The company was founded by Steven Paul Jobs, Ronald Gerald Wayne, and Stephen G. Wozniak on April 1, 1976 and is headquartered in Cupertino, CA.',
  'CEO': 'Timothy Donald Cook',
  'securityName': 'Apple Inc.',
  'issueType': 'cs',
  'sector': 'Electronic Technology',
  'primarySicCode': 3663,
  'employees': 132000,
  'tags': [
    'Electronic Technology',
    'Telecommunications Equipment'
  ],
  'address': 'One Apple Park Way',
  'address2': null,
  'state': 'CA',
  'city': 'Cupertino',
  'zip': '95014-2083',
  'country': 'US',
  'phone': '1.408.974.3123'
};

