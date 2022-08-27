import { Component, OnInit } from '@angular/core';
import { GifsService } from '../services/gifs.service';
import { ActivatedRoute } from '@angular/router';
import { switchMap, tap } from 'rxjs';
import { Gif, GifsResponse } from '../interfaces/gifs.interfaces';

@Component({
  selector: 'app-ver-gif',
  templateUrl: './ver-gif.component.html',
  styles: [
  ]
})
export class VerGifComponent implements OnInit {


  gif: Gif[] = [];

  constructor(private gifsService: GifsService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(){
    this.activatedRoute.params.pipe(
      switchMap(({id})=>this.gifsService.buscarGifId(id)),
      tap(console.log)
    ).subscribe((gif: GifsResponse)=>{
      this.gif = gif.data;
    })
  }

}
