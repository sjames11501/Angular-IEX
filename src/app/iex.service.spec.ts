import { TestBed, getTestBed } from '@angular/core/testing';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IexService } from './iex.service';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { ResponseIexProfile } from './interfaces.iex';
import { ResponseIexTops } from './interfaces.iex';
import { mockResponseIexTops } from './mock';
import { mockResponseIexProfile } from './mock';


let testService: IexService;
let responsePropertyNames: any;
let expectedPropertyNames: any;
const iexToken = 'pk_985dc1b2080147c2948e4bd7acb90602';
// endpoint urls//
const iexProfileURL = 'https://cloud.iexapis.com/stable/stock/AAPL/company';
const iexPreviousURL = 'https://cloud.iexapis.com/stable/stock/AAPL/previous{token}';
const iexTopsURL = 'https://cloud.iexapis.com/stable/tops?symbols=SNAP';
const tokenSuffix = '&token=' + iexToken;








describe('iexService', () => {
  let injector: TestBed;
  let service: IexService;
  let httpMock: HttpTestingController;

  //
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [IexService],
      imports: [HttpClientTestingModule]

    });
    //
    injector = getTestBed();
    service = injector.get(IexService);
    httpMock = injector.get(HttpTestingController);






  });
  // end beforeEach

  // Test for getTOPS
  it('should return response from TOPS request', () => {
    service.getTops('SNAP').subscribe(res => {
      console.log(res);

      expect(res).not.toBeNull();
      expect(res).toEqual(mockResponseIexTops);


    });


    const req = httpMock.expectOne(iexTopsURL + tokenSuffix);
    expect(req.request.method).toBe('GET');
 
    req.flush(mockResponseIexTops);
    httpMock.verify();

  });


  // Test for getProfile
  it('should get IEX Profile', () => {
    const tokenFix: any = tokenSuffix.replace('&', '?');
    console.log(mockResponseIexProfile);
    // Our mock data uses AAPL
    service.getProfile('AAPL').subscribe(res => {
  

      expect(res).not.toBeNull();
      expect(res).toEqual(mockResponseIexProfile);


    });
    // tslint:disable-next-line:prefer-const


    const req = httpMock.expectOne(iexProfileURL + tokenFix);
    expect(req.request.method).toBe('GET');
    req.flush(mockResponseIexProfile);
    httpMock.verify();

  });
});





