import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import { environment } from '../environments/environment';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class GraphDataService {

  constructor(private http: HttpClient) { }

  public getData(): Observable<any> {
    return this.http.get(environment.apiURL, {responseType: 'json'});
  }

}
