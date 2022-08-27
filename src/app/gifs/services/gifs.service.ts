import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Gif, GifsResponse } from '../interfaces/gifs.interfaces';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GifsService {

  private llave: string = 'WLcT4QYi3IwREuXV8e1tdaMrLMIXJJBi';

  private url: string = 'https://api.giphy.com/v1/gifs';

  private gifs: Gif[] = [];

  private historial: string [] = [];

  get listaGifs () {
    return this.gifs;
  }

  get listaHistorial() {
    return this.historial;
  }

  constructor(private http: HttpClient) {
    this.gifs = JSON.parse(localStorage.getItem('resultados')!) || [];
    this.historial = JSON.parse(localStorage.getItem('historial')!) || [];
  }

  buscarGifs(busqueda: string){

    const params = new HttpParams()
    .set('api_key', this.llave)
    .set('q', busqueda)
    .set('limit', '12');


    this.http.get<GifsResponse>(`${this.url}/search`, {params: params})
    .subscribe((resp: GifsResponse)=>{
      this.agregarHistorial(busqueda);
      this.gifs = resp.data;

      console.log(this.gifs);
      localStorage.setItem('resultados', JSON.stringify(this.gifs));
    })
  }

  agregarHistorial(busqueda: string) {
    if(this.historial.includes(busqueda)) {
      this.historial = this.historial.filter(item => item !== busqueda);
      this.historial.unshift(busqueda);
    } else {
      this.historial.unshift(busqueda);
    }
    this.historial = this.historial.splice(0,10);
    localStorage.setItem('historial', JSON.stringify(this.historial));
  }

  buscarGifId(id: string): Observable<Gif> {
    const params = new HttpParams()
    .set('api_key', this.llave)
    .set('ids', id)


    return this.http.get<Gif>(`${this.url}`, {params: params});
  }
}
