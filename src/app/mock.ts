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

