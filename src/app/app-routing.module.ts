import {NgModule} from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageMainComponent } from './gifs/page-main/page-main.component';
import { VerGifComponent } from './gifs/ver-gif/ver-gif.component';

const routes: Routes = [
    {
        path: '',
        component: PageMainComponent,
        pathMatch: 'full'
    },
    {
        path: 'gifs/:id',
        component: VerGifComponent
    },
    {
        path: '**',
        redirectTo: ''
    }
]






@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule {

}