import { Component, OnInit } from '@angular/core';
import { IProduto,produtos } from '../produtos';
import { ProdutosServiceService } from '../produtos-service.service';
import { ActivatedRoute } from '@angular/router';



@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.css']
})
export class ProdutosComponent implements OnInit {
  produtos: IProduto[] | undefined


  constructor (
    private produtosServiceService: ProdutosServiceService,
    private route:ActivatedRoute
  ){ }

  ngOnInit() :void{
    const produtos = this.produtosServiceService.getAll()
    this.route.queryParamMap.subscribe(params =>{
      const descricao = params.get("descricao")?.toLowerCase();

      if(descricao){
        this.produtos = produtos.filter(produto => produto.descricao.toLowerCase().includes(descricao))
        return
      }

      this.produtos= produtos;

    })
  }

}
