import { Injectable } from '@angular/core';
import { Stock } from './Stock';
import { STOCKS } from './stocks-list';

@Injectable({
  providedIn: 'root'
})


export class StockService {
  private stocks : Stock[];

  getAllStocks() {

    return STOCKS;
  }

  constructor() { }

  getStocksByCategory(category): Stock[] {
    this.stocks = STOCKS;

    let x = this.stocks.filter(xx => xx.category === category);
    console.log(this.stocks);
    return x;

  }


}
