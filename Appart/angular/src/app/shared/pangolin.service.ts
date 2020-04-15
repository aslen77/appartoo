import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// import 'rxjs/add/operator/map';
// import 'rxjs/add/operator/toPromise';

import { Pangolin } from './pangolin.model';
@Injectable({
  providedIn: 'root'
})
export class PangolinService {
selectedPangolin : Pangolin ; 
pangolins: Pangolin[];
readonly baseURL = 'http://localhost:3000/pangolins';
  constructor(public http : HttpClient) { }


postPangolin(pang : Pangolin) {
return this.http.post(this.baseURL , pang);
}

getpangolinList(){ 
  return this.http.get(this.baseURL);
}


deletePangolin(_id: string){ 
  return this.http.delete(this.baseURL + `/${_id}`);
  }

  
}
