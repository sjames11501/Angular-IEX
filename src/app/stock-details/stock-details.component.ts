import { Component, OnInit } from '@angular/core';
import { StockService } from '../stock.service';
import { IexService } from '../iex.service';
import { Stock } from '../Stock';
import { Observable } from 'rxjs';
import { ResponseIexTops, ResponseIexProfile } from '../interfaces.iex';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';



@Component({
  selector: 'app-stock-details',
  templateUrl: './stock-details.component.html',
  styleUrls: ['./stock-details.component.scss']
})
export class StockDetailsComponent implements OnInit {
  public StockProfile: ResponseIexProfile;
  public symbol: string;
  public companyName: string;

  constructor(

    private route: ActivatedRoute,
    private router: Router,
    private service: IexService,
  ) { }


  ngOnInit() {

    this.route.paramMap.subscribe(params => {
      this.symbol = params.get('symbol');
      this.service.getProfile(params.get('symbol')).subscribe((res: any) => {
        console.log(res);
        this.StockProfile = res;

      });



    });
  }

}
