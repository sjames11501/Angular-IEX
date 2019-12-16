import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StocksByCategoryComponent } from './stocks-by-category.component';
import { HttpClient } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';
import {FormsModule} from '@angular/forms';
import { HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';

describe('StocksByCategoryComponent', () => {
  let component: StocksByCategoryComponent;
  let fixture: ComponentFixture<StocksByCategoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StocksByCategoryComponent ],
      imports: [ RouterTestingModule.withRoutes([]),
      FormsModule,
      HttpClientTestingModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StocksByCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

});
