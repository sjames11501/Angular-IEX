import { Component, OnInit } from '@angular/core';
import { StockService } from '../stock.service';
import { IexService } from '../iex.service';
import { Stock } from '../Stock';
import { Observable } from 'rxjs';
import { ResponseIexTops, ResponseIexProfile, ResponseIexPrevious } from '../interfaces.iex';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public inputIexTopsSymbol: '';
  public inputIexPreviousSymbol: '';
  public inputIexProfileSymbol: '';
  public topsResponse: any;

  public iexProfileResponse: any;
  public iexPreviousResponse: any;

  public showTopsError = false;
  public errorMsgTops: any = 'Unexpected error. The IEX API responded with empty data. After-Market hours?';
  constructor(

    private iexService: IexService,
  ) { }

  ngOnInit() {
  }


  getIexPrevious() {
    const symbol = this.inputIexPreviousSymbol;
    if (symbol != null) {
      if (symbol.length !== 0) {
        this.iexService.getIexPrevious(symbol).subscribe((res: any) => {
          console.log(res);
          this.iexPreviousResponse = res;
        });
      }
    }
  }
  //////////////////////////////////////////////
  getIexProfile() {
    const symbol = this.inputIexProfileSymbol;
    if (symbol != null) {
      if (symbol.length !== 0) {

        this.iexService.getProfile(symbol).subscribe((res: any) => {
       
          this.iexProfileResponse = res;
        });

      }
    }

  }

  //////////////////////////////////////////////

  getIexTops() {
    const symbol = this.inputIexTopsSymbol;
    if (symbol != null) {
      if (symbol.length !== 0) {

        this.iexService.getTops(symbol).subscribe((res: ResponseIexTops) => {


          if (res.symbol) {
            this.showTopsError = false;
            console.log(res);
            this.topsResponse = res[0];
          } else {
            this.showTopsError = true;
          }
        });

      }
    }

  }
}








