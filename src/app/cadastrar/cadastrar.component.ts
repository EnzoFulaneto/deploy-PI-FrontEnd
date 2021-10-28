import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { UserLogin } from '../model/UserLogin';
import { Usuario } from '../model/Usuario';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-cadastrar',
  templateUrl: './cadastrar.component.html',
  styleUrls: ['./cadastrar.component.css']
})
export class CadastrarComponent implements OnInit {

  usuario: Usuario = new Usuario
  confirmarSenha: string
  tipoUsuario: string

  constructor(private authService:AuthService, private router:Router) { }

  ngOnInit(){
    window.scroll(0,0)
  }

  confirmeSenha(event: any){
    this.confirmarSenha = event.target.value 
  } 

  tipoUser(event: any){
    this.tipoUsuario = event.target.value
  }

  cadastrar(){
    this.usuario.tipo = this.tipoUsuario

    if(this.usuario.senha != this.confirmarSenha)
    {
      alert('As senhas estão diferentes')
    } else{
      this.authService.cadastrar(this.usuario).subscribe((resp: Usuario) => {
        this.usuario = resp

        environment.tipo = this.usuario.tipo

        this.router.navigate(['/index'])
        alert("♥ Usuario Cadastrado com Sucesso ♥")
      })
    }
  }

}
