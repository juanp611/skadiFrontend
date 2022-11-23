import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class PlantillaService {
  apiUri = '/api/plantilla';
  httpOptions = new HttpHeaders().set('Content-Type', 'application/json');
  constructor(private http: HttpClient) {

  }
  getAllplantillaData(): Observable<any> {
    return this.http.get<any>(this.apiUri)
  }
  newPlantilla(data: any): Observable<any> {
    return this.http.post<any>(
      this.apiUri,
      data,
      { headers: this.httpOptions });
  }
  updatePlantilla(id: any, data: any): Observable<any> {
    console.log(data)
    return this.http.put<any>(
      this.apiUri + '/' + id,
      data,
      { headers: this.httpOptions });
  }
  deletePlantilla(id: any) {
    return this.http.delete<any>(
      this.apiUri + "/" + id,
      { headers: this.httpOptions });
  }
}
