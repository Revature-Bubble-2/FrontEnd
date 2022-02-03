import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ResetserviceService {

  email: string = "";

  constructor(private http: HttpClient) { 
    }

    resetPassword(email: string ): Observable<any> {
      return this.http.post(environment.url+'/resetpassword', email,
      {observe: 'response'});

  }
    
}
