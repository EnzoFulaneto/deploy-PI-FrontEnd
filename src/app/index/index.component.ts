import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment.prod';
import { Produto } from '../model/Produto';
import { Usuario } from '../model/Usuario';
import { ProdutoService } from '../service/produto.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  listaProdutos: Produto[]
  usuario: Usuario = new Usuario
  produto: Produto = new Produto()

  constructor(
    public produtoService: ProdutoService,
  ) { }

  ngOnInit() {
    window.scroll(0,0)
    this.getAllProdutos()
  }

  getAllProdutos(){

    this.produtoService.getAllProdutos().subscribe((resp: Produto[]) =>{
      this.listaProdutos = resp
    })
  }

  alimentos(){
    let ok = false

    if(this.produto.categoria == "alimento"){
      ok = true
    }

    return ok
  }

  eletrodomesticos(){
    let ok = false

    if(this.produto.categoria == "eletrodomesticos"){
      ok = true
    }

    return ok
  }
}
