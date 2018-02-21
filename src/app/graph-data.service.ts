import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import { environment } from '../environments/environment';


@Injectable()
export class GraphDataService {

  constructor(private http: HttpClient) { }

  public getEnvInstanceCount(): Observable<any> {
    return this.http.get(environment.apiInstanceCountURL, {headers: { 'Content-Type': 'application/json' ,  'Access-Control-Allow-Origin' : '*' }});
    //    return this.http.get(environment.apiInstanceCountURL, {headers: { 'Content-Type': 'application/json' ,  'Access-Control-Allow-Origin' : '*' }});
  }
  
  public getInstanceStateData(): Observable<any> {
    return this.http.get(environment.apiStateURL, {headers: { 'Content-Type': 'application/json' ,  'Access-Control-Allow-Origin' : '*' }});
  }
  
  public getInstanceTypeCount(): Observable<any> {
    return this.http.get(environment.apiTypeCountURL, {headers: { 'Content-Type': 'application/json' ,  'Access-Control-Allow-Origin' : '*' }});
  }
  
  public getInstanceDetails(): Observable<any> {
    return this.http.get(environment.apiInstanceDetailsURL, {headers: { 'Content-Type': 'application/json' ,  'Access-Control-Allow-Origin' : '*' }});
  }

}
