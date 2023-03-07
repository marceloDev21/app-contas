import { Injectable } from '@angular/core';
import { Imposto } from './imposto';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ConsultarService {
  constructor(private http: HttpClient) {}

  getImpostos() {
    return this.http.get<any>('assets/impostos.json').toPromise()
    .then(res => <Imposto[]>res.data)
    .then(data => { return data; });
  }
}
