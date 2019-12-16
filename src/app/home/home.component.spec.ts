import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeComponent } from './home.component';
import { Component, OnInit } from '@angular/core';
import { StockService } from '../stock.service';
import { IexService } from '../iex.service';
import { Stock } from '../Stock';
import { Observable } from 'rxjs';
import { RouterTestingModule } from '@angular/router/testing';
import {FormsModule} from '@angular/forms';
import { HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';


describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeComponent ],
      imports: [ RouterTestingModule.withRoutes([]),
      FormsModule,
      HttpClientTestingModule ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
