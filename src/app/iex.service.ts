import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ResponseIexProfile } from './interfaces.iex';
import { ResponseIexTops } from './interfaces.iex';

@Injectable({
  providedIn: 'root'
})
export class IexService {
  private token = 'pk_985dc1b2080147c2948e4bd7acb90602';


  // endpoint urls//
  public profileURL = 'https://cloud.iexapis.com/stable/stock/{symbol}/company{token}';
  public iexPreviousURL = 'https://cloud.iexapis.com/stable/stock/{symbol}/previous{token}';
  public topsURL = 'https://cloud.iexapis.com/stable/tops?symbols=';
  ////////////////////
  private tokenSuffix = '&token=' + this.token;
  private topsResponse: Observable<ResponseIexTops>;

  constructor(private httpClient: HttpClient) { }



  public getProfile(symbol) {

    let thisURL: any;
    thisURL = this.profileURL;
    thisURL = thisURL.replace('{symbol}', symbol);
    thisURL = thisURL.replace('{token}', this.tokenSuffix);
    thisURL = thisURL.replace('&', '?');

    return   this.httpClient.get(thisURL);
  
  }
  public getTops(symbol) {

    return this.httpClient.get(this.topsURL + symbol + this.tokenSuffix);
  }

  public getIexPrevious(symbol) {

    let thisURL: any;
    thisURL = this.iexPreviousURL;
    thisURL = thisURL.replace('{symbol}', symbol);
    thisURL = thisURL.replace('{token}', this.tokenSuffix);
    thisURL = thisURL.replace('&', '?');
    return this.httpClient.get(thisURL);

  }

}

