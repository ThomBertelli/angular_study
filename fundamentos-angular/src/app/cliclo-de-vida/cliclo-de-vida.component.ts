import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-cliclo-de-vida',
  templateUrl: './cliclo-de-vida.component.html',
  styleUrls: ['./cliclo-de-vida.component.css']
})
export class ClicloDeVidaComponent implements OnInit, OnChanges{

  horario = new Date();
  timer : any = null!;
  
  @Input() texto = "";


  ngOnInit(): void {
    console.log("O evente OnInit disparou.")
    this.timer = setInterval(()=> this.horario = new Date(), 1000)
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
  }
}
