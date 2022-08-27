import { Component, ElementRef, ViewChild } from '@angular/core';
import { GifsService } from '../services/gifs.service';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styles: [
  ]
})
export class BuscadorComponent {

  @ViewChild('busqueda') busqueda!: ElementRef<HTMLInputElement>
  
  constructor(private gifsService: GifsService) { }

  buscar() {
    const valor: string = this.busqueda.nativeElement.value.trim().toLocaleLowerCase();
    this.gifsService.buscarGifs(valor);
    if(valor.length===0) {
      return;
    }
    this.busqueda.nativeElement.value= '';
  }

}
