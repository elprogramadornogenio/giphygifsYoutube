import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageMainComponent } from './page-main/page-main.component';
import { BuscadorComponent } from './buscador/buscador.component';
import { FormsModule } from '@angular/forms';
import { CardGifsComponent } from './card-gifs/card-gifs.component';
import { VerGifComponent } from './ver-gif/ver-gif.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    PageMainComponent,
    BuscadorComponent,
    CardGifsComponent,
    VerGifComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule
  ],
  exports: [
    PageMainComponent
  ]
})
export class GifsModule { }
