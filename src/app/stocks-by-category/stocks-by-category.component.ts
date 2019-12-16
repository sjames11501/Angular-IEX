import { Component, OnInit } from '@angular/core';
import { StockService } from '../stock.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { Stock } from '../Stock';
import { Observable } from 'rxjs/internal/Observable';


@Component({
  selector: 'app-stocks-by-category',
  templateUrl: '../../shared/stocks-by-category.html'
})
export class StocksByCategoryComponent implements OnInit {

public stocks: Stock[];
public category: any;
  constructor(

    private route: ActivatedRoute,
    private router: Router,
    private service: StockService,
  ) { }





  ngOnInit() {



    this.route.paramMap.subscribe(params => {
      this.stocks = this.service.getStocksByCategory(params.get('category'));
      this.category = params.get('category');
      if (params.get('category') != null) {
        this.category = params.get('category');
        this.category = this.category.replace(/-/g, ' ');
        this.category = this.category.charAt(0).toUpperCase() + this.category.substring(1);
      }
      
    });



  }



}

