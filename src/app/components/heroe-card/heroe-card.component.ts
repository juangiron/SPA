import { Component, OnInit, Input ,Output, EventEmitter} from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-heroe-card',
  templateUrl: './heroe-card.component.html'
})
export class HeroeCardComponent implements OnInit {
  @Input() heroe: any = {};
  @Input() indice: number;

  @Output() heroeSeleccionado: EventEmitter<number>;
    
  constructor(private router: Router) {
  this.heroeSeleccionado = new EventEmitter();
  }

  ngOnInit() {
  }

  verHeroe() {
    // this.heroeSeleccionado.emit( this.indice );  --> solo como ejemplo para el output
    // console.log( this.indice );
     this.router.navigate(['/heroe', this.indice]);
  }

}
