import { Component } from '@angular/core';
import { GifsService } from 'src/app/gifs/services/gifs.service';

@Component({
  selector: 'app-siderbar',
  templateUrl: './siderbar.component.html',
  styles: [
  ]
})
export class SiderbarComponent {

  constructor(private gifsService: GifsService) { }

  get historiales (){
    return this.gifsService.listaHistorial;
  }

  buscar(busqueda: string) {
    this.gifsService.buscarGifs(busqueda);
  }

}
