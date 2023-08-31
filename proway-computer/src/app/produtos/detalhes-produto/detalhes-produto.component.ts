import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IProduto } from 'src/app/produtos';
import { ProdutosServiceService } from 'src/app/produtos-service.service';

@Component({
  selector: 'app-detalhes-produto',
  templateUrl: './detalhes-produto.component.html',
  styleUrls: ['./detalhes-produto.component.css']
})
export class DetalhesProdutoComponent implements OnInit {

  produto : IProduto | undefined;
  quantidade = 1;

  constructor (
    private produtosServiceService: ProdutosServiceService,
    private route: ActivatedRoute
  ){}

  ngOnInit(): void {
      console.log(this.produtosServiceService.getOne(77))
      const routeParams = this.route.snapshot.paramMap;
      const produtoId = Number(routeParams.get("id"));
      this.produto = this.produtosServiceService.getOne(produtoId);
      
  }
  
}
