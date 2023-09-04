import { Component, OnInit } from '@angular/core';
import { CarrinhoService } from '../carrinho.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit  {

  qtdItensCarrinho = 0

  constructor(
    public carrinhoService : CarrinhoService
  ){ }

  ngOnInit(): void {
    const qtdItensCarrinho = this.carrinhoService.obtemCarrinho().length
    if(qtdItensCarrinho > 0){
      this.qtdItensCarrinho = qtdItensCarrinho
    }
  }

  

    

}
