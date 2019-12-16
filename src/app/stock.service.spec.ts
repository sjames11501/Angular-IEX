import { TestBed } from '@angular/core/testing';
import { Stock } from './Stock';
import { STOCKS } from './stocks-list';
import { StockService } from './stock.service';
import { HttpClient } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';

describe('StockService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: StockService = TestBed.get(StockService);
    expect(service).toBeTruthy();
  });


    ///////////
  it('should have default stocks list', () => {
    const service: StockService = TestBed.get(StockService);
    const stocks: Stock[] = service.getAllStocks();
    expect(stocks.length).toBeGreaterThanOrEqual(1);
  });


  ///////////
  it('should have stock interface', () => {
    let stock: Stock;
    stock = {
        id: 111,
        symbol: 'aapl',
        name: 'Apple',
       category: 'tech'
    };
    expect(stock.id).toEqual(111);
    expect(stock.symbol).toEqual('aapl');
    expect(stock.category).toEqual('tech');
});
  ///////////

});
