import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { StocksByCategoryComponent } from './stocks-by-category/stocks-by-category.component';
import { StockDetailsComponent } from './stock-details/stock-details.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'stocks-by-category/:category', component: StocksByCategoryComponent },
  { path: 'stock-details/:symbol', component: StockDetailsComponent },
  { path: '',   redirectTo: '/home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
