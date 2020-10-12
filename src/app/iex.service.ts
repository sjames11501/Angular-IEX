import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ResponseIexProfile } from './interfaces.iex';
import { ResponseIexTops } from './interfaces.iex';
import { iexEndPointType } from './iex.endpoints';

@Injectable({
  providedIn: 'root'
})
export class IexService {
  private token = 'REMOVED';


  constructor(private httpClient: HttpClient) { }

  private getApiUrl(symbol: any, endPointType: iexEndPointType) {
    let thisURL: any = endPointType;
    thisURL = thisURL.replace('{symbol}', symbol);
    thisURL = thisURL.replace('{token}', this.token);
    return thisURL;
  }

  public getIexKeyStats(symbol) {
    const url: any = this.getApiUrl(symbol, iexEndPointType.keyStats);
    return this.httpClient.get(url);
  }

  public getProfile(symbol) {
    const url: any = this.getApiUrl(symbol, iexEndPointType.profile);
    return this.httpClient.get(url);
  }
  public getTops(symbol) {
    const url: any = this.getApiUrl(symbol, iexEndPointType.tops);
    console.log(url);
    return this.httpClient.get(url);
  }

  public getIexPrevious(symbol) {
    const url: any = this.getApiUrl(symbol, iexEndPointType.previous);
    console.log(url);
    return this.httpClient.get(url);

  }

}

