import { Component, OnInit } from '@angular/core';
import { HeroesService, Heroe } from '../../services/heroes.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html'
})
export class BuscadorComponent implements OnInit {
    heroes: Heroe [] = [];
    texto: string;

    constructor( private _heroesService: HeroesService ,
                 private activatedRoute: ActivatedRoute ) {
        
        }
  
    ngOnInit() {
    this.activatedRoute.params.subscribe( params => {
        // console.log(params['texto']);
        this.texto = params['texto'];
        this.heroes = this._heroesService.buscarHeroe(this.texto);
     console.log(this.heroes);
   });
 }
}



