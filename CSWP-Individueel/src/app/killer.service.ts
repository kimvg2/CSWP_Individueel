import { Injectable } from '@angular/core';
import { Killer } from './server/models/killer'
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class KillerService {

  killers: Killer[];

  constructor(private http: HttpClient) {}

  public getKillers(): Observable<Killer[]> {
    return this.http.get<Killer[]>('http://localhost:4200/killers');
  }

  getKiller(id: number): any {
    return this.killers[id];
  }

}
