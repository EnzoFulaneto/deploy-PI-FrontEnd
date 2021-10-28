import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { CategoriaModel } from '../model/CategoriaModel';
import { Produto } from '../model/Produto';
import { UserLogin } from '../model/UserLogin';
import { Usuario } from '../model/Usuario';
import { AuthService } from '../service/auth.service';
import { ProdutoService } from '../service/produto.service';


@Component({
  selector: 'app-logado',
  templateUrl: './logado.component.html',
  styleUrls: ['./logado.component.css']
})
export class LogadoComponent implements OnInit {

  nome = environment.nome
  userLogin: UserLogin = new UserLogin
  categoria: CategoriaModel = new CategoriaModel()
  produto: Produto = new Produto
  idCategoria: number
  user: Usuario = new Usuario()
  idUser = environment.id
  listaProdutos: Produto[]

  constructor(
    public auth: AuthService,
    private router: Router,
    private produtoService: ProdutoService
  ) { }

  ngOnInit() {
    window.scroll(0,0)
  }

  entrar() {
    this.auth.entrar(this.userLogin).subscribe((resp: UserLogin)=> {
      this.userLogin = resp

      environment.token = this.userLogin.token
      environment.nome = this.userLogin.nome
      environment.id = this.userLogin.id
    
      this.router.navigate (['/index'])
    }, erro => {
      if (erro.status == 500){
        alert('Usuário ou senha estão incorretos :(')
      }
    })
  }

    publicarProduto(){
    this.produtoService.postProduto(this.produto).subscribe((resp: Produto)=>{
      this.produto = resp

      alert('Produto cadastrado com sucesso!')
      this.produto = new Produto()
      this.getAllProdutos()
    })
   }


   getAllProdutos(){
    this.produtoService.getAllProdutos().subscribe((resp: Produto[]) =>{
      this.listaProdutos = resp
    })
  }
}
