import { Component } from '@angular/core';

@Component({
  selector: 'app-segundo-componente',
  templateUrl: './segundo-componente.component.html',
  styleUrls: ['./segundo-componente.component.css']
})
export class SegundoComponenteComponent {
  nome="Thomas"
  dataNascimento = "01/01/2000"
  urlImagem = "/assets/joao.jpg"

  mostrarDataNascimento(){
    alert(`A data de nascimento do ${this.nome} é ${this.dataNascimento} `)
  }
}
