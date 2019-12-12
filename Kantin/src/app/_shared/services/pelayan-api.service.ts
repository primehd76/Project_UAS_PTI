import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Kantin, KantinDetail } from '../models/Kantin';

@Injectable({
  providedIn: 'root'
})
export class PelayanApiService {
  
  private urlAPI = 'https://umn-pti2019.herokuapp.com';

  constructor(
    private http: HttpClient
  ) { }

  getAllKantin(): Observable<Kantin>{
    return this.http.get<Kantin>(`${this.urlAPI}/api/kantin`);
  }

  getKantinById(id: string): Observable<KantinDetail>{
    return this.http.get<KantinDetail>(`${this.urlAPI}/api/kantin/${id}`);
  }
}
