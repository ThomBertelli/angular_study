import { Component, OnInit } from '@angular/core';
import { IProduto,produtos } from '../produtos';
import { ProdutosServiceService } from '../produtos-service.service';



@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.css']
})
export class ProdutosComponent implements OnInit {
  produtos: IProduto[] | undefined

  constructor (
    private produtosServiceService: ProdutosServiceService
  ){ }

  ngOnInit() :void{
    this.produtos = this.produtosServiceService.getAll();
  }

}
