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
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  userLogin: UserLogin = new UserLogin
  categoria: CategoriaModel = new CategoriaModel()
  listaCategoria: CategoriaModel[]
  listaProdutos: Produto[]
  produto: Produto = new Produto
  idCategoria: number
  user: Usuario = new Usuario()
  idUser = environment.id

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

      console.log(environment.token)
      console.log(environment.nome)
      console.log(environment.id)
      console.log(environment.tipo)

    
      this.router.navigate (['/index'])
    }, erro => {
      if (erro.status == 500){
        alert('Usuário ou senha estão incorretos :(')
      } else if(erro.status == 409){
        alert('Este nome de usuário já foi utilizado, por favor escolha outro')
      }
      }
    )
  }

  getAllProdutos(){
    this.produtoService.getAllProdutos().subscribe((resp: Produto[]) =>{
      this.listaProdutos = resp
    })
  }
}