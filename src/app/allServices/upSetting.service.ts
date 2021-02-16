import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { environment } from 'src/environments/environment';
import { Upsetting } from "../allModel/upsetting.model";
import { Observable } from 'rxjs';
import { Centry } from '../allModel/centry.model';



@Injectable({
  providedIn: 'root'
})
export class UpSettingService {
  

  constructor(
    private http : HttpClient
    ) { }
    

    getUpSettingData(): Observable<Upsetting> {

      return this.http.get<Upsetting>(`${environment.url_base}setting/getup`);
    }

    getCertificateByCerId(typedID: any):Observable<Centry> {
      return this.http.get<Centry>(`${environment.url_base}certificate_entry/search_id/${typedID}`)
    }
}
